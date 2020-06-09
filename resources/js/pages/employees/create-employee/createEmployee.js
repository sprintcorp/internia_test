import {
    CREATE_EMPLOYEE} from "../../../Store/actions";
export default{
    data(){
        return{
            name: "",
            position: "",
            employee_name: "",
            employee_id: "",
            salary: "",
            employment_type: "",
            employment_status: "",
            image: "",
            filename: "",
        }
    },
    methods:{
        check(val){
            alert(val);
        },
        onFileChange(e) {
            // console.log(e.target.files[0]);
            this.filename = "Selected File: " + e.target.files[0].name;
            this.image = e.target.files[0];
            // console.log(this.image);
          },
          createEmployee() {
              
            let formData = new FormData();
            formData.append("image", this.image);
            formData.append("name", this.name);
            formData.append("position", this.position);
            formData.append("salary", this.salary);
            formData.append("employment_type", this.employment_type);
            formData.append("employment_status", this.employment_status);
            console.log(formData);
            this.$store.dispatch(CREATE_EMPLOYEE, formData).then(
              () => {
                alert(" Employee Record Created");
                this.getEmployee();
                this.resetEmployeeDetails();
              },
                () => {
                  alert(" Record Not Created");
                }
            );
          },
    }
}