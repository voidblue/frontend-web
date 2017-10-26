var list = document.getElementById('list');
var trend = document.getElementById('trend');
var issue = document.getElementById('issue');
var enter = document.getElementById('enter');
var getmore = document.getElementById('getmore');
var loading = document.getElementById('loading');
var urlbase = 'http://1boon.kakao.com/';
var page = 1;
var urlend = '?pagesize=3&page='
var currentTarget = 'trending.json'
var listtext = ''


getJSON ('http://1boon.kakao.com/ch/trending.json' + urlend, done);

trend.addEventListener('click', trendclicked);
function trendclicked(event){
  currentTarget = 'trending.json';
  listtext = '';
  page = 1;
  getJSON('http://1boon.kakao.com/ch/' + currentTarget + urlend, done);
  trend.className = 'active';
  issue.className = '';
  enter.className = '';
}

issue.addEventListener('click', issueclicked);
function issueclicked(event){
  currentTarget = 'issue.json';
  listtext = '';
  page = 1;
  getJSON('http://1boon.kakao.com/ch/' + currentTarget + urlend, done);
  trend.className = '';
  issue.className = 'active'
  enter.className = '';
}

enter.addEventListener('click', enterclicked);
function enterclicked(event){
  currentTarget = 'enter.json';
  listtext = '';
  page = 1;
  getJSON('http://1boon.kakao.com/ch/' + currentTarget + urlend, done);
  trend.className = '';
  issue.className = '';
  enter.className = 'active'
}



getmore.addEventListener('click', getmoreclikced);
function getmoreclikced(event){
  page++;
  getJSON('http://1boon.kakao.com/ch/'+ currentTarget + urlend + page, done);
}

function done(result){
  list.innerHTML += '<div class="text-center"> <span class="glyphicon glyphicon-refresh" id = "loading"></span> 로딩중 </div>'

  for (var i = 0; i < result.data.length ; i++){
    listtext += '<span class="xxx"><a href = \"+ urlbase + result.data[i].path'+ '\">' + result.data[i].title + '</a><br>';
    listtext += '<img src = ' + result.data[i].coverImage +' width="300px"><br>';
    listtext += '<span> 추천수 : </span>'+ result.data[i].totalView + '</li></span>';
  }
  // loading.cassName = '';
  // loading.Text = '';
  list.innerHTML = listtext;
}
