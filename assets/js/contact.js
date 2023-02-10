document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_buj4qoj', 'template_kc16rla', '#contact-form')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("success").innerHTML = "We got your message. Will contact you as soon as possible."
            document.getElementById('contact-form').reset();
        }, function (error) {
            document.getElementById("alert").innerHTML = "Something Went Wrong !!!. Please Contact via other social Handels."
            console.log('FAILED...', error);
        });

});