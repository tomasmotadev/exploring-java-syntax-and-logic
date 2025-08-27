// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

//
// Mobile Menu
//
// Menu mobile toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Dropdown Photography
const mobilePhotoBtn = document.getElementById('mobile-photography-btn');
const mobilePhotoMenu = document.getElementById('mobile-photography-menu');

mobilePhotoMenu.style.display = 'none';
mobilePhotoBtn.classList.remove('active');

mobilePhotoBtn.addEventListener('click', () => {
  const isOpen = mobilePhotoMenu.style.display === 'block';
  mobilePhotoMenu.style.display = isOpen ? 'none' : 'block';
  mobilePhotoBtn.classList.toggle('active', !isOpen);
});

// Dropdown Contact
const mobileContactBtn = document.getElementById('mobile-contact-btn');
const mobileContactMenu = document.getElementById('mobile-contact-menu');

mobileContactMenu.style.display = 'none';
mobileContactBtn.classList.remove('active');

mobileContactBtn.addEventListener('click', () => {
  const isOpen = mobileContactMenu.style.display === 'block';
  mobileContactMenu.style.display = isOpen ? 'none' : 'block';
  mobileContactBtn.classList.toggle('active', !isOpen);
});
// **Discount Calculator Logic (JavaScript)**
function calcularDesconto() {
    // Get the value entered by the user in the input field.
    const valorCompraInput = document.getElementById('valorCompra').value;
    const valor = parseFloat(valorCompraInput);
    const resultadoDiv = document.getElementById('resultado');
  
    // Check if the value is a valid number.
    if (isNaN(valor) || valor < 0) {
        resultadoDiv.textContent = "Please enter a valid value.";
        resultadoDiv.style.color = "var(--c-red)";
    return;
    }
    let descontoPercentual;
    // Apply the same discount logic as your Java code.
    if (valor < 50.00) {
        descontoPercentual = 0;
    } else if (valor >= 50.00 && valor <= 100.00) {
        descontoPercentual = 10;
    } else {
        descontoPercentual = 20;
    }

    // Display the result on the page.
    resultadoDiv.textContent = `Discount of ${descontoPercentual}%`;
    resultadoDiv.style.color = "var(--c-blue)";
}
