# 題目

```
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```


# 解答

會輸出

```
1
3
5
2
4
```

# 流程

## Round 1 

一開始 `console.log(1)` 進入 Call Stack，執行並輸出「1」，結束

- Call Stack

    ```
    console.log(1)
    ```

- Queue

    ```

    ```

- Web API

    ```

    ```

## Round 2

接著換 `setTimeout` 進入 Stack，執行

- Call Stack

    ```
    setTimeout(() => {
        console.log(2)
    }, 0)
    ```

- Queue

    ```

    ```

- Web API

    ```

    ```
    
## Round 3 

`setTimeout` 計時器這個功能是由瀏覽器提供的，所以先到 Web API 計時 ( 計時器本週皆簡稱 `timer` )

`setTimeout` 於 Stack 的工作結束

- Call Stack

    ```

    ```

- Queue

    ```

    ```

- Web API

    ```
    timer(0)
    ```
    
## Round 4 

`console.log(3)` 進入 Call Stack，執行並輸出「3」，結束

timer 時間到，原本 `setTimeout` 內中的 Callback Function (本週作業我都簡稱 `cb`) 轉到 Queue 等待


- Call Stack

    ```
    console.log(3)
    ```

- Queue

    ```
    console.log(2)
    ```

- Web API

    ```
    
    ```
    
## Round 5

程式再次執行到 `setTimeout`，執行，一樣啟動 timer 到 Web API 計時

- Call Stack

    ```
    setTimeout(() => {
        console.log(4)
    }, 0)
    ```

- Queue

    ```
    console.log(2)
    ```

- Web API

    ```
    
    ```
    
## Round 6

timer 到 Web API，`setTimeout` 結束

- Call Stack

    ```

    ```

- Queue

    ```
    console.log(2)
    ```

- Web API

    ```
    timer(0)
    ```
    
## Round 7

`console.log(5)` 進入 Call Stack，執行並輸出「5」，結束

timer 時間到，cb 進入到 Queue

- Call Stack

    ```
    console.log(5)
    ```

- Queue

    ```
    console.log(2)
    console.log(4)
    ```

- Web API

    ```

    ```
    
## Round 8

Event loop 偵測到 Stack 為空

Queue 裡面先來的 `console.log(2)` 轉移至 Stack 執行並輸出「2」，結束

- Call Stack

    ```
    console.log(2)
    ```

- Queue

    ```
    console.log(4)
    ```

- Web API

    ```

    ```
    
## Round 9

`console.log(2)`　執行結束後，Event loop 偵測到 Stack 又空了，

 `console.log(4)` 轉移至 Stack 執行，輸出「4」，結束

- Call Stack

    ```
    console.log(4)
    ```

- Queue

    ```

    ```

- Web API

    ```

    ```
    
## Round 10

程式全部結束

- Call Stack

    ```
    
    ```

- Queue

    ```

    ```

- Web API

    ```

    ```
    

