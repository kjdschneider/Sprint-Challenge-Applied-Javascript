/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let curIndex = 0;
let otherNum = 0;

const mountainImg = document.createElement('img');
const computerImg = document.createElement('img');
const treesImg = document.createElement('img');
const turntableImg = document.createElement('img');

const imgArray = [mountainImg, computerImg, treesImg, turntableImg];

const leftBtn = document.createElement('div');
const rightBtn = document.createElement('div');

if (curIndex == 0) {
  mountainImg.style.display = 'block';
}

function CarouselCreate () {
  const carousel = document.createElement('div');

  carousel.appendChild(leftBtn);
  carousel.appendChild(mountainImg);
  carousel.appendChild(computerImg);
  carousel.appendChild(treesImg);
  carousel.appendChild(turntableImg);
  carousel.appendChild(rightBtn);

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  mountainImg.src = "./assets/carousel/mountains.jpeg";
  computerImg.src = "./assets/carousel/computer.jpeg";
  treesImg.src = "./assets/carousel/trees.jpeg";
  turntableImg.src = "./assets/carousel/turntable.jpeg";

  leftBtn.textContent = '<';
  rightBtn.textContent = '>';

  return carousel;
}

leftBtn.addEventListener('click', () => {
  otherNum -= 1;
  if (otherNum < 0) {
    otherNum = 3;
  }
  curIndex = otherNum;
  console.log('curIndex', curIndex);
  console.log('otherNum', otherNum);

  if (curIndex == 0) {
    mountainImg.style.display = 'block';
    computerImg.style.display = 'none';
    treesImg.style.display = 'none';
    turntableImg.style.display = 'none';
  } else if (curIndex == 1) {
    mountainImg.style.display = 'none';
    computerImg.style.display = 'block';
    treesImg.style.display = 'none';
    turntableImg.style.display = 'none';
  } else if (curIndex == 2) {
    mountainImg.style.display = 'none';
    computerImg.style.display = 'none';
    treesImg.style.display = 'block';
    turntableImg.style.display = 'none';
  } else if (curIndex == 3) {
    mountainImg.style.display = 'none';
    computerImg.style.display = 'none';
    treesImg.style.display = 'none';
    turntableImg.style.display = 'block';
  }
})

rightBtn.addEventListener('click', () => {
  otherNum += 1;
  if (otherNum > 3) {
    otherNum = 0;
  }
  curIndex = otherNum;
  console.log('curIndex', curIndex);
  console.log('otherNum', otherNum);

  if (curIndex == 0) {
    mountainImg.style.display = 'block';
    computerImg.style.display = 'none';
    treesImg.style.display = 'none';
    turntableImg.style.display = 'none';
  } else if (curIndex == 1) {
    mountainImg.style.display = 'none';
    computerImg.style.display = 'block';
    treesImg.style.display = 'none';
    turntableImg.style.display = 'none';
  } else if (curIndex == 2) {
    mountainImg.style.display = 'none';
    computerImg.style.display = 'none';
    treesImg.style.display = 'block';
    turntableImg.style.display = 'none';
  } else if (curIndex == 3) {
    mountainImg.style.display = 'none';
    computerImg.style.display = 'none';
    treesImg.style.display = 'none';
    turntableImg.style.display = 'block';
  }
})

const carouselDone = CarouselCreate();
const carouselDiv = document.querySelector('.carousel-container');
carouselDiv.appendChild(carouselDone);
  

  