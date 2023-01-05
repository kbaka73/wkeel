// scroll img


// scrollY up
let span = document.querySelector(".up");

window.onscroll = function (){
    // scroll up
    if(this.scrollY >= 300){

        span.classList.add("show");
    }else{
        span.classList.remove("show");
    }
};

span.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}






function revealFunction (){
    window.sr = ScrollReveal({duration:600, distance:'250px',
    easing:'ease-out'});
    // sr.reveal('.reveal-left',{origin:'left', reset:false});
    // sr.reveal('.reveal-right',{origin:'right', reset:false});
    // truo
    // sr.reveal('.reveal-top',{origin:'top', reset:false});
    sr.reveal('.reveal-reset-top',{origin:'top', reset:true});
    sr.reveal('.reveal-reset-bottom',{origin:'bottom', reset:true});
    sr.reveal('.reveal-rotateww',{origin:'bottom', rotate:{y:1, z:1},
    reset:true
});


}

window.addEventListener('load',()=>{
    revealFunction();
})



document.addEventListener('contextmenu' , function(e){
    'ues strict';
    e.preventDefault();
    alert('اتصل بنا ')
})