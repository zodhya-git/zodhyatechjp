const backthisForm = document.getElementById('calculatorForm');
backthisForm.addEventListener('submit', async function (f) {
  f.preventDefault();
  const backformData = new FormData(backthisForm).entries()
  
  try {    
    const storeResponse = await fetch('https://parseapi.back4app.com/classes/CalculationParameters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': '45ikCkMaeJxB4Q6QtqkOWo7TSyGamtLfCMZVTA7u',
        'X-Parse-REST-API-Key': 'p9ipUyohegv2gPqB6yclblTW7gRhHsmnYDgt6L1v'
      },
      body: JSON.stringify(Object.fromEntries(backformData))

    });
    
  } catch (error) {
    console.log(error);
  }

});
