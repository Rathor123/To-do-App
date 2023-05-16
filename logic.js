const getinput = document.querySelector(".getText");
const ullist = document.querySelector(".ullist");

const btn = document.querySelector(".btn");
let one = 1;
btn.addEventListener("click", () => {
  localStorage.setItem(one, getinput.value);
  if (getinput.value != "") {
    const li = document.createElement("li");

    li.innerHTML = `
    ${localStorage.getItem(one)}
        
  <span class ="remove">
  <i class="fa-solid fa-xmark"></i>
  </span>

  `;
    ullist.appendChild(li);
    one++;
    getinput.value = "";
  }
});
ullist.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("red");
  } else if (e.target.tagName == "I") {
    e.target.parentElement.parentElement.remove();
  }
});
