var Notes = {
  $wrap: $(document.body),
  storageKey: 'notes'
};


(function(app, $){

  var data = [];
  var $noteStringField = $('#memo');

  app.collection = {
    set: function(arr){
      data = arr;
      app.$wrap.trigger("addCollection", [data]);
    },
    toJSON: function() {
      return data;
    },
    add: function (note) {
      data.pop();
      data.push(note);
      app.$wrap.trigger("addCollection", [data]);
    }
  }
})(Notes, jQuery);

(function(app){

  app.model = {

    content :''

  };
})(Notes);

(function(app) {

  app.util = {
    storage : {
      load: function () {
        console.log('storage.load()');
        return JSON.parse(localStorage.getItem(app.storageKey) || "[]");
      }
    }
  };


})(Notes);




(function($, app){

  var $noteStringField = $('#memo');
  var noteTemplateHtml = $('#noteTemplate').html();

  app.view ={

    saveNote: function(event){

      var contents = $noteStringField[0].value;
      var note = $.extend({}, app.model, {
          content : contents
      });

      console.log('new note : ', note)
      app.collection.add(note);
    },

    render: function(){
      if(app.collection.toJSON()[0] === undefined){
        $noteStringField.html(tmpl(noteTemplateHtml, {notes: "" } ));
      }
      else{
        $noteStringField.html(tmpl(noteTemplateHtml, {notes: app.collection.toJSON()[0] } ));
      }
    },
  };

  app.$wrap.on('addCollection', app.view.render);


})(jQuery, Notes);


(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
      tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

          // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

          // Convert the template int o pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
        + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();







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
