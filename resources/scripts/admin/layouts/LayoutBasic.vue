<template>
  <div v-if="isAppLoaded" class="h-full">
    <NotificationRoot />

    <SiteHeader />

    <SiteSidebar />


    <main
      class="h-screen h-screen-ios overflow-y-auto md:pl-56 xl:pl-64 min-h-0"
    >
      <div class="pt-16 pb-16">
        <router-view />
      </div>
    </main>
  </div>

  <BaseGlobalLoader v-else />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/scripts/admin/stores/global'
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/scripts/admin/stores/user'
import { useModalStore } from '@/scripts/stores/modal'
import { useCompanyStore } from '@/scripts/admin/stores/company'

import SiteHeader from '@/scripts/admin/layouts/partials/TheSiteHeader.vue'
import SiteSidebar from '@/scripts/admin/layouts/partials/TheSiteSidebar.vue'
import NotificationRoot from '@/scripts/components/notifications/NotificationRoot.vue'

const globalStore = useGlobalStore()
const route = useRoute()
const userStore = useUserStore()
const router = useRouter()
const modalStore = useModalStore()
const { t } = useI18n()
const companyStore = useCompanyStore()

const isAppLoaded = computed(() => {
  return globalStore.isAppLoaded
})

onMounted(() => {
  globalStore.bootstrap().then((res) => {
    if (route.meta.ability && !userStore.hasAbilities(route.meta.ability)) {
      router.push({ name: 'account.settings' })
    } else if (route.meta.isOwner && !userStore.currentUser.is_owner) {
      router.push({ name: 'account.settings' })
    }

   
  })
})
</script>
