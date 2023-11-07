import Cookies from "js-cookie"

const cookieName = 'authToken'

export default function logoutUser(setUserAuthenticated){
    Cookies.remove(cookieName)
    setUserAuthenticated(false)

}