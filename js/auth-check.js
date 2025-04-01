// Authentication check for admin pages
function checkAuth() {
    const authData = localStorage.getItem('solo_leveling_admin_auth');
    
    if (authData) {
        const auth = JSON.parse(authData);
        const currentTime = new Date().getTime();
        
        // Check if authentication is still valid
        if (auth.authenticated && auth.expiration > currentTime) {
            // User is authenticated, allow access
            return true;
        } else {
            // Clear expired authentication
            localStorage.removeItem('solo_leveling_admin_auth');
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

// Run auth check when script is loaded
if (!checkAuth()) {
    // This prevents the rest of the page from loading if not authenticated
    throw new Error('Authentication required');
}
