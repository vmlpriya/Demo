// function myfunction(){
//     var x =document.getElementById("table");
// }
// // function po(event){
// //     data.po=event.target.value;
// // }
// // function pr(event){
// //     data.pr=event.target.value;
// // }
// // function pl(event){
// //     data.pl=event.target.value;
// // }
// // function po1(event){
// //     data.po1=event.target.value;
// // }
// // function pr1(event){
// //     data.pr1=event.target.value;
// // }
// // function pl1(event){
// //     data.pl1=event.target.value;
// // }
// // function po2(event){
// //     data.po2=event.target.value;
// // }
// // function pr2(event){
// //     data.pr2=event.target.value;
// // }
// // function pl2(event){
// //     data.pl2=event.target.value;
// // }
function myFunction() {
    var x = document.createElement("TFOOT");
    var y = document.createElement("TR");
    var z = document.createElement("TD");
    z.innerHTML =prompt("Add row")
    y.appendChild(z);
    x.appendChild(y);
    document.getElementById("myTable").appendChild(x);
  }