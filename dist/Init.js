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
