<template>
  <ul class="list">
    <li class="item" :ref="item" v-for="item of letters" :key="item" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      // 标志位：false变为true时touchstart到touchmove
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 生命周期钩子，页面更新渲染就获得A元素的高度
  updated () {
    // 获取A所处区域的dom元素，然后通过offsetTop计算出A到当前组件顶部的距离
    // 在此时定义可以优化性能，只在第一次渲染页面时就计算出A元素的位置
    this.startY = this.$refs['A'][0].offsetTop
  },
  // 把json里面的cities对象分离出字母表数组
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  name: 'CityAlphabet',
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    // handldTouchMove接受一个事件对象e
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 使用函数节流优化性能
        // 原理：当手指滑动时，延迟16ms后执行，如果16ms之内再次滑动，就会触发clearTimeout把还未执行的延迟函数从队列中删除，把这次16ms的延迟操作放入队列
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 事件对象有一个touch数组，第0项是关于手指的信息，然后获取手指的clientY的值，是手指到屏幕顶部的高度，需要扣掉其他部分的79像素
          const touchY = e.touches[0].clientY - 52.99
          // 18是每个字母的像素大小
          const index = Math.floor((touchY - this.startY) / 18)
          // console.log(this.startY)
          // console.log(touchY)
          // console.log(index)
          // console.log(this.letters[index])
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index - 1])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 3.9rem
    right: .08rem
    bottom: 0
    width: .8rem
    .item
      padding-right: .3rem
      line-height: 1.2rem
      text-align: center
      color: $bgColor
      font-size: .5rem
</style>
