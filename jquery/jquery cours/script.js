$(document).ready(function(){



// with javascript
// document.querySelector('button').addEventListener('click',function(){
//     alert('jquery is work')
// })

//with jquery

// $('button').on('click',function(){

//     alert('jquery is work')

// })

// fadeout
$('.btn1').click(function(){
    $('h1').fadeOut(3000)
})

// fadeout
 $("h2").fadeOut()

$('.btn2').click(function(){
    $('h2').fadeIn(3000)
})


//fadeToggrl

$('.btn3').click(function(){
    $('strong').fadeToggle(3000)
})

///slide up
$('.btn4').click(function(){
    $('li').slideUp('slow')
})
///slide up
$('.btn5').click(function(){
    $('li').slideDown('slow')
    $('li:first-child').css({
        'color':'green',
        'font-size':'30px',
        'opacity':'0.5'
    })
})


//slide toggel

$('.btn6').click(function(){
    $('li').slideToggle('slow')

    $('li:first-child').css({
        'color':'green',
        'font-size':'30px',
        'opacity':'0.5'
    })
})


//change text

$('.change').click(function(){
    $('.content').html('learn javascript')
})

//append text

$('.btn-add').click(function(){
    let val=$('#input').val()
    let li=$(`<li>${val}</li>`)
    $('.list').append(li)
    $('#input').val("")
})

//animation

$('.animate').click(function(){
    $('div').animate({
        left:'300px',
        height:'200px',
        width:'200px',
        opacity:"0.5"
        
    })
})

//target paragraph

$('p').first().css('color','red')
$('p').last().css('color','green')
$('p').eq(1).css('color','aqua')

// target parent

$('p').parent().css({
    'border':'1px solid black'
})

//loop 

const table=['javascript','jquery','html','css']

$.each(table,function(i,data){
    let li=$(`<li>${data}</li>`)
    $('.list-2').append(li)
})

//html file
$.get('data.html',function(info){
   $('.content').html(info)
})

//json file
$.get('data.json',function(users){
     console.log(users);

     $.each(users,function(i,user){

         $('.users-content').append(
             `
             <ul>
              <li>${user.name}</li>
              <li>${user.email}</li>
              <li>${user.phone}</li>
             <ul>
             `
         )
     })

})


















})