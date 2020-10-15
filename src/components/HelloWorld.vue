<template>
  <div class="hello">
    <div>
    <h1>this.$nextTick例子：</h1>
    <h2 ref="msg">{{ msg }}</h2>
    <div v-if="msg1">msg got outside $nextTick: {{msg1}}</div>
    <div v-if="msg2">msg got inside $nextTick: {{msg2}}</div>
    <div v-if="msg3">msg got outside $nextTick: {{msg3}}</div>
    <button @click="handleClick">点我</button>
    <div>我被点击了<span ref="clickCount">{{clickCount}}</span>次</div>
    </div>
    <ul>
      <li>
        <router-link to="/flex">flex布局测试</router-link>
      </li>
      <li>
        <router-link to="/ciyun">词云开发</router-link>
      </li>
      <li>
        <router-link to="/echartsciyun">echarts词云</router-link>
      </li>
      <li>
        <router-link to="/test">test</router-link>
      </li>
    </ul>
    <div>
      <div class="content-box">1</div>
      <div class="border-box">1</div>
    </div>
    <!--<div>{{ccPrivateUtils.format.numberSplitWithComma(number)}}</div>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg1: '',
      msg2: '',
      msg3: '',
      obj: {
        a: 1
      },
      clickCount: 0,
      number: 12123123123
    }
  },
  methods: {
    handleClick () {
      this.clickCount = this.clickCount + 1
      this.msg = 'I changed msg value'
      this.msg1 = this.$refs.msg.innerHTML + this.$refs.clickCount.innerHTML
      this.$nextTick(() => {
        this.msg2 = this.$refs.msg.innerHTML + this.$refs.clickCount.innerHTML
      })
      this.msg3 = this.$refs.msg.innerHTML + this.$refs.clickCount.innerHTML
    },
    reverse (x) {
      const min = Math.pow(-2, 31)
      const max = Math.pow(2, 31) - 1
      if (x < min || x > max) {
        return 0
      } else {
        const numToStr = x.toString()
        const length = numToStr.length
        var newNum = []
        var i = 0
        if (x < 0) {
          for (i = 1; i < length; i++) {
            newNum.push(numToStr.substr(i, 1))
          }
          newNum.push('-')
        } else {
          for (i = 0; i < length; i++) {
            newNum.push(numToStr.substr(i, 1))
          }
        }
        console.log('newNum', newNum)
        var newStr = ''
        for (var j = newNum.length - 1; j >= 0; j--) {
          newStr += newNum[j]
        }
        console.log('newStr', Number(newStr))
        return Number(newStr)
      }
    },
    // 极简的数学方法来进行数字反转
    reverse2 (x) {
      let result = 0
      while (x !== 0) {
        result = result * 10 + x % 10
        x = (x / 10) | 0
      }
      console.log('result=====', result)
      console.log((result | 0) === result)
      return (result | 0) === result ? result : 0
    }
  },
  created () {
    console.log(this.obj)
    console.log(this.$ccPrivateUtils().format.numberSplitWithComma(12312312321))
    this.reverse(12300)
    console.log(this.reverse2(Math.pow(2, 30)))
    // console.log(this.format.numberSplitWithComma(12313123))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.border-box
  background yellow
  width 300px
  height 100px
  box-sizing border-box
  margin 20px
  padding 30px
  border 10px dashed #000
.content-box
  background skyblue
  width 300px
  height 100px
  box-sizing content-box
  margin 20px
  padding 30px
  border 10px dashed #000
</style>
