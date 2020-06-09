import {EmployeeService} from '../../Services';
import {CREATE_EMPLOYEE, GET_ALL_EMPLOYEE,GET_EMPLOYEE,DELETE_EMPLOYEE, UPDATE_EMPLOYEE} from '../actions';
import { SET_ALL_EMPLOYEE,SET_EMPLOYEE } from '../mutations';


const initialState = {
    all_employee:[],
    employee:[],
}

export const state = {...initialState};

const actions = {
    async[CREATE_EMPLOYEE](context,payload){
      const {data} = await EmployeeService.createEmployee(payload);
      return data;
    },
    async[GET_ALL_EMPLOYEE](context){
        const {data} = await EmployeeService.getAllEmployee();
        context.commit(SET_ALL_EMPLOYEE,data);
        return data;
    },
    async[GET_EMPLOYEE](context,payload){
      const {data} = await EmployeeService.getEmployee(payload);
      context.commit(SET_EMPLOYEE,data);
      return data;
  },
    async[UPDATE_EMPLOYEE](context,payload){
      // window.console.log(payload);
      const {data} = await EmployeeService.updateEmployee(payload.data,payload.user);
      context.dispatch(GET_ALL_EMPLOYEE);
      return data;
  },
    async[DELETE_EMPLOYEE](context,payload){
      const {data} = await EmployeeService.deleteEmployee(payload);
      context.dispatch(GET_ALL_EMPLOYEE);
      return data;
  }
  };

  const mutations = {
      [SET_ALL_EMPLOYEE](state,all_employee){
          state.all_employee = all_employee;
      },
      [SET_EMPLOYEE](state,employee){
          state.employee = employee;
      },
  }

  const getters ={
    all_employee(state){
        return state.all_employee;
    },
    employee(state){
        return state.employee;
    }
  };
  export default {
    state,
    actions,
    mutations,
    getters
  };