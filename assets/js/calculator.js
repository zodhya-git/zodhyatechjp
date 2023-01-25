const thisForm = document.getElementById('calculatorForm');
thisForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(thisForm).entries()
  try {
    document.querySelector(".preload").style.display = "block"
    init();
    const response = await fetch('https://zodhyatech.pythonanywhere.com/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData))
    });

   
    const result = await response.json();
    document.querySelector(".preload").style.display = "none"
    var saver = result[0]
    alert(` You can save upto INR. ${parseFloat(saver).toFixed(2)} \n For more info contact Us.`)
    document.getElementById("alert").innerHTML = `You can save upto INR.${parseFloat(saver).toFixed(2)} <br> For more info. <a href="https://zodhyatech.com/contact.html">Contact Us.</a>`
    thisForm.reset();

  } catch (error) {
    console.log(error);
  }

});

const loader = document.querySelector('.preload');
const emoji = loader.querySelector('.emoji');

const emojis = ["🕐", "🕜", "🕑","🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢",  "🕗", "🕣", "🕘", "🕤", "🕙",  "🕥", "🕚", "🕦",  "🕛", "🕧"];

const interval = 125;

const loadEmojis = (arr) => {
    setInterval(() => {
      emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
      //console.log(Math.floor(Math.random() * arr.length))
    }, interval);
}

const init = () => {
  loadEmojis(emojis);
}