// top-marcas.js
fetch('/api/top-marcas')
  .then(res => res.json())
  .then(data => {
    const lista = document.getElementById('lista-top');
    lista.innerHTML = '';
    data.forEach(m => {
      lista.innerHTML += `<li>${m._id}: ${m.total_vendidas} ventas</li>`;
    });
  });