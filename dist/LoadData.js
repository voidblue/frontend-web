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
