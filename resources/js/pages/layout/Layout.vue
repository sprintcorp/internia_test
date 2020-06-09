<template>
    <div>
        <div class="container">
             <Navbar />
             <div class="card card-color">
                <div class="row">
                
                    <div class="col-md-3 mt-5 ml-5 px-0 thick-border-right">
                        <Sidebar/>
                    </div>
                    <div class="mt-5 col-md-8">
                        <router-view></router-view>
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>

<script src="./layout.js"></script>

<style lang="scss" scoped>
  @import "./layout.scss";
</style>
