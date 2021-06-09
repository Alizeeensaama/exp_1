var image0;
var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
var image7;
var image8;
var image9;
var image10;
var image11;
var image12;
var image13;
var CAS;

function setup() {
	createCanvas (2480,956);
	background (25);
	image0=loadImage ("assets/anim_0.png");
	image1=loadImage ("assets/anim_1.png");
	image2=loadImage ("assets/anim_2.png");
	image3=loadImage ("assets/anim_3.png");
	image4=loadImage ("assets/anim_4.png");
	image5=loadImage ("assets/anim_5.png");
	image6=loadImage ("assets/anim_6.png");
	image7=loadImage ("assets/anim_7.png");
	image8=loadImage ("assets/anim_8.png");
	image9=loadImage ("assets/anim_9.png");
	image10=loadImage ("assets/anim_10.png");
	image11=loadImage ("assets/anim_11.png");
	image12=loadImage ("assets/anim_12.png");
	image13=loadImage ("assets/anim_13.png");
	CAS=0;
}

function draw(){
	test();


}

function mouseMoved () {

	if ( 0<mouseY && mouseY<76) {
		CAS=13;
		 }

	if ( 77<mouseY && mouseY< 152) {
		CAS=12;
		 }


	if ( 153<mouseY && mouseY<228) {
		CAS=11;
		 }

    if ( 229<mouseY && mouseY<304) {
		CAS=10;
		 }

	 if ( 304<mouseY && mouseY<380) {
		CAS=9;
		 }

		 if ( 381<mouseY && mouseY<456) {
		CAS=8;
		 }

		 if ( 457<mouseY && mouseY<532) {
		CAS=7;
		 }

 		if ( 533<mouseY && mouseY<609) {
 			CAS=6;
 			 }


 		if ( 610<mouseY && mouseY<686) {
 			CAS=5;
 			 }

 	    if ( 687<mouseY && mouseY<763) {
 			CAS=4;
 			 }

 		 if ( 764<mouseY && mouseY<840) {
 			CAS=3;
 			 }

 			 if ( 841<mouseY && mouseY<916) {
 			CAS=2;
 			 }

 			 if ( 917<mouseY && mouseY<919) {
 			CAS=1;
 			 }

			 if ( 920<mouseY && mouseY<1000) {
 			CAS=0;
 			 }

}

function test(){
	switch(CAS){
		case 0 : 		image(image0, 0, 0); break;
		case 1 :		image(image1, 0, 0); break;
		case 2 :    image(image2, 0, 0); break;
		case 3 :    image(image3, 0, 0); break;
		case 4 :    image(image4, 0, 0); break;
		case 5 :    image(image5, 0, 0); break;
		case 6 :    image(image6, 0, 0); break;
		case 7 : 		image(image7, 0, 0); break;
		case 8 :		image(image8, 0, 0); break;
		case 9 :    image(image9, 0, 0); break;
		case 10 :   image(image10, 0, 0); break;
		case 11 :   image(image11, 0, 0); break;
		case 12 :   image(image12, 0, 0); break;
		case 13 :   image(image13, 0, 0); break;
	}
	}
