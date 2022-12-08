<template>
  <div
    class="rounded flex flex--reverse lg:flex-row bg-white h-[380px] lg:h-[164px] box-border"
  >
    <div class="py-[17px] pl-[23px] pr-4 sm:max-w-[800px] lg:max-w-[530px] lg:pr-0">
      <a
        href="#"
        class="text-base font-medium mb-[10px] text-black hover:text-sky-blue max-w-[360px] sm:max-w-[800px] lg:max-w-[530px]"
      >
        Samsung Galaxy F22 launched in India: Price, features, other details
      </a>

      <div class="flex flex-row justify-center my-[17px] lg:hidden">
        <img src="../img/phone.png" alt="" />
      </div>

      <div class="max-w-[360px] sm:max-w-[800px] lg:max-w-[530px]">
        <p
          class="font-normal text-sm text-black opacity-[0.6] max-w-[360px] max-h-[64px] min-h-[64px] sm:max-w-[800px] lg:max-w-[520px] "
        >
          Samsung Galaxy F22 has been launched in India. The new smartphone has
          been priced in the mid-range segment. The new smartphone is powered by
          a MediaTek chipset and features a high refresh rate AMOLED display.
        </p>
      </div>

      <div class="flex flex-row mt-10 lg:mt-0">
        <div class="flex flex-row text-xs text-black opacity-40 mt-[17px]">
          <div class="lg:mr-[19px]">The Mint</div>
          <div>15 mins ago</div>
        </div>

        <div
          class="flex flex-row text-xs mt-[17px] text-blue-deep ml-[37px] lg:ml-[84px]"
        >
          <div class="mx-[19px] hover:text-sky-blue">
            <i class="fa fa-upload mr-[10px]" aria-hidden="true"></i>
            <a href="#">Share</a>
          </div>
          <div class="hover:text-sky-blue">
            <i class="fa fa-get-pocket mr-[10px]" aria-hidden="true"></i>
            <a href="#">Read Later</a>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-[30px] my-[17px] hidden lg:block">
      <img src="../img/phone.png" alt="phone" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleFeatureCard",
};
</script>
