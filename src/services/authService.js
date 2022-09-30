import axios from "axios";
// require('dotenv').config()

class AuthService {
    login(email, password) {
        return axios
            .post('http://localhost:5000/api/v1/auth/login',{email,password})
            .then(res=>{
                console.log(res);
                if (res.data.accessToken) {
                    localStorage.setItem('user',JSON.stringify(res.data));
                }
                return res.data
            })
            .catch(err=>{
                console.error(err)
            })
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, email, password) {
        return axios.post( "http://localhost:5000/api/v1/auth/signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }

}
export default new AuthService();
