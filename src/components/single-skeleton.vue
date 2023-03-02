<template>
    <div class="rounded flex flex--reverse lg:flex-row bg-white h-[380px] lg:h-[164px] box-border">
        <div class="py-[17px] pl-[23px] pr-4 sm:max-w-[800px] lg:max-w-[530px] lg:1">
            <a :href="url"
                class="text-base font-medium mb-[10px] text-black hover:text-sky-blue max-w-[360px] sm:max-w-[800px] lg:max-w-[530px] line-clamp-1">
                <Skeletor height="15" width="400" />
            </a>

            <div class="flex flex-row justify-center my-[17px] lg:hidden">
                <Skeletor width='173' height='130' />
            </div>

            <div class="max-w-[360px] sm:max-w-[800px] lg:max-w-[530px]">
                <p class="font-normal text-sm text-black opacity-[0.6] max-w-[360px] max-h-[94px] min-h-[64p] line-clamp-4 sm:max-w-[800px] lg:max-w-[520px] lg:line-clamp-3">
                    <Skeletor height="80" width="405" />
                </p>
            </div>

            <div class="flex flex-row justify-between flex-wrap mt-[50px] box-border mb-[13px] lg:mt-[20px]">
                <div class="flex flex-row text-xs text-black opacity-40">
                    <Skeletor height='12' width='150'/>
                </div>

                <div class="flex flex-row text-xs text-blue-deep">
                    <Skeletor height='12' width='150'/>
                </div>
            </div>
        </div>
        <div class="ml-[30px] my-[17px] hidden lg:block">
            <Skeletor width='173' height='130'/>
        </div>
    </div>
</template>

<script>
import 'vue-skeletor/dist/vue-skeletor.css';
import { Skeletor } from 'vue-skeletor ';
export default {
    name: "singleSkeleton",
    components: { Skeletor }
}
</script>