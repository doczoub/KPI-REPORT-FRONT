import axios from "axios";

const CALCUL_BASE_URL = "http://172.16.2.17:8080/api/v1/calcul";

class CalculService{
    saveCalcul(calcul){
        return axios.post(CALCUL_BASE_URL,calcul);
    }
    getCalcul(){
        return axios.get(CALCUL_BASE_URL);
    }

    deleteCalcul(id){
        return axios.delete(CALCUL_BASE_URL +"/"+ id);
    }

    getCalculById(id){
        return axios.get(CALCUL_BASE_URL +"/"+ id);
    }

    getByUserId(id){
        return axios.get(CALCUL_BASE_URL+"/userId"+id)
    }

    updateCalcul(id,calcul){
        return axios.put(CALCUL_BASE_URL + "/"+id,calcul);
    }
}
export default new CalculService();