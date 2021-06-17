export const projectsAnimation = {   
    
    // One animation : 
        // 1. On click and mousemove, possibility to drag and drop the div parent of the image
        // 2. On mouseover, opacity changes
    
    init: function () {  
        const picturesContainer = document.querySelectorAll('.picture-container');  
        
        // Opacity change activated at the beginning and everytime the drag and drop animation is finished (signaled by a mouse up from the picture event)
        // Remove the listeners for the opacity, whenever the picture is being dragged (so that it does not activate it on other pictures)
        projectsAnimation.launchOpacityListener(picturesContainer); 
        document.addEventListener('mousedown', () => {projectsAnimation.deleteOpacityListener(picturesContainer)});
        document.addEventListener('mouseup', () => {projectsAnimation.launchOpacityListener(picturesContainer)});

        picturesContainer.forEach((picture) => {
            picture.addEventListener('mousedown', projectsAnimation.movePicture); 

            // deactivate browser API drag and drop
            picture.ondragstart = function() {
                return false;
            };
        });
   
    },
    
    addOpacity: function (event) {
        //We select the children elements of the container, and use the spread operator to convert the node into an array.
        // Then we can add the opacity className on those elements
        const pictureChildren = [...event.currentTarget.children];
        pictureChildren.forEach((child) => {  
            document.querySelector(`#${child.id}`).classList.add(`opacity`);
        })
    },

    removeOpacity: function (event) {
        //We remove the opacity class Name
        const pictureChildren = [...event.currentTarget.children];
        pictureChildren.forEach((child) => { 
             document.querySelector(`#${child.id}`).classList.remove(`opacity`);
        })
    },

    launchOpacityListener: function (pictures) {
        pictures.forEach(picture => {
            picture.addEventListener('mouseover', projectsAnimation.addOpacity);
            picture.addEventListener('mouseleave', projectsAnimation.removeOpacity);
        });    
    },

    deleteOpacityListener: function (pictures) {
        pictures.forEach(picture => {
            picture.removeEventListener('mouseover', projectsAnimation.addOpacity);
            picture.removeEventListener('mouseleave', projectsAnimation.removeOpacity);
        });    
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
        
        function startAnimation(event) {
            if (isMouseDown) {
                moveAt(event.pageX, event.pageY);
            }
        }

        function activateAnimation(event) {  
            event.preventDefault(); 
            isMouseDown = true;
        }

        function stopAnimation(event) {  
            isMouseDown = false;
        }
    
        // move the ball on mousemove and mousedown combined
        // Stop the process and clean the eventlisteners on mouseup
        document.addEventListener('mousemove', startAnimation);
        document.addEventListener('mouseup',stopAnimation);
        document.addEventListener('mousedown', activateAnimation, {once : true});
    },
}

