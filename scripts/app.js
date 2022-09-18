// intersection observer
const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
          console.log(entry)
          if (entry.isIntersecting) {
               entry.target.classList.add('show');
          } else {
               entry.target.classList.remove('show');
          }
     });
});


// grab all the elements with the class "hidden"
const hiddenElements = document.querySelectorAll('.hidden');
// observe all hidden elements
hiddenElements.forEach((el) => observer.observe(el));