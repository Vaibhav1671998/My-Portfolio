
$('#bio').hide();
$('#education').hide();
$('#projects').hide();
$('#work').hide();
$('#footer1').hide();
$('#about').hide();
$('.BIO , .EDUCATION , .WORK , .PROJECTS').hide();

var closeMenuItems = function () {
	$('.menuButton').find('h1').removeClass('fa-times');
	$('.menuButton').find('h1').addClass('fa-bars');
	$('.BIO , .EDUCATION , .WORK , .PROJECTS').removeClass('animated slideInLeft');
	$('.WORK').addClass('animated slideOutLeft');
	setTimeout(function () {
		$('.PROJECTS').addClass('animated slideOutLeft');
	},100);
	setTimeout(function () {
		$('.EDUCATION').addClass('animated slideOutLeft');
	},200);
	setTimeout(function () {
		$('.BIO').addClass('animated slideOutLeft');
	},300);
	setTimeout(function () {
		$('.BIO , .EDUCATION , .WORK , .PROJECTS').hide();	
		$('.quote-content').attr('style','top:33%;');
	},1200);	
};

var menuCount = 0;

$('.circle').on('click' , function () {
	displayBio();
	$('#bio').show();
	$('html,body').animate({
        scrollTop: $('#bio').offset().top},'slow');
	$('#education').show();
	$('#projects').show();
	$('#work').show();
	$('#footer1').show();
	$('#about').show();
	$('.BIO').click(function () {
		$('html,body').animate({
        scrollTop: $('#bio').offset().top},'slow');
        closeMenuItems();
	});
	$('.EDUCATION').click(function () {
		$('html,body').animate({
        scrollTop: $('#education').offset().top},'slow');
        closeMenuItems();
	});
	$('.PROJECTS').click(function () {
		$('html,body').animate({
        scrollTop: $('#projects').offset().top},'slow');
        closeMenuItems();
	});
	$('.WORK').click(function () {
		$('html,body').animate({
        scrollTop: $('#work').offset().top},'slow');
        closeMenuItems();
	});
});

$('#animated-button1').click(function () {
	$('html,body').animate({
        scrollTop: $('#header').offset().top},'slow');
});

$('.menuButton').click(function () {
	menuCount++;
	if($('.menuButton').find('h1').hasClass('fa-bars'))
	{
		
		$('.menuButton').find('h1').removeClass('fa-bars');
		$('.menuButton').find('h1').addClass('fa-times');
		if(screen.height >=600)
		{
			$('.quote-content').attr('style','top:45%;');	
		}
		else if(screen.height >400 && screen.height < 600)
		{
			$('.quote-content').attr('style','top:55%;');	
		}
		else if(screen.height <= 400)
		{
			$('.quote-content').attr('style','top:65%;');	
		}
		
		$('.BIO , .EDUCATION , .WORK , .PROJECTS').removeClass('animated slideOutLeft');
		
		$('.BIO').show();
		$('.BIO').addClass('animated slideInLeft');
		setTimeout(function () {
			$('.EDUCATION').show();
			$('.EDUCATION').addClass('animated slideInLeft');
		},100);
		setTimeout(function () {
			
			$('.PROJECTS').show();
			$('.PROJECTS').addClass('animated slideInLeft');
		},200);
		setTimeout(function () {
			$('.WORK').show();
			$('.WORK').addClass('animated slideInLeft');
		},300);
	}
 	else if($('.menuButton').find('h1').hasClass('fa-times'))
 	{
		closeMenuItems();
 	}
});

var skills = [
	'./img/c.png',
	'./img/cpp.png',
	'./img/java.png',
	'./img/html.png',
	'./img/css.png',
	'./img/js.png',
	'./img/jquery.png',
	'./img/bootstrap.png',
	'./img/android.png',
	'./img/python.png',
];

var education  = [
	{
		institute : 'Sanatan Vidya Mandir Sen. Sec. School , Ludhiana',
		img : './img/svm.jpg',
		alt : 'SVM School image',
		year : '2014',
		major : ['English ',' Hindi ',' Punjabi']
	},
	{
		institute : 'Bhartiya Vidya Mandir Sen. Sec. School , Ludhiana',
		img : './img/bvm.jpg',
		alt : 'SVM School image',
		year : '2016',
		major : ['Physics ' , ' Chemistry ' , ' Maths']
	}
];

