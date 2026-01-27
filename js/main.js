// ---------- Load Header ----------
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    const hamburger = document.getElementById('hamburger');
    const header = document.querySelector('header');

    if (hamburger && header) {
      hamburger.addEventListener('click', () => {
        header.classList.toggle('menu-open');
      });
    }
  })
  .catch(error => console.error('Error loading header:', error));

// ---------- Load Footer ----------
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;

    // Optional: dynamically update copyright year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  })
  .catch(error => console.error('Error loading footer:', error));
