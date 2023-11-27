<script>
  $(document).ready(function () {
    // Handle the slide.bs.carousel event
    $('#carouselExample1').on('slide.bs.carousel', function (e) {
      var currentIndex = $(e.relatedTarget).index();
      updateTextBasedOnSlide(currentIndex);
    });

    function updateTextBasedOnSlide(index) {
      // You can implement your logic to change text based on the current slide index here
      switch (index) {
        case 0:
          $('#carouselTextTitle').text('Frontgate');
          $('#carouselTextDescription').text('Upon entering through the main gate, individuals can effortlessly proceed along a direct path, continuing until they reach the second staircase positioned directly in front of the Beta building. It is at this point that they will find the Clinic, conveniently located and easily accessible.');
          break;
        case 1:

        $('#carouselTextTitle').text('Frontgate');
          $('#carouselTextDescription').text('loremwerwersdfo  wehniweur uweriuwerh');
          // Change text for the second slide
          break;
        // Add cases for other slides as needed
      }
    }
  });

  </script>