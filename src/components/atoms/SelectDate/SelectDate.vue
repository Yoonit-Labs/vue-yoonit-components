<template lang="pug">
  .yoo-selectdate
    YooFlexLayout(
      v-if="type === 'time'"
      gap="16px"
    )
      YooFlexLayout(
        class="yoo-selectdate__container"
        flexDirection="column"
        alignItems="center"
      )
        .yoo-selectdate__item(
          @click="doUpdate('setHours', selectedTime.hours.prev)"
        ) {{ ('0' + selectedTime.hours.prev).slice(-2) }}

        .yoo-selectdate__item.yoo-selectdate__item--active.hours(
        ) {{ ('0' + selectedTime.hours.current).slice(-2) }}

        .yoo-selectdate__item(
          @click="doUpdate('setHours', selectedTime.hours.next)"
        ) {{ ('0' + selectedTime.hours.next).slice(-2) }}

      YooFlexLayout(
        class="yoo-selectdate__container"
        alignItems="center"
      )
        p.yoo-selectdate__separator :

      YooFlexLayout(
        class="yoo-selectdate__container yoo-selectdate__separator"
        flexDirection="column"
      )
        .yoo-selectdate__item(
          @click="doUpdate('setMinutes', selectedTime.minutes.prev)"
        ) {{ ('0' + selectedTime.minutes.prev).slice(-2) }}

        .yoo-selectdate__item.yoo-selectdate__item--active.minutes(
        ) {{ ('0' + selectedTime.minutes.current).slice(-2) }}

        .yoo-selectdate__item(
          @click="doUpdate('setMinutes', selectedTime.minutes.next)"
        ) {{ ('0' + selectedTime.minutes.next).slice(-2) }}

    YooFlexLayout(
      v-else
      gap="32px"
    )
      YooFlexLayout(
        class="yoo-selectdate__container"
        flexDirection="column"
        alignItems="center"
      )
        .yoo-selectdate__item(
          @click="doUpdate('setDate', selectedDate.day.prev)"
        ) {{ ('0' + selectedDate.day.prev).slice(-2) }}

        .yoo-selectdate__item.yoo-selectdate__item--active.day(
        ) {{ ('0' + selectedDate.day.current).slice(-2) }}

        .yoo-selectdate__item(
          @click="doUpdate('setDate', selectedDate.day.next)"
        ) {{ ('0' + selectedDate.day.next).slice(-2) }}

      YooFlexLayout(
        class="yoo-selectdate__container"
        flexDirection="column"
        alignItems="center"
      )
        .yoo-selectdate__item(
          @click="doUpdate('setMonth', selectedDate.month.prev)"
        ) {{ doGetMonthName(selectedDate.month.prev, 'short') }}

        .yoo-selectdate__item.yoo-selectdate__item--active.month(
        ) {{ doGetMonthName(selectedDate.month.current, 'short') }}

        .yoo-selectdate__item(
          @click="doUpdate('setMonth', selectedDate.month.next)"
        ) {{ doGetMonthName(selectedDate.month.next, 'short') }}

      YooFlexLayout(
        class="yoo-selectdate__container"
        flexDirection="column"
        alignItems="center"
      )
        .yoo-selectdate__item(
          @click="doUpdate('setYear', selectedDate.year.prev)"
        ) {{ selectedDate.year.prev }}

        .yoo-selectdate__item.yoo-selectdate__item--active.year(
        ) {{ selectedDate.year.current }}

        .yoo-selectdate__item(
          @click="doUpdate('setYear', selectedDate.year.next)"
        ) {{ selectedDate.year.next }}

</template>

<script>
import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'
import PropsConfig from '@/components/atoms/SelectDate/SelectDate.config'

