document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();

  if (!name || !email) return;

  const message = `✅ ${name} with email ${email} submitted the form at ${new Date().toLocaleString()}.`;
  document.getElementById('responseMessage').textContent = message;

  // Store in localStorage
  const logs = JSON.parse(localStorage.getItem('loginLog') || '[]');
  logs.push({ name, email, time: new Date().toLocaleString() });
  localStorage.setItem('loginLog', JSON.stringify(logs));

  // Refresh the list
  loadLoginHistory();

  this.reset();
});

function loadLoginHistory() {
  const logins = JSON.parse(localStorage.getItem('loginLog') || '[]');
  const list = document.getElementById('historyList');
  list.innerHTML = '';
  logins.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.name} (${entry.email}) - ${entry.time}`;
    list.appendChild(li);
  });
}

function clearHistory() {
  localStorage.removeItem('loginLog');
  loadLoginHistory();
  document.getElementById('responseMessage').textContent = '';
}

// Load history on page load
loadLoginHistory();
