
function tani(){

  var x = document.getElementById('a').innerHTML;
  if (x.length < 50) {
    x = x + '単位くれ';
    document.getElementById('a').innerHTML = x;
  } else {
    alert('単位ゲット!!楽単すぎ');
    document.getElementById('b').innerHTML ='<a href="saisyu-kadai7.html"><input type="button" value="次へ"></a>';
  }
}
