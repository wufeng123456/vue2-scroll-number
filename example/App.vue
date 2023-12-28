<template>
  <div id="app">
    <ScrollNumber :number="number"></ScrollNumber>
    <!-- <Vue2ScrollNumber :number="number"></Vue2ScrollNumber> -->
    <div>
      <div>当前数字：{{ number }}</div>
      <button @click="changeNumber">改变数字</button>
    </div>
  </div>
</template>

<script>
import ScrollNumber from '@/scroll-number/src'
// import { ScrollNumber } from 'vue2-scroll-number'

export default {
  name: 'App',
  data () {
    return {
      number: 12345,
      idx: 0
    }
  },
  components: {
    ScrollNumber,
    // Vue2ScrollNumber
  },
  methods: {
    changeNumber () {
      // this.number = parseInt(Math.random() * 1000000)
      const demoNum = [8, 1567, 256, 33631, 2371, 34512, '123456.89', '12%', '12.34%', '89.25%']
      this.number = demoNum[this.idx]
      this.idx++
      if (this.idx === demoNum.length) this.idx = 0
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
