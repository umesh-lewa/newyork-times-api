var baseDiv = document.createElement("div");
baseDiv.setAttribute("class", "container");

var headerDiv = document.createElement("div");
headerDiv.setAttribute("class", "page-header text-center");

var h1Header = document.createElement("h1");
h1Header.setAttribute("class", "page-header text-center");

var bHeader = document.createElement("b")
bHeader.innerHTML = "THE PERTINENT TIMES";

h1Header.appendChild(bHeader);

headerDiv.appendChild(h1Header);

baseDiv.appendChild(headerDiv);

var homeButton = document.getElementById("homeNav");
homeButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionHome, baseApiURL + sectionHome + ".json?api-key=" + apiKey);
	//"https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb"
});

var worldButton = document.getElementById("worldNav");
worldButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionWorld, baseApiURL + sectionWorld + ".json?api-key=" + apiKey);
	//https://api.nytimes.com/svc/topstories/v2/world.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb
});

var politicsButton = document.getElementById("politicsNav");
politicsButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionPolitics, baseApiURL + sectionPolitics + ".json?api-key=" + apiKey);
	//https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb
});

var magazineButton = document.getElementById("magazineNav");
magazineButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionMagazine, baseApiURL + sectionMagazine + ".json?api-key=" + apiKey);
	//https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb
});

var technologyButton = document.getElementById("technologyNav");
technologyButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionTechnology, baseApiURL + sectionTechnology + ".json?api-key=" + apiKey);
	//https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb
});

var scienceButton = document.getElementById("scienceNav");
scienceButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionScience, baseApiURL + sectionScience + ".json?api-key=" + apiKey);
	//https://api.nytimes.com/svc/topstories/v2/science.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb
});

var healthButton = document.getElementById("healthNav");
healthButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionHealth, baseApiURL + sectionHealth + ".json?api-key=" + apiKey);
	//https://api.nytimes.com/svc/topstories/v2/health.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb
});

var sportsButton = document.getElementById("sportsNav");
sportsButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionSport, baseApiURL + sectionSport + ".json?api-key=" + apiKey);
	//"https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb"
});

var artsButton = document.getElementById("artsNav");
artsButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionArts, baseApiURL + sectionArts + ".json?api-key=" + apiKey);
	//"https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb"
});

var fashionButton = document.getElementById("fashionNav");
fashionButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionFashion, baseApiURL + sectionFashion + ".json?api-key=" + apiKey);
	//"https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb"
});

var foodButton = document.getElementById("foodNav");
foodButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionFood, baseApiURL + sectionFood + ".json?api-key=" + apiKey);
	//"https://api.nytimes.com/svc/topstories/v2/food.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb"
});

var travelButton = document.getElementById("travelNav");
travelButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionTravel, baseApiURL + sectionTravel + ".json?api-key=" + apiKey);
	//"https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb"
});

let apiKey = "3DVQDOga456OQnucDYgh9Pq5CzuaP6rb";
let baseApiURL = "https://api.nytimes.com/svc/topstories/v2/";
let sectionHome = "home";
let sectionWorld = "world";
let sectionPolitics = "politics";
let sectionMagazine = "magazine";
let sectionTechnology = "technology";
let sectionScience = "science";
let sectionHealth = "health";
let sectionSport = "sports";
let sectionArts = "arts";
let sectionFashion = "fashion";
let sectionFood = "food";
let sectionTravel = "travel";
let currentSection = "";
let finalApiURL = baseApiURL + currentSection + ".json?api-key=" + apiKey;;

