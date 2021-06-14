export const projectsAnimation = {   
    
    // Two animations : 
        // 1. on mouseover, the image gains a higher opacity. Reversible on mouseleave
        // 1. On click and mousemove, possibility to drag and drop the image
    
    init: function () {
        const pictures = document.querySelectorAll('.pictures-to-move__collection');
        pictures.forEach(picture => 
            picture.addEventListener('mousedown', projectsAnimation.movePicture),
        );

        pictures.forEach(picture => 
            picture.addEventListener('mouseover', projectsAnimation.changeOpacity),
        );        
        pictures.forEach(picture => 
            picture.addEventListener('mouseleave', projectsAnimation.changeOpacity),
        );
    },

    changeOpacity: function (event) {
        //We retrieve the id name
        const pictureSelected = event.currentTarget.id;
        console.log(pictureSelected);
        document.querySelector(`#${pictureSelected}`).classList.toggle(`opacity`);
    },
    
    movePicture: function (event) {   
        const picture = document.querySelector(`#${event.currentTarget.id}`); 

        // New coordinates
        let shiftX = event.clientX - picture.getBoundingClientRect().left;
        let shiftY = event.clientY - picture.getBoundingClientRect().top;        

        // Variable that will indicate if the user is still clicking while moving the picture
        let isMouseDown = false;

        function moveAt(pageX, pageY) {
            picture.style.left = pageX - shiftX + 'px';
            picture.style.top = pageY - shiftY + 'px';
          }
        
        function onMouseMove(event) {
            if (isMouseDown) {
                moveAt(event.pageX, event.pageY);
            }
        }

        function onMouseDown() {  
            event.preventDefault(); 
            isMouseDown = true;
        }

        function onMouseUp(event) {  
            isMouseDown = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousedown', onMouseDown);
            picture.onmouseup = null;
        }
    
        // move the ball on mousemove and mousedown combined
        // Stop the process and clean the eventlisteners on mouseup
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousedown', onMouseDown);
    },
}

