// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Mobile contact dropdown menu
const mobileContactBtn = document.getElementById('mobile-contact-btn');
const mobileContactMenu = document.getElementById('mobile-contact-menu');
if (mobileContactBtn && mobileContactMenu) {
    mobileContactBtn.addEventListener('click', () => {
        mobileContactMenu.style.display =
            mobileContactMenu.style.display === 'block' ? 'none' : 'block';
    });
}

// Mobile photography dropdown menu
const mobilePhotoBtn = document.getElementById('mobile-photography-btn');
const mobilePhotoMenu = document.getElementById('mobile-photography-menu');
if (mobilePhotoBtn && mobilePhotoMenu) {
    mobilePhotoBtn.addEventListener('click', () => {
        mobilePhotoMenu.style.display =
            mobilePhotoMenu.style.display === 'block' ? 'none' : 'block';
    });
}

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
