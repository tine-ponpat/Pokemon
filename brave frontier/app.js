//const p = document.querySelector("#color")
//const btn = document.querySelector("#btn")

//btn.addEventListener("click",function () {
//    let r = Math.floor(Math.random() * 255)
//    let g = Math.floor(Math.random() * 255)
//    let b = Math.floor(Math.random() * 255)
//
//    document.body.style.backgroundColor = color
 //   console.log(color);
    //p.innerText = color
//})

//แรนดอมสี
//const btns = document.querySelectorAll("#btn")
//
//for (const btn of btns) {
//    btns.addEvenListener("click",function () {
//        let newColor = randomColor();
//       btn.style.backgroundColor = newColor
//    })
//}
//
//function randomColor() {
//    let r = Math.floor(Math.random() * 255)
//    let g = Math.floor(Math.random() * 255)
//    let b = Math.floor(Math.random() * 255)
//    let color = `rgb(${r},${g},${b})`;
//}


//const input = document.querySelector("input")
//
//input.addEventListener("keydown",function (e) {
//    console.log(e.key); 
//    console.log(e.code);    
//})

//const form = document.querySelector('#shelterForm')
//form.addEventListener("submit", function (e) {
//    e.preventDefault()
//    console.log("Submit");
//})


//const form = document.querySelector('#shelterForm')
//const input = document.querySelector('#inputty')
//const span = document.querySelector('#sp')
//form.addEventListener("submiy", function (e) {
//    e.preventDefault()
//let newInput = input.value
//    span.innerText = newInput
//})

//const input = document.querySelector('#inputty')
//const span = document.querySelector('#sp')
//input.addEventListener("change", function (params) {
//    console.log(input);
//    StereoPannerNode.innerText = this.value
//})

//const b = document.querySelector('button')
//b.addEventListener("click", function (e) {
//   
//    
//    
//    e.stopPropagation()
//})

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    fetchAPI(query);
});

function fetchAPI(query) {
        const apiUrl =(`https://api.publicapis.org/entries?title=${query}`)
        console.log(apiUrl);
        
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data.entries))
        .catch(err => console.error('Error fetching data:', err));
}

function displayResults(results) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = '';

    results.forEach(api => {
        const apiElement = document.createElement('div');
        apiElement.classList.add('api');
        apiElement.innerHTML = `
            <h3>${api.API}</h3>
            <p>${api.Description}</p>
            <p><a href="${api.Link}" target="_blank">Learn more</a></p>
        `;
        resultsSection.appendChild(apiElement);
    });
}
