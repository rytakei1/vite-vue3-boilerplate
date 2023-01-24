import IconGraphBoxOutline from '~icons/mdi/graph-box-outline'
import IconAccountBoxOutline from '~icons/mdi/account-box-outline'
export interface IMenuEntry {
  label: string
  icon: any
  path: string
}
const menuEntries: IMenuEntry[] = [
  {
    label: 'Dashboard',
    icon: IconGraphBoxOutline,
    path: '/admin/dashboard',
  },
  {
    label: 'Users',
    icon: IconAccountBoxOutline,
    path: '/admin/users',
  },
]
export const useAdminNav = () => {
  return { menuEntries }
}
