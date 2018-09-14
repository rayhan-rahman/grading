var current_marks = [0,  2, 4, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,  0, 1, 2, 1, 2, 4, 4, 4, 4, 8, 10, 10, 4, 4, 3, 3, 3, 3];
var full_marks =    [-5, 2, 4, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, -5, 1, 2, 1, 2, 4, 4, 4, 4, 8, 10, 10, 4, 4, 3, 3, 3, 3];
var partial_marks = [];
var checked = [];
var comments = [];
var ids = ['p1_st',
           'width',
           'bg',
           'p1_gf1i',
           'p1_gf1u',
           'p1_gf2i',
           'p1_gf2u',
           'alignment',
           'color',
           'im1p',
           'im1m',
           'im1b',
           'im2p',
           'im2m',
           'im2b',
           'im3p',
           'im3m',
           'im3b',
           'yp',
           'ym',
           'yb',
           'aid',
           'p2_st',
           'p2_gf1i',
           'p2_gf1u',
           'p2_gf2i',
           'p2_gf2u',
           'header_grid_area',
           'sidebar_grid_area',
           'content_grid_area',
           'footer_grid_area',
           'grid_layout',
           'large_images',
           'small_images',
           'border',
           'caption',
           'part3_title',
           'part3_h1',
           'font_3',
           'font_3_used',
           'p1',
           'p2',
           'p3'];

var parts_id = ['#p1', '#p2', '#p3'];

function initialize(){
	for (var i = 0; i < ids.length; ++i){
		partial_marks.push(0);
		checked.push("checked");
		comments.push("");
	}

	checked[0] = "";
	checked[22] = "";

	for (var i = 0; i < 3; ++i){
		var part_element = $(parts_id[i]);
		(function(j){
			part_element.change( function() {
				handle_part_changes(j);
			});
		})(i);
	}

	for (var i = 0; i < ids.length - 3; ++i){
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
		checked[ids.length+id-3] = "";
	}else{
		checked[ids.length+id-3] = "checked";
	}
	toggle_marks(id);
	update_total();
}


