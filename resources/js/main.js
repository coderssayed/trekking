$(document).ready(function(){
    $("#womans").hide();
    $('#womenBox').click(function(){
        if($(this).prop("checked") == true){
            $("#womans").show();
        }
        else if($(this).prop("checked") == false){
            $("#womans").hide();;
        }
    });
    $("#childrens").hide();
    $('#childrenBox').click(function(){
        if($(this).prop("checked") == true){
            $("#childrens").show();
        }
        else if($(this).prop("checked") == false){
            $("#childrens").hide();;
        }
    });
});
//menu here//
function openMenu(){
    document.querySelector(".menu-container").style.display="block";
}
function closeMenu(){
    document.querySelector(".closeMenu,          .menu-container , .menu-link li a").style.display="none";
}
/*scrolling effect*/
$(".menu-container ul li a, .next-section a").on("click", function(){
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
    }, 1000);
});