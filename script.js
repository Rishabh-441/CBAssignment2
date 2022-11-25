if (localStorage.getItem('color') == null) {
    localStorage.setItem('color', "white");
}
let body = document.body;
window.onload = () => {
    body.style.backgroundColor = localStorage.getItem('color');
}

const xhr = new XMLHttpRequest;

xhr.onload = function () {
    let data = this.response;
    let newData = JSON.parse(data);
    let mainDiv = document.getElementsByClassName('content')[0];
    mainDiv.innerHTML = "";
    for (let i = 0; i < newData.length; i++) {
        const imgUrl = newData[i].show.image.original;
        let img = document.createElement('img');
        img.src = imgUrl;
        img.width = "300";
        img.height = "400";
        mainDiv.appendChild(img);
    }
}

xhr.onerror = function() {

}

document.getElementById('search').addEventListener('click', ()=>{
    let query = document.getElementById('txt').value;
    // alert(query);
    url = "https://api.tvmaze.com/search/shows?q=" + query;
    xhr.open("GET", url);
    xhr.send();
    document.getElementById('txt').value = null;
})


const radioButtons = document.querySelectorAll('input[name="color"]');
console.log(radioButtons);
for (let i = 0; i < radioButtons.length; i++) {
    const element = radioButtons[i];
    element.addEventListener('click', ()=> {
        let color = element.value;
        body.style.backgroundColor = color;
        localStorage.setItem('color', color);
        // console.log(color);
    })
    
}