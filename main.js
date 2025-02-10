let images = document.querySelectorAll(".images-container img");
let overlay = document.getElementById("overlay");
let popUpContainer = document.getElementById("popUp")
let close = document.getElementById("close");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let imageLength = images.length;
let arr = [];
let currentIndex = 0;
for (let i = 0; i < imageLength; i++) {
    arr.push(images[i]);
    images[i].addEventListener('click', function(e) {
        let currentIndex = arr.indexOf(e.target);
        imgSrc = e.target.src;
        popUpContainer.style.backgroundImage = "url(" + imgSrc +")";
        overlay.style.display = 'block';
        popUpContainer.style.display = 'flex';
        console.log(currentIndex);
    })
}

close.addEventListener('click', closePopup);
next.addEventListener('click', nextImage);
prev.addEventListener('click', prevImage);

function closePopup() {
    popUpContainer.style.display = 'none';
    overlay.style.display = "none"
}

function nextImage() {
    if (currentIndex === 2) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    imgSrc = arr[currentIndex].getAttribute('src');
    console.log(imgSrc);
    popUpContainer.style.backgroundImage = "url(" + imgSrc +")";
    console.log(currentIndex);
}

function prevImage() {
    if (currentIndex === 0) {
        currentIndex = 2;
    } else {
        currentIndex--;
    }
    imgSrc = arr[currentIndex].getAttribute('src');
    console.log(imgSrc);
    popUpContainer.style.backgroundImage = "url(" + imgSrc +")";
    console.log(currentIndex);
}