$( "document" ).ready(function() {

let outputArray = ["test", "test2", "test3"];
console.log(outputputArray)

$('#button').click(function() {

let input = $("input").val();

input = input.split(",");

outputArray.push(input);

console.log(outputArray);

outputArray.forEach(function(words) {
    var firstLetter = words.charAt(0);
});

//.charAt(), .split(),



}) 
})