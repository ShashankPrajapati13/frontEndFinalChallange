

// var h1 = document.querySelector("#main2 h1");
// gsap.set(h1,{opacity:0})


//  gsap.to( h1,{
//      scrollTrigger:{
//         scroller:"#main",
//         trigger:h1,
//        start:"top 40%",
//       markers:true,
      

//     },
    
//      opacity:1,
//      onStart:function(elem){
//           $(h1).textillate({
//                in:{
//                 effect:`fadeInUp`,
//                 duration:3
//               }
//             });
//           }
    
// });
gsap.to("#main2",{
  top:"20%",
  duration:2,
  

})
 setTimeout(function(){
   document.querySelector("#main2").style.transform="translate(-50%, 0) rotate(-360deg)"
   document.querySelector("#main2").style.width="100vw";
  document.querySelector("#main2").style.top="0";
     document.querySelector("#miranda h1").style.fontSize="32vw";
    document.querySelector("#mid h1").style.fontSize= "74px";
    document.querySelector("#mid h2").style.fontSize= "43px";
    document.querySelector("#mid h3").style.fontSize= "26px";
},4000)


// var h1 = document.querySelectorAll("#main1 h1");
// gsap.set(h1,{opacity:0})
// gsap.to("#main1 h1",{
//     duration:3,
//     opacity:1,
//     onStart:function(){
//         h1.textillate({
//           in:{
//             effect:`fadeInUp`,
//             duration:3
//           }
//         });
//       }
// })
// var animate = document.querySelectorAll(".animate");
// gsap.set(animate,{opacity:0})
// animate.forEach(function(elem){
//   gsap.to(elem,{
//     scrollTrigger:{
//       trigger:elem,
//       scroller:"#main",
//       start:"top 30%",
//       markers:true
//     },
//     opacity:1,
  
//    onStart:function(){
//       $(elem).textillate({
//          in:{
//           effect:`fadeInUp`,
//           duration:3
//         }
//       })
//     }
//   })
// });

