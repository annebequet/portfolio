export const projectsAnimation = {   
    
    // One animation : 
        // 1. On click and mousemove, possibility to drag and drop the div parent of the image
        // 2. On mouseover, opacity changes
    
    init: function () {
        const picturesContainer = document.querySelectorAll('.picture-container');

        picturesContainer.forEach((picture) => {
            picture.addEventListener('mousedown', projectsAnimation.movePicture);
            // deactivate browser API drag and drop
            picture.ondragstart = function() {
                return false;
            };
        });

        this.launchOpacityListener();        
    },

    changeOpacity: function (event) {
        //We retrieve the id name
        const pictureSelected = event.currentTarget.id;
        document.querySelector(`#${pictureSelected}`).classList.toggle(`opacity`);

        // We also change the opacity of the sibling div
    },

    launchOpacityListener: function (event) {
        const pictures = document.querySelectorAll('.pictures-to-move__collection');
        pictures.forEach(picture => 
            picture.addEventListener('mouseover', projectsAnimation.changeOpacity),
        );        
        pictures.forEach(picture => 
            picture.addEventListener('mouseleave', projectsAnimation.changeOpacity),
        );
    },

    deleteOpacityListener: function (event) {
        const pictures = document.querySelectorAll('.pictures-to-move__collection');
        pictures.forEach(picture => 
            picture.removeEventListener('mouseover', projectsAnimation.changeOpacity),
        );        
        pictures.forEach(picture => 
            picture.removeEventListener('mouseleave', projectsAnimation.changeOpacity),
        );
    },
    
    
    movePicture: function (event) {  
        // Remove the listeners for the opacity, so that the movement of our object won't trigger it on other pictures
        projectsAnimation.deleteOpacityListener();

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
            const parentElement = document.querySelector("#pictures-to-move");
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousedown', onMouseDown);
            picture.onmouseup = null;

            //relaunch the opacity listener
            projectsAnimation.launchOpacityListener();
        }
    
        // move the ball on mousemove and mousedown combined
        // Stop the process and clean the eventlisteners on mouseup
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousedown', onMouseDown);
    },
}

