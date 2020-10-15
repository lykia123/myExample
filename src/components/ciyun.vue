<template>
    <div>
      <div class="word-content">
        <span v-for="(item,index) in items" :key="index" :style="{fontSize : (40 - index*2)+ 'px',color: '#' + generateMixed(),margin: 3 + 'px'}">{{item.name}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ciyun',
  data () {
    return {
      items: [
        {
          name: 'ab',
          value: 100
        },
        {
          name: '测试',
          value: 100
        },
        {
          name: '教育',
          value: 100
        },
        {
          name: '影视',
          value: 100
        },
        {
          name: '大数据',
          value: 100
        },
        {
          name: '主页',
          value: 100
        },
        {
          name: '会员过期',
          value: 100
        },
        {
          name: '会员',
          value: 100
        },
        {
          name: '广告',
          value: 100
        },
        {
          name: '野狼',
          value: 100
        },
        {
          name: 'Disco',
          value: 100
        },
        {
          name: '陈伟霆',
          value: 100
        },
        {
          name: 'william',
          value: 100
        },
        {
          name: '心里的花',
          value: 100
        },
        {
          name: '我想要带你回家',
          value: 100
        },
        {
          name: '请你尽情摇摆',
          value: 100
        },
        {
          name: '忘掉中意的他',
          value: 100
        },
        {
          name: '左边跟我一起画彩虹',
          value: 100
        },
        {
          name: '右边跟我画个龙',
          value: 100
        }
      ],
      chars: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'B', 'C', 'D', 'E', 'F']
    }
  },
  methods: {
    generateMixed () {
      let res = ''
      for (let i = 0; i < 6; i++) {
        let id = Math.ceil(Math.random() * 16)
        res += this.chars[id]
      }
      console.log(res)
      return res
    }
  }
}
</script>

<style lang="stylus" scoped>
.word-content
  width 30%
  height 200px
  border 1px solid #ccc
  border-radius 50%
  position relative
  span
    display inline-block
</style>
