<template lang="pug">
  YooGridLayout(
    rows="*"
    :cols="doSetRows(takeAnswers)"
    :class="['yoo-quiz']"
  )
    p(
      row="1"
      col="1"
      :class="['yoo-quiz__question']"
    ) {{ takeQuestion.text.ptBR }}
      span(
        v-if="takeQuestion.required"
      ) *

    YooSwitchCard(
      v-for="(ans, index) in takeQuestion.answers"
      :key="'radio-' + takeQuestion.id + '-' + ans.id + '-' + index"
      :row="index+2"
      :col="1"
      :class="['yoo-quiz__switch-card']"
      :textPosition="textPosition"
      :text="ans.text.ptBR"
      :checked="doTakeStatus(index)"
      @response='doTap($event, takeQuestion.id, index, ans.override, takeQuestion.type)'
    )

</template>

<script>

import YooGridLayout from '@/components/quarks/YooGridLayout/YooGridLayout.vue'
import YooSwitchCard from '@/components/molecules/YooSwitchCard/YooSwitchCard.vue'
import PropsConfig from '@/components/molecules/YooQuizQuestion/YooQuizQuestion.config'

export default {
  name: 'YooQuizQuestion',
  props: {
    textPosition: {
      type: String,
      default: 'right',
      validator: value => PropsConfig.textPosition.options.includes(value)
    },
    question: {
      type: Object,
      required: true
    },
    answers: {
      type: Array,
      required: true
    }
  },
  components: {
    YooGridLayout,
    YooSwitchCard
  },
  data: function () {
    return {
      localAnswers: []
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.localAnswers = this.answers
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  computed: {
    takeQuestion () {
      return this.question
    },
    takeAnswers () {
      return this.question.answers || []
    }
  },
  methods: {
    doSetRows (answers) {
      return answers
        .map(elm => 'auto')
        .join(',')
    },
    doTap (event, questionId, answerId, override, type) {
      if ((override && event) || type === 'radio') {
        for (var answer in this.localAnswers) {
          this.$set(this.localAnswers[answer], 'status', false)
        }
      } else {
        for (var otherAnswer in this.localAnswers) {
          if (this.localAnswers[otherAnswer].override === true) {
            this.localAnswers[otherAnswer].status = false
          }
        }
      }

      this.$set(this.localAnswers[answerId], 'status', event)
      return this.$emit('tapChoice', this.localAnswers)
    },
    doTakeStatus (ans) {
      return this.localAnswers && this.localAnswers[ans]
        ? this.localAnswers[ans].status
        : false
    }
  },
  filters: {},
  watch: {}
}
</script>

<style src="./YooQuizQuestion.sass" lang="sass" scoped></style>