async function getDataFromNYYTimesAPI(section, url) {
	let response = await fetch(url);
	let data = await response.json();

	let results = await data.results;

	var sectionDiv = document.getElementById(section);

	var cardDeckDiv = document.createElement("div");
	cardDeckDiv.setAttribute("class", "card-desk");

	// limiting no of stories due to 429 (Too Many Requests) error from nytimes api
	// for all stories use forEach block below with same logic
	for (let i = 0; i < 15; i++) {
		var story = results[i];

		var cardOuterDiv = document.createElement("div");
		cardOuterDiv.setAttribute("class", "container");
		cardOuterDiv.setAttribute("style", "margin-top:30px;width:100%;");

		var cardOuterRowDiv = document.createElement("div");
		cardOuterRowDiv.setAttribute("class", "row");

		var cardDiv = document.createElement("div");
		cardDiv.setAttribute("class", "card border-dark mb-3");
		cardDiv.setAttribute("style", "width:100%;");

		var cardBodyDiv = document.createElement("div");
		cardBodyDiv.setAttribute("class", "row card-body");

		var cardBodyRowDiv = document.createElement("div");
		cardBodyRowDiv.setAttribute("class", "row");

		var cardBodyRowCol8Div = document.createElement("div");
		cardBodyRowCol8Div.setAttribute("class", "col-md-8");

		var storySection = document.createElement("h3");
		storySection.setAttribute("class", "card-title font-weight-bold sectioncard");
		storySection.innerHTML = story.section.toUpperCase();

		var storyTitle = document.createElement("h4");
		storyTitle.setAttribute("class", "card-text font-weight-bold titlecard");
		storyTitle.innerHTML = story.title;

		var storyDate = document.createElement("h4");
		storyDate.setAttribute("class", "datecard");
		storyDate.innerHTML = story.created_date;

		var storyByline = document.createElement("h4");
		storyByline.setAttribute("class", "abstractcard");
		storyByline.innerHTML = story.byline;

		var storyAbstract = document.createElement("h4");
		storyAbstract.setAttribute("class", "abstractcard");
		storyAbstract.innerHTML = story.abstract;

		var storyItemType = document.createElement("h4");
		storyItemType.setAttribute("class", "abstractcard");
		storyItemType.innerHTML = story.item_type;

		var storyShortURL = document.createElement("h4");
		storyShortURL.innerHTML = story.short_url;

		var continueReadingLink = document.createElement("a");
		continueReadingLink.setAttribute("href", story.short_url);
		continueReadingLink.setAttribute("class", "card-link card-text font-weight-bold continueReading");
		continueReadingLink.innerHTML = "Continue Reading";

		cardBodyRowCol8Div.appendChild(storySection);
		cardBodyRowCol8Div.appendChild(storyItemType);
		cardBodyRowCol8Div.appendChild(storyByline);
		cardBodyRowCol8Div.appendChild(storyTitle);
		cardBodyRowCol8Div.appendChild(storyDate);
		cardBodyRowCol8Div.appendChild(storyAbstract);
		cardBodyRowCol8Div.appendChild(continueReadingLink);

		var cardBodyImgCol4OuterDiv = document.createElement("div");
		cardBodyImgCol4OuterDiv.setAttribute("class", "col-md-4");
		cardBodyImgCol4OuterDiv.setAttribute("style", "text-align:right");

		var cardBodyImgCol4Div = document.createElement("img");
		cardBodyImgCol4Div.setAttribute("class", "img-thumbnail img-fluid");
		cardBodyImgCol4Div.setAttribute("src", story.multimedia[4].url);
		cardBodyImgCol4Div.setAttribute("style", "width:300px;height:200px;");

		cardBodyImgCol4OuterDiv.appendChild(cardBodyImgCol4Div);

		//cardBodyRowDiv.appendChild(cardBodyRowCol8Div);
		//cardBodyRowDiv.appendChild(cardBodyImgCol4Div);

		//cardBodyDiv.appendChild(cardBodyRowDiv);
		cardBodyDiv.appendChild(cardBodyRowCol8Div);
		cardBodyDiv.appendChild(cardBodyImgCol4OuterDiv);

		cardDiv.appendChild(cardBodyDiv);

		//cardDeckDiv.appendChild(cardDiv);

		cardOuterRowDiv.appendChild(cardDiv);
		cardOuterDiv.appendChild(cardOuterRowDiv);

		sectionDiv.appendChild(cardOuterDiv);
	}

	/*
	results.forEach(function(story){
		
	});
	*/


}

getDataFromNYYTimesAPI("home", "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");

//getDataFromNYYTimesAPI("world","https://api.nytimes.com/svc/topstories/v2/world.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");
//getDataFromNYYTimesAPI("politics","https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");

//getDataFromNYYTimesAPI("magazine","https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");
//getDataFromNYYTimesAPI("technology","https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");
//getDataFromNYYTimesAPI("science","https://api.nytimes.com/svc/topstories/v2/science.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");
//getDataFromNYYTimesAPI("health","https://api.nytimes.com/svc/topstories/v2/health.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");
//getDataFromNYYTimesAPI("sports","https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");
//getDataFromNYYTimesAPI("arts","https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");


// giving timeout due to 429 (Too Many Requests) error from nytimes api
// even timeout does not work sometimes due to below error
//{"fault":{"faultstring":"Rate limit quota violation. Quota limit  exceeded. Identifier : 5c99e130-2e7e-4264-813a-f994f100d1f2","detail":{"errorcode":"policies.ratelimit.QuotaViolation"}}}
/*
setTimeout(function() {
	getDataFromNYYTimesAPI("fashion","https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");
}, 5000);

setTimeout(function() {
	getDataFromNYYTimesAPI("food","https://api.nytimes.com/svc/topstories/v2/food.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");
}, 5000);

setTimeout(function() {
	getDataFromNYYTimesAPI("travel","https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=3DVQDOga456OQnucDYgh9Pq5CzuaP6rb");
}, 5000);
*/