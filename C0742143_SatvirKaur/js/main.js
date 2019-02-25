// Your code here!
var bird = {
    genus: "corvus",
    species: "corvax",
    commonname: "raven",
    callType: "squaky",
    quote:"nevermore",
    maxofSprin: 5,
    noisy: true,
    deadly: false
};
var bear = {
    genus: "ursus",
    species: "arctor",
    commonname: "brown bear",
    callType: "roar",
    quote: "",
    maxofSprin: 3,
    noisy: true,
    deadly: true
};
var message = "Hello word";
var x = message.toLowerCase();
document.write(x + "<p>");
var days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (var i = 0; i < days.length; i++) {
    document.write(days[i]+ "<p>");
}