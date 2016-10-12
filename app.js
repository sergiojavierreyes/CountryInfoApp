// Part 1
// Create a Node.js application that does the following:
// - Takes in one parameter from the command line, the name of a country. 
//Note: command line arguments can be read from the global array `process.argv`
// - Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. 
//Get it here: countries.jsonView in a new window
// - Outputs information about that specific country. Must be in the following format:
// Country: <country name>
// Top Level Domain: <tld>



var fs = require('fs')
var countryinfo = require (__dirname + '/countryinfo')
var nameOfCountry = process.argv[2]


// Part 1

// fs.readFile(__dirname +'/countries.json', function(err,data) {
// 	if(err) throw err
// 		var parseJson = JSON.parse(data) 
// 	for (var i=0; i<parseJson.length; i++)
// 		if (parseJson[i].name === nameOfCountry){
// 			console.log( 'Country: ' + parseJson[i].name + "\n" + 'Top Level Domain: ' + parseJson[i].topLevelDomain)
// 		}

// 	})


//part 2


countryinfo('filename', function (obj) {
	for (var i=0; i<obj.length; i++)
		if (obj[i].name === nameOfCountry){
			console.log( 'Country: ' + obj[i].name + "\n" + 'Top Level Domain: ' + obj[i].topLevelDomain)
		}
	})

