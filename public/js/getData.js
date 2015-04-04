function loadJSONDoc()
{
  var answer;
  var xmlhttp;

  xmlhttp=new XMLHttpRequest();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    answer = JSON.parse(xmlhttp.responseText)
    console.log(answer[0]);
    var shop = answer[0].shopName;
    var address = answer[0].address;
    var phone = answer[0].phone;
    document.getElementById('shopName').innerHTML = shop;
    document.getElementById('address').innerHTML = address;
    document.getElementById('phone').innerHTML = phone;
    }
}
xmlhttp.open("GET","/items",true);
xmlhttp.send();
}

document.addEventListener("DOMContentLoaded", function(event) {
  loadJSONDoc();
});

