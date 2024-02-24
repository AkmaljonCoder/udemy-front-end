$("h1").css('color', 'red'); // interacting to css 

$("button").addClass('button'); // adding class

console.log($('button').hasClass('button')); // has class function

$('button').removeClass('button'); // removing class 

$('h1').text('Hello Toshkent'); // changing the text of element

$('#movies').html('<li> Shawshank Redemption </li>'); // changing the html of element

$('a').attr('href','https://youtube.com'); // changing/setting attribute

// event listeners in jQuery
$('#button1').click(() => {
    $('h1').css('color', 'blue');
});

$(document).on('keypress',(event)=>{
    $('h1').text(event.key);
})

// adding and removing elements in jQuery
$('#movies').prepend('<li>The Dark Knight</li>');
$('button').remove()

// animations in jQuery
$(document).keypress((event)=>{
    $('a').slideUp().slideDown().animate({opacity: 0.5});
    $('a').animate({opacity: 0.3});
    // hide, show
    // toggle
    // slideUp, slideToggle
    // animate
})