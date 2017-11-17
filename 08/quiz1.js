var body = $("html, body");
var bodytag = $(document.body);
var button = $('button');
// console.log(winbody.attr('width'));
// bodytag.html('<div id="dummy">dummy</div>'  + '<button type="button" id = "btn">위로 </button>');

$('button')
            .attr('style','position:absolute')
            .on('click',function(){
  body.stop().animate( {scrollTop : '0'}, 5000, function(){});
})


window.addEventListener('scroll', scrolled);
function scrolled(event){
    var btn_top = body[0].scrollTop + $(window).height() - 30;
    var btn_left = $(window).width() - 60;
    button.attr('style', 'top:'+ btn_top + 'px; left : ' + btn_left + 'px; position:absolute');
    console.log(button.attr('style'));
    console.log(body[0].scrollTop);
}
