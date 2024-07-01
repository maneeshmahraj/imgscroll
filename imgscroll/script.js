

function mov_image(str){
    var step=50;
    
    switch(str){
     case "left":
       var x= document.getElementById("img1").offsetLeft;
       x=x-step;
       document.getElementById("img1").style.left=x+"px";
      
       break;
       case "right":
        var x= document.getElementById("img1").offsetLeft;
        x=x+step;
        document.getElementById("img1").style.left=x+"px";
        break;
    }
}
// document.getElementById("btn2").addEventListener("click",myclick)
// var step=50;
//     var myintra;
//     function mov_image(){
       
//        var x= document.getElementById("img1").offsetLeft;
//        x=x+step;
//        document.getElementById("img1").style.left=x+"px";
//        if(x>=1210)
//         {
//             clearInterval(myintra);
//         }
//     }

// function myclick(){
//     myintra=setInterval(mov_image,100);
// }
// document.getElementById("btn").addEventListener("click",myclick2);

//     var myintra2;
//     function mov_image2(){
      
//        var x= document.getElementById("img1").offsetLeft;
//        x=x-step;
//        document.getElementById("img1").style.left=x+"px";
//        console.log(x)
//        if(x==105)
//         {
//             clearInterval(myintra2);
//         }
//     }

// function myclick2(){
//     myintra2=setInterval(mov_image2,100);
// }