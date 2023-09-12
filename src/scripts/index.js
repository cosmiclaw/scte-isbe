/*=============================================
=            Mobile Navigation Menu           =
=============================================*/

const mobile_menu_button = document.querySelector(".menu-icon");
const mobile_close_button = document.querySelector(".close-menu");
const mobile_menu = document.querySelector(".mobile");

function toggleMenu() {
  mobile_menu.classList.toggle("active");
}

mobile_menu_button.addEventListener("click", (e) => {
  e.preventDefault();

  toggleMenu();
});

mobile_close_button.addEventListener("click", (e) => {
  e.preventDefault();

  toggleMenu();
});
/*=====  End of Mobile Navigation Menu  ======*/

/*=============================================
=            Custom Select                    =
=============================================*/

let selectContainer = document.querySelector(".select-container");
let select = document.querySelector(".select");
let input = document.getElementById("input");
let options = document.querySelectorAll(".select-container .option");

select.onclick = () => {
  selectContainer.classList.toggle("active");
};

options.forEach((e) => {
  e.addEventListener("click", () => {
    input.value = e.innerText;
    selectContainer.classList.remove("active");
    options.forEach((e) => {
      e.classList.remove("selected");
    });
    e.classList.add("selected");
  });
});
