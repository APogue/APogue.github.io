document.addEventListener("DOMContentLoaded", function() {
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Update figure references
  var refLinks = document.querySelectorAll('a[href^="##"]');
  var figureCount = {};

  // Assign numbers to figures based on the order of their references
  var count = 1;
  refLinks.forEach(function(link) {
    var figureId = link.getAttribute('href').substring(2); // Get figure ID without the '##'
    if (document.getElementById(figureId) && !figureCount[figureId]) {
      figureCount[figureId] = count++;
    }
    link.textContent = 'Figure ' + figureCount[figureId];

    // Add click event to scroll to the figure
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Check if the link is in the TOC tab and switch to the Figures tab if needed
      if (document.querySelector('#toc').style.display !== 'none') {
        openTab(event, 'figures');
      }

      var figureElement = document.getElementById(figureId);
      var isSupplementary = figureElement.classList.contains('supplementary');

      // Only scroll if the figure is not in view or if it is a supplementary figure
      if (isSupplementary || !isInView(figureElement)) {
        scrollToFigure(figureElement);
      }
    });
  });

  // Default open tab
  document.querySelector(".tablink").click();

  // Helper function to check if an element is in view
  function isInView(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Helper function to scroll to a figure without affecting body scroll
  function scrollToFigure(element) {
    var parent = element.closest('.tabcontent');
    if (parent) {
      parent.scrollTo({
        top: element.offsetTop - parent.offsetTop,
        behavior: 'smooth'
      });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
