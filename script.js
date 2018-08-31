$(function () {
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var a = 250;
var b = 50;
var cw = 450;
var ch = 300;

context.fillStyle = 'rgb(255,0,0)';
context.fillRect((b+b),b+(a/b)+(a+ch+cw)/b,a,b);

context.fillStyle = 'rgb(243,243,243)';
context.fillRect((b+b),(cw-ch)-((a/b)+(a+ch+cw)/b),a,b);

context.fillStyle = 'rgb(21,163,24)';
context.fillRect((b+b),(cw-ch)+(a+ch+cw)/b,a,b);
});