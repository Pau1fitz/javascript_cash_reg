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
    var shop = answer[0].shopName;
    var address = answer[0].address;
    var phone = answer[0].phone;
    document.getElementById('shopName').innerHTML = shop;
    document.getElementById('address').innerHTML = address;
    document.getElementById('phone').innerHTML = phone;

    var items = answer[0].prices[0];
    var total = 0;

    for(var index in items) {

      var node = document.getElementById("orderList");
      var p = document.createElement('p');
      var price = items[index];
      p.setAttribute("class", price)
      var textnode = document.createTextNode(index + " price = " + price);
      p.appendChild(textnode);
      node.appendChild(p);
      };
    }
 var total = 0;

var update = document.getElementsByTagName("p");
for(var i=0; i< update.length; ++i) {
    update[i].onclick = function() {
      console.log(this.className)
      var num = parseFloat(this.className).toFixed(2);
      num = parseFloat(num)
      total += num;
      var paulis = Math.round(total*100)/100
      document.getElementById("total").innerHTML = "Amt Due: $" + paulis;
    }
}

}
xmlhttp.open("GET","/items",true);
xmlhttp.send();
}

document.addEventListener("DOMContentLoaded", function(event) {
  loadJSONDoc();
});









