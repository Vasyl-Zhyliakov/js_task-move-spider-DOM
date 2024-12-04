'use strict';
console.log(document);
const spider = document.querySelector('.spider');
const parent = spider.offsetParent;

let width = 0;
let height = 0;

const differenceWidth =
  (document.querySelector('body').clientWidth - parent.clientWidth) / 2;
const differenceHeight =
  (document.querySelector('body').clientHeight - parent.clientHeight) / 2;
console.log('differ:', differenceWidth, differenceHeight);
  
function getParam(param) {
  if (param < 0) {
    return 0
  }
  return param;
}

parent.addEventListener('click', (e) => {
  console.log('client:', e.clientX, e.clientY);
  width =
    e.clientX - differenceWidth - spider.getBoundingClientRect().width / 2;
  height =
    e.clientY - differenceHeight - spider.getBoundingClientRect().height / 2;

  console.log('params:', width, height);
  console.log('get params:', getParam(width), getParam(height));
  spider.style.cssText = `position: absolute; top: ${getParam(height)}px; left: ${getParam(width)}px`;
});
