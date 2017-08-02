 
var lines, markov, data1;
var font;
var input;

function preload() {
  data1 = loadStrings('library/data1.txt');
  font = loadFont('library/Inconsolata-Regular.ttf')
}

function setup() {

  textFont(font);
  
    
  lines = ["s̷̏̏͂y̨͆l̅vͯ̀̎͡i͂ͥ͌̋̋ͯͪa̛͊̊͌̚ ̎̕p̷̈͐̅̈́l͊̂͋̄̚͡a̡̋th̓͌̓̈̃̍"];

  // create a markov model w' n=4
  markov = new RiMarkov(4);

  // load text into the model
  markov.loadText(data1.join(' '));

  var title = createDiv(lines);
  title.class("title");
}

function drawText(output) {

  textAlign(CENTER);
  var poem = createP(output);
  poem.class("content");
}

function keyPressed() {
    if (keyCode == 32) { 
      lines = markov.generateSentences(1);

        var rs = new RiString(lines);
        rs1 = new RiString(rs._text[0])
        var words = rs1.words();
        var pos = rs1.pos();
        //console.log(pos);
        console.log(words);
        var output = '';
        for (var i = 0; i < words.length; i++){
            if (/nn.*/.test(pos[i])){
                output += RiTa.randomWord(pos[i], 2);
            } else if (RiTa.isPunctuation(words[i])){ 
                output += words[i];
                i = words.length;
            }else {
                output += words[i];
            }
            if (i == 8) {output += "<br>";}
            if (i!==words.length-2){output += " ";}
        }

      drawText(output);
    }
    
    else if (keyCode == ENTER) {
        location.reload()
    }
    
    else if (keyCode == BACKSPACE) {
        var ele = document.getElementsByClassName('content');
        var lastEle = ele[ ele.length-1 ];
        lastEle.remove();

    }
    
    else if (keyCode == DOWN_ARROW) {
        drawText("<br>");
    }
}