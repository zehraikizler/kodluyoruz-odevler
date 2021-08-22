// ilk olarak prompt ile isminizi yazmayı isteyip merhaba yazısından sonra ekrana yazdırmalıyız.

let userName = prompt("İsminiz Nedir?").toUpperCase();

let Name = document.querySelector("#userName");
Name.innerHTML = `${userName}`;

var tarih=new Date(); 

var saat=tarih.getHours();
var dakika=tarih.getMinutes();
var saniye=tarih.getSeconds();	

var gun=tarih.getDay();
var textgun;

if(gun == 0){
    textgun = "Pazar"
} else if (gun == 1){
    textgun = "Pazartesi"
} else if (gun == 2){
    textgun = "Salı"
} else if (gun == 3){
    textgun = "Çarşamba"
} else if (gun == 4){
    textgun = "Perşembe"
} else if (gun == 5){
    textgun = "Cuma"
} else if (gun == 6){
    textgun = "Cumartesi"
} 

let gunSaat = document.querySelector("#date");
gunSaat.innerHTML = `${saat}.${dakika}.${saniye} ${textgun}`;
