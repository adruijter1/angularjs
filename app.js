

(function(){
	var app = angular.module("store", []);
	
	app.controller("StoreController", function(){
		this.gegevens = naw;	
	});
	
	// Let op javascript is hoofdlettergevoelig
	var naw = [{
		voornaam: "Arjan",
		tussenvoegsel: "de",
		achternaam: "Ruijter",
		geboortedatum: 1990,
		woonplaats: "Castricum",
		klikOpMij: false,
		persoonBestaatNiet: false
	},
	{
		voornaam: "Louis",
		tussenvoegsel: "van",
		achternaam: "Gaal",
		geboortedatum: 1890,
		woonplaats: "Utrecht",
		klikOpMij: true,
		persoonBestaatNiet: false
	}];
})();