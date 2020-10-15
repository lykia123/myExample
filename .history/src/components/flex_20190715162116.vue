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
.flex-containter {
    display: flex
    flex-direction row
    justify-content center
    width 100%
    height 500px
    border 1px dashed #000
}
.flex-item {
    height 300px
    width 100px
    border 1px solid #ccc
    margin 20px
}
.item-one {
    width 200px
}
.item-three {
    width 300px
}
</style>
