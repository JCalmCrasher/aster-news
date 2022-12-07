<template lang="">
    <div class="pt-2 mb-4 lg:pt-[15px] lg:mb-[38px]">
       <div class="flex flex-row items-center justify-between px-2 sm:mr-[34px]">
        <div class="flex flex-row">
            <input type="text" name="" id="" placeholder="Search for news..." class="rounded  pl-[10px] py-[8px] bg-light-blue outline-none text-xs box-border text-black sm:w-[170px] lg:w-[455px] lg:px-[14px] lg:py-[14px] lg:text-sm focus:border">
            <div class="relative flex flex-row items-center">
                <div class="absolute right-0">
                    <a href="#"> <i class="fa fa-search mx-4 hover:text-sky-blue" aria-hidden="true"></i></a>
                   
                </div>
            </div>
            <div class="flex flex-row justify-between items-center px-[10px] py-[8px] border border-black text-xs w-[166px] h-[46px] ml-[10px] rounded-md shadow-lg lg:ml-5 lg:w-[256px] lg:px-[14px] lg:py-[14px] lg:max-w-[256px] lg:text-sm"> <div>
                Latest news on <a href="" class="text-sky-blue">Covid-19</a>
            </div> 
            <i class="fa fa-arrow-right" aria-hidden="true"></i></div>
        </div>
        <div class="text-black  text-sm  flex flex-row items-center">
            <i class="fa fa-user-o fa-lg" aria-hidden="true"></i>
            <h1 class="pl-[17px] sm:pl-[10px] hidden sm:block text-sm">My Profile</h1>  
            
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