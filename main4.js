function loadLogoSVG (path, element){ //same function as last day with Martin
    fetch(path)
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(document.querySelector(element));
        document.querySelector(element).innerHTML = data;
        document.querySelector("#booms"),style.display = "none";
    })
}


loadSVG("assets/Sarah.svg", "div");
loadSVG("assets/Sarah.svg", "div:nth-child(2)");