<template>
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-9 xl:gap-8">
    <!-- Amount Due -->
    <DashboardStatsItem
      v-if="userStore.hasAbilities(abilities.VIEW_INVOICE) || true"
      :icon-component="DollarIcon"
      :loading="!dashboardStore.isDashboardDataLoaded"
      route="/admin/dashboard"
      :large="true"
      :label="'Incomplete Signatures'"
    >
      <BaseFormatMoney v-if="false"
        :amount="dashboardStore.stats.totalAmountDue"
        :currency="companyStore.selectedCompanyCurrency"
      />56
    </DashboardStatsItem>

    <!-- Customers -->
    <DashboardStatsItem
      v-if="userStore.hasAbilities(abilities.VIEW_CUSTOMER) || true"
      :icon-component="InvoiceIcon"
      :loading="!dashboardStore.isDashboardDataLoaded"
      route="/admin/dashboard"
      :large="true"
      :label="'Un-reviewed daily reports'"
    >
      {{ dashboardStore.stats.totalCustomerCount }}
    </DashboardStatsItem>

    <!-- Invoices -->
    <DashboardStatsItem
      v-if="userStore.hasAbilities(abilities.VIEW_INVOICE) "
      :icon-component="InvoiceIcon"
      :loading="!dashboardStore.isDashboardDataLoaded"
      route="/admin/invoices"
      :label="'Assignment'"
    >
      {{ dashboardStore.stats.totalInvoiceCount }}
    </DashboardStatsItem>

    <!-- Estimates -->
    <DashboardStatsItem
      v-if="userStore.hasAbilities(abilities.VIEW_ESTIMATE) || true"
      :icon-component="EstimateIcon"
      :loading="!dashboardStore.isDashboardDataLoaded"
      route="/admin/dashboard"
      :label="'DHPPD Summary (7d)'"
      :large="true"
    >
      {{ dashboardStore.stats.totalEstimateCount }}
    </DashboardStatsItem>
  </div>
</template>

<script setup>
import DollarIcon from '@/scripts/components/icons/dashboard/DollarIcon.vue'
import CustomerIcon from '@/scripts/components/icons/dashboard/CustomerIcon.vue'
import InvoiceIcon from '@/scripts/components/icons/dashboard/InvoiceIcon.vue'
import EstimateIcon from '@/scripts/components/icons/dashboard/EstimateIcon.vue'
import abilities from '@/scripts/admin/stub/abilities'
import DashboardStatsItem from './DashboardStatsItem.vue'

import { inject } from 'vue'
import { useDashboardStore } from '@/scripts/admin/stores/dashboard'
import { useCompanyStore } from '@/scripts/admin/stores/company'
import { useUserStore } from '@/scripts/admin/stores/user'

const utils = inject('utils')

const dashboardStore = useDashboardStore()
const companyStore = useCompanyStore()
const userStore = useUserStore()
</script>
