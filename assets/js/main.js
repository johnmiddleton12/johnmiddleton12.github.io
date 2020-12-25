if (localStorage.getItem('darkMode') === null) {
  localStorage.setItem('darkMode', 'false');
  var darkModeOn = false;
} else {
  var darkModeOn = localStorage.getItem('darkMode');
}

var element = document.getElementById("toggleBtn");

if (darkModeOn === 'true') {
  toggleDarkMode()
  element.classList.toggle("fa-sun");
  element.classList.toggle("fa-moon");
}


function toggleDarkMode () {
    $("nav").toggleClass("bg-white").toggleClass("bg-dark").toggleClass("dark-mode");
    $("section[id!='weird']").toggleClass("dark-mode");
    $("main").toggleClass("dark-mode");
    $(".console-container").css("color", "#ffffff");
}

function myFunction() {
  
  element.classList.toggle("fa-sun");
  element.classList.toggle("fa-moon");
  if (localStorage.getItem('darkMode') === 'true') {
    localStorage.setItem('darkMode', 'false');
  } else {
    localStorage.setItem('darkMode', 'true');
  }
}

// Animated Console Text

// function([string1, string2],target id,[color1,color2])    
consoleText(['John Middleton', 'John Paul', 'Greetings.'], 'text',['darkblue','teal','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}