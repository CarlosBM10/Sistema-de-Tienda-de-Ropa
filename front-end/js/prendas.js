function cargarPrendas() {
  fetch('/api/prendas')
    .then(res => res.json())
    .then(data => {
      const cuerpo = document.querySelector('#tabla-prendas tbody');
      cuerpo.innerHTML = '';
      data.forEach(p => {
        cuerpo.innerHTML += `
          <tr>
            <td>${p.nombre}</td>
            <td>${p.marca}</td>
            <td>₡${p.precio}</td>
            <td>${p.stock}</td>
            <td>${p.vendidas}</td>
            <td>
              <button onclick='eliminarPrenda("${p.nombre}")'>Eliminar</button>
            </td>
          </tr>
        `;
      });
    });
}

document.getElementById('form-prenda').addEventListener('submit', function(e) {
  e.preventDefault();
  const nueva = {
    nombre: document.getElementById('nombre').value,
    marca: document.getElementById('marca').value,
    precio: parseInt(document.getElementById('precio').value),
    stock: parseInt(document.getElementById('stock').value),
    vendidas: parseInt(document.getElementById('vendidas').value)
  };

  fetch('/api/prendas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nueva)
  })
  .then(() => {
    cargarPrendas();
    this.reset();
  });
});

function eliminarPrenda(nombre) {
  fetch(`/api/prendas/${nombre}`, { method: 'DELETE' })
    .then(() => cargarPrendas());
}

window.onload = cargarPrendas;