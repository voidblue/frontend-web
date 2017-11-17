// $('body').fadeOut().delay(1000).fadeIn();

// $( document ).ready(function() {
//   //브라우저가 다르더라도 로딩되면 실행
//   $('div').css("background-color", "black"); //모든 div에 적용
//   $('div').css("height", "300px");
//   $('div').css("width", "500px");
//
//
//   // console.log($('div').scrollTop());
// });

//$('div').css("background-color") 색 가져오기
//$('div').css("background-color", 'yellow') 색 바꾸기


// console.log($('img').attr('src'));
// $('img').removeAttr('src');
// console.log($('img').attr('src'));


$('div').html("<h1>haha</h1>")

var xxx = $('input').val();
$('div').html(xxx);


// $('div').slideUp('slow');
// $('div').slideDown('fast');


$('#btn').on('click', function(){
  $('div').animate({top: 200}, 1000);
  $('div').animate({top: 0}, 1000);

  window.open('http://daum.net');

})
