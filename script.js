var car = {
  name: "BMV",
  doors: 4,
  color: "white",
  width: 2,
  length: 4,
  country: "Germany",
  one_litr: 5,//один литр на 5км

  consumption: function (km) {
    return km / this.one_litr;
  },

  showInfo: function (){
    alert("ваша машина " + this.name + "\n" +
     "количество дверей " + this.doors + "\n" +
     "цвет " + this.color + "\n" +
     "ширина " + this.width + "\n" +
     "длина " + this.length + "\n" +
     "производство " + this.country);
  }
}

car.showInfo();
alert("вам нужно потратить " + car.consumption(200) + " литров");
