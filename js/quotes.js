const quotes = [
  {
    quote: "인생에 뜻을 세우는데 적당한 때는 없다.",
    author: "볼드윈",
  },
  {
    quote: "실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.",
    author: "하버트 개서",
  },
  {
    quote: "우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.",
    author: "윌리엄 제임스",
  },
  {
    quote: "너 자신이 돼라. 다른 사람은 이미 있으니까.",
    author: "오스카 와일드",
  },
  {
    quote: "인생은 가까이서 보면 비극, 멀리서 보면 희극이다.",
    author: "찰리 채플린",
  },
  {
    quote: "승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
    author: "하비스",
  },
  {
    quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
    author: "나딘 스테어",
  },
  {
    quote: "최고에 도달하려면 최저에서 시작해라.",
    author: "P. 시루스",
  },
  {
    quote: "배움은 의무도, 생존도 아니다.",
    author: " 애드워즈 데밍",
  },
  {
    quote: "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
    author: "칭기즈칸",
  },
];

const quote = document.querySelector("#quote span:first-child"); //id가 quote인 span태그의 첫번째
const author = document.querySelector("#quote span:last-child");

//console.log(quotes[Math.floor(Math.random() * 10)]);
//quotes 배열의 [n]번째 가져옴, 하지만 이렇게되면 우리는 10을직접쓴 하드코딩이됨, 배열의 길이를 구해서 변수로 바꿔주는게 좋음

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //quotes 배열의 [n]번째 가져오는데 0~1사이의 랜덤한 숫자(실수)가 나오는함수 * 배열의길이 해준걸 floor함수로 정수로 바꿔줌

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