var projects = [
	{
		name : 'Neighbourhood Map',
		desc : 'This website is designed to let you find out some beautiful places in Zurich , Switzerland . You can also see their location on the map .',
		year : '2017',
		url : 'https://vaibhav1671998.github.io/Udacity-Neighborhood-Map/'
	},
	{
		name : 'Memory Game',
		desc : 'This is a Memory Game where you have to find the matching pair of cards . Your star rating will depend on the moves you take to finish the game',
		year : '2017',
		url : 'https://vaibhav1671998.github.io/Udacity-Memory-Game/'
	},
	{
		name : 'Frogger Game',
		desc : 'This is an Arcade game where you have to cross the river 5 times in order to win the game . When you will collide with enemies you have to restart from the initial position',
		year : '2017',
		url : 'https://vaibhav1671998.github.io/Udacity-Arcade-Game/.'
	}
];

var work = [
	{	
		company_name : 'None',
		time_period : 'None',
		designation : 'None'
	}
];

var bioElem = $('#skills-image');
var educationElem = $('#education');
var projectsElem = $('#projects');
var workElem = $('#work');

function displayBio() {
	var num = 0;
	// setInterval(function () {
	// 	bioElem.attr('src',skills[num]);
	// 	num = (num + 1) % (skills.length);
	// },2000);
	$('.right').on('click',function() {
		if(num===skills.length-1)
		{
			bioElem.attr('src',skills[num]).fadeOut(1000, function () {
				num = 0;
				bioElem.attr('src',skills[num]).fadeIn();
			});	
		}
		else if(num===0)
		{
			bioElem.attr('src',skills[0]).fadeOut(1000, function () {
				bioElem.attr('src',skills[1]).fadeIn();
				num++;
			});
		}
		else
		{
			bioElem.attr('src',skills[num]).fadeOut(1000, function () {
				num++;
				bioElem.attr('src',skills[num]).fadeIn();
			});			
		}				
	});
	$('.left').on('click',function() {
		if(num===0)
		{
			bioElem.attr('src',skills[num]).fadeOut(1000, function () {
				num = (skills.length)-1;
				bioElem.attr('src',skills[num]).fadeIn();
			});			
		}
		else if(num===skills.length-1)
		{
			bioElem.attr('src',skills[num]).fadeOut(1000, function () {
				num--;
				bioElem.attr('src',skills[num]).fadeIn();
			});			
		}
		else
		{
			bioElem.attr('src',skills[num]).fadeOut(1000, function () {
				num--;
				bioElem.attr('src',skills[num]).fadeIn();
			});			
		}
	});
}

$("#bio").mouseout(function () {
	$('.left').attr('style','color:#FFFAF0;');
	$('.right').attr('style','color:#FFFAF0;');
	$('.left').find('i').removeClass('fadeIn');
	$('.right').find('i').removeClass('fadeIn');
	$('.left').find('i').addClass('fadeOut');
	$('.right').find('i').addClass('fadeOut');
});

$("#bio").mouseover(function () {
	$('.left').attr('style','color:#ff99ff;');
	$('.right').attr('style','color:#ff99ff;');
	$('.left').find('i').removeClass('fadeOut');
	$('.right').find('i').removeClass('fadeOut');
	$('.left').find('i').addClass('fadeIn');
	$('.right').find('i').addClass('fadeIn');
});

for(var i=0;i<education.length;i++)
{
	educationElem.append('<div style="width:80%;margin-right:auto;"><h3 class="blue-text get-margin">'+education[i].institute+
		'</h3><img class="get-margin education-image img-responsive" src="' + education[i].img + 
		'" alt="' + education[i].alt + '"><br><span class="black-text get-margin">Year : <span class="blue-text get-margin">' + education[i].year + 
		'</span></span><br><span class="black-text get-margin">Major : <span class="get-margin blue-text">'+education[i].major
			+'</span></span></div>');
		
}

for(var i=0;i<projects.length;i++)
{
	projectsElem.append('<div style="display: inline;width:80%;margin-right:auto;"><h3 class="blue-text get-margin">'+ projects[i].name +
		'</h3><span class="black-text get-margin">Description : <span class="blue-text get-margin" style="position: relative;left: 22px;">' + projects[i].desc + '</span></span><br><span class="black-text get-margin">Year : <span class="blue-text get-margin">' + projects[i].year 
		+ '</span></span><br><span class="black-text get-margin">URL : </span><a class="pink-text get-margin" target="_blank" href="' + projects[i].url + '">' + projects[i].url + '</a></span></div>');
}

for(var i=0;i<work.length;i++)
{
	workElem.append('<div style="width:80%;margin-right:auto;"><h3 class="blue-text get-margin">' + work[i].company_name + 
		'</h3><span class="black-text get-margin">Time Peroid :- <span class="blue-text get-margin">' + work[i].time_period + 
		'</span></span><br><span class="black-text get-margin">Designation :- <span class="blue-text get-margin">' + work[i].designation + 
		'</span></span></div>')
}
