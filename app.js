let ocinput = document.getElementById("OC-Input");
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const parent = e.target.parentNode;
    ocinput.value = parent.getElementsByTagName("h2")[0].innerText;
    e.preventDefault();
    e.stopPropagation();
  });
});
