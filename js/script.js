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
            console.log("inside first if")
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
console.log(payments);
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


// There are three sections of the form that are always required: name, email, and activities. The
// credit section—comprised of three inputs—only needs to be validated if “credit card” is the
// selected payment method. To keep things simple, you can create a function to validate each
// required section, as well as add and remove a validation error indicator of some sort.
// Each required section will need to be tested to see if it meets certain criteria, which are detailed
// in the project instructions. If the criteria are not met, the validation function should add a
// validation error indication for that field and return false. Else, the function should remove any
// validation error indicator and return true.



//last attempt
const form = document.querySelector('form');

function nameValidator(e){

    

    const name = document.querySelector('#name');

    let nameError = document.createElement('div');
    nameError.innerText = "please enter a name";
    nameError.className = 'burn';

    if(name.value.length <= 0 ){
        console.log(name);
        console.log('please enter a name')
        let label = name.previousElementSibling;
        label.appendChild(nameError);


        e.preventDefault();
    }else if(name.value.length >= 0){
        alert('thank you for the name');
        document.querySelector('.burn').innerHTML='';
        e.preventDefault();

    }

}

form.addEventListener('submit', (e)=>{
    nameValidator(e);
    // e.preventDefault();
})



// //last attempt
// let label = name.previousElementSibling;

// const form = document.querySelector('form');

// form.addEventListener('submit', (e)=>{
//     const name = document.querySelector('#name');
//     let label = name.previousElementSibling;
//     console.log(label)

//     let nameError = document.createElement('div');
//     nameError.innerText = "please enter a name";

//     if(name.value.length <= 0 ){
//         console.log(name);
//         console.log('please enter a name')
//             label.appendChild(nameError);
//             // var x = document.getElementById("item2").previousSibling.innerHTML;


//         e.preventDefault();
//     }else if(name.value.length >= 0){
//         alert('thank you for the name');

//     }

//     e.preventDefault();
// })


