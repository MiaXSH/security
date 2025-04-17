// var body = getElementByTagName ('')

// var navigation = getelementById('navigation')
// window.onscroll = function(){
// navigation.style.backgroundColor = black;
// };

$(document).ready(function() {



  $(window).on("scroll", function() {
  //   $("#navigation").css("background-color", "black");
  if ($(window).scrollTop() > 0) {
      $("#navigation").css("background-color", "rgb(2, 44, 74)");
      $("li").css("color", "white");
      $(".logo").css("color", "rgb(153, 202, 237)")
    } else {
      $("#navigation").css("background-color", "white");
      $("li").css("color", "black");
      $(".logo").css("color", "rgb(2, 82, 140)")
    }
  });

  $("#home").click(function () {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  });

  $("#about").click(function () {
    window.scrollTo({
      top: 500, 
      behavior: 'smooth'
    });
  });

  $("#services").click(function () {
    window.scrollTo({
      top: 1800, 
      behavior: 'smooth'
    });
  });

  $("#reviews").click(function () {
    window.scrollTo({
      top: 1100, 
      behavior: 'smooth'
    });
  });

  $("#contact").click(function () {
    window.scrollTo({
      top: 4200, 
      behavior: 'smooth'
    });
  });


  // $("#contact").click(function(){

  //   document.querySelector('.contactus').scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //     inline: 'start'
  //   });
  // });

  $(function(){
    var $container = $('.scroll-container');
    var $cards     = $('.card');
  
    $container.on('scroll', function(){
      // get container’s visible center X
      var contRect      = this.getBoundingClientRect();
      var containerMidX = contRect.left + contRect.width / 2;
  
      $cards.each(function(){
        var cardRect  = this.getBoundingClientRect();
        var cardMidX  = cardRect.left + cardRect.width / 2;
        var dist      = Math.abs(containerMidX - cardMidX);
  
        // if card’s center is within half its width of container center → scale
        if (dist < cardRect.width / 2) {
          $(this).css('transform', 'scale(1.2)');
        } else {
          $(this).css('transform', 'scale(1)');
        }
      });
    });
  
    // Trigger once to set initial state
    $container.trigger('scroll');
  });
  

  const quotes = [
    "“Safety isn’t expensive, it’s priceless.”",
    "“We protect what matters most to you.”",
    "“SecureGuard: Where security meets peace of mind.”",
    "“Your safety, our duty — 24/7.”",
    "“Protection starts with awareness.”"
  ];
  
  let quoteIndex = 0;
  const quoteEl = document.getElementById('quote');
  
  function updateQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteEl.textContent = quotes[quoteIndex];
  }
  
  setInterval(updateQuote, 10000);
  

  function updateQuote() {
    quoteEl.classList.add('fade-out');
    setTimeout(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      quoteEl.textContent = quotes[quoteIndex];
      quoteEl.classList.remove('fade-out');
    }, 500);
  }
  
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
  
    const name = $('#name').val();
    const message = $('#message').val();
  
    // 💡 You can replace this part with AJAX or EmailJS
    console.log('New contact form submission:', { name, message });
  
    $('#form-status').text('Thank you! Your message has been sent.');
  
    // Optional: clear form
    $('#contact-form')[0].reset();
  });
  

});