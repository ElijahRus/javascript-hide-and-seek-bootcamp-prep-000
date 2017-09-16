function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}
function deepestChild(){
  var lis = document.getElementById('grand-node').querySelectorAll('div');
  var l= lis.length - 1
  return  lis[l]
}
function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].textContent) + n
  }
}
