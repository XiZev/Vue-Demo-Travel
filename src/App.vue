<template>
<div id="app">
<!-- keep-alive表示当前包裹的路由被加载一次之后就放入内存，下一次访问时不必重新渲染当前路由的组件 -->
<keep-alive exclude="Detail">
<!-- router-view显示的是当前路由地址所对应的内容 -->
<router-view />
</keep-alive>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
