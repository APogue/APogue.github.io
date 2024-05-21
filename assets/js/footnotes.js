// assets/js/footnotes.js
document.addEventListener('DOMContentLoaded', (event) => {
  // Add click event listeners to footnote references
  document.querySelectorAll('a[href^="#fn"]').forEach(ref => {
    ref.addEventListener('click', function (event) {
      const footnoteId = this.getAttribute('href').substring(1);
      const footnote = document.getElementById(footnoteId);
      highlightElement(footnote);
    });
  });

  // Add click event listeners to footnote backreferences
  document.querySelectorAll('a[href^="#fnref"]').forEach(ref => {
    ref.addEventListener('click', function (event) {
      const refId = this.getAttribute('href').substring(1);
      const refElement = document.getElementById(refId);
      highlightElement(refElement);
    });
  });
});

function highlightElement(element) {
  if (element) {
    element.classList.add('highlight');
    setTimeout(() => {
      element.classList.remove('highlight');
    }, 2000); // Adjust the timeout duration as needed
  }
}
