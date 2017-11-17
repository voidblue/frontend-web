//start...
var todo = document.getElementById('todo');
var todolists = [];
var text;
var li = document.getElementById('todolist');
var dels;

function renew(){
      var str = '';
      for (var i = 0 ; i < todolists.length ; i++){
            str = '<ul><li><button class="delete" name="'+i+'">×</button>'+
            '<input type="checkbox" class="toggle-checked">'+
            '<span class="text">' + text + '</span></li><ul>'
            }
            todolists[todolists.length] = str;
      dels = $('.delete');
      li.innerHTML = todolists.toString()
    }

renew();


todo.addEventListener('keypress', entered)
function entered(event){
  var keyCode = event.keyCode;
  if(keyCode == 13){
      if(event.target.value !== ''){
          text = event.target.value;
          event.target.value = ''
      }
      renew();

      for(var i = 0 ; i < dels.length ; i++){
        console.log(dels[i]);
        dels[i].on('click', btn_del);
      }
  }
}

function btn_del(event){
  i = event.target.name;
  console.log(i);
  todolists.remove(todolists[i]);
}
