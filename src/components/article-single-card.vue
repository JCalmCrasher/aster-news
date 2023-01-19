<template>
  <div>

  </div>
  <div class="bg-white max-h-[191px] pl-[23px]">
    <div class="rounded flex flex-row mt-[17px]">
      <div>
        <div class="max-w-[290px]">
          <a href="#" class="text-base font-medium mb-[10px] text-black  hover:text-sky-blue sm:max-w-[19px]">
            {{ title }}
          </a>
        </div>

        <p
          class="font-normal text-sm text-black opacity-[0.6] max-w-[179px] max-h-[64px] min-h-[64px] sm:max-w-[279px] lg:max-w-[179px]">
          <!-- The reason behind their disappointment is that iPhone users have
          been.. -->
          {{ content }}
        </p>
      </div>
      <div class="mx-[17px]">
        <img :src="image" alt="battleground" />
      </div>
    </div>
    <div class="flex flex-row mt-2 box-border mb-[13px]">
      <div class="flex flex-row text-xs text-black opacity-40">
        <div class="mr-[19px]">{{ publisher }}</div>
        <div>{{ time }}</div>
      </div>

      <div class="flex flex-row text-xs text-blue-deep ml-[37px]">
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
    time: String
  }
};
</script>
<style lang=""></style>
