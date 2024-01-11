

var home = document.getElementById("header_section");
window.addEventListener('load', function() {

    var images = [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
    ];
    
    
    var index = 0;
    
    function changeBackground() {
        home.style.backgroundImage = 'url(' + images[index] + ')';
        index = (index + 1) % images.length;
        if(index==7)index=0;
    }
    
    
setInterval(changeBackground, 5000); 
});

function reloadPage() {
    location.reload();
  }

  setInterval(reloadPage, 120000);

  function reloadPage2() {
    location.reload();
  }
