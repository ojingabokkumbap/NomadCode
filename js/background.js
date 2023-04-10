const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//그동안은 html에서 만든 코드를 자바스크립트에서 읽어와서 했다면 이번엔 자바스크립트에서 html element를 만들거임
const bgImage = document.createElement("img"); //element를 생성하는 함수

bgImage.src = `img/${chosenImage}`; // bgImage의 경로를 설정해줌. html에서 <img src=""/>하는거와 같은의미

document.body.appendChild(bgImage); //appendChile() => html파일 body에 html을 추가함
