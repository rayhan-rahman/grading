var current_marks = [10, 10, 10, 3, 3, 4, 12, 3, 3, 6, 15, 3, 3, 15];
var full_marks =    [10, 10, 10, 3, 3, 4, 12, 3, 3, 6, 15, 3, 3, 15];
var partial_marks = [];
var checked = [];
var comments = [];
var ids = ['six', 'loop', 'name', 'background', 'border', 'font', 'videos', 'title', 'h1', 'dropdown', 'next', 'prev', 'wire', 'previous', 'p1', 'p2'];

var parts_id = ['#p1', '#p2'];

function initialize(){
	for (var i = 0; i < ids.length; ++i){
		partial_marks.push(0);
		checked.push("checked");
		comments.push("");
	}

	for (var i = 0; i < parts_id.length; ++i){
		var part_element = $(parts_id[i]);
		(function(j){
			part_element.change( function() {
				handle_part_changes(j);
			});
		})(i);
	}

	for (var i = 0; i < ids.length - parts_id.length; ++i){
		var id_string = '#' + ids[i];
		var element = $(id_string);
		(function(j){
			element.change( function(){
				handle_check_changes(j);
			});
		})(i);
		var partial_mark_string = id_string + '_partial_mark';
		var partial_element = $(partial_mark_string);
		(function(j){
			partial_element.change( function(){
				handle_partial_changes(j);
			});
		})(i);
	}

	for (var i = 0; i < ids.length; ++i){
		var id_string = '#' + ids[i] + '_comments';
		var comments_element = $(id_string);
		(function(j){
			comments_element.change( function(){
				handle_comments_changes(j);
			})
		})(i);
	}

	$("#comment_file_generator").click( function() {
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

function handle_check_changes(id){
	var id_string = '#' + ids[id];
	var mark_string = id_string + '_mark';
	var partial_mark_string = id_string + '_partial_mark';
	var element = $(id_string)[0];
	if (!element.checked){
		current_marks[id] = 0;
		checked[id] = "";
	}else {
		current_marks[id] = full_marks[id];
		checked[id] = "checked";
		partial_marks[id] = 0;
		$(partial_mark_string)[0].value = "0";
	}
	$(mark_string)[0].innerHTML = current_marks[id];
	update_total();
}

function handle_partial_changes(id){
	var id_string = '#' + ids[id];
	var partial_mark_string = id_string + '_partial_mark';
	var partial_element = $(partial_mark_string)[0];
	if (partial_element.value){
		partial_marks[id] = parseFloat(partial_element.value);
	}else {
		partial_marks[id] = 0;
		partial_element.value = 0;
	}
	update_total();
}

function handle_comments_changes(id){
	var id_string = '#' + ids[id];
	var comments_string = id_string + '_comments';
	var comments_element = $(comments_string);
	if (comments_element.val() === undefined){
		comments[id] = "";
	}else{
		comments[id] = comments_element.val();
	}
}

function handle_part_changes(id){

	var part_element = $(parts_id[id])[0];
	if (!part_element.checked){
		checked[ids.length+id-parts_id.length] = "";
	}else{
		checked[ids.length+id-parts_id.length] = "checked";
	}
	toggle_marks(id);
	update_total();
}


function toggle_marks(id){
	var part_element = $(parts_id[id])[0];
	var enabled = part_element.checked;
	if (id === 0){
		for (var i = 0; i < 6; ++i){
			var id_string = '#' + ids[i];
			var cur_elem = $(id_string);
			if (!cur_elem.checked && !enabled){
				cur_elem.prop("checked", true);
			}
			if (enabled){
				$(id_string).prop("disabled", false);
				$(id_string).click();
			}else{
				$(id_string).click();
				$(id_string).prop("disabled", true);
			}

		}

	} else if ( id === 1){
		for (var i = 6; i < current_marks.length; ++i){
			var id_string = '#' + ids[i];
			var cur_elem = $(id_string);
			if (!cur_elem.checked && !enabled){
				cur_elem.prop("checked", true);
			}
			if (enabled){
				$(id_string).prop("disabled", false);
				$(id_string).click();
			}else{
				$(id_string).click();
				$(id_string).prop("disabled", true);
			}
		}
	}
}

var total = 0;
function update_total(){
	total = current_marks.reduce( (a,b) => a + b, 0) + partial_marks.reduce( (a, b) => a + b, 0);

	total = Math.ceil(total);

	$('#total_mark_top')[0].innerHTML = total.toString();
	$('#total_mark_bottom')[0].innerHTML = total.toString();
}

function construct_string(){
	return `<style>

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

		.comment{
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
			<th colspan=3 class="category">Lab 4 (links for all 2 parts)</th>
			<th class="p_back" colspan=2>Comments</th>
		</tr>
		<tr>
			<td>Part 1 (40%):</td>
			<td><input type="checkbox" id="p1" ${checked[14]} disabled></td>
			<td class="comment" colspan=4>${comments[14]}</td>
		</tr>

		<tr>
			<td>Part 2 (60%):</td>
			<td><input type="checkbox" id="p2" ${checked[15]} disabled></td>
			<td class="comment" colspan=4>${comments[15]}</td>
		</tr>


	</table>


	<br>
	<br>
	<h1>Part 1 (40%)</h1>
	<br>

	<table class="required_table">
		<tr>
			<th colspan=3 class="p_back">Criteria</th>
			<th class="p_back">Partial Grade</th>
			<th class="p_back">Comments</th>
		</tr>

		<tr>
			<td class="wrap4">At least 6 images. (10)</td>
			<td><input type="checkbox" id="six" ${checked[0]} disabled></td>
			<td id="six_mark">${current_marks[0].toString()}</td>
			<td><input id="six_partial_mark" tyep="number" value=${partial_marks[0].toString()} step="any" min="-10" max="10"></td>
			<td class="comment">${comments[0]}</td>
		</tr>

		<tr>
			<td class="wrap4">Slideshow loops properly. (10)</td>
			<td><input type="checkbox" id="loop" ${checked[1]} disabled></td>
			<td id="loop_mark">${current_marks[1].toString()}</td>
			<td><input id="loop_partial_mark" tyep="number" value=${partial_marks[1].toString()} step="any" min="-10" max="10"></td>
			<td class="comment">${comments[1]}</td>
		</tr>

		<tr>
			<td class="wrap4">"h1" heading is changed to the name of the person in the image. (10)</td>
			<td><input type="checkbox" id="name" ${checked[2]} disabled></td>
			<td id="name_mark">${current_marks[2].toString()}</td>
			<td><input id="name_partial_mark" tyep="number" value=${partial_marks[2].toString()} step="any" min="-10" max="10"></td>
			<td class="comment">${comments[2]}</td>
		</tr>

		<tr>
			<td class="wrap4">Body background changed. (3)</td>
			<td><input type="checkbox" id="background" ${checked[3]} disabled></td>
			<td id="background_mark">${current_marks[3].toString()}</td>
			<td><input id="background_partial_mark" tyep="number" value=${partial_marks[3].toString()} step="any" min="-3" max="3"></td>
			<td class="comment">${comments[3]}</td>
		</tr>

		<tr>
			<td class="wrap4">Border around the images. (3)</td>
			<td><input type="checkbox" id="border" ${checked[4]} disabled></td>
			<td id="border_mark">${current_marks[4].toString()}</td>
			<td><input id="border_partial_mark" tyep="number" value=${partial_marks[4].toString()} step="any" min="-3" max="3"></td>
			<td class="comment">${comments[4]}</td>
		</tr>

		<tr>
			<td class="wrap4">Font changed/used. (4)</td>
			<td><input type="checkbox" id="font" ${checked[5]} disabled></td>
			<td id="font_mark">${current_marks[5].toString()}</td>
			<td><input id="font_partial_mark" tyep="number" value=${partial_marks[5].toString()} step="any" min="-4" max="4"></td>
			<td class="comment">${comments[5]}</td>
		</tr>

	</table>

	<br>
	<br>
	<h1>Part 2 (60%)</h1>
	<br>

	<table class="required_table">
		<tr>
			<th colspan=3 class="p_back">Criteria</th>
			<th class="p_back">Partial Grade</th>
			<th class="p_back">Comments</th>
		</tr>


		<tr>
			<td class="wrap4">At least 6 playable videos. (12)</td>
			<td><input type="checkbox" id="videos" ${checked[6]} disabled></td>
			<td id="videos_mark">${current_marks[6].toString()}</td>
			<td><input id="videos_partial_mark" tyep="number" value=${partial_marks[6].toString()} step="any" min="-12" max="12"></td>
			<td class="comment">${comments[6]}</td>
		</tr>

		<tr>
			<td class="wrap4">title changed in videos.js (document.title =""). (3)</td>
			<td><input type="checkbox" id="title" ${checked[7]} disabled></td>
			<td id="title_mark">${current_marks[7].toString()}</td>
			<td><input id="title_partial_mark" tyep="number" value=${partial_marks[7].toString()} step="any" min="-3" max="3"></td>
			<td class="comment">${comments[7]}</td>
		</tr>

		<tr>
			<td class="wrap4">Changed the contents of "h1" in videos.js. (3)</td>
			<td><input type="checkbox" id="h1" ${checked[8]} disabled></td>
			<td id="h1_mark">${current_marks[8].toString()}</td>
			<td><input id="h1_partial_mark" tyep="number" value=${partial_marks[8].toString()} step="any" min="-3" max="3"></td>
			<td class="comment">${comments[8]}</td>
		</tr>

		<tr>
			<td class="wrap4">Changed the name of the songs for the drop-down option in videos.js. (6)</td>
			<td><input type="checkbox" id="dropdown" ${checked[9]} disabled></td>
			<td id="dropdown_mark">${current_marks[9].toString()}</td>
			<td><input id="dropdown_partial_mark" tyep="number" value=${partial_marks[9].toString()} step="any" min="-6" max="6"></td>
			<td class="comment">${comments[9]}</td>
		</tr>

		<tr>
			<td class="wrap4">next function works correctly. (15)</td>
			<td><input type="checkbox" id="next" ${checked[10]} disabled></td>
			<td id="next_mark">${current_marks[10].toString()}</td>
			<td><input id="next_partial_mark" tyep="number" value=${partial_marks[10].toString()} step="any" min="-15" max="15"></td>
			<td class="comment">${comments[10]}</td>
		</tr>

		<tr>
			<td class="wrap4">added a new button "Prev" in videos.html: (3)</td>
			<td><input type="checkbox" id="prev" ${checked[11]} disabled></td>
			<td id="prev_mark">${current_marks[11].toString()}</td>
			<td><input id="prev_partial_mark" tyep="number" value=${partial_marks[11].toString()} step="any" min="-3" max="3"></td>
			<td class="comment">${comments[11]}</td>
		</tr>

		<tr>
			<td class="wrap4">onclick funtion for the prev button is set to the previous function inside the initialize function. (3)</td>
			<td><input type="checkbox" id="wire" ${checked[12]} disabled></td>
			<td id="wire_mark">${current_marks[12].toString()}</td>
			<td><input id="wire_partial_mark" tyep="number" value=${partial_marks[12].toString()} step="any" min="-3" max="3"></td>
			<td class="comment">${comments[12]}</td>
		</tr>

		<tr>
			<td class="wrap4">previous function works correctly. (15)</td>
			<td><input type="checkbox" id="previous" ${checked[13]} disabled></td>
			<td id="previous_mark">${current_marks[13].toString()}</td>
			<td><input id="previous_partial_mark" tyep="number" value=${partial_marks[13].toString()} step="any" min="-15" max="15"></td>
			<td class="comment">${comments[13]}</td>
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
	`
}

window.onload = initialize;