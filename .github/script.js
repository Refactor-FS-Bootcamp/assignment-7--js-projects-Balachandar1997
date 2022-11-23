document.getElementById("celcius").addEventListener("input",e=>{
    let cel =e.target.value;
    document.getElementById("farenheit").innerHTML=(cel*1.8)+32;

})

