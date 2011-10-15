// Another attempt to control data //
$(function() {
// initialize variables //
	var myGoalType = "Race Type";
		/* 
		DOES THIS WORK NOW?
		one of 
		Race Type
		Distance
		Do More
		Lose Weight
		*/
	var myGoal = "I will win everything!";
	var myDate = new Date();	
// create data object //	
	var data = {
	goal: myGoal,
	goalType: myGoalType,
	date: myDate
	}
// test data object	
	$("#myGoalType").html(data.goalType);
	$("#myGoal").html(data.goal);
	$("#myDate").html(data.date);  // 1st two work but this one doesn't. why? //

// end data object //

// profile on ready //
$(".settingspane>section>section").hide();
$("#menu .settingsmenu li:first").addClass("selected");	
$("#maindetails>section:first").addClass("visible").slideDown("slow");
	
// end profile on ready //

// Mouse Outside Click code (for popup box)
var mouse_is_inside = false;

$('div[id$="_popup"]').hover(function(){ 
        mouse_is_inside=true;
    }, function(){ 
        mouse_is_inside=false; 
    });

$("body").mouseup(function(){ 
		
       if(!mouse_is_inside) {
             $('div[id$="_popup"]').hide();   
             // this gets in the way of the button turning off.   
			 $('div[id$="_popup"]').parent().find('.eventtype').removeClass('highlight');
				
       } 
    });

// check box counter functions //

// counts total checkboxes for Do More page //
function count8Boxes() {
	var n = $("#row8").find("input[type=checkbox]").length;
		var ncheck = $("#row8").find("input:checked").length;
if (n == ncheck) {
//  alert("All Row8 Boxes are checked.");
  $("#more_all").addClass('active');
  } else {
  $("#more_all").removeClass('active');
  }
}

// checks all the Do More boxes, from the Check All button //
$("#more_all").click(function(e) {
		var n2 = $("#row8").find("input[type=checkbox]").length;
		var n2check = $("#row8").find("input:checked").length;
		if (n2 == n2check) { // already all checked //
				 $("#row8").find(':checkbox').attr('checked', false);
		  } else {
		 		$("#row8").find(':checkbox').attr('checked', 'checked');
		 }
		 count8Boxes();	
		 countEachBox("#row8");	 
		 });

// checks all the Do More boxes, from the Check All button //
$("#distance_all").click(function(e) {
		var n2 = $("#row5").find("input[type=checkbox]").length;
		var n2check = $("#row5").find("input:checked").length;
		if (n2 == n2check) { // already all checked //
				 $("#row5").find(':checkbox').attr('checked', false);
		  } else {
		 		$("#row5").find(':checkbox').attr('checked', 'checked');
		 }
		 count5Boxes();	
		 countEachBox("#row5");	 
		 });

// counts total checkboxes for Distance Goal page //
function count5Boxes() {
	var n5 = $("#row5").find("input[type=checkbox]").length;
		var n5check = $("#row5").find("input:checked").length;
if (n5 == n5check) {
//  alert("All Row5 Boxes are checked.");
  $("#distance_all").addClass('active');
  } else {
  $("#distance_all").removeClass('active');
  }
}

// on checkbox, see if ANY checkboxes in this popup are on
// Looks if any boxes in the popup are checked, then lights up activity //
function countThisBox($which_box) {
	// calculate popup name //
	// more_run_1, minus last two chars, plus "_popup"
	var whichID = $which_box.slice(0, -2);
//	alert("Which Box: " + $which_box + " / whichID: " + whichID);
	var nThisBox = $("#" + whichID + "_popup").find("input:checked").length;
	if (nThisBox > 0) {
		$("#"+whichID).addClass("active");
	} else {
		$("#"+whichID).removeClass("active");
	}
}

// This one counts EVERY box individually //
 function countEachBox($which_row) {
 	 	$($which_row + " div").each(function() {
 		whichID = $(this).attr("id");
 	 	var nThisBox = $("#" + whichID + "_popup").find("input:checked").length;
 		if (nThisBox > 0) {
 				$("#"+whichID).addClass("active");
 		} else {
 				$("#"+whichID).removeClass("active");
 		}
 		});
 }
 
 
// This runs whenever a checkbox is checked/unchecked  //
// Calculates IDs, then then calls the Select All checks //
//
// These are for train.html, hopefully won't mess up other pages
// might need its own js file
//
	$(":checkbox").click(function(e) {
			var $which_box = null; 
			$which_box = $(this).attr('id'); 				
			countThisBox($which_box);
			count8Boxes();
			count5Boxes();
			});
	
function popup($split, $goalType) {
/* creates the popup name by prepending the button's id */
	if ($goalType > "") {
			$("#" + $goalType + "_popup").toggle();		
	
// tests the check boxes 
	var $which_box = ($goalType + "__");
	countThisBox($which_box);
	count8Boxes();
	count5Boxes();
	}			
}


$(function() {
	// function to automatically highlight "#firstfield# in form //
	if ( $('#firstfield').is(':visible')){	
		$("#firstfield").focus();
	}
	
	// GLOBALLY clears input when clicking into form fields. If you will be populating fields from the database, you might want to remove this... //
	var el = $('input[type=text],input[type=password],textarea');
	    el.focus(function(e) {
	        if (e.target.value == e.target.defaultValue)
	            e.target.value = '';
	    });
	    el.blur(function(e) {
	        if (e.target.value == '')
	            e.target.value = e.target.defaultValue;
	    });
//  


	if (($.browser.msie && parseInt($.browser.version) < 9)) {
		
		
		//document.createStyleSheet("css/ie8.css");
		$(".circleIcon[title='Thunderstorms']").css("clear", "left");

		
		// Fake placeholder values
		$("textarea,input").each(function(i, input) {
			$input = $(input);
			if ($input.attr("placeholder") != undefined && $input.attr("placeholder") != "") {
				$input.val($input.attr("placeholder"));
				$input.bind("focus", $.proxy(function() {
					if (this.val() == this.attr("placeholder"))
						this.val("");
				}, $input));
				$input.bind("blur", $.proxy(function() {
					if (this.val() == "") {
						this.val(this.attr("placeholder"));
					}
				}, $input));
			}
		});
	}

//  Used on Create Account page //
$(".accountButton").bind("click", function(e) {
		var $go2url = null; 
		$go2url = $(this).attr('id'); 
//		alert($go2url);
		dropsheet($(this), $go2url);  
});

// Used on Add Workout and train pages //
	$(".icon").bind("click", function(e) {
			var $go2url = null; 
			$go2url = $(this).attr('id'); 	
	  		activate($(this), $go2url);
	});

//used on profile page //
$("#menu .settingsmenu li").bind("click", function(e) {
	slider($(this));
});

// Used on Goal Type //
$(".typeofgoal").bind("click", function(e) {
		var $typeOfGoal = null; 
		$typeOfGoal = $(this).attr('id'); 
//  	alert($typeOfGoal);
		gotoGoal($(this), $typeOfGoal);  
		
});

// Used on Goal Type and Do More pages //
$(".split8").bind("click", function(e) {
		var $goalType = null; 
		$goalType = $(this).attr('id'); 
//		alert($(this) +"/"+ $goalType);
		popup($(this), $goalType);  
});
$(".split5").bind("click", function(e) {
		var $goalType = null; 
		$goalType = $(this).attr('id'); 
//		alert($goalType);
		popup($(this), $goalType);  
});
$(".stopwatch").bind("click", function(e) {
		var $goalType = null; 
		$goalType = $(this).attr('id'); 
//		alert($goalType);
		popup($(this), $goalType);  
});

//Calendar popups //
$(".event").bind("click", function(e) {
		var $goalType = null; 
		$goalType = $(this).attr('id'); 
		var $highlight = '#' + $goalType + ' .eventtype';
		$( $highlight ).addClass('highlight');
		popup($(this), $goalType);  
		
});

// popup closebox function //
$(".closebox").bind("click", function(e) {
	$(this).parent().hide();
	
	if ($(this).hasClass('closebox-calendar')) {
		$(this).parent().parent().find('.eventtype').removeClass('highlight');
	}
});

$("#stopwatch_popup>ul>img").bind("click", function(e) {
		var $targetTime = $("#stopwatch_popup #hrs").val()+":"+$("#stopwatch_popup #mins").val()+":"+$("#stopwatch_popup #secs").val();
		$("#target_time").val($targetTime);
		$("#stopwatch_popup").fadeOut();					
});

// dropdown_menu functions //
$(".dropdown").bind("click", function(e) {
	var $whichMenu = null; 
	$whichMenu = $(this).attr('id'); 
	$("#" + $whichMenu).toggleClass("clicked");
		$("#" + $whichMenu + "_menu").toggleClass("hidden");	
});


$("#weight_unit_menu li").bind("click", function(e) {
		var newUnit =  ($(this).attr("title"));
		updateMenu2($(this), newUnit);
});
			
$("#interval_menu li").bind("click", function(e) {
		var newInterval =  ($(this).attr("title"));
		updateMenu($(this), newInterval);
});
$("#distance_unit_menu li").bind("click", function(e) {
		var newUnit =  ($(this).attr("title"));
		updateMenu3($(this), newUnit);
});


// end dropdown_menu functions //

	$("#addmore_header").bind("click", showAddmore);

	$("#addmore").bind("webkitTransitionEnd transitionend", function() {
		if ($("#addmore").attr("style") == "") {
			$("#addmore_header").attr("style", "");
		}
	});
	
	$("#whatgoalwouldyoulike").focus(function(e) {
		$("#whatgoalwouldyoulike").addClass("goal_focus");
	});
	
// regular datepicker
	$("#date").datepicker({
		dateFormat : "DD, MM d, yy"
	});
	// this one is for the train page with multiple pickers: 
	$(".date").datepicker({
		dateFormat : "DD, MM d, yy"
	});
	
	// this one adds the calendar icon //
	$( "#date_icon" ).datepicker({
		dateFormat : "DD, MM d, yy"
			});
	// after date is selected, jump to the next page //
		$('#date_icon').change(function() {
		$(".whatgoal").hide();
		$(".goaltype").fadeIn(500);
		//	$(".whatgoal").delay(800).slideUp(500);
		//	$(".goaltype").delay(800).slideDown(500);
	});		
			

	$("#addMoodBtn").bind("click", function(e) {
		expandCircle($("#addMood"), 45, 20);
	});

	$("#addMood").bind("mouseleave", function(e) {
		contractCircle($("#addMood"), 20)
	});

	$("#addMood .circleIcon").bind("click", function(e) {
		$("#addMood.active").css("background-image", "url(" + e.target.src.replace("_white", "_pink") + ")");
		$("#addMoodBtn>img").attr("src", e.target.src.replace("_white", "_pink"));
		$("#addMoodBtn").addClass("selected");
	});

	$("#addWeatherBtn").bind("click", function(e) {
		expandCircle($("#addWeather"), 78, 40);
	});

	$("#addWeather").bind("mouseleave", function(e) {
		contractCircle($("#addWeather"), 40)
	});

	$("#addWeather .circleIcon").bind("click", function(e) {
		$("#addWeather.active").css("background-image", "url(" + e.target.src.replace("_white", "_pink") + ")");
		$("#addWeatherBtn>img").attr("src", e.target.src.replace("_white", "_pink"));
		$("#addWeatherBtn").addClass("selected");
	});

	$("#workoutdata .datafield input").bind("focus", function(e) {
		$(e.target).closest(".datafield").addClass("focused");
		$icon = $(e.target).closest(".datafield").find("img");
		$icon.attr("src", $icon.attr("src").replace("_inactive", "_active"));
	});

	$("#workoutdata .datafield input").bind("blur", function(e) {
		$(e.target).closest(".datafield").removeClass("focused");
		$icon = $(e.target).closest(".datafield").find("img");
		$icon.attr("src", $icon.attr("src").replace("_active", "_inactive"));
	});

	$("#addRouteBtn").bind("click", function(e) {
		openModal($("#addRouteModal"));
	});
	$("#addPhotoBtn").bind("click", function(e) {
		openModal($("#addPhotoModal"));
	});
	$("#addVideoBtn").bind("click", function(e) {
		openModal($("#addVideoModal"));
	});
	
	if( $("#goalfilter").length && $("#workoutfilter").length ) {
		$("#goalfilter").chosen();
		$("#workoutfilter").chosen();
		$(".chzn-container-single").addClass("chzn-container-single-nosearch");
	}
	
	if ( $("#dayfilter").length ) {
		$("#dayfilter").chosen();
		$(".chzn-container-single").addClass("chzn-container-single-nosearch");
	}

	// For design/testing
/* 	 if (location.hostname == "localhost") {
		$("#menu").addClass("addworkout");
		$("#detail").addClass("visible");
		showAddmore();
	}
*/
// more testing // 
/* Train States:
		.whatgoal
		.goaltype 		
 		.racegoal
 		.racegoalinfo
 		.distancegoalinfo
 		.domoregoalinfo
 		.loseweightgoalinfo
*/
// $(".whatgoal").addClass("hidden");
 // $(".domoregoalinfo").removeClass("hidden");
 // end testing code //
 
 
 // on ready :
 countEachBox("#row8");
 countEachBox("#row5");
 count8Boxes();
 count5Boxes();
});

//animate progress bars on profile page
	$(".meter > span").each(function() {
		$(this)
			.data("origWidth", $(this).width())
			.width(0)
			.animate({
				width: $(this).data("origWidth")
			}, 1200);
	});
});


