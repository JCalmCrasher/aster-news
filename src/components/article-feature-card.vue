<template>
  <div class="rounded flex flex--reverse lg:flex-row bg-white h-[380px] lg:h-[164px] box-border">
    <div class="py-[17px] pl-[23px] pr-4 sm:max-w-[800px] lg:max-w-[530px] lg:1">
      <a :href="url"
        class="text-base font-medium mb-[10px] text-black hover:text-sky-blue max-w-[360px] sm:max-w-[800px] lg:max-w-[530px] line-clamp-1"
        :title="title">
        {{ title }}
      </a>

      <div class="flex flex-row justify-center my-[17px] lg:hidden">
        <img :src="[image ? image : this.fallBack]" class="w-[173px] h-[130px] object-contain" />
      </div>

      <div class="max-w-[360px] sm:max-w-[800px] lg:max-w-[530px]">
        <p
          class="font-normal text-sm text-black opacity-[0.6] max-w-[360px] max-h-[94px] min-h-[64p] line-clamp-4 sm:max-w-[800px] lg:max-w-[520px] lg:line-clamp-3">
          {{ content }}
        </p>
      </div>

      <div class="flex flex-row justify-between flex-wrap mt-[50px] box-border mb-[13px] lg:mt-[20px]">
        <div class="flex flex-row text-xs text-black opacity-40">
          <div class="mr-[19px] w-[48px] overflow-hidden text-ellipsis whitespace-nowrap" :title="publisher">{{ publisher
          }}</div>
          <div>{{ time }}</div>
        </div>

        <div class="flex flex-row text-xs text-blue-deep">
          <div class="hover:text-sky-blue">
            <i class="fa fa-upload mr-[10px]" aria-hidden="true"></i> <a href="#">Share</a>
          </div>
          <div class="hover:text-sky-blue">
            <i class="fa fa-get-pocket mr-[10px] ml-[17px]" aria-hidden="true"></i><a href="#">Read Later</a>

          </div>
        </div>
      </div>
    </div>
    <div class="ml-[30px] my-[17px] hidden lg:block">
      <img :src="[image ? image : this.fallBack]" alt="image" class="w-[173px] h-[130px] object-cover" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleFeatureCard",
  props: {
    title: String,
    content: String,
    image: String,
    publisher: String,
    time: String,
    url: String,
  },
  data(){
    return{
      fallBack: 'src/img/default.jpg'
    }
  }
};
</script>
