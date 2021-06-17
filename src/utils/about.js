export const scrollingAnimation = {   
    
    // Animation : 
    
    init: function () { 
        document.addEventListener('scroll', scrollingAnimation.scrollingBar)         
    },

    scrollingBar: function (event) {
        const scrollBar = document.querySelector('#scroll-bar');
        scrollBar.classList.add('move-scroll-bar');
        
    },
}

