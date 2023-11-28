import axios from "axios";

const CALCUL_BASE_URL = "http://172.16.2.17:8080/api/v1/planAction";

class PlanActionService{
    savePlanAction(planAction){
        return axios.post(CALCUL_BASE_URL,planAction);
    }
    getPlanAction(){
        return axios.get(CALCUL_BASE_URL);
    }

    deletePlanAction(id){
        return axios.delete(CALCUL_BASE_URL +"/"+ id);
    }

    getPlanActionById(id){
        return axios.get(CALCUL_BASE_URL +"/"+ id);
    }

    getByUserId(id){
        return axios.get(CALCUL_BASE_URL+"/userId"+id)
    }

    updatePlanAction(id,planAction){
        return axios.put(CALCUL_BASE_URL + "/"+id,planAction);
    }
}
export default new PlanActionService();