const menuBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".menu-close");
const mobileNav = document.querySelector(".mobile-nav");
const navItems = document.querySelectorAll(".nav-item:not(.your-stay)");
const bookingBtns= document.querySelectorAll(".booking-button");
const copyButton=document.querySelector(".copy-button");

const wifiPassword = document.querySelector(".wifi-password");

function toggleActive(items, item) {
  const isActive = item.classList.contains("active");

  items.forEach((element) => {
    element.classList.remove("active");
  });

  if (!isActive) {
    item.classList.add("active");
  }
}

/* Navigation */
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    toggleActive(navItems, item);
  });
});


/* Booking buttons */
bookingBtns.forEach((button) => {
  button.addEventListener("click", () => {
    toggleActive(bookingBtns, button);
  });
});

/* Copy button */

copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(wifiPassword.textContent);

  copyButton.classList.add("active");
  copyButton.textContent = "Copied!";

  setTimeout(() => {
    copyButton.classList.remove("active");
    copyButton.textContent = "Copy";
  }, 1000);
});




/* Mobile menu */

const setOpen = (open) => {
    menuBtn.classList.toggle("mobile-overlay", open);
    closeBtn.classList.toggle("mobile-overlay", open);
    mobileNav.classList.toggle("mobile-overlay", open);
    document.body.classList.toggle("menu-open", open);
};
menuBtn.addEventListener("click",()=>{
    setOpen(true);
});
closeBtn.addEventListener("click",()=>{
    setOpen(false);
});
const desktopMedia = window.matchMedia("(min-width: 48rem)");


/* Close menu when switching to desktop */

desktopMedia.addEventListener("change", (event) => {
  if (event.matches) {
    setOpen(false);
  }
});
