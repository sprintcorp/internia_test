<template>
    <div>
      <div style="text-align: right">
        <!-- <b-btn :to="{name: 'employee-overview'}" pill class="btn btn-info rounded" v-b-modal.modal-prevent-closing>add employee</b-btn> -->
        <b-btn :to="{name: 'create-employee'}" pill class="btn btn-info rounded">add employee</b-btn>
      </div>
      <b-row class="mt-4 table-head">
            <b-col>
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
              >
              <!-- value="accepted" -->
                <!-- unchecked-value="not_accepted" -->
                </b-form-checkbox>
            </b-col>
            <b-col cols="4">
                <p>EMPLOYEE</p>
            </b-col>
            <b-col cols="3">
                <p>SALARY</p>
            </b-col>
            <b-col cols="2">
                <p>STATUS</p>
            </b-col>
            <b-col cols="2">
                <p>MANAGE</p>
            </b-col>
      </b-row>
      <!-- <pre>{{ all_employee }}</pre> -->
      <!-- {{ img_url }} -->
         <b-card class="mt-3" v-for="(employee, i) in all_employee" :key="i">
              <b-row>
                   <b-col>
                      <b-form-checkbox
                        name="checkbox-1"
                      >
                      </b-form-checkbox>
                   </b-col>
                   <b-col cols="4">
                       <b-row>
                         <b-col cols="3">
                           <b-img :src="img_url+employee.profile_image" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                         </b-col>
                         <b-col cols="9">
                            <span class="top-tag">{{employee.name}}</span> <br>
                            <span class="bottom-tag"> <small>{{employee.position}}</small> </span>
                         </b-col>
                       </b-row>
                   </b-col>
                   <b-col cols="3">
                      <span class="top-tag">{{employee.salary}} NOK <b-badge class="badge_adj">300</b-badge></span> <br>
                      <span class="bottom-tag"> <small>full time</small> </span>
                   </b-col>
                   <b-col cols="2">
                      <span class="top-tag">{{ employee.employment_type }}</span> <br>
                      <span class="bottom-tag"> <small>{{employee.employment_duration}}</small> </span>
                   </b-col>
                    <b-col cols="2">
                      <b-row class="ml-lg-auto mt-2">
                        <!-- <b-col id="edit" style="border-right: 1px solid #dcdcdc">
                          <img src="@/assets/edit.png" alt="">
                        </b-col> -->
                        <b-icon-pencil class="mr-2" v-b-modal.modal-prevent-edit @click="editEmployee(employee)"></b-icon-pencil>
                        <b-tooltip target="edit" triggers="hover">
                          
                          Edit Employee
                        </b-tooltip>
                        <div class="icon-div mr-3 ml-2"></div>
                        <b-icon-trash @click="deleteEmployee(employee)"></b-icon-trash>
                        <!-- <b-col id="delete" @click="deleteEmployee(employee.id)">
                          <img src="@/assets/delete.png" alt="">
                        </b-col> -->
                        <b-tooltip target="delete" triggers="hover">
                          Delete Employee
                        </b-tooltip>
                      </b-row>
                   </b-col>
              </b-row>
          </b-card>
       
         <div>
          <b-modal
            id="modal-prevent-edit"
            ref="modal"
            title="Update Employee Record"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleUpdate(employee_id)"
          >
            <form ref="form" @submit.stop.prevent="handleUpdate(employee_id)" enctype="multipart/form-data">
            <b-img :src="img_url+ profile_image" v-bind="editProps" rounded="circle" alt="Circle image"></b-img><br>
              <label>Fullname</label>
                <b-form-input
                  id="name-input"
                  v-model="employee_name"
                  required
                  class="mb-2"
                  placeholder="Full Name e.g John Doe Billy"
                ></b-form-input>
                <label>Position</label>
                <b-form-input
                  id="name-input"
                  v-model="position"
                  required
                  class="mb-2"
                  placeholder="Position e.g Developer, Software engineer"
                ></b-form-input>
                <label>Salary</label>
                <b-form-input
                  id="name-input"
                  v-model="salary"
                  required
                  class="mb-2"
                  placeholder="Salary (300000)"
                ></b-form-input>
                <label>Employment Type</label>
                <b-form-input
                  id="name-input"
                  v-model="employment_type"
                  required
                  class="mb-2"
                  placeholder="Employment type e.g Full time, Part time, Remote..."
                ></b-form-input>
                <label>Employment Status</label>
                <b-form-input
                  id="name-input"
                  v-model="employment_status"
                  required
                  class="mb-2"
                  placeholder="Employment status e.g Test stage, Onboarding.."
                ></b-form-input>        
                
              
            </form>
          </b-modal>
        </div>
    </div>
</template>

<script src="./employeesOverview.js"></script>
<style lang="scss" scoped>
  @import "employeesOverview";
</style>