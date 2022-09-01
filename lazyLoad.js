function lazyLoad() {
  var lazyImages = document.querySelectorAll('.lazyLoad');

  if ('IntersectionObserver' in window) {
    let lazyImageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          //    console.log(entry)
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.src = lazyImage.dataset.src;
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      },
        {
            threshold: 0.05,
            rootMargin: "0px 0px 500px 0px",
        }
    );

    lazyImages.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Not supported, load all images immediately
    lazyImages.forEach((Image) => {
        Image.srcset = Image.dataset.srcset;
        Image.src = Image.dataset.src;

    });
  }
}

(() => document.addEventListener('DOMContentLoaded', lazyLoad))();
