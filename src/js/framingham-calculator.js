const form = document.getElementById('calculator');

form.addEventListener('submit', handleSubmit );

function handleSubmit(event) {
    event.preventDefault(); // prevent submission of the form to server and reload of page

    const age = form['age'].value;
    const gender = form['gender'].value;
    const tc = form['tc'].value;
    const hdl = form['hdl'].value;
    const bp = form['bp'].value;
    const diabetic = form['diabetic'].value;
    const smoke = form['smoke'].value;

    console.log(`age is ${age}`);

    const crs = calculate(form);
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
    let crs = 0;

   switch(gender) {

        case 'male':
            //calculation for male respondent
            if ( age < 34 ) {

                else if (age < )
            }


            break;

        case 'female':
            //calculation for female respondent
            break;
   } 

}