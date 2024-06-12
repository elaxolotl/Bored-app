const button = document.querySelector("button");
const url = 'https://bored.api.lewagon.com/api/activity';
button.addEventListener("click", () => { 
    const results = document.querySelector("#results")
    const activity = document.querySelector(".activity")
    const price = document.querySelector(".price")
    const people = document.querySelector(".participants")
    fetch(url)
    .then(response => response.json())
    .then(data => {
        results.classList.remove("invisible")
        activity.innerHTML = "You can " + data.activity;
        if (data.participants==1){
            people.innerHTML = "You can do this by yourslef!"
        }
        else{
            people.innerHTML = "you can do this with " + data.participants + " people"
        }
        price.innerHTML ="It'll cost you " + data.price + "$"
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
})
