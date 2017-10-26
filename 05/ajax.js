// var btn = document.getElementById('btn')
//
// btn.addEventListener('click', jsonload)
//
// function jsonload(event){
//   console.log('loaded')
//
//   var req = new XMLHttpRequest();
//
//   req.open('GET', 'dummy.json', true)
//
//   console.log(req)
//   req.send()
//   req.onreadystatechange = function() {
//     if(req.readyState==4){
//       if(req.status == 200){
//       }
//     }
//   }
// }



function ajax(url, callback, data, x) {
  try {
    x = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    x.open(data ? 'POST' : 'GET', url, 1);
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data)
  } catch (e) {
    window.console && console.log(e);
  }
};


var btn = document.getElementById('btn')
btn.addEventListener('click', load)
function load() {
  ajax('http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&callback=done&pageNo=', done)
}

function done(responseText){
    console.log(responseText);
}
