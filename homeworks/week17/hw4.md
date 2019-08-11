# 題目

```javascript
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello

obj.inner.hello() // ?? obj.inner.hello.call(obj.inner) => console.log(obj.inner.value) => 2
obj2.hello() // ?? obj2.hello.call(obj2) => console.log(obj2.value) => 2
hello() // ?? hello().call(undefined)
```

# 解答

```javascript
2
2 
undefined
```

# 解答流程

## obj.inner.hello()

首先，`obj.inner.hello()` 是一個 function，功能是 `console.log(this.value)`

這時候的 this 指涉為 `obj.inner`，所以可以將之視為 `console.log(obj.inner.value)` 

故輸出 `2`

-----
## obj2.hello()

obj2.hello() 與上一題是同一個 `console.log(this.value)`

這時候的 this 指涉為 `obj2`，`obj2` 本身又是指 `obj.inner`，所以可以視之為　`console.log(obj.inner.value)` 

同樣輸出 `2`

-----
## hello()

hello 本身就是一個 function，功能也是 `console.log(this.value)`

這時候的 this 指涉為 `undefined`

這邊主要說一下關於 this 與這道題目，當 function 為物件的 method，那麼於執行階段的時候 ( 也就是 function call ) 時，this 就會綁定該物件，所以在題目註解中我用老師提供的簡易公式來判斷 this 的指涉。

如果照這個公式看來，hello.call() 前面並沒有任何東西，其實這時候的 this 指涉的是 window (node 為 global，如果是嚴格模式則皆是 undefined)，這種狀況稱之為 Implicitly Lost。由於 hello 呼叫的地方屬於全域範疇，因此此題的 `console.log(this.value)` 可視為 `console.log(window.value)`

為了驗證，我在全域宣告 `var value = 80`，並且使用**瀏覽器**運行題目程式碼：

```javascript
var value = 80

const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello

obj.inner.hello()  // 2
obj2.hello() // 2
hello() // 相當於 console.log(window.value)，印出 80
```

執行完畢，`hello()` 的確印出 `80`

關於 Implicitly Lost，可以額外參考桑莫大的[解說](https://cythilya.github.io/2018/10/23/this/)