// Nesneler, birden çok değeri bir arada tutan veri yapılardır. Nesneler, süslü parantezler içerisinde tanımlanır ve her bir değer bir anahtar (key) ile ilişkilendirilir. Nesnelerdeki değerlere erişmek için nokta (.) veya köşeli parantez ([]) notasyonları kullanılır. key -value

let product = {
  id: 1,
  name: "Samsung S6",
  unitPrice: 5000,
};

let result;

result = product;
result = product.name;
result = product["name"];

let category1 = {
  id: 1,
  name: "Elektronik",
  products: [
    { id: 103, name: "Seagate SSD 1 TB", unitPrice: 1500 },
    { id: 105, name: "Logitech Mouse", unitPrice: 150 },
  ],
};

let category2 = {
  id: 1,
  name: "Bahçe Malzemeleri",
  products: [
    { id: 1, name: "Koltuk Takımı", unitPrice: 56000 },
    { id: 2, name: "Şemsiye", unitPrice: 4500 },
  ],
};

let categories = [category1, category2];

// Aşağıda öğrenci tanımlanırken dersler içerisinde birer adet tek seçenek olduğundan dizi olarak [] tanımlanabilir. Adres bilgisi içerisinde yine key-value şeklinde data tutmak istediğimiz için adres bilgisi object {} olarak tanımlanabilir.
let ogrenci = {
  id: 1,
  ad: "Ahmet",
  soyad: "Demir",
  yas: 15,
  dersler: ["Matematik", "Fizik", "Kimya"],
  adres: {
    il: "İstanbul",
    ilce: "Beşiktaş",
  },
};

result = category1;
result = category1.name;
result = category1.products;
result = category1.products[1].name;
result = ogrenci.adres.il;

console.log(result);
console.log(categories);
