 let welcomeName = document.getElementById('welcomeName');
let ahmed = JSON.parse(localStorage.getItem("productContainer"));
welcomeName.innerHTML = ahmed[0].name;


