 <template lang="pug">
  .theme-provider(
    :data-composition="composition"
    :data-theme="theme"
  )
    slot
</template>

<script>
export default {
  name: 'ThemeProvider',

  props: {
    composition: {
      type: String,
      default: 'default'
    },
    theme: {
      type: String,
      default: 'default'
    }
  }
}
</script>
