import axios from "axios";

const EMPLOYEE_BASE_URL = "http://172.16.2.17:8080/api/v1/employee";

class EmployeeService{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL,employee);
    }
    getEmployee(){
        return axios.get(EMPLOYEE_BASE_URL);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_BASE_URL +"/"+ id);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_BASE_URL +"/"+ id);
    }

    updateEmployee(id,employee){
        return axios.put(EMPLOYEE_BASE_URL + "/"+id,employee);
    }
}
export default new EmployeeService();