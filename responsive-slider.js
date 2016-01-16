$(function() {

//--------------------------------------------------------------//
// MAIN SLIDER CONFIGURATION STARTS HERE
//--------------------------------------------------------------//
	//////////////////////////////////////////
	//	SLIDER PREV + NEXT CONTROLS BUTTONS. 
	//	DO NOT CHANGE ANYTHING IN THIS SECTION
	//////////////////////////////////////////
	var $prev = $('.prev');
	var $next = $('.next');


	//////////////////////////////////////////
	//	SLIDER NAVIGATION CONTROLS BUTTONS
	// 	DO NOT CHANGE ANYTHING IN THIS SECTION
	//////////////////////////////////////////
	var $slider_nav = $('.slider-nav');


	//////////////////////////////////////////
	//	SLIDER OBJECTS
	//	DO NOT CHANGE ANYTHING IN THIS SECTION
	//////////////////////////////////////////
	var $slider = $('.slider');
	var $slide_item = $('.slide-item');
	var $first_slide_item = $('.slide-item:first-child');
	var $last_slide_item = $('.slide-item:last-child');
	var $frame = $('.frame');


	//////////////////////////////////////////
	//	SLIDER SETTINGS
	// 	DO NOT CHANGE ANYTHING IN THIS SECTION
	//////////////////////////////////////////
	//-- Count --//
	var count = 0;

	//-- Prev & Next Values --//
	var next_val = '-=100' + '%';
	var prev_val = '+=100' + '%';

	//-- Slider Values --//
	var amount_of_slide_item = $slide_item.length;
	var slider_width_slide_fx = amount_of_slide_item * 100 + 100 + '%';
	var slider_width_fade_fx = 100 + '%';
	var slider_height = 100 + '%';
	var slide_item_width = 100 / (amount_of_slide_item + 1) + '%';








	//////////////////////////////////////////
	//	SLIDER VALUES
	// 	YOU CAN CHANGE VALUES IN SECTION
	//////////////////////////////////////////

	//-- Transitiion Values --//
	var slide_pause = 10000; // Pauses between slides. 1 sec = 1000; 2 sec = 2000 etc.
	var animation_speed = 1000; // Animation duration. 

	//-- Slider Nav settings --//
	var slider_nav_color = '#ccc'; // Color of slider nav when active state. Must match color of hover state in css.


	//-- Slide item number --//
	/* 
		INSTRUCTIONS
		- Add the amount of slides you have. e.g. var slide_item_1; var slide_item_2; etc.
		- 'var slide_item_1' is your FIRST SLIDE. DO NOT CHANGE THE VALUE.
		- 'var end_of_slide' is your LAST SLIDE. DO NOT CHANGE THE VALUE.
		- Anything between 'slide_item_1' & 'end_of_slide', you can assign its value;
		- To assign  the value correctly, simply subtract 1 from the slide item number.
		e.g 'var slide_item_5 = 4' (slide_item_5 - 1 = 4. '4' will be the value);
	*/
	var slide_item_1 = 0; // First slide. Leave the value as 0 and do not remove
	var slide_item_2 = 1;
	var slide_item_3 = 2;
	var slide_item_4 = 3;
	var end_of_slide = $slide_item.length - 1; // Last slide. Leave the value as it is and do not remove.

	//--------------------------------------------------------------//
	// MAIN SLIDER CONFIGURATION ENDS HERE
	//--------------------------------------------------------------//





	//--------------------------------------- SLIDING EFFECT STARTS HERE ---------------------------------------//
	///////////////////////////////////////////////
	//	DEFAULT SLIDER SETTINGS +--- STARTS HERE
	//	DO NOT CHANGE ANYTHING IN THIS SECTION
	///////////////////////////////////////////////
	
	//-- SLIDE ITEM POSITION SETTINGS --//
	$slide_item.css('float', 'left');
	$slide_item.css('position', 'relative');

	//-- SLIDER WIDTH SETTINGS --//
	$slide_item.css('width', slide_item_width);
	$slider.css('width', slider_width_slide_fx );

	//-- ADDS THE FIRST SLIDE TO THE END OF THE SLIDE --//
	$first_slide_item.clone().appendTo($slider);

	//-- SETS THE COLOR TO THE FIRST SLIDER NAVIGATION BUTTON --//
	$slider_nav.eq(count).css('background-color', slider_nav_color);

	//-- TRACKS THE CURRENT COUNT OF THE SLIDE --//
	//console.log('the current count is ' + count);
	
	///////////////////////////////////////////////
	//	SLIDER WIDTH SETTING +--- ENDS HERE
	///////////////////////////////////////////////


	/////////////////////////////////////////////////
	//	HIDE PREV AND NEXT BUTTONS +--- STARTS HERE
	// 	DO NOT CHANGE ANYTHING IN THIS SECTION
	/////////////////////////////////////////////////
	$frame.on({
		mouseenter: function() {
			$('.ctrl_btn').removeClass('hide-btn');
			$('.ctrl_btn').addClass('show-btn');
		},
		mouseleave: function() {
			$('.ctrl_btn').removeClass('show-btn');
			$('.ctrl_btn').addClass('hide-btn');
		}
	});
	/////////////////////////////////////////////////
	//	HIDE PREV AND NEXT BUTTONS +--- ENDS HERE
	/////////////////////////////////////////////////


	///////////////////////////////////////////////
	//	PREV AND NEXT BUTTONS +--- STARTS HERE
	//	
	//	DO NOT CHANGE ANYTHING IN THIS SECTION
	///////////////////////////////////////////////
	$next.click(function() {
		count++;
		$slider_nav.css('background-color', '');
		$slider_nav.eq(count).css('background-color', slider_nav_color);
		//console.log('the current count is ' + count);
		$slider.animate({'margin-left': next_val}, animation_speed, function() {
			if(count > end_of_slide) {
				$slider.css('margin-left', 0);
				count = 0;
				$slider_nav.eq(0).css('background-color', slider_nav_color);

			}	
		});
	});

	$prev.click(function() {
		if(count > 0) {
			count--;
			$slider.animate({'margin-left': prev_val}, animation_speed);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			//console.log('the current count is ' + count);
		}
	});
	///////////////////////////////////////////////
	//	PREV AND NEXT BUTTONS +--- ENDS HERE
	///////////////////////////////////////////////


	///////////////////////////////////////////////////////////
	//	AUTOMATIC SLIDER && SLIDER NAV COLOR +--- STARTS HERE
	//
	// 	DO NOT CHANGE ANYTHING IN THIS SECTION
	///////////////////////////////////////////////////////////
	setInterval(function() {
		$slider.animate({'margin-left': next_val}, animation_speed, function() {
			count++;
			if(count == amount_of_slide_item) {
				count = 0;
				$slider.css('margin-left', 0);
				$slider_nav.eq(count).css('background-color', slider_nav_color);
				$slider_nav.eq(count - 1).css('background-color', '');
			} else if(count < count + 1) {
				$slider_nav.eq(count).css('background-color', slider_nav_color);
				$slider_nav.eq(count - 1).css('background-color', '');
			}
			//console.log('the amount of slide item = ' + end_of_slide);
			//console.log('the current count is ' + count);
		});
	}, slide_pause);
	///////////////////////////////////////////////
	//	AUTOMATIC SLIDER +--- ENDS HERE
	///////////////////////////////////////////////


	///////////////////////////////////////////////
	//	SLIDER NAVIGATION +--- STARTS HERE
	//
	// 	YOU CAN CHANGE CONTENT IN THIS SECTION
	//	SEE THE INSTRUCTION BELOW
	///////////////////////////////////////////////

	/* 
		INSTRUCTIONS
		1. COPY AND PASTE THE TEMPLATE TO DUPLICATE EACH SLIDE
		2. REPLACE THE 'xx' WITH THE CORRESPONDING SLIDE_ITEM_X VALUE;
		3. PASTE TEMPLATE BETWEEN START AND END POINTS.

		//------- COPY TEMPLATE FROM HERE -------//

		//--SLIDE (INSERT SLIDE NUMBER HERE) --//
		$slider_nav.eq(xx).click(function() { // Repl
			count = xx;
			if(count < amount_of_slide_item) {
				count = xx;
				$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
				$slider_nav.css('background-color', '');
				$slider_nav.eq(count).css('background-color', slider_nav_color);
				//console.log('the current count is ' + count);
			} else {
				count = xx;
				$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
				$slider_nav.css('background-color', '');
				$slider_nav.eq(count).css('background-color', slider_nav_color);
				//console.log('the current count is ' + count);
			}
		});

		//------- COPY TEMPLATE TO HERE -------//

	*/

	//-- SLIDE_ITEM_1 --// //-- DO NOT DELETE!
	$slider_nav.eq(0).click(function() {
		count = 0;
		if(count >= 0) {
			count = 0;
			$slider.animate({'margin-left': 0}, animation_speed);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			//console.log('the current count is ' + count);
		}
	});

	//-- STARTING POINT. PASTE THE REST OF SLIDES BELOW HERE. THE NEXT SLIDE TO FOLLOW SHOULD BE YOUR SECOND SLIDE AND SO ON--//

	//--SLIDE_ITEM_2 --//
	$slider_nav.eq(1).click(function() {
		count = 1;
		if(count < amount_of_slide_item) {
			count = 1;
			$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			//console.log('the current count is ' + count);
		} else {
			count = 1;
			$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			//console.log('the current count is ' + count);
		}
	});

	//--SLIDE_ITEM_3 --//
	$slider_nav.eq(2).click(function() {
		count = 2;
		if(count < amount_of_slide_item) {
			count = 2;
			$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			//console.log('the current count is ' + count);
		} else {
			count = 2;
			$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			//console.log('the current count is ' + count);
		}
	});

	//--SLIDE_ITEM_4 --//
	$slider_nav.eq(3).click(function() {
		count = 3;
		if(count < amount_of_slide_item) {
			count = 3;
			$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			//console.log('the current count is ' + count);
		} else {
		count = 3;
			$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			//console.log('the current count is ' + count);
		}
	});


	//-- ENDING POINT. STOP PASTING THE REST OF SLIDES FROM HERE. THIS IS THE END POINT OF PASTING YOUR SLIDES--//

	//--END OF SLIDE --// THIS IS YOUR LAST SLIDE DO NOT DELETE
	$slider_nav.eq(end_of_slide).click(function() {
		count = end_of_slide;
		if(count <= end_of_slide) {
			count = end_of_slide;
			$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(end_of_slide).css('background-color', slider_nav_color);
			//console.log('the current count is ' + count);
		} else {
			count = end_of_slide;
			$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(end_of_slide).css('background-color', slider_nav_color);
			//console.log('the current count is ' + count);
		}
	});

	///////////////////////////////////////////////
	//	SLIDER NAVIGATION +--- ENDS HERE
	///////////////////////////////////////////////

//--------------------------------------- SLIDING EFFECT ENDS HERE ---------------------------------------//
});