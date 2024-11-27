let emailInpet = document.getElementById("floatingInput");
let passwordInpet = document.getElementById("floatingPassword");
let addlogin = document.getElementById("btnLogin");

let removeInput = document.getElementById("valdichenInput");
let addInput = document.getElementById("addInput");

let productList = JSON.parse(localStorage.getItem("productContainer"));

addlogin.addEventListener("click", function () {
  let product = {
    email: emailInpet.value,
    password: passwordInpet.value,
  };

  if (
    productList[0].email == product.email &&
    productList[0].password == product.password
  ) {
    location.assign("http://127.0.0.1:5500/smartlogin.html");
    
  } else {
    removeInput.classList.remove("d-none");
  }
  console.log(productList);
  clearform();
});

function clearform() {
  emailInpet.value = null;
  passwordInpet.value = null;
}



