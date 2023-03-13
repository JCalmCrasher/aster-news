<template>
  <div class="bg-white max-h-[191px] px-[20px]">
    <div class="rounded flex flex-row mt-[17px]">
      <div>
        <div class="max-w-[290px]">
          <a :href="url"
            class="text-base font-medium mb-[10px] text-black  hover:text-sky-blue sm:max-w-[330px] line-clamp-3 sm:line-clamp-3"
            target="_blank" :title="title">
            {{ title }}
          </a>
        </div>

        <p
          class="font-normal text-sm text-black opacity-[0.6] max-w-[179px] max-h-[64px] min-h-[64px] sm:max-w-[330px] lg:max-w-[220px] line-clamp-3 container">
          {{ content }}
        </p>
      </div>
      <div class="ml-[19px] ">
        <img :src="image || fallBack" @error="setAltImage" alt="news icon" class="w-[102px] h-[102px] object-cover" />
      </div>
    </div>
    <div class="flex flex-row justify-between flex-wrap mt-2 box-border mb-[13px] ">
      <div class="flex flex-row text-xs text-black opacity-40">
        <div class="mr-[19px] w-[48px] overflow-hidden text-ellipsis whitespace-nowrap" :title="publisher">{{ publisher
        }}</div>
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
    defaultImage : String
  },
  data() {
    return {
      fallBack: 'src/img/default.jpg'
    }
  },
  methods: {
    setAltImage(event) {
      event.target.src = this.fallBack
    }
  },
};
</script>
<style lang=""></style>
