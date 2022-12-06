<template lang="">
    <div class="pt-2 mb-4 sm:pt-[15px] sm:mb-[38px]">
       <div class="flex flex-row items-center justify-between px-1">
        <div class="flex flex-row">
            <input type="text" name="" id="" placeholder="Search for news..." class="rounded  pl-[10px] pr-[35px] py-[8px] bg-light-blue outline-none text-xs box-border text-black sm:w-[495px] sm:px-[14px] sm:py-[14px] sm:text-sm focus:border">
            <div class="relative flex flex-row items-center ">
                <div class="absolute right-0">
                    <a href="#"> <i class="fa fa-search mx-4 hover:text-sky-blue" aria-hidden="true"></i></a>
                   
                </div>
            </div>
        </div>
        <div class="px-[10px] py-[8px] border text-xs w-[166px] sm:w-[256px] sm:px-[14px] sm:py-[14px] sm:max-w-[256px] sm:text-sm flex flex-row justify-between items-center"> <div>
            Latest news on <a href="" class="text-sky-blue">Covid-19</a>
        </div> 
        <i class="fa fa-arrow-right" aria-hidden="true"></i></div>
        <div class="text-black  text-sm  flex flex-row items-center">
            <i class="fa fa-user-o fa-lg" aria-hidden="true"></i>
            <h1 class="pl-[17px] hidden sm:block">My Profile</h1>  
            
        </div>
       </div>
    </div>
</template>
<script>
export default {
    name: "TopSearch"
}
</script>
<style lang="">
    
</style>