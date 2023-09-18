import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import styles from './styles/less/App.module.less'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class={styles?.main}>
        <nav class={styles?.nav}>
          <RouterLink to="/todo" class={styles}>Todo</RouterLink>
        </nav>
        <RouterView />
      </div>
    )
  },
})
