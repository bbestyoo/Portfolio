const education = document.querySelector('#c1');
const skills = document.querySelector('#c2');
const hobbies = document.querySelector('#c3');

function showEducation(){
  education.style.display = "block";
  skills.style.display = "none";
  hobbies.style.display = "none";
}
function showSkills(){
  education.style.display = "none";
  skills.style.display = "block";
  hobbies.style.display = "none";
}
function showHobbies(){
  education.style.display = "none";
  skills.style.display = "none";
  hobbies.style.display = "block";
}

const links = document.querySelectorAll('a ul li')

for(const link of links){
  link.addEventListener('click',clickHandler())
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}