$(document).ready(function () {
    $('.tap-target').tapTarget();
    /*Background changer each 5 seconds*/
    var images = ['media/main-background-0.jpg','media/main-background-1.jpg','media/main-background-2.jpg', 'media/main-background-3.jpg'];
    var counter = 0;
    var image = $("body");
    image.css("background-image", "url("+images[counter]+")");
    setInterval(function(){
        image.css("background-image", "url("+images[counter++]+")");
        image.fadeIn("slow");
        if(counter == images.length){
            counter = 0;
        }
    }, 5000);
    /*End*/
    /* Help button dynamic */
    var open = true;
    $('#help').click(function(){
        open == true ? $('.tap-target').tapTarget('open') : $('.tap-target').tapTarget('close');
    });
    function click_menu(){
        $("#menu").click(function(){
            alert("click menu")
            return 1;
        })
    }
    //if( click_menu() == 1)  open = false;
    /*End */

});

/*Error emails */
$("#email_error_form").hide();
$("#email").focusout(function(){
    check_email();
});
/*End*/
/*Checker emails*/
function check_email (){
    var val_email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    if ( val_email.test( $("#email").val() )  || $("#email").val().length == 0){
        $("#email_error_form").hide();
    } else{
        $("#email_error_form").html("¡Dirección de correo invalida!");
        $("#email_error_form").show();
    }
}
/*End*/