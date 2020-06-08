<template>
  <div>
  <b-navbar toggleable="lg" class="mt-5 rounded-top" type="light" variant="light">
    <b-navbar-brand href="#">Internia</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="m-auto">
        <b-nav-item href="#">Calendar</b-nav-item>
        <b-nav-item href="#">Statistics</b-nav-item>
        <b-nav-item href="#">Employee</b-nav-item>
        <b-nav-item href="#">Client</b-nav-item>
        <b-nav-item href="#">Equipment</b-nav-item>
      </b-navbar-nav>

       <!-- <b-navbar-nav class="d-none d-md-block d-lg-block d-xl-none">
        <b-nav-item href="#">Calendar</b-nav-item>
        <b-nav-item href="#">Statistics</b-nav-item>
        <b-nav-item href="#">Employee</b-nav-item>
        <b-nav-item href="#">Client</b-nav-item>
        <b-nav-item href="#">Equipment</b-nav-item>
      </b-navbar-nav> -->
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item right>
          <b-icon-bell></b-icon-bell>
        </b-nav-item>

         <b-nav-item right>
          <b-icon-envelope></b-icon-envelope>
        </b-nav-item>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
           <b-img src="https://picsum.photos/125/125/?image=58" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
          </template>
          <b-dropdown-item href="#" style="c: green;">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script src="./navbar.js">
</script>

<style lang="css">
</style>


