
function counterAnimation(confirmed,recovered,deaths){
    // confirmed
    $({countNum: 0}).animate({countNum: confirmed}, {
        duration: 2000,
        easing:'linear',
        step: function() {
          // What todo on every count
          $('h5').html(Math.floor(this.countNum));
        },
        complete: function() {
          console.log('finished');
        }
      });


      $({countNum: 0}).animate({countNum: recovered}, {
        duration: 2000,
        easing:'linear',
        step: function() {
          // What todo on every count
          $('h5').html(Math.floor(this.countNum));
        },
        complete: function() {
          console.log('finished');
        }
      });


      $({countNum: 0}).animate({countNum: deaths}, {
        duration: 2000,
        easing:'linear',
        step: function() {
          // What todo on every count
          $('h5').html(Math.floor(this.countNum));
        },
        complete: function() {
          console.log('finished');
        }
      });
    
    
    
}
