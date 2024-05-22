document.addEventListener("DOMContentLoaded", function() {
  var figures = document.querySelectorAll("figure[id]");
  figures.forEach(function(figure, index) {
    var refLinks = document.querySelectorAll('a[href="#' + figure.id + '"]');
    refLinks.forEach(function(link) {
      link.textContent = 'Figure ' + (index + 1);
    });
  });
});
