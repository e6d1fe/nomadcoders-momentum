const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

imageSrc = `img/${chosenImage}`;

document.body.style.background = "url(" + imageSrc + ")";
