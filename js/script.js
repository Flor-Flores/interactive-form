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

let activityTotal = document.createElement("div");
    const activity = document.querySelector('.activities');
let totalActivityCost = 0;
    activityTotal.innerHTML =totalActivityCost;
    activity.appendChild(activityTotal);


//event handler looking for changes in the activity section;
activity.addEventListener('change', (e) => {
    let isCheck = e.target.checked;
    let checkedCost = parseInt(e.target.getAttribute('data-cost'));
    const activityLabels = document.querySelectorAll('.activities label input');

//this conditional adds the totalActivityCost;
    if(isCheck === true) {
        totalActivityCost += checkedCost;
        activityTotal.innerHTML =totalActivityCost;
    }else if(isCheck === false){
        totalActivityCost -= checkedCost;
        activityTotal.innerHTML =totalActivityCost;
    }



    const clicked = e.target;
        console.log(clicked)
    const checked = clicked.checked;
        console.log(checked)
    const checkedTime = clicked.getAttribute('data-day-and-time');
        console.log(checkedTime)

        console.log("----------------------------------------------------")
    for (let i = 0; i <activityLabels.length; i++) {

        if(clicked === activityLabels[i]){
            console.log(activityLabels[i])
            console.log("firt if")

        }else {
            console.log("not thisone" + activityLabels[i].getAttribute('data-day-and-time'))
            if(activityLabels[i].getAttribute('data-day-and-time') === checkedTime && activityLabels[i] !== checked){
                activityLabels[i].disabled = true;
                console.log("i jsut disabled this" + activityLabels[i])
            }
        }
    }
        

});






// let checkedTime = e.target.getAttribute('data-day-and-time');
// ///check what I just checked. 
// // if not checked = true, and it is not disabled. loop through all. and if another has time conflictTime, disable it. otherwise enable it. 
//         for(let i = 0; i <activityLabels.length; i++){
            
//             let conflictTime = activityLabels[i].getAttribute('data-day-and-time');

//             if(isCheck === false && checkedTime === conflictTime){
//                 alert('Cant over book');
//                 activityLabels[i].disabled = true;
//                 console.log(activityLabels[i])
//             }else if(isCheck === false && checkedTime !== conflictTime){
//                 alert('ok book');
//                 activityLabels[i].disabled = false;

//             }
//         }



