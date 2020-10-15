<template>
    <div class="flex-containter">
        <div class="flex-item item-one">box1</div>
        <div class="flex-item">box2</div>
        <div class="flex-item item-three">box3</div>
    </div>
</template>
<script>
export default {
  name: 'flex'
}
</script>
<style lang="stylus" scoped>
.flex-containter{
    display: flex
}
.flex-item{
    height 300px
    width 30%
    border 1px solid #ccc
}
.item-one{
    width 40%
}
.item-three{
    width 60%
}
</style>


