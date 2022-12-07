<template lang="">
    <div>
        <div class="mb-[22px] mx-2 sm:mx-0">
            <a class="text-xl font-bold text-black">Top Stories for you</a>
        </div>

        <div class="mx-4 mb-6 grid grid-cols-3 gap-3 sm:mx-0 lg:flex lg:flex-row lg:space-x-[10px]">
            <button class="btn-regular bg-sky-blue text-white">All</button>
            <button class="btn-regular">Andriod</button>
            <button class="btn-regular">Cricket</button>
            <button class="btn-regular">Iphone</button>
            <button class="btn-regular">Google</button>
            <button class="btn-regular">Games </button>
            <button class="btn-regular">Health</button>
            <div class="flex flex-row items-center">
            <i class="fa fa-ellipsis-h fa-lg self-center ml-[22px] block" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"TopStory"
}
</script>
<style lang="">
    
</style>