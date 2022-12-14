<template lang="">

    <div class="pt-2 mb-4 lg:pt-[15px] lg:mb-[38px]">
       <div class="hidden  flex-row items-center justify-between px-2 sm:mr-[34px] sm:flex">
        <div class="flex flex-row">
            <input type="text" name="" id="" placeholder="Search for news..." class="rounded border border-blue pl-[10px] pr-[40px] py-[8px] bg-light-blue outline-none text-xs box-border text-black sm:w-[230px] lg:w-[455px] lg:px-[14px] lg:py-[14px] lg:text-sm  focus:border focus:border-black">
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
            <h1 class="pl-[17px] sm:pl-[10px] hidden lg:block text-sm">My Profile</h1>  
            
        </div>
       </div>

       <div>
<!-- hamburger icon -->
        <div class="absolute top-0 block m-4 sm:hidden ">
        <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
       </div>
<!-- menu -->
    <div class="absolute w-screen h-[999px] bg-white z-[99] p-3 space-y-3 flex flex-col text-lg sm:hidden">
        <div class="w-full flex flex-row justify-end mb-8">
            <i class="fa fa-times fa-lg " aria-hidden="true"></i>  
        </div>
        <div class="text-black  text-sm  flex flex-row items-center justify-end">
            <i class="fa fa-user-o fa-lg" aria-hidden="true"></i>
            <h1 class="pl-[17px] block text-sm">My Profile</h1>
        </div>

        <div class="flex flex-row">
            <input type="text" name="" id="" placeholder="Search for news..." class="rounded border border-blue h-[46px] pl-[10px] pr-[40px] py-[8px] bg-light-blue w-full outline-none text-sm box-border text-black focus:border focus:border-black">
                    
            <div class="relative flex flex-row items-center">
                <div class="absolute right-0">
                    <a href="#"> <i class="fa fa-search mx-4 hover:text-sky-blue" aria-hidden="true"></i></a>   
                </div>
            </div>
        </div>

        <div class="flex flex-row justify-between items-center px-[10px] py-[8px] border border-black text-sm w-full h-[46px] rounded-md shadow-lg">
            <div>
                Latest news on <a href="" class="text-sky-blue">Covid-19</a>
            </div> 
            <i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
        </div>

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