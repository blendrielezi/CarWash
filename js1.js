function startCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
  
    const options = {
      threshold: 0.5 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const targetNumber = parseInt(target.innerText);
          let currentNumber = 0;
  
          const counterInterval = setInterval(() => {
            target.innerText = currentNumber;
            currentNumber += Math.ceil(targetNumber / 100); 
  
            if (currentNumber >= targetNumber) {
              target.innerText = targetNumber;
              clearInterval(counterInterval);
            }
          }, 10);
  
          observer.unobserve(target);
        }
      });
    }, options);
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  }
  
  window.addEventListener('DOMContentLoaded', startCounterAnimation);