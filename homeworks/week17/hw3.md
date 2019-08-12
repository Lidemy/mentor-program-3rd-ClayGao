# 題目

```javascript
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```
# 解答

```javascript
undefined
5        
6        
20       
1        
10       
100      
```

# 解答流程

- Round 1：進入程式，初始化 global EC

    ```javascript
    // global EC 初始化
    global EC: {
        VO: {
            fn: point to fn, // 於此時創建 fn.[[Scope]]
            a: undefined
        }
        scope chain: [global EC.VO] 
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 2：執行 global EC

    ```javascript
    global EC: {
        VO: {
            fn: point to fn, // step2 : 進入 fn EC
            a: 1 // step1 : a = 1
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 3：進入 fn EC，開始初始化 fn EC

    ```javascript
    // fn EC 初始化
    fn EC: {
        AO : {
            fn2: point to fn2, // 於此時創建 fn2.[[Scope]]
            a: undefined
        }
        scope chain: [fn EC.AO, fn.[[Scope]]]
    }

    fn2.[[Scope]] // 指 fn EC.AO, global EC.VO



    global EC: {
        VO: {
            fn: point to fn, 
            a: 1 
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 4：執行 fn EC

    ```javascript
    console.log(a) // step3: 找到 a 為 5，印出 5，結束

    console.log(a) // step1: 找到 a 為 undefined，印出 undefined，結束

    fn EC: {
        AO : {
            fn2: point to fn2,
            a: 5 // step2: a = 5
        }
        scope chain: [fn EC.AO, fn.[[Scope]]]
    }

    fn2.[[Scope]] // 指 fn EC.AO, global EC.VO



    global EC: {
        VO: {
            fn: point to fn, 
            a: 1 
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 5：承上，繼續執行 fn EC

    ```javascript
    fn EC: {
        AO : {
            fn2: point to fn2, step2: // step2: 因 fn2()，開始 fn2 EC 初始化
            a: 6 // step1: a++
        }
        scope chain: [fn EC.AO, fn.[[Scope]]]
    }

    fn2.[[Scope]] // 指 fn EC.AO, global EC.VO



    global EC: {
        VO: {
            fn: point to fn, 
            a: 1 
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 6：承上，執行到 fn2()，進入 fn2 EC 開始初始化

    ```javascript
    // fn2 EC 初始化
    fn2 EC : {
        AO: {
            // 無函式宣告，也無變數宣告
        }
        scope chain: [fn2 EC.AO, fn2.[[Scope]]]
    }

    fn EC: {
        AO : {
            fn2: point to fn2,
            a: 6 
        }
        scope chain: [fn EC.AO, fn.[[Scope]]]
    }

    fn2.[[Scope]] // 指 fn EC.AO, global EC.VO



    global EC: {
        VO: {
            fn: point to fn, 
            a: 1 
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 7：執行 fn2 EC

    ```javascript
    console.log(a) // step1: 找到 a 為 6，印出 6，結束

    fn2 EC : {
        AO: {
            // 無函式宣告，也無變數宣告
        }
        scope chain: [fn2 EC.AO, fn2.[[Scope]]]
    }

    fn EC: {
        AO : {
            fn2: point to fn2,
            a: 6 
        }
        scope chain: [fn EC.AO, fn.[[Scope]]]
    }

    fn2.[[Scope]] // 指 fn EC.AO, global EC.VO



    global EC: {
        VO: {
            fn: point to fn, 
            a: 1 
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 8：承上，繼續執行 fn2 EC

    ```javascript
    fn2 EC : {
        AO: {
            // 無函式宣告，也無變數宣告
        }
        scope chain: [fn2 EC.AO, fn2.[[Scope]]]
    }

    fn EC: {
        AO : {
            fn2: point to fn2,
            a: 20 // 循著 scope chain 尋找，在 fn2 EC.AO 找不到 a，再找 fn EC.AO，找到 a，賦值 20 
        }
        scope chain: [fn EC.AO, fn.[[Scope]]]
    }

    fn2.[[Scope]] // 指 fn EC.AO, global EC.VO



    global EC: {
        VO: {
            fn: point to fn, 
            a: 1 
            b: 100 
            // 循著 scope chain 尋找，在 fn2 EC.AO 找不到 b，再找 fn EC.AO，仍沒有 b，再找 global EC.VO，仍沒有 b，已沒有下一層。因此 JavaScript 自動在全域宣告 b，接著執行賦值 b = 100
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 9： fn2 EC 執行完畢，移出 Stack

    ```javascript
    /* fn2 EC 執行完畢，移出
    fn2 EC : {
        AO: {
            // 無函式宣告，也無變數宣告
        }
        scope chain: [fn2 EC.AO, fn2.[[Scope]]]
    }
    */

    fn EC: {
        AO : {
            fn2: point to fn2,
            a: 20 
        }
        scope chain: [fn EC.AO, fn.[[Scope]]]
    }

    fn2.[[Scope]] // 指 fn EC.AO, global EC.VO



    global EC: {
        VO: {
            fn: point to fn, 
            a: 1 
            b: 100 
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 10： 別忘記 fn EC 尚未執行完，所以繼續執行 fn EC

    ```javascript
    console.log(a) // 找到 a 為 20，印出 20，結束

    fn EC: {
        AO : {
            fn2: point to fn2,
            a: 20 
        }
        scope chain: [fn EC.AO, fn.[[Scope]]]
    }

    fn2.[[Scope]] // 指 fn EC.AO, global EC.VO


    global EC: {
        VO: {
            fn: point to fn, 
            a: 1 
            b: 100 
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 11: fn EC 執行完畢，移出 Stack

    ```javascript
    /* fn EC 執行完畢，移出
    fn EC: {
        AO : {
            fn2: point to fn2,
            a: 20 
        }
        scope chain: [fn EC.AO, fn.[[Scope]]]
    }

    fn2.[[Scope]] // 指 fn EC.AO, global EC.VO
    */

    global EC: {
        VO: {
            fn: point to fn, 
            a: 1 
            b: 100 
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 12: global EC 尚未執行完，繼續執行 global EC

    ```javascript
    console.log(a) // 找到 a 為 1，印出 1，結束

    global EC: {
        VO: {
            fn: point to fn, 
            a: 1 
            b: 100 
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 13: 承上，繼續執行 global EC

    ```javascript
    console.log(b) // stpe3: 找到 b 為 100，印出 100，結束

    console.log(a) // step2: 找到 a 為 10，印出 10，結束

    global EC: {
        VO: {
            fn: point to fn, 
            a: 10 // step1: a = 10 
            b: 100 
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    ```
---
- Round 14: 承上， global EC 執行完畢，移出 Stack

    ```javascript
    /* global EC 執行完畢，移出 
    global EC: {
        VO: {
            fn: point to fn, 
            a: 10 // step1: a = 10 
            b: 100 
        }
        scope chain: [global EC.VO]
    }

    fn.[[Scope]] // 指 global EC.VO
    */
    ```
---
- Round 15: Stack 清空，執行結束

    ```javascript

    ```

# 補充

根據 JavaScript 底層運作機制，若該 Execution Context 中已有相同的變數宣告，則再次宣告變數並不會改變其中的變數值；若沒有該變數，則會宣告並自動賦值 `undefined`

所以程式第 7 行， `function fn()` 中的 `var a` 並不起作用，因為第 5 行已有 `var a = 5`
