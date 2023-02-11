<template lang="">

    <div :class="[this.hamburger? 'bg-white':'bg-home-blue','pt-2 mb-4 lg:pt-[15px] lg:mb-[38px]']">
       <div class="hidden  flex-row items-center justify-between px-2 sm:mr-[34px] sm:flex">
        <div class="flex flex-row">
            <input type="text" name="" v-model="searchedContent" placeholder="Search for news..." class="rounded border border-blue pl-[10px] pr-[40px] py-[8px] bg-light-blue outline-none text-xs box-border text-black sm:w-[230px] lg:w-[455px] lg:px-[14px] lg:py-[14px] lg:text-sm  focus:border focus:border-black">
            <div class="relative flex flex-row items-center">
                <div class="absolute right-0">
                    <a href="#" v-on:click="userSearch()"> <i class="fa fa-search mx-4 hover:text-sky-blue" aria-hidden="true"></i></a>
                </div>
            </div>
            <div class="flex flex-row justify-between items-center px-[10px] py-[8px] border border-black text-xs w-[166px] h-[46px] ml-[10px] rounded-md shadow-lg lg:ml-5 lg:w-[256px] lg:px-[14px] lg:py-[14px] lg:max-w-[256px] lg:text-sm"> <div>
                Latest news on <a href="" class="text-sky-blue">Covid-19</a>
            </div> 
            <i class="fa fa-arrow-right" aria-hidden="true"></i></div>
        </div>
        <div class="text-black  text-sm  flex flex-row items-center">
            <i class="fa fa-user-o fa-lg" aria-hidden="true"></i>
            <h1 class="pl-[17px] sm:pl-[10px] hidden lg:block text-sm">My Profile</h1>  
            
        </div>
       </div>

       <div>

        <div class="relative h-12">
            <div class="w-full absolute flex flex-row justify-end px-4 sm:hidden">
                    <i class="fa fa-times fa-lg" aria-hidden="true" v-if="hamburger" @click="showMenu(false)"></i>
                    <i class="fa fa-bars fa-lg" aria-hidden="true" v-else @click="showMenu(true)"></i>
            </div>
        </div>
<!-- menu -->
    <Hamburger v-if="hamburger" @user-search-sm="(n)=>this.$emit('userSearchSm', n)" @sendHamburgerStatus="(status)=>this.hamburger=status"/>     
    </div>
    </div>
    
</template>
<script>
import Hamburger from "./hambuger.vue"
export default {
    name: "TopSearch",
    components: { Hamburger },
    data() {
        return {
            hamburger: false,
            searchedContent: ''
        }
    },
    props: {
    },
    methods: {
        showMenu(status) {
            this.hamburger = status
        },
        userSearch() {
            // let text = document.getElementById('searchedContent').value
            this.$emit('userSearch', this.searchedContent)
        },
    },
    emits: ['userSearch', 'userSearchSm']
}
</script>
<style lang="">
    
</style>