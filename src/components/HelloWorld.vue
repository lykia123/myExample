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
    <!-- cjs全局注册之后，可以直接使用 -->
    <div>{{$ccPrivateUtils.format.numberSplitWithComma(number)}}</div>
    <!-- amd全局注册之后，可以直接使用 -->
    <div>{{ccPrivateUtils.format.numberSplitWithComma(number)}}</div>
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
      number: 12123123123,
      ccPrivateUtils: require('@ccprivate/utils/dist/ccUtil.amd'),
      tableData: [
        {
          tagName: 'a',
          tagId: '1'
        },
        {
          tagName: 'b',
          tagId: '2'
        },
        {
          tagName: 'c',
          tagId: '3'
        }
      ]
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
    },
    fillNumber (num, len, fill) {
      let result = []
      let nums = 1
      if (typeof num !== 'number') {
        return num
      }
      while (num !== 0) {
        nums = num % Math.pow(10, len)
        num = Math.floor(num / Math.pow(10, len))
        result.unshift(nums)
      }
      return result.join(fill)
    },
    changeToOptions (data, name, id) {
      const a = []
      data.forEach(item => {
        a.push({label: item[name], value: item[id]})
      })
      return a
    },
    formatDate (time, str) {
      const date = time ? new Date((typeof time === 'object') && time.constructor === Date ? time : time.replace(/-/g, '/')) : new Date()
      let fmt = str || 'yyyy/MM/dd hh:mm:ss'
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      const hour = date.getHours()
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': hour,
        'H+': hour % 12 || 12,
        't+': hour < 12 ? 'AM' : 'PM',
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'fff': date.getMilliseconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ''
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : str.padStart(k.length, '0'))
        }
      }
      return fmt
    },
    uniq (arr, uniq) {
      // if (isArr(arr)) {
      //   return arr
      // }
      const result = []
      const uniqResult = []
      for (let i = 0; i < arr.length; i++) {
        if (uniq) {
          if (!uniqResult.includes((arr[i][uniq]))) {
            uniqResult.push(arr[i][uniq])
            result.push(arr[i])
          }
        } else {
          if (!result.includes(arr[i])) {
            result.push(arr[i])
          }
        }
      }
      return result
    },
    //   es6模板字符串
    stringTemplate () {
      const name = '小明'
      const age = 20
      const message = `你好，${name}，你今年${age}岁了`
      console.log(message)
    },
    // 时间差显示
    dateDiff (hisTime) {
      if (!hisTime) return ''
      let result = ''
      const now = new Date().getTime()
      const diffValue = now - new Date(hisTime)
      const minute = 1000 * 60
      const hour = minute * 60
      const day = hour * 24
      // const halfamonth = day * 30
      const month = day * 30
      const year = month * 12
      const _year = diffValue / year
      const _month = diffValue / month
      const _week = diffValue / (7 * day)
      const _day = diffValue / day
      const _hour = diffValue / hour
      const _min = diffValue / minute
      if (_year >= 1) result = parseInt(_year) + '年前'
      else if (_month >= 1) result = parseInt(_month) + '个月前'
      else if (_week >= 1) result = parseInt(_week) + '周前'
      else if (_day >= 1) result = parseInt(_day) + '天前'
      else if (_hour >= 1) result = parseInt(_hour) + '个小时前'
      else if (_min >= 1) result = parseInt(_min) + '分钟前'
      else result = '刚刚'
      return result
    }
  },
  created () {
    const a = this.changeToOptions(this.tableData, 'tagName', 'tagId')
    console.log('a', a)
    console.log(this.ccPrivateUtils)
    console.log(this.$ccPrivateUtils)
    console.log(this.ccPrivateUtils.format.numberSplitWithComma(12313123))
    this.reverse(12300)
    console.log(this.reverse2(Math.pow(2, 30)))
    this.stringTemplate()
    const from = this.dateDiff('2020-12-22 11:02:00')
    console.log('form123', from)
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
