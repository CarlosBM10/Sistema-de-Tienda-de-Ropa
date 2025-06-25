use tiendaRopa; // Selecciona o crea la base de datos

// ===================
// Insertar documentos
// ===================

// Usuarios
db.usuarios.insertOne({
  nombre: "Carlos Hernández",
  correo: "carlos@ejemplo.com",
  rol: "administrador"
});

// Marcas
db.marcas.insertMany([
  { nombre: "UrbanStyle", pais_origen: "Costa Rica" },
  { nombre: "Elegance", pais_origen: "Italia" }
]);

// Prendas
db.prendas.insertMany([
  { nombre: "Pantalón Slim", precio: 25000, marca_id: ObjectId("..."), stock: 15 },
  { nombre: "Blusa Floral", precio: 18000, marca_id: ObjectId("..."), stock: 10 }
]);

// Ventas
db.ventas.insertOne({
  usuario_id: ObjectId("..."),
  fecha: new Date("2025-06-24"),
  productos: [
    { prenda_id: ObjectId("..."), cantidad: 2 }
  ],
  total: 50000
});

// ==========================
// Ejemplo de actualización
// ==========================
db.prendas.updateOne(
  { nombre: "Pantalón Slim" },
  { $set: { stock: 12 } }
);

// ==========================
// Ejemplo de eliminación
// ==========================
db.usuarios.deleteOne({ correo: "carlos@ejemplo.com" });


// ==========================
// Consultas solicitadas
// ==========================

// 1. Cantidad vendida por fecha específica
// Muestra las prendas vendidas en una fecha específica y su cantidad total
db.ventas.aggregate([
  { $match: { fecha: ISODate("2025-06-24") } },
  { $unwind: "$productos" },
  { $group: {
      _id: "$productos.prenda_id",
      total_vendida: { $sum: "$productos.cantidad" }
  }}
]);

// 2. Marcas que tienen al menos una venta
// Identifica marcas asociadas a prendas que han sido vendidas
db.ventas.aggregate([
  { $unwind: "$productos" },
  {
    $lookup: {
      from: "prendas",
      localField: "productos.prenda_id",
      foreignField: "_id",
      as: "detalle_prenda"
    }
  },
  { $unwind: "$detalle_prenda" },
  {
    $lookup: {
      from: "marcas",
      localField: "detalle_prenda.marca_id",
      foreignField: "_id",
      as: "marca_vendida"
    }
  },
  { $unwind: "$marca_vendida" },
  { $group: { _id: "$marca_vendida.nombre" } }
]);

// 3. Prendas vendidas + stock restante
db.ventas.aggregate([
  { $unwind: "$productos" },
  {
    $group: {
      _id: "$productos.prenda_id",
      cantidad_vendida: { $sum: "$productos.cantidad" }
    }
  },
  {
    $lookup: {
      from: "prendas",
      localField: "_id",
      foreignField: "_id",
      as: "detalle"
    }
  },
  { $unwind: "$detalle" },
  {
    $project: {
      nombre: "$detalle.nombre",
      cantidad_vendida: 1,
      stock_restante: "$detalle.stock"
    }
  }
]);

// 4. Top 5 marcas más vendidas
db.ventas.aggregate([
  { $unwind: "$productos" },
  {
    $lookup: {
      from: "prendas",
      localField: "productos.prenda_id",
      foreignField: "_id",
      as: "prenda"
    }
  },
  { $unwind: "$prenda" },
  {
    $group: {
      _id: "$prenda.marca_id",
      total_vendido: { $sum: "$productos.cantidad" }
    }
  },
  {
    $lookup: {
      from: "marcas",
      localField: "_id",
      foreignField: "_id",
      as: "marca"
    }
  },
  { $unwind: "$marca" },
  { $project: { nombre_marca: "$marca.nombre", total_vendido: 1 } },
  { $sort: { total_vendido: -1 } },
  { $limit: 5 }
]);
