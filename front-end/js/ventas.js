window.onload = function () {
  fetch('/api/ventas')
    .then(res => res.json())
    .then(data => {
      const cuerpo = document.querySelector('#tabla-ventas tbody');
      cuerpo.innerHTML = '';
      data.forEach(p => {
        cuerpo.innerHTML += `
          <tr>
            <td>${p.nombre}</td>
            <td>${p.vendidas}</td>
            <td>${p.stock}</td>
          </tr>
        `;
      });
    });
};