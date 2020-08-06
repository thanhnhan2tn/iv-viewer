/* eslint-disable no-new */
import ImageViewer from '../../src/ImageViewer';

window.onload = function () {
  var canvas = document.getElementById('myCanvas');
  var img = document.getElementById('image');
  var ctx = canvas.getContext('2d');
  canvas.width = img.clientWidth;
  canvas.height = img.clientHeight;
  ctx.drawImage(img, 0, 0, img.clientWidth, img.clientHeight);
  new ImageViewer(canvas);
};

Array.from(document.querySelectorAll('.pannable-image')).forEach((elem) => {
  new ImageViewer(elem);
});
