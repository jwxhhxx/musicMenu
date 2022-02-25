import Home from '@/pages/Home'
import Login from '@/pages/Login'
export default [{
  path: '/home',
  component: Home
}, {
  path: '/login',
  component: Login
}, {
  path: '*',
  redirect: '/home'
}]