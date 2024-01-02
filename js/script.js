document.addEventListener('DOMContentLoaded', function () {
    // Initialize Keen Slider
    const announcementSlider = new KeenSlider('#announcementSlider', {
      loop: true,
      duration: 2000, // Set the duration for each slide in milliseconds
    });
  
    // Auto-advance to the next slide
    setInterval(() => {
      announcementSlider.next();
    }, 5000); 
  });
  