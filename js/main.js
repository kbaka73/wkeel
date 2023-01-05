let nums = document.querySelectorAll(".nun");
let section =document.querySelector(".sliderer");
let started = false;
// scrollY up
let span = document.querySelector(".up");
window.onscroll = function (){
    if(window.scrollY >= section.offsetTop - 100){
        if(!started){
          nums.forEach((nun) => startCount(nun));
      }
      started = true;
    }
    // scroll up
    if(this.scrollY >= 300){
        span.classList.add("show");
    }else{
        span.classList.remove("show");
    }
};

function startCount(el){
    let goal = el.dataset.goal;
    let count =setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    },10/goal/12);
}





span.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}




function revealFunction (){
    window.sr = ScrollReveal({duration:650, distance:'250px',
    easing:'ease-out'});
    // sr.reveal('.reveal-left',{origin:'left', reset:false});
    // sr.reveal('.reveal-right',{origin:'right', reset:false});
    // truo
    // sr.reveal('.reveal-top',{origin:'top', reset:false});
    sr.reveal('.reveal-reset-left',{origin:'top', reset:true});
    sr.reveal('.reveal-reset-right',{origin:'bottom', reset:true});
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