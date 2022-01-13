const form = document.getElementById('calculator');

form.addEventListener('submit', handleSubmit );

function handleSubmit(event) {
    event.preventDefault(); // prevent submission of the form to server and reload of page

    console.log(`age is ${age}`);

    const crs = calculate(form);

    const result = document.querySelector("#result");
    result.innerHTML = `<h2> Your Framingham Cardiac Risk Score is ${crs}</h2>`;
}

function calculate(frm) {

    //grab all parameters
    const age = frm['age'].value;
    const gender = frm['gender'].value;
    const tc = frm['tc'].value;
    const hdl = frm['hdl'].value;
    const bp = frm['bp'].value;
    const diabetic = frm['diabetic'].value;
    const smoke = frm['smoke'].value;
    let crs = 0; // Coronary Heard disease risk score

    // check if age is greater than 30 and less than 75

   switch( gender ){

        case 'male':
            // Calculation for male respondent
            if( age < 34 ){ // Add score for age
                    crs += -1;
            } else if( age <= 39 ){
                crs += 0;
            } else if( age <= 44 ){
                crs += 1;
            } else if( age <= 49 ){
                crs += 2;
            } else if( age <= 54 ){
                crs += 3;
            } else if( age <= 59 ){
                crs += 4;
            } else if( age <= 64 ){
                crs += 5;
            } else if( age <= 69 ){
                crs += 6;
            } else if( age <= 74 ){
                crs += 7;
            };

            if( tc < 160 ){ // Add total cholestrol score
                crs += -3;
            } else if( tc <= 199 ){
                crs += 0;
            } else if( tc <= 239 ){
                crs += 1;
            } else if ( tc <= 279 ){
                crs += 2;
            } else if( tc > 280 ){
                crs += 3;
            };

            if( hdl < 35 ){ // Add score for HDL
                crs += 2;
            } else if( hdl <= 44 ){
                crs += 1;
            } else if( hdl <= 49 ){
                crs += 0;
            } else if( hdl <= 59 ){
                crs += 0;
            } else if( hdl >= 60 ){
                crs += -2; 
            };

            if( bp < 120 ){ // Add score for systolic blood pressure
                crs += 0;
            } else if( bp <= 129 ){
                crs += 0;
            } else if( bp <= 139 ){
                crs += 1;
            } else if( bp <= 159 ){
                crs += 2;
            } else if( bp >= 160 ){
                crs += 3;
            };

            if( diabetic === "yes" ){ // Add diabetes score
                crs += 2;
            };

            if( smoke === "yes" ){ // Add smoking score
                crs += 2;
            };
            break;

        case 'female':
            //calculation for female respondent
            if( age < 34 ){ // Add score for age
                crs += -9;
            } else if( age <= 39 ){
                crs += -4;
            } else if( age <= 44 ){
                crs += 0;
            } else if( age <= 49 ){
                crs += 3;
            } else if( age <= 54 ){
                crs += 6;
            } else if( age <= 59 ){
                crs += 7;
            } else if( age <= 64 ){
                crs += 8;
            } else if( age <= 69 ){
                crs += 8;
            } else if( age <= 74 ){
                crs += 8;
            };

        if( tc < 160 ){ // Add total cholestrol score
                crs += -2;
            } else if( tc <= 199 ){
                crs += 0;
            } else if( tc <= 239 ){
                crs += 1;
            } else if ( tc <= 279 ){
                crs += 1;
            } else if( tc > 280 ){
                crs += 3;
            };

            if( hdl < 35 ){ // Add score for HDL
                crs += 5;
            } else if( hdl <= 44 ){
                crs += 2;
            } else if( hdl <= 49 ){
                crs += 1;
            } else if( hdl <= 59 ){
                crs += 0;
            } else if( hdl >= 60 ){
                crs += -3; 
            };

        if( bp < 120 ){ // Add score for systolic blood pressure
                crs += -3;
            } else if( bp <= 129 ){
                crs += 0;
            } else if( bp <= 139 ){
                crs += 0;
            } else if( bp <= 159 ){
                crs += 2;
            } else if( bp >= 160 ){
                crs += 3;
            };

        if( diabetic === "yes" ){ // Add diabetes score
                crs += 4;
            };

        if( smoke === "yes" ){ // Add smoking score
                crs += 2;
            };
            break;
   } 
   return crs;

}