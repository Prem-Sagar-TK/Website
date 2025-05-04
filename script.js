document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = new URLSearchParams(formData);
  
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data.toString(),
    })
      .then((response) => response.json())
      .then((result) => {
        document.getElementById('responseMessage').textContent = result.message;
        this.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  