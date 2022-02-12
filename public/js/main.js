$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

// contact data

const contactForm = document.querySelector(".contact-form");
const fullName = document.querySelector(".full-name");
const emailAddress = document.querySelector(".email-adress");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");
const submit = document.querySelector(".submit-form");
const modul = document.querySelector(".modul-wrap");
const close = document.querySelector(".modul-close");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  modul.classList.toggle("display-none");
  // app.collection("contact-form")
  // .doc()
  // .set({
  //   fullName: fullName.value,
  //   email: emailAddress.value,
  //   subject: subject.value,
  //   message: message.value,
  // })
  // .then(() => {
  //   contactForm.reset();
  //   modul.classList.toggle("display-none");
  // });
});

close.addEventListener("click", () => {
  modul.classList.toggle("display-none");
});
