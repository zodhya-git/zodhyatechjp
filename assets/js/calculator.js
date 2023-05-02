// convert the form to JSON
const getFormJSON = (form) => {
  const data = new FormData(form);
  return Array.from(data.keys()).reduce((result, key) => {
    if (result[key]) {
      result[key] = data.getAll(key)
      return result
    }
    result[key] = data.get(key);
    return result;
  }, {});
};

const thisForm = document.getElementById('calculatorForm');
thisForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  // const formData = new FormData(thisForm).entries()
  try {

    document.querySelector("#alert").style.display = "none"
    document.querySelector("#alert-co2").style.display = "none"
    document.querySelector("#alert-contact").style.display = "none"
    document.querySelector(".preload").style.display = "block"
    init();


    // const response = await fetch('https://zodhyatech.pythonanywhere.com/calculate', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(Object.fromEntries(formData))
    // });

    // const result = await response.json();

    const result = getFormJSON(thisForm);
    document.querySelector(".preload").style.display = "none"
    // var saver = result[0]
    // var saver=result.capacity_of_HVAC* result.size_of_building * 12  * 240 
    
    var saver = result.last_month_bill

    
    saver = Math.ceil(saver / 100) * 100
   
    CUnit = (saver * 0.30) / 12
    Carbon_emission_saved = Math.trunc(CUnit * 0.82)

    document.querySelector("#alert").style.display = "block"
    document.querySelector("#alert-co2").style.display = "block"
    document.querySelector("#alert-contact").style.display = "block"

    document.getElementById("alert").innerHTML = `Using our “Saver” you can save upto INR ${new Intl.NumberFormat('en-IN').format(Math.trunc(saver * 0.25))} - INR ${new Intl.NumberFormat('en-IN').format(Math.trunc(saver * 0.35))} every month.`
    document.getElementById("alert-co2").innerHTML = `Reduce <strong>${Carbon_emission_saved}Kg CO2 </strong>emissions monthly.`

    document.getElementById("alert-contact").innerHTML = `To know more <a href="mailto:contact@zodhyatech.com" style="color: #f0842c ;">Contact Us</a>`
    // thisForm.reset();
  } catch (error) {
    console.log(error);
  }

});




const loader = document.querySelector('.preload');
const emoji = loader.querySelector('.emoji');

const emojis = ["🕐", "🕑", "🕒", "🕓", "🕔", "🕔", "🕓", "🕕", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢", "🕗", "🕣", "🕘", "🕤", "🕙", "🕥", "🕚", "🕦", "🕛", "🕧"];
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