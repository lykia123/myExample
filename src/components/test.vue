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
          console.log(stringReduce)
          newArr = stringReduce
          return stringReduce
        }
        if (i === 0) {
          newString(string, matchItem)
        } else {
          newString(newArr, matchItem)
        }
        console.log(newArr)
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
    //       return  this.arr.unshift();
    //     }
    //   };
    //   console.log('a', a)
    //   if (a == 1 && a == 2 && a == 3) {
    //     console.log('我被执行啦~')
    //   }
    // }
  },
  created () {
    this.toUpper(this.string, this.matchString)
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
