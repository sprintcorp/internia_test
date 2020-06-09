<template>
    <div>
      <b-card class="card_adj">
       <h3 v-if="editing === true">Edit Employee</h3>
       <h3 v-else>Create Employee</h3>
       <hr>
       <div class="mt-3" >
          <b-form enctype="multipart/form-data">
                <b-form-group
                  id="input-group-1"
                  label="Full Name:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="name"
                    type="text"
                    required
                    placeholder="John Doe"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Job Title:" label-for="input-2">
                  <b-form-input
                    id="position"
                    v-model="position"
                    required
                    type="text"
                    placeholder="Enter Job Title e.g Developer, Software engineer..."
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Job Type:" label-for="input-2">
                  <b-form-input
                    id="employment_type"
                    v-model="employment_type"
                    required
                    type="text"
                    placeholder="Employment type e.g Full time, Part time, Remote..."
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Salary:" label-for="input-2">
                  <b-form-input
                    id="salary"
                    v-model="salary"
                    required
                    type="number"
                    step="0.0001"
                    placeholder="Enter Salary"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Status:" label-for="input-2">
                  <b-form-input
                    id="employee-status"
                    v-model="employment_status"
                    required
                    type="text"
                    placeholder="Employment status e.g Test stage, Onboarding..."
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Photo:" label-for="input-2">
                <b-form-file
                  id="file-input"
                  v-model="image"
                  v-on:change="onFileChange"
                  class="mb-2"
                  placeholder="Employee Display Image"
                ></b-form-file>
                </b-form-group>
                <b-button @click.prevent="createEmployee" class="btn btn-info">Create</b-button>
              </b-form>
       </div>
      </b-card>
    </div>
</template>
<script src="./createEmployee.js"></script>
<style lang="scss" scoped>
  @import "createEmployee";
</style>