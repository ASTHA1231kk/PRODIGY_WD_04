// Add event listener to skill boxes to animate on hover
const skillBoxes = document.querySelectorAll('.skill-box');

skillBoxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.1)';
    box.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
  });

  box.addEventListener('mouseout', () => {
    box.style.transform = 'scale(1)';
    box.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  });
});