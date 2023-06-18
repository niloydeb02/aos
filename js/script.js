// js
  wow = new WOW(
   {
   boxClass:     'wow',      // default
   animateClass: 'animated', // default
   offset:       0,          // default
   mobile:       true,       // default
   live:         true        // default
 }
 )
 wow.init();

// aos
AOS.init({
      offset: 200,
      duration: 600,
      easing: 'linear',
      delay: 100,
    });
 


// jq
$(document).ready(function(){

// 1st counter


	$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// 2nd counter
var countdown = $("#countdown").countdown360({
    radius      : 80,
    seconds     : 60,
    fontColor   : '#E74C3C',
    autostart   : false,
    onComplete  : function () { console.log('done') }
});
countdown.start();
			console.log('countdown360 ',countdown);
		 	$(document).on("click","button",function(e){
		 		e.preventDefault();
		 		var type = $(this).attr("data-type");
		 		if(type === "time-remaining")
		 		{
		 			var timeRemaining = countdown.getTimeRemaining();
		 			alert(timeRemaining);
		 		}
		 		else
		 		{
		 			var timeElapsed = countdown.getElapsedTime();
		 			alert(timeElapsed);
		 		}
		 	});


// 3rd plugin
		 	$(".incremental-counter").incrementalCounter();







// slick slider
 $('.sli').slick({
 	centerMode:true,
 	centerPadding: '60px',
    slidesToShow: 3,
    responsive:[
    {
    	breakpoint:991,
    	settings:{
    		 arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
    	}


    },
     {
    	breakpoint:767,
    	settings:{
    		 arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
    	}

    },


    	]
 });


});