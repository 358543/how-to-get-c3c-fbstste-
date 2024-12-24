document.querySelectorAll('.step h2').forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});
