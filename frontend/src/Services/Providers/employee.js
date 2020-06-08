import BaseHandler from '../../handler/handler';

class EmployeeProvider extends BaseHandler{
    createEmployee(payload){
        return this.post('/api/employee',payload);
    }

    getAllEmployee(){
        return this.query('/api/employee');
    }

    getEmployee(payload){
        return this.get('/api/employee/'+payload);
    }

    updateEmployee(payload,params){
        // alert(params);
        return this.put('/api/employee/'+params,payload);
    }

    deleteEmployee(payload){
        return this.delete('/api/employee/'+payload);
    }
}
export default EmployeeProvider;