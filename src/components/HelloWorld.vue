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
      const lens = len || 3
      const fills = fill || ','
      while (num !== 0) {
        nums = num % Math.pow(10, lens)
        if (nums === 0) {
          nums = Math.pow(10, lens).toString().substring(1, lens + 1)
        }
        num = Math.floor(num / Math.pow(10, lens))
        result.unshift(nums)
      }
      return result.join(fills)
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
    },
    isJSON (str) {
      if (typeof str === 'string') {
        try {
          var obj = JSON.parse(str)
          if (typeof obj === 'object' && obj) {
            return true
          } else {
            return false
          }
        } catch (e) {
          console.log('error：' + str + '!!!' + e)
          return false
        }
      }
      console.log('It is not a string!')
    },
    isCardId (n) {
      // 前六位数字为地址码，1-9开头，后面5位是0-9，/^[1-9]\d{5}/
      // 年份码规则:年份码长4位，以18、19或20开头，剩余两位数是0-9/(18|19|20)\d{2}/
      // 月份长度2，第一位为0，则第二位是1-9，第一位为1，则第二位是0-2/((0[1-9])|(1[0-2]))/
      // 日期长度2，第一位为0-2，则第二位是1-9，也可以是10，20，30，31/(([0-2][1-9])|10|20|30|31)/
      // 顺序码:三位数字/\d{3}/
      // 校验码规则 /[0-9Xx]/
      const strVal = n.toString()
      const normalRule = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
      // 省份校验
      const provinceObj = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江 ',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北 ',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏 ',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门'
      }
      const checkProvince = function (val) {
        const provincePattern = /^[1-9][0-9]/
        if (provincePattern.test(val)) {
          if (provinceObj[val]) {
            return true
          }
        }
        return false
      }
      // 日期校验
      const checkDate = function (val) {
        const datePattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/
        if (datePattern.test(val)) {
          const year = val.substring(0, 4)
          const month = val.substring(4, 6)
          const day = val.substring(6, 8)
          const dateFormat = new Date(year + '-' + month + '-' + day)
          if (dateFormat && (dateFormat.getMonth() === parseInt(month) - 1)) {
            return true
          }
        }
        return false
      }
      // 校验码：根据身份证前17位分别对应的加权因子计算乘积再求和，根据所得结果与11取模得到X值，再根据X值查询表2得到校验码
      // 表2：X：0-1-2-3-4-5-6-7-8-9
      //    a18:1-0-X-9-8-7-6-5-4-3
      const checkCode = function (val) {
        const p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
        const factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
        const parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ]
        const code = val.substring(17)
        if (p.test(val)) {
          let sum = 0
          for (let i = 0; i < 17; i++) {
            sum += val[i] * factor[i]
          }
          if (parity[sum % 11].toString() === code.toUpperCase()) {
            return true
          }
        }
        return false
      }
      if (normalRule.test(strVal)) {
        const checkProvinceResult = checkProvince(strVal.substring(0, 2))
        const checkDateResult = checkDate(strVal.substring(6, 14))
        const checkCodeResult = checkCode(strVal)
        if (checkProvinceResult && checkDateResult && checkCodeResult) {
          return true
        }
      }
      return false
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
    console.log('isJSON', this.isJSON('{"a": "123"}'))
    console.log('isCard', this.isCardId('421127199301062869'))
    console.log('isCard', this.isCardId(421127199301062868))
    console.log('fillNumber', this.fillNumber(1234500000000))
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
