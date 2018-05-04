console.log('Where\'s Tim???');
let filenames = [
  'img/tim1.jpg',
  'img/tim2.jpg',
  'img/tim3.jpg',
  'img/tim4.jpg',
  'img/tim5.jpg',
]

let imgs = document.getElementsByTagName('img');

for (imgElement of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = filenames[r];
  let url = chrome.runtime.getURL(file);
  imgElement.src = url;
  console.log(url);
}
