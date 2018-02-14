function Phone(name, brand, price, color ) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
    
   
}
Phone.prototype.printInfo = function () {
    console.log("This phone name is " + this.name + ", brand is " + this.brand + ", color is " + this.color +  ", and the price is " + this.price + "zł. ");
}
var iPhone6S = new Phone("iPhone 6S", "Apple", 2000, "black");
var SamsungGalaxyS6 = new Phone("Galaxy S6", "Samsung", 1500, "white");
var OneplusOne = new Phone("One", "Oneplus", 500, "gold");

Phone.prototype.printOSInfo = function() {
	if (this.brand === "Apple") {
		this.OS = "iOS";
	} else if (this.brand === "Samsung") {
		this.OS = "Windows";
	} else {
		this.OS = "Android";
	}
    console.log(this.brand + " " + this.name + " has " + this.OS + " operating system.");
}
iPhone6S.printInfo()
iPhone6S.printOSInfo()
SamsungGalaxyS6.printInfo()
SamsungGalaxyS6.printOSInfo()
OneplusOne.printInfo()
OneplusOne.printOSInfo()



