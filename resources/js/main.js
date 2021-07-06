$(document).ready(function(){

    //waypoint
    $(".waypoint-sticky").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky")
        }
        else{
            $("nav").removeClass("sticky");
        }
    });

    //mixitup
    var mixer= mixitup('.container');

    ////other browser supported////

    $("a").on("click",function(event){
        if(this.hash !==""){
            event.preventDefault();

            var hash=this.hash;

            $('html,body').animate({
                scrollTop:$(hash).offset().top
            },100,function(){
                window.location.hash=hash;
            })
        }
    })


})

///////preloader////
let preloader=document.getElementById("preloader");

window.addEventListener("load",()=>{
    preloader.style.display="none";
})

///mobile nav///
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width="0";
}

////top up scroll///

window.addEventListener("scroll",()=>{
    let scroll=document.getElementById("top");

    if(scrollY>=460){
        scroll.classList.add("top-icon-plus");
    }
    else{
        scroll.classList.remove("top-icon-plus");
    }
})








