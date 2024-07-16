n=parseInt(window.prompt("Enter a number"));
  function prime(n){
   for(let i=2;i<=n;i++)
        if(n%i==0)
            return false;
            return true;
    }
prime(n)
    ?console.log("true")
    :console.log("flase");