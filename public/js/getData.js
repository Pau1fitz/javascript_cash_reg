var rounded_total;

function updateDoc(id, content ){
  document.getElementById(id).innerHTML = content;
}

document.addEventListener("DOMContentLoaded", function(event) {
  loadJSONDoc();
});

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
    updateDoc('shopName', shop), updateDoc('address', address), updateDoc('phone', phone)
    var items = answer[0].prices[0];
    var total = 0;

    for(var index in items) {

      var node = document.getElementById("orderList");
      var p = document.createElement('p');
      var price = items[index];
      p.setAttribute("class", price)
      var textnode = document.createTextNode(index + " price = $" + price);
      p.appendChild(textnode);
      node.appendChild(p);
      };
    }

    var total = 0;
    var update = document.getElementsByTagName("p");

    for(var i=0; i< update.length; ++i) {
    update[i].onclick = function() {
    var num = parseFloat(this.className).toFixed(2);
    num = parseFloat(num)
    total += num;
    rounded_total = Math.round(total*100)/100
    document.getElementById("total_paid").innerHTML = rounded_total;
  }
}

}
xmlhttp.open("GET","/items",true);
xmlhttp.send();
}

function changeDue(event){

  var change;
  var nameValue;
  var pay = document.getElementById('uniqueID').value
  document.getElementById('change_due').innerHTML = (pay - rounded_total);
};








