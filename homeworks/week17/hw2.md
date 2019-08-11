# 題目

```javascript
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```

# 解答

```
i: 0
i: 1
i: 2
i: 3
i: 4
5
5
5
5
5
```

# 解題流程

## Round 1

> globalEC => 初始化

Call Stack

```
globalEC : {
    VO: {
        var i = undefined
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript

```
---
## Round 2

Call Stack

```javascript
globalEC : {
    VO: {
        var i = 0   // step 1 : 賦值 i 為 0
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript

```
---
## Round 3

Call Stack

```javascript
console.log('i: ' + i) // 執行並輸出「i: 0」，結束
globalEC : {
    VO: {
        var i = 0
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript

```
---
## Round 4

Call Stack

```javascript
setTimeout(() => { console.log(i) }, i * 1000)  // step 1 : 執行，timer 開始計時
globalEC : {
    VO: {
        var i = 0
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // step 2 : 4 毫秒後轉移到 Queue
```

*註 : 之所以是 4 毫秒，是假定執行環境於 HTML 5，`setTimeout` 最短執行時間為 4 毫秒*

---
## Round 5

Call Stack

```javascript
globalEC : {
    VO: {
        var i = 1   //  i++
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
```
---
## Round 6

Call Stack

```javascript
console.log('i: ' + i) // 執行並輸出「i: 1」，結束
globalEC : {
    VO: {
        var i = 1
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
```
---
## Round 7

Call Stack

```javascript
setTimeout(() => { console.log(i) }, i * 1000)  // step 1 : 執行，timer 開始計時
globalEC : {
    VO: {
        var i = 1
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
timer(1) // step 2 : 1 秒後轉移到 Queue
```
---
## Round 8

Call Stack

```javascript
globalEC : {
    VO: {
        var i = 2   //  i++
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
timer(1) // 1 秒讀秒中
```
---
## Round 9

Call Stack

```javascript
console.log('i: ' + i) // 執行並輸出「i: 2」，結束
globalEC : {
    VO: {
        var i = 2
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
timer(1) // 1 秒讀秒中
```
---
## Round 10

Call Stack

```javascript
setTimeout(() => { console.log(i) }, i * 1000)  // step 1 : 執行，timer 開始計時
globalEC : {
    VO: {
        var i = 2
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
timer(1) // 1 秒讀秒中
timer(2) // step 2 : 2 秒後轉移到 Queue
```
---
## Round 11

Call Stack

```javascript
globalEC : {
    VO: {
        var i = 3   //  i++
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
timer(1) // 1 秒讀秒中
timer(2) // 2 秒讀秒中
```
---
## Round 12

Call Stack

```javascript
console.log('i: ' + i) // 執行並輸出「i: 3」，結束
globalEC : {
    VO: {
        var i = 3
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
timer(1) // 1 秒讀秒中
timer(2) // 2 秒讀秒中
```
---
## Round 13

Call Stack

```javascript
setTimeout(() => { console.log(i) }, i * 1000)  // step 1 : 執行，timer 開始計時
globalEC : {
    VO: {
        var i = 3
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
timer(1) // 1 秒讀秒中
timer(2) // 2 秒讀秒中
timer(3) // step 2 : 3 秒後轉移到 Queue
```
---
## Round 14

Call Stack

```javascript
globalEC : {
    VO: {
        var i = 4   //  i++
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
timer(1) // 1 秒讀秒中
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
```
---
## Round 15

Call Stack

```javascript
console.log('i: ' + i) // 執行並輸出「i: 4」，結束
globalEC : {
    VO: {
        var i = 4
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
timer(1) // 1 秒讀秒中
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
```
---
## Round 16

Call Stack

```javascript
setTimeout(() => { console.log(i) }, i * 1000)  // step 1 : 執行，timer 開始計時
globalEC : {
    VO: {
        var i = 4
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
timer(1) // 1 秒讀秒中
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
timer(4) // step 2 : 4 秒後轉移到 Queue
```
---
## Round 17

Call Stack

```javascript
globalEC : {
    VO: {
        var i = 5   //  i++，globalEC 執行完畢並移出
    }
    scopeChain: [globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(0) // 0.4 毫秒讀秒中
timer(1) // 1 秒讀秒中
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 18

Call Stack

```javascript

```

Queue

```javascript
() => { console.log(i) } 
```

Web APIs

```javascript
// timer(0) 時間到，移至 Queue
timer(1) // 1 秒讀秒中
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 19

Call Stack

```javascript
// Event Loop 偵測 Stack 為空，調用 Queue 內的 Callback function
functionEC : {
    scopeChain: [function.AO, globalEC.VO] 
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(1) // 1 秒讀秒中
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 20

Call Stack

```javascript
console.log(i) // step 1: 開始執行，取 function.AO 找不到 i，轉找 globalEC.VO，找到 i = 5，輸出 5，結束

