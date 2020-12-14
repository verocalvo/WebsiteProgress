$(document).ready( 
    function() {
    
        // Header Tabs
        let last_clicked = $('.headtablinks').first().attr('id');
        $('.headtab').hide();
        $('.headtab').first().show();

        $('.headtablinks').click(
            function() {
                let clicked = $(this).attr('id');

                if (last_clicked === clicked) {

                } else {
                    $('.headtab').slideUp('fast');
                    $('#' + clicked + 'headtab').delay(350).slideDown('fast');
                }
                last_clicked = clicked;

            }
        );

        // Drag & Drop Functionality
        $("html").on("drop", function(event) { event.preventDefault(); event.stopPropagation(); });

        let dragging = false;
        $('.item').mousedown(
            function() {
                dragging = $(this);
                
            }
        );

        $('.f-grid').mouseup(
            function() {
                if (dragging != null) {
                    dragging = dragging.detach();
                    dragging.appendTo($(this));

                }
                dragging = null;
            }
        );

        
    }
);