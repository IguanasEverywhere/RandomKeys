var whiteKeyScales = ["A", "B", "C", "D", "E", "F", "G"];
var randomWhiteKey = Math.floor(Math.random() * 7);

var blackKeyScales = ["D-flat/C#", "E-flat/D#", "G-flat/F#", "A-flat/G#", "B-flat/A#"];
var randomBlackKey = Math.floor(Math.random() * 5);

var allRoots = ["A", "B", "C", "D", "E", "F", "G", "D-flat/C#", "E-flat/D#", "G-flat/F#", "A-flat/G#", "B-flat/A#"];
var randomAnyKey = Math.floor(Math.random() * 12);

document.getElementById("whiteButton").addEventListener("click", displayWhiteKey);

function displayWhiteKey() {
    alert(whiteKeyScales[randomWhiteKey]);
    randomWhiteKey = Math.floor(Math.random() * 7);
}

document.getElementById("blackButton").addEventListener("click", displayBlackKey);

function displayBlackKey() {
    alert(blackKeyScales[randomBlackKey]);
    randomBlackKey = Math.floor(Math.random() * 5);
}

document.getElementById("allRootsButton").addEventListener("click", displayAnyKey);

function displayAnyKey() {
    alert(allRoots[randomAnyKey]);
    randomAnyKey = Math.floor(Math.random() * 12);
}


