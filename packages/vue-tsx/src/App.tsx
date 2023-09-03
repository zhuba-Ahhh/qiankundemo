import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import './styles/less/App.less'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class="main">
        <nav>
          <RouterLink to="/todo">Todo</RouterLink>
        </nav>
        <RouterView />
      </div>
    )
  },
})
