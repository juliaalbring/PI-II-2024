
import { createRouter, createWebHistory } from 'vue-router'
import Forum from '../components/Forum/home.vue'
import Topics from '../components/Forum/TopicComps/topics.vue'
import CreateTopic from '../components/Forum/TopicComps/create.topic.vue'
import ManageAccount from '../components/Forum/UserComps/manageAccount.vue'
import regsLog from '../components/Forum/UserComps/regs-log.vue'
import topicPage from '../components/Forum/TopicComps/topicPage.vue'
import HomePage from '../components/Home/site_home.vue'
import timeline from '../components/Timeline/timeline.vue'
import history from '../components/História/history.vue'
import artigo from '../components/Artigo/artigo.vue'

const routes = [
  { path: '/forum', component: Forum, name: "forum" },
  { path: '/topics', component: Topics, name: 'topics' },
  { path: '/createTopic', component: CreateTopic, name: 'createTopic'},
  { path: '/manage/:id', component: ManageAccount, name: 'manageAccount'},
  { path: '/regslog', component: regsLog, name: 'regsLog'},
  {
    path: '/acessTopic/:id',
    name: 'TopicPage',
    component: topicPage,
  },
  { path: '/home', component: HomePage, name: 'home'},
  { path: '/linha', component: timeline, name: 'timeline'},,
  { path: '/historia', component: history, name: 'historia'},
  { path: '/artigo', component: artigo, name: 'artigo'}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
