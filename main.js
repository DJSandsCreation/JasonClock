function getTime() {
  a = new Date()
  b = a.getHours()
  c = a.getMinutes()
  d = a.getSeconds()
  document.getElementById('box').innerHTML = b + ":" + c + ":" + d;
  setTimeout('getTime()', 300);


  //  The zero numbers required for seconds and minutes //

  if (c < 10) {
    document.getElementById('box').innerHTML = b + ":" + "0" + c + ":" + d;
  }

  if (d < 10)
    document.getElementById('box').innerHTML = b + ":" + c + ":" + "0" + d;
}