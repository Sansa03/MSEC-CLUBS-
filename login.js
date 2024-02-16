document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Check if username and password are correct
    if (username === 'madhumita' && password === 'abcdef') {
      // Redirect to next page
      window.location.href = 'index.html';
    } else {
      // Display error message
      document.getElementById('error-message').innerText = 'Invalid username or password. Please try again.';
    }
  });
  