function showAddmore() {
	$("#detail").addClass("expanded");
	$("#addmore_header").unbind("click");
	$("#addmore_header").bind("click", hideAddmore);
}

function hideAddmore() {
	$("#detail").removeClass("expanded");
	$("#addmore_header").unbind("click");
	$("#addmore_header").bind("click", showAddmore);
}

function activate($icon, $go2url) { 
// this one hides the main screen and brings out subscreen //
	if(typeof $go2url != 'undefined') {
		// training page > racegoalinfo //
		$(".racegoal").hide();
		$(".racegoalinfo").fadeIn();		
		} else {
		// workout page //
		$icon.addClass("active");
	$("#menu").addClass("addworkout");
	$("#detail").addClass("visible");
	$("#workoutname").focus();
	}
}

function slider($mEvent) {
	if( !$mEvent.is(".selected") ) {
		$("#menu .settingsmenu li").removeClass("selected");
		$mEvent.addClass("selected");
		$("#maindetails>section.visible").slideUp("slow", function(t) {
			$(this).removeClass("visible").hide();											  
			var activeTab = $mEvent.find("a").attr("href");
			$(activeTab).addClass("visible").slideDown("slow");
		});
	}
	return false;
}

function dropsheet($accountButton, $go2url) {
if ($go2url == "bia") {
		// for BIA login: //
		// this one fades the main screen and pushes down a smaller subscreen //
		$("#loginpane").fadeIn("slow");
		$("#blackbox").fadeIn("slow");
		$("#firstfield").focus();
}
else {
		// else for other logins, goes to the url (note that the element's ID is the middle of the url) //
		var fqurl = ("http://www." + $go2url + ".com") ;
		window.location.href = fqurl;
		}
}

