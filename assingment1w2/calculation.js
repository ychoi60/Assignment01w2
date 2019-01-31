function calcTotal()
{
var itemTotal = 0;
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");
var item6 = document.getElementById("item6");
var item7 = document.getElementById("item7");
var item8 = document.getElementById("item8");
var item9 = document.getElementById("item9");
var itema = document.getElementById("itema");
var itemb = document.getElementById("itemb");
var itemc = document.getElementById("itemc");
var itemd = document.getElementById("itemd");
var iteme = document.getElementById("iteme");
var itemf = document.getElementById("itemf");
var itemg = document.getElementById("itemg");
var itemh = document.getElementById("itemh");
var itemi = document.getElementById("itemi");
var itemj = document.getElementById("itemj");

(item1.checked) ? (itemTotal += 3.60) : (itemTotal += 0);
(item2.checked) ? (itemTotal += 2.50) : (itemTotal += 0);
(item3.checked) ? (itemTotal += 2.20) : (itemTotal += 0);
(item4.checked) ? (itemTotal += 1.65) : (itemTotal += 0);
(item5.checked) ? (itemTotal += 1.50) : (itemTotal += 0);
(item6.checked) ? (itemTotal += 1.65) : (itemTotal += 0);
(item7.checked) ? (itemTotal += 1.85) : (itemTotal += 0);
(item8.checked) ? (itemTotal += 2.05) : (itemTotal += 0);
(item9.checked) ? (itemTotal += 1) : (itemTotal += 0);
(itema.checked) ? (itemTotal += 1) : (itemTotal += 0);
(itemb.checked) ? (itemTotal += 1) : (itemTotal += 0);
(itemc.checked) ? (itemTotal += 1) : (itemTotal += 0);
(itemd.checked) ? (itemTotal += 1) : (itemTotal += 0);
(iteme.checked) ? (itemTotal += 1) : (itemTotal += 0);
(itemf.checked) ? (itemTotal += 2.25) : (itemTotal += 0);
(itemg.checked) ? (itemTotal += 2.25) : (itemTotal += 0);
(itemh.checked) ? (itemTotal += 2.25) : (itemTotal += 0);
(itemi.checked) ? (itemTotal += 0.99) : (itemTotal += 0);
(itemj.checked) ? (itemTotal += 1.35) : (itemTotal += 0);
var salesTaxRate = 0.13;
var orderTotal = itemTotal + (itemTotal * salesTaxRate);
alert("Your order total is $" + orderTotal);
}



