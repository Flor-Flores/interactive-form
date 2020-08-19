//focuses on the first form field when page is loaded
window.onload = function() {
  document.getElementById('name').focus();
    const job_other = document.getElementById('other-title').style.display = "none";
}

//changes text from Color to "Please select a T-shirt theme."
const colorLabel = document.querySelector('.shirt-colors label');
    colorLabel.innerText = "Please select a T-shirt theme.";
// creates 2 arrays for the different color sets.
let color = document.querySelector("#color");
let colors = document.querySelectorAll("#color option");
let punColors = [];
let heartColors= [];
for (let i = 0; i < colors.length; i++){
        let colorInnerText = colors[i].innerText.toLowerCase();
        let punColor = colorInnerText.includes("puns");
        let heartColor = colorInnerText.includes("♥");
            if(punColor){
                punColors.push(colors[i])
                color.removeChild(colors[i]);
            }else if(heartColor){
                heartColors.push(colors[i])
                color.removeChild(colors[i]);
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

creditCard.selected = true;

const creditCardDiv = document.querySelector('#credit-card');
const paypalDiv = document.querySelector("#paypal" );
const bitcoinDiv = document.querySelector("#bitcoin" );

paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';


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
const email = document.querySelector("#email");


//Divs to display each error.
const errorName = document.createElement("div"); 
const errorEmail = document.createElement("div"); 
const errorActivities = document.createElement("div"); 
const errorCreditCardNum = document.createElement("div"); 
const errorCreditCardZip = document.createElement("div"); 
const errorCreditCardCVV = document.createElement("div"); 

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
const emailValidator = () => {
    const email = document.querySelector('#mail');
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

// At least one checkbox under "Register for Activities" section must be selected.
/* Helper function to validate activities */
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
            alert('cc validated')
            return true;
        }
    }else{

        if(!resultCC){
            creditCardInput.style.border = '2px solid red';
            creditCardInput.before(errorCreditCardNum);
            errorCreditCardNum.innerText = "Please enter valid Credit Card Number (between 13-16 digits).";
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
