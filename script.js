// Cart functionality
let cartCount = 0;
const cartBtn = document.getElementById("cart-btn");
const cartCountSpan = document.getElementById("cart-count");
const addCartBtns = document.querySelectorAll(".add-cart");

// Add items to cart
addCartBtns.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountSpan.textContent = cartCount;
    alert(`${button.dataset.product} added to cart!`);
  });
});

// Contact form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting us! We’ll get back to you soon.");
  contactForm.reset();
});
