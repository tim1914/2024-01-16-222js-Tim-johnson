
	let band1 = {
		name : "Pink Floyd",
		city : "London" ,
		country : "England",
		yearFormed : 1965,
		genres : ["Progressive rock", "psychedelic rock", "art rock"]
	};
	band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");

	
	let band2 = new Object();
	band2.name = "Man Man";
	band2.country = "USA";
	band2.city = "Philadelphia";
	band2.yearFormed = 2003;	
	band2.genres = ["Experimental rock"];

	//Objects printed using Object.toString
	console.log(band1.toString());
	console.log(band2);

	//access properties using dot notation or [] 
	band1.country = "USA";
	console.log("country 1 = " + band1.country);
	console.log("country 2 = " + band2["country"]);

	let propertyOfInterest = "country";
	console.log("country by variable = " + band2[propertyOfInterest]);

	band1["I haz space"] = "cats are cool";
	console.log('band1["I haz space"]', band1["I haz space"]);
	
	//access properties using key
	for (const key in band1) {
		//ES6 - works in Chrome, but not all other browsers
		console.log(`key is ${key} value is ${band1[key]}`);
	}
	
	for (const key in band2) {
		//ES5
		console.log("key is " + key +" value is "+ band2[key] );
	}
	
	var bands = [
		          { "name": "Morphine",
		        	"country": "USA",
		        	"city": "Boston",
		        	"genres": ["Alternative rock", "experimental rock", "jazz rock"] 
		          },
		          { "name": "Vitamin String Quartet",
			        "country": "USA",
			        "city": "Los Angeles",
			        "genres": ["Rock", "Pop", "Instrumental"] 
			      }
	            ];
	
	console.log("**** key values of band objects in bands array ****");
	for	(index = 0; index < bands.length; index++) {
	    var band = bands[index];
	    console.log("--- Band at index "+index+" ---");
		for (key in band) {
			//ES6
			console.log(`key is ${key} value is ${band[key]}`);
		}
	}

