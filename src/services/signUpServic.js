import axios from "axios";

const USER_BASE_URL = "http://localhost:8080/api/auth/signup";

class UserService{
    saveUser(user){
        return axios.post(USER_BASE_URL,user);
    }
    getUser(){
        return axios.get(USER_BASE_URL);
    }

    deleteUser(id){
        return axios.delete(USER_BASE_URL +"/"+ id);
    }

    getUserById(id){
        return axios.get(USER_BASE_URL +"/"+ 4);
    }

    updateUser(id,user){
        return axios.put(USER_BASE_URL + "/"+id,user);
    }
}
export default new UserService();