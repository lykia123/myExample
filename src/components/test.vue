<template>
  <div class="containter">
    <div class="item-one">box1</div>
    <div class="item-two">box2</div>
    <div class="item-three">box3</div>
  </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      matchString: ['a', 'e', 'i', 'o', 'u'],
      string: 'i am starts,you are dog'
    }
  },
  methods: {
    // 字符串指定字母大写
    toUpper (string, matchItem) {
      var newArr = ''
      for (var i = 0; i < 5; i++) {
        var newString = function (stringReduce, matchItem2) {
          const match = matchItem2[i]
          stringReduce = stringReduce.replace(new RegExp(match, 'g'), match.toUpperCase())
          // newString(stringReduce, matchItem)
          // if (stringReduce.indexOf(matchItem2[i]) > -1) {
          //   stringReduce = stringReduce.replace(matchItem2[i], matchItem2[i].toUpperCase())
          //   console.log('newString======')
          //   console.log(stringReduce)
          //   newString(stringReduce, matchItem)
          //   return stringReduce
          // } else {
          //   i++
          //   // newString(stringReduce, matchItem)
          // }
          newArr = stringReduce
          return stringReduce
        }
        if (i === 0) {
          newString(string, matchItem)
        } else {
          newString(newArr, matchItem)
        }
      }
    },
    reverseNumToString (num) {
      // 普通方式
      // var result = ''
      // for (var i = num.toString().length - 1; i >= 0; i--) {
      //   result = result + num.toString()[i]
      // }
      // console.log('result', result)
      // console.log('result type', typeof result)
      // return result
      // 递归法
      if (typeof num !== 'number') alert('输入需为int型整数！')
      if (!Math.floor(num / 10)) return num.toString()
      return (num % 10).toString() + this.reverseNumToString(Math.floor(num / 10))
    },
    // 浅拷贝
    copy (p) {
      let c = {}
      for (let i in p) {
        c[i] = p[i]
      }
      return c
    },
    // ES6实现浅拷贝的方法 Object.assign({},obj)
    testCopy () {
      const a = {key1: '111'}
      a.key2 = ['你', '我']
      // const b = this.copy(a)
      const b = Object.assign({}, a)
      b.key3 = { num: '333' }
      console.log('b.key1', b.key1)
      console.log('b.key3', b.key3)
      console.log('a.key3', a.key3)
      b.key2.push('Ta')
      b.key1 = 23213
      console.log('a.key2', a.key2)
      console.log('b.key1', b.key1)
      console.log('a.key1', a.key1)
    },
    arrCopy () {
      const arr = [1, 2, 3]
      // 数组浅拷贝 concat()和slice()和...
      // const b = [].concat(arr)
      // const b = arr.slice()
      const b = [...arr]
      b.push(4)
      console.log('arr', arr)
      console.log('b', b)
    },
    // 深拷贝:由于属性值类型是数组和对象时，只会引用地址，所以用递归把父对象中所有属于对象的属性类型都遍历赋给子对象即可
    copyDeep (obj) {
      let c = {}
      for (let i in obj) {
        if (typeof obj[i] === 'object') {
          c[i] = obj[i].constructor === Array ? [] : {}
          this.copyDeep(obj[i])
        } else {
          c[i] = obj[i]
        }
      }
      return c
    },
    testDeepClone () {
      const a = {key1: '111'}
      a.key2 = ['你', '我']
      // const b = this.copy(a)
      const b = this.copyDeep(a)
      console.log('deepClone------')
      b.key3 = { num: '333' }
      console.log('b.key1', b.key1)
      console.log('b.key3', b.key3)
      console.log('a.key3', a.key3)
      b.key2.push('Ta')
      b.key1 = 23213
      console.log('a.key2', a.key2)
      console.log('b.key1', b.key1)
      console.log('a.key1', a.key1)
    },
    // 算法：有n步台阶，每次只能上1步或者2步，共有多少种走法
    walkChairs (n) {
      if (n <= 2) return n
      let first = 1
      let second = 2
      let third = 0
      for (let i = 3; i <= n; i++) {
        third = first + second
        first = second
        second = third
      }
      return third
    }
    // test1 () {
    //   var a = {
    //     i: 1,
    //     toString () {
    //       return a.i++
    //     }
    //   }
    //   var a = {
    //     arr: [3, 2, 1],
    //     toString: function () {
    //       return this.arr.unshift()
    //     }
    //   }
    //   console.log('a', a)
    //   if (a == 1 && a == 2 && a == 3) {
    //     console.log('我被执行啦~')
    //   }
    // }
  },
  created () {
    this.toUpper(this.string, this.matchString)
    // this.test1()
    this.testCopy()
    this.arrCopy()
    this.testDeepClone()
    console.log('reverse', this.reverseNumToString(12345))
  }
}
</script>
<style lang="stylus" scoped>
  .containter {
    position absolute
    width 100%
    height 100%
    top 0
    left 0
  }
  .item-one {
    height 50px
    width 100%
    background orange
  }
  .item-two {
    height 100%
    width 100%
    background red
  }
  .item-three {
    height 30px
    width 100%
    background purple
  }
</style>
