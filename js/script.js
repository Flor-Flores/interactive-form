//focuses on the first form field when page is loaded
window.onload = function() {
  document.getElementById('name').focus();
    const job_other = document.getElementById('other-title').style.display = "none";
}

//changes text from Color to "Please select a T-shirt theme."
const colorLabel = document.querySelector('.shirt-colors label');
    colorLabel.innerText = "Please select a T-shirt theme.";
// creates 2 arrays for the different color sets.
const color = document.querySelector("#color");
const colors = document.querySelectorAll("#color option");
const punColors = [];
const heartColors= [];
// loops through the Design option and checks to its value to determine which colors array to display. 
for (let i = 0; i < colors.length; i++){
    const colorInnerText = colors[i].innerText.toLowerCase();
    const punColor = colorInnerText.includes("puns");
    const heartColor = colorInnerText.includes("♥");
    if(punColor){
        punColors.push(colors[i])
    }else if(heartColor){
        heartColors.push(colors[i])
    }
}   

// function to loop through colorset array
function colorFiller(colorset){
    for (let i = 0; i < colorset.length; i++){
            color.appendChild(colorset[i]);
        }
};

// function to empty colorset field.
function removeColorFilter(){
    color.innerHTML = '';
}

// event handler looking for changes on the design theme. populates the Color Select Options. 
document.getElementById("design").addEventListener("change", e =>{
    let designSelection = e.target.value;
    if(designSelection === "heart js"){ 
        removeColorFilter();
        colorFiller(heartColors)
        colorLabel.innerText = "Color";   
    }
    if(designSelection === "js puns"){ 
        removeColorFilter()
        colorFiller(punColors)
        colorLabel.innerText = "Color";   
    }
    if(designSelection === "Select Theme"){ 
        removeColorFilter()
        colorLabel.innerText = "Please select a T-shirt theme.";   
    }
});


let activityTotalDiv = document.createElement("div");
const activity = document.querySelector('.activities');
let totalActivityCost = 0;
const totalString =`Total: $ ${totalActivityCost}`;
    activityTotalDiv.innerHTML = totalString;
    activity.appendChild(activityTotalDiv);


//event handler looking for changes in the activity section;

activity.addEventListener('change', (e) => {
    let isCheck = e.target.checked;
    let checkedCost = parseInt(e.target.getAttribute('data-cost'));
    const activityLabels = document.querySelectorAll('.activities label input');

//this conditional calculates the totalActivityCost;
    if(isCheck === true) {
        totalActivityCost += checkedCost;
        activityTotalDiv.innerHTML = `Total: $ ${totalActivityCost}`;
    }else if(isCheck === false){
        totalActivityCost -= checkedCost;
        activityTotalDiv.innerHTML = `Total: $ ${totalActivityCost}`;
    }
    const clicked = e.target;
    const checked = clicked.checked;
    const checkedTime = clicked.getAttribute('data-day-and-time');
 
// if an activity is checked. it loops through the rest and disables any activity that happens at the same time.
// if this activity changes from  checked to unchecked, it loops though and enables the previously disabled boxes.
    for (let i = 0; i <activityLabels.length; i++) {

        if(checked === true) {
            if(activityLabels[i].getAttribute('data-day-and-time') === checkedTime && activityLabels[i] !== clicked){
                activityLabels[i].disabled = true;
            }
        } else if(checked === false && activityLabels[i].checked === false && activityLabels[i].getAttribute('data-day-and-time') === checkedTime){
            activityLabels[i].disabled = false;
        }
    }
});


//payments
const payments = document.querySelector('#payment');
const creditCard = document.querySelector("#payment [value='credit card']" );
const paypal = document.querySelector("#payment [value='paypal']" );
const bitcoin = document.querySelector("#payment [value='bitcoin']" );

// sets Credit Card payment as default. and hides others
creditCard.selected = true;

const creditCardDiv = document.querySelector('#credit-card');
const paypalDiv = document.querySelector("#paypal" );
const bitcoinDiv = document.querySelector("#bitcoin" );

paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';
// listens to changes in the payment selection and displays the corresponding selected payment field.
payments.addEventListener('change', (e) => {
    paymentSelection = e.target.value;
    if (paymentSelection === creditCard.value ){
        creditCardDiv.style.display = 'block';
        paypalDiv.style.display = 'none';
        bitcoinDiv.style.display = 'none';
    }else if(paymentSelection === paypal.value){
        creditCardDiv.style.display = 'none';
        paypalDiv.style.display = 'block';
        bitcoinDiv.style.display = 'none';
    }else if(paymentSelection === bitcoin.value){
        creditCardDiv.style.display = 'none';
        paypalDiv.style.display = 'none';
        bitcoinDiv.style.display = 'block';
    }
});

const form = document.querySelector("form");
const name = document.querySelector("#name");

//Divs to display each error.
const errorName = document.createElement("div"); 
const errorEmail = document.createElement("div"); 
const errorActivities = document.createElement("div"); 
const errorCreditCardNum = document.createElement("div"); 
const errorCreditCardZip = document.createElement("div"); 
const errorCreditCardCVV = document.createElement("div"); 

