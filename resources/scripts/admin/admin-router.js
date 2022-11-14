import abilities from '@/scripts/admin/stub/abilities'



const Login = () => import('@/scripts/admin/views/auth/Login.vue')
const LayoutBasic = () => import('@/scripts/admin/layouts/LayoutBasic.vue')
const LayoutLogin = () => import('@/scripts/admin/layouts/LayoutLogin.vue')
const ResetPassword = () =>
  import('@/scripts/admin/views/auth/ResetPassword.vue')
const ForgotPassword = () =>
  import('@/scripts/admin/views/auth/ForgotPassword.vue')

// Dashboard
const Dashboard = () => import('@/scripts/admin/views/dashboard/Dashboard.vue')

// Customers
const CustomerIndex = () => import('@/scripts/admin/views/customers/Index.vue')
const CustomerCreate = () =>
  import('@/scripts/admin/views/customers/Create.vue')
const CustomerView = () => import('@/scripts/admin/views/customers/View.vue')

//Settings
const SettingsIndex = () =>
  import('@/scripts/admin/views/settings/SettingsIndex.vue')
const AccountSetting = () =>
  import('@/scripts/admin/views/settings/AccountSetting.vue')
const CompanyInfo = () =>
  import('@/scripts/admin/views/settings/CompanyInfoSettings.vue')
const Preferences = () =>
  import('@/scripts/admin/views/settings/PreferencesSetting.vue')

const Notifications = () =>
  import('@/scripts/admin/views/settings/NotificationsSetting.vue')


const CustomFieldsIndex = () =>
  import('@/scripts/admin/views/settings/CustomFieldsSetting.vue')

const MailConfig = () =>
  import('@/scripts/admin/views/settings/MailConfigSetting.vue')
const FileDisk = () =>
  import('@/scripts/admin/views/settings/FileDiskSetting.vue')
const Backup = () => import('@/scripts/admin/views/settings/BackupSetting.vue')

const RolesSettings = () =>
  import('@/scripts/admin/views/settings/RolesSettings.vue')

// Items
const ItemsIndex = () => import('@/scripts/admin/views/items/Index.vue')
const ItemCreate = () => import('@/scripts/admin/views/items/Create.vue')



// Users
const UserIndex = () => import('@/scripts/admin/views/users/Index.vue')
const UserCreate = () => import('@/scripts/admin/views/users/Create.vue')

// Facilities
const FacilityIndex = () => import('@/scripts/admin/views/facilities/Index.vue')
const FacilityCreate = () => import('@/scripts/admin/views/facilities/Create.vue')





// Reports
const ReportsIndex = () =>
  import('@/scripts/admin/views/reports/layout/Index.vue')



// Modules
const ModuleIndex = () => import('@/scripts/admin/views/modules/Index.vue')

const ModuleView = () => import('@/scripts/admin/views/modules/View.vue')
const NotFoundPage = () => import('@/scripts/admin/views/errors/404.vue')

export default [
  


  {
    path: '/',
    component: LayoutLogin,
    meta: { requiresAuth: false, redirectIfAuthenticated: true },
    children: [
      {
        path: '',
        component: Login,
      },
      {
        path: 'login',
        name: 'login',
        component: Login,
      },
      {
        path: 'forgot-password',
        component: ForgotPassword,
        name: 'forgot-password',
      },
      {
        path: '/reset-password/:token',
        component: ResetPassword,
        name: 'reset-password',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin', 
    component: LayoutBasic, 
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: { ability: abilities.DASHBOARD },
        component: Dashboard,
      },

      // Customers
      {
        path: 'customers',
        meta: { ability: abilities.VIEW_CUSTOMER },
        component: CustomerIndex,
      },
      {
        path: 'customers/create',
        name: 'customers.create',
        meta: { ability: abilities.CREATE_CUSTOMER },
        component: CustomerCreate,
      },
      {
        path: 'customers/:id/edit',
        name: 'customers.edit',
        meta: { ability: abilities.EDIT_CUSTOMER },
        component: CustomerCreate,
      },
      {
        path: 'customers/:id/view',
        name: 'customers.view',
        meta: { ability: abilities.VIEW_CUSTOMER },
        component: CustomerView,
      },
      
      

      //settings
      {
        path: 'settings',
        name: 'settings',
        component: SettingsIndex,
        children: [
          {
            path: 'account-settings',
            name: 'account.settings',
            component: AccountSetting,
          },
          {
            path: 'clinic',
            name: 'clinic',
            meta: { ability: abilities.MANAGE_COMPANY },
            component: CompanyInfo,
          },
          {
            path: 'preferences',
            name: 'preferences',
            meta: { ability: abilities.MANAGE_COMPANY },
            component: Preferences,
          },
          
          {
            path: 'notifications',
            name: 'notifications',
            meta: { ability: abilities.MANAGE_COMPANY },
            component: Notifications,
          },
          {
            path: 'roles-settings',
            name: 'roles.settings',
            meta: { ability: abilities.MANAGE_ROLE },
            component: RolesSettings,
          },
          
          
          
          {
            path: 'custom-fields',
            name: 'custom.fields',
            meta: { ability: abilities.VIEW_CUSTOM_FIELDS },
            component: CustomFieldsIndex,
          },
          

          {
            path: 'mail-configuration',
            name: 'mailconfig',
            meta: { isOwner: true },
            component: MailConfig,
          },
          {
            path: 'file-disk',
            name: 'file-disk',
            meta: { isOwner: true },
            component: FileDisk,
          },
          {
            path: 'backup',
            name: 'backup',
            meta: { isOwner: true },
            component: Backup,
          },
         
        ],
      },

      // Items
      {
        path: 'items',
        meta: { ability: abilities.VIEW_ITEM },
        component: ItemsIndex,
      },
      {
        path: 'items/create',
        name: 'items.create',
        meta: { ability: abilities.CREATE_ITEM },
        component: ItemCreate,
      },
      {
        path: 'items/:id/edit',
        name: 'items.edit',
        meta: { ability: abilities.EDIT_ITEM },
        component: ItemCreate,
      },

      // Facilities
      {
        path: 'facilities',
        name: 'facilities.index',
        meta: { ability: abilities.VIEW_USER },
        component: FacilityIndex,
      },

      // Users
      {
        path: 'users',
        name: 'users.index',
        meta: { ability: abilities.VIEW_USER },
        component: UserIndex,
      },
      {
        path: 'users/create',
        meta: { ability: abilities.CREATE_USER },
        name: 'users.create',
        component: UserCreate,
      },
      {
        path: 'users/:id/edit',
        name: 'users.edit',
        meta: { ability: abilities.EDIT_USER },
        component: UserCreate,
      },


      // Modules
      {
        path: 'modules',
        name: 'modules.index',
        meta: { isOwner: true },
        component: ModuleIndex,
      },

      {
        path: 'modules/:slug',
        name: 'modules.view',
        meta: { isOwner: true },
        component: ModuleView,
      },

      // Reports
      {
        path: 'reports',
        meta: { ability: abilities.VIEW_FINANCIAL_REPORT },
        component: ReportsIndex,
      },
    ],
  },
  { path: '/:catchAll(.*)', component: NotFoundPage },
]
