<template>
    <aside>
        <h3> <b>employee</b> </h3>
         <div class="nav-side">
             <!-- list-group-flush -->
            <b-navbar-nav id="sidebar-wrapper" class="list-group">
             <!-- <b-nav-item :to="{name: 'employees-overview'}" class="links"> -->
             <b-nav-item :to="{name: 'employee-overview'}" class="links">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                <span class="px-3">
                     All Employees
                     </span>
                
            </b-nav-item>
            <span class="mt-2 pl-4 top-links"> <small>PROJECT</small> </span>
            <b-nav-item class="links pl-4">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                <span class="px-3">Arena Sport</span>
                
            </b-nav-item>
            <b-nav-item class="links pl-4">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                <span class="px-3">Dstv</span>
                
            </b-nav-item>
            <b-nav-item class="links pl-4">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                <span class="px-3">Seafood Mall</span>
                
            </b-nav-item>
            <b-nav-item class="links pl-4">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                <span class="px-3">FireStar</span>
                
            </b-nav-item>
             <b-nav-item class="links pl-4">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                <span class="px-3">Zeta Bank</span>
                
            </b-nav-item>

            <span class="mt-2 pl-4 top-links"> <small>STATUS</small> </span>
             <b-nav-item class="links pl-4">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                <span class="px-3">Full Time</span>
                
            </b-nav-item>
             <b-nav-item class="links pl-4">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                <span class="px-3">Part Time</span>
                
            </b-nav-item>
            </b-navbar-nav>
        </div>
    </aside>
</template>
<script src="./sidebar.js">
</script>
<style lang="scss">
 @import './sidebar'
</style>