<template>
    <div class="bg-white max-h-[191px] pl-[23px]">
        <div class="rounded flex flex-row mt-[17px]">
            <div>
                <div class="max-w-[290px] mb-[10px]">
                    <Skeletor height="40" width="200" />
                </div>

                <div class="max-w-[179px] max-h-[64px] min-h-[64px] sm:max-w-[279px] lg:max-w-[179px]">
                    <Skeletor height="60" width="205" />
                </div>
            </div>
            <div class="mx-[17px]">
                <Skeletor height='102' width='102' />
            </div>
        </div>
        <div class="flex flex-row justify-between flex-wrap mt-2 box-border mb-[13px]  mr-[14px]">
            <div class="flex flex-row text-xs text-black opacity-40">
                <div class="mr-[50px] w-[48px]">
                    <Skeletor height='12' width='150' />
                </div>
            
            </div>

            <div class="flex flex-row text-xs text-blue-deep items-center">
                <div class="hover:text-sky-blue">
                    <Skeletor height='12' width='150'/>
                </div>
            </div>
        </div>
    </div>
    <!-- <Skeletor v-for="i in 5" />
    <Skeletor width="350" height="30" /> -->
</template>
  
<script>
import 'vue-skeletor/dist/vue-skeletor.css';
import { Skeletor } from 'vue-skeletor ';
export default {
    name: "my-skeleton",
    components: { Skeletor }
};
</script>
  