var n_pages,
    n_pages_grade,
    page_mark = 0,
    page_partial_mark = 0,
    missing_checked = 0,
    like_button,
    like_button_grade,
    like_button_mark = 0,
    button_partial_mark = 0,
    map,
    map_grade,
    map_mark = 0,
    map_partial_mark = 0,
    hyper_map,
    hyper_map_grade,
    hyper_map_mark = 0,
    hyper_map_partial_mark = 0,
    code,
    code_grade,
    code_mark = 0,
    code_partial_mark = 0,
    emb,
    emb_grade,
    emb_mark = 0,
    emb_partial_mark = 0,
    auto_music,
    auto_music_grade,
    auto_music_mark = 0,
    auto_music_partial_mark = 0,
    auto_video,
    auto_video_grade,
    auto_video_mark = 0,
    auto_video_partial_mark = 0,
    structure,
    structure_mark = 0,
    structure_partial_mark = 0,
    media,
    media_mark = 0,
    media_partial_mark = 0,
    template,
    template_mark = 0,
    template_partial_mark = 0,
    contents,
    contents_mark = 0,
    contents_partial_mark = 0,
    creativity,
    creativity_mark = 0,
    creativity_partial_mark = 0,
    total_mark = 0,
    grantedBytes = 0,
    page_checked_string="checked",
    zero_page_checked_string="checked",
    one_page_checked_string="",
    two_page_checked_string="",
    three_page_checked_string="",
    like_button_checked_string="checked",
    map_checked_string="checked",
    hyper_map_checked_string="checked",
    emb_checked_string="checked",
    code_checked_string="checked",
    auto_music_checked_string="checked",
    auto_video_checked_string="checked",
    excellent_structure_checked_string="checked",
    good_structure_checked_string="",
    fair_structure_checked_string="",
    poor_structure_checked_string="",
    excellent_media_checked_string="checked",
    good_media_checked_string="",
    fair_media_checked_string="",
    poor_media_checked_string="",
    excellent_template_checked_string="checked",
    good_template_checked_string="",
    fair_template_checked_string="",
    poor_template_checked_string="",
    excellent_content_checked_string="",
    good_content_checked_string="checked",
    fair_content_checked_string="",
    poor_content_checked_string="",
    excellent_creativity_checked_string="",
    good_creativity_checked_string="checked",
    fair_creativity_checked_string="",
    poor_creativity_checked_string="",
    page_comments="",
    button_comments="",
    map_comments="",
    hyper_map_comments="",
    code_comments="",
    emb_comments="",
    auto_music_comments="",
    auto_video_comments="",
    structure_comments="",
    media_comments="",
    template_comments="",
    contents_comments="",
    creativity_comments="";


