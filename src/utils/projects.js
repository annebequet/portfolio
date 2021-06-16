export const projectsAnimation = {   
    
    // One animation : 
        // 1. On click and mousemove, possibility to drag and drop the div parent of the image
    
    init: function () {
        const pictures = document.querySelectorAll('.pictures-to-move__collection');
        const picturesContainer = document.querySelectorAll('.picture-container');

        picturesContainer.forEach((picture) => {
            picture.addEventListener('mousedown', projectsAnimation.movePicture);
            picture.ondragstart = function() {
                return false;
            };
        });

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
        document.querySelector(`#${pictureSelected}`).classList.toggle(`opacity`);
    },
    
    
    movePicture: function (event) {   
        const picture = document.querySelector(`#${event.currentTarget.id}`); 

        // New coordinates
        let shiftX = event.clientX - picture.getBoundingClientRect().left;
        let shiftY = event.clientY - picture.getBoundingClientRect().top;        

        // Variable that will indicate if the user is still clicking while moving the picture
        let isMouseDown = false;

        // move it out of any current parents directly into body
        // to make it positioned relative to the body

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
            const parentElement = document.querySelector("#pictures-to-move");
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

