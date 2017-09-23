// document.getElementById()
// document.querySelectorAll()
// document.getElementsByName()
// document.createElement()
document.appendChild()

$$('#header')
$$('a img')
$$('.daumhide').length
$$('form[name=daumSearch]')

var all = $$('ul');
var length = all.length;
for(var i=0; i < length; i++){
  all[i].style.border = '1px solid red';
}
