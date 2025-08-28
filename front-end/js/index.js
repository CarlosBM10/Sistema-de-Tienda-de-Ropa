window.onload = function () {
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
          </tr>
        `;
      });
    });
};