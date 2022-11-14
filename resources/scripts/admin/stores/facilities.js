import axios from 'axios'
import { defineStore } from 'pinia'
import { useNotificationStore } from '@/scripts/stores/notification'
import { handleError } from '@/scripts/helpers/error-handling'

export const useFacilitiesStore = (useWindow = false) => {
  const defineStoreFunc = useWindow ? window.pinia.defineStore : defineStore
  const { global } = window.i18n

  return defineStoreFunc({
    id: 'facilities',
    state: () => ({
      roles: [],
      facilities: [],
      totalFacilities: 0,
      currentFacility: null,
      selectAllField: false,
      selectedFacilities: [],
      customerList: [],
      userList: [],

      userData: {
        name: '',
        email: '',
        password: null,
        phone: null,
        companies: [],
      },
    }),

    actions: {
      resetFacilityData() {
        this.userData = {
          name: '',
          email: '',
          password: null,
          phone: null,
          role: null,
          companies: [],
        }
      },

      fetchFacilities(params) {
        return new Promise((resolve, reject) => {
          axios
            .get(`/api/v1/facilities`, { params })
            .then((response) => {
              this.facilities = response.data.data
              this.totalFacilities = response.data.meta.total
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      fetchFacility(id) {
        return new Promise((resolve, reject) => {
          axios
            .get(`/api/v1/facilities/${id}`)
            .then((response) => {
              this.userData = response.data.data
              if (this.userData?.companies?.length) {
                this.userData.companies.forEach((c, i) => {
                  this.userData.roles.forEach((r) => {
                    if (r.scope === c.id)
                      this.userData.companies[i].role = r.name
                  })
                })
              }
              resolve(response)
            })
            .catch((err) => {
              console.log(err)
              handleError(err)
              reject(err)
            })
        })
      },

      fetchRoles(state) {
        return new Promise((resolve, reject) => {
          axios
            .get(`/api/v1/roles`)
            .then((response) => {
              this.roles = response.data.data
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      addFacility(data) {
        return new Promise((resolve, reject) => {
          axios
            .post('/api/v1/facilities', data)
            .then((response) => {
              this.facilities.push(response.data)
              const notificationStore = useNotificationStore()

              notificationStore.showNotification({
                type: 'success',
                message: global.t('facilities.created_message'),
              })
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      updateFacility(data) {
        return new Promise((resolve, reject) => {
          axios
            .put(`/api/v1/facilities/${data.id}`, data)
            .then((response) => {
              if (response) {
                let pos = this.facilities.findIndex(
                  (user) => user.id === response.data.data.id
                )
                this.facilities[pos] = response.data.data
              }
              const notificationStore = useNotificationStore()
              notificationStore.showNotification({
                type: 'success',
                message: global.t('facilities.updated_message'),
              })
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      deleteFacility(id) {
        const notificationStore = useNotificationStore()

        return new Promise((resolve, reject) => {
          axios
            .post(`/api/v1/facilities/delete`, { facilities: id.ids })
            .then((response) => {
              let index = this.facilities.findIndex((user) => user.id === id)
              this.facilities.splice(index, 1)
              notificationStore.showNotification({
                type: 'success',
                message: global.tc('facilities.deleted_message', 1),
              })
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      deleteMultipleFacilities() {
        return new Promise((resolve, reject) => {
          axios
            .post(`/api/v1/facilities/delete`, { facilities: this.selectedFacilities })
            .then((response) => {
              this.selectedFacilities.forEach((user) => {
                let index = this.facilities.findIndex(
                  (_user) => _user.id === user.id
                )
                this.facilities.splice(index, 1)
              })
              const notificationStore = useNotificationStore()
              notificationStore.showNotification({
                type: 'success',
                message: global.tc('facilities.deleted_message', 2),
              })
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      searchFacilities(params) {
        return new Promise((resolve, reject) => {
          axios
            .get(`/api/v1/search`, { params })
            .then((response) => {
              this.userList = response.data.facilities.data
              this.customerList = response.data.customers.data
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      setSelectAllState(data) {
        this.selectAllField = data
      },

      selectFacility(data) {
        this.selectedFacilities = data
        if (this.selectedFacilities.length === this.facilities.length) {
          this.selectAllField = true
        } else {
          this.selectAllField = false
        }
      },

      selectAllFacilities() {
        if (this.selectedFacilities.length === this.facilities.length) {
          this.selectedFacilities = []
          this.selectAllField = false
        } else {
          let allFacilityIds = this.facilities.map((user) => user.id)
          this.selectedFacilities = allFacilityIds
          this.selectAllField = true
        }
      },
    },
  })()
}
