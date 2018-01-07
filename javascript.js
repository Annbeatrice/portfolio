$("#burger").click(function(){
    console.log("burger");
    $("#burger").toggleClass("change");
    $("#navigation").toggleClass("active");
})

$(".image_link").hover(
    // Första function - mus in. "this" är vad som blir hovrat på! Så att bara den man hovrar på får styling och inte alla med samma class.
    function(){
        console.log("Der blir hovrat!")
        $( this ).addClass( "active" );
    },
    function(){
        console.log("Der blir udhovrat!")
        $( this ).removeClass( "active" );
    },

        );
