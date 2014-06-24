

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
		geboortejaar: 1990,
		woonplaats: "Castricum",
		klikOpMij: true,
		persoonBestaatNiet: false,
		saldoBankrekening: 78,
		geboortedatum: "1968-08-30",
		review: [
			{
				stars: 5,
				body: "Dit is een aardig persoon",
				author: "wdevries@hotmail.com",
				newsletter: "checked"
			},
			{
				stars: 1,
				body: "Nederland gaat winnen vanavond",
				author: "wvanbemmelen@gmail.com",
				newsletter: ""
			},
			{
				stars: 3,
				body: "Chili gaat winnen vanavond",
				author: "buenosdias@live.com",
				newsletter: ""
			}		
		]
	},
	{
		voornaam: "Louis",
		tussenvoegsel: "van",
		achternaam: "Gaal",
		geboortejaar: 1890,
		woonplaats: "Utrecht",
		klikOpMij: true,
		persoonBestaatNiet: false,
		saldoBankrekening: 123.45,
		geboortedatum: "2005-08-03",
		
	},
	{
		voornaam: "Robin",
		tussenvoegsel: "van",
		achternaam: "Persie",
		geboortejaar: 1982,
		woonplaats: "Rotterdam",
		klikOpMij: true,
		persoonBestaatNiet: false,
		saldoBankrekening: 12000000.15,
		geboortedatum: "1982-12-21"
	},
	{
		voornaam: "Arjan",
		tussenvoegsel: "",
		achternaam: "Robben",
		geboortejaar: 1982,
		woonplaats: "Bedum",
		klikOpMij: true,
		persoonBestaatNiet: false,
		saldoBankrekening: 23000000.01,
		geboortedatum: "1984-01-23"
	}];
})();