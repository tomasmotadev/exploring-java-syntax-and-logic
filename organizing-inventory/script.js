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

// **Stock Organizer Logic (JavaScript)**
function organizeStock() {
    const input = document.getElementById('stockInput').value;
    const resultDiv = document.getElementById('result');
    
    // Validate the input to avoid errors
    if (!input.trim()) {
        resultDiv.textContent = "Please enter stock data.";
        resultDiv.style.color = "var(--c-red)";
        return;
    }

    // Use a Map to store the total for each code.
    // The JavaScript Map maintains insertion order, just like Java's LinkedHashMap.
    const stock = new Map();

    const items = input.split(',');

    for (const item of items) {
        const parts = item.trim().split(':');
        // Validate if the format is correct
        if (parts.length !== 2) {
            resultDiv.textContent = "Invalid format. Use 'code:quantity' (e.g., IPHONE:5,SAMSUNG:10).";
            resultDiv.style.color = "var(--c-red)";
            return;
        }

        const code = parts[0].trim().toUpperCase(); // Normalize the code
        const quantity = parseInt(parts[1].trim());

        // Validate if the quantity is a number
        if (isNaN(quantity)) {
            resultDiv.textContent = `The quantity for '${code}' is not a valid number.`;
            resultDiv.style.color = "var(--c-red)";
            return;
        }
        
        // Update the total quantity in the map
        stock.set(code, (stock.get(code) || 0) + quantity);
    }
    
    // Build the output string
    const outputParts = [];
    for (const [code, quantity] of stock) {
        outputParts.push(`${code}:${quantity}`);
    }

    resultDiv.textContent = outputParts.join(',');
    resultDiv.style.color = "var(--c-blue)";
}
