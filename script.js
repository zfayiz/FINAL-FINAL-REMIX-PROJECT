var something = false;
var dat = [];
var results;
var loaded;
var img = [];
var button;
var button2;
var checkshowpics = 0;
// var input = 'cat';

function setup() {
  var cnv = createCanvas(720, 400);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) - 20;
  cnv.position(x, y);

  pixelDensity(1);
  button = createButton("Search");
  button.mousePressed(submit);
  button.position(330,63);
  button.style('width', '110px');
  button.style('height', '50px');

  button2 = createButton("Add Threshold Filter");
  button2.mousePressed(ThresholdFilter);
  button2.position(50,240);

  button3 = createButton("Invert Colors");
  button3.mousePressed(InvertFilter);
  button3.position(50,340);
  
  button4 = createButton("Posterize");
  button4.mousePressed(PosterizeFilter);
  button4.position(50,440);

  button5 = createButton("Black & White");
  button5.mousePressed(GrayFilter);
  button5.position(1025,240);

  button6 = createButton("Add Text");
  button6.mousePressed(AddText);
  button6.position(1025,340);

  // button7 = createButton("Blend");
  // button7.mousePressed(blend);
  // button7.position(1025,440);

  // button2 = createButton("show");
  // button2.mousePressed(showPictures);
  background(0);
 // Load the image
}

function submit(){
	console.log("about to search")
	input = $('textarea#search').val();
	console.log(input);
	getpictures();
	checkshowpics = 0;
}

function showPictures() {
	console.log("on showPictures");
	for (var i = 0; i < img.length; i++) {
		image(img[i], random(width), random(height));
		console.log("drawing" + i);
		checkshowpics = 1;
	}
}



function getpictures(){
	$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=48c19afe75b954e72afc9b36f1aa827e&tags='+input+'&per_page=10&page=1&format=json&nojsoncallback=1',function(data){
		results = data.photos.photo;
		getlinks(); 
	});

}

function getlinks(){
for(i=0; i<results.length; i++){
			dat.push('https://farm'+results[i].farm+'.staticflickr.com/'+results[i].server+'/'+results[i].id+'_'+results[i].secret+'.jpg');
			//console.log(dat);
}
	console.log(dat.length);

// Declare variable 'img'.
	// something = 1;

	for (i = 0; i < dat.length; i++) { 
		img[i] = loadImage(dat[i]);
	}

	console.log(img);
	something = true;
	console.log(something);

	
}


function draw() {
	
	

  // Displays the image at its actual size at point (0,0)
	if (something === true && img.length > 0) {
  		showPictures();
  		console.log("show pics was called");

  	//image(img[0], 0, 0);
  	//something = false;
  		console.log(something);

  		if (checkshowpics = 1){
  			console.log("pics have loaded");



	  		for (var i = 0; i < img.length; i++) {
	  			img[i].loadPixels();
	  			console.log("img" + [i] + "pixelsloaded");
	  			for (var x = 0; x < width; x++) {
	  				for (var y = 0; y < height; y++) {
	  					var loc = x + y*width;

	  					// var c = get(x, y);

	  					// set(50, 50, c);

	  					img[i].pixels[loc]

	  				}
	  			}
	  	
				// for (var y = 0; y <5000; y++) {
				 //	index=[random(img[i].pixels.length)];

				// 		var r = img[i].pixels[index+0];
				// 		// var g = pixels[img[i]]
				// 		var g = img[i].pixels[index+1];
				// 		var b = img[i].pixels[index+2];


				// 		// var bright = (r+g+b)/3;
				// 		// fill(bright);


				// 		//console.log("img"+[i] + "pixelsupdated");

				// }

				img[i].updatePixels();
				image(img[i], 0, 0);

				//filter(INVERT);
			}

	  		something = false;
			
		}
  	}

}

// function mousePressed() {
// 	console.log(mouseX, mouseY);
// }

function mouseDragged() {
	console.log(mouseX, mouseY);
	noFill();

  rect(mouseX, mouseY, mouseX, mouseY);



}

function ThresholdFilter() {

	filter(THRESHOLD);
}

function InvertFilter() {

	filter(INVERT);
}

function PosterizeFilter() {

	filter(POSTERIZE, 3);
}

function GrayFilter() {

	filter(GRAY);
}

function AddText() {

input = createInput();
input.style('width', '200px');
input.style('height', '20px');
input.style('border', '2px solid #ccc');
input.style('padding', '12px 20px 12px 40px');
input.style('font-size', '16px');

  input.position(880, 60);

  button = createButton('Add');
  button.style('width', '100px');
  button.position(1155, 60);
  button.mousePressed(greet);

  greeting = createElement('h2', '');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(20);
}

function greet() {
  var name = input.value();
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), random(255), random(255));
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}

// function blend() {



// }



				//filter(INVERT);
// function loaaaad(){
	
// 	something = 0;
// 	loaded = 1;
// }

