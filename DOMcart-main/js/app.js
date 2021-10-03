// Variables
const courses = document.querySelector('#courses-list');



// Listeners

loadEventListeners();

function loadEventListeners() {
    // When a new course is added
    courses.addEventListener('click', buyCourse);
}





// Functions

function buyCourse(e)  {
    e.preventDefault();
    //Use delegation to find the course that was added
    if(e.target.classList.contains('add-to-cart')) {
        // Read the course values
        console.log(e.target.parentElement.parentElement);

    }
      
}
