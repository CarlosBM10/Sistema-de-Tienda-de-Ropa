window.onload = function () {
  fetch('/api/marcas-con-ventas')
    .then(res => res.json())
    .then(data => {
      const lista = document.getElementById('lista-marcas');
      lista.innerHTML = '';
      data.forEach(m => {
        lista.innerHTML += `<li>${m._id}</li>`;
      });
    });
};