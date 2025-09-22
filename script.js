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

// Funny comment button
const funnyButton = document.getElementById("funny-comment-btn");
const funnyOutput = document.getElementById("funny-comment-output");
const funnyComments = [
  "Why did the dog sit in the shade? Because it did not want to be a hot dog!",
  "Cats run the internet; we are just paying the Wi-Fi bill.",
  "Our treats are so good, squirrels keep trying to open savings accounts with them.",
  "Warning: Buying toys here may result in uncontrollable tail wagging.",
  "Birds love our store. They say the tweets are five stars."
];

if (funnyButton && funnyOutput) {
  funnyButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * funnyComments.length);
    funnyOutput.textContent = funnyComments[randomIndex];
  });
}
