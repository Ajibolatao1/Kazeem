var textArray = [
  "Digital Marketing",
  "Digital Strategy",
  "Social Media Marketing",
];
var index = 0;

function displayText() {
  var textElement = document.getElementById("displayText");
  var text = textArray[index];
  var textLength = text.length;
  var currentText = "";
  var i = 0;

  var typingInterval = setInterval(function () {
    currentText += text[i];
    textElement.innerHTML = currentText;
    i++;

    if (i === textLength) {
      clearInterval(typingInterval);
      setTimeout(function () {
        textElement.innerHTML = "";
        index = (index + 1) % textArray.length;
        displayText();
      }, 1000);
    }
  }, 100);
}

displayText();
