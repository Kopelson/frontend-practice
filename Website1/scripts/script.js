const checkbox = document.getElementById('checkbox');
const body = document.getElementById('landing-page');
const season = document.getElementById('season');

//Handles toggle change
function handleClick(e){
    if(e.target.id === "checkbox"){
        if(checkbox.value === "off"){
                checkbox.value = "on";
                changeTheme();
                return;
            }

        if(checkbox.value === "on"){
                checkbox.value = "off";
                changeTheme();
                return;
        }
    }
}

//Changes page theme
function changeTheme(){
    if(checkbox.value === "on"){
        body.style.backgroundColor  = "#f69529";
        body.style.color = "black";
        season.innerHTML = "SUMMER";


    }
    if(checkbox.value === "off"){
        body.style.backgroundColor = "#084d64";
        body.style.color = "white";
        season.innerHTML = "WINTER";
    }
    
}


document.addEventListener("click", handleClick);