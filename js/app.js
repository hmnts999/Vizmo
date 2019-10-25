// Default cards

let cards = [
	{ name: "card1", content: "content 1" },
	{ name: "card2", content: "content 2" },
	{ name: "card3", content: "content 3" }
];

function shift(clicked_card) {
	let temp = cards.splice(clicked_card, 1)[0];
	cards.splice(0, 0, temp);

	displaycardelement();
}

function displaycardelement() {
	let displaycards = "";
	cards.forEach((item, index, arr) => {
		displaycards += `<div class="col-sm-2">
		<div class="card">
			<div class="card-body">
				<h5 class="card-1">${item.name}</h5>
				<p class="card-text">
				${item.name}.
				</p>
				<a href="#" class="btn btn-primary" onclick="shift(${index})">Prioritize</a>
			</div>
		</div>
	</div>`;
	});

	document.getElementById("card_container").innerHTML = displaycards;
}
displaycardelement();

// Addition of new Card
function addCard() {
	let cards__len = cards.length;
	cards__len++;
	let temp_card = [
		{
			name: "card" + cards__len,
			content: "content " + cards__len
		}
	];
	console.log(temp_card[0]);
	cards.push(temp_card[0]);
	displaycardelement();
}

// Show nav

eventListeners();
function eventListeners() {
	document.querySelector(".navBtn").addEventListener("click", function() {
		showNav();
	});
}
function showNav() {
	document.querySelector(".nav").classList.toggle("nav--show");
}