/* Helper function to validate name input */
const nameValidator = () => {
    const name = document.querySelector('#name');

    if(name.value.length > 0){
        name.style.border = 'white';
        if(errorName){
        errorName.remove();
        }
        return true;
    }else{
        name.style.border = '2px solid red';
        name.before(errorName);
        errorName.innerText = "Please enter a valid name";
        return false;
    }
}


/* Helper function to validate email input */ 
const email = document.querySelector('#mail');
const emailValidator = () => {
    const atSymb = email.value.indexOf('@');
    const dot = email.value.lastIndexOf('.');

    if(atSymb > 1 && dot > atSymb){
        email.style.border = 'white';
        if(errorEmail){
        errorEmail.remove();
        }
        return true;
    }else{
        email.style.border = '2px solid red';
        email.before(errorEmail);
        errorEmail.innerText = "Please enter a valid email";
        return false;
    }
}
/* Real-time Error Messages on Email field Exceeds (used index of in previous validation. and regex on this for practice)*/

email.addEventListener('input', (e) => {
    const resultEmailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(email.value.toUpperCase());
    if(resultEmailValidation){
        email.style.border = 'white';
        if(errorEmail){
        errorEmail.remove();
        }
        return true;
    }else{
        email.style.border = '2px solid red';
        email.before(errorEmail);
        errorEmail.innerText = "Please enter a valid email";
        return false;
    }
});




/* Helper function to validate activities */
// At least one checkbox under "Register for Activities" section must be selected.
// loops through activities and if one of them is checked, it pushes it to the array, 
// then use the array length to check if at least one activity has been selected. 
const activitiesValidator = () => {
    const activities = document.querySelectorAll('.activities label input');
    const activityErrLocation = document.querySelector('.activities legend');
    let activitiesCount = [];

    for (let i = 0; i <activities.length; i++){
        if(activities[i].checked === true){
            activitiesCount.push(activities[i]);
        }
    }
    if(activitiesCount.length > 0){
        activityErrLocation.style.border = '0px solid white';
        if(errorActivities){
            errorActivities.remove();
        }
        return true;
    }else {
        activityErrLocation.style.border = '2px solid red';
        activityErrLocation.appendChild(errorActivities);
        errorActivities.innerText = "Please select at least one activity";
        return false;
        }
}
  
let paymentSelection = document.querySelector('#payment').value;

/* Helper function to validate credit card */
// display error messages for each input field,
// Exceeds Conditional Error Message on Credit Card Number input field.
const creditCardValidator = () => {
    const creditCardInput = document.getElementById('cc-num');
    const creditCardZip = document.getElementById('zip');
    const creditCardCVV = document.getElementById('cvv');

    const resultCC = /^[0-9]{13,16}$/.test(creditCardInput.value);
    const resultZip = /^[0-9]{5}$/.test(creditCardZip.value);
    const resultCVV = /^[0-9]{3}$/.test(creditCardCVV.value);

    if (resultCC || resultZip || resultCVV){
        
        if(resultCC && errorCreditCardNum  ){
            creditCardInput.style.border = '0px solid white';
            errorCreditCardNum.remove();
        }
        if(resultZip &&errorCreditCardZip){
            creditCardZip.style.border = '0px solid white';
            errorCreditCardZip.remove();
        }
        if(resultCVV &&errorCreditCardCVV){
            creditCardCVV.style.border = '0px solid white';
            errorCreditCardCVV.remove();
        }
        if (resultCC && resultZip && resultCVV){
            return true;
        }
    }else{
        if(!resultCC){
            creditCardInput.style.border = '2px solid red';
            creditCardInput.before(errorCreditCardNum);
            errorCreditCardNum.innerText = "Please enter valid Credit Card Number.";
//Exceeds Conditional Error Message 
            if(creditCardInput.value < 13 ){
                errorCreditCardNum.innerText = "Credit card number must be at least 13 digits.";
            }else if (creditCardInput.value > 16){
                errorCreditCardNum.innerText = "Credit card number must not exceed 16 digits.";
            }

        }
        if(!resultZip){
            creditCardZip.style.border = '2px solid red';
            creditCardZip.before(errorCreditCardZip);
            errorCreditCardZip.innerText = "Please enter valid Zip Code (5 digits).";    
        }
        if(!resultCVV){
            creditCardCVV.style.border = '2px solid red';
            creditCardCVV.before(errorCreditCardCVV);
            errorCreditCardCVV.innerText = "Please enter valid Zip Code (5 digits).";
        }
    }

  }


/* Submit listener on the form element */
// check if fields are valid, if not it prevents the default submit behaviour.
// conditional for Credit Card, only checks for validation if its selected. 
form.addEventListener('submit', (e) => {
    if(!nameValidator()){
      e.preventDefault();
    }
    if(!emailValidator()){
      e.preventDefault();
    }
    if(!activitiesValidator()){
        e.preventDefault();
    }
    if(paymentSelection === 'credit card'){
        if(!creditCardValidator()){
            e.preventDefault();
        }
    }

});

//Thats, it Thank you for your review. I still plant to refactor some areas and come back to fiddle with the CSS.