import './styles.css'
import P5 from 'p5';



const APPContainer = document.getElementById('app');

APPContainer.classList.add('w-screen','h-screen')
let APPWidth = APPContainer.offsetWidth;
let APPHeight = APPContainer.offsetHeight;

const ControllerBar = document.createElement('form');
const ControllerBarHeight = APPHeight * 10 / 100;

ControllerBar.classList.add('flex',`h-{${ControllerBarHeight}}`, 'gap-4', 'w-full', 'px-4', 'py-2');

let inputForm = document.createElement('div');
inputForm.classList.add('flex','flex-col','relative');

let label = document.createElement('label');
label.innerHTML = "Elements quantity";
label.htmlFor = "number";

let input = document.createElement('input');
input.id = "number";
input.type = "number";
input.classList.add('w-full', 'border', 'border-blue-400', 'rounded');
input.value = '100';
inputForm.append(label);
inputForm.append(input);

let buttonForm = document.createElement('div');
buttonForm.classList.add('flex','items-end')

let button = document.createElement('button');
button.innerHTML = 'Sort';
button.classList.add('border', 'border-blue-400', 'rounded', 'hover:bg-blue-200', 'active:bg-blue-100', 'py-2', 'px-4')

buttonForm.append(button)

ControllerBar.append(inputForm);
ControllerBar.append(buttonForm);

APPContainer.append(ControllerBar)

ControllerBar.addEventListener('submit', (e) => {
  e.preventDefault();
  if(document.getElementById('quantity-error'))
    document.getElementById('quantity-error').remove();
  if(SKETCH) {
    SKETCH.remove();
  }

  let elementQuantity = e.target[0].value
  if(!elementQuantity || elementQuantity <= 0) {
    let span = document.createElement('span');
    span.id = 'quantity-error';
    span.classList.add('text-red-400','absolute', 'inset-x-0', 'top-[100%]');
    span.innerHTML = 'Number is invalid';
    inputForm.append(span);
    return;
  }
  const arr = [];
  for(let i = 0; i < elementQuantity; i++) {
    arr[i] = Math.floor(Math.random() * (APPHeight - ControllerBarHeight));
  }
  SKETCH = new P5(sketch(arr));
})
let SKETCH;
const sketch = (arr) => {
  return function (p5) {
    let rectWidth = APPWidth / arr.length;
    let firstElement = 0;
    let secondElement = firstElement + 1;
    p5.setup = () => {
      const canvas = p5.createCanvas(APPWidth, APPHeight - ControllerBarHeight)
      canvas.parent(APPContainer);
      // p5.frameRate(24);
    }
    p5.draw = () => {
      p5.background('white');
      displayElements();

      p5.push()
      p5.translate(0, p5.height)
      p5.fill('red')
      p5.rect(rectWidth * firstElement, 0, rectWidth, arr[firstElement] * (-1))
      p5.pop()
      if(secondElement < arr.length)
      {
        p5.push()
        p5.translate(0, p5.height)
        p5.fill('blue')
        p5.rect(rectWidth * secondElement, 0, rectWidth, arr[secondElement] * (-1))
        p5.pop()

        if(arr[firstElement] > arr[secondElement]) {
          let temp = arr[firstElement];
          arr[firstElement] = arr[secondElement];
          arr[secondElement] = temp;
        }
        secondElement++;
      } else {
        firstElement++;
        secondElement = firstElement + 1;
      }
    }
    let displayElements = () => {
      p5.push();
      p5.translate(0, p5.height)
      for (let i = 0; i < arr.length; i++) {
        p5.fill('grey');
        p5.rect(rectWidth * i, 0, rectWidth, arr[i] * (-1))
      }
      p5.pop();
    }
  }
}
