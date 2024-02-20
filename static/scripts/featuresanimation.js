/*const featuresDiv = document.querySelector('.features1');
let timer = setTimeout(() => {
  featuresDiv.classList.add('no-animation');
}, 10000); // Change 10000 to your desired duration in milliseconds

featuresDiv.addEventListener('mouseover', () => {
  clearTimeout(timer); // Clear timer to prevent automatic stop
});

featuresDiv.addEventListener('mouseout', () => {
  timer = setTimeout(() => {
    featuresDiv.classList.add('no-animation');
  }, 10000);
});*/

const featureItems = document.querySelectorAll('feature1');
let currentIndex = 0;
let timer;

function moveItem() {
    featureItems[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % featureItems.length;
    featureItems[currentIndex].classList.remove('hidden');
}
setInterval(moveItem, 2000);

const featuresDiv = document.querySelector('.feature1');

featuresDiv.addEventListener('mouseover', () => {
    clearInterval(timer);
});
featuresDiv.addEventListener('mouseout', () => {
    timer = setInterval(moveItem, 2000);
});