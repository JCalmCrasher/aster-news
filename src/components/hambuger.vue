<template>
    <div>
        <div class="absolute w-screen h-[999px] bg-white z-[99] p-3 space-y-3 flex flex-col text-lg sm:hidden">
            <div class="text-black  text-sm  flex flex-row items-center justify-end">
                <i class="fa fa-user-o fa-lg" aria-hidden="true"></i>
                <h1 class="pl-[17px] block text-sm">My Profile</h1>
            </div>

            <div class="flex flex-row">
                <input type="text" name="" id="" placeholder="Search for news..."
                    class="rounded border border-blue h-[46px] pl-[10px] pr-[40px] py-[8px] bg-light-blue w-full outline-none text-sm box-border text-black focus:border focus:border-black">

                <div class="relative flex flex-row items-center">
                    <div class="absolute right-0">
                        <a href="#"> <i class="fa fa-search mx-4 hover:text-sky-blue" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>

            <div
                class="flex flex-row justify-between items-center px-[10px] py-[8px] border border-black text-sm w-full h-[46px] rounded-md shadow-lg">
                <div>
                    Latest news on <a href="" class="text-sky-blue">Covid-19</a>
                </div>
                <i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Hambuger",
    data() {
        return {
            hamburger: false
        }
    },
}

</script>