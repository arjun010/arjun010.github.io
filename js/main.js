/**
 * Created by arjun010 on 10/18/16.
 */
(function(){
    main = {};

    w3.includeHTML();

    $( document ).ready(function() {
        // main.showContentDiv("about-content")
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(".navigationLink").click(function(evt){
        var linkId = $(this).attr('id');
        var section = linkId.split("-")[0];
        main.showContentDiv(section+"-content");
    });


    main.showContentDiv = function(divToShow){
        // d3.selectAll(".content-div").each(function(d){
        //     var divId = d3.select(this).attr('id');
        //     if(divId != divToShow){
        //         if(!d3.select(this).classed('hide')){
        //             d3.select(this).classed('hide',true);
        //         }
        //     }else{
        //         if(d3.select(this).classed('hide')){
        //             d3.select(this).classed('hide',false);
        //         }
        //     }
        // })
    };

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      $(".nav-link").click(function(evt){
        $(".nav-item").removeClass("active");
        $(this).parent().addClass("active");
      })

})();