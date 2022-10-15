<template>
  <div class="outline-1 w-[260px] h-full">
    <div class="py-5">
      <div class="flex gap-4 items-center px-[30px]">
        <LogoSVG />
        <span class="font-bold text-lg text-blue-deep">Aster News</span>
      </div>
      <div class="mt-7">
        <ul class="flex flex-col gap-1">
          <li v-for="(menu, index) in menus" :key="index" class="flex">
            <a
            :class="menu.isActive ? 'text-sky-blue font-bold' : ''"
              class="text-black w-full hover:bg-light-blue cursor-pointer py-4 rounded-r-[37px]"
              :href="menu.link"
            >
              {{ menu.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="js">
import LogoSVG from "../assets/logo.svg";
export default {
  name: "TheSidebar",
  components: { LogoSVG },
  data() {
    return {
      menus:[
        {
          name:'Top Stories',
          icon:'icon',
          link:'/',
          isActive:true
        },
        {
          name:'Around the World',
          icon:'icon',
          link:'/',
          isActive:false
        },
        {
          name:'Health',
          icon:'icon',
          link:'/',
          isActive:false
        }
      ]
    }
  },
};
</script>
<style lang=""></style>
