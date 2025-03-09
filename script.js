/*
Javascript (JS):
- Web sayfalarını dinamik hale getirmek için kullanılan bir programlama dilidir. Tarayıcı tabanlı web geliştirme için kullanılmış olsa da günümüzde:

backend (sunucu) tarafında da kullanılmaktadır.(Node.js)
mobil uygulama geliştirme (React Native, NativeScript, Ionic, Cordova)
oyun geliştirme (Unity, Phaser)
masaüstü uygulama geliştirme (Electron.Js)

JS, dinamik, yüksek seviyeli, yorumlanabilir ve nesne tabanlı bir programlama dilidir. Özellikle web geliştirme alanıda çok popülerdir.
*/

// alert("Merhaba Dünya");

// Değişkenler:
console.log("Deneme");

//Degisken tanımlarken var, let kullanabiliriz.
var a = 20;
var b = "Merhaba";
var c = 564.34;
var d = true;

let e = "İstanbul Eğitim Akademi";

console.log(e);

var urunAdi = "Elma";
var urunFiyati = 100;
var urunStokAdedi = 10;
var urunBittiMi = false;
var urunPuani = 4.5;

var kdvliFiyat = urunFiyati + urunFiyati * 0.18;
console.log(kdvliFiyat);

//Değişken Türü Bulma:
console.log(typeof urunAdi);
console.log(typeof urunFiyati);
console.log(typeof urunStokAdedi);
console.log(typeof urunPuani);
console.log(typeof urunBittiMi);
console.log(
  urunAdi +
    " " +
    urunFiyati +
    " " +
    urunStokAdedi +
    " " +
    urunPuani +
    " " +
    urunBittiMi
);

var metin = `Satın alınan ürün bilgisi: ${urunAdi}-${urunFiyati}-${urunStokAdedi}`;

console.log(metin);

//String Metodları:
var companyName = "İstanbul Eğitim Akademi";
var result;

result = companyName.toLowerCase();
result = companyName.toUpperCase();
result = companyName.slice(0, 5);
result = companyName.indexOf("Eğitim"); //bulamassa -1 döner
result = companyName.substring(0, 9);
result = companyName.replace("İstanbul", "Ankara");
result = companyName.split(" ");
result = companyName.split(" ")[1];
result = companyName.replaceAll("ğ", "g");

console.log(result);

//Number:
let number;

number = 100;
number = "100";

number = Number(number);
number = parseInt(number);
number = parseFloat(number);

let testNumber = "abc100";
testNumber = Number(testNumber);

testNumber = isNaN(testNumber); //is not a number

console.log(testNumber); //NaN > not a number
console.log(typeof testNumber);

let testNum = 41.66495;

//testNum = testNum.toFixed(3); //ondalik kısmı 3 basamak olarak sabitler.
testNum = testNum.toPrecision(4); //bastan basla 4 basamak al.

//Math Fonksiyonları:

testNum = Math.PI;
testNum = Math.E;
testNum = Math.round(2.7);
testNum = Math.ceil(2.4);
testNum = Math.floor(2.4);
testNum = Math.sqrt(64);
testNum = Math.abs(-3);
testNum = Math.pow(8, 2);
testNum = Math.min(2, 33, 4, 1, 55, 6, 3);
testNum = Math.max(2, 33, 4, 1, 55, 6, 3);

testnum = Math.floor(Math.random() * 20);

console.log(testnum);

//Diziler:
let products = ["Iphone 15 Pro", "Samsung S21", "Xiaomi Mi 11", "Huawei P40"];
console.log(products);

console.log(products[0]);
products[0] = "Iphone 12 Pro";

let urun = [
  "Yapay Zeka Destekli Web Geliştirici Eğitim",
  "300 Saat",
  ["Caner Mollaoğlu", "Osman Uzun", "Cengiz Kılıç"],
];

console.log(urun[0]);
console.log(urun[2][0]);

// Dizi Metodları:
let cities = ["İstanbul", "Ankara", "İzmir", "Adana", "Bursa", "Ankara"];
let sonuc;

sonuc = cities.length;
sonuc = cities.toString();
sonuc = cities.join(" - ");
sonuc = cities.indexOf("Adana");
sonuc = cities.lastIndexOf("Ankara");
sonuc = cities.includes("Adana"); //true, false
sonuc = cities.push("Kars"); //sona eleman ekler
sonuc = cities.pop(); //son elemanı siler
sonuc = cities.shift(); //ilk elemanı siler
sonuc = cities.unshift("Van"); //başa eleman ekler
sonuc = cities.reverse();
sonuc = cities.sort();
sonuc = cities.splice(0, 2); //0. indexten itibaren 1 eleman siler
sonuc = cities.splice(0, 0, "Malatya"); //0. indexe eleman ekler
sonuc = cities.splice(1, 2, "Hatay", "Rize"); //1. indexten başla 2 adet sil yerine Hatay ve Rize ekle
console.log(sonuc);
console.log(cities);
