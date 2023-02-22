<template lang="">
    <div>
        <div class="mb-[22px] mx-2 sm:mx-0">
            <a class="text-xl font-bold text-black">Top Stories for you</a>
        </div>

        <div class="mx-4 mb-6 grid grid-cols-3 gap-3 sm:mx-0 lg:flex lg:flex-row lg:space-x-[10px]">
            <!-- <button class="btn-regular bg-sky-blue text-white">All</button> -->
            <button class="btn-regular" v-for="(button, i) in buttons" @click="getButtonText(i)" :class="selectedIndex === i ? 'btn-regular bg-sky-blue text-white':''">{{ button.valButton }}</button>

            <div class="flex flex-row items-center">
            <i class="fa fa-ellipsis-h fa-lg self-center ml-[22px] block" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TopStory",

    data() {
        return {
            // buttons: ['Cricket', 'Iphone', 'Google', 'Games', 'Health', 'Football']
            buttons: [
                { 'valButton': 'All' },
                { 'valButton': 'Cricket' },
                { 'valButton': 'Iphone' },
                { 'valButton': 'Google' },
                { 'valButton': 'Games' },
                { 'valButton': 'Health' },
                { 'valButton': 'Football' }
            ],
            selectedIndex: 0
        }
    },

    methods: {
        getButtonText(i) {
            const clickedButtonIndex = this.buttons.findIndex((b, index) => index === i);
            for (let i = 0; i < this.buttons.length; i++) {
                if (clickedButtonIndex === i) {
                    this.selectedIndex = i
                    this.$emit('topStoryButton', this.buttons[i].valButton)

                    break;

                }
            }
        }
    }

}
</script>
<style lang="">
    
</style>