🧵 Tienda de Ropa — Proyecto Académico
Desarrollado por: Carlos
Universidad: Florencio del Castillo
Curso: Plataformas Abiertas



📌 Descripción del Proyecto
Este sistema web permite gestionar prendas de ropa, visualizar estadísticas de ventas y consultar información de marcas. Está desarrollado con tecnologías abiertas y cumple con los requisitos académicos del curso.


🧰 Tecnologías Utilizadas
- Frontend: HTML, CSS, JavaScript (AJAX con fetch)
- Backend: Flask (Python)
- Base de datos: MongoDB
- Herramientas de validación: Postman, MongoDB Compass


proyecto-final/
├── API/
│   ├── app.py
│   ├── db.py
│   └── routes/
│       ├── prendas.py
│       ├── marcas.py
│       └── estadisticas.py
├── front-end/
│   ├── index.html
│   ├── prendas.html
│   ├── marcas.html
│   ├── ventas.html
│   ├── top-marcas.html
│   ├── js/
│   │   ├── index.js
│   │   ├── prendas.js
│   │   ├── marcas.js
│   │   ├── ventas.js
│   │   └── top-marcas.js
│   └── css/
│       └── estilos.css
├── scripts/
│   ├── init_prendas.json
│   ├── init_marcas.json
│   ├── todos_los_datos.json
│   ├── marcas_con_ventas.json
│   ├── prendas_vendidas_stock.json
│   └── top_5_marcas.json
└── README.md


🚀 Instalación y Ejecución
- Instala Python 3.10+ y MongoDB localmente.

- Instala dependencias:
pip install flask pymongo



- Base de datos: ropa
- Colecciones: prendas y marcas
- Archivos: init_prendas.json y init_marcas.json
- - Importa los datos en MongoDB Compass:




- Ejecuta el servidor Flask:

cd API
python app.py



📁 Scripts JSON
Los archivos en la carpeta scripts/ permiten importar datos y simular respuestas:
- init_prendas.json → Datos iniciales de prendas
- init_marcas.json → Datos iniciales de marcas
- todos_los_datos.json → Simulación de /api/prendas
- marcas_con_ventas.json → Simulación de /api/marcas-con-ventas
- prendas_vendidas_stock.json → Simulación de /api/ventas
- top_5_marcas.json → Simulación de /api/top-marcas

✅ Validación Técnica
- Endpoints funcionales y conectados a MongoDB
- AJAX implementado en todas las vistas
- Datos cargados automáticamente
- Estilos visuales aplicados
- Validado con Postman y MongoDB Compass





