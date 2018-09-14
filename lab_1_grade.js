var structure_grade = 5,
    structure_partial_mark = 0,
    structure_check = "checked",
	youtube_grade = 5,
	youtube_partial_mark = 0,
	youtube_check = "checked",
	image_1_grade = 5,
	image_1_partial_mark = 0,
	image_1_check = "checked",
	image_2_grade = 5,
	image_2_partial_mark = 0,
	image_2_check = "checked",
	image_3_grade = 5,
	image_3_partial_mark = 0,
	image_3_check = "checked",
	l_html_grade = 1,
	l_html_partial_mark = 0,
	l_html_check = "checked"
	r_html_grade = 1,
	r_html_partial_mark = 0,
	r_html_check = "checked",
	l_head_grade = 1,
	l_head_partial_mark = 0,
	l_head_check = "checked",
	r_head_grade = 1,
	r_head_partial_mark = 0,
	r_head_check = "checked",
	l_title_grade = 1,
	l_title_partial_mark = 0,
	l_title_check = "checked",
	r_title_grade = 1,
	r_title_partial_mark = 0,
	r_title_check = "checked",
	l_body_grade = 1,
	l_body_partial_mark = 0,
	l_body_check = "checked",
	r_body_grade = 1,
	r_body_partial_mark = 0,
	r_body_check = "checked",
	l_h1_grade = 1,
	l_h1_partial_mark = 0,
	l_h1_check = "checked",
	r_h1_grade = 1,
	r_h1_partial_mark = 0,
	r_h1_check = "checked",
	l_div_grade = 1,
	l_div_partial_mark = 0,
	l_div_check = "checked",
	r_div_grade = 1,
	r_div_partial_mark = 0,
	r_div_check = "checked",
	l_iframe_grade = 1,
	l_iframe_partial_mark = 0,
	l_iframe_check = "checked",
	r_iframe_grade = 1,
	r_iframe_partial_mark = 0,
	r_iframe_check = "checked",
	l_ul_grade = 1,
	l_ul_partial_mark = 0,
	l_ul_check = "checked",
	r_ul_grade = 1,
	r_ul_partial_mark = 0,
	r_ul_check = "checked",
	l_li_grade = 1,
	l_li_partial_mark = 0,
	l_li_check = "checked",
	r_li_grade = 1,
	r_li_partial_mark = 0,
	r_li_check = "checked",
	l_a_text_grade = 1,
	l_a_text_partial_mark = 0,
	l_a_text_check = "checked",
	r_a_text_grade = 1,
	r_a_text_partial_mark = 0,
	r_a_text_check = "checked",
	l_a_image_grade = 1,
	l_a_image_partial_mark = 0,
	l_a_image_check = "checked",
	r_a_image_grade = 1,
	r_a_image_partial_mark = 0,
	r_a_image_check = "checked",
	br_grade = 1,
	br_partial_mark = 0,
	br_check = "checked",
	img_grade = 1,
	img_partial_mark = 0,
	img_check = "checked",
	p_grade = 1,
	p_partial_mark = 0,
	p_check = "checked",
	home_box_grade = 2,
	home_box_partial_mark = 0,
	home_box_check = "checked",
	home_to_place_grade = 1,
	home_to_place_partial_mark = 0,
	home_to_place_check = "checked",
	home_to_food_grade = 1,
	home_to_food_partial_mark = 0,
	home_to_food_check = "checked",
	home_to_hotels_grade = 1,
	home_to_hotels_partial_mark = 0,
	home_to_hotels_check = "checked",
	places_box_grade = 2,
	places_box_partial_mark = 0,
	places_box_check = "checked",
	places_to_home_grade = 1,
	places_to_home_partial_mark = 0,
	places_to_home_check = "checked",
	places_to_food_grade = 1,
	places_to_food_partial_mark = 0,
	places_to_food_check = "checked",
	places_to_hotels_grade = 1,
	places_to_hotels_partial_mark = 0,
	places_to_hotels_check = "checked",
	food_box_grade = 2,
	food_box_partial_mark = 0,
	food_box_check = "checked",
	food_to_home_grade = 1,
	food_to_home_partial_mark = 0,
	food_to_home_check = "checked",
	food_to_place_grade = 1,
	food_to_place_partial_mark = 0,
	food_to_place_check = "checked",
	food_to_hotels_grade = 1,
	food_to_hotels_partial_mark = 0,
	food_to_hotels_check = "checked",
	hotels_box_grade = 2,
	hotels_box_partial_mark = 0,
	hotels_box_check = "checked",
	hotels_to_home_grade = 1,
	hotels_to_home_partial_mark = 0,
	hotels_to_home_check = "checked",
	hotels_to_place_grade = 1,
	hotels_to_place_partial_mark = 0,
	hotels_to_place_check = "checked",
	hotels_to_food_grade = 1,
	hotels_to_food_partial_mark = 0,
	hotels_to_food_check = "checked",
	home_banner_grade = 2,
	home_banner_partial_mark = 0,
	home_banner_check = "checked",
	places_banner_grade = 2,
	places_banner_partial_mark = 0,
	places_banner_check = "checked",
	food_banner_grade = 2,
	food_banner_partial_mark = 0,
	food_banner_check = "checked",
	hotels_banner_grade = 2,
	hotels_banner_partial_mark = 0,
	hotels_banner_check = "checked",
	home_img_1_grade = 1,
	home_img_1_partial_mark = 0,
	home_img_1_check = "checked",
	home_img_2_grade = 1,
	home_img_2_partial_mark = 0,
	home_img_2_check = "checked",
	home_img_3_grade = 1,
	home_img_3_partial_mark = 0,
	home_img_3_check = "checked",
	places_img_1_grade = 1,
	places_img_1_partial_mark = 0,
	places_img_1_check = "checked",
	places_img_2_grade = 1,
	places_img_2_partial_mark = 0,
	places_img_2_check = "checked",
	places_img_3_grade = 1,
	places_img_3_partial_mark = 0,
	places_img_3_check = "checked",
	food_img_1_grade = 1,
	food_img_1_partial_mark = 0,
	food_img_1_check = "checked",
	food_img_2_grade = 1,
	food_img_2_partial_mark = 0,
	food_img_2_check = "checked",
	food_img_3_grade = 1,
	food_img_3_partial_mark = 0,
	food_img_3_check = "checked",
	hotels_img_1_grade = 1,
	hotels_img_1_partial_mark = 0,
	hotels_img_1_check = "checked",
	hotels_img_2_grade = 1,
	hotels_img_2_partial_mark = 0,
	hotels_img_2_check = "checked",
	hotels_img_3_grade = 1,
	hotels_img_3_partial_mark = 0,
	hotels_img_3_check = "checked",
	part_2_contents_grade = 10,
	part_2_contents_partial_mark = 0,
	part_2_contents_check = "checked",
	structure_comments = "",
	youtube_comments = "",
	image_1_comments = "",
	image_2_comments = "",
	image_3_comments = "",
	l_html_comments  = "",
	r_html_comments  = "",
	l_head_comments  = "",
	r_head_comments  = "",
	l_title_comments = "",
	r_title_comments = "",
	l_body_comments  = "",
	r_body_comments  = "",
	l_h1_comments    = "",
	r_h1_comments    = "",
	l_div_comments   = "",
	r_div_comments   = "",
	l_iframe_comments = "",
	r_iframe_comments = "",
	l_ul_comments    = "",
	r_ul_comments    = "",
	l_li_comments    = "",
	r_li_comments    = "",
	l_a_text_comments = "",
	r_a_text_comments = "",
	l_a_image_comments = "",
	r_a_image_comments = "",
	br_comments = "",
	img_comments = "",
	p_comments = "",
	home_box_comments = "",
	home_to_place_comments = "",
	home_to_food_comments = "",
	home_to_hotels_comments = "",
	places_box_comments = "",
	places_to_home_comments = "",
	places_to_food_comments = "",
	places_to_hotels_comments = "",
	food_box_comments = "",
	food_to_home_comments = "",
	food_to_place_comments = "",
	food_to_hotels_comments = "",
	hotels_box_comments = "",
	hotels_to_home_comments = "",
	hotels_to_place_comments = "",
	hotels_to_food_comments = "",
	home_banner_comments = "",
	places_banner_comments = "",
	food_banner_comments = "",
	hotels_banner_comments = "",
	home_img_1_comments = "",
	home_img_2_comments = "",
	home_img_3_comments = "",
	places_img_1_comments = "",
	places_img_2_comments = "",
	places_img_3_comments = "",
	food_img_1_comments = "",
	food_img_2_comments = "",
	food_img_3_comments = "",
	places_img_1_comments = "",
	places_img_2_comments = "",
	places_img_3_comments = "",
	part_2_contents_comments = "",
	part_1_check = "checked",
	part_2_check = "checked",
	part_1_comments = "",
	part_2_comments = "";

/*
function check_change_handler(elem, elem_partial, elem_check, elem_grade, elem_partial_grade, elem_grade_html, elem_grade_value){
	if (!elem.checked){
		elem_check = "";
		elem_grade = 0;
		elem_partial_grade = 0;
	}else{
		elem_check = "checked";
		elem_grade = 5;
	}
	elem_partial.value = elem_partial_grade.toString();
	elem_grade_html.innerHTML = elem_grade.toString();
	update_total();
}
*/

function initialize(){

	structure = $('#structure')[0];
	structure_grade_html = $('#structure_grade')[0];
	structure_partial = $('#structure_partial_mark');
	structure.onchange = function() {
		if (!structure.checked){
			structure_check = "";
			structure_grade = 0;
			structure_partial_mark = 0;
		}else{
			structure_check = "checked";
			structure_grade = 5;
			structure_partial_mark = 0;
			structure_partial[0].value = structure_partial_mark.toString();
		}
		structure_grade_html.innerHTML = structure_grade.toString();
		update_total();
	};

	structure_partial.change( function (){
		if (this.value){
			structure_partial_mark = parseFloat( this.value );
		} else {
			structure_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	youtube = $('#youtube')[0];
	youtube_grade_html = $('#youtube_grade')[0];
	youtube_partial = $('#youtube_partial_mark')
	youtube.onchange = function() {
		if (!youtube.checked){
			youtube_check = "";
			youtube_grade = 0;
		}else{
			youtube_check = "checked";
			youtube_grade = 5;
			youtube_partial_mark = 0;
			youtube_partial[0].value = youtube_partial_mark.toString();
		}
		youtube_grade_html.innerHTML = youtube_grade.toString();
		update_total();
	};

	youtube_partial.change( function (){
		if (this.value){
			youtube_partial_mark = parseFloat( this.value );
		} else {
			youtube_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	image_1 = $('#image_1')[0];
	image_1_grade_html = $('#image_1_grade')[0];
	image_1_partial = $('#image_1_partial_mark');
	image_1.onchange = function() {
		if (!image_1.checked){
			image_1_check = "";
			image_1_grade = 0;
		}else{
			image_1_check = "checked";
			image_1_grade = 5;
			image_1_partial_mark = 0;
			image_1_partial[0].value = image_1_partial_mark.toString();
		}
		image_1_grade_html.innerHTML = image_1_grade.toString();
		update_total();
	};

	image_1_partial.change( function (){
		if (this.value){
			image_1_partial_mark = parseFloat( this.value );
		} else {
			image_1_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	image_2 = $('#image_2')[0];
	image_2_grade_html = $('#image_2_grade')[0];
	image_2_partial = $('#image_2_partial_mark');
	image_2.onchange = function() {
		if (!image_2.checked){
			image_2_check = "";
			image_2_grade = 0;
		}else{
			image_2_check = "checked";
			image_2_grade = 5;
			image_2_partial_mark = 0;
			image_2_partial[0].value = image_2_partial_mark.toString();
		}
		image_2_grade_html.innerHTML = image_2_grade.toString();
		update_total();
	};

	image_2_partial.change( function (){
		if (this.value){
			image_2_partial_mark = parseFloat( this.value );
		} else {
			image_2_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	image_3 = $('#image_3')[0];
	image_3_grade_html = $('#image_3_grade')[0];
	image_3_partial = $('#image_3_partial_mark');
	image_3.onchange = function() {
		if (!image_3.checked){
			image_3_check = "";
			image_3_grade = 0;
		}else{
			image_3_check = "checked";
			image_3_grade = 5;
			image_3_partial_mark = 0;
			image_3_partial[0].value = image_3_partial_mark.toString();
		}
		image_3_grade_html.innerHTML = image_3_grade.toString();
		update_total();
	};

	image_3_partial.change( function (){
		if (this.value){
			image_3_partial_mark = parseFloat( this.value );
		} else {
			image_3_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	l_html = $('#l_html')[0];
	l_html_grade_html = $('#l_html_grade')[0];
	l_html_partial = $('#l_html_partial_mark');
	l_html.onchange = function() {
		if (!l_html.checked){
			l_html_check = "";
			l_html_grade = 0;
		}else{
			l_html_check = "checked";
			l_html_grade = 1;
			l_html_partial_mark = 0;
			l_html_partial[0].value = l_html_partial_mark.toString();
		}
		l_html_grade_html.innerHTML = l_html_grade.toString();
		update_total();
	};

	l_html_partial.change( function (){
		if (this.value){
			l_html_partial_mark = parseFloat( this.value );
		} else {
			l_html_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	r_html = $('#r_html')[0];
	r_html_grade_html = $('#r_html_grade')[0];
	r_html_partial = $('#r_html_partial_mark');
	r_html.onchange = function() {
		if (!r_html.checked){
			r_html_check = "";
			r_html_grade = 0;
		}else{
			r_html_check = "checked";
			r_html_grade = 1;
			r_html_partial_mark = 0;
			r_html_partial[0].value = r_html_partial_mark.toString();
		}
		r_html_grade_html.innerHTML = r_html_grade.toString();
		update_total();
	};

	r_html_partial.change( function (){
		if (this.value){
			r_html_partial_mark = parseFloat( this.value );
		} else {
			r_html_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


    l_head = $('#l_head')[0];
	l_head_grade_html = $('#l_head_grade')[0];
	l_head_partial = $('#l_head_partial_mark');
	l_head.onchange = function() {
		if (!l_head.checked){
			l_head_check = "";
			l_head_grade = 0;
		}else{
			l_head_check = "checked";
			l_head_grade = 1;
			l_head_partial_mark = 0;
			l_head_partial[0].value = l_head_partial_mark.toString();
		}
		l_head_grade_html.innerHTML = l_head_grade.toString();
		update_total();
	};

	l_head_partial.change( function (){
		if (this.value){
			l_head_partial_mark = parseFloat( this.value );
		} else {
			l_head_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	r_head = $('#r_head')[0];
	r_head_grade_html = $('#r_head_grade')[0];
	r_head_partial = $('#r_head_partial_mark');
	r_head.onchange = function() {
		if (!r_head.checked){
			r_head_check = "";
			r_head_grade = 0;
		}else{
			r_head_check = "checked";
			r_head_grade = 1;
			r_head_partial_mark = 0;
			r_head_partial[0].value = r_head_partial_mark.toString();
		}
		r_head_grade_html.innerHTML = r_head_grade.toString();
		update_total();
	};

	r_head_partial.change( function (){
		if (this.value){
			r_head_partial_mark = parseFloat( this.value );
		} else {
			r_head_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	l_title = $('#l_title')[0];
	l_title_grade_html = $('#l_title_grade')[0];
	l_title_partial = $('#l_title_partial_mark');
	l_title.onchange = function() {
		if (!l_title.checked){
			l_title_check = "";
			l_title_grade = 0;
		}else{
			l_title_check = "checked";
			l_title_grade = 1;
			l_title_partial_mark = 0;
			l_title_partial[0].value = l_title_partial_mark.toString();
		}
		l_title_grade_html.innerHTML = l_title_grade.toString();
		update_total();
	};

	l_title_partial.change( function (){
		if (this.value){
			l_title_partial_mark = parseFloat( this.value );
		} else {
			l_title_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	r_title = $('#r_title')[0];
	r_title_grade_html = $('#r_title_grade')[0];
	r_title_partial = $('#r_title_partial_mark');
	r_title.onchange = function() {
		if (!r_title.checked){
			r_title_check = "";
			r_title_grade = 0;
		}else{
			r_title_check = "checked";
			r_title_grade = 1;
			r_title_partial_mark = 0;
			r_title_partial[0].value = r_title_partial_mark.toString();
		}
		r_title_grade_html.innerHTML = r_title_grade.toString();
		update_total();
	};

	r_title_partial.change( function (){
		if (this.value){
			r_title_partial_mark = parseFloat( this.value );
		} else {
			r_title_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

    l_body = $('#l_body')[0];
	l_body_grade_html = $('#l_body_grade')[0];
	l_body_partial = $('#l_body_partial_mark');
	l_body.onchange = function() {
		if (!l_body.checked){
			l_body_check = "";
			l_body_grade = 0;
		}else{
			l_body_check = "checked";
			l_body_grade = 1;
			l_body_partial_mark = 0;
			l_body_partial[0].value = l_body_partial_mark.toString();
		}
		l_body_grade_html.innerHTML = l_body_grade.toString();
		update_total();
	};

	l_body_partial.change( function (){
		if (this.value){
			l_body_partial_mark = parseFloat( this.value );
		} else {
			l_body_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	r_body = $('#r_body')[0];
	r_body_grade_html = $('#r_body_grade')[0];
	r_body_partial = $('#r_body_partial_mark');
	r_body.onchange = function() {
		if (!r_body.checked){
			r_body_check = "";
			r_body_grade = 0;
		}else{
			r_body_check = "checked";
			r_body_grade = 1;
			r_body_partial_mark = 0;
			r_body_partial[0].value = r_body_partial_mark.toString();
		}
		r_body_grade_html.innerHTML = r_body_grade.toString();
		update_total();
	};

	r_body_partial.change( function (){
		if (this.value){
			r_body_partial_mark = parseFloat( this.value );
		} else {
			r_body_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	l_h1 = $('#l_h1')[0];
	l_h1_grade_html = $('#l_h1_grade')[0];
	l_h1_partial = $('#l_h1_partial_mark');
	l_h1.onchange = function() {
		if (!l_h1.checked){
			l_h1_check = "";
			l_h1_grade = 0;
		}else{
			l_h1_check = "checked";
			l_h1_grade = 1;
			l_h1_partial_mark = 0;
			l_h1_partial[0].value = l_h1_partial_mark.toString();
		}
		l_h1_grade_html.innerHTML = l_h1_grade.toString();
		update_total();
	};

	l_h1_partial.change( function (){
		if (this.value){
			l_h1_partial_mark = parseFloat( this.value );
		} else {
			l_h1_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	r_h1 = $('#r_h1')[0];
	r_h1_grade_html = $('#r_h1_grade')[0];
	r_h1_partial = $('#r_h1_partial_mark');
	r_h1.onchange = function() {
		if (!r_h1.checked){
			r_h1_check = "";
			r_h1_grade = 0;
		}else{
			r_h1_check = "checked";
			r_h1_grade = 1;
			r_h1_partial_mark = 0;
			r_h1_partial[0].value = r_h1_partial_mark.toString();
		}
		r_h1_grade_html.innerHTML = r_h1_grade.toString();
		update_total();
	};

	r_h1_partial.change( function (){
		if (this.value){
			r_h1_partial_mark = parseFloat( this.value );
		} else {
			r_h1_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	l_div = $('#l_div')[0];
	l_div_grade_html = $('#l_div_grade')[0];
	l_div_partial = $('#l_div_partial_mark');
	l_div.onchange = function() {
		if (!l_div.checked){
			l_div_check = "";
			l_div_grade = 0;
		}else{
			l_div_check = "checked";
			l_div_grade = 1;
			l_div_partial_mark = 0;
			l_div_partial[0].value = l_div_partial_mark.toString();
		}
		l_div_grade_html.innerHTML = l_div_grade.toString();
		update_total();
	};

	l_div_partial.change( function (){
		if (this.value){
			l_div_partial_mark = parseFloat( this.value );
		} else {
			l_div_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	r_div = $('#r_div')[0];
	r_div_grade_html = $('#r_div_grade')[0];
	r_div_partial = $('#r_div_partial_mark');
	r_div.onchange = function() {
		if (!r_div.checked){
			r_div_check = "";
			r_div_grade = 0;
		}else{
			r_div_check = "checked";
			r_div_grade = 1;
			r_div_partial_mark = 0;
			r_div_partial[0].value = r_div_partial_mark.toString();
		}
		r_div_grade_html.innerHTML = r_div_grade.toString();
		update_total();
	};

	r_div_partial.change( function (){
		if (this.value){
			r_div_partial_mark = parseFloat( this.value );
		} else {
			r_div_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	l_iframe = $('#l_iframe')[0];
	l_iframe_grade_html = $('#l_iframe_grade')[0];
	l_iframe_partial = $('#l_iframe_partial_mark');
	l_iframe.onchange = function() {
		if (!l_iframe.checked){
			l_iframe_check = "";
			l_iframe_grade = 0;
		}else{
			l_iframe_check = "checked";
			l_iframe_grade = 1;
			l_iframe_partial_mark = 0;
			l_iframe_partial[0].value = l_iframe_partial_mark.toString();
		}
		l_iframe_grade_html.innerHTML = l_iframe_grade.toString();
		update_total();
	};

	l_iframe_partial.change( function (){
		if (this.value){
			l_iframe_partial_mark = parseFloat( this.value );
		} else {
			l_iframe_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	r_iframe = $('#r_iframe')[0];
	r_iframe_grade_html = $('#r_iframe_grade')[0];
	r_iframe_partial = $('#r_iframe_partial_mark');
	r_iframe.onchange = function() {
		if (!r_iframe.checked){
			r_iframe_check = "";
			r_iframe_grade = 0;
		}else{
			r_iframe_check = "checked";
			r_iframe_grade = 1;
			r_iframe_partial_mark = 0;
			r_iframe_partial[0].value = r_iframe_partial_mark.toString();
		}
		r_iframe_grade_html.innerHTML = r_iframe_grade.toString();
		update_total();
	};

	r_iframe_partial.change( function (){
		if (this.value){
			r_iframe_partial_mark = parseFloat( this.value );
		} else {
			r_iframe_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	l_ul = $('#l_ul')[0];
	l_ul_grade_html = $('#l_ul_grade')[0];
	l_ul_partial = $('#l_ul_partial_mark');
	l_ul.onchange = function() {
		if (!l_ul.checked){
			l_ul_check = "";
			l_ul_grade = 0;
		}else{
			l_ul_check = "checked";
			l_ul_grade = 1;
			l_ul_partial_mark = 0;
			l_ul_partial[0].value = l_ul_partial_mark.toString();
		}
		l_ul_grade_html.innerHTML = l_ul_grade.toString();
		update_total();
	};

	l_ul_partial.change( function (){
		if (this.value){
			l_ul_partial_mark = parseFloat( this.value );
		} else {
			l_ul_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	r_ul = $('#r_ul')[0];
	r_ul_grade_html = $('#r_ul_grade')[0];
	r_ul_partial = $('#r_ul_partial_mark');
	r_ul.onchange = function() {
		if (!r_ul.checked){
			r_ul_check = "";
			r_ul_grade = 0;
		}else{
			r_ul_check = "checked";
			r_ul_grade = 1;
			r_ul_partial_mark = 0;
			r_ul_partial[0].value = r_ul_partial_mark.toString();
		}
		r_ul_grade_html.innerHTML = r_ul_grade.toString();
		update_total();
	};

	r_ul_partial.change( function (){
		if (this.value){
			r_ul_partial_mark = parseFloat( this.value );
		} else {
			r_ul_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	l_li = $('#l_li')[0];
	l_li_grade_html = $('#l_li_grade')[0];
	l_li_partial = $('#l_li_partial_mark');
	l_li.onchange = function() {
		if (!l_li.checked){
			l_li_check = "";
			l_li_grade = 0;
		}else{
			l_li_check = "checked";
			l_li_grade = 1;
			l_li_partial_mark = 0;
			l_li_partial[0].value = l_li_partial_mark.toString();
		}
		l_li_grade_html.innerHTML = l_li_grade.toString();
		update_total();
	};

	l_li_partial.change( function (){
		if (this.value){
			l_li_partial_mark = parseFloat( this.value );
		} else {
			l_li_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	r_li = $('#r_li')[0];
	r_li_grade_html = $('#r_li_grade')[0];
	r_li_partial = $('#r_li_partial_mark');
	r_li.onchange = function() {
		if (!r_li.checked){
			r_li_check = "";
			r_li_grade = 0;
		}else{
			r_li_check = "checked";
			r_li_grade = 1;
			r_li_partial_mark = 0;
			r_li_partial[0].value = r_li_partial_mark.toString();
		}
		r_li_grade_html.innerHTML = r_li_grade.toString();
		update_total();
	};

	r_li_partial.change( function (){
		if (this.value){
			r_li_partial_mark = parseFloat( this.value );
		} else {
			r_li_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	l_a_text = $('#l_a_text')[0];
	l_a_text_grade_html = $('#l_a_text_grade')[0];
	l_a_text_partial = $('#l_a_text_partial_mark');
	l_a_text.onchange = function() {
		if (!l_a_text.checked){
			l_a_text_check = "";
			l_a_text_grade = 0;
		}else{
			l_a_text_check = "checked";
			l_a_text_grade = 1;
			l_a_text_partial_mark = 0;
			l_a_text_partial[0].value = l_a_text_partial_mark.toString();
		}
		l_a_text_grade_html.innerHTML = l_a_text_grade.toString();
		update_total();
	};

	l_a_text_partial.change( function (){
		if (this.value){
			l_a_text_partial_mark = parseFloat( this.value );
		} else {
			l_a_text_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	r_a_text = $('#r_a_text')[0];
	r_a_text_grade_html = $('#r_a_text_grade')[0];
	r_a_text_partial = $('#r_a_text_partial_mark');
	r_a_text.onchange = function() {
		if (!r_a_text.checked){
			r_a_text_check = "";
			r_a_text_grade = 0;
		}else{
			r_a_text_check = "checked";
			r_a_text_grade = 1;
			r_a_text_partial_mark = 0;
			r_a_text_partial[0].value = r_a_text_partial_mark.toString();
		}
		r_a_text_grade_html.innerHTML = r_a_text_grade.toString();
		update_total();
	};

	r_a_text_partial.change( function (){
		if (this.value){
			r_a_text_partial_mark = parseFloat( this.value );
		} else {
			r_a_text_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	l_a_image = $('#l_a_image')[0];
	l_a_image_grade_html = $('#l_a_image_grade')[0];
	l_a_image_partial = $('#l_a_image_partial_mark');
	l_a_image.onchange = function() {
		if (!l_a_image.checked){
			l_a_image_check = "";
			l_a_image_grade = 0;
		}else{
			l_a_image_check = "checked";
			l_a_image_grade = 1;
			l_a_image_partial_mark = 0;
			l_a_image_partial[0].value = l_a_image_partial_mark.toString();
		}
		l_a_image_grade_html.innerHTML = l_a_image_grade.toString();
		update_total();
	};

	l_a_image_partial.change( function (){
		if (this.value){
			l_a_image_partial_mark = parseFloat( this.value );
		} else {
			l_a_image_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	r_a_image = $('#r_a_image')[0];
	r_a_image_grade_html = $('#r_a_image_grade')[0];
	r_a_image_partial = $('#r_a_image_partial_mark');
	r_a_image.onchange = function() {
		if (!r_a_image.checked){
			r_a_image_check = "";
			r_a_image_grade = 0;
		}else{
			r_a_image_check = "checked";
			r_a_image_grade = 1;
			r_a_image_partial_mark = 0;
			r_a_image_partial[0].value = r_a_image_partial_mark.toString();
		}
		r_a_image_grade_html.innerHTML = r_a_image_grade.toString();
		update_total();
	};

	r_a_image_partial.change( function (){
		if (this.value){
			r_a_image_partial_mark = parseFloat( this.value );
		} else {
			r_a_image_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	id_br = $('#id_br')[0];
	br_grade_html = $('#br_grade')[0];
	br_partial = $('#br_partial_mark');
	id_br.onchange = function() {
		if (!id_br.checked){
			br_check = "";
			br_grade = 0;
		}else{
			br_check = "checked";
			br_grade = 1;
			br_partial_mark = 0;
			br_partial[0].value = br_partial_mark.toString();
		}
		br_grade_html.innerHTML = br_grade.toString();
		update_total();
	};

	br_partial.change( function (){
		if (this.value){
			br_partial_mark = parseFloat( this.value );
		} else {
			br_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	id_img = $('#id_img')[0];
	img_grade_html = $('#img_grade')[0];
	img_partial = $('#img_partial_mark');
	id_img.onchange = function() {
		if (!id_img.checked){
			img_check = "";
			img_grade = 0;
		}else{
			img_check = "checked";
			img_grade = 1;
			img_partial_mark = 0;
			img_partial[0].value = img_partial_mark.toString();
		}
		img_grade_html.innerHTML = img_grade.toString();
		update_total();
	};

	img_partial.change( function (){
		if (this.value){
			img_partial_mark = parseFloat( this.value );
		} else {
			img_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	id_p = $('#id_p')[0];
	p_grade_html = $('#p_grade')[0];
	p_partial = $('#p_partial_mark');
	id_p.onchange = function() {
		if (!id_p.checked){
			p_check = "";
			p_grade = 0;
		}else{
			p_check = "checked";
			p_grade = 1;
			p_partial_mark = 0;
			p_partial[0].value = p_partial_mark.toString();
		}
		p_grade_html.innerHTML = p_grade.toString();
		update_total();
	};

	p_partial.change( function (){
		if (this.value){
			p_partial_mark = parseFloat( this.value );
		} else {
			p_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	home_box = $('#home_box')[0];
	home_box_grade_html = $('#home_box_grade')[0];
	home_box_partial = $('#home_box_partial_mark');
	home_box.onchange = function() {
		if (!home_box.checked){
			home_box_check = "";
			home_box_grade = 0;
		}else{
			home_box_check = "checked";
			home_box_grade = 2;
			home_box_partial_mark = 0;
			home_box_partial[0].value = home_box_partial_mark.toString();
		}
		home_box_grade_html.innerHTML = home_box_grade.toString();
		update_total();
	};

	home_box_partial.change( function (){
		if (this.value){
			home_box_partial_mark = parseFloat( this.value );
		} else {
			home_box_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	home_to_place = $('#home_to_place')[0];
	home_to_place_grade_html = $('#home_to_place_grade')[0];
	home_to_place_partial = $('#home_to_place_partial_mark');
	home_to_place.onchange = function() {
		if (!home_to_place.checked){
			home_to_place_check = "";
			home_to_place_grade = 0;
		}else{
			home_to_place_check = "checked";
			home_to_place_grade = 1;
			home_to_place_partial_mark = 0;
			home_to_place_partial[0].value = home_to_place_partial_mark.toString();
		}
		home_to_place_grade_html.innerHTML = home_to_place_grade.toString();
		update_total();
	};

	home_to_place_partial.change( function (){
		if (this.value){
			home_to_place_partial_mark = parseFloat( this.value );
		} else {
			home_to_place_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	home_to_food = $('#home_to_food')[0];
	home_to_food_grade_html = $('#home_to_food_grade')[0];
	home_to_food_partial = $('#home_to_food_partial_mark');
	home_to_food.onchange = function() {
		if (!home_to_food.checked){
			home_to_food_check = "";
			home_to_food_grade = 0;
		}else{
			home_to_food_check = "checked";
			home_to_food_grade = 1;
			home_to_food_partial_mark = 0;
			home_to_food_partial[0].value = home_to_food_partial_mark.toString();
		}
		home_to_food_grade_html.innerHTML = home_to_food_grade.toString();
		update_total();
	};

	home_to_food_partial.change( function (){
		if (this.value){
			home_to_food_partial_mark = parseFloat( this.value );
		} else {
			home_to_food_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	home_to_hotels = $('#home_to_hotels')[0];
	home_to_hotels_grade_html = $('#home_to_hotels_grade')[0];
	home_to_hotels_partial = $('#home_to_hotels_partial_mark');
	home_to_hotels.onchange = function() {
		if (!home_to_hotels.checked){
			home_to_hotels_check = "";
			home_to_hotels_grade = 0;
		}else{
			home_to_hotels_check = "checked";
			home_to_hotels_grade = 1;
			home_to_hotels_partial_mark = 0;
			home_to_hotels_partial[0].value = home_to_hotels_partial_mark.toString();
		}
		home_to_hotels_grade_html.innerHTML = home_to_hotels_grade.toString();
		update_total();
	};

	home_to_hotels_partial.change( function (){
		if (this.value){
			home_to_hotels_partial_mark = parseFloat( this.value );
		} else {
			home_to_hotels_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	places_box = $('#places_box')[0];
	places_box_grade_html = $('#places_box_grade')[0];
	places_box_partial = $('#places_box_partial_mark');
	places_box.onchange = function() {
		if (!places_box.checked){
			places_box_check = "";
			places_box_grade = 0;
		}else{
			places_box_check = "checked";
			places_box_grade = 2;
			places_box_partial_mark = 0;
			places_box_partial[0].value = places_box_partial_mark.toString();
		}
		places_box_grade_html.innerHTML = places_box_grade.toString();
		update_total();
	};

	places_box_partial.change( function (){
		if (this.value){
			places_box_partial_mark = parseFloat( this.value );
		} else {
			places_box_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	places_to_home = $('#places_to_home')[0];
	places_to_home_grade_html = $('#places_to_home_grade')[0];
	places_to_home_partial = $('#places_to_home_partial_mark');
	places_to_home.onchange = function() {
		if (!places_to_home.checked){
			places_to_home_check = "";
			places_to_home_grade = 0;
		}else{
			places_to_home_check = "checked";
			places_to_home_grade = 1;
			places_to_home_partial_mark = 0;
			places_to_home_partial[0].value = places_to_home_partial_mark.toString();
		}
		places_to_home_grade_html.innerHTML = places_to_home_grade.toString();
		update_total();
	};

	places_to_home_partial.change( function (){
		if (this.value){
			places_to_home_partial_mark = parseFloat( this.value );
		} else {
			places_to_home_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	places_to_food = $('#places_to_food')[0];
	places_to_food_grade_html = $('#places_to_food_grade')[0];
	places_to_food_partial = $('#places_to_food_partial_mark');
	places_to_food.onchange = function() {
		if (!places_to_food.checked){
			places_to_food_check = "";
			places_to_food_grade = 0;
		}else{
			places_to_food_check = "checked";
			places_to_food_grade = 1;
			places_to_food_partial_mark = 0;
			places_to_food_partial[0].value = places_to_food_partial_mark.toString();
		}
		places_to_food_grade_html.innerHTML = places_to_food_grade.toString();
		update_total();
	};

	places_to_food_partial.change( function (){
		if (this.value){
			places_to_food_partial_mark = parseFloat( this.value );
		} else {
			places_to_food_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	places_to_hotels = $('#places_to_hotels')[0];
	places_to_hotels_grade_html = $('#places_to_hotels_grade')[0];
	places_to_hotels_partial = $('#places_to_hotels_partial_mark');
	places_to_hotels.onchange = function() {
		if (!places_to_hotels.checked){
			places_to_hotels_check = "";
			places_to_hotels_grade = 0;
		}else{
			places_to_hotels_check = "checked";
			places_to_hotels_grade = 1;
			places_to_hotels_partial_mark = 0;
			places_to_hotels_partial[0].value = places_to_hotels_partial_mark.toString();
		}
		places_to_hotels_grade_html.innerHTML = places_to_hotels_grade.toString();
		update_total();
	};

	places_to_hotels_partial.change( function (){
		if (this.value){
			places_to_hotels_partial_mark = parseFloat( this.value );
		} else {
			places_to_hotels_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	food_box = $('#food_box')[0];
	food_box_grade_html = $('#food_box_grade')[0];
	food_box_partial = $('#food_box_partial_mark');
	food_box.onchange = function() {
		if (!food_box.checked){
			food_box_check = "";
			food_box_grade = 0;
		}else{
			food_box_check = "checked";
			food_box_grade = 2;
			food_box_partial_mark = 0;
			food_box_partial[0].value = food_box_partial_mark.toString();
		}
		food_box_grade_html.innerHTML = food_box_grade.toString();
		update_total();
	};

	food_box_partial.change( function (){
		if (this.value){
			food_box_partial_mark = parseFloat( this.value );
		} else {
			food_box_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	food_to_home = $('#food_to_home')[0];
	food_to_home_grade_html = $('#food_to_home_grade')[0];
	food_to_home_partial = $('#food_to_home_partial_mark');
	food_to_home.onchange = function() {
		if (!food_to_home.checked){
			food_to_home_check = "";
			food_to_home_grade = 0;
		}else{
			food_to_home_check = "checked";
			food_to_home_grade = 1;
			food_to_home_partial_mark = 0;
			food_to_home_partial[0].value = food_to_home_partial_mark.toString();
		}
		food_to_home_grade_html.innerHTML = food_to_home_grade.toString();
		update_total();
	};

	food_to_home_partial.change( function (){
		if (this.value){
			food_to_home_partial_mark = parseFloat( this.value );
		} else {
			food_to_home_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	food_to_place = $('#food_to_place')[0];
	food_to_place_grade_html = $('#food_to_place_grade')[0];
	food_to_place_partial = $('#food_to_place_partial_mark');
	food_to_place.onchange = function() {
		if (!food_to_place.checked){
			food_to_place_check = "";
			food_to_place_grade = 0;
		}else{
			food_to_place_check = "checked";
			food_to_place_grade = 1;
			food_to_place_partial_mark = 0;
			food_to_place_partial[0].value = food_to_place_partial_mark.toString();
		}
		food_to_place_grade_html.innerHTML = food_to_place_grade.toString();
		update_total();
	};

	food_to_place_partial.change( function (){
		if (this.value){
			food_to_place_partial_mark = parseFloat( this.value );
		} else {
			food_to_place_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	food_to_hotels = $('#food_to_hotels')[0];
	food_to_hotels_grade_html = $('#food_to_hotels_grade')[0];
	food_to_hotels_partial = $('#food_to_hotels_partial_mark');
	food_to_hotels.onchange = function() {
		if (!food_to_hotels.checked){
			food_to_hotels_check = "";
			food_to_hotels_grade = 0;
		}else{
			food_to_hotels_check = "checked";
			food_to_hotels_grade = 1;
			food_to_hotels_partial_mark = 0;
			food_to_hotels_partial[0].value = food_to_hotels_partial_mark.toString();
		}
		food_to_hotels_grade_html.innerHTML = food_to_hotels_grade.toString();
		update_total();
	};

	food_to_hotels_partial.change( function (){
		if (this.value){
			food_to_hotels_partial_mark = parseFloat( this.value );
		} else {
			food_to_hotels_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	hotels_box = $('#hotels_box')[0];
	hotels_box_grade_html = $('#hotels_box_grade')[0];
	hotels_box_partial = $('#hotels_box_partial_mark');
	hotels_box.onchange = function() {
		if (!hotels_box.checked){
			hotels_box_check = "";
			hotels_box_grade = 0;
		}else{
			hotels_box_check = "checked";
			hotels_box_grade = 2;
			hotels_box_partial_mark = 0;
			hotels_box_partial[0].value = hotels_box_partial_mark.toString();
		}
		hotels_box_grade_html.innerHTML = hotels_box_grade.toString();
		update_total();
	};

	hotels_box_partial.change( function (){
		if (this.value){
			hotels_box_partial_mark = parseFloat( this.value );
		} else {
			hotels_box_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	hotels_to_home = $('#hotels_to_home')[0];
	hotels_to_home_grade_html = $('#hotels_to_home_grade')[0];
	hotels_to_home_partial = $('#hotels_to_home_partial_mark');
	hotels_to_home.onchange = function() {
		if (!hotels_to_home.checked){
			hotels_to_home_check = "";
			hotels_to_home_grade = 0;
		}else{
			hotels_to_home_check = "checked";
			hotels_to_home_grade = 1;
			hotels_to_home_partial_mark = 0;
			hotels_to_home_partial[0].value = hotels_to_home_partial_mark.toString();
		}
		hotels_to_home_grade_html.innerHTML = hotels_to_home_grade.toString();
		update_total();
	};

	hotels_to_home_partial.change( function (){
		if (this.value){
			hotels_to_home_partial_mark = parseFloat( this.value );
		} else {
			hotels_to_home_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	hotels_to_place = $('#hotels_to_place')[0];
	hotels_to_place_grade_html = $('#hotels_to_place_grade')[0];
	hotels_to_place_partial = $('#hotels_to_place_partial_mark');
	hotels_to_place.onchange = function() {
		if (!hotels_to_place.checked){
			hotels_to_place_check = "";
			hotels_to_place_grade = 0;
		}else{
			hotels_to_place_check = "checked";
			hotels_to_place_grade = 1;
			hotels_to_place_partial_mark = 0;
			hotels_to_place_partial[0].value = hotels_to_place_partial_mark.toString();
		}
		hotels_to_place_grade_html.innerHTML = hotels_to_place_grade.toString();
		update_total();
	};

	hotels_to_place_partial.change( function (){
		if (this.value){
			hotels_to_place_partial_mark = parseFloat( this.value );
		} else {
			hotels_to_place_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	hotels_to_food = $('#hotels_to_food')[0];
	hotels_to_food_grade_html = $('#hotels_to_food_grade')[0];
	hotels_to_food_partial = $('#hotels_to_food_partial_mark');
	hotels_to_food.onchange = function() {
		if (!hotels_to_food.checked){
			hotels_to_food_check = "";
			hotels_to_food_grade = 0;
		}else{
			hotels_to_food_check = "checked";
			hotels_to_food_grade = 1;
			hotels_to_food_partial_mark = 0;
			hotels_to_food_partial[0].value = hotels_to_food_partial_mark.toString();
		}
		hotels_to_food_grade_html.innerHTML = hotels_to_food_grade.toString();
		update_total();
	};

	hotels_to_food_partial.change( function (){
		if (this.value){
			hotels_to_food_partial_mark = parseFloat( this.value );
		} else {
			hotels_to_food_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	home_banner = $('#home_banner')[0];
	home_banner_grade_html = $('#home_banner_grade')[0];
	home_banner_partial = $('#home_banner_partial_mark');
	home_banner.onchange = function() {
		if (!home_banner.checked){
			home_banner_check = "";
			home_banner_grade = 0;
		}else{
			home_banner_check = "checked";
			home_banner_grade = 2;
			home_banner_partial_mark = 0;
			home_banner_partial[0].value = home_banner_partial_mark.toString();
		}
		home_banner_grade_html.innerHTML = home_banner_grade.toString();
		update_total();
	};

	home_banner_partial.change( function (){
		if (this.value){
			home_banner_partial_mark = parseFloat( this.value );
		} else {
			home_banner_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	places_banner = $('#places_banner')[0];
	places_banner_grade_html = $('#places_banner_grade')[0];
	places_banner_partial = $('#places_banner_partial_mark');
	places_banner.onchange = function() {
		if (!places_banner.checked){
			places_banner_check = "";
			places_banner_grade = 0;
		}else{
			places_banner_check = "checked";
			places_banner_grade = 2;
			places_banner_partial_mark = 0;
			places_banner_partial[0].value = places_banner_partial_mark.toString();
		}
		places_banner_grade_html.innerHTML = places_banner_grade.toString();
		update_total();
	};

	places_banner_partial.change( function (){
		if (this.value){
			places_banner_partial_mark = parseFloat( this.value );
		} else {
			places_banner_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	food_banner = $('#food_banner')[0];
	food_banner_grade_html = $('#food_banner_grade')[0];
	food_banner_partial = $('#food_banner_partial_mark');
	food_banner.onchange = function() {
		if (!food_banner.checked){
			food_banner_check = "";
			food_banner_grade = 0;
		}else{
			food_banner_check = "checked";
			food_banner_grade = 2;
			food_banner_partial_mark = 0;
			food_banner_partial[0].value = food_banner_partial_mark.toString();
		}
		food_banner_grade_html.innerHTML = food_banner_grade.toString();
		update_total();
	};

	food_banner_partial.change( function (){
		if (this.value){
			food_banner_partial_mark = parseFloat( this.value );
		} else {
			food_banner_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	hotels_banner = $('#hotels_banner')[0];
	hotels_banner_grade_html = $('#hotels_banner_grade')[0];
	hotels_banner_partial = $('#hotels_banner_partial_mark');
	hotels_banner.onchange = function() {
		if (!hotels_banner.checked){
			hotels_banner_check = "";
			hotels_banner_grade = 0;
		}else{
			hotels_banner_check = "checked";
			hotels_banner_grade = 2;
			hotels_banner_partial_mark = 0;
			hotels_banner_partial[0].value = hotels_banner_partial_mark.toString();
		}
		hotels_banner_grade_html.innerHTML = hotels_banner_grade.toString();
		update_total();
	};

	hotels_banner_partial.change( function (){
		if (this.value){
			hotels_banner_partial_mark = parseFloat( this.value );
		} else {
			hotels_banner_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	home_img_1 = $('#home_img_1')[0];
	home_img_1_grade_html = $('#home_img_1_grade')[0];
	home_img_1_partial = $('#home_img_1_partial_mark');
	home_img_1.onchange = function() {
		if (!home_img_1.checked){
			home_img_1_check = "";
			home_img_1_grade = 0;
		}else{
			home_img_1_check = "checked";
			home_img_1_grade = 1;
			home_img_1_partial_mark = 0;
			home_img_1_partial[0].value = home_img_1_partial_mark.toString();
		}
		home_img_1_grade_html.innerHTML = home_img_1_grade.toString();
		update_total();
	};

	home_img_1_partial.change( function (){
		if (this.value){
			home_img_1_partial_mark = parseFloat( this.value );
		} else {
			home_img_1_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	home_img_2 = $('#home_img_2')[0];
	home_img_2_grade_html = $('#home_img_2_grade')[0];
	home_img_2_partial = $('#home_img_2_partial_mark');
	home_img_2.onchange = function() {
		if (!home_img_2.checked){
			home_img_2_check = "";
			home_img_2_grade = 0;
		}else{
			home_img_2_check = "checked";
			home_img_2_grade = 1;
			home_img_2_partial_mark = 0;
			home_img_2_partial[0].value = home_img_2_partial_mark.toString();
		}
		home_img_2_grade_html.innerHTML = home_img_2_grade.toString();
		update_total();
	};

	home_img_2_partial.change( function (){
		if (this.value){
			home_img_2_partial_mark = parseFloat( this.value );
		} else {
			home_img_2_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	home_img_3 = $('#home_img_3')[0];
	home_img_3_grade_html = $('#home_img_3_grade')[0];
	home_img_3_partial = $('#home_img_3_partial_mark');
	home_img_3.onchange = function() {
		if (!home_img_3.checked){
			home_img_3_check = "";
			home_img_3_grade = 0;
		}else{
			home_img_3_check = "checked";
			home_img_3_grade = 1;
			home_img_3_partial_mark = 0;
			home_img_3_partial[0].value = home_img_3_partial_mark.toString();
		}
		home_img_3_grade_html.innerHTML = home_img_3_grade.toString();
		update_total();
	};

	home_img_3_partial.change( function (){
		if (this.value){
			home_img_3_partial_mark = parseFloat( this.value );
		} else {
			home_img_3_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	places_img_1 = $('#places_img_1')[0];
	places_img_1_grade_html = $('#places_img_1_grade')[0];
	places_img_1_partial = $('#places_img_1_partial_mark');
	places_img_1.onchange = function() {
		if (!places_img_1.checked){
			places_img_1_check = "";
			places_img_1_grade = 0;
		}else{
			places_img_1_check = "checked";
			places_img_1_grade = 1;
			places_img_1_partial_mark = 0;
			places_img_1_partial[0].value = places_img_1_partial_mark.toString();
		}
		places_img_1_grade_html.innerHTML = places_img_1_grade.toString();
		update_total();
	};

	places_img_1_partial.change( function (){
		if (this.value){
			places_img_1_partial_mark = parseFloat( this.value );
		} else {
			places_img_1_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	places_img_2 = $('#places_img_2')[0];
	places_img_2_grade_html = $('#places_img_2_grade')[0];
	places_img_2_partial = $('#places_img_2_partial_mark');
	places_img_2.onchange = function() {
		if (!places_img_2.checked){
			places_img_2_check = "";
			places_img_2_grade = 0;
		}else{
			places_img_2_check = "checked";
			places_img_2_grade = 1;
			places_img_2_partial_mark = 0;
			places_img_2_partial[0].value = places_img_2_partial_mark.toString();
		}
		places_img_2_grade_html.innerHTML = places_img_2_grade.toString();
		update_total();
	};

	places_img_2_partial.change( function (){
		if (this.value){
			places_img_2_partial_mark = parseFloat( this.value );
		} else {
			places_img_2_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	places_img_3 = $('#places_img_3')[0];
	places_img_3_grade_html = $('#places_img_3_grade')[0];
	places_img_3_partial = $('#places_img_3_partial_mark');
	places_img_3.onchange = function() {
		if (!places_img_3.checked){
			places_img_3_check = "";
			places_img_3_grade = 0;
		}else{
			places_img_3_check = "checked";
			places_img_3_grade = 1;
			places_img_3_partial_mark = 0;
			places_img_3_partial[0].value = places_img_3_partial_mark.toString();
		}
		places_img_3_grade_html.innerHTML = places_img_3_grade.toString();
		update_total();
	};

	places_img_3_partial.change( function (){
		if (this.value){
			places_img_3_partial_mark = parseFloat( this.value );
		} else {
			places_img_3_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	food_img_1 = $('#food_img_1')[0];
	food_img_1_grade_html = $('#food_img_1_grade')[0];
	food_img_1_partial = $('#food_img_1_partial_mark');
	food_img_1.onchange = function() {
		if (!food_img_1.checked){
			food_img_1_check = "";
			food_img_1_grade = 0;
		}else{
			food_img_1_check = "checked";
			food_img_1_grade = 1;
			food_img_1_partial_mark = 0;
			food_img_1_partial[0].value = food_img_1_partial_mark.toString();
		}
		food_img_1_grade_html.innerHTML = food_img_1_grade.toString();
		update_total();
	};

	food_img_1_partial.change( function (){
		if (this.value){
			food_img_1_partial_mark = parseFloat( this.value );
		} else {
			food_img_1_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	food_img_2 = $('#food_img_2')[0];
	food_img_2_grade_html = $('#food_img_2_grade')[0];
	food_img_2_partial = $('#food_img_2_partial_mark');
	food_img_2.onchange = function() {
		if (!food_img_2.checked){
			food_img_2_check = "";
			food_img_2_grade = 0;
		}else{
			food_img_2_check = "checked";
			food_img_2_grade = 1;
			food_img_2_partial_mark = 0;
			food_img_2_partial[0].value = food_img_2_partial_mark.toString();
		}
		food_img_2_grade_html.innerHTML = food_img_2_grade.toString();
		update_total();
	};

	food_img_2_partial.change( function (){
		if (this.value){
			food_img_2_partial_mark = parseFloat( this.value );
		} else {
			food_img_2_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	food_img_3 = $('#food_img_3')[0];
	food_img_3_grade_html = $('#food_img_3_grade')[0];
	food_img_3_partial = $('#food_img_3_partial_mark');
	food_img_3.onchange = function() {
		if (!food_img_3.checked){
			food_img_3_check = "";
			food_img_3_grade = 0;
		}else{
			food_img_3_check = "checked";
			food_img_3_grade = 1;
			food_img_3_partial_mark = 0;
			food_img_3_partial[0].value = food_img_3_partial_mark.toString();
		}
		food_img_3_grade_html.innerHTML = food_img_3_grade.toString();
		update_total();
	};

	food_img_3_partial.change( function (){
		if (this.value){
			food_img_3_partial_mark = parseFloat( this.value );
		} else {
			food_img_3_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	hotels_img_1 = $('#hotels_img_1')[0];
	hotels_img_1_grade_html = $('#hotels_img_1_grade')[0];
	hotels_img_1_partial = $('#hotels_img_1_partial_mark');
	hotels_img_1.onchange = function() {
		if (!hotels_img_1.checked){
			hotels_img_1_check = "";
			hotels_img_1_grade = 0;
		}else{
			hotels_img_1_check = "checked";
			hotels_img_1_grade = 1;
			hotels_img_1_partial_mark = 0;
			hotels_img_1_partial[0].value = hotels_img_1_partial_mark.toString();
		}
		hotels_img_1_grade_html.innerHTML = hotels_img_1_grade.toString();
		update_total();
	};

	hotels_img_1_partial.change( function (){
		if (this.value){
			hotels_img_1_partial_mark = parseFloat( this.value );
		} else {
			hotels_img_1_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	hotels_img_2 = $('#hotels_img_2')[0];
	hotels_img_2_grade_html = $('#hotels_img_2_grade')[0];
	hotels_img_2_partial = $('#hotels_img_2_partial_mark');
	hotels_img_2.onchange = function() {
		if (!hotels_img_2.checked){
			hotels_img_2_check = "";
			hotels_img_2_grade = 0;
		}else{
			hotels_img_2_check = "checked";
			hotels_img_2_grade = 1;
			hotels_img_2_partial_mark = 0;
			hotels_img_2_partial[0].value = hotels_img_2_partial_mark.toString();
		}
		hotels_img_2_grade_html.innerHTML = hotels_img_2_grade.toString();
		update_total();
	};

	hotels_img_2_partial.change( function (){
		if (this.value){
			hotels_img_2_partial_mark = parseFloat( this.value );
		} else {
			hotels_img_2_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	hotels_img_3 = $('#hotels_img_3')[0];
	hotels_img_3_grade_html = $('#hotels_img_3_grade')[0];
	hotels_img_3_partial = $('#hotels_img_3_partial_mark');
	hotels_img_3.onchange = function() {
		if (!hotels_img_3.checked){
			hotels_img_3_check = "";
			hotels_img_3_grade = 0;
		}else{
			hotels_img_3_check = "checked";
			hotels_img_3_grade = 1;
			hotels_img_3_partial_mark = 0;
			hotels_img_3_partial[0].value = hotels_img_3_partial_mark.toString();
		}
		hotels_img_3_grade_html.innerHTML = hotels_img_3_grade.toString();
		update_total();
	};

	hotels_img_3_partial.change( function (){
		if (this.value){
			hotels_img_3_partial_mark = parseFloat( this.value );
		} else {
			hotels_img_3_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	part_2_contents = $('#part_2_contents')[0];
	part_2_contents_grade_html = $('#part_2_contents_grade')[0];
	part_2_contents_partial = $('#part_2_contents_partial_mark');
	part_2_contents.onchange = function() {
		if (!part_2_contents.checked){
			part_2_contents_check = "";
			part_2_contents_grade = 0;
		}else{
			part_2_contents_check = "checked";
			part_2_contents_grade = 10;
			part_2_contents_partial_mark = 0;
			part_2_contents_partial[0].value = part_2_contents_partial_mark.toString();
		}
		part_2_contents_grade_html.innerHTML = part_2_contents_grade.toString();
		update_total();
	};

	part_2_contents_partial.change( function (){
		if (this.value){
			part_2_contents_partial_mark = parseFloat( this.value );
		} else {
			part_2_contents_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	part_1 = $('#part_1_given')[0];
	part_1.onchange = function(){
		if (!part_1.checked){
			part_1_check = "";
			make_part_1_zero();
		} else {
			make_part_1_full();
		}
		update_total();
	}

	part_2 = $('#part_2_given')[0];
	part_2.onchange = function(){
		if (!part_2.checked){
			part_2_check = "";
			make_part_2_zero();
		} else {
			make_part_2_full();
		}
		update_total();
	}


	$("#comment_file_generator").click( function() {
		structure_comments = $('#structure_comments').val();
		if (structure_comments === undefined){
			structure_comments = "";
		}
		youtube_comments = $('#youtube_comments').val();
		if (youtube_comments === undefined){
			youtube_comments = "";
		}

		image_1_comments = $('#image_1_comments').val();
		if (image_1_comments === undefined){
			image_1_comments = "";
		}

		image_2_comments = $('#image_2_comments').val();
		if (image_2_comments === undefined){
			image_2_comments = "";
		}

		image_3_comments = $('#image_3_comments').val();
		if (image_3_comments === undefined){
			image_3_comments = "";
		}

		l_html_comments = $('#l_html_comments').val();
		if (l_html_comments === undefined){
			l_html_comments = "";
		}

		r_html_comments = $('#r_html_comments').val();
		if (r_html_comments === undefined){
			r_html_comments = "";
		}

		l_head_comments = $('#l_head_comments').val();
		if (l_head_comments === undefined){
			l_head_comments = "";
		}

		r_head_comments = $('#r_head_comments').val();
		if (r_head_comments === undefined){
			r_head_comments = "";
		}

		l_title_comments = $('#l_title_comments').val();
		if (l_title_comments === undefined){
			l_title_comments = "";
		}

		r_title_comments = $('#r_title_comments').val();
		if (r_title_comments === undefined){
			r_title_comments = "";
		}

		l_body_comments = $('#l_body_comments').val();
		if (l_body_comments === undefined){
			l_body_comments = "";
		}

		r_body_comments = $('#r_body_comments').val();
		if (r_body_comments === undefined){
			r_body_comments = "";
		}

		l_h1_comments = $('#l_h1_comments').val();
		if (l_h1_comments === undefined){
			l_h1_comments = "";
		}

		r_h1_comments = $('#r_h1_comments').val();
		if (r_h1_comments === undefined){
			r_h1_comments = "";
		}

		l_div_comments = $('#l_div_comments').val();
		if (l_div_comments === undefined){
			l_div_comments = "";
		}

		r_div_comments = $('#r_div_comments').val();
		if (r_div_comments === undefined){
			r_div_comments = "";
		}

		l_iframe_comments = $('#l_iframe_comments').val();
		if (l_iframe_comments === undefined){
			l_iframe_comments = "";
		}

		r_iframe_comments = $('#r_iframe_comments').val();
		if (r_iframe_comments === undefined){
			r_iframe_comments = "";
		}

		l_ul_comments = $('#l_ul_comments').val();
		if (l_ul_comments === undefined){
			l_ul_comments = "";
		}

		r_ul_comments = $('#r_ul_comments').val();
		if (r_ul_comments === undefined){
			r_ul_comments = "";
		}

		l_li_comments = $('#l_li_comments').val();
		if (l_li_comments === undefined){
			l_li_comments = "";
		}

		r_li_comments = $('#r_li_comments').val();
		if (r_li_comments === undefined){
			r_li_comments = "";
		}

		l_a_text_comments = $('#l_a_text_comments').val();
		if (l_a_text_comments === undefined){
			l_a_text_comments = "";
		}

		r_a_text_comments = $('#r_a_text_comments').val();
		if (r_a_text_comments === undefined){
			r_a_text_comments = "";
		}

		l_a_image_comments = $('#l_a_image_comments').val();
		if (l_a_image_comments === undefined){
			l_a_image_comments = "";
		}

		r_a_image_comments = $('#r_a_image_comments').val();
		if (r_a_image_comments === undefined){
			r_a_image_comments = "";
		}

		br_comments = $('#br_comments').val();
		if (br_comments === undefined){
			br_comments = "";
		}

		img_comments = $('#img_comments').val();
		if (img_comments === undefined){
			img_comments = "";
		}

		p_comments = $('#p_comments').val();
		if (p_comments === undefined){
			p_comments = "";
		}

		home_box_comments = $('#home_box_comments').val();
		if (home_box_comments === undefined){
			home_box_comments = "";
		}

		home_to_place_comments = $('#home_to_place_comments').val();
		if (home_to_place_comments === undefined){
			home_to_place_comments = "";
		}

		home_to_food_comments = $('#home_to_food_comments').val();
		if (home_to_food_comments === undefined){
			home_to_food_comments = "";
		}

		home_to_hotels_comments = $('#home_to_hotels_comments').val();
		if (home_to_hotels_comments === undefined){
			home_to_hotels_comments = "";
		}

		places_box_comments = $('#places_box_comments').val();
		if (places_box_comments === undefined){
			places_box_comments = "";
		}

		places_to_home_comments = $('#places_to_home_comments').val();
		if (places_to_home_comments === undefined){
			places_to_home_comments = "";
		}

		places_to_food_comments = $('#places_to_food_comments').val();
		if (places_to_food_comments === undefined){
			places_to_food_comments = "";
		}

		places_to_hotels_comments = $('#places_to_hotels_comments').val();
		if (places_to_hotels_comments === undefined){
			places_to_hotels_comments = "";
		}

		food_box_comments = $('#food_box_comments').val();
		if (food_box_comments === undefined){
			food_box_comments = "";
		}

		food_to_home_comments = $('#food_to_home_comments').val();
		if (food_to_home_comments === undefined){
			food_to_home_comments = "";
		}

		food_to_place_comments = $('#food_to_place_comments').val();
		if (food_to_place_comments === undefined){
			food_to_place_comments = "";
		}

		food_to_hotels_comments = $('#food_to_hotels_comments').val();
		if (food_to_hotels_comments === undefined){
			food_to_hotels_comments = "";
		}

		hotels_box_comments = $('#hotels_box_comments').val();
		if (hotels_box_comments === undefined){
			hotels_box_comments = "";
		}

		hotels_to_home_comments = $('#hotels_to_home_comments').val();
		if (hotels_to_home_comments === undefined){
			hotels_to_home_comments = "";
		}

		hotels_to_place_comments = $('#hotels_to_place_comments').val();
		if (hotels_to_place_comments === undefined){
			hotels_to_place_comments = "";
		}

		hotels_to_food_comments = $('#hotels_to_food_comments').val();
		if (hotels_to_food_comments === undefined){
			hotels_to_food_comments = "";
		}

		home_banner_comments = $('#home_banner_comments').val();
		if (home_banner_comments === undefined){
			home_banner_comments = "";
		}

		places_banner_comments = $('#places_banner_comments').val();
		if (places_banner_comments === undefined){
			places_banner_comments = "";
		}

		food_banner_comments = $('#food_banner_comments').val();
		if (food_banner_comments === undefined){
			food_banner_comments = "";
		}

		hotels_banner_comments = $('#hotels_banner_comments').val();
		if (hotels_banner_comments === undefined){
			hotels_banner_comments = "";
		}

		home_img_1_comments = $('#home_img_1_comments').val();
		if (home_img_1_comments === undefined){
			home_img_1_comments = "";
		}

		home_img_2_comments = $('#home_img_2_comments').val();
		if (home_img_2_comments === undefined){
			home_img_2_comments = "";
		}

		home_img_3_comments = $('#home_img_3_comments').val();
		if (home_img_3_comments === undefined){
			home_img_3_comments = "";
		}

		places_img_1_comments = $('#places_img_1_comments').val();
		if (places_img_1_comments === undefined){
			places_img_1_comments = "";
		}

		places_img_2_comments = $('#places_img_2_comments').val();
		if (places_img_2_comments === undefined){
			places_img_2_comments = "";
		}

		places_img_3_comments = $('#places_img_3_comments').val();
		if (places_img_3_comments === undefined){
			places_img_3_comments = "";
		}

		food_img_1_comments = $('#food_img_1_comments').val();
		if (food_img_1_comments === undefined){
			food_img_1_comments = "";
		}

		food_img_2_comments = $('#food_img_2_comments').val();
		if (food_img_2_comments === undefined){
			food_img_2_comments = "";
		}

		food_img_3_comments = $('#food_img_3_comments').val();
		if (food_img_3_comments === undefined){
			food_img_3_comments = "";
		}

		hotels_img_1_comments = $('#hotels_img_1_comments').val();
		if (hotels_img_1_comments === undefined){
			hotels_img_1_comments = "";
		}

		hotels_img_2_comments = $('#hotels_img_2_comments').val();
		if (hotels_img_2_comments === undefined){
			hotels_img_2_comments = "";
		}

		hotels_img_3_comments = $('#hotels_img_3_comments').val();
		if (hotels_img_3_comments === undefined){
			hotels_img_3_comments = "";
		}

		part_2_contents_comments = $('#part_2_contents_comments').val();
		if (part_2_contents_comments === undefined){
			part_2_contents_comments = "";
		}

		part_1_comments = $('#part_1_given_comments').val();
		if (part_1_comments === undefined){
			part_1_comments = "";
		}

		part_2_comments = $('#part_2_given_comments').val();
		if (part_2_comments === undefined){
			part_2_comments = "";
		}

		feedback = construct_string();
		var textArea = document.createElement("textarea");
		textArea.value = feedback;
		//textArea.style = "{position: absulote; opacity:0;}";
		document.body.appendChild(textArea);
  		textArea.select();
		document.execCommand("Copy");
		document.body.removeChild(textArea);
	});

	update_total();

}


function update_total(){
	total = structure_grade
		  + structure_partial_mark
	      + youtube_grade
	      + youtube_partial_mark
	      + image_1_grade
	      + image_1_partial_mark
	      + image_2_grade
	      + image_2_partial_mark
	      + image_3_grade
	      + image_3_partial_mark
	      + l_html_grade
	      + l_html_partial_mark
	      + r_html_grade
	      + r_html_partial_mark
	      + l_head_grade
	      + l_head_partial_mark
	      + r_head_grade
	      + r_head_partial_mark
	      + l_title_grade
	      + l_title_partial_mark
	      + r_title_grade
	      + r_title_partial_mark
	      + l_body_grade
	      + l_body_partial_mark
	      + r_body_grade
	      + r_body_partial_mark
	      + l_h1_grade
	      + l_h1_partial_mark
	      + r_h1_grade
	      + r_h1_partial_mark
	      + l_div_grade
	      + l_div_partial_mark
	      + r_div_grade
	      + r_div_partial_mark
	      + l_iframe_grade
	      + l_iframe_partial_mark
	      + r_iframe_grade
	      + r_iframe_partial_mark
	      + l_ul_grade
	      + l_ul_partial_mark
	      + r_ul_grade
	      + r_ul_partial_mark
	      + l_li_grade
	      + l_li_partial_mark
	      + r_li_grade
	      + r_li_partial_mark
	      + l_a_text_grade
	      + l_a_text_partial_mark
	      + r_a_text_grade
	      + r_a_text_partial_mark
	      + l_a_image_grade
	      + l_a_image_partial_mark
	      + r_a_image_grade
	      + r_a_image_partial_mark
	      + br_grade
	      + br_partial_mark
	      + img_grade
	      + img_partial_mark
	      + p_grade
	      + p_partial_mark
	      + home_box_grade
	      + home_box_partial_mark
	      + home_to_place_grade
	      + home_to_place_partial_mark
	      + home_to_food_grade
	      + home_to_food_partial_mark
	      + home_to_hotels_grade
	      + home_to_hotels_partial_mark
	      + places_box_grade
	      + places_box_partial_mark
	      + places_to_home_grade
	      + places_to_home_partial_mark
	      + places_to_food_grade
	      + places_to_food_partial_mark
	      + places_to_hotels_grade
	      + places_to_hotels_partial_mark
	      + food_box_grade
	      + food_box_partial_mark
	      + food_to_home_grade
	      + food_to_home_partial_mark
	      + food_to_place_grade
	      + food_to_place_partial_mark
	      + food_to_hotels_grade
	      + food_to_hotels_partial_mark
	      + hotels_box_grade
	      + hotels_box_partial_mark
	      + hotels_to_home_grade
	      + hotels_to_home_partial_mark
	      + hotels_to_place_grade
	      + hotels_to_place_partial_mark
	      + hotels_to_food_grade
	      + hotels_to_food_partial_mark
	      + home_banner_grade
	      + home_banner_partial_mark
	      + places_banner_grade
	      + places_banner_partial_mark
	      + food_banner_grade
	      + food_banner_partial_mark
	      + hotels_banner_grade
	      + hotels_banner_partial_mark
	      + home_img_1_grade
	      + home_img_1_partial_mark
	      + home_img_2_grade
	      + home_img_2_partial_mark
	      + home_img_3_grade
	      + home_img_3_partial_mark
	      + places_img_1_grade
	      + places_img_1_partial_mark
	      + places_img_2_grade
	      + places_img_2_partial_mark
	      + places_img_3_grade
	      + places_img_3_partial_mark
	      + food_img_1_grade
	      + food_img_1_partial_mark
	      + food_img_2_grade
	      + food_img_2_partial_mark
	      + food_img_3_grade
	      + food_img_3_partial_mark
	      + hotels_img_1_grade
	      + hotels_img_1_partial_mark
	      + hotels_img_2_grade
	      + hotels_img_2_partial_mark
	      + hotels_img_3_grade
	      + hotels_img_3_partial_mark
	      + part_2_contents_grade
	      + part_2_contents_partial_mark;



	$('#total_mark_top')[0].innerHTML = total.toString();
	$('#total_mark_bottom')[0].innerHTML = total.toString();

}

function construct_string(){
	return `<style>

		body {
			width: 600px;
			margin: auto;
		}

		table {
    		border-spacing: 2px;
    		width: 600px;
		}

		th {
		    text-align: left;
		    color: white;
		    background-color: #ADD8E6;
		}

		th, td {
		    padding: 10px;
		}

		table, th, td {
		    border: 1px solid black;
		    border-collapse: collapse;
		}

		td.category {
			background-color: #32CD32;
			color: white;
		}

		th.p_back {
			background-color: purple;
		}

		.comment {
			min-width: 200px;
			resize: none;
			font-size: 1em;
		}

		input{
			font-size: 1em;
			width: 40px;
		}

		.disable_color {
			background-color: black;
		}

		.total_mark {
			font-weight: 900;
			color: red;
		}

	</style>

	<table>
	<tr>
		<td>Total Mark:</td>
		<td id="total_mark_top" class="total_mark">${total.toString()}</td>
	</tr>
	</table>
	<br>

	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Lab 1</th>
		<th class="p_back" colspan=2>Comments</th>
	</tr>
	<tr>
		<td>Part 1 url is given properly:</td>
		<td><input type="checkbox" id="part_1_given" disabled ${part_1_check}></td>
		<td class="comment" colspan=4>${part_1_comments}</td>
	</tr>

	<tr>
		<td>Part 2 url is given properly:</td>
		<td><input type="checkbox" id="part_2_given" disabled ${part_2_check}></td>
		<td class="comment" colspan=4>${part_2_comments}</td>
	</tr>

	</table>
<br>
	<h1>Part 1: 50%</h1>

	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Structure and Content</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>
	<tr>
		<td>Structure: Four Sections: Course, Department, Faculty, Video</td>
		<td><input type="checkbox" id="structure" disabled ${structure_check}></td>
		<td id="structure_grade">${structure_grade.toString()}</td>
		<td>${structure_partial_mark.toString()}</td>
		<td class="comment">${structure_comments}</td>
	</tr>
	<tr>
		<td>One Embedded Youtube Video:</td>
		<td><input type="checkbox" id="youtube" disabled ${youtube_check}></td>
		<td id="youtube_grade">${youtube_grade.toString()}</td>
		<td>${youtube_partial_mark.toString()}</td>
		<td class="comment">${youtube_comments}</td>
	</tr>
	</table>
<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Three Images (each at least 600 pixels wide)</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>
	<tr>
		<td>Image 1 (5 marks)</td>
		<td><input type="checkbox" id="image_1" disabled ${image_1_check}></td>
		<td id="image_1_grade">${image_1_grade.toString()}</td>
		<td>${image_1_partial_mark.toString()}</td>
		<td class="comment">${image_1_comments}</td>
	</tr>

	<tr>
		<td>Image 2 (5 marks)</td>
		<td><input type="checkbox" id="image_2" disabled ${image_2_check}></td>
		<td id="image_2_grade">${image_2_grade.toString()}</td>
		<td>${image_2_partial_mark.toString()}</td>
		<td class="comment">${image_2_comments}</td>
	</tr>

	<tr>
		<td>Image 3 (5 marks)</td>
		<td><input type="checkbox" id="image_3" disabled ${image_3_check}></td>
		<td id="image_3_grade">${image_3_grade.toString()}</td>
		<td>${image_3_partial_mark}</td>
		<td class="comment">${image_3_comments}</td>
	</tr>
	</table>
<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">HTML tags you must include</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>

	<tr>
		<td>&lt;html&gt;</td>
		<td><input type="checkbox" id="l_html" disabled ${l_html_check}></td>
		<td id="l_html_grade">${l_html_grade.toString()}</td>
		<td>${l_html_partial_mark.toString()}</td>
		<td class="comment">${l_html_comments}</td>
	</tr>

	<tr>
		<td>&lt;/html&gt;</td>
		<td><input type="checkbox" id="r_html" disabled ${r_html_check}></td>
		<td id="r_html_grade">${r_html_grade.toString()}</td>
		<td>${r_html_partial_mark.toString()}</td>
		<td class="comment">${r_html_comments}</td>
	</tr>

	<tr>
		<td>&lt;head&gt;</td>
		<td><input type="checkbox" id="l_head" disabled ${l_head_check}></td>
		<td id="l_head_grade">${l_head_grade.toString()}</td>
		<td>${l_head_partial_mark.toString()}</td>
		<td class="comment">${l_head_comments}</td>
	</tr>

	<tr>
		<td>&lt;/head&gt;</td>
		<td><input type="checkbox" id="r_head" disabled ${r_head_check}></td>
		<td id="r_head_grade">${r_head_grade.toString()}</td>
		<td>${r_head_partial_mark.toString()}</td>
		<td class="comment">${r_head_comments}</td>
	</tr>

	<tr>
		<td>&lt;title&gt;</td>
		<td><input type="checkbox" id="l_title" disabled ${l_title_check}></td>
		<td id="l_title_grade">${l_title_grade.toString()}</td>
		<td>${l_title_partial_mark.toString()}</td>
		<td class="comment">${l_title_comments}</td>
	</tr>

	<tr>
		<td>&lt;/title&gt;</td>
		<td><input type="checkbox" id="r_title" disabled ${r_title_check}></td>
		<td id="r_title_grade">${r_title_grade.toString()}</td>
		<td>${r_title_partial_mark.toString()}</td>
		<td class="comment">${r_title_comments}</td>
	</tr>

	<tr>
		<td>&lt;body&gt;</td>
		<td><input type="checkbox" id="l_body" disabled ${l_body_check}></td>
		<td id="l_body_grade">${l_body_grade.toString()}</td>
		<td>${l_body_partial_mark.toString()}</td>
		<td class="comment">${l_body_comments}</td>
	</tr>

	<tr>
		<td>&lt;/body&gt;</td>
		<td><input type="checkbox" id="r_body" disabled ${r_body_check}></td>
		<td id="r_body_grade">${r_body_grade.toString()}</td>
		<td>${r_body_partial_mark.toString()}</td>
		<td class="comment">${r_body_comments}</td>
	</tr>

	<tr>
		<td>&lt;h1&gt;</td>
		<td><input type="checkbox" id="l_h1" disabled ${l_h1_check}></td>
		<td id="l_h1_grade">${l_h1_grade.toString()}</td>
		<td>${l_h1_partial_mark.toString()}</td>
		<td class="comment">${l_h1_comments}</td>
	</tr>

	<tr>
		<td>&lt;/h1&gt;</td>
		<td><input type="checkbox" id="r_h1" disabled ${r_h1_check}></td>
		<td id="r_h1_grade">${r_h1_grade.toString()}</td>
		<td>${r_h1_partial_mark.toString()}</td>
		<td class="comment">${r_h1_comments}</td>
	</tr>

		<tr>
		<td>&lt;div&gt;</td>
		<td><input type="checkbox" id="l_div" disabled ${l_div_check}></td>
		<td id="l_div_grade">${l_div_grade.toString()}</td>
		<td>${l_div_partial_mark.toString()}</td>
		<td class="comment">${l_div_comments}</td>
	</tr>

	<tr>
		<td>&lt;/div&gt;</td>
		<td><input type="checkbox" id="r_div" disabled ${r_div_check}></td>
		<td id="r_div_grade">${r_div_grade.toString()}</td>
		<td>${r_div_partial_mark.toString()}</td>
		<td class="comment">${r_div_comments}</td>
	</tr>

		<tr>
		<td>&lt;iframe&gt;</td>
		<td><input type="checkbox" id="l_iframe" disabled ${l_iframe_check}></td>
		<td id="l_iframe_grade">${l_iframe_grade.toString()}</td>
		<td>${l_iframe_partial_mark.toString()}</td>
		<td class="comment">${l_iframe_comments}</td>
	</tr>

	<tr>
		<td>&lt;/iframe&gt;</td>
		<td><input type="checkbox" id="r_iframe" disabled ${r_iframe_check}></td>
		<td id="r_iframe_grade">${r_iframe_grade.toString()}</td>
		<td>${r_iframe_partial_mark.toString()}</td>
		<td class="comment">${r_iframe_comments}</td>
	</tr>

		<tr>
		<td>&lt;ul&gt; or &lt;ol&gt;</td>
		<td><input type="checkbox" id="l_ul" disabled ${l_ul_check}></td>
		<td id="l_ul_grade">${l_ul_grade.toString()}</td>
		<td>${l_ul_partial_mark.toString()}</td>
		<td class="comment">${l_ul_comments}</td>
	</tr>

	<tr>
		<td>&lt;/ul&gt; or &lt;/ol&gt;</td>
		<td><input type="checkbox" id="r_ul"  disabled ${r_ul_check}></td>
		<td id="r_ul_grade">${r_ul_grade.toString()}</td>
		<td>${r_ul_partial_mark.toString()}</td>
		<td class="comment">${r_ul_comments}</td>
	</tr>

	<tr>
		<td>&lt;li&gt;</td>
		<td><input type="checkbox" id="l_li" disabled ${l_li_check}></td>
		<td id="l_li_grade">${l_li_grade.toString()}</td>
		<td>${l_li_partial_mark.toString()}</td>
		<td class="comment">${l_li_comments}</td>
	</tr>

	<tr>
		<td>&lt;/li&gt;</td>
		<td><input type="checkbox" id="r_li" disabled ${r_li_check}></td>
		<td id="r_li_grade">${r_li_grade.toString()}</td>
		<td>${r_li_partial_mark.toString()}</td>
		<td class="comment">${r_li_comments}</td>
	</tr>

	<tr>
		<td>&lt;a&gt; around some text</td>
		<td><input type="checkbox" id="l_a_text" disabled ${l_a_text_check}></td>
		<td id="l_a_text_grade">${l_a_text_grade.toString()}</td>
		<td>${l_a_text_partial_mark.toString()}</td>
		<td class="comment">${l_a_text_comments}</td>
	</tr>

	<tr>
		<td>&lt;/a&gt; around some text</td>
		<td><input type="checkbox" id="r_a_text" disabled ${r_a_text_check}></td>
		<td id="r_a_text_grade">${r_a_text_grade.toString()}</td>
		<td>${r_a_text_partial_mark.toString()}</td>
		<td class="comment">${r_a_text_comments}</td>
	</tr>

	<tr>
		<td>&lt;a&gt; around an image</td>
		<td><input type="checkbox" id="l_a_image" disabled ${l_a_image_check}></td>
		<td id="l_a_image_grade">${l_a_image_grade.toString()}</td>
		<td>${l_a_image_partial_mark.toString()}</td>
		<td class="comment">${l_a_image_comments}</td>
	</tr>

	<tr>
		<td>&lt;/a&gt; around an image</td>
		<td><input type="checkbox" id="r_a_image" disabled ${r_a_image_check}></td>
		<td id="r_a_image_grade">${r_a_image_grade.toString()}</td>
		<td>${r_a_image_partial_mark.toString()}</td>
		<td class="comment">${r_a_image_comments}</td>
	</tr>

	<tr>
		<td>&lt;br&gt;</td>
		<td><input type="checkbox" id="id_br" disabled ${br_check}></td>
		<td id="br_grade">${br_grade.toString()}</td>
		<td>${br_partial_mark.toString()}</td>
		<td class="comment">${br_comments}</td>
	</tr>

	<tr>
		<td>&lt;img&gt;</td>
		<td><input type="checkbox" id="id_img" disabled ${img_check}></td>
		<td id="img_grade">${img_grade.toString()}</td>
		<td>${img_partial_mark.toString()}</td>
		<td class="comment">${img_comments}</td>
	</tr>

	<tr>
		<td>&lt;p&gt;</td>
		<td><input type="checkbox" id="id_p" disabled ${p_check}></td>
		<td id="p_grade">${p_grade.toString()}</td>
		<td>${p_partial_mark.toString()}</td>
		<td class="comment">${p_comments}</td>
	</tr>


	</table>
<br>

	<h1>Part 2: 50%</h1>
<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Home page layout: 5%</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>

	<tr>
		<td>There's a colored (any color) box that highlights the word "Home" or something similar :</td>
		<td><input type="checkbox" id="home_box" disabled ${home_box_check}></td>
		<td id="home_box_grade">${home_box_grade.toString()}</td>
		<td>${home_box_partial_mark.toString()}</td>
		<td class="comment">${home_box_comments}</td>
	</tr>

	<tr>
		<td>Link to the Places page works:</td>
		<td><input type="checkbox" id="home_to_place" disabled ${home_to_place_check}></td>
		<td id="home_to_place_grade">${home_to_place_grade.toString()}</td>
		<td>${home_to_place_partial_mark.toString()}</td>
		<td class="comment">${home_to_place_comments}</td>
	</tr>

	<tr>
		<td>Link to the Food page works:</td>
		<td><input type="checkbox" id="home_to_food" disabled ${home_to_food_check}></td>
		<td id="home_to_food_grade">${home_to_food_grade.toString()}</td>
		<td>${home_to_food_partial_mark.toString()}</td>
		<td class="comment">${home_to_food_comments}</td>
	</tr>

	<tr>
		<td>Link to the Hotels page works:</td>
		<td><input type="checkbox" id="home_to_hotels" disabled ${home_to_hotels_check}></td>
		<td id="home_to_hotels_grade">${home_to_hotels_grade.toString()}</td>
		<td>${home_to_hotels_partial_mark.toString()}</td>
		<td class="comment">${home_to_hotels_comments}</td>
	</tr>

	</table>
<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Places page layout: 5%</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>

	<tr>
		<td>There's a colored (any color) box that highlights the word "Place" or something similar :</td>
		<td><input type="checkbox" id="places_box" disabled ${places_box_check}></td>
		<td id="places_box_grade">${places_box_grade.toString()}</td>
		<td>${places_box_partial_mark.toString()}</td>
		<td class="comment">${places_box_comments}</td>
	</tr>

	<tr>
		<td>Link to the Home page works:</td>
		<td><input type="checkbox" id="places_to_home" disabled ${places_to_home_check}></td>
		<td id="places_to_home_grade">${places_to_home_grade.toString()}</td>
		<td>${places_to_home_partial_mark.toString()}</td>
		<td class="comment">${places_to_home_comments}</td>
	</tr>

	<tr>
		<td>Link to the Food page works:</td>
		<td><input type="checkbox" id="places_to_food" disabled ${places_to_food_check}></td>
		<td id="places_to_food_grade">${places_to_food_grade.toString()}</td>
		<td>${places_to_food_partial_mark.toString()}</td>
		<td class="comment">${places_to_food_comments}</td>
	</tr>

	<tr>
		<td>Link to the Hotels page works:</td>
		<td><input type="checkbox" id="places_to_hotels" disabled ${places_to_hotels_check}></td>
		<td id="places_to_hotels_grade">${places_to_hotels_grade.toString()}</td>
		<td>${places_to_hotels_partial_mark.toString()}</td>
		<td class="comment">${places_to_hotels_comments}</td>
	</tr>

	</table>
<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Food page layout: 5%</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>

	<tr>
		<td>There's a colored (any color) box that highlights the word "Food" or something similar :</td>
		<td><input type="checkbox" id="food_box" disabled ${food_box_check}></td>
		<td id="food_box_grade">${food_box_grade.toString()}</td>
		<td>${food_box_partial_mark.toString()}</td>
		<td class="comment">${food_box_comments}</td>
	</tr>

	<tr>
		<td>Link to the Home page works:</td>
		<td><input type="checkbox" id="food_to_home" disabled ${food_to_home_check}></td>
		<td id="food_to_home_grade">${food_to_home_grade.toString()}</td>
		<td>${food_to_home_partial_mark.toString()}</td>
		<td class="comment">${food_to_home_comments}</td>
	</tr>

	<tr>
		<td>Link to the Places page works:</td>
		<td><input type="checkbox" id="food_to_place" disabled ${food_to_place_check}></td>
		<td id="food_to_place_grade">${food_to_place_grade.toString()}</td>
		<td>${food_to_place_partial_mark.toString()}</td>
		<td class="comment">${food_to_place_comments}</td>
	</tr>


	<tr>
		<td>Link to the Hotels page works:</td>
		<td><input type="checkbox" id="food_to_hotels" disabled ${food_to_hotels_check}></td>
		<td id="food_to_hotels_grade">${food_to_hotels_grade.toString()}</td>
		<td>${food_to_hotels_partial_mark.toString()}</td>
		<td class="comment">${food_to_hotels_comments}</td>
	</tr>

	</table>
<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Hotels page layout: 5%</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>

	<tr>
		<td>There's a colored (any color) box that highlights the word "Hotels" or something similar :</td>
		<td><input type="checkbox" id="hotels_box" disabled ${hotels_box_check}></td>
		<td id="hotels_box_grade">${hotels_box_grade.toString()}</td>
		<td>${hotels_box_partial_mark.toString()}</td>
		<td class="comment">${hotels_box_comments}</td>
	</tr>

	<tr>
		<td>Link to the Home page works:</td>
		<td><input type="checkbox" id="hotels_to_home" disabled ${hotels_to_home_check}></td>
		<td id="hotels_to_home_grade">${hotels_to_home_grade.toString()}</td>
		<td>${hotels_to_home_partial_mark.toString()}</td>
		<td class="comment">${hotels_to_home_comments}</td>
	</tr>

	<tr>
		<td>Link to the Places page works:</td>
		<td><input type="checkbox" id="hotels_to_place" disabled ${hotels_to_place_check}></td>
		<td id="hotels_to_place_grade">${hotels_to_place_grade.toString()}</td>
		<td>${hotels_to_place_partial_mark.toString()}</td>
		<td class="comment">${hotels_to_place_comments}</td>
	</tr>


	<tr>
		<td>Link to the Food page works:</td>
		<td><input type="checkbox" id="hotels_to_food" disabled ${hotels_to_food_check}></td>
		<td id="hotels_to_food_grade">${hotels_to_food_grade.toString()}</td>
		<td>${hotels_to_food_partial_mark.toString()}</td>
		<td class="comment">${hotels_to_food_comments}</td>
	</tr>

	</table>
<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Banner Images, properly resized and cropped to 1000x400 px or to an aspect ratio of 2.5. Two marks for each banner image.</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>

	<tr>
		<td>Home page</td>
		<td><input type="checkbox" id="home_banner" disabled ${home_banner_check}></td>
		<td id="home_banner_grade">${home_banner_grade.toString()}</td>
		<td>${home_banner_partial_mark.toString()}</td>
		<td class="comment">${home_banner_comments}</td>
	</tr>

	<tr>
		<td>Places page</td>
		<td><input type="checkbox" id="places_banner" disabled ${places_banner_check}></td>
		<td id="places_banner_grade">${places_banner_grade.toString()}</td>
		<td>${places_banner_partial_mark.toString()}</td>
		<td class="comment">${places_banner_comments}</td>
	</tr>

	<tr>
		<td>Food page</td>
		<td><input type="checkbox" id="food_banner" disabled ${food_banner_check}></td>
		<td id="food_banner_grade">${food_banner_grade.toString()}</td>
		<td>${food_banner_partial_mark.toString()}</td>
		<td class="comment">${food_banner_comments}</td>
	</tr>

	<tr>
		<td>Hotels page</td>
		<td><input type="checkbox" id="hotels_banner" disabled ${hotels_banner_check}></td>
		<td id="hotels_banner_grade">${hotels_banner_grade.toString()}</td>
		<td>${hotels_banner_partial_mark.toString()}</td>
		<td class="comment">${hotels_banner_comments}</td>
	</tr>

	</table>
<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Home page smaller images: 3%. Each image needs to be properly resized and cropped to 300x150 px or to an aspect ratio of 2.0.</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>

	<tr>
		<td>Image 1</td>
		<td><input type="checkbox" id="home_img_1" disabled ${home_img_1_check}></td>
		<td id="home_img_1_grade">${home_img_1_grade.toString()}</td>
		<td>${home_img_1_partial_mark.toString()}</td>
		<td class="comment">${home_img_1_comments}</td>
	</tr>

	<tr>
		<td>Image 2</td>
		<td><input type="checkbox" id="home_img_2" disabled ${home_img_2_check}></td>
		<td id="home_img_2_grade">${home_img_2_grade.toString()}</td>
		<td>${home_img_2_partial_mark.toString()}</td>
		<td class="comment">${home_img_2_comments}</td>
	</tr>

	<tr>
		<td>Image 3</td>
		<td><input type="checkbox" id="home_img_3" disabled ${home_img_3_check}></td>
		<td id="home_img_3_grade">${home_img_3_grade.toString()}</td>
		<td>${home_img_3_partial_mark.toString()}</td>
		<td class="comment">${home_img_3_comments}</td>
	</tr>

	</table>

	<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Places page smaller images: 3%. Each image needs to be properly resized and cropped to 300x150 px or to an aspect ratio of 2.0.</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>

	<tr>
		<td>Image 1</td>
		<td><input type="checkbox" id="places_img_1" disabled ${places_img_1_check}></td>
		<td id="places_img_1_grade">${places_img_1_grade.toString()}</td>
		<td>${places_img_1_partial_mark.toString()}</td>
		<td class="comment">${places_img_1_comments}</td>
	</tr>

	<tr>
		<td>Image 2</td>
		<td><input type="checkbox" id="places_img_2" disabled ${places_img_2_check}></td>
		<td id="places_img_2_grade">${places_img_2_grade.toString()}</td>
		<td>${places_img_2_partial_mark.toString()}</td>
		<td class="comment">${places_img_2_comments}</td>
	</tr>

	<tr>
		<td>Image 3</td>
		<td><input type="checkbox" id="places_img_3" disabled ${places_img_3_check}></td>
		<td id="places_img_3_grade">${places_img_3_grade.toString()}</td>
		<td>${places_img_3_partial_mark.toString()}</td>
		<td class="comment">${places_img_3_comments}</td>
	</tr>

	</table>
<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Food page smaller images: 3%. Each image needs to be properly resized and cropped to 300x150 px or to an aspect ratio of 2.0.</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>

	<tr>
		<td>Image 1</td>
		<td><input type="checkbox" id="food_img_1" disabled ${food_img_1_check}></td>
		<td id="food_img_1_grade">${food_img_1_grade.toString()}</td>
		<td>${food_img_1_partial_mark.toString()}</td>
		<td class="comment">${food_img_1_comments}</td>
	</tr>

	<tr>
		<td>Image 2</td>
		<td><input type="checkbox" id="food_img_2" disabled ${food_img_2_check}></td>
		<td id="food_img_2_grade">${food_img_2_grade.toString()}</td>
		<td>${food_img_2_partial_mark.toString()}</td>
		<td class="comment">${food_img_2_comments}</td>
	</tr>

	<tr>
		<td>Image 3</td>
		<td><input type="checkbox" id="food_img_3" disabled ${food_img_3_check}></td>
		<td id="food_img_3_grade">${food_img_3_grade.toString()}</td>
		<td>${food_img_3_partial_mark.toString()}</td>
		<td class="comment">${food_img_3_comments}</td>
	</tr>

	</table>
<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Hotels page smaller images: 3%. Each image needs to be properly resized and cropped to 300x150 px or to an aspect ratio of 2.0.</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>

	<tr>
		<td>Image 1</td>
		<td><input type="checkbox" id="hotels_img_1" disabled ${hotels_img_1_check}></td>
		<td id="hotels_img_1_grade">${hotels_img_1_grade.toString()}</td>
		<td>${hotels_img_1_partial_mark.toString()}</td>
		<td class="comment">${hotels_img_1_comments}</td>
	</tr>
	<tr>
		<td>Image 2</td>
		<td><input type="checkbox" id="hotels_img_2" disabled ${hotels_img_2_check}></td>
		<td id="hotels_img_2_grade">${hotels_img_2_grade.toString()}</td>
		<td>${hotels_img_2_partial_mark.toString()}</td>
		<td class="comment">${hotels_img_2_comments}</td>
	</tr>
	<tr>
		<td>Image 3</td>
		<td><input type="checkbox" id="hotels_img_3" disabled ${hotels_img_3_check}></td>
		<td id="hotels_img_3_grade">${hotels_img_3_grade.toString()}</td>
		<td>${hotels_img_3_partial_mark.toString()}</td>
		<td class="comment">${hotels_img_3_comments}</td>
	</tr>
	</table>
<br>
	<table class="required_table">
	<tr>
		<th colspan=3 class="category">Content: 10%. It's okay to have text copy pasted. But you do need to change the text given in the template.</th>
		<th class="p_back">Partial Grade/Adjustment</th>
		<th class="p_back">Comments</th>
	</tr>
	<tr>
		<td>Sufficient contents/descriptions in each sections are present:</td>
		<td><input type="checkbox" id="part_2_contents" disabled ${part_2_contents_check}></td>
		<td id="part_2_contents_grade">${part_2_contents_grade.toString()}</td>
		<td>${part_2_contents_partial_mark.toString()}</td>
		<td class="comment">${part_2_contents_comments}</td>
	</tr>
	</table>
	<br>
	<table>
	<tr>
		<td>Total Mark:</td>
		<td id="total_mark_bottom" class="total_mark">${total.toString()}</td>
	</tr>
	</table>
`

}


function make_part_1_zero(){

	structure_grade = 0;
    structure_partial_mark = 0;
    structure_check = "";
    $('#structure').prop("checked", false);
    $('#structure_grade')[0].innerHTML = structure_grade.toString();
	youtube_grade = 0;
	youtube_partial_mark = 0;
	youtube_check = "";
	$('#youtube').prop("checked", false);
    $('#youtube_grade')[0].innerHTML = youtube_grade.toString();
	image_1_grade = 0;
	image_1_partial_mark = 0;
	image_1_check = "";
	$('#image_1').prop("checked", false);
    $('#image_1_grade')[0].innerHTML = image_1_grade.toString();
	image_2_grade = 0;
	image_2_partial_mark = 0;
	image_2_check = "";
	$('#image_2').prop("checked", false);
    $('#image_2_grade')[0].innerHTML = image_2_grade.toString();
	image_3_grade = 0;
	image_3_partial_mark = 0;
	image_3_check = "";
	$('#image_3').prop("checked", false);
    $('#image_3_grade')[0].innerHTML = image_3_grade.toString();
	l_html_grade = 0;
	l_html_partial_mark = 0;
	l_html_check = "";
	$('#l_html').prop("checked", false);
    $('#l_html_grade')[0].innerHTML = l_html_grade.toString();
	r_html_grade = 0;
	r_html_partial_mark = 0;
	r_html_check = "";
	$('#r_html').prop("checked", false);
    $('#r_html_grade')[0].innerHTML = r_html_grade.toString();
	l_head_grade = 0;
	l_head_partial_mark = 0;
	l_head_check = "";
	$('#l_head').prop("checked", false);
    $('#l_head_grade')[0].innerHTML = l_head_grade.toString();
	r_head_grade = 0;
	r_head_partial_mark = 0;
	r_head_check = "";
	$('#r_head').prop("checked", false);
    $('#r_head_grade')[0].innerHTML = r_head_grade.toString();
	l_title_grade = 0;
	l_title_partial_mark = 0;
	l_title_check = "";
	$('#l_title').prop("checked", false);
    $('#l_title_grade')[0].innerHTML = l_title_grade.toString();
	r_title_grade = 0;
	r_title_partial_mark = 0;
	r_title_check = "";
	$('#r_title').prop("checked", false);
    $('#r_title_grade')[0].innerHTML = r_title_grade.toString();
	l_body_grade = 0;
	l_body_partial_mark = 0;
	l_body_check = "";
	$('#l_body').prop("checked", false);
    $('#l_body_grade')[0].innerHTML = l_body_grade.toString();
	r_body_grade = 0;
	r_body_partial_mark = 0;
	r_body_check = "";
	$('#r_body').prop("checked", false);
    $('#r_body_grade')[0].innerHTML = r_body_grade.toString();
	l_h1_grade = 0;
	l_h1_partial_mark = 0;
	l_h1_check = "";
	$('#l_h1').prop("checked", false);
    $('#l_h1_grade')[0].innerHTML = l_h1_grade.toString();
	r_h1_grade = 0;
	r_h1_partial_mark = 0;
	r_h1_check = "";
	$('#r_h1').prop("checked", false);
    $('#r_h1_grade')[0].innerHTML = r_h1_grade.toString();
	l_div_grade = 0;
	l_div_partial_mark = 0,
	l_div_check = "";
	$('#l_div').prop("checked", false);
    $('#l_div_grade')[0].innerHTML = l_div_grade.toString();
	r_div_grade = 0;
	r_div_partial_mark = 0;
	r_div_check = "";
	$('#r_div').prop("checked", false);
    $('#r_div_grade')[0].innerHTML = r_div_grade.toString();
	l_iframe_grade = 0;
	l_iframe_partial_mark = 0;
	l_iframe_check = "";
	$('#l_iframe').prop("checked", false);
    $('#l_iframe_grade')[0].innerHTML = l_iframe_grade.toString();
	r_iframe_grade = 0;
	r_iframe_partial_mark = 0;
	r_iframe_check = "";
	$('#r_iframe').prop("checked", false);
    $('#r_iframe_grade')[0].innerHTML = r_iframe_grade.toString();
	l_ul_grade = 0;
	l_ul_partial_mark = 0;
	l_ul_check = "";
	$('#l_ul').prop("checked", false);
    $('#l_ul_grade')[0].innerHTML = l_ul_grade.toString();
	r_ul_grade = 0;
	r_ul_partial_mark = 0;
	r_ul_check = "";
	$('#r_ul').prop("checked", false);
    $('#r_ul_grade')[0].innerHTML = r_ul_grade.toString();
	l_li_grade = 0;
	l_li_partial_mark = 0;
	l_li_check = "";
	$('#l_li').prop("checked", false);
    $('#l_li_grade')[0].innerHTML = l_li_grade.toString();
	r_li_grade = 0;
	r_li_partial_mark = 0;
	r_li_check = "";
	$('#r_li').prop("checked", false);
    $('#r_li_grade')[0].innerHTML = r_li_grade.toString();
	l_a_text_grade = 0;
	l_a_text_partial_mark = 0;
	l_a_text_check = "";
	$('#l_a_text').prop("checked", false);
    $('#l_a_text_grade')[0].innerHTML = l_a_text_grade.toString();
	r_a_text_grade = 0;
	r_a_text_partial_mark = 0;
	r_a_text_check = "";
	$('#r_a_text').prop("checked", false);
    $('#r_a_text_grade')[0].innerHTML = r_a_text_grade.toString();
	l_a_image_grade = 0;
	l_a_image_partial_mark = 0;
	l_a_image_check = "";
	$('#l_a_image').prop("checked", false);
    $('#l_a_image_grade')[0].innerHTML = l_a_image_grade.toString();
	r_a_image_grade = 0;
	r_a_image_partial_mark = 0;
	r_a_image_check = "";
	$('#r_a_image').prop("checked", false);
    $('#r_a_image_grade')[0].innerHTML = r_a_image_grade.toString();
	br_grade = 0;
	br_partial_mark = 0;
	br_check = "",
	$('#id_br').prop("checked", false);
    $('#br_grade')[0].innerHTML = br_grade.toString();
	img_grade = 0;
	img_partial_mark = 0;
	img_check = "";
	$('#id_img').prop("checked", false);
    $('#img_grade')[0].innerHTML = img_grade.toString();
	p_grade = 0;
	p_partial_mark = 0;
	p_check = "";
	$('#id_p').prop("checked", false);
    $('#p_grade')[0].innerHTML = p_grade.toString();
	update_total();
}

function make_part_1_full(){

	structure_grade = 5;
    structure_partial_mark = 0;
    structure_check = "checked";
    $('#structure').prop("checked", true);
    $('#structure_grade')[0].innerHTML = structure_grade.toString();
	youtube_grade = 5;
	youtube_partial_mark = 0;
	youtube_check = "checked";
	$('#youtube').prop("checked", true);
    $('#youtube_grade')[0].innerHTML = youtube_grade.toString();
	image_1_grade = 5;
	image_1_partial_mark = 0;
	image_1_check = "checked";
	$('#image_1').prop("checked", true);
    $('#image_1_grade')[0].innerHTML = image_1_grade.toString();
	image_2_grade = 5;
	image_2_partial_mark = 0;
	image_2_check = "checked";
	$('#image_2').prop("checked", true);
    $('#image_2_grade')[0].innerHTML = image_2_grade.toString();
	image_3_grade = 5;
	image_3_partial_mark = 0;
	image_3_check = "checked";
	$('#image_3').prop("checked", true);
    $('#image_3_grade')[0].innerHTML = image_3_grade.toString();
	l_html_grade = 1;
	l_html_partial_mark = 0;
	l_html_check = "checked";
	$('#l_html').prop("checked", true);
    $('#l_html_grade')[0].innerHTML = l_html_grade.toString();
	r_html_grade = 1;
	r_html_partial_mark = 0;
	r_html_check = "checked";
	$('#r_html').prop("checked", true);
    $('#r_html_grade')[0].innerHTML = r_html_grade.toString();
	l_head_grade = 1;
	l_head_partial_mark = 0;
	l_head_check = "checked";
	$('#l_head').prop("checked", true);
    $('#l_head_grade')[0].innerHTML = l_head_grade.toString();
	r_head_grade = 1;
	r_head_partial_mark = 0;
	r_head_check = "checked";
	$('#r_head').prop("checked", true);
    $('#r_head_grade')[0].innerHTML = r_head_grade.toString();
	l_title_grade = 1;
	l_title_partial_mark = 0;
	l_title_check = "checked";
	$('#l_title').prop("checked", true);
    $('#l_title_grade')[0].innerHTML = l_title_grade.toString();
	r_title_grade = 1;
	r_title_partial_mark = 0;
	r_title_check = "checked";
	$('#r_title').prop("checked", true);
    $('#r_title_grade')[0].innerHTML = r_title_grade.toString();
	l_body_grade = 1;
	l_body_partial_mark = 0;
	l_body_check = "checked";
	$('#l_body').prop("checked", true);
    $('#l_body_grade')[0].innerHTML = l_body_grade.toString();
	r_body_grade = 1;
	r_body_partial_mark = 0;
	r_body_check = "checked";
	$('#r_body').prop("checked", true);
    $('#r_body_grade')[0].innerHTML = r_body_grade.toString();
	l_h1_grade = 1;
	l_h1_partial_mark = 0;
	l_h1_check = "checked";
	$('#l_h1').prop("checked", true);
    $('#l_h1_grade')[0].innerHTML = l_h1_grade.toString();
	r_h1_grade = 1;
	r_h1_partial_mark = 0;
	r_h1_check = "checked";
	$('#r_h1').prop("checked", true);
    $('#r_h1_grade')[0].innerHTML = r_h1_grade.toString();
	l_div_grade = 1;
	l_div_partial_mark = 0,
	l_div_check = "checked";
	$('#l_div').prop("checked", true);
    $('#l_div_grade')[0].innerHTML = l_div_grade.toString();
	r_div_grade = 1;
	r_div_partial_mark = 0;
	r_div_check = "checked";
	$('#r_div').prop("checked", true);
    $('#r_div_grade')[0].innerHTML = r_div_grade.toString();
	l_iframe_grade = 1;
	l_iframe_partial_mark = 0;
	l_iframe_check = "checked";
	$('#l_iframe').prop("checked", true);
    $('#l_iframe_grade')[0].innerHTML = l_iframe_grade.toString();
	r_iframe_grade = 1;
	r_iframe_partial_mark = 0;
	r_iframe_check = "checked";
	$('#r_iframe').prop("checked", true);
    $('#r_iframe_grade')[0].innerHTML = r_iframe_grade.toString();
	l_ul_grade = 1;
	l_ul_partial_mark = 0;
	l_ul_check = "checked";
	$('#l_ul').prop("checked", true);
    $('#l_ul_grade')[0].innerHTML = l_ul_grade.toString();
	r_ul_grade = 1;
	r_ul_partial_mark = 0;
	r_ul_check = "checked";
	$('#r_ul').prop("checked", true);
    $('#r_ul_grade')[0].innerHTML = r_ul_grade.toString();
	l_li_grade = 1;
	l_li_partial_mark = 0;
	l_li_check = "checked";
	$('#l_li').prop("checked", true);
    $('#l_li_grade')[0].innerHTML = l_li_grade.toString();
	r_li_grade = 1;
	r_li_partial_mark = 0;
	r_li_check = "checked";
	$('#r_li').prop("checked", true);
    $('#r_li_grade')[0].innerHTML = r_li_grade.toString();
	l_a_text_grade = 1;
	l_a_text_partial_mark = 0;
	l_a_text_check = "checked";
	$('#l_a_text').prop("checked", true);
    $('#l_a_text_grade')[0].innerHTML = l_a_text_grade.toString();
	r_a_text_grade = 1;
	r_a_text_partial_mark = 0;
	r_a_text_check = "checked";
	$('#r_a_text').prop("checked", true);
    $('#r_a_text_grade')[0].innerHTML = r_a_text_grade.toString();
	l_a_image_grade = 1;
	l_a_image_partial_mark = 0;
	l_a_image_check = "checked";
	$('#l_a_image').prop("checked", true);
    $('#l_a_image_grade')[0].innerHTML = l_a_image_grade.toString();
	r_a_image_grade = 1;
	r_a_image_partial_mark = 0;
	r_a_image_check = "checked";
	$('#r_a_image').prop("checked", true);
    $('#r_a_image_grade')[0].innerHTML = r_a_image_grade.toString();
	br_grade = 1;
	br_partial_mark = 0;
	br_check = "checked",
	$('#id_br').prop("checked", true);
    $('#br_grade')[0].innerHTML = br_grade.toString();
	img_grade = 1;
	img_partial_mark = 0;
	img_check = "checked";
	$('#id_img').prop("checked", true);
    $('#img_grade')[0].innerHTML = img_grade.toString();
	p_grade = 1;
	p_partial_mark = 0;
	p_check = "checked";
	$('#id_p').prop("checked", true);
    $('#p_grade')[0].innerHTML = p_grade.toString();
	update_total();
}

function make_part_2_zero(){
	home_box_grade = 0;
	home_box_partial_mark = 0;
	home_box_check = "";
	$('#home_box').prop("checked", false);
	$('#home_box_grade')[0].innerHTML = "0";
	home_to_place_grade = 0;
	home_to_place_partial_mark = 0;
	home_to_place_check = "";
	$('#home_to_place').prop("checked", false);
	$('#home_to_place_grade')[0].innerHTML = "0";
	home_to_food_grade = 0;
	home_to_food_partial_mark = 0;
	home_to_food_check = "";
	$('#home_to_food').prop("checked", false);
	$('#home_to_food_grade')[0].innerHTML = "0";
	home_to_hotels_grade = 0;
	home_to_hotels_partial_mark = 0;
	home_to_hotels_check = "";
	$('#home_to_hotels').prop("checked", false);
	$('#home_to_hotels_grade')[0].innerHTML = "0";
	places_box_grade = 0;
	places_box_partial_mark = 0;
	places_box_check = "";
	$('#places_box').prop("checked", false);
	$('#places_box_grade')[0].innerHTML = "0";
	places_to_home_grade = 0;
	places_to_home_partial_mark = 0;
	places_to_home_check = "";
	$('#places_to_home').prop("checked", false);
	$('#places_to_home_grade')[0].innerHTML = "0";
	places_to_food_grade = 0;
	places_to_food_partial_mark = 0;
	places_to_food_check = "";
	$('#places_to_food').prop("checked", false);
	$('#places_to_food_grade')[0].innerHTML = "0";
	places_to_hotels_grade = 0;
	places_to_hotels_partial_mark = 0;
	places_to_hotels_check = "";
	$('#places_to_hotels').prop("checked", false);
	$('#places_to_hotels_grade')[0].innerHTML = "0";
	food_box_grade = 0;
	food_box_partial_mark = 0;
	food_box_check = "";
	$('#food_box').prop("checked", false);
	$('#food_box_grade')[0].innerHTML = "0";
	food_to_home_grade = 0;
	food_to_home_partial_mark = 0;
	food_to_home_check = "";
	$('#food_to_home').prop("checked", false);
	$('#food_to_home_grade')[0].innerHTML = "0";
	food_to_place_grade = 0;
	food_to_place_partial_mark = 0;
	food_to_place_check = "";
	$('#food_to_place').prop("checked", false);
	$('#food_to_place_grade')[0].innerHTML = "0";
	food_to_hotels_grade = 0;
	food_to_hotels_partial_mark = 0;
	food_to_hotels_check = "";
	$('#food_to_hotels').prop("checked", false);
	$('#food_to_hotels_grade')[0].innerHTML = "0";
	hotels_box_grade = 0;
	hotels_box_partial_mark = 0;
	hotels_box_check = "";
	$('#hotels_box').prop("checked", false);
	$('#hotels_box_grade')[0].innerHTML = "0";
	hotels_to_home_grade = 0;
	hotels_to_home_partial_mark = 0;
	hotels_to_home_check = "";
	$('#hotels_to_home').prop("checked", false);
	$('#hotels_to_home_grade')[0].innerHTML = "0";
	hotels_to_place_grade = 0;
	hotels_to_place_partial_mark = 0;
	hotels_to_place_check = "";
	$('#hotels_to_place').prop("checked", false);
	$('#hotels_to_place_grade')[0].innerHTML = "0";
	hotels_to_food_grade = 0;
	hotels_to_food_partial_mark = 0;
	hotels_to_food_check = "";
	$('#hotels_to_food').prop("checked", false);
	$('#hotels_to_food_grade')[0].innerHTML = "0";
	home_banner_grade = 0;
	home_banner_partial_mark = 0;
	home_banner_check = "";
	$('#home_banner').prop("checked", false);
	$('#home_banner_grade')[0].innerHTML = "0";
	places_banner_grade = 0;
	places_banner_partial_mark = 0;
	places_banner_check = "";
	$('#places_banner').prop("checked", false);
	$('#places_banner_grade')[0].innerHTML = "0";
	food_banner_grade = 0;
	food_banner_partial_mark = 0;
	food_banner_check = "";
	$('#food_banner').prop("checked", false);
	$('#food_banner_grade')[0].innerHTML = "0";
	hotels_banner_grade = 0;
	hotels_banner_partial_mark = 0;
	hotels_banner_check = "";
	$('#hotels_banner').prop("checked", false);
	$('#hotels_banner_grade')[0].innerHTML = "0";
	home_img_1_grade = 0;
	home_img_1_partial_mark = 0;
	home_img_1_check = "";
	$('#home_img_1').prop("checked", false);
	$('#home_img_1_grade')[0].innerHTML = "0";
	home_img_2_grade = 0;
	home_img_2_partial_mark = 0;
	home_img_2_check = "";
	$('#home_img_2').prop("checked", false);
	$('#home_img_2_grade')[0].innerHTML = "0";
	home_img_3_grade = 0;
	home_img_3_partial_mark = 0;
	home_img_3_check = "";
	$('#home_img_3').prop("checked", false);
	$('#home_img_3_grade')[0].innerHTML = "0";
	places_img_1_grade = 0;
	places_img_1_partial_mark = 0;
	places_img_1_check = "";
	$('#places_img_1').prop("checked", false);
	$('#places_img_1_grade')[0].innerHTML = "0";
	places_img_2_grade = 0;
	places_img_2_partial_mark = 0;
	places_img_2_check = "";
	$('#places_img_2').prop("checked", false);
	$('#places_img_2_grade')[0].innerHTML = "0";
	places_img_3_grade = 0;
	places_img_3_partial_mark = 0;
	places_img_3_check = "";
	$('#places_img_3').prop("checked", false);
	$('#places_img_3_grade')[0].innerHTML = "0";
	food_img_1_grade = 0;
	food_img_1_partial_mark = 0;
	food_img_1_check = "";
	$('#food_img_1').prop("checked", false);
	$('#food_img_1_grade')[0].innerHTML = "0";
	food_img_2_grade = 0;
	food_img_2_partial_mark = 0;
	food_img_2_check = "";
	$('#food_img_2').prop("checked", false);
	$('#food_img_2_grade')[0].innerHTML = "0";
	food_img_3_grade = 0;
	food_img_3_partial_mark = 0;
	food_img_3_check = "";
	$('#food_img_3').prop("checked", false);
	$('#food_img_3_grade')[0].innerHTML = "0";
	hotels_img_1_grade = 0;
	hotels_img_1_partial_mark = 0;
	hotels_img_1_check = "";
	$('#hotels_img_1').prop("checked", false);
	$('#hotels_img_1_grade')[0].innerHTML = "0";
	hotels_img_2_grade = 0;
	hotels_img_2_partial_mark = 0;
	hotels_img_2_check = "";
	$('#hotels_img_2').prop("checked", false);
	$('#hotels_img_2_grade')[0].innerHTML = "0";
	hotels_img_3_grade = 0;
	hotels_img_3_partial_mark = 0;
	hotels_img_3_check = "";
	$('#hotels_img_3').prop("checked", false);
	$('#hotels_img_3_grade')[0].innerHTML = "0";
	part_2_contents_grade = 0;
	part_2_contents_partial_mark = 0;
	part_2_contents_check = "";
	$('#part_2_contents').prop("checked", false);
	$('#part_2_contents_grade')[0].innerHTML = "0";
	update_total();
}

function make_part_2_full(){

	home_box_grade = 2;
	home_box_partial_mark = 0;
	home_box_check = "checked";
	$('#home_box').prop("checked", true);
	$('#home_box_grade')[0].innerHTML = "2";
	home_to_place_grade = 1;
	home_to_place_partial_mark = 0;
	home_to_place_check = "checked";
	$('#home_to_place').prop("checked", true);
	$('#home_to_place_grade')[0].innerHTML = "1";
	home_to_food_grade = 1;
	home_to_food_partial_mark = 0;
	home_to_food_check = "checked";
	$('#home_to_food').prop("checked", true);
	$('#home_to_food_grade')[0].innerHTML = "1";
	home_to_hotels_grade = 1;
	home_to_hotels_partial_mark = 0;
	home_to_hotels_check = "checked";
	$('#home_to_hotels').prop("checked", true);
	$('#home_to_hotels_grade')[0].innerHTML = "1";
	places_box_grade = 2;
	places_box_partial_mark = 0;
	places_box_check = "checked";
	$('#places_box').prop("checked", true);
	$('#places_box_grade')[0].innerHTML = "2";
	places_to_home_grade = 1;
	places_to_home_partial_mark = 0;
	places_to_home_check = "checked";
	$('#places_to_home').prop("checked", true);
	$('#places_to_home_grade')[0].innerHTML = "1";
	places_to_food_grade = 1;
	places_to_food_partial_mark = 0;
	places_to_food_check = "checked";
	$('#places_to_food').prop("checked", true);
	$('#places_to_food_grade')[0].innerHTML = "1";
	places_to_hotels_grade = 1;
	places_to_hotels_partial_mark = 0;
	places_to_hotels_check = "checked";
	$('#places_to_hotels').prop("checked", true);
	$('#places_to_hotels_grade')[0].innerHTML = "1";
	food_box_grade = 2;
	food_box_partial_mark = 0;
	food_box_check = "checked";
	$('#food_box').prop("checked", true);
	$('#food_box_grade')[0].innerHTML = "2";
	food_to_home_grade = 1;
	food_to_home_partial_mark = 0;
	food_to_home_check = "";
	$('#food_to_home').prop("checked", true);
	$('#food_to_home_grade')[0].innerHTML = "1";
	food_to_place_grade = 1;
	food_to_place_partial_mark = 0;
	food_to_place_check = "checked";
	$('#food_to_place').prop("checked", true);
	$('#food_to_place_grade')[0].innerHTML = "1";
	food_to_hotels_grade = 1;
	food_to_hotels_partial_mark = 0;
	food_to_hotels_check = "checked";
	$('#food_to_hotels').prop("checked", true);
	$('#food_to_hotels_grade')[0].innerHTML = "1";
	hotels_box_grade = 2;
	hotels_box_partial_mark = 0;
	hotels_box_check = "checked";
	$('#hotels_box').prop("checked", true);
	$('#hotels_box_grade')[0].innerHTML = "2";
	hotels_to_home_grade = 1;
	hotels_to_home_partial_mark = 0;
	hotels_to_home_check = "checked";
	$('#hotels_to_home').prop("checked", true);
	$('#hotels_to_home_grade')[0].innerHTML = "1";
	hotels_to_place_grade = 1;
	hotels_to_place_partial_mark = 0;
	hotels_to_place_check = "checked";
	$('#hotels_to_place').prop("checked", true);
	$('#hotels_to_place_grade')[0].innerHTML = "1";
	hotels_to_food_grade = 1;
	hotels_to_food_partial_mark = 0;
	hotels_to_food_check = "checked";
	$('#hotels_to_food').prop("checked", true);
	$('#hotels_to_food_grade')[0].innerHTML = "1";
	home_banner_grade = 2;
	home_banner_partial_mark = 0;
	home_banner_check = "checked";
	$('#home_banner').prop("checked", true);
	$('#home_banner_grade')[0].innerHTML = "2";
	places_banner_grade = 2;
	places_banner_partial_mark = 0;
	places_banner_check = "checked";
	$('#places_banner').prop("checked", true);
	$('#places_banner_grade')[0].innerHTML = "2";
	food_banner_grade = 2;
	food_banner_partial_mark = 0;
	food_banner_check = "checked";
	$('#food_banner').prop("checked", true);
	$('#food_banner_grade')[0].innerHTML = "2";
	hotels_banner_grade = 2;
	hotels_banner_partial_mark = 0;
	hotels_banner_check = "checked";
	$('#hotels_banner').prop("checked", true);
	$('#hotels_banner_grade')[0].innerHTML = "2";
	home_img_1_grade = 1;
	home_img_1_partial_mark = 0;
	home_img_1_check = "checked";
	$('#home_img_1').prop("checked", true);
	$('#home_img_1_grade')[0].innerHTML = "1";
	home_img_2_grade = 1;
	home_img_2_partial_mark = 0;
	home_img_2_check = "checked";
	$('#home_img_2').prop("checked", true);
	$('#home_img_2_grade')[0].innerHTML = "1";
	home_img_3_grade = 1;
	home_img_3_partial_mark = 0;
	home_img_3_check = "checked";
	$('#home_img_3').prop("checked", true);
	$('#home_img_3_grade')[0].innerHTML = "1";
	places_img_1_grade = 1;
	places_img_1_partial_mark = 0;
	places_img_1_check = "checked";
	$('#places_img_1').prop("checked", true);
	$('#places_img_1_grade')[0].innerHTML = "1";
	places_img_2_grade = 1;
	places_img_2_partial_mark = 0;
	places_img_2_check = "checked";
	$('#places_img_2').prop("checked", true);
	$('#places_img_2_grade')[0].innerHTML = "1";
	places_img_3_grade = 1;
	places_img_3_partial_mark = 0;
	places_img_3_check = "checked";
	$('#places_img_3').prop("checked", true);
	$('#places_img_3_grade')[0].innerHTML = "1";
	food_img_1_grade = 1;
	food_img_1_partial_mark = 0;
	food_img_1_check = "checked";
	$('#food_img_1').prop("checked", true);
	$('#food_img_1_grade')[0].innerHTML = "1";
	food_img_2_grade = 1;
	food_img_2_partial_mark = 0;
	food_img_2_check = "checked";
	$('#food_img_2').prop("checked", true);
	$('#food_img_2_grade')[0].innerHTML = "1";
	food_img_3_grade = 1;
	food_img_3_partial_mark = 0;
	food_img_3_check = "checked";
	$('#food_img_3').prop("checked", true);
	$('#food_img_3_grade')[0].innerHTML = "1";
	hotels_img_1_grade = 1;
	hotels_img_1_partial_mark = 0;
	hotels_img_1_check = "checked";
	$('#hotels_img_1').prop("checked", true);
	$('#hotels_img_1_grade')[0].innerHTML = "1";
	hotels_img_2_grade = 1;
	hotels_img_2_partial_mark = 0;
	hotels_img_2_check = "checked";
	$('#hotels_img_2').prop("checked", true);
	$('#hotels_img_2_grade')[0].innerHTML = "1";
	hotels_img_3_grade = 1;
	hotels_img_3_partial_mark = 0;
	hotels_img_3_check = "checked";
	$('#hotels_img_3').prop("checked", true);
	$('#hotels_img_3_grade')[0].innerHTML = "1";
	part_2_contents_grade = 10;
	part_2_contents_partial_mark = 0;
	part_2_contents_check = "checked";
	$('#part_2_contents').prop("checked", true);
	$('#part_2_contents_grade')[0].innerHTML = "10";
	update_total();

}


window.onload = initialize;