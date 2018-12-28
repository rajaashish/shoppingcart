// Variables
const courses = document.querySelector('#courses-list')

// EventListners
loadEventListeners()

function loadEventListeners () {
  courses.addEventListener('click', buycourse)
}

// functions
function buycourse (e) {
  console.log(e.target)

  // use delegation to find the course that was added

  if (e.target.classList.contains('add-to-cart')) {
    // read the course values
    const course = e.target.parentElement.parentElement
    // read values
    getCourseInfo(course)
  }
}
// read the html info of the selected course
function getCourseInfo (course) {
  console.log(course)
}
