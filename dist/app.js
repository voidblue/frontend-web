





// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
// http://ejohn.org/blog/javascript-micro-templating/


//버튼 리스너들
(function($, global, app){


  var $noteStringField = $('#memo');
  var $menuDom = $('.menu');
  var body = document.body;

  // 삭제버튼 이벤트 잡기 위해 상위에서 이벤트 listen 하기
  $menuDom.on('click', '.btn-newnote', function(event){

    $noteStringField[0].value = "";

  });

  $menuDom.on('click', '.btn-about', function(event){
    var $appinform = $('.appinform');

    $appinform.toggleClass("hidden");
  })


  $menuDom.on('click', '.btn-savenote', app.view.saveNote)


  $menuDom.on('click', '.btn-fullscrean', function(event){
    var docElm = document.documentElement;
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      }
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      }
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      }
  });

  //처음 로딩시에 기존에 저장된 데이터 가져와서 보여주기
  var initData = app.util.storage.load();
  if(initData) {
    console.log(initData)
    app.collection.set( initData );
  }



})(jQuery, window, Notes);
