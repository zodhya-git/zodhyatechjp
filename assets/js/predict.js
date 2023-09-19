  const optimalForm = document.getElementById('optimalForm');
  optimalForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    // const result = getFormJSON(optimalForm);

    const formData = new FormData(optimalForm).entries()
    try {
      const response = await fetch('https://yashwanthzodhya.pythonanywhere.com/predict_api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
      });
  
      const result = await response.json();
      console.log(result)

      
    mode_object = {
        0:'auto',
        1:'fan',
        2:'dry',
        3:'cool',
    }

    fan_speed_object = {
        0:'auto',
        1:'quiet',
        2:'low',
        3:'medium',
        4:'high',
    }
    
    let mode_setting=mode_object[result.output1]
    let setpoint_setting=result.output2
    let fan_setting= fan_speed_object[result.output3]
    
    let showdata=`Predicted AC Settings: Mode: ${mode_setting}, Setpoint: ${setpoint_setting}.0, Fan: ${fan_setting}`
    document.getElementById('optimalresult').innerHTML=showdata
    } catch (error) {
      console.log(error);
    }
  
  });
  
  
