// Check if the user is logged in and redirect if not
function checkLogin(page) {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = page;
    } else {
        alert('Please log in to access this page.');
        window.location.href = 'login-in.html';
    }
}

// Simulate user login (call this function on the login page)
function loginUser() {
    // Set the login status in sessionStorage
    sessionStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'home-page.html';
}

function logoutUser() {
    // Remove login status from sessionStorage
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'login-in.html';
}
