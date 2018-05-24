//CALLBACK

let btn1 = document.querySelector("button");
// btn1.addEventListener("click", loadSVG("assets/city.svg", loadSVG()))
btn1.addEventListener("click", function loadFirst(){
    loadSVG("assets/city.svg", loadSVG());
}
)

// learning JS IS hard
// updated thru podcasts: 
    // shoptalkshow (CSS TRICKS) --> chris coyer / dave rupert
    // toolsday --> una kravitz
// twitter (everybody can have time for little characters): ady osmani (chrome), sara soudain
//  react, vue, gsap, babel, rollup, require

// javascript.info

//ANONYMOUS FUNCTIONS
// less pollute name space: is reserving words for my script to interact with other's: function  names and variable names
btn1.addEventListener("click", function(){
    loadSVG("assets/city.svg", loadSVG());
});

// ES6 version, most browsers, not all but we can use Babel for that. Arrow stuff
btn1.addEventListener("click", ()=>{
    loadSVG("assets/city.svg", "div");
});




let breakTime = function(){
    return true;
}

                let stuff = breaktime() //stuff will equal true
                let stuff = breaktime //stuff will equal the function
applicationCache.addEventListener("click", function(){

})
function test(name, age, callback){
    console.log(name, age)
    callback()
}
test("JOnas", 39, function(){
    console.log("did it work?")
})

/////////////////////////////////

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

