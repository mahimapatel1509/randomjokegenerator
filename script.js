let show = document.getElementById("get");

async function Myfun() {
    let getting = await fetch("https://icanhazdadjoke.com/",{
    headers:{
        accept: "application/json"
    }  
    })
    console.log(getting);
    let joke = await getting.json();
    let data = joke.joke
    
    
    show.innerHTML = data
}



