$(document).ready(
      );
    $(document).ready(
      setTimeout(function () {
        animateDiv(".github-icon");
      }, 4000)
    );
    
    

    $(document).ready(
      setTimeout(function () {
        animateDiv(".telegram-icon");
      }, 9000)
    );
    
    $(document).ready(
      setTimeout(function () {
        animateDiv(".email-icon");
      }, 9500)
    );
    $(document).ready(
      setTimeout(function () {
        animateDiv(".youtube-icon");
      }, 9500)
    );
    
    if (location.protocol == "http:" && window.location.hostname !== "localhost") {
      location.href = location.href.replace("http://", "https://");
    }
    
    function makeNewPosition() {
      var h = $(window).height() - 150;
      var w = $(window).width() - 50;
    
      if (w > 500) {
        h = h - 150;
      }
    
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      return [nh, nw];
    }
    
    function animateDiv(myclass) {
      console.log("ANIMATE!!")
      var newq = makeNewPosition();
      $(myclass).animate({ top: newq[0], left: newq[1] }, 2500, function () {
        animateDiv(myclass);
      });
    }
    
   
    