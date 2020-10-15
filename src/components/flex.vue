<template>
  <div>
    <!-- 头部和尾部固定中间自动铺满-->
    <div class="flex-containter">
        <div class="flex-item item-one">box1</div>
        <div class="flex-item item-two">box2</div>
        <div class="flex-item item-three">box3</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'flex'
}
</script>
<style lang="stylus" scoped>
.flex-containter {
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    display flex
    flex-direction column
    justify-content center
}
.flex-item {
    width 100%
    /*border 1px solid red*/
    /*margin 20px*/
}
.item-one {
    height 50px
    /*border 1px solid #ccc*/
    background orange
}
.item-two {
    height 100%
    background red
}
.item-three {
    height 30px
    /*border 1px solid #ccc*/
    background purple
}
</style>
