 
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

        var output = '';
        for (var i = 0; i < words.length; i++){
            if (RiTa.isNoun(words[i])){
                output += RiTa.randomWord('nn', 2);
            } else if (RiTa.isPunctuation(words[i])){ 
                i = words.length;
            } else {
                output += words[i];
            }
            output += " ";
        }

      drawText(output);
    }
    
    else if (keyCode == ENTER) {
        
    }
}

 








//var input;
//var button;
//
//
//
//function setup(){
//    noCanvas;
//    
//    
//    input = createInput('it was a dark and stormy night.');
//    button = createButton('submit');
//    input.changed(processRita);
//    button.mousePressed(processRita);
//    input.size(300);
//}
//
//function processRita(){
//    var s = input.value();
//    var rs = new RiString(s);
//    var words = rs.words();
//    console.log(s);
//    
//    var output = '';
//    for (var i = 0; i < words.length; i++){
//        if (RiTa.isAdjective(words[i])){
//            output += RiTa.randomWord('jj', 5);
//        } else if (RiTa.isNoun(words[i])){
//            output += RiTa.randomWord('nn', 5);
//        } else {
//            output += words[i];
//        }
//        output += " ";
//    }
//    createP(output);
//}