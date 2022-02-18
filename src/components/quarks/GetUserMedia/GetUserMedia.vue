<template lang="pug">
.get-user-media__container
  video(
    v-if="from === 'camera' || from === 'video'"
    ref="videoElm",
    v-show="visible",
    muted="",
    autoplay="",
    playsinline=""
  )

  img(
    v-if="from === 'image'",
    ref="imageElm",
    v-show="visible"
  )
</template>

<script>
import YooGetUserCamera from '@/components/bosons/GetUserCamera/GetUserCamera'

export default {
  name: 'YooGetUserMedia',
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false
    },
    from: {
      type: String,
      required: true,
      validator: value => [
        'camera',
        'image',
        'video'
      ]
        .includes(value),
      default: 'camera'
    },
    src: {
      type: String,
      required: false,
      default: ''
    },
    player: {
      type: Object,
      required: false,
      default: () => ({})
    },
    width: {
      type: String,
      required: false,
      validator: value =>
        value.match(/^([0-9]{2,})(px)$/gi),
      default: '720px'
    },
    height: {
      type: String,
      required: false,
      validator: value =>
        value.match(/^([0-9]{2,})(px)$/gi),
      default: '480px'
    },
    stream: {
      type: Object,
      required: false,
      default: () => ({
        audio: false,
        video: {
          facingMode: 'user'
        }
      })
    }
  },
  data: () => ({
    localStream: null
  }),
  mounted () {
    return this.doLoad()
  },
  beforeDestroy () {
    if (!this.localStream || !this.localStream.getTracks()) {
      return
    }

    this.localStream
      .getTracks()
      .forEach(track => {
        if (track.readyState === 'live') {
          return track.stop()
        }
      })
  },
  methods: {
    async doLoad () {
      const video = this.$refs.videoElm
      const image = this.$refs.imageElm

      switch (this.from) {
        case 'camera': {
          this.localStream = await this.doGetCamera(
            video,
            this.stream,
            this.width,
            this.height
          )

          return
        }

        case 'video': {
          return this.doGetVideo(
            video,
            this.src,
            this.width,
            this.height,
            this.player
          )
        }

        case 'image': {
          return this.doGetImage(
            image,
            this.src,
            this.width,
            this.height
          )
        }
      }
    },
    async doGetCamera (source, options, width, height) {
      if (!source ||
        !width ||
        !height ||
        !Object.keys(options).length) {
        return
      }

      try {
        const video = await YooGetUserCamera({
          element: source,
          options: {
            ...options,
            video: options.video
              ? {
                width,
                height,
                ...options.video
              }
              : false
          }
        })

        return this.doGetVideo(source, video, width, height)
      } catch (e) {
        this.$emit('permissionDenied')
        return new MediaStream()
      }
    },
    async doGetVideo (nodeElm, video, width, height, player) {
      if (!nodeElm ||
        !video) {
        return
      }

      if (video instanceof MediaStream) {
        nodeElm.srcObject = video
      } else {
        nodeElm.src = video
      }

      if (player) {
        Object
          .entries(player)
          .forEach(([key, value]) => {
            nodeElm[key] = value
          })
      }

      nodeElm.style.width = width
      nodeElm.style.height = height

      nodeElm.play()
      await this.doCreateEvents(nodeElm, 'loadeddata')

      return video
    },
    doGetImage (nodeElm, image, width, height) {
      if (!nodeElm ||
        !image) {
        return
      }

      nodeElm.crossOrigin = '*'
      nodeElm.src = image
      nodeElm.style.width = width
      nodeElm.style.height = height
      return this.doCreateEvents(nodeElm, 'load')
    },
    async doCreateEvents (nodeElm, event) {
      if (!nodeElm ||
          !event) {
        return
      }

      await nodeElm
        .addEventListener(
          event,
          () => {
            this.$emit('load', true)
            this.$emit('output', nodeElm)
          })

      await nodeElm
        .removeEventListener(
          event,
          () => {}
        )
    }
  }
}
</script>

<style scoped lang="sass">
img,
video
  background-color: #000
  object-fit: cover
</style>