functionEC : {
    scopeChain: [function.AO, globalEC.VO]  // step 2: 執行完畢，functionEC 結束
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(1) // 1 秒讀秒中
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 21

Call Stack

```javascript

```

Queue

```javascript

```

Web APIs

```javascript
timer(1) // 1 秒讀秒中
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 22

Call Stack

```javascript

```

Queue

```javascript
() => { console.log(i) } 
```

Web APIs

```javascript
// timer(1) 時間到，移至 Queue
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 23

Call Stack

```javascript
// Event Loop 偵測 Stack 為空，調用 Queue 內的 Callback function
functionEC : {
    scopeChain: [function.AO, globalEC.VO]    
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 24

Call Stack

```javascript
console.log(i) // step 1: 開始執行，取 function.AO 找不到 i，轉找 globalEC.VO，找到 i = 5，輸出 5，結束

functionEC : {
    scopeChain: [function.AO, globalEC.VO]  // step 2: 執行完畢，functionEC 結束
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 25

Call Stack

```javascript

```

Queue

```javascript

```

Web APIs

```javascript
timer(2) // 2 秒讀秒中
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 26

Call Stack

```javascript

```

Queue

```javascript
() => { console.log(i) } 
```

Web APIs

```javascript
// timer(2) 時間到，移至 Queue
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 27

Call Stack

```javascript
// Event Loop 偵測 Stack 為空，調用 Queue 內的 Callback function
functionEC : {
    scopeChain: [function.AO, globalEC.VO]    
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 28

Call Stack

```javascript
console.log(i) // step 1: 開始執行，取 function.AO 找不到 i，轉找 globalEC.VO，找到 i = 5，輸出 5，結束

functionEC : {
    scopeChain: [function.AO, globalEC.VO]  // step 2: 執行完畢，functionEC 結束
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 29

Call Stack

```javascript

```

Queue

```javascript

```

Web APIs

```javascript
timer(3) // 3 秒讀秒中
timer(4) // 4 秒讀秒中
```
---
## Round 30

Call Stack

```javascript

```

Queue

```javascript
() => { console.log(i) }
```

Web APIs

```javascript
// timer(3) 時間到，移至 Queue
timer(4) // 4 秒讀秒中
```
---
## Round 31

Call Stack

```javascript
// Event Loop 偵測 Stack 為空，調用 Queue 內的 Callback function
functionEC : {
    scopeChain: [function.AO, globalEC.VO]    
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(4) // 4 秒讀秒中
```
---
## Round 32

Call Stack

```javascript
console.log(i) // step 1: 開始執行，取 function.AO 找不到 i，轉找 globalEC.VO，找到 i = 5，輸出 5，結束

functionEC : {
    scopeChain: [function.AO, globalEC.VO]  // step 2: 執行完畢，functionEC 結束
}
```

Queue

```javascript

```

Web APIs

```javascript
timer(4) // 4 秒讀秒中
```
---
## Round 33

Call Stack

```javascript

```

Queue

```javascript

```

Web APIs

```javascript
timer(4) // 4 秒讀秒中
```
---
## Round 34

Call Stack

```javascript

```

Queue

```javascript
() => { console.log(i) } 
```

Web APIs

```javascript
// timer(4) 時間到，移至 Queue
```
---
## Round 35

Call Stack

```javascript
// Event Loop 偵測 Stack 為空，調用 Queue 內的 Callback function
functionEC : {
    scopeChain: [function.AO, globalEC.VO]    
}
```

Queue

```javascript

```

Web APIs

```javascript

```
---
## Round 36

Call Stack

```javascript
console.log(i) // step 1: 開始執行，取 function.AO 找不到 i，轉找 globalEC.VO，找到 i = 5，輸出 5，結束

functionEC : {
    scopeChain: [function.AO, globalEC.VO]  // step 2: 執行完畢，functionEC 結束
}
```

Queue

```javascript

```

Web APIs

```javascript

```
---
## Round 37

Call Stack

```javascript

```

Queue

```javascript

```

Web APIs

```javascript

```

# 解題思路與不解的點

這一題我們要帶入所謂的「執行環境」(Execution Content)，本週作業我都用 EC 簡稱

EC 結構如下 :

```
EC : {
    VO / AO: {
        argument: {
            // 存放該函式參數
        },
        // 存放該 EC 變數宣告與函式宣告
    }
    scopeChain: [] // 是一個 array，存跟範疇有關的 chaining
    this // 啊就 this
}
```

關於這一題，我個人認為初學者會搞混的第一個點是：for loop 有沒有自己的 EC ?

為此，我看了這一篇在 Stack overflow 的提問：[Execution context's in JavaScript](https://stackoverflow.com/questions/49648621/execution-contexts-in-javascript)

問題：

>My question is, will the for loop have it's own execution context? If so, and an execution context has it's own memory, how does output still exist within that for loop's context?

最佳解答 :

>**NO.** The foor loop **won't have** it's own execution context. **Only functions creates a new execution context.**
 
這邊特別強調，**只有 function 才能創造一個新的執行環境**

既然 for loop 本身不可能有 EC，推測 for loop 本身是屬於 global EC，內中的 var i = 0 應該也屬於**全域變數**

第二個爭點是，為什麼 `setTimeout` 內的 console.log() 都是 5 ?

我們再看一次題目

```javascript
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```

在 `setTimeout` 裡面包著的 Callback function 中的 `console.log(i)` 其實於 for loop 迭代時，一直沒有被執行

等到 timer 時間到，`console.log(i)` 才被執行，這時全域的 for loop 已經跑完了

那為什麼 for loop 跑完，`setTimeout` 內的 `console.log(i)` 才執行 ?

那是因為 Call Stack 一直有 `console.log('i: ' + i)` 在執行

全部的 `console.log('i: ' + i)` 結束後，Event loop 才會調用 Queue 內的 `console.log(i)` 進入 Stack 執行

這時候於 scopeChain 內的 globalEC.VO 的 i 為 5，所以 `console.log(i)` 的 i 才會是 5

