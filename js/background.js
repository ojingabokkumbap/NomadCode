const imgs = ["0.jpg", "1.png", "2.jpeg", "3.JPG", "4.png", "5.jpeg", "6.jpeg",];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

// JS로 image 생성하는 방법
const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
// 경로 정확하게 작성해야 함

document.body.appendChild(bgImg);
// append (제일 뒤 추가), prepend (제일 앞 추가)