let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
}
function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}
function renderInput() {
  const input = document.getElementById("inputName").value || "anónimo";
  const output = document.getElementById("output");
  output.innerHTML = `<pre>{% assign nombre = "${input}" %}<br>Hola, ${input.charAt(0).toUpperCase() + input.slice(1)}.</pre>`;
}

document.addEventListener("DOMContentLoaded", () => showPage(currentPage));
