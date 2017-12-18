


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