function initialize(){

	n_pages = $('#n_pages')[0];
	n_pages_grade = $('#n_pages_grade')[0];
	like_button = $('#like_button')[0];
	like_button_grade = $('#like_button_grade')[0];
	map = $('#map')[0];
	map_grade = $('#map_grade')[0];
	hyper_map = $('#hyper_map')[0];
	hyper_map_grade = $('#hyper_map_grade')[0];
	code = $('#code')[0];
	code_grade = $('#code_grade')[0];
	emb = $('#emb')[0];
	emb_grade = $('#emb_grade')[0];
	auto_music = $('#auto_music')[0];
	auto_music_grade = $('#auto_music_grade')[0];
	auto_video = $('#auto_video')[0];
	auto_video_grade = $('#auto_video_grade')[0];
	missing_checked = 0;
	n_pages.onchange = function (){
		if (!n_pages.checked){
			missing_checked   = $('input[name=missing_pages]:checked')[0];
			page_mark = -10 * parseInt( missing_checked.value );
			page_checked_string = "";
		}else {
			page_mark = 0;
			page_partial_mark = 0;
			$('#zero').prop("checked", true);
			$("#page_partial_mark")[0].value = page_partial_mark.toString();
			page_checked_string = "checked";
			zero_page_checked_string = "checked"
			one_page_checked_string = "";
			two_page_checked_string = "";
			three_page_checked_string = "";

		}
		n_pages_grade.innerHTML = page_mark.toString();
		update_total();
	};

	$('input:radio[name=missing_pages]').change( function() {
		missing_checked   = $('input[name=missing_pages]:checked')[0];
		if ( parseInt(missing_checked.value) ){
			$("#n_pages").prop("checked", false);
		} else {
			$("#n_pages").prop("checked", true);
		}
		switch (parseInt(missing_checked.value)) {
			case 0:
				zero_page_checked_string = "checked";
				one_page_checked_string = "";
				two_page_checked_string = "";
				three_page_checked_string = "";
				break;
			case 1:
				zero_page_checked_string = "";
				one_page_checked_string = "checked";
				two_page_checked_string = "";
				three_page_checked_string = "";
				break;
			case 2:
				zero_page_checked_string = "";
				one_page_checked_string = "";
				two_page_checked_string = "checked";
				three_page_checked_string = "";
				break;
			case 3:
				zero_page_checked_string = "";
				one_page_checked_string = "";
				two_page_checked_string = "";
				three_page_checked_string = "checked";
		}
		page_mark = -10 * parseInt( missing_checked.value );
		n_pages_grade.innerHTML = page_mark.toString();
		update_total();
	});

	like_button.onchange = function (){
		if (!like_button.checked){
			like_button_mark = -5;
			like_button_checked_string = "";
		}else {
			like_button_mark = 0;
			button_partial_mark = 0;
			$("#button_partial_mark")[0].value = button_partial_mark.toString();
			like_button_checked_string = "checked";
		}
		like_button_grade.innerHTML = like_button_mark.toString();
		update_total();
	};

	map.onchange = function (){
		if (!map.checked){
			map_mark = -5;
			map_checked_string = "";
		}else {
			map_mark = 0;
			map_partial_mark = 0;
			$("#map_partial_mark")[0].value = map_partial_mark.toString();
			map_checked_string = "checked"
		}
		map_grade.innerHTML = map_mark.toString();
		update_total();
	};

	hyper_map.onchange = function (){
		if (!hyper_map.checked){
			hyper_map_mark = -5;
			hyper_map_checked_string = "";
		}else {
			hyper_map_mark = 0;
			hyper_map_partial_mark = 0;
			$("#hyper_map_partial_mark")[0].value = hyper_map_partial_mark.toString();
			hyper_map_checked_string = "checked"
		}
		hyper_map_grade.innerHTML = hyper_map_mark.toString();
		update_total();
	};

	code.onchange = function (){
		if (!code.checked){
			code_mark = -5;
			code_checked_string = "";
		}else {
			code_mark = 0;
			code_partial_mark = 0;
			$("#code_partial_mark")[0].value = code_partial_mark.toString();
			code_checked_string = "checked";
		}
		code_grade.innerHTML = code_mark.toString();
		update_total();
	};

	emb.onchange = function (){
		if (!emb.checked){
			emb_mark = -5;
			emb_checked_string = "";
		}else {
			emb_mark = 0;
			emb_partial_mark = 0;
			$("#emb_partial_mark")[0].value = emb_partial_mark.toString();
			emb_checked_string = "checked";
		}
		emb_grade.innerHTML = emb_mark.toString();
		update_total();
	};

	auto_music.onchange = function (){
		if (!auto_music.checked){
			auto_music_mark = -5;
			auto_music_checked_string = "";
		}else {
			auto_music_mark = 0;
			auto_music_partial_mark = 0;
			$("#auto_music_partial_mark")[0].value = auto_music_partial_mark.toString();
			auto_music_checked_string = "checked";
		}
		auto_music_grade.innerHTML = auto_music_mark.toString();
		update_total();
	};

	auto_video.onchange = function (){
		if (!auto_video.checked){
			auto_video_mark = -5;
			auto_video_checked_string = "";
		}else {
			auto_video_mark = 0;
			auto_video_partial_mark = 0;
			$("#auto_video_partial_mark")[0].value = auto_video_partial_mark.toString();
			auto_video_checked_string = "checked";
		}
		auto_video_grade.innerHTML = auto_video_mark.toString();
		update_total();
	};

	structure_mark = 30;
	$('input:radio[name=structure_radio]').change(function() {
		var structure_checked  = $('input[name=structure_radio]:checked')[0];
		structure_mark = parseInt( structure_checked.value );
		$('#structure_mark')[0].innerHTML = structure_mark.toString();
		switch (structure_mark) {
			case 30:
				excellent_structure_checked_string = "checked";
				good_structure_checked_string = "";
				fair_structure_checked_string = "";
				poor_structure_checked_string = "";
				break;
			case 25:
				excellent_structure_checked_string = "";
				good_structure_checked_string = "checked";
				fair_structure_checked_string = "";
				poor_structure_checked_string = "";
				break;
			case 20:
				excellent_structure_checked_string = "";
				good_structure_checked_string = "";
				fair_structure_checked_string = "checked";
				poor_structure_checked_string = "";
				break;
			case 15:
				excellent_structure_checked_string = "";
				good_structure_checked_string = "";
				fair_structure_checked_string = "";
				poor_structure_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#structure_mark')[0].innerHTML = structure_mark.toString();

	media_mark = 30;
	$('input:radio[name=media_radio]').change( function() {
		media_checked      = $('input[name=media_radio]:checked')[0];
		media_mark = parseInt( media_checked.value );
		$('#media_mark')[0].innerHTML = media_mark.toString();
		switch(media_mark){
			case 30:
				excellent_media_checked_string = "checked";
				good_media_checked_string = "";
				fair_media_checked_string = "";
				poor_media_checked_string = "";
				break;
			case 25:
				excellent_media_checked_string = "";
				good_media_checked_string = "checked";
				fair_media_checked_string = "";
				poor_media_checked_string = "";
				break;
			case 20:
				excellent_media_checked_string = "";
				good_media_checked_string = "";
				fair_media_checked_string = "checked";
				poor_media_checked_string = "";
				break;
			case 15:
				excellent_media_checked_string = "";
				good_media_checked_string = "";
				fair_media_checked_string = "";
				poor_media_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#media_mark')[0].innerHTML = media_mark.toString();

    template_mark = 10;
	$('input:radio[name=template_radio]').change( function() {
		template_checked   = $('input[name=template_radio]:checked')[0];
		template_mark = parseInt( template_checked.value );
		$('#template_mark')[0].innerHTML = template_mark.toString();
		switch(template_mark){
			case 10:
				excellent_template_checked_string = "checked";
				good_template_checked_string = "";
				fair_template_checked_string = "";
				poor_template_checked_string = "";
				break;
			case 8:
				excellent_template_checked_string = "";
				good_template_checked_string = "checked";
				fair_template_checked_string = "";
				poor_template_checked_string = "";
				break;
			case 6:
				excellent_template_checked_string = "";
				good_template_checked_string = "";
				fair_template_checked_string = "checked";
				poor_template_checked_string = "";
				break;
			case 4:
				excellent_template_checked_string = "";
				good_template_checked_string = "";
				fair_template_checked_string = "";
				poor_template_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#template_mark')[0].innerHTML = template_mark.toString();

	contents_mark = 15;
	$('input:radio[name=contents_radio]').change( function() {
		contents_checked   = $('input[name=contents_radio]:checked')[0];
		contents_mark = parseInt( contents_checked.value );
		$('#contents_mark')[0].innerHTML = contents_mark.toString();
		switch(contents_mark){
			case 20:
				excellent_content_checked_string = "checked"
				good_content_checked_string = "";
				fair_content_checked_string = "";
				poor_content_checked_string = "";
				break;
			case 15:
				excellent_content_checked_string = ""
				good_content_checked_string = "checked";
				fair_content_checked_string = "";
				poor_content_checked_string = "";
				break;
			case 10:
				excellent_content_checked_string = ""
				good_content_checked_string = "";
				fair_content_checked_string = "checked";
				poor_content_checked_string = "";
				break;
			case 5:
				excellent_content_checked_string = ""
				good_content_checked_string = "";
				fair_content_checked_string = "";
				poor_content_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#contents_mark')[0].innerHTML = contents_mark.toString();

	creativity_mark = 8;
	$('input:radio[name=creativity_radio]').change( function() {
		creativity_checked = $('input[name=creativity_radio]:checked')[0];
		creativity_mark = parseInt( creativity_checked.value );
		$('#creativity_mark')[0].innerHTML = creativity_mark.toString();
		switch(creativity_mark){
			case 10:
				excellent_creativity_checked_string = "checked";
				good_creativity_checked_string = "";
				fair_creativity_checked_string = "";
				poor_creativity_checked_string = "";
				break;
			case 8:
				excellent_creativity_checked_string = "";
				good_creativity_checked_string = "checked";
				fair_creativity_checked_string = "";
				poor_creativity_checked_string = "";
				break;
			case 6:
				excellent_creativity_checked_string = "";
				good_creativity_checked_string = "";
				fair_creativity_checked_string = "checked";
				poor_creativity_checked_string = "";
				break;
			case 4:
				excellent_creativity_checked_string = "";
				good_creativity_checked_string = "";
				fair_creativity_checked_string = "";
				poor_creativity_checked_string = "checked";
				break;
		}
		update_total();
	});
	$('#creativity_mark')[0].innerHTML = creativity_mark.toString();


	$('#structure_partial_mark').change( function (){
		if (this.value){
			structure_partial_mark = parseInt( this.value );
		} else {
			structure_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	$('#media_partial_mark').change( function (){
		if (this.value){
			media_partial_mark = parseInt( this.value );
		} else {
			media_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	$('#template_partial_mark').change( function (){
		if (this.value){
			template_partial_mark = parseInt( this.value );
		} else {
			template_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	$('#contents_partial_mark').change( function (){
		if (this.value){
			contents_partial_mark = parseInt( this.value );
		} else {
			contents_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	$('#creativity_partial_mark').change( function (){
		if (this.value){
			creativity_partial_mark = parseInt( this.value );
		} else {
			creativity_partial_mark = 0;
			this.value = 0;
		}
		update_total();
	});

	$('#page_partial_mark').change( function() {
		if (this.value){
			page_partial_mark = parseInt( this.value );
		} else {
			this.value = 0;
			page_partial_mark = 0;
		}
		update_total();
	});

	$('#button_partial_mark').change( function() {
		if (this.value){
			button_partial_mark = parseInt( this.value );
		} else {
			this.value = 0;
			button_partial_mark = 0;
		}
		update_total();
	});

	$('#map_partial_mark').change( function() {
		if (this.value){
			map_partial_mark = parseInt( this.value );
		} else {
			this.value = 0;
			map_partial_mark = 0;
		}
		update_total();
	});

	$('#code_partial_mark').change( function() {
		if (this.value){
			code_partial_mark = parseInt( this.value );
		} else {
			this.value = 0;
			code_partial_mark = 0;
		}
		update_total();
	});

	$('#emb_partial_mark').change( function() {
		if (this.value){
			emb_partial_mark = parseInt( this.value );
		} else {
			this.value = 0;
			emb_partial_mark = 0;
		}
		update_total();
	});


	$("#comment_file_generator").click( function() {
		page_comments = $('#page_comments').val();
		if (page_comments === undefined){
			page_comments = "";
		}
		button_comments = $('#button_comments').val();
		if (button_comments === undefined){
			button_comments = "";
		}
		map_comments = $('#map_comments').val();
		if (map_comments === undefined){
			map_comments = "";
		}
		code_comments = $('#code_comments').val();
		if (code_comments === undefined){
			code_comments = "";
		}
		emb_comments = $('#emb_comments').val();
		if (emb_comments === undefined){
			emb_comments = "";
		}
		structure_comments = $('#structure_comments').val();
		if (structure_comments === undefined){
			structure_comments = "";
		}
		media_comments = $('#media_comments').val();
		if (media_comments === undefined){
			media_comments = "";
		}
		template_comments = $('#template_comments').val();
		if (template_comments === undefined){
			template_comments = "";
		}
		contents_comments = $('#contents_comments').val();
		if (contents_comments === undefined){
			contents_comments = "";
		}
		creativity_comments = $('#creativity_comments').val();
		if (creativity_comments === undefined){
			creativity_comments = "";
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
	total = page_mark
		  + page_partial_mark
	      + like_button_mark
	      + button_partial_mark
	      + map_mark
	      + map_partial_mark
	      + hyper_map_mark
	      + hyper_map_partial_mark
	      + code_mark
	      + code_partial_mark
	      + emb_mark
	      + emb_partial_mark
	      + auto_video_mark
	      + auto_video_partial_mark
	      + auto_music_mark
	      + auto_music_partial_mark
	      + structure_mark
	      + structure_partial_mark
	      + media_mark
	      + media_partial_mark
	      + template_mark
	      + template_partial_mark
	      + contents_mark
	      + contents_partial_mark
	      + creativity_mark
	      + creativity_partial_mark;

	$('#total_mark')[0].innerHTML = total.toString();

}

function construct_string(){
	return `<style>
		table {
    		border-spacing: 2px;
    		width: 1300px;
		}
		th {
		    text-align: left;
		    color: white;
		    background-color: blue;
		}

		th, td {
		    padding: 15px;
		}

		table, th, td {
		    border: 1px solid black;
		    border-collapse: collapse;
		}

		td.category {
			background-color: green;
			color: white;
		}

		th.p_back {
			background-color: purple;
		}

		.comment textarea{
			min-width: 200px;
			resize: none;
			font-size: 1em;
		}

		input{
			font-size: 1em;
			width: 60px;
		}

		.disable_color {
			background-color: black;
		}

		#total_mark {
			font-weight: 900;
			color: red;
		}

		.main_button {
			text-align: center;
			background-color: green;
			color: white;
			font-size: 1.5em;
			border-radius: 4px;
			padding: 15px 32px;
		}


	</style>
	<table class='required_table'>
	<tr>
		<th colspan=3 class='category'>Minimum Requirements</th>
		<th class='p_back'>Partial Grade/Adjustment</th>
		<th class='p_back'>Comments</th>
	</tr>
	<tr>
		<td>4 hyperlinked pages:</td>
		<td><input type='checkbox' name='minimum_requirement' id='n_pages' disabled ${page_checked_string}><br>Missing pages:<br>
			<label for='zero'>0:</label><input id='zero' type='radio' name='missing_pages' value='0' disabled ${zero_page_checked_string}><br>
			<label for='one'>1:</label><input id='one' type='radio' name='missing_pages' value='1' disabled ${one_page_checked_string}><br>
			<label for='two'>2:</label><input id='two' type='radio' name='missing_pages' value='2' disabled ${two_page_checked_string}><br>
			<label for='three'>3:</label><input id='three' type='radio' name='missing_pages' value='3' disabled ${three_page_checked_string}>
		</td>
		<td id='n_pages_grade'>${page_mark.toString()}</td>
		<td><input id='page_partial_mark' type='number' value='${page_partial_mark.toString()}'></td>
		<td class='comment'>${page_comments}</td>
	</tr>
	<tr>
		<td>A facebook like button in at least one page:</td>
		<td><input type='checkbox' name='minimum_requirement' id='like_button' disabled ${like_button_checked_string}></td>
		<td id='like_button_grade'>${like_button_mark.toString()}</td>
		<td><input id='button_partial_mark' type='number' value='${button_partial_mark.toString()}' disabled></td>
		<td class='comment'>${button_comments}</td>
	</tr>
	<tr>
		<td>A hyperlink to a Google map in at least one page:</td>
		<td><input type='checkbox' name='minimum_requirement' id='map' disabled ${map_checked_string}></td>
		<td id='map_grade'>${map_mark.toString()}</td>
		<td><input id='map_partial_mark' type='number' value='${map_partial_mark.toString()}'></td>
		<td class='comment'>${map_comments}</td>
	</tr>

	<tr>
		<td>A hyperlink to a Google map in at least one page:</td>
		<td><input type='checkbox' name='minimum_requirement' id='hyper_map' disabled ${hyper_map_checked_string}></td>
		<td id='hyper_map_grade'>${hyper_map_mark.toString()}</td>
		<td><input id='hyper_map_partial_mark' type='number' value='${map_partial_mark.toString()}'></td>
		<td class='comment'>${hyper_map_comments}</td>
	</tr>

	<tr>
		<td> Some JavaScript for a slideshow:</td>
		<td><input type='checkbox' name='minimum_requirement' id='code' disabled ${code_checked_string}></td>
		<td id='code_grade'>${code_mark.toString()}</td>
		<td><input id='code_partial_mark' type='number' value='${code_partial_mark.toString()}' disabled></td>
		<td class='comment'>${code_comments}</td>
	</tr>
	<tr>
		<td>An embedded Youtube video in at least one page</td>
		<td><input type='checkbox' name='minimum_requirement' id='emb' disabled ${emb_checked_string}></td>
		<td id='emb_grade'>${emb_mark.toString()}</td>
		<td><input id='emb_partial_mark' type='number' value='${emb_partial_mark.toString()}' disabled></td>
		<td class='comment'>${emb_comments}</td>
	</tr>

	<tr>
		<td>A piece of auto-play, loop MP3 music</td>
		<td><input type="checkbox" name="minimum_requirement" id="auto_music" disabled ${auto_music_checked_string}></td>
		<td id="auto_music_grade">${auto_music_mark.toString()}</td>
		<td><input id="auto_music_partial_mark" type="number" value=${auto_music_partial_mark.toString()}></td>
		<td class="comment">${auto_music_comments}</td>
	</tr>

	<tr>
		<td>An embedded GIF-like (auto-play, loop, 5 seconds long) video</td>
		<td><input type="checkbox" name="minimum_requirement" id="auto_video" disabled ${auto_video_checked_string}></td>
		<td id="auto_video_grade">${auto_video_mark.toString()}</td>
		<td><input id="auto_video_partial_mark" type="number" value=${auto_video_partial_mark.toString()}></td>
		<td class="comment">${auto_video_comments}</td>
	</tr>

	</table>
	<br>
	<br>
	<hr>
	<br>
	<br>
	<table>
		<tr>
			<th class='p_back'>Category</th>
			<th>Excellent</th>
			<th>Good</th>
			<th>Fair</th>
			<th>Poor</th>
			<th class='p_back'>Subtotal</th>
			<th class='p_back'>Partial Grade/Adjustment</th>
			<th class='p_back'>Comments</th>
		</tr>
		<tr id='structure_category'>
			<td class='category'>Structure (layout, navigation, internal and external links) (30%)</td>
			<td>All links works. Layout is perfect. No navigational issue. <input type='radio' id='excellent_structure' name='structure_radio' value='30' disabled ${excellent_structure_checked_string}></td>
			<td>Some alignment issues. All navigation links work. Max. 2 broken links.<input type='radio' id='good_structure' name='structure_radio' value='25' disabled ${good_structure_checked_string}></td>
			<td>Do not understand how to use urls. The published webpages don't match local version. <input type='radio' id='fair_structure' name='structure_radio' value='20' disabled ${fair_structure_checked_string}></td>
			<td>Do not understand html tags, hyperlinks, multipage website design. <input type='radio' id='poor_structure' name='structure_radio' value='15' disabled ${poor_structure_checked_string}></td>
			<td id='structure_mark'>${structure_mark.toString()}</td>
			<td><input id='structure_partial_mark' type='number' value='${structure_partial_mark.toString()}' disabled></td>
			<td id='structure_comment' class='comment'>${structure_comments}</td>

		</tr>
		<tr id='media_category'>
			<td class='category'>Media (images, embedded video or audio, external videos) (30%)</td>
			<td>All images are resized and cropped properly. No distortion. All embedded or external medial play properly. <input type='radio' id='excellent_media' name='media_radio' value='30' disabled ${excellent_media_checked_string}></td>
			<td>Max. 1 media doesn't play or display properly, or 1 distorted image. <input type='radio' id='good_media' name='media_radio' value='25' disabled ${good_media_checked_string}></td>
			<td>Some (>1) media/images don't play or display properly. <input type='radio' id='fair_media' name='media_radio' value='20' disabled ${fair_media_checked_string}></td>
			<td>The published embedded media are missing, either totally missing or not displayed properly. <input type='radio' id='poor_media' name='media_radio' value='15' disabled ${poor_media_checked_string}></td>
			<td id='media_mark'>${media_mark.toString()}</td>
			<td><input id='media_partial_mark' type='number' value='${media_partial_mark.toString()}' disabled></td>
			<td id='media_comment' class='comment'>${media_comments}</td>
		</tr>

		<tr id='template_category'>
			<td class='category'>CSS Template (stylesheets, custom fonts, division) (10%)</td>
			<td>CSS stylesheets used properly. All embedded fonts displayed properly. No &lt;div&gt; tag errors. <input type='radio' id='excellent_template' name='template_radio' value='10' disabled ${excellent_template_checked_string}></td>
			<td>Some fonts are not displayed properly, or some &lt;div&gt;s don't match. <input type='radio' id='good_template' name='template_radio' value='8' disabled ${good_template_checked_string}></td>
			<td>CSS template loads properly, but there are some serious layout issues. <input type='radio' id='fair_template' name='template_radio' value='6' disabled ${fair_template_checked_string}></td>
			<td>Did not load CSS template properly, thus the layout is broken. <input type='radio' id='poor_template' name='template_radio' value='4' disabled ${poor_template_checked_string}></td>
			<td id='template_mark'>${template_mark.toString()}</td>
			<td><input id='template_partial_mark' type='number' value='${template_partial_mark.toString()}' disabled></td>
			<td id='template_comment' class='comment'>${template_comments}</td>
		</tr>
		<tr id='contents_category'>
			<td class='category'>Contents and Interests (20%)</td>
			<td>The write-up is interesting. The topic is well-chosen and relevant. <input type='radio' id='excellent_content' name='contents_radio' value='20' disabled ${excellent_content_checked_string}></td>
			<td>The write-up is adequate. The topic is interesting. <input type='radio' id='good_content' name='contents_radio' value='15' disabled ${good_content_checked_string}></td>
			<td>The write-up and topic are boring. <input type='radio' id='fair_content' name='contents_radio' value='10' disabled ${fair_content_checked_string}></td>
			<td>Cut and paste from other sources. Almost no original contents. <input type='radio' id='poor_content' name='contents_radio' value='5' disabled ${poor_content_checked_string}></td>
			<td id='contents_mark'>${contents_mark.toString()}</td>
			<td><input id='contents_partial_mark' type='number' value='${contents_partial_mark.toString()}' disabled></td>
			<td id='contents_comment' class='comment'>${contents_comments}</td>
		</tr>
		<tr id='creativity_category'>
			<td class='category'>Creativity and originality (10%)</td>
			<td>Very original in design, layout, color choices, etc. <input type='radio' id='excellent_creativity' name='creativity_radio' value='10' disabled ${excellent_creativity_checked_string}></td>
			<td>The layout, fonts, color choices are acceptable, but not exceptional. <input type='radio' id='good_creativity' name='creativity_radio' value='8' disabled ${good_creativity_checked_string}></td>
			<td>Awkward layout and color choices. Did not use a well designed CSS template. <input type='radio' id='fair_creativity' name='creativity_radio' value='6' disabled ${fair_creativity_checked_string}></td>
			<td>Color and layout are too distracting. Too many issues in navigation and display. <input type='radio' id='poor_creativity' name='creativity_radio' value='4' disabled ${poor_creativity_checked_string}></td>
			<td id='creativity_mark'>${creativity_mark.toString()}</td>
			<td><input id='creativity_partial_mark' type='number' value='${creativity_partial_mark.toString()}' disabled></td>
			<td id='creativity_comment' class='comment'>${creativity_comments}</td>
		</tr>
		<tr>
			<td colspan=5 class='disable_color'></td>
			<td id=total_mark>${total.toString()}</td>
			<td class='disable_color'></td>
		</tr>

	</table>
`

}


window.onload = initialize;