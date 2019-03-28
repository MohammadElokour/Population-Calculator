function population (year){
	var populate = 3.0402*(10**9);
	var arr = [];
	var k = 0.016476;
	if(year < 1960 || year > 2050){
		return "We can calculate years from 1960 and up to 2050"
	}
	else if(year === undefined || year === 1960){
		year = 1960;
		return populate.toLocaleString("en-US");
	} 
	if(year > 1960){
		for (var i = 1961 ; i <= 2050 ; i++) { 
		populate = Math.ceil((3.0402*(10**9)*Math.exp(k*(i-1960))));
		arr.push(populate);
		}
		return arr[year-1961].toLocaleString("en-US");
	}
}

	
var calButton = $('#btn1');
$('#result').hide();
$('#year').hide(); 
calButton.click(function(){ // ON CLICK EVENT
$('#result').hide();
$('#year').hide();
var inputYear = $('#year');
var result = $('#result');
var input = $('input');
var inputValue = $('input').val();
var counter = $('#counter')
	inputYear.text("")
	if (population(inputValue) === "We can calculate years from 1960 and up to 2050" ){
	result.text(population(inputValue));
	result.animate({
    left: "+=10",
    height: "toggle"
  }, 1000, function() {
    // Animation complete.
  });
	}else{
	inputYear.text("Year " + inputValue);
	inputYear.animate({
    left: "+=10",
    height: "toggle"
  }, 1000, function() {
    // Animation complete.
  });
	result.animate({
    left: "+=10",
    height: "toggle"
  }, 1000, function() {
    // Animation complete.
  });
	result.text("World Population = " + population(inputValue));
	}	
});

$("#yearInput").keyup(function(event){   
		if(event.keyCode == 13){
        $("#btn1").click();
    }
});


//==================Part2 LiveCounter================================
jQuery(document).ready(function() {
var starter = 7693349425;
var random1 = Math.floor(Math.random()*2);

	setInterval(function(){
		random1 = Math.floor(Math.random()*2);
		if(random1 === 0){
			starter += 4;
		}
		else if(random1 === 1){
		starter -= 2;
		}
		// starter++;
		$("#count2").text(starter);

	}, 500);
})

// }
