//method has a dot but kind of a fucntion
// make it as reusable code. Functions are cool cause of that
function loadLogoSVG (path, element){ //same function as last day with Martin
    fetch(path)
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.querySelector(element).innerHTML = data;
    })
}

let btn1 = document.querySelector("button");
// btn1.addEventListener("click", loadSVG("assets/city.svg", loadSVG()))
btn1.addEventListener("click", loadFirst)

function loadFirst(){
    loadSVG("assets/city.svg", loadSVG());
}


//function no parenthesis doesnt execute immediately, we can still pass it as paramenter and execute with parenthesis later

// loadSVG("assets/city.svg", "div"); //div in js would select the first one, in css would select all divs
// loadSVG("assets/sarah.svg", "div:nth-child(2)");



// function loadLogoSVG (path, element){ //same function as last day with Martin
//     fetch(path)
//     .then(function(response){
//         return response.text();
//     })
//     .then(function(data){
//         document.innerHTML = data;
//     })
// }

// loadSVG("assets/sarah.svg", .querySelector("#graphic"));
// loadSVG("logo.svg", "header");