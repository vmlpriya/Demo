// function triangle(a, b, c)
// {
//     var s= (a+b+c)/2; 
//     return Math.sqrt(s*(s-a)*(s-b)*(s-c));
// }
// var area=triangle(2,2,2);
// console.log(area);

// var marks=window.prompt("Enter a number");
// if(marks>90 && marks<=100){
//     console.log('A');
// }
// else if(marks>80 && marks<=90){
//     console.log('B');
// }
// else if(marks>70 && marks<=80){
//     console.log('C');
// }
// else if(marks>60 && marks<=70){
//     console.log('D');
// }
// else{
//     console.log('F')
// }

var a=parseInt(window.prompt("Enter a value"));
var b=parseInt(window.prompt("Enter b value"));
var c=parseInt(window.prompt("Enter c value"));
var d=(-b+Math.sqrt(b*b-4*a*c))/2*a;
var e=(-b-Math.sqrt(b*b-4*a*c))/2*a;
console.log(d);
console.log(e);
