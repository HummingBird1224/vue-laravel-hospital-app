<template>
  <section class="h-screen">
    <NotificationRoot />
  <div class="container px-6 py-12 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 hidden md:flex">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="w-full hidden"
          alt="Phone image"
        />

      <Doctor/>
        
      </div>
      <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
        <div class="w-full">
        <MainLogo
          v-if="!loginPageLogo"
          class="block w-48 h-auto max-w-full mb-2 text-primary-500 "
        />

        <img
          v-else
          :src="loginPageLogo"
          class="block w-48 h-auto max-w-full mb-2 text-primary-500"
        />

        <div class="md:pl-10 xl:pl-0 relative z-50">
        <h1
          class="
            invisible
            mb-3
            text-2xl
            leading-normal
            text-left xl:leading-tight
            md:none
            lg:block
          "
        >
          {{ pageHeading }}
        </h1>
        <p
          class="
            
            text-sm
            not-italic
            font-normal
            leading-normal
            text-left
            xl:text-base xl:leading-6
            md:none
            lg:block
          "
        >
          {{ pageDescription }}
        </p>
      </div>


        <router-view />

        <div
          class="
            pt-4
            mt-0
            text-sm
            not-italic
            font-medium
            leading-relaxed
            text-left text-gray-400
          "
        >
          <p class="mb-3">
            {{ copyrightText }}
            {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import NotificationRoot from '@/scripts/components/notifications/NotificationRoot.vue'
import MainLogo from '@/scripts/components/icons/MainLogo.vue'
import Doctor from '@/scripts/components/svg/Doctor.vue'
import LoginPlanetCrater from '@/scripts/components/svg/LoginPlanetCrater.vue'
import LoginBottomVector from '@/scripts/components/svg/LoginBottomVector.vue'
import LoginBackgroundOverlay from '@/scripts/components/svg/LoginBackgroundOverlay.vue'
import { computed, ref } from 'vue'

const pageHeading = computed(() => {
  if (window.login_page_heading) {
    return window.login_page_heading
  }

  return 'Lorem Ipsum'
})

const pageDescription = computed(() => {
  if (window.login_page_description) {
    return window.login_page_description
  }

  return 'Authentication'
})

const copyrightText = computed(() => {
  if (window.copyright_text) {
    return window.copyright_text
  }
  return 'Copyright @ QALY.'
})

const loginPageLogo = computed(() => {
  if (window.login_page_logo) {
    return window.login_page_logo
  }

  return false
})
</script>

<style lang="scss" scoped>
</style>
