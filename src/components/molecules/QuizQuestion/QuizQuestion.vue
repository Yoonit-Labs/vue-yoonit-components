<template lang="pug">
  YooGridLayout(
    rows="*"
    :cols="takeRows"
    :class="['yoo-quiz']"
  )
    p(
      row="1"
      col="1"
      :class="['yoo-quiz__question']"
    ) {{ question.text.enUS }}
      span(
        v-if="question.required"
      ) *

    CheckButton(
      v-for="(ans, index) in question.answers"
      :key="'radio-' + question.id + '-' + ans.id + '-' + index"
      :row="index+2"
      :col="1"
      :class="['yoo-quiz__card']"
      :textPosition="textPosition"
      :text="ans.text.enUS"
      :checked="doTakeStatus(index)"
      :card="true"
      @response='doTap($event, index, ans.override, question.type)'
    )

</template>

<script>

import YooGridLayout from '@/components/bosons/GridLayout/GridLayout.vue'
import CheckButton from '@/components/atoms/CheckButton/CheckButton.vue'
import PropsConfig from '@/components/molecules/QuizQuestion/QuizQuestion.config'

export default {
  name: 'YooQuizQuestion',
  props: {
    textPosition: {
      type: String,
      default: 'left',
      validator: value => PropsConfig.textPosition.options.includes(value)
    },
    question: {
      type: Object,
      required: true,
      validator: value => Object.prototype.hasOwnProperty.call(value, 'answers')
    }
  },
  components: {
    YooGridLayout,
    CheckButton
  },
  data: () => ({
    localAnswers: []
  }),
  mounted () {
    this.localAnswers = this.question.answers
  },
  computed: {
    takeRows () {
      return this.localAnswers
        .map(elm => 'auto')
        .join(',')
    }
  },
  methods: {
    doTap (event, answerId, override, type) {
      if (override || type === 'radio') {
        for (var answer in this.localAnswers) {
          this.localAnswers[answer].status = false
        }
      } else {
        for (var otherAnswer in this.localAnswers) {
          if (this.localAnswers[otherAnswer].override === true) {
            this.localAnswers[otherAnswer].status = false
          }
        }
      }
      this.$set(this.localAnswers[answerId], 'status', event)
      this.$emit('tapChoice', this.localAnswers)
    },
    doTakeStatus (ans) {
      return this.localAnswers && this.localAnswers[ans]
        ? this.localAnswers[ans].status
        : false
    }
  }
}
</script>

<style src="./QuizQuestion.sass" lang="sass" scoped></style>
