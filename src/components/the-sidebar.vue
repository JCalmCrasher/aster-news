<template>
  <div class="w-full sm:w-[260px] h-full">
    <div class="py-5">
      <div class="flex gap-4 items-center px-[30px]">
        <LogoSVG />

        <span class="font-bold text-lg text-blue-deep">Aster News</span>
      </div>
      <div class="mt-7">
        <ul class="flex flex-col gap-1">
          <li v-for="(menu, index) in menus" :key="index">
            <hr v-if="menu.isSingle" class='border-[0.2px] border-[#becbd1] opacity-60' />
            <a
              :class="[
                menuClass,
                menu.isActive ? 'bg-light-blue text-sky-blue font-bold rounded-r-[37px]' : ''
              ]"
              :href="menu.link"
            >
              <component :is="menu.icon"></component>
              {{ menu.name }}
            </a>
            <hr v-if="menu.isSingle" class='border-[0.2px] border-[#becbd1] opacity-60' />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="js">
import LogoSVG from "../assets/logo.svg";
import HomeIcon from "../assets/home.svg";
import GlobeIcon from "../assets/globe.svg";
import BusinessIcon from "../assets/briefcase.svg";
import HealthIcon from "../assets/activity.svg";
import Covid19Icon from "../assets/shield.svg";
import EntertainmentIcon from "../assets/play-circle.svg";
import SportsIcon from "../assets/award.svg";
import MessageIcon from "../assets/message-circle.svg";
import NotificationIcon from "../assets/bell.svg";
import SettingsIcon from "../assets/settings.svg";

export default {
  name: "TheSidebar",
  components: { LogoSVG,HomeIcon,GlobeIcon, BusinessIcon,HealthIcon,Covid19Icon,EntertainmentIcon,
SportsIcon,
MessageIcon,
NotificationIcon,
SettingsIcon },
  data() {
    return {
      menus:[
        {
          name:'Top Stories',
          icon:HomeIcon,
          link:'/',
          isActive:true
        },
        {
          name:'Around the World',
          icon:GlobeIcon,
          link:'/',
          isActive:false
        },
        {
          name:'Health',
          icon:HealthIcon,
          link:'/',
          isActive:false
        },
        {
          name:'Covid 19',
          icon:Covid19Icon,
          link:'/',
          isActive:false,
          isSingle:true
        },
        {
          name:'Entertainment',
          icon:EntertainmentIcon,
          link:'/',
          isActive:false,
        },
        {
          name:'Sports',
          icon:SportsIcon,
          link:'/',
          isActive:false,
        },
        {
          name:'Discussion',
          icon:MessageIcon,
          link:'/',
          isActive:false
        },
        {
          name:'Notification',
          icon:NotificationIcon,
          link:'/',
          isActive:false
        },
        {
          name:'News Feed Settings',
          icon:SettingsIcon,
          link:'/',
          isActive:false
        }
      ],
       menuClass:"pl-[30px] flex items-center gap-[22px] w-full hover:bg-light-blue cursor-pointer py-4",
    }
  },
};
</script>
<style lang=""></style>
