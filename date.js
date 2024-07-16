// Date 
// var x = new Date();
// console.log(x.getdate());
// console.log(x.getFullYear());
// console.log(x.getMonth());
// console.log(x.getHours());
// console.log(x.getMinutes());
// console.log(x.getSeconds());
// console.log(x.getMilliseconds());
// document.write(x.getDate()+"-"+x.getMonth()+"-"+x.getFullYear());

// math
// console.log(Math.sqrt(2));
// console.log(Math.pow(2,2));
// console.log(Math.abs(-23));
// console.log(Math.floor(3.444));
// console.log(Math.trunc(3.22));
// console.log(Math.sin(-1));
// console.log(Math.random()*10)

// funtions
// function fun(a=12,b,c)
// {
//     console.log(a+b+c)

// }
// fun(2,4);
// var x={
//     name : "priya",
//     getname : function()
//     {
//         console.log(this.name)
//     }
// }
// x.getname();

// errors handling
try{
    {
        let x=window.prompt("Enter a number");
        if(x==3){
            throw{name:"hii",message:"It is wrong"}
        }
    }
    console.log(x);
}
catch(err){
    console.log(err.name);
}
finally{
    console.log("this is an error")
}