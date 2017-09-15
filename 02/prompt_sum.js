notnull = true;
list = [];
pointer = 0;
while(notnull){
  var num = window.prompt('숫자를 받습니다. Cancel버튼을 누르면 모두 더합니다.')
  if(num != null){
    list[pointer] = parseInt(num);
    pointer++;
  }
  else{
    notnull = false;
  }
}
getprompt(list, pointer);

function getprompt(list, pointer){
  var sum = 0;
  for (var x = 0 ; x < pointer ; x++){
    sum += list[x];
  }
  alert("더한 값은 "+sum+"입니다.");
}