export default {
  name: 'YooSelectDate',
  components: {
    YooFlexLayout
  },
  props: {
    type: {
      type: String,
      default: 'date',
      validator: value => PropsConfig.type.options.includes(value)
    },
    value: {
      type: String,
      validator: value => value.match(PropsConfig.value.expression)
    },
    locale: {
      type: String,
      default: 'pt-br'
    }
  },
  data: () => ({
    currentDateTime: null,
    selectedDate: {
      day: {
        current: null,
        prev: null,
        next: null
      },
      month: {
        current: null,
        prev: null,
        next: null,
        name: ''
      },
      year: {
        current: null,
        prev: null,
        next: null
      },
      toString: ''
    },
    selectedTime: {
      hours: {
        current: null,
        prev: null,
        next: null
      },
      minutes: {
        current: null,
        prev: null,
        next: null
      },
      toString: ''
    }
  }),
  mounted () {
    const now = new Date()

    if (this.value && this.type === 'time') {
      const timeString = this.value.split(':')
      now.setHours(timeString[0])
      now.setMinutes(timeString[1])
    } else if (this.value && this.type === 'date') {
      if (this.value.match(/((\d{2}|\d{4})-\d{1,2}-\d{1,2})/)) {
        const dateString = this.value.split('-')
        now.setFullYear(dateString[0])
        now.setMonth(dateString[1] - 1)
        now.setDate(dateString[2])
      } else {
        const dateString = this.value.split('/')
        now.setDate(dateString[0])
        now.setMonth(dateString[1] - 1)
        now.setFullYear(dateString[2])
      }
    }

    this.currentDateTime = now

    if (this.type === 'time') {
      this.doSetSelectedTime()
    } else {
      this.doSetSelectedDate()
    }
  },
  methods: {
    /**
    * @description Change the selected values, including the next and previous values, to "time" type
    * @method doSetSelectedTime
    */
    doSetSelectedTime () {
      this.selectedTime.hours.current = this.currentDateTime.getHours()
      this.selectedTime.hours.prev = (this.selectedTime.hours.current === 0) ? 23 : this.selectedTime.hours.current - 1
      this.selectedTime.hours.next = (this.selectedTime.hours.current === 23) ? 0 : this.selectedTime.hours.current + 1

      this.selectedTime.minutes.current = this.currentDateTime.getMinutes()
      this.selectedTime.minutes.prev = (this.selectedTime.minutes.current === 0) ? 59 : this.selectedTime.minutes.current - 1
      this.selectedTime.minutes.next = (this.selectedTime.minutes.current === 59) ? 0 : this.selectedTime.minutes.current + 1

      this.selectedTime.toString = `${('0' + this.selectedTime.hours.current).slice(-2)}:${('0' + this.selectedTime.minutes.current).slice(-2)}`
    },

    /**
    * @description Change the selected values, including the next and previous values, to "date" type
    * @method doSetSelectedDate
    */
    doSetSelectedDate () {
      this.selectedDate.year.current = this.currentDateTime.getFullYear()
      this.selectedDate.year.prev = this.selectedDate.year.current - 1
      this.selectedDate.year.next = this.selectedDate.year.current + 1

      this.selectedDate.month.current = this.currentDateTime.getMonth()
      this.selectedDate.month.name = this.doGetMonthName(this.currentDateTime.getMonth())
      this.selectedDate.month.prev = (this.selectedDate.month.current === 0) ? 11 : this.selectedDate.month.current - 1
      this.selectedDate.month.next = (this.selectedDate.month.current === 11) ? 0 : this.selectedDate.month.current + 1

      const lastDayOfMonth = new Date(this.selectedDate.year.current, this.selectedDate.month.current + 1, 0).getDate()

      this.selectedDate.day.current = this.currentDateTime.getDate()
      this.selectedDate.day.prev = (this.selectedDate.day.current === 1) ? lastDayOfMonth : this.selectedDate.day.current - 1
      this.selectedDate.day.next = (this.selectedDate.day.current === lastDayOfMonth) ? 1 : this.selectedDate.day.current + 1

      this.selectedDate.toString = `${('0' + this.selectedDate.day.current).slice(-2)}/${('0' + (this.selectedDate.month.current + 1)).slice(-2)}/${this.selectedDate.year.current}`
    },

    /**
    * @description Updates currentDataTime and call function to change selected values
    * @method doGetMonthName
    * @param month {string} Method of the object Date to set value (https://www.w3schools.com/js/js_date_methods_set.asp)
    * @param value {number} Value
    */
    doUpdate (method, value) {
      this.currentDateTime[method](value)
      if (this.type === 'time') {
        this.doSetSelectedTime()
        this.$emit('response', this.selectedTime)
      } else {
        this.doSetSelectedDate()
        this.$emit('response', this.selectedDate)
      }
    },

    /**
    * @description Start a Date object with the entered value or the current browser date
    * @method doGetMonthName
    * @param month {Int} Month number gets in Date object: 0-January, 1-February, 2-March....
    * @param format {String} Long to show complete name of the month or short to show only 3
    *                        first charactes. Ex.: 'long' retruns February; short returns Feb
    * @returns {String}
    */
    doGetMonthName (month, format = 'long') {
      const objDate = new Date()
      objDate.setDate(1)
      objDate.setMonth(month)

      const monthName = objDate.toLocaleString(this.locale, { month: format }).replace('.', '')

      return monthName
    }
  }
}
</script>

<style src="./SelectDate.sass" lang="sass" scoped></style>