function gotoGoal($this, $typeOfGoal) {
		if ($typeOfGoal == "race") {
		// race
			var myGoalType = "Race Goal";
			$(".goaltype").hide();
			$(".racegoal").fadeIn();			
				} 
		else if ($typeOfGoal == "distance") {
		//distance
			var myGoalType = "Distance Goal";
			$(".goaltype").hide();
			$(".distancegoalinfo").fadeIn();
		} else if ($typeOfGoal == "workout") {
		// workout
			var myGoalType = "Workout Goal";
			$(".goaltype").hide();
			$(".domoregoalinfo").fadeIn();
			
		} else if ($typeOfGoal == "weight") {
		// weight
			var myGoalType = "Lose Weight Goal";
			$(".goaltype").hide();
			$(".loseweightgoalinfo").fadeIn();
			}
}

function cancel() {
	$('#main').fadeOut('slow', function() {
 	 location.reload();
	});
}

// need to merge these into a single function // 

function updateMenu($menuItem, $newInterval)  {
		$("#interval_menu li").each(function(){ // turns everything off first //
			$("#interval_menu li").removeClass("selected");
		});	
	$menuItem.addClass("selected")
	 $("#interval_text").html($newInterval);
}
function updateMenu2($menuItem, $newUnit)  {
		$("#weight_unit_menu li").each(function(){ // turns everything off first //
			$("#weight_unit_menu li").removeClass("selected");
		});	
	$menuItem.addClass("selected")
	 $("#weight_unit_text").html($newUnit);
}
function updateMenu3($menuItem, $newUnit)  {
		$("#distance_unit_menu li").each(function(){ // turns everything off first //
			$("#distance_unit_menu li").removeClass("selected");
		});	
	$menuItem.addClass("selected")
	 $("#distance_unit_text").html($newUnit);
}


