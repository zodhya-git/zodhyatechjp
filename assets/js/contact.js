document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_buj4qoj', 'template_kc16rla', '#contact-form')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("success").innerHTML = "できるだけ早くご連絡いたします。"
            document.getElementById('contact-form').reset();
        }, function (error) {
            document.getElementById("alert").innerHTML = "何かが間違っていた！。 他のソーシャル・ハンデルを通じてご連絡ください。"
            console.log('FAILED...', error);
        });

});

const scriptURL = 'https://script.google.com/macros/s/AKfycbylI_4YgXxR9VIoXQNHhCvpQPQGxkBinYmpKFqbNNt_mHOLvamgvHiTT0HPCnRjKFfR/exec'
const form = document.getElementById('contact-form')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
})