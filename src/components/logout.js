export default function logoutUser(setUserAuthenticated) {
    localStorage.removeItem('authToken');
    setUserAuthenticated(false);
}