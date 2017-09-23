
//이 방식은 하나만 가능하다 <-- 마지막에 정의한것만 실행된다
// window.onload = function (){
//   alert("load");
// }
//
// //이방식은 여러개를 등록해도 다 가능하다.. 실무에서 많이쓰이면서 DOM2레벨로 이걸로만 쓰자.
// window.addEventListener('load', function(){
//   alert("load1");
// })

//
// var log = documnet.getElementsById('log');
// function f(){
//
// }
//
// log.addEventListener('click', function(){
//   alert("load111");
// });

// var clickCount = 0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments, this ,event ,event.type,event.currentTarget);
// }
// document.body.addEventListener('click', popup);
//
// document.body.addEventListener('click', function(){
//     console.log("click");
// });


var divs = document.querySelectorAll('#wrap div');
function changeBG(event) {
  console.log("BG changed");
  event.target.style.backgroundColor = '#000000';
  // divs[0].style.backgroundColor = '#000000';
}

console.log(divs);
for (var i = 0 ; i < divs.length ; i++){
  divs[i].addEventListener("click", changeBG);
}
