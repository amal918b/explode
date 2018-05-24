
function loadSVG (){ //same function as last day with Martin
    fetch("layers.svg")
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.querySelector("#graphic").innerHTML = data;
    })
}


function loadLogoSVG (){ //same function as last day with Martin
    fetch("logo.svg")
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.querySelector("#logo").innerHTML = data;
    })
}

    function praiseBeer(){
        return "great";
    }
    let = praiseBeer = () => "great";//this works for single parameter

    let greet = (who) => `hi ${who}`;// see this in React all the time cause its shorter

    function greet(who){
        return `hi ${who}`; 
    }
}
    










//ES6 is latest version of Javascript




//can rename functions if we store them in a function and use them in another function
//js is syncronous means it load everything at same time, await and async from last class (don't wait for it, go run other stuff)
console.log(1);

setTimeout(2000){
    console.log(2); //in php, the code would stop here, wait til finish timeout and continue
}
