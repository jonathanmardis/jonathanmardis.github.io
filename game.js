const questions = [{
		q:"Which Foreigner song do you like best?",
		a:"Urgent",
		b:"Cold as Ice",
		c:"Feels Like the First Time"
	},
	{
		q:"Which movie genre do you prefer?",
		a:"Drama",
		b:"Horror",
		c:"Comedy"
	},
	{
		q:"Where would you rather go on vacation?",
		a:"Beach",
		b:"Mountains",
		c:"Home on the sofa"
	},
	{
		q:"Which profession suits you best?",
		a:"Butcher",
		b:"Baker",
		c:"Candlestick Maker"
	},
	{
		q:"Which book do you borrow from the library?",
		a:"A Tale of Two Cities",
		b:"Horton Hears a Who",
		c:"I'm OK-You're OK"
	},
	{
		q:"You've come to a fork in the road. What do you do?",
		a:"Go left",
		b:"Go right",
		c:"Pick it up"
	},
	{
		q:"If Peter Piper picked a peck of pickled peppers, what did he cook with them?",
		a:"A gyro",
		b:"A pizza",
		c:"A banana crepe"
	},
	{
		q:"You've been offered a sports scholarship. Which sport is it for?",
		a:"Basketball",
		b:"Hockey",
		c:"Swimming"
	},
	{
		q:"What is your height?",
		a:"About yea high",
		b:"Five apples",
		c:"5'3\""
	},
	{
		q:"Santa is delivering presents from St. Louis to Chicago at a speed of 160 children an hour. For every present Santa delivers, he eats one cookie. How many glasses of milk will it take Santa to reach Chicago?",
		a:"One really big glass",
		b:"289,441 glasses of whole milk",
		c:"803,275 glasses of strawberry milk"
	},
	{
		q:"Who is the oldest?",
		a:"Jessica",
		b:"Rachel",
		c:"Jonathan"
	},
	{
		q:"Which present would you rather receive for Christmas?",
		a:"Football",
		b:"Tickle Me Elmo",
		c:"Easy Bake Oven"
	},
	{
		q:"If a tree falls in the forest, what sound does it make?",
		a:"Krrrrrwhop",
		b:"Bwoooosh",
		c:"Kabam"
	},
	{
		q:"What part of a chocolate cornet do you eat first?",
		a:"The head",
		b:"The tail",
		c:"The chocolate"
	},
	{
		q:"What's in my pocket?",
		a:"The One Ring",
		b:"Pocket sand",
		c:"Lint"
	},
];
const fortunes = [
	"Avoid making any longterm plans.",
	"Don't expect the unexpected.",
	"You will encounter something new.",
	"Something that happened 2 months ago will happen again.",
	"You will have great luck when you play the lottery.",
	"Don't be afraid of ghosts.",
	"You will remember something that you forgot you lost.",
	"Try taking it easy.",
	"It may rain tomorrow",
	"Great fortune will come to you, but only if you shout'Yabba Dabba Doo!'",
	"The future is yours to decide."
];

const reindeers = [ "Comet", "Cupid", "Prancer", "Blitzen", "Dasher", "Dancer", "Donder", "Vixen", "Rudolf" ];

var q = document.getElementById("question");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var result = document.getElementById("result");
var qnum = 0;
var score = 0;

var qs = [];
for (let i = 0; i < 4; i++) {
	let n = Math.floor(Math.random() * questions.length);
	while (qs.includes(n)) {
		n = Math.floor(Math.random() * questions.length);
	}
	qs.push(n);
}

function fa() {
	score += qnum * 3;
	showquestion();
}

function fb() {
	score += qnum * 3 + 1;
	showquestion();
}

function fc() {
	score += qnum * 3 + 2;
	showquestion();
}

function showquestion() {
	if (qs.length == 0) {
		showresult();
		return ;
	}
	qnum = qs.pop();
	var question = questions[qnum];
	q.innerText = question.q;
	a.innerText = "A. " + question.a;
	b.innerText = "B. " + question.b;
	c.innerText = "C. " + question.c;
}

function showresult() {
	var elem = q.parentElement;
	elem.remove();
	var reindeer = reindeers[score % reindeers.length];
	var fortune = fortunes[score % fortunes.length];
	var number = score % 100;
	result.innerHTML = "<img src=\"" + reindeer + ".jpg\" width=\"330\" height=\"510\"><br>" + reindeer + "! You are kind, intelligent, beautiful, passionate, hardworking, and independent. " + fortune + " Your lucky number is " + number + ".";
}

showquestion();