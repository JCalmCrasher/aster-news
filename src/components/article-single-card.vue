<template>
  <div class="bg-white max-h-[191px] pl-[23px]">
    <div class="rounded flex flex-row mt-[17px]">
      <div>
        <div class="max-w-[290px]">
          <a :href="url"
            class="text-base font-medium mb-[10px] text-black  hover:text-sky-blue sm:max-w-[192px] line-clamp-3 sm:line-clamp-3" target="_blank">
            {{ title }}
          </a>
        </div>

        <p
          class="font-normal text-sm text-black opacity-[0.6] max-w-[179px] max-h-[64px] min-h-[64px] sm:max-w-[279px] lg:max-w-[179px] line-clamp-3">
          {{ content }}
        </p>
      </div>
      <div class="mx-[17px] ">
        <img :src="[image ? image : '../img/phone.png']" alt="" class="w-[102px] h-[102px]" />
      </div>
    </div>
    <div class="flex flex-row justify-between flex-wrap mt-2 box-border mb-[13px]  mr-[25px]">
      <div class="flex flex-row text-xs text-black opacity-40">
        <div class="mr-[19px] w-[48px] line-clamp-1">{{ publisher }}</div>
        <div>{{ time }}</div>
      </div>

      <div class="flex flex-row text-xs text-blue-deep ml-[37p]">
        <div class="hover:text-sky-blue">
          <i class="fa fa-upload mr-[10px]" aria-hidden="true"></i> <a href="#">Share</a>
        </div>
        <div class="hover:text-sky-blue">
          <i class="fa fa-get-pocket mr-[10px] ml-[17px]" aria-hidden="true"></i><a href="#">Read Later</a>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleSingleCard",
  props: {
    title: String,
    content: String,
    image: String,
    publisher: String,
    time: String,
    url: String,
    // formatDistanceToNow
  },
};
</script>
<style lang=""></style>
