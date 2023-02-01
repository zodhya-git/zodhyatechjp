const thisForm = document.getElementById('calculatorForm');
thisForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(thisForm).entries()
  try {

    document.querySelector("#alert").style.display = "none"
    document.querySelector("#alert-contact").style.display = "none"

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
    saver = Math.ceil(saver / 100) * 100

    document.querySelector("#alert").style.display = "block"
    document.querySelector("#alert-contact").style.display = "block"

    document.getElementById("alert").innerHTML = `Using our “Saver” you can save upto INR ${new Intl.NumberFormat('en-IN').format(Math.trunc(saver * 0.25))} - INR ${new Intl.NumberFormat('en-IN').format(Math.trunc(saver * 0.35))} every month.`
    document.getElementById("alert-contact").innerHTML = `For more info.<a href="https://zodhyatech.com/contact.html">Contact Us</a>`
    // thisForm.reset();
  } catch (error) {
    console.log(error);
  }

});

const loader = document.querySelector('.preload');
const emoji = loader.querySelector('.emoji');

const emojis = ["🕐", "🕜", "🕑", "🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢", "🕗", "🕣", "🕘", "🕤", "🕙", "🕥", "🕚", "🕦", "🕛", "🕧"];

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