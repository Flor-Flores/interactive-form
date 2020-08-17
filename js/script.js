//focuses on the first form field when page is loaded
window.onload = function() {
  document.getElementById('name').focus();
  
    const job_other = document.getElementById('other-title').style.display = "none";
}

//changes text from Color to "Please select a T-shirt theme."
const colorLabel = document.querySelector('.shirt-colors label');
    colorLabel.innerText = "Please select a T-shirt theme.";
// creates 2 arrays for the different colors.
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
console.log(punColors,heartColors)

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