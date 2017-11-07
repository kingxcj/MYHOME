$(function() {

	$('#banner,#about,#skills,#contact,#home,#portfolio').height($(window).height() - $("#bar").height());

	$("#bar").css("z-index", 1);

	$("#bar").navFixed();

	$('#bar li a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - $("#bar").height() }, 600);
		event.preventDefault();

	});
	var bSin = false;

	$(window).scroll(function() {

		if($(document).scrollTop() < $('#home').height()) {

			$('#bar li a').removeClass('active');

			$('#bar li a').eq(0).addClass('active');

		} else if($(document).scrollTop() < ($('#about').offset().top + $('#about').height() / 2)) {

			$('#bar li a').removeClass('active');

			$('#bar li a').eq(1).addClass('active');

		} else if($(document).scrollTop() < ($('#skills').offset().top + $('#skills').height() / 2)) {

			$('#bar li a').removeClass('active');

			$('#bar li a').eq(2).addClass('active');
			if(bSin) {
				return;
			} else {
				bSin = true;
				canvas();
			};

		} else if($(document).scrollTop() < ($('#portfolio').offset().top + $('#portfolio').height() / 2)) {

			$('#bar li a').removeClass('active');

			$('#bar li a').eq(3).addClass('active');

		} else if($(document).scrollTop() < ($('#contact').offset().top + $('#contact').height() / 2)) {

			$('#bar li a').removeClass('active');

			$('#bar li a').eq(4).addClass('active');

		}
	})
});




var oA=document.querySelectorAll('.portfolioFilter ul li a');
var aDiv=document.querySelectorAll('.portfolioContainer .all');
var arr1=[];
for (var i=0 ;i<aDiv.length; i++) {
	arr1.push({l:aDiv[i].offsetLeft,t:aDiv[i].offsetTop})
};
//aDiv.forEach(function(div){
//	arr1.push({l:div.offsetLeft,t:div.offsetTop});
//	
//})
for (var i=0 ;i<aDiv.length; i++){
	aDiv[i].style.position='absolute';
	var {l,t}=arr1[i];
	aDiv[i].style.left=l+'px';
	aDiv[i].style.top=t+'px';
};
//aDiv.forEach(function(div,index){
//	div.style.position='absolute';
//	var {l,t}=arr1[index];
//	div.style.left=l+'px';
//	div.style.top=t+'px';
//})
for (var i=0 ;i<oA.length; i++){
	oA[i].index=i;
	oA[i].onclick=function(){
		var cont=0;
		
		for (var i=0 ;i<oA.length; i++){
			oA[i].className='';
		};
		oA[this.index].className='current';
		for (var i=0 ;i<aDiv.length; i++){
			if($(aDiv[i]).hasClass(`${oA[this.index].innerHTML}`)){
				cont++;
				aDiv[i].style.transform='scale(1)';
				aDiv[i].style.left=arr1[cont-1].l+'px';
				aDiv[i].style.top=arr1[cont-1].t+'px';
			}else {
				aDiv[i].style.transform='scale(0)';
			
			}
		};
	}
};
//oA.forEach(function(ele,index){
//	ele.onclick=function(){
//		var cont=0;
//		oA.forEach(function(ele){
//			ele.className='';
//		});
//		ele.className='current';
//		
//		var cont=0;
//		aDiv.forEach(function(div){
//			console.log(arr1)
//			if($(div).hasClass(`${ele.innerHTML}`)){
//				cont++;
//				div.style.transform='scale(1)';
//				div.style.left=arr1[cont-1].l+'px';
//				div.style.top=arr1[cont-1].t+'px';
//			}else {
//				div.style.transform='scale(0)';
//			
//			}
//		})
//	}
//})