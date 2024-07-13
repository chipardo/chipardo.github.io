document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons and panes
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      // Add 'active' class to the clicked button and the corresponding pane
      button.classList.add('active');
      const target = button.getAttribute('data-tab');
      document.getElementById(target).classList.add('active');
    });
  });

  // Set the first tab as active by default
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }

  // Login form submission
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Logged in as ${username}`);
  });

  // Preferences form submission
  const preferencesForm = document.getElementById('preferences-form');
  preferencesForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const theme = document.getElementById('theme').value;
    const notifications = document.getElementById('notifications').checked;
    localStorage.setItem('theme', theme);
    localStorage.setItem('notifications', notifications);
    applyPreferences();
    alert('Preferences saved');
  });

  // Apply saved preferences
  const applyPreferences = () => {
    const savedTheme = localStorage.getItem('theme');
    const savedNotifications = localStorage.getItem('notifications') === 'true';
    if (savedTheme) {
      document.getElementById('theme').value = savedTheme;
      document.body.className = savedTheme; // Apply theme to body
    }
    document.getElementById('notifications').checked = savedNotifications;
  };

  // Notification handling (example)
  const showNotification = (message) => {
    const notificationsEnabled = localStorage.getItem('notifications') === 'true';
    if (notificationsEnabled) {
      alert(message);
    }
  };

  applyPreferences();

  // Example usage of showNotification
  showNotification('Welcome to the project management tool!');
});
