$(document).ready(function(){
    displayAll()
})

let countries_table=[]

function displayAll(){
    $.ajax({
        url:'https://covid19.mathdro.id/api/countries',
        method:'GET',
        dataType:'json',
        data: {
            minRow: 1,
            maxRow: 10
          },
    }).done(function({countries}){
     
         $.each(countries,function(i,country){

            
                $.ajax({
                    url:`https://covid19.mathdro.id/api/countries/${country.iso2}`
                })
                .done(function(res){
                    // console.log(res.confirmed.value);
                   $('.row').append(

                       `  <div class="col-md-4" data-aos="flip-up">
                       <div class="card text-white bg-default mb-3">
                         <div class="card-header">
                         
                         <img src="https://www.countryflags.io/${country.iso2}/shiny/64.png">
                         </div>
                         <div class="card-body">
                           <p class="card-text text-warning"> confirmed ${res.confirmed.value}</p>
                           <p class="card-text text-success">recovered ${res.recovered.value}</p>
                           <p class="card-text text-danger">deaths ${res.deaths.value}</p>
                         </div>
                       </div>
                     </div>`
                   )
                })
                
          
         })
    })
    

}
