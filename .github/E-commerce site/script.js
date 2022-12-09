const products=[
    {
        name:"Bag",
        image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:"$70"
    },
    {
        name:"Skin Care",
        image:"https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMGNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:"$50"
    },
    {
        name:"Skin Care",
        image:"https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        price:"$40"
    },
    {
        name:"Lip Stick",
        image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price:"$30"
    },
    {
        name:"Eye Liner",
        image:"https://images.unsplash.com/photo-1620804587331-effc68d47d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXllbGluZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price:"$100"
    },
    {
        name:"Hair Spray",
        image:"https://images.unsplash.com/photo-1593560369164-8f3a8facd0e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2tpbiUyMGNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:"$70"
    },
    {
        name:"Rose Water",
        image:"https://images.unsplash.com/photo-1601068785450-ba55f33dfe0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW4lMjBjYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price:"$30"
    },
    {
        name:"HandBag",
        image:"https://images.unsplash.com/photo-1614179689702-355944cd0918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFuZGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price:"$150"
    },
    {
        name:"HandBag",
        image:"https://images.unsplash.com/photo-1571273260782-bab4699dde20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbmRiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price:"$90"
    },
    {
        name:"Hari Spray",
        image:"https://images.unsplash.com/photo-1593560369164-8f3a8facd0e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2tpbiUyMGNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:"$100"
    },
    {
        name:"HandBag",
        image:"https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmRiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price:"$200"
    },
    {
        name:"Lip Stick",
        image:"https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFrZXVwJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price:"$55"
    },
]

const users=[
    {
        username:"Bala",
        password:123
    }
]

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }





const items=document.getElementById("container")

products.forEach(function(post){
    items.innerHTML+=`
       <div id="products">
         <div id="item">
            
            <img src=${post.image} alt="img" width="100%" height="400px" >
            <h1>${post.name}</h1>
            <h2>${post.price}</h2>
            <button>Add to Cart</button>
         </div>
       </div>
    `


})