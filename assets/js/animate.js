// Wrap every letter in a span
var textWrapper = document.querySelector('.animate-text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.animate-text .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.animate-text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });