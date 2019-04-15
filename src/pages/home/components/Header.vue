<!-- 模板样式 -->
<template>
<div class="header">
<div class="header-left">
<!--对icon元素进行位置优化新增class样式修饰  -->
<div class="iconfont back-icon">&#xe624;</div>
</div>
<div class="header-input">
<span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
<!--对icon元素进行位置优化新增class样式修饰  -->
<router-link to='/city'>
<div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
</router-link>
</div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'
import { mapState } from 'vuex'
// 导出组件，名字为HomeHeader
export default {
  name: 'HomeHeader',
  computed: {
    // ...是展开运算符，mapState是把vuex的数据映射到这个组件的computed属性里
    ...mapState(['city'])
    // ...mapGetters(['doubleCity'])
  }
}
</script>
<!-- 使用stylus书写css样式 -->
<!-- npm install stylus -save -->
<!-- npm install stylus-loader -save -->
<!-- scoped表示只修饰当前组件class的名字 -->
<style lang="stylus" scoped>
  //样式内部引入样式需要加入@
  // @import '../../../assets/styles/varibles.styl'
  //在css中引入其他css前面必须加波浪线~
  // @import '~@/assets/styles/varibles.styl'
  // 在webpack.base.conf.js定义路径的别名styles
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    // 全局使用背景颜色，可以定义变量然后在此处使用
    background: $bgColor
    color: #fff
    .header-left
      width: 2.64rem
      float: left
      .back-icon
        text-align: center
        font-size: .8rem
    .header-input
      flex: 1
      height: 1.44rem
      line-height: 1.44rem
      margin-top: .22rem
      margin-left: .2rem
      background: #fff
      border-radius: .3rem
      color: #ccc
      padding-left: .2rem
    .header-right
      min-width: 3.64rem
      padding: 0 .3rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: .2rem
        font-size: .84rem
</style>
