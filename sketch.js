 
var lines, markov, data1, x = 300, y = 300;
var font;
var input;

function preload() {
  data1 = loadStrings('library/data1.txt');
  font = loadFont('library/Inconsolata-Regular.ttf')
}

function setup() {
    
  //createCanvas(windowWidth, windowHeight);
  textFont(font);
  
    
  lines = ["s̷̏̏͂y̨͆l̅vͯ̀̎͡i͂ͥ͌̋̋ͯͪa̛͊̊͌̚ ̎̕p̷̈͐̅̈́l͊̂͋̄̚͡a̡̋th̓͌̓̈̃̍"];

  // create a markov model w' n=4
  markov = new RiMarkov(4);

  // load text into the model
  markov.loadText(data1.join(' '));

  var title = createDiv(lines);
  title.id("title");
}

function drawText(output) {

  //background(255);
  textAlign(CENTER);
  var poem = createP(output);
  poem.class("content");
  //text(output, x, y, 400, 400);
}

function mouseClicked() {
  
  x = windowWidth/2-300;
  y = windowHeight/2-100;
  lines = markov.generateSentences(1);
    
    var rs = new RiString(lines);
    rs1 = new RiString(rs._text[0])
    var words = rs1.words();
    console.log(rs1);
    
    var output = '';
    for (var i = 0; i < words.length; i++){
//        if (RiTa.isAdjective(words[i])){
//            output += RiTa.randomWord('jj', 2);
//        } else
        if (RiTa.isNoun(words[i])){
            output += RiTa.randomWord('nn', 2);
        } else if (RiTa.isPunctuation(words[i])){
            //output += "\n\n";   
            i = words.length;
        } else {
            output += words[i];
        }
        output += " ";
    }

  drawText(output);
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