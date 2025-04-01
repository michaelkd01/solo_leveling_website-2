// Admin Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    
    // Check if user is authenticated
    checkAuthStatus();
    
    // Handle logout button click
    logoutBtn.addEventListener('click', function() {
        // Clear authentication
        setAuthenticated(false);
        
        // Redirect to login page
        window.location.href = 'admin-login.html';
    });
    
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
                // User is authenticated, allow access to dashboard
                return true;
            } else {
                // Clear expired authentication
                setAuthenticated(false);
                // Redirect to login page
                window.location.href = 'admin-login.html';
                return false;
            }
        } else {
            // No authentication data, redirect to login page
            window.location.href = 'admin-login.html';
            return false;
        }
    }
});
