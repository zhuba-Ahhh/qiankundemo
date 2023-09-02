import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Copyright',
  render() {
    return (
      <div class="copyright">
        <p>
          Created by{' '}
          <a href="https://github.com/zhuba-Ahhh" target="_blank">
            zhuba-Ahhh
          </a>
        </p>
        <p>Powered by Vue 3 & TypeScript</p>
      </div>
    )
  },
})
