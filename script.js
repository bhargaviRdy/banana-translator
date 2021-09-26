var userInput = document.querySelector(".user-input");
var btn = document.querySelector("#btn-translate");
var output = document.querySelector(".output");
var url = "https://api.funtranslations.com/translate/minion.json?text="


btn.addEventListener("click", function(){
    fetchTranslation(userInput.value);
});

function fetchTranslation(userInput){
    // output.innerText = userInput
    fetch(url+userInput)
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated;
        // output.innerText = "hello"
    })
    .catch((error) => {
        console.log("error occured: "+error);
    });

}