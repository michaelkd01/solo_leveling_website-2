// Admin Login functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    
    // Default admin credentials (in a real application, these would be stored securely on the server)
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'sololeveling123';
    
    // Check if user is already logged in
    checkAuthStatus();
    
    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        
        // Validate credentials
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            // Set authentication in localStorage
            setAuthenticated(true);
            
            // Redirect to admin dashboard
            window.location.href = 'admin-dashboard.html';
        } else {
            // Show error message
            showError('Invalid username or password. Please try again.');
            
            // Clear password field
            document.getElementById('password').value = '';
        }
    });
    
    // Helper function to show error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
    
    // Helper function to set authentication status
    function setAuthenticated(status) {
        if (status) {
            // Set authentication with expiration (24 hours)
            const expirationTime = new Date().getTime() + (24 * 60 * 60 * 1000);
            const authData = {
                authenticated: true,
                expiration: expirationTime
            };
            localStorage.setItem('solo_leveling_admin_auth', JSON.stringify(authData));
        } else {
            // Clear authentication
            localStorage.removeItem('solo_leveling_admin_auth');
        }
    }
    
    // Helper function to check authentication status
    function checkAuthStatus() {
        const authData = localStorage.getItem('solo_leveling_admin_auth');
        
        if (authData) {
            const auth = JSON.parse(authData);
            const currentTime = new Date().getTime();
            
            // Check if authentication is still valid
            if (auth.authenticated && auth.expiration > currentTime) {
                // Redirect to admin dashboard if already authenticated
                window.location.href = 'admin-dashboard.html';
            } else {
                // Clear expired authentication
                setAuthenticated(false);
            }
        }
    }
});
