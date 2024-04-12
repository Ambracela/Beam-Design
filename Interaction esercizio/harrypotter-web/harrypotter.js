<style>
  .container {
    width: 100%;
    height: 1000px; /* Just for demo, adjust as needed */
    position: relative;
  }

  .element {
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.5s, transform 0.5s;
  }

  .element.left {
    left: -100%;
  }

  .element.right {
    right: -100%;
  }

  .show {
    display: block;
    opacity: 1;
    transform: translateY(-50%);
  }
</style>
</head>
<body>

<div class="container">
  <img class="element left" src="left-image.jpg" alt="Left Image">
  <div class="element right">Text from Right</div>
  <img class="element left" src="left-image-2.jpg" alt="Left Image 2">
  <div class="element right">Text from Right 2</div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".element");
    let currentIndex = 0;

    window.addEventListener("scroll", function() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight * 0.75) {
          element.classList.add("show");
        }
      });
    });
  });
</script>
