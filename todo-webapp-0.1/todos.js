//start...
var todo = document.getElementById('todo')


todolists = ['JS공부하기', 'sss']

var li = document.getElementById('todolist')


function renew(){
      var str = '';
      for (var i = 0 ; i < todolists.length ; i++){
            str += '<ul><li><button class="delete">×</button>'+
            '<input type="checkbox" class="toggle-checked">'+
            '<span class="text">' + todolists[i] + '</span></li><ul>'
            }
      li.innerHTML = str
    }

renew();


todo.addEventListener('keypress', entered)
function entered(event){

  var keyCode = event.keyCode;
  if(keyCode == 13){
      if(event.target.value !== '')
      todolists[todolists.length] = event.target.value
      event.target.value = ''
      renew();
  }
}