function toggle_marks(id){
	var part_element = $(parts_id[id])[0];
	var enabled = part_element.checked;
	if (id === 0){
		for (var i = 1; i < 22; ++i){
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
		id_string = '#' + ids[0];
		$(id_string).prop("checked", false);
		var mark_string = id_string + '_mark';
		$(mark_string)[0].innerHTML = "0";
		current_marks[0] = 0;
		if (enabled){
	    	$(id_string).prop("disabled", false);
	    }else{
	    	$(id_string).prop("disabled", true);
	    }
	} else if ( id === 1){
		for (var i = 23; i < 32; ++i){
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
		id_string = '#' + ids[22];
		$(id_string).prop("checked", false);
		var mark_string = id_string + '_mark';
		$(mark_string)[0].innerHTML = "0";
		current_marks[22] = 0;
		if (enabled){
	    	$(id_string).prop("disabled", false);
	    }else{
	    	$(id_string).prop("disabled", true);
	    }
	} else if (id === 2){
		for (var i = 32; i < 40; ++i){
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
			<th colspan=3 class="category">Lab 3 (links for all 3 parts)</th>
			<th class="p_back" colspan=2>Comments</th>
		</tr>
		<tr>
			<td>Part 1 (30%):</td>
			<td><input type="checkbox" id="p1" checked></td>
			<td class="comment" colspan=4>${comments[40]}</td>
		</tr>

		<tr>
			<td>Part 2 (30%):</td>
			<td><input type="checkbox" id="p2" checked></td>
			<td class="comment" colspan=4>${comments[41]}</td>
		</tr>

		<tr>
			<td>Part 3 (40%):</td>
			<td><input type="checkbox" id="p3" checked></td>
			<td class="comment" colspan=4>${comments[42]}</td>
		</tr>

	</table>


	<br>
	<br>
	<h1>Part 1 (30%)</h1>
	<br>

	<table class="required_table">
		<tr>
			<th colspan=3 class="p_back">Criteria</th>
			<th class="p_back">Partial Grade</th>
			<th class="p_back">Comments</th>
		</tr>

		<tr>
			<td class="wrap4">Still contains inline style elements. (-5)</td>
			<td><input type="checkbox" id="p1_st" ${checked[0]} disabled></td>
			<td id="p1_st_mark">${current_marks[0].toString()}</td>
			<td><input id="p1_st_partial_mark" tyep="number" value=${partial_marks[0].toString()} step="any" min="-5" max="0"></td>
			<td class="comment">${comments[0]}</td>
		</tr>

		<tr>
			<td class="wrap4">Fixed body width (2)</td>
			<td><input type="checkbox" id="width" ${checked[1]} disabled></td>
			<td id="width_mark">${current_marks[1].toString()}</td>
			<td><input id="width_partial_mark" tyep="number" value=${partial_marks[1].toString()} step="any" min="-2" max="2"></td>
			<td class="comment">${comments[1]}</td>
		</tr>

		<tr>
			<td class="wrap4">Fixed body background (4)</td>
			<td><input type="checkbox" id="bg" ${checked[2]} disabled></td>
			<td id="bg_mark">${current_marks[2].toString()}</td>
			<td><input id="bg_partial_mark" tyep="number" value=${partial_marks[2].toString()} step="any" min="-4" max="4"></td>
			<td class="comment">${comments[2]}</td>
		</tr>

		<tr>
			<td class="wrap4">Google Font 1 imported/linked properly in style tag(1)</td>
			<td><input type="checkbox" id="p1_gf1i" ${checked[3]} disabled></td>
			<td id="p1_gf1i_mark">${current_marks[3].toString()}</td>
			<td><input id="p1_gf1i_partial_mark" tyep="number" value=${partial_marks[3].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[3]}</td>
		</tr>

		<tr>
			<td class="wrap4">Google Font 1 used/applied on some HTML element (2)</td>
			<td><input type="checkbox" id="p1_gf1u" ${checked[4]} disabled></td>
			<td id="p1_gf1u_mark">${current_marks[4].toString()}</td>
			<td><input id="p1_gf1u_partial_mark" tyep="number" value=${partial_marks[4].toString()} step="any" min="-2" max="2"></td>
			<td class="comment">${comments[4]}</td>
		</tr>

		<tr>
			<td class="wrap4">Google Font 2 imported/linked properly in style tag(1)</td>
			<td><input type="checkbox" id="p1_gf2i" ${checked[5]} disabled></td>
			<td id="p1_gf2i_mark">${current_marks[5].toString()}</td>
			<td><input id="p1_gf2i_partial_mark" tyep="number" value=${partial_marks[5].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[5]}</td>
		</tr>

		<tr>
			<td class="wrap4">Google Font 2 used/applied on some HTML element (2)</td>
			<td><input type="checkbox" id="p1_gf2u" ${checked[6]} disabled></td>
			<td id="p1_gf2u_mark">${current_marks[6].toString()}</td>
			<td><input id="p1_gf2u_partial_mark" tyep="number" value=${partial_marks[6].toString()} step="any" min="-2" max="2"></td>
			<td class="comment">${comments[6]}</td>
		</tr>

		<tr>
			<td class="wrap4">Text alignment (2)</td>
			<td><input type="checkbox" id="alignment" ${checked[7]} disabled></td>
			<td id="alignment_mark">${current_marks[7].toString()}</td>
			<td><input id="alignment_partial_mark" tyep="number" value=${partial_marks[7].toString()} step="any" min="-2" max="2"></td>
			<td class="comment">${comments[7]}</td>
		</tr>

		<tr>
			<td class="wrap4">Color of text (2)</td>
			<td><input type="checkbox" id="color" ${checked[8]} disabled></td>
			<td id="color_mark">${current_marks[8].toString()}</td>
			<td><input id="color_partial_mark" tyep="number" value=${partial_marks[8].toString()} step="any" min="-2" max="2"></td>
			<td class="comment">${comments[8]}</td>
		</tr>

		<tr>
			<td class="wrap4">Image 1 padding (1)</td>
			<td><input type="checkbox" id="im1p" ${checked[9]} disabled></td>
			<td id="im1p_mark">${current_marks[9].toString()}</td>
			<td><input id="im1p_partial_mark" tyep="number" value=${partial_marks[9].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[9]}</td>
		</tr>

		<tr>
			<td class="wrap4">Image 1 margin (1)</td>
			<td><input type="checkbox" id="im1m" ${checked[10]} disabled></td>
			<td id="im1m_mark">${current_marks[10].toString()}</td>
			<td><input id="im1m_partial_mark" tyep="number" value=${partial_marks[10].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[10]}</td>
		</tr>

		<tr>
			<td class="wrap4">Image 1 border (1)</td>
			<td><input type="checkbox" id="im1b" ${checked[11]} disabled></td>
			<td id="im1b_mark">${current_marks[11].toString()}</td>
			<td><input id="im1b_partial_mark" tyep="number" value=${partial_marks[11].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[11]}</td>
		</tr>

		<tr>
			<td class="wrap4">Image 2 padding (1)</td>
			<td><input type="checkbox" id="im2p" ${checked[12]} disabled></td>
			<td id="im2p_mark">${current_marks[12].toString()}</td>
			<td><input id="im2p_partial_mark" tyep="number" value=${partial_marks[12].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[12]}</td>
		</tr>

		<tr>
			<td class="wrap4">Image 2 margin (1)</td>
			<td><input type="checkbox" id="im2m" ${checked[13]} disabled></td>
			<td id="im2m_mark">${current_marks[13].toString()}</td>
			<td><input id="im2m_partial_mark" tyep="number" value=${partial_marks[13].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[13]}</td>
		</tr>

		<tr>
			<td class="wrap4">Image 2 border (1)</td>
			<td><input type="checkbox" id="im2b" ${checked[14]} disabled></td>
			<td id="im2b_mark">${current_marks[14].toString()}</td>
			<td><input id="im2b_partial_mark" tyep="number" value=${partial_marks[14].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[14]}</td>
		</tr>


		<tr>
			<td class="wrap4">Image 3 padding (1)</td>
			<td><input type="checkbox" id="im3p" ${checked[15]} disabled></td>
			<td id="im3p_mark">${current_marks[15].toString()}</td>
			<td><input id="im3p_partial_mark" tyep="number" value=${partial_marks[15].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[15]}</td>
		</tr>

		<tr>
			<td class="wrap4">Image 3 margin (1)</td>
			<td><input type="checkbox" id="im3m" ${checked[16]} disabled></td>
			<td id="im3m_mark">${current_marks[16].toString()}</td>
			<td><input id="im3m_partial_mark" tyep="number" value=${partial_marks[16].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[16]}</td>
		</tr>

		<tr>
			<td class="wrap4">Image 3 border (1)</td>
			<td><input type="checkbox" id="im3b" ${checked[17]} disabled></td>
			<td id="im3b_mark">${current_marks[17].toString()}</td>
			<td><input id="im3b_partial_mark" tyep="number" value=${partial_marks[17].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[17]}</td>
		</tr>

		<tr>
			<td class="wrap4">Youtube video padding (1)</td>
			<td><input type="checkbox" id="yp" ${checked[18]} disabled></td>
			<td id="yp_mark">${current_marks[18].toString()}</td>
			<td><input id="yp_partial_mark" tyep="number" value=${partial_marks[18].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[18]}</td>
		</tr>

		<tr>
			<td class="wrap4">Youtube video margin (1)</td>
			<td><input type="checkbox" id="ym" ${checked[19]} disabled></td>
			<td id="ym_mark">${current_marks[19].toString()}</td>
			<td><input id="ym_partial_mark" tyep="number" value=${partial_marks[19].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[19]}</td>
		</tr>

		<tr>
			<td class="wrap4">Youtube video border (1)</td>
			<td><input type="checkbox" id="yb" ${checked[20]} disabled></td>
			<td id="yb_mark">${current_marks[20].toString()}</td>
			<td><input id="yb_partial_mark" tyep="number" value=${partial_marks[20].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[20]}</td>
		</tr>

		<tr>
			<td class="wrap4">At least one ID (2)</td>
			<td><input type="checkbox" id="aid" ${checked[21]} disabled></td>
			<td id="aid_mark">${current_marks[21].toString()}</td>
			<td><input id="aid_partial_mark" tyep="number" value=${partial_marks[21].toString()} step="any" min="-2" max="2"></td>
			<td class="comment">${comments[21]}</td>
		</tr>

	</table>


	<br>
	<br>
	<h1>Part 2 (30%)</h1>
	<br>

	<table class="required_table">
		<tr>
			<th colspan=3 class="p_back">Criteria</th>
			<th class="p_back">Partial Grade</th>
			<th class="p_back">Comments</th>
		</tr>

		<tr>
			<td class="wrap4">Still contains inline style elements. (-5)</td>
			<td><input type="checkbox" id="p2_st" ${checked[22]} disabled></td>
			<td id="p2_st_mark">${current_marks[22].toString()}</td>
			<td><input id="p2_st_partial_mark" tyep="number" value=${partial_marks[22].toString()} step="any" min="-6" max="0"></td>
			<td class="comment">${comments[22]}</td>
		</tr>

		<tr>
			<td class="wrap4">Google Font 1 imported/linked properly in style tag(1)</td>
			<td><input type="checkbox" id="p2_gf1i" ${checked[23]} disabled></td>
			<td id="p2_gf1i_mark">${current_marks[23].toString()}</td>
			<td><input id="p2_gf1i_partial_mark" tyep="number" value=${partial_marks[23].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[23]}</td>
		</tr>

		<tr>
			<td class="wrap4">Google Font 1 used/applied on some HTML element (2)</td>
			<td><input type="checkbox" id="p2_gf1u" ${checked[24]} disabled></td>
			<td id="p2_gf1u_mark">${current_marks[24].toString()}</td>
			<td><input id="p2_gf1u_partial_mark" tyep="number" value=${partial_marks[24].toString()} step="any" min="-2" max="2"></td>
			<td class="comment">${comments[24]}</td>
		</tr>

		<tr>
			<td class="wrap4">Google Font 2 imported/linked properly in style tag(1)</td>
			<td><input type="checkbox" id="p2_gf2i" ${checked[25]} disabled></td>
			<td id="p2_gf2i_mark">${current_marks[25].toString()}</td>
			<td><input id="p2_gf2i_partial_mark" tyep="number" value=${partial_marks[25].toString()} step="any" min="-1" max="1"></td>
			<td class="comment">${comments[25]}</td>
		</tr>

		<tr>
			<td class="wrap4">Google Font 2 used/applied on some HTML element (2)</td>
			<td><input type="checkbox" id="p2_gf2u" ${checked[26]} disabled></td>
			<td id="p2_gf2u_mark">${current_marks[26].toString()}</td>
			<td><input id="p2_gf2u_partial_mark" tyep="number" value=${partial_marks[26].toString()} step="any" min="-2" max="2"></td>
			<td class="comment">${comments[26]}</td>
		</tr>

		<tr>
			<td class="wrap4">Header grid area (color, background, etc.) (4)</td>
			<td><input type="checkbox" id="header_grid_area" ${checked[27]} disabled></td>
			<td id="header_grid_area_mark">${current_marks[27].toString()}</td>
			<td><input id="header_grid_area_partial_mark" tyep="number" value=${partial_marks[27].toString()} step="any" min="-4" max="4"></td>
			<td class="comment">${comments[27]}</td>
		</tr>

		<tr>
			<td class="wrap4">Sidebar grid area (color, background, etc.) (4)</td>
			<td><input type="checkbox" id="sidebar_grid_area" ${checked[28]} disabled></td>
			<td id="sidebar_grid_area_mark">${current_marks[28].toString()}</td>
			<td><input id="sidebar_grid_area_partial_mark" tyep="number" value=${partial_marks[28].toString()} step="any" min="-4" max="4"></td>
			<td class="comment">${comments[28]}</td>
		</tr>

		<tr>
			<td class="wrap4">Content grid area (color, background, etc.) (4)</td>
			<td><input type="checkbox" id="content_grid_area" ${checked[29]} disabled></td>
			<td id="content_grid_area_mark">${current_marks[29].toString()}</td>
			<td><input id="content_grid_area_partial_mark" tyep="number" value=${partial_marks[29].toString()} step="any" min="-4" max="4"></td>
			<td class="comment">${comments[29]}</td>
		</tr>

		<tr>
			<td class="wrap4">Footer grid area (color, background, etc.) (4)</td>
			<td><input type="checkbox" id="footer_grid_area" ${checked[30]} disabled></td>
			<td id="footer_grid_area_mark">${current_marks[30].toString()}</td>
			<td><input id="footer_grid_area_partial_mark" tyep="number" value=${partial_marks[30].toString()} step="any" min="-4" max="4"></td>
			<td class="comment">${comments[30]}</td>
		</tr>

		<tr>
			<td class="wrap4">Grid columns to define layout (e.g., "wrapper" class in the example) (8)</td>
			<td><input type="checkbox" id="grid_layout" ${checked[31]} disabled></td>
			<td id="grid_layout_mark">${current_marks[31].toString()}</td>
			<td><input id="grid_layout_partial_mark" tyep="number" value=${partial_marks[31].toString()} step="any" min="-8" max="8"></td>
			<td class="comment">${comments[31]}</td>
		</tr>



	</table>

	<br>
	<br>

	<br>
	<br>
	<h1>Part 3 (40%)</h1>
	<br>

	<table class="required_table">
		<tr>
			<th colspan=3 class="p_back">Criteria</th>
			<th class="p_back">Partial Grade</th>
			<th class="p_back">Comments</th>
		</tr>

		<tr>
			<td class="wrap4">Used 8 to 12 large images. (10)</td>
			<td><input type="checkbox" id="large_images" ${checked[32]} disabled></td>
			<td id="large_images_mark">${current_marks[32].toString()}</td>
			<td><input id="large_images_partial_mark" tyep="number" value=${partial_marks[32].toString()} step="any" min="-10" max="10"></td>
			<td class="comment">${comments[32]}</td>
		</tr>

		<tr>
			<td class="wrap4">Small images are 75x75 pixels. (10)</td>
			<td><input type="checkbox" id="small_images" ${checked[33]} disabled></td>
			<td id="small_images_mark">${current_marks[33].toString()}</td>
			<td><input id="small_images_partial_mark" tyep="number" value=${partial_marks[33].toString()} step="any" min="-10" max="10"></td>
			<td class="comment">${comments[33]}</td>
		</tr>

		<tr>
			<td class="wrap4">Changed the border of the large images. (4)</td>
			<td><input type="checkbox" id="border" ${checked[34]} disabled></td>
			<td id="border_mark">${current_marks[34].toString()}</td>
			<td><input id="border_partial_mark" tyep="number" value=${partial_marks[34].toString()} step="any" min="-6" max="0"></td>
			<td class="comment">${comments[34]}</td>
		</tr>

		<tr>
			<td class="wrap4">Changed caption (4)</td>
			<td><input type="checkbox" id="caption" ${checked[35]} disabled></td>
			<td id="caption_mark">${current_marks[35].toString()}</td>
			<td><input id="caption_partial_mark" tyep="number" value=${partial_marks[35].toString()} step="any" min="-4" max="4"></td>
			<td class="comment">${comments[35]}</td>
		</tr>

		<tr>
			<td class="wrap4">Changed title (3)</td>
			<td><input type="checkbox" id="part3_title" ${checked[36]} disabled></td>
			<td id="part3_title_mark">${current_marks[36].toString()}</td>
			<td><input id="part3_title_partial_mark" tyep="number" value=${partial_marks[36].toString()} step="any" min="-3" max="3"></td>
			<td class="comment">${comments[36]}</td>
		</tr>

		<tr>
			<td class="wrap4">Changed content of h1 tag in the body (3)</td>
			<td><input type="checkbox" id="part3_h1" ${checked[37]} disabled></td>
			<td id="part3_h1_mark">${current_marks[37].toString()}</td>
			<td><input id="part3_h1_partial_mark" tyep="number" value=${partial_marks[37].toString()} step="any" min="-3" max="3"></td>
			<td class="comment">${comments[37]}</td>
		</tr>


		<tr>
			<td class="wrap4">Imported/linked Google font (3)</td>
			<td><input type="checkbox" id="font_3" ${checked[38]} disabled></td>
			<td id="font_3_mark">${current_marks[38].toString()}</td>
			<td><input id="font_3_partial_mark" tyep="number" value=${partial_marks[38].toString()} step="any" min="-3" max="3"></td>
			<td class="comment">${comments[38]}</td>
		</tr>

		<tr>
			<td class="wrap4">Applied/Used Google font (3)</td>
			<td><input type="checkbox" id="font_3_used" ${checked[39]} disabled></td>
			<td id="font_3_used_mark">${current_marks[39].toString()}</td>
			<td><input id="font_3_used_partial_mark" tyep="number" value=${partial_marks[39].toString()} step="any" min="-3" max="3"></td>
			<td class="comment">${comments[39]}</td>
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

window.onload = initialize;