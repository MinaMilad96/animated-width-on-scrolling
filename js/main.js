var spans = document.querySelectorAll(".progress span");

window.onscroll = function(){
    let value = scrollY;
    if(value >= 1630){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
            span.textContent =span.dataset.width;
        });
        
    }
    if(value < 1620){
        spans.forEach((span) => {
            span.style.width = 0;
            span.textContent = 0 ;
        });
    }
}

