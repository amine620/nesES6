$(document).ready(function(){
displayCountries()
displayCasesInCards()
changeCaseByCountry()
})


let iso
console.log(iso);
let url='https://covid19.mathdro.id/api';

function displayCountries(){
    $.ajax({
        url:'https://covid19.mathdro.id/api/countries',
        method:'GET',
        dataType:'json'
    }).done(function({countries}){
        $.each(countries,function(i,country){

               $('#my-select').append(
                   `<option value='${country.iso2}'>${country.name}</option>`
               )
        })
    })
}



function changeCaseByCountry(){
    $('#my-select').change(function(){
        iso=$('#my-select').val()
        console.log(iso);
        displayCasesInCards()
        displayFlag()
    })
}


function displayCasesInCards(){
    
    iso!=undefined? url='https://covid19.mathdro.id/api/countries/'+iso : url

    // if(iso!=undefined)
    // {
    //     url='https://covid19.mathdro.id/api/countries/'+iso
    // }

    $.ajax({
        url:url,
        method:'GET',
        dataType:'json'
    }).done(function({confirmed,recovered,deaths}){
         $('.recovered').html(recovered.value)
         $('.confirmed').html(confirmed.value)
         $('.deaths').html(deaths.value)


         counterAnimation(recovered.value,confirmed.value,deaths.value)
         displayDataInChart(recovered.value,confirmed.value,deaths.value)

    })
}


function displayFlag(){
    $('.flag').html(
        `<img src="https://www.countryflags.io/${iso}/shiny/64.png">`
    )
}