function setGoal() {
	$("#blackbox").fadeIn("slow");
	$("#goalset").fadeIn("slow");
}

function reset() {
	hideAddmore();
	$(".icon.active").removeClass("active");
	$("#menu").removeClass("addworkout");
	$("#detail").removeClass("visible");
	$("#loginpane").fadeOut("slow");
//	$("#container").removeClass("lightbox");
//	$("body").removeClass("blackground");
	$("#blackbox").fadeOut("slow");
}

function expandCircle($el, radius, padding) {
	if ($.browser.msie && parseInt($.browser.version) < 9) {
		$el.show();
		$el.addClass("active");
	} else {

		var iconCount = $el.find(".circleIcon").length;
		$el.css("z-index", 2);
		$el.unbind("webkitTransitionEnd transitionend");
		$el.addClass("active");
		$el.find(".circleIcon").each(function(i, icon) {
			$(icon).css({
				top : radius * Math.sin((i - iconCount / 4) / iconCount * 2 * Math.PI) + padding,
				left : radius * Math.cos((i - iconCount / 4) / iconCount * 2 * Math.PI) + padding
			});
		});
	}
}

function contractCircle($el, padding) {
	if ($.browser.msie && parseInt($.browser.version) < 9) {
		$el.hide();
		$el.removeClass("active");
	} else {
		$el.bind("webkitTransitionEnd transitionend", function() {
			$el.css("z-index", 0);
			$el.unbind("webkitTransitionEnd transitionend");
		});
		if($.browser.msie){
			$el.css("z-index", 0);
		}
		$el.removeClass("active");
		$el.find(".circleIcon").each(function(i, icon) {
			$(icon).css({
				top : 0 + padding,
				left : 0 + padding
			});
		});
	}
}

function openModal($el) {
	$("#modalbg, #modalclose").bind("click.modal", function(e) {
		closeModal($el);
	});
	$(window).bind("keyup.modal", function(e) {
		if (e.keyCode == 27) {
			closeModal($el);
		}
	});
	$("#modalbg").addClass("active");
	$el.addClass("active");
	$("#modalclose").appendTo($el);
}

function closeModal($el) {
	$("#modalbg").removeClass("active");
	$el.removeClass("active");
	$("#modalbg, #modalclose").unbind("click.modal");
	$(window).unbind("keyup.modal");
}