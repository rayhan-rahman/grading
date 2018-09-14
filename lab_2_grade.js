var audio_mark = 10,
    audio_partial_mark = 0,
    excellent_audio_checked_string = "checked",
	good_audio_checked_string = "",
	fair_audio_checked_string = "",
	poor_audio_checked_string = "",
	audio_comments = "",
    video_mark = 10,
    video_partial_mark = 0,
    excellent_video_checked_string = "checked",
	good_video_checked_string = "",
	fair_video_checked_string = "",
	poor_video_checked_string = "",
	video_comments = "",
    slideshow_mark = 15,
    slideshow_partial_mark = 0,
    excellent_slideshow_checked_string = "checked",
	good_slideshow_checked_string = "",
	fair_slideshow_checked_string = "",
	poor_slideshow_checked_string = "",
	slideshow_comments = "",
    button_mark = 5,
    button_partial_mark = 0,
    excellent_button_checked_string = "checked",
	good_button_checked_string = "",
	fair_button_checked_string = "",
	poor_button_checked_string = "",
	button_comments = "",
    external_map_mark = 5,
    external_map_partial_mark = 0,
    excellent_external_map_checked_string = "checked",
	good_external_map_checked_string = "",
	fair_external_map_checked_string = "",
	poor_external_map_checked_string = "",
	external_map_comments = "",
    embedded_map_mark = 10,
    embedded_map_partial_mark = 0,
    excellent_embedded_map_checked_string = "checked",
	good_embedded_map_checked_string = "",
	fair_embedded_map_checked_string = "",
	poor_embedded_map_checked_string = "",
	embedded_map_comments = "",
    hyperlinked_map_mark = 5,
    hyperlinked_map_partial_mark = 0,
    excellent_hyperlinked_map_checked_string = "checked",
	good_hyperlinked_map_checked_string = "",
	fair_hyperlinked_map_checked_string = "",
	poor_hyperlinked_map_checked_string = "",
	hyperlinked_map_comments = "",
    home_mark = 6,
    home_partial_mark = 0,
    home_comments = "",
    places_mark = 6,
    places_partial_mark = 0,
    places_comments = "",
    food_mark = 6,
    food_partial_mark = 0,
    food_comments = "",
    hotels_mark = 6,
    hotels_partial_mark = 0,
    hotels_comments = "",
    audio_4_mark = 6,
    audio_4_partial_mark = 0,
    audio_4_comments = "",
    like_4_mark = 6,
    like_4_partial_mark = 0,
    like_4_comments = "",
    map_4_mark = 4,
    map_4_partial_mark = 0,
    map_4_comments = "",
    part_1_check = "checked",
    part_2_check = "checked",
    part_3_check = "checked",
    part_4_check = "checked",
    home_checked = "checked",
    places_checked = "checked",
    food_checked = "checked",
    hotels_checked = "checked",
    audio_4_checked = "checked",
    like_4_checked = "checked",
    map_4_checked = "checked",
    part_1_comments = "checked",
    part_2_comments = "checked",
    part_3_comments = "checked",
    part_4_comments = "checked";




function initialize(){

	part_1 = $('#part_1_given')[0];
	part_1.onchange = function(){
		if (!part_1.checked){
			part_1_check = "";
			make_part_1_zero();
		} else {
			part_1_check = "checked";
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
			part_2_check = "checked";
			make_part_2_full();
		}
		update_total();
	}

	part_3 = $('#part_3_given')[0];
	part_3.onchange = function(){
		if (!part_3.checked){
			part_3_check = "";
			make_part_3_zero();
		} else {
			part_3_check = "checked";
			make_part_3_full();
		}
		update_total();
	}

	part_4 = $('#part_4_given')[0];
	part_4.onchange = function(){
		if (!part_4.checked){
			part_4_check = "";
			make_part_4_zero();
		} else {
			part_4_check = "checked";
			make_part_4_full();
		}
		update_total();
	}

	$('input:radio[name=audio_radio]').change(function() {
		var audio_checked  = $('input[name=audio_radio]:checked')[0];
		audio_mark = parseFloat( audio_checked.value );
		$('#audio_mark')[0].innerHTML = audio_mark.toString();
		audio_mark_test = parseInt(audio_mark * 10);
		switch (audio_mark_test) {
			case 100:
				excellent_audio_checked_string = "checked";
				good_audio_checked_string = "";
				fair_audio_checked_string = "";
				poor_audio_checked_string = "";
				break;
			case 50:
				excellent_audio_checked_string = "";
				good_audio_checked_string = "checked";
				fair_audio_checked_string = "";
				poor_audio_checked_string = "";
				break;
			case 25:
				excellent_audio_checked_string = "";
				good_audio_checked_string = "";
				fair_audio_checked_string = "checked";
				poor_audio_checked_string = "";
				break;
			case 0:
				excellent_audio_checked_string = "";
				good_audio_checked_string = "";
				fair_audio_checked_string = "";
				poor_audio_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#audio_mark')[0].innerHTML = audio_mark.toString();
	$('#audio_partial_mark').change( function (){
		if (this.value){
			audio_partial_mark = parseFloat( this.value );
		} else {
			audio_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	$('input:radio[name=video_radio]').change(function() {
		var video_checked  = $('input[name=video_radio]:checked')[0];
		video_mark = parseFloat( video_checked.value );
		$('#video_mark')[0].innerHTML = video_mark.toString();
		video_mark_test = parseInt( video_mark * 10);
		switch (video_mark_test) {
			case 100:
				excellent_video_checked_string = "checked";
				good_video_checked_string = "";
				fair_video_checked_string = "";
				poor_video_checked_string = "";
				break;
			case 50:
				excellent_video_checked_string = "";
				good_video_checked_string = "checked";
				fair_video_checked_string = "";
				poor_video_checked_string = "";
				break;
			case 25:
				excellent_video_checked_string = "";
				good_video_checked_string = "";
				fair_video_checked_string = "checked";
				poor_video_checked_string = "";
				break;
			case 0:
				excellent_video_checked_string = "";
				good_video_checked_string = "";
				fair_video_checked_string = "";
				poor_video_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#video_mark')[0].innerHTML = video_mark.toString();

	$('#video_partial_mark').change( function (){
		if (this.value){
			video_partial_mark = parseFloat( this.value );
		} else {
			video_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});


	$('input:radio[name=slideshow_radio]').change(function() {
		var slideshow_checked  = $('input[name=slideshow_radio]:checked')[0];
		slideshow_mark = parseFloat( slideshow_checked.value );
		$('#slideshow_mark')[0].innerHTML = slideshow_mark.toString();
		slideshow_mark_test = parseInt(slideshow_mark * 10);
		switch (slideshow_mark_test) {
			case 150:
				excellent_slideshow_checked_string = "checked";
				good_slideshow_checked_string = "";
				fair_slideshow_checked_string = "";
				poor_slideshow_checked_string = "";
				break;
			case 100:
				excellent_slideshow_checked_string = "";
				good_slideshow_checked_string = "checked";
				fair_slideshow_checked_string = "";
				poor_slideshow_checked_string = "";
				break;
			case 50:
				excellent_slideshow_checked_string = "";
				good_slideshow_checked_string = "";
				fair_slideshow_checked_string = "checked";
				poor_slideshow_checked_string = "";
				break;
			case 0:
				excellent_slideshow_checked_string = "";
				good_slideshow_checked_string = "";
				fair_slideshow_checked_string = "";
				poor_slideshow_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#slideshow_mark')[0].innerHTML = slideshow_mark.toString();

	$('#slideshow_partial_mark').change( function (){
		if (this.value){
			slideshow_partial_mark = parseFloat( this.value );
		} else {
			slideshow_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	$('input:radio[name=button_radio]').change(function() {
		var button_checked  = $('input[name=button_radio]:checked')[0];
		button_mark = parseFloat( button_checked.value );
		$('#button_mark')[0].innerHTML = button_mark.toString();
		button_mark_test = parseInt( button_mark * 10);
		switch (button_mark_test) {
			case 50:
				excellent_button_checked_string = "checked";
				good_button_checked_string = "";
				fair_button_checked_string = "";
				poor_button_checked_string = "";
				break;
			case 25:
				excellent_button_checked_string = "";
				good_button_checked_string = "checked";
				fair_button_checked_string = "";
				poor_button_checked_string = "";
				break;
			case 10:
				excellent_button_checked_string = "";
				good_button_checked_string = "";
				fair_button_checked_string = "checked";
				poor_button_checked_string = "";
				break;
			case 0:
				excellent_button_checked_string = "";
				good_button_checked_string = "";
				fair_button_checked_string = "";
				poor_button_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#button_mark')[0].innerHTML = button_mark.toString();

	$('#button_partial_mark').change( function (){
		if (this.value){
			button_partial_mark = parseFloat( this.value );
		} else {
			button_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	$('input:radio[name=external_map_radio]').change(function() {
		var external_map_checked  = $('input[name=external_map_radio]:checked')[0];
		external_map_mark = parseFloat( external_map_checked.value );
		$('#external_map_mark')[0].innerHTML = external_map_mark.toString();
		external_map_mark_test = parseInt(external_map_mark * 10);
		switch (external_map_mark_test) {
			case 50:
				excellent_external_map_checked_string = "checked";
				good_external_map_checked_string = "";
				fair_external_map_checked_string = "";
				poor_external_map_checked_string = "";
				break;
			case 25:
				excellent_external_map_checked_string = "";
				good_external_map_checked_string = "checked";
				fair_external_map_checked_string = "";
				poor_external_map_checked_string = "";
				break;
			case 10:
				excellent_external_map_checked_string = "";
				good_external_map_checked_string = "";
				fair_external_map_checked_string = "checked";
				poor_external_map_checked_string = "";
				break;
			case 0:
				excellent_external_map_checked_string = "";
				good_external_map_checked_string = "";
				fair_external_map_checked_string = "";
				poor_external_map_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#external_map_mark')[0].innerHTML = external_map_mark.toString();

	$('#external_map_partial_mark').change( function (){
		if (this.value){
			external_map_partial_mark = parseFloat( this.value );
		} else {
			external_map_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	$('input:radio[name=embedded_map_radio]').change(function() {
		var embedded_map_checked  = $('input[name=embedded_map_radio]:checked')[0];
		embedded_map_mark = parseFloat( embedded_map_checked.value );
		$('#embedded_map_mark')[0].innerHTML = embedded_map_mark.toString();
		embedded_map_mark_test = parseInt( embedded_map_mark * 10);
		switch (embedded_map_mark_test) {
			case 100:
				excellent_embedded_map_checked_string = "checked";
				good_embedded_map_checked_string = "";
				fair_embedded_map_checked_string = "";
				poor_embedded_map_checked_string = "";
				break;
			case 70:
				excellent_embedded_map_checked_string = "";
				good_embedded_map_checked_string = "checked";
				fair_embedded_map_checked_string = "";
				poor_embedded_map_checked_string = "";
				break;
			case 30:
				excellent_embedded_map_checked_string = "";
				good_embedded_map_checked_string = "";
				fair_embedded_map_checked_string = "checked";
				poor_embedded_map_checked_string = "";
				break;
			case 0:
				excellent_embedded_map_checked_string = "";
				good_embedded_map_checked_string = "";
				fair_embedded_map_checked_string = "";
				poor_embedded_map_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#embedded_map_mark')[0].innerHTML = embedded_map_mark.toString();


	$('#embedded_map_partial_mark').change( function (){
		if (this.value){
			embedded_map_partial_mark = parseFloat( this.value );
		} else {
			embedded_map_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

    $('input:radio[name=hyperlinked_map_radio]').change(function() {
		var hyperlinked_map_checked  = $('input[name=hyperlinked_map_radio]:checked')[0];
		hyperlinked_map_mark = parseFloat( hyperlinked_map_checked.value );
		$('#hyperlinked_map_mark')[0].innerHTML = hyperlinked_map_mark.toString();
		hyperlinked_map_mark_test = parseInt( hyperlinked_map_mark * 10);
		switch (hyperlinked_map_mark_test) {
			case 50:
				excellent_hyperlinked_map_checked_string = "checked";
				good_hyperlinked_map_checked_string = "";
				fair_hyperlinked_map_checked_string = "";
				poor_hyperlinked_map_checked_string = "";
				break;
			case 25:
				excellent_hyperlinked_map_checked_string = "";
				good_hyperlinked_map_checked_string = "checked";
				fair_hyperlinked_map_checked_string = "";
				poor_hyperlinked_map_checked_string = "";
				break;
			case 10:
				excellent_hyperlinked_map_checked_string = "";
				good_hyperlinked_map_checked_string = "";
				fair_hyperlinked_map_checked_string = "checked";
				poor_hyperlinked_map_checked_string = "";
				break;
			case 0:
				excellent_hyperlinked_map_checked_string = "";
				good_hyperlinked_map_checked_string = "";
				fair_hyperlinked_map_checked_string = "";
				poor_hyperlinked_map_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#hyperlinked_map_mark')[0].innerHTML = hyperlinked_map_mark.toString();


	$('#hyperlinked_map_partial_mark').change( function (){
		if (this.value){
			hyperlinked_map_partial_mark = parseFloat( this.value );
		} else {
			hyperlinked_map_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	home = $('#home')[0];
	home.onchange = function() {
		if (!home.checked){
			home_mark = 0;
			home_checked = "";
		}else {
			home_mark = 6;
			home_checked = "checked"
			home_partial_mark = 0;
			$('#home_partial_mark')[0].value = home_partial_mark.toString();
		}
		$('#home_mark')[0].innerHTML = home_mark;
		update_total();
	}


	$('#home_partial_mark').change( function (){
		if (this.value){
			home_partial_mark = parseFloat( this.value );
		} else {
			home_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	places = $('#places')[0];
	places.onchange = function() {
		if (!places.checked){
			places_mark = 0;
			places_checked = "";
		}else {
			places_mark = 6;
			places_checked = "checked"
			places_partial_mark = 0;
			$('#places_partial_mark')[0].value = places_partial_mark.toString();
		}
		$('#places_mark')[0].innerHTML = places_mark;
		update_total();
	}


	$('#places_partial_mark').change( function (){
		if (this.value){
			places_partial_mark = parseFloat( this.value );
		} else {
			places_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	food = $('#food')[0];
	food.onchange = function() {
		if (!food.checked){
			food_mark = 0;
			food_checked = "";
		}else {
			food_mark = 6;
			food_checked = "checked"
			food_partial_mark = 0;
			$('#food_partial_mark')[0].value = food_partial_mark.toString();
		}
		$('#food_mark')[0].innerHTML = food_mark;
		update_total();
	}


	$('#food_partial_mark').change( function (){
		if (this.value){
			food_partial_mark = parseFloat( this.value );
		} else {
			food_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	hotels = $('#hotels')[0];
	hotels.onchange = function() {
		if (!hotels.checked){
			hotels_mark = 0;
			hotels_checked = "";
		}else {
			hotels_mark = 6;
			hotels_checked = "checked"
			hotels_partial_mark = 0;
			$('#hotels_partial_mark')[0].value = hotels_partial_mark.toString();
		}
		$('#hotels_mark')[0].innerHTML = hotels_mark;
		update_total();
	}


	$('#hotels_partial_mark').change( function (){
		if (this.value){
			hotels_partial_mark = parseFloat( this.value );
		} else {
			hotels_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	audio_4 = $('#audio_4')[0];
	audio_4.onchange = function() {
		if (!audio_4.checked){
			audio_4_mark = 0;
			audio_4_checked = "";
		}else {
			audio_4_mark = 6;
			audio_4_checked = "checked"
			audio_4_partial_mark = 0;
			$('#audio_4_partial_mark')[0].value = audio_4_partial_mark.toString();
		}
		$('#audio_4_mark')[0].innerHTML = audio_4_mark;
		update_total();
	}


	$('#audio_4_partial_mark').change( function (){
		if (this.value){
			audio_4_partial_mark = parseFloat( this.value );
		} else {
			audio_4_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	like_4 = $('#like_4')[0];
	like_4.onchange = function() {
		if (!like_4.checked){
			like_4_mark = 0;
			like_4_checked = "";
		}else {
			like_4_mark = 6;
			like_4_checked = "checked"
			like_4_partial_mark = 0;
			$('#like_4_partial_mark')[0].value = like_4_partial_mark.toString();
		}
		$('#like_4_mark')[0].innerHTML = like_4_mark;
		update_total();
	}


	$('#like_4_partial_mark').change( function (){
		if (this.value){
			like_4_partial_mark = parseFloat( this.value );
		} else {
			like_4_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	map_4 = $('#map_4')[0];
	map_4.onchange = function() {
		if (!map_4.checked){
			map_4_mark = 0;
			map_4_checked = "";
		}else {
			map_4_mark = 4;
			map_4_checked = "checked"
			map_4_partial_mark = 0;
			$('#map_4_partial_mark')[0].value = map_4_partial_mark.toString();
		}
		$('#map_4_mark')[0].innerHTML = map_4_mark;
		update_total();
	}


	$('#map_4_partial_mark').change( function (){
		if (this.value){
			map_4_partial_mark = parseFloat( this.value );
		} else {
			map_4_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	$("#comment_file_generator").click( function() {
		audio_comments = $('#audio_comments').val();
		if (audio_comments === undefined){
			audio_comments = "";
		}

		video_comments = $('#video_comments').val();
		if (video_comments === undefined){
			video_comments = "";
		}

		slideshow_comments = $('#slideshow_comments').val();
		if (slideshow_comments === undefined){
			slideshow_comments = "";
		}

		button_comments = $('#button_comments').val();
		if (button_comments === undefined){
			button_comments = "";
		}

		external_map_comments = $('#external_map_comments').val();
		if (external_map_comments === undefined){
			external_map_comments = "";
		}

		embedded_map_comments = $('#embedded_map_comments').val();
		if (embedded_map_comments === undefined){
			embedded_map_comments = "";
		}

		hyperlinked_map_comments = $('#hyperlinked_map_comments').val();
		if (hyperlinked_map_comments === undefined){
			hyperlinked_map_comments = "";
		}

		home_comments = $('#home_comments').val();
		if (home_comments === undefined){
			home_comments = "";
		}

		places_comments = $('#places_comments').val();
		if (places_comments === undefined){
			places_comments = "";
		}

		food_comments = $('#food_comments').val();
		if (food_comments === undefined){
			food_comments = "";
		}

		hotels_comments = $('#hotels_comments').val();
		if (hotels_comments === undefined){
			hotels_comments = "";
		}

		audio_4_comments = $('#audio_4_comments').val();
		if (audio_4_comments === undefined){
			audio_4_comments = "";
		}

		like_4_comments = $('#like_4_comments').val();
		if (like_4_comments === undefined){
			like_4_comments = "";
		}

		map_4_comments = $('#map_4_comments').val();
		if (map_4_comments === undefined){
			map_4_comments = "";
		}

		part_1_comments = $('#part_1_comments').val();
		if (part_1_comments === undefined){
			part_1_comments = "";
		}

		part_2_comments = $('#part_2_comments').val();
		if (part_2_comments === undefined){
			part_2_comments = "";
		}

		part_3_comments = $('#part_3_comments').val();
		if (part_3_comments === undefined){
			part_3_comments = "";
		}

		part_4_comments = $('#part_4_comments').val();
		if (part_4_comments === undefined){
			part_4_comments = "";
		}

		var feedback = construct_string();
		var textArea = document.createElement("textarea");
		textArea.value = feedback;
		document.body.appendChild(textArea);
  		textArea.select();
		document.execCommand("Copy");
		document.body.removeChild(textArea);
	});

	update_total();

}


function update_total(){
	total = audio_mark
          + audio_partial_mark
          + video_mark
          + video_partial_mark
          + slideshow_mark
          + slideshow_partial_mark
          + button_mark
          + button_partial_mark
          + external_map_mark
          + external_map_partial_mark
          + embedded_map_mark
          + embedded_map_partial_mark
          + hyperlinked_map_mark
          + hyperlinked_map_partial_mark
          + home_mark
          + home_partial_mark
          + places_mark
          + places_partial_mark
          + food_mark
          + food_partial_mark
          + hotels_mark
          + hotels_partial_mark
          + audio_4_mark
          + audio_4_partial_mark
          + like_4_mark
          + like_4_partial_mark
          + map_4_mark
          + map_4_partial_mark;



    total = Math.ceil(total);

	$('#total_mark_top')[0].innerHTML = total.toString();
	$('#total_mark_bottom')[0].innerHTML = total.toString();

}

function construct_string(){
	return `<style>

		body {
			width: 1200px;
			margin: auto;
		}

		h1 {
			margin: auto;
			text-align: center;
			color: white;
			background-color: black;
			width: 1000px;
		}

		table {
			margin: auto;
    		border-spacing: 2px;
    		width: 1000px;
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

		td.criterion {
			font-size: 0.7em;
			width: 100px;
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
			width: 200px;
			color: red;
			background-color: black;
			font-size: 1.5em;
			text-align: center;
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
		<th colspan=3 class="category">Lab 2 (links for all 4 parts)</th>
		<th class="p_back" colspan=2>Comments</th>
	</tr>
	<tr>
		<td>Part 1 (20%):</td>
		<td><input type="checkbox" id="part_1_given" disabled ${part_1_check}></td>
		<td class="comment" colspan=4>${part_1_comments}</td>
	</tr>

	<tr>
		<td>Part 2 (20%):</td>
		<td><input type="checkbox" id="part_2_given" disabled ${part_2_check}></td>
		<td class="comment" colspan=4>${part_2_comments}</td>
	</tr>

	<tr>
		<td>Part 3 (20%):</td>
		<td><input type="checkbox" id="part_3_given" disabled ${part_3_check}></td>
		<td class="comment" colspan=4>${part_3_comments}</td>
	</tr>

	<tr>
		<td>Part 4 (40%):</td>
		<td><input type="checkbox" id="part_4_given" disabled ${part_4_check}></td>
		<td class="comment" colspan=4>${part_4_comments}</td>
	</tr>

	</table>

	<br>
	<br>
	<h1>Part 1 (20%)</h1>
	<br>
	<table>
		<tr>
			<th class="p_back">Category</th>
			<th>Excellent (10)</th>
			<th>Good (5)</th>
			<th>Fair (2.5)</th>
			<th>Poor (0)</th>
			<th class="p_back">Subtotal</th>
			<th class="p_back">Partial Grade</th>
			<th class="p_back">Comments</th>
		</tr>

		<tr id="audio_category">
			<td class="category">Audio (10%).</td><td class="criterion wrap">All audio are trimmed and played properly. No distortion. <input type="radio" id="excellent_audio" name="audio_radio" value="10" disabled ${excellent_audio_checked_string}></td>
			<td class="criterion wrap">Audio plays but not trimmed. <input type="radio" id="good_audio" name="audio_radio" value="5" disabled ${good_audio_checked_string}></td>
			<td class="criterion wrap">Audio doesn't play or there are HTML tag errors. <input type="radio" id="fair_audio" name="audio_radio" value="2.5" disabled ${fair_audio_checked_string}></td>
			<td class="criterion wrap">Audio is totally missing. <input type="radio" id="poor_audio" name="audio_radio" value="0" disabled ${poor_audio_checked_string}></td>
			<td id="audio_mark">${audio_mark.toString()}</td>
			<td><input id="audio_partial_mark" type="number" value=${audio_partial_mark.toString()}></td>
			<td id="audio_comment" class="comment">${audio_comments}</td>
		</tr>

		<tr id="video_category">
			<td class="category">Video (10%).</td><td class="criterion wrap">All video are trimmed and played properly. No distortion. <input type="radio" id="excellent_video" name="video_radio" value="10" disabled ${excellent_video_checked_string}></td>
			<td class="criterion wrap">Video plays but not trimmed.<input type="radio" id="good_video" name="video_radio" value="5" disabled ${good_video_checked_string}></td>
			<td class="criterion wrap">Video doesn't play or display properly (i.e., distorted, pixelated, incorrect size). <input type="radio" id="fair_video" name="video_radio" value="2.5" disabled ${fair_video_checked_string}></td>
			<td class="criterion wrap">Video is totally missing. <input type="radio" id="poor_video" name="video_radio" value="0" disabled ${poor_video_checked_string}></td>
			<td id="video_mark">${video_mark.toString()}</td>
			<td><input id="video_partial_mark" type="number" value=${video_partial_mark.toString()}></td>
			<td id="video_comment" class="comment">${video_comments}</td>
		</tr>
	</table>


	<br>
	<br>
	<h1>Part 2 (20%)</h1>
	<br>
	<table>
		<tr>
			<th class="p_back">Category</th>
			<th>Excellent</th>
			<th>Good</th>
			<th>Fair</th>
			<th>Poor</th>
			<th class="p_back">Subtotal</th>
			<th class="p_back">Partial Grade</th>
			<th class="p_back">Comments</th>
		</tr>

		<tr id="slideshow_category">
			<td class="category">Slideshow (15%).</td><td class="criterion wrap2">Slideshow works perfectly.  (15) <input type="radio" id="excellent_slideshow" name="slideshow_radio" value="15" disabled ${excellent_slideshow_checked_string}></td>
			<td class="criterion wrap2">Some images are not displaying properly in the slideshow. (10)<input type="radio" id="good_slideshow" name="slideshow_radio" value="10" disabled ${good_slideshow_checked_string}></td>
			<td class="criterion wrap2">Some images are missing or pixelated, distorted. (5) <input type="radio" id="fair_slideshow" name="slideshow_radio" value="5" disabled ${fair_slideshow_checked_string}></td>
			<td class="criterion wrap2">Slideshow doesn't work at all or missing completely. (0) <input type="radio" id="poor_slideshow" name="slideshow_radio" value="0" disabled ${poor_slideshow_checked_string}></td>
			<td id="slideshow_mark">${slideshow_mark.toString()}</td>
			<td><input id="slideshow_partial_mark" type="number" value=${slideshow_partial_mark.toString()}></td>
			<td id="slideshow_comment" class="comment">${slideshow_comments}</td>
		</tr>

		<tr id="facebook_category">
			<td class="category">Facebook Like Button (5%).</td><td class="criterion wrap2">Like button displays properly and the URL works correctly. (5) <input type="radio" id="excellent_button" name="button_radio" value="5" disabled ${excellent_button_checked_string}></td>
			<td class="criterion wrap2">Like button displays properly, but the URL is broken. (2.5) <input type="radio" id="good_button" name="button_radio" value="2.5" disabled ${good_button_checked_string}></td>
			<td class="criterion wrap2">Like button displays partially and the url is broken. (1) <input type="radio" id="fair_button" name="button_radio" value="1" disabled ${fair_button_checked_string}></td>
			<td class="criterion wrap2">Like button is totally missing. (0) <input type="radio" id="poor_button" name="button_radio" value="0"  disabled ${poor_button_checked_string}></td>
			<td id="button_mark">${button_mark.toString()}</td>
			<td><input id="button_partial_mark" type="number" value=${button_partial_mark.toString()}></td>
			<td id="button_comment" class="comment">${button_comments}</td>
		</tr>
	</table>

	<br>
	<br>
	<h1>Part 3 (20%)</h1>
	<br>
	<table>
		<tr>
			<th class="p_back">Category</th>
			<th>Excellent</th>
			<th>Good</th>
			<th>Fair</th>
			<th>Poor</th>
			<th class="p_back">Subtotal</th>
			<th class="p_back">Partial Grade</th>
			<th class="p_back">Comments</th>
		</tr>

		<tr id="external_map_category">
			<td class="category">Embedded Google map with iframe (5%).</td><td class="criterion wrap3">Works perfectly. (5) <input type="radio" id="excellent_external_map" name="external_map_radio" value="5"  disabled ${excellent_external_map_checked_string}></td>
			<td class="criterion wrap3">N/A.<input type="radio" id="good_external_map" name="external_map_radio" value="2.5"  disabled ${good_external_map_checked_string}></td>
			<td class="criterion wrap3">N/A <input type="radio" id="fair_external_map" name="external_map_radio" value="1"  disabled ${fair_external_map_checked_string}></td>
			<td class="criterion wrap3">Completely missing. (0) <input type="radio" id="poor_external_map" name="external_map_radio" value="0" disabled ${poor_external_map_checked_string}></td>
			<td id="external_map_mark">${external_map_mark.toString()}</td>
			<td><input id="external_map_partial_mark" type="number" value=${external_map_partial_mark.toString()}></td>
			<td id="external_map_comment" class="comment">${external_map_comments}</td>
		</tr>

		<tr id="embedded_map_category">
			<td class="category">Embedded map (10%) with map.js.</td><td class="criterion wrap3">Embedded map is perfect. (10) <input type="radio" id="excellent_embedded_map" name="embedded_map_radio" value="10"  disabled ${excellent_embedded_map_checked_string}></td>
			<td class="criterion wrap3">The embedded map works but only one of the following: the pop-up texts are missing or markers not visible on the displayed portion or dropped pins not hyperlinked correctly. (7) <input type="radio" id="good_embedded_map" name="embedded_map_radio" value="7"  disabled ${good_embedded_map_checked_string}></td>
			<td class="criterion wrap3">The embedded map works but two of the following: the pop-up texts are missing or markers not visible on the displayed portion or dropped pins not hyperlinked correctly. (3) <input type="radio" id="fair_embedded_map" name="embedded_map_radio" value="3" disabled ${fair_embedded_map_checked_string}></td>
			<td class="criterion wrap3">Embedded map is missing completely or map.js isn't modified at all. (0) <input type="radio" id="poor_embedded_map" name="embedded_map_radio" value="0" disabled ${poor_embedded_map_checked_string}></td>
			<td id="embedded_map_mark">${embedded_map_mark.toString()}</td>
			<td><input id="embedded_map_partial_mark" type="number" value=${embedded_map_partial_mark.toString()}></td>
			<td id="embedded_map_comment" class="comment">${embedded_map_comments}</td>
		</tr>

		<tr id="hyperlinked_map_category">
			<td class="category">Hyperlinked Google Map 5%.</td><td class="criterion wrap3">Both the hyperlinked maps work perfectly. (5) <input type="radio" id="excellent_hyperlinked_map" name="hyperlinked_map_radio" value="5"  disabled ${excellent_hyperlinked_map_checked_string}></td>
			<td class="criterion wrap3">One of the hyperlinked maps works. (2.5) <input type="radio" id="good_hyperlinked_map" name="hyperlinked_map_radio" value="2.5"  disabled ${good_hyperlinked_map_checked_string}></td>
			<td class="criterion wrap3">N/a <input type="radio" id="fair_hyperlinked_map" name="hyperlinked_map_radio" value="1"  disabled ${fair_hyperlinked_map_checked_string}></td>
			<td class="criterion wrap3">Completely missing or both the hyperlinks are incorrect. (0) <input type="radio" id="poor_hyperlinked_map" name="hyperlinked_map_radio" value="0" disabled ${poor_hyperlinked_map_checked_string}></td>
			<td id="hyperlinked_map_mark">${hyperlinked_map_mark.toString()}</td>
			<td><input id="hyperlinked_map_partial_mark" type="number" value=${hyperlinked_map_partial_mark.toString()}></td>
			<td id="hyperlinked_map_comment" class="comment">${hyperlinked_map_comments}</td>
		</tr>

	</table>

	<br>
	<br>
	<h1>Part 4 (40%)</h1>
	<br>

	<table class="required_table">
	<tr>
		<th colspan=3 class="p_back">Criteria</th>
		<th class="p_back">Partial Grade</th>
		<th class="p_back">Comments</th>
	</tr>

	<tr>
		<td class="wrap4">Images in Home page fades / slides. (6)</td>
		<td><input type="checkbox" id="home" disabled ${home_checked}></td>
		<td id="home_mark">${home_mark.toString()}</td>
		<td><input id="home_partial_mark" tyep="number" value=${home_partial_mark.toString()} step="any" min="-6" max="6"></td>
		<td class="comment">${home_comments}</td>
	</tr>

	<tr>
		<td class="wrap4">Images in Places page fades / slides. (6)</td>
		<td><input type="checkbox" id="places"  disabled ${places_checked}></td>
		<td id="places_mark">${places_mark.toString()}</td>
		<td><input id="places_partial_mark" tyep="number" value=${places_partial_mark.toString()} step="any" min="-6" max="6"></td>
		<td class="comment">${places_comments}</td>
	</tr>

	<tr>
		<td class="wrap4">Images in Food page fades / slides. (6)</td>
		<td><input type="checkbox" id="food"  disabled ${food_checked}></td>
		<td id="food_mark">${food_mark.toString()}</td>
		<td><input id="food_partial_mark" tyep="number" value=${food_partial_mark.toString()} step="any" min="-6" max="6"></td>
		<td class="comment">${food_comments}</td>
	</tr>

	<tr>
		<td class="wrap4">Images in Hotels page fades / slides. (6)</td>
		<td><input type="checkbox" id="hotels"  disabled ${hotels_checked}></td>
		<td id="hotels_mark">${hotels_mark.toString()}</td>
		<td><input id="hotels_partial_mark" tyep="number" value=${hotels_partial_mark.toString()} step="any" min="-6" max="6"></td>
		<td class="comment">${hotels_comments}</td>
	</tr>

	<tr>
		<td class="wrap4">Audio in main (or in one of the) pages. (6)</td>
		<td><input type="checkbox" id="audio_4"  disabled ${audio_4_checked}></td>
		<td id="audio_4_mark">${audio_4_mark.toString()}</td>
		<td><input id="audio_4_partial_mark" tyep="number" value=${audio_4_partial_mark.toString()} step="any" min="-6" max="6"></td>
		<td class="comment">${audio_4_comments}</td>
	</tr>

	<tr>
		<td class="wrap4">Facebook Like button in main (or in one of the) pages. (6)</td>
		<td><input type="checkbox" id="like_4"  disabled ${like_4_checked}></td>
		<td id="like_4_mark">${like_4_mark.toString()}</td>
		<td><input id="like_4_partial_mark" tyep="number" value=${like_4_partial_mark.toString()} step="any" min="-5" max="5"></td>
		<td class="comment">${like_4_comments}</td>
	</tr>

	<tr>
		<td class="wrap4">One Hyperlinked Google map in all 4 pages. (4)</td>
		<td><input type="checkbox" id="map_4" disabled ${map_4_checked}></td>
		<td id="map_4_mark">${map_4_mark.toString()}</td>
		<td><input id="map_4_partial_mark" tyep="number" value=${map_4_partial_mark.toString()} step="any" min="-4" max="4"></td>
		<td class="comment">${map_4_comments}</td>
	</tr>

	</table>

	<br>
	<br>

	<table>
	<tr>
		<td>Total Mark:</td>
		<td id="total_mark_bottom" class="total_mark">${total.toString()}</td>
	</tr>
	</table>

	<br>
	<br>
	`

}


function make_part_1_zero(){

	audio_mark = 0;
	audio_partial_mark = 0;
	video_mark = 0;
	video_partial_mark = 0;
	$('#excellent_audio').prop("checked", false);
	$('#excellent_audio').prop("disabled", true);
	$('#good_audio').prop("checked", false);
	$('#good_audio').prop("disabled", true);
	$('#fair_audio').prop("checked", false);
	$('#fair_audio').prop("disabled", true);
	$('#poor_audio').prop("checked", false);
	$('#poor_audio').prop("disabled", true);
	$('#audio_mark')[0].innerHTML = audio_mark.toString();

	$('#excellent_video').prop("checked", false);
	$('#excellent_video').prop("disabled", true);
	$('#good_video').prop("checked", false);
	$('#good_video').prop("disabled", true);
	$('#fair_video').prop("checked", false);
	$('#fair_video').prop("disabled", true);
	$('#poor_video').prop("checked", false);
	$('#poor_video').prop("disabled", true);
	$('#video_mark')[0].innerHTML = video_mark.toString();
	$(".wrap").css('text-decoration', 'line-through');
	update_total();
}

function make_part_1_full(){

	audio_mark = 10;
	audio_partial_mark = 0;
	video_mark = 10;
	video_partial_mark = 0;
	$('#excellent_audio').prop("checked", true);
	$('#excellent_audio').attr("disabled", false);
	$('#good_audio').prop("checked", false);
	$('#good_audio').prop("disabled", false);
	$('#fair_audio').prop("checked", false);
	$('#fair_audio').prop("disabled", false);
	$('#poor_audio').prop("checked", false);
	$('#poor_audio').prop("disabled", false);
	$('#audio_mark')[0].innerHTML = audio_mark.toString();

	$('#excellent_video').prop("checked", true);
	$('#excellent_video').prop("disabled", false);
	$('#good_video').prop("checked", false);
	$('#good_video').prop("disabled", false);
	$('#fair_video').prop("checked", false);
	$('#fair_video').prop("disabled", false);
	$('#poor_video').prop("checked", false);
	$('#poor_video').prop("disabled", false);
	$('#video_mark')[0].innerHTML = video_mark.toString();
	$(".wrap").css('text-decoration', 'none');
	update_total();
}

function make_part_2_zero(){

	slideshow_mark = 0;
    slideshow_partial_mark = 0;
    button_mark = 0;
    button_partial_mark = 0;
    $('#excellent_slideshow').prop("checked", false);
	$('#excellent_slideshow').prop("disabled", true);
	$('#good_slideshow').prop("checked", false);
	$('#good_slideshow').prop("disabled", true);
	$('#fair_slideshow').prop("checked", false);
	$('#fair_slideshow').prop("disabled", true);
	$('#poor_slideshow').prop("checked", false);
	$('#poor_slideshow').prop("disabled", true);
	$('#slideshow_mark')[0].innerHTML = slideshow_mark.toString();

	$('#excellent_button').prop("checked", false);
	$('#excellent_button').prop("disabled", true);
	$('#good_button').prop("checked", false);
	$('#good_button').prop("disabled", true);
	$('#fair_button').prop("checked", false);
	$('#fair_button').prop("disabled", true);
	$('#poor_button').prop("checked", false);
	$('#poor_button').prop("disabled", true);
	$('#button_mark')[0].innerHTML = button_mark.toString();
	$(".wrap2").css('text-decoration', 'line-through');
	update_total();
}

function make_part_2_full(){
	slideshow_mark = 15;
    slideshow_partial_mark = 0;
    button_mark = 5;
    button_partial_mark = 0;
    $('#excellent_slideshow').prop("checked", true);
	$('#excellent_slideshow').prop("disabled", false);
	$('#good_slideshow').prop("checked", false);
	$('#good_slideshow').prop("disabled", false);
	$('#fair_slideshow').prop("checked", false);
	$('#fair_slideshow').prop("disabled", false);
	$('#poor_slideshow').prop("checked", false);
	$('#poor_slideshow').prop("disabled", false);
	$('#slideshow_mark')[0].innerHTML = slideshow_mark.toString();

	$('#excellent_button').prop("checked", true);
	$('#excellent_button').prop("disabled", false);
	$('#good_button').prop("checked", false);
	$('#good_button').prop("disabled", false);
	$('#fair_button').prop("checked", false);
	$('#fair_button').prop("disabled", false);
	$('#poor_button').prop("checked", false);
	$('#poor_button').prop("disabled", false);
	$('#button_mark')[0].innerHTML = button_mark.toString();
	$(".wrap2").css('text-decoration', 'none');
	update_total();

}

function make_part_3_zero(){
	external_map_mark = 0;
    external_map_partial_mark = 0;
    embedded_map_mark = 0;
    embedded_map_partial_mark = 0;
    hyperlinked_map_mark = 0;
    hyperlinked_map_partial_mark = 0;
    $('#excellent_external_map').prop("checked", false);
	$('#excellent_external_map').prop("disabled", true);
	$('#good_external_map').prop("checked", false);
	$('#good_external_map').prop("disabled", true);
	$('#fair_external_map').prop("checked", false);
	$('#fair_external_map').prop("disabled", true);
	$('#poor_external_map').prop("checked", false);
	$('#poor_external_map').prop("disabled", true);
	$('#external_map_mark')[0].innerHTML = external_map_mark.toString();

	$('#excellent_embedded_map').prop("checked", false);
	$('#excellent_embedded_map').prop("disabled", true);
	$('#good_embedded_map').prop("checked", false);
	$('#good_embedded_map').prop("disabled", true);
	$('#fair_embedded_map').prop("checked", false);
	$('#fair_embedded_map').prop("disabled", true);
	$('#poor_embedded_map').prop("checked", false);
	$('#poor_embedded_map').prop("disabled", true);
	$('#embedded_map_mark')[0].innerHTML = embedded_map_mark.toString();

	$('#excellent_hyperlinked_map').prop("checked", false);
	$('#excellent_hyperlinked_map').prop("disabled", true);
	$('#good_hyperlinked_map').prop("checked", false);
	$('#good_hyperlinked_map').prop("disabled", true);
	$('#fair_hyperlinked_map').prop("checked", false);
	$('#fair_hyperlinked_map').prop("disabled", true);
	$('#poor_hyperlinked_map').prop("checked", false);
	$('#poor_hyperlinked_map').prop("disabled", true);
	$('#hyperlinked_map_mark')[0].innerHTML = hyperlinked_map_mark.toString();

	$(".wrap3").css('text-decoration', 'line-through');
	update_total();
}

function make_part_3_full(){
	external_map_mark = 5;
    external_map_partial_mark = 0;
    embedded_map_mark = 10;
    embedded_map_partial_mark = 0;
    hyperlinked_map_mark = 5;
    hyperlinked_map_partial_mark = 0;
    $('#excellent_external_map').prop("checked", true);
	$('#excellent_external_map').prop("disabled", false);
	$('#good_external_map').prop("checked", false);
	$('#good_external_map').prop("disabled", true);
	$('#fair_external_map').prop("checked", false);
	$('#fair_external_map').prop("disabled", true);
	$('#poor_external_map').prop("checked", false);
	$('#poor_external_map').prop("disabled", false);
	$('#external_map_mark')[0].innerHTML = external_map_mark.toString();

	$('#excellent_embedded_map').prop("checked", true);
	$('#excellent_embedded_map').prop("disabled", false);
	$('#good_embedded_map').prop("checked", false);
	$('#good_embedded_map').prop("disabled", false);
	$('#fair_embedded_map').prop("checked", false);
	$('#fair_embedded_map').prop("disabled", false);
	$('#poor_embedded_map').prop("checked", false);
	$('#poor_embedded_map').prop("disabled", false);
	$('#embedded_map_mark')[0].innerHTML = embedded_map_mark.toString();

	$('#excellent_hyperlinked_map').prop("checked", true);
	$('#excellent_hyperlinked_map').prop("disabled", false);
	$('#good_hyperlinked_map').prop("checked", false);
	$('#good_hyperlinked_map').prop("disabled", false);
	$('#fair_hyperlinked_map').prop("checked", false);
	$('#fair_hyperlinked_map').prop("disabled", true);
	$('#poor_hyperlinked_map').prop("checked", false);
	$('#poor_hyperlinked_map').prop("disabled", false);
	$('#hyperlinked_map_mark')[0].innerHTML = hyperlinked_map_mark.toString();

	$(".wrap3").css('text-decoration', 'none');
	update_total();
}

function make_part_4_zero(){
	home_mark = 0;
    home_partial_mark = 0;
    home_check = "";
    $('#home_mark')[0].innerHTML = home_mark.toString();
    $('#home').prop("checked", false);
    $('#home').prop("disabled", true);
    $('#home_partial_mark').prop("disabled", true);
    $('#home_partial_mark')[0].value = "0";
    places_mark = 0;
    places_partial_mark = 0;
    places_check = "";
    $('#places_mark')[0].innerHTML = places_mark.toString();
    $('#places').prop("checked", false);
    $('#places').prop("disabled", true);
    $('#places_partial_mark').prop("disabled", true);
    $('#places_partial_mark')[0].value = "0";
    food_mark = 0;
    food_partial_mark = 0;
    food_check = "";
    $('#food_mark')[0].innerHTML = food_mark.toString();
    $('#food').prop("checked", false);
    $('#food').prop("disabled", true);
    $('#food_partial_mark').prop("disabled", true);
    $('#food_partial_mark')[0].value = "0";
    hotels_mark = 0;
    hotels_partial_mark = 0;
    hotels_check = "";
    $('#hotels_mark')[0].innerHTML = hotels_mark.toString();
    $('#hotels').prop("checked", false);
    $('#hotels').prop("disabled", true);
    $('#hotels_partial_mark').prop("disabled", true);
    $('#hotels_partial_mark')[0].value = "0";
    audio_4_mark = 0;
    audio_4_partial_mark = 0;
    audio_4_check = "";
    $('#audio_4_mark')[0].innerHTML = audio_4_mark.toString();
    $('#audio_4').prop("checked", false);
    $('#audio_4').prop("disabled", true);
    $('#audio_4_partial_mark').prop("disabled", true);
    $('#audio_4_partial_mark')[0].value = "0";
    like_4_mark = 0;
    like_4_partial_mark = 0;
    like_4_check = "";
    $('#like_4_mark')[0].innerHTML = like_4_mark.toString();
    $('#like_4').prop("checked", false);
    $('#like_4').prop("disabled", true);
    $('#like_4_partial_mark').prop("disabled", true);
    $('#like_4_partial_mark')[0].value = "0";
    map_4_mark = 0;
    map_4_partial_mark = 0;
    map_4_check = "";
    $('#map_4_mark')[0].innerHTML = map_4_mark.toString();
    $('#map_4').prop("checked", false);
    $('#map_4').prop("disabled", true);
    $('#map_4_partial_mark').prop("disabled", true);
    $('#map_4_partial_mark')[0].value = "0";
    $(".wrap4").css('text-decoration', 'line-through');
	update_total();
}

function make_part_4_full(){
	home_mark = 6;
    home_partial_mark = 0;
    home_check = "";
    $('#home_mark')[0].innerHTML = home_mark.toString();
    $('#home').prop("checked", true);
    $('#home').prop("disabled", false);
    $('#home_partial_mark').prop("disabled", false);
    places_mark = 6;
    places_partial_mark = 0;
    places_check = "";
    $('#places_mark')[0].innerHTML = places_mark.toString();
    $('#places').prop("checked", true);
    $('#places').prop("disabled", false);
    $('#places_partial_mark').prop("disabled", false);
    food_mark = 6;
    food_partial_mark = 0;
    food_check = "";
    $('#food_mark')[0].innerHTML = food_mark.toString();
    $('#food').prop("checked", true);
    $('#food').prop("disabled", false);
    $('#food_partial_mark').prop("disabled", false);
    hotels_mark = 6;
    hotels_partial_mark = 0;
    hotels_check = "";
    $('#hotels_mark')[0].innerHTML = hotels_mark.toString();
    $('#hotels').prop("checked", true);
    $('#hotels').prop("disabled", false);
    $('#hotels_partial_mark').prop("disabled", false);
    audio_4_mark = 6;
    audio_4_partial_mark = 0;
    audio_4_check = "";
    $('#audio_4_mark')[0].innerHTML = audio_4_mark.toString();
    $('#audio_4').prop("checked", true);
    $('#audio_4').prop("disabled", false);
    $('#audio_4_partial_mark').prop("disabled", false);
    like_4_mark = 6;
    like_4_partial_mark = 0;
    like_4_check = "";
    $('#like_4_mark')[0].innerHTML = like_4_mark.toString();
    $('#like_4').prop("checked", true);
    $('#like_4').prop("disabled", false);
    $('#like_4_partial_mark').prop("disabled", false);
    map_4_mark = 4;
    map_4_partial_mark = 0;
    map_4_check = "";
    $('#map_4_mark')[0].innerHTML = map_4_mark.toString();
    $('#map_4').prop("checked", true);
    $('#map_4').prop("disabled", false);
    $('#map_4_partial_mark').prop("disabled", false);
    $(".wrap4").css('text-decoration', 'none');
	update_total();
}


window.onload = initialize;