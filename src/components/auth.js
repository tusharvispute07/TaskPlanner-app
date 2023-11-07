import Cookies from "js-cookie"

const cookieName = 'authToken'

export default function isAuthenticated(){
    const authToken = Cookies.get(cookieName)
    return !!authToken

}