import {
  CREATE_EMPLOYEE,
  GET_ALL_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../../../Store/actions";
import { mapGetters } from "vuex";
import { BASE_URL } from "../../../env";

export default {
  data() {
    return {
      mainProps: { blankColor: "#777", width: 40, height: 40, class: "m1" },
      editProps: { blankColor: "#777", width: 60, height: 60, class: "m1" },
      name: "",
      position: "",
      employee_name: "",
      employee_id: "",
      salary: "",
      employment_type: "",
      employment_status: "",
      image: "",
      filename: "",
      nameState: null,
      submittedNames: [],
      employee: [],
      img_url: "",
      boxTwo: "",
      profile_image: "",
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
      this.resetModal;
    },
    handleEdit(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleUpdate();
      this.resetModal;
    },
    onFileChange(e) {
      // console.log(e.target.files[0]);
      this.filename = "Selected File: " + e.target.files[0].name;
      this.image = e.target.files[0];
      // console.log(this.image);
    },
    handleSubmit() {
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
    handleUpdate(employee_id) {
      let formData = new Object();
      formData.name = this.employee_name;
      formData.position = this.position;
      formData.salary = this.salary;
      formData.employment_type = this.employment_type;
      formData.employment_status = this.employment_status;
      console.log(this.image);
      this.$store
        .dispatch(UPDATE_EMPLOYEE, { data: formData, user: employee_id })
        .then(
          () => {
            alert(" Employee Record Updated");
            this.getEmployee();
            this.resetEmployeeDetails();
          },
            () => {
              alert(" Record Not Updated");
            }
        );
    },
    getEmployee() {
      this.$store
        .dispatch(GET_ALL_EMPLOYEE)
        .then
        // (data)=>{
        //     this.employee = data;
        // },
        // ()=>{

        // }
        ();
    },

    editEmployee(payload) {
      this.employee_name = payload.name;
      this.employee_id = payload.id;
      this.position = payload.position;
      this.salary = payload.salary;
      this.employment_status = payload.employment_status;
      this.employment_type = payload.employment_type;
      this.profile_image = payload.profile_image;
    },
    deleteEmployee(payload) {
      this.$store.dispatch(DELETE_EMPLOYEE, payload.id).then(
        () => {
          alert(payload.name + " Deleted");
        },
        () => {
          alert(payload.name + " Not Deleted");
        }
      );
    },
    resetEmployeeDetails() {
      this.image = "";
      this.name = "";
      this.position = "";
      this.salary = "";
      this.employment_type = "";
      this.employment_status = "";
    },
  },
  computed: {
    ...mapGetters(["all_employee"]),
  },
  mounted() {
    this.getEmployee();
    this.img_url = BASE_URL;
  },
};
