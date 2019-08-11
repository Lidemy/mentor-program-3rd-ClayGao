## 這週學了一大堆以前搞不懂的東西，你有變得更懂了嗎？請寫下你的心得。

首先，這週的筆記都放在[這裡](https://github.com/ClayGao/My-study/tree/master/Lidemy/week17)

關於 [JS201](https://github.com/ClayGao/My-study/blob/master/Lidemy/week17/JS201.md) 的筆記更詳細也更多了，謝謝老師多建立了 JS201，真的是不可多得的好教材

先談談作業的部分，第一題我本身是寫得比較簡陋的，不過由於背後運作是懂的，就簡單帶入 Stack 與 Queue 的概念

第二題先跳過

第三題我個人認為是自己寫得最詳細的，其實相關的背後運作方式自己在寫筆記的時候就自己操作過一次了，對於 Execution context 的概念可以說是非常清楚

第四題自己也找了一點資料，對於 `this` 初步的判斷方式可以說有了非常好的理解，簡而言之，就是要先判斷 this 當下的使用情況，再依照情況清楚地去了解到 `this` 的指涉。其實在第十三週的 jQuery 部分關於 `this` 自己也是亂用，覺得功能有對就好，經過這週洗禮，更確定了判斷方法，之後使用起來應該也比較放心。

現在來談談第二題，這一題是我花最多時間的題目，最後決定寫在這裡提問，先說關於這題自己的思路：

首先這一題的寫法用 EC 來解析是底層運作方式是 OK 的，我們都知道於 Stack 和 Queue 中使用 `setTimeout` 來當範例的多不勝數，所以我也就這樣繼續寫了。

可是寫到後面我開始覺得很奇怪，因為 Event loop 機制，當 Stack 為空時，Queue 內的 Callback 會被調用到 Stack 執行，這沒問題。

```javascript
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```

Stack 中開始執行 console.log(i)，我當時好奇的點是，如果 Stack 只有 console.log(i)，那 i 是怎麼存取到 global EC 的值的 ?

我第一個想到的是，Callback function 本身應該是已經先被初始化了，所以早在進入 Stack 之前，scope chain 就一定保存住了 function.AO 與 global EC.AO

但是看起來又好像怪怪的 ? 看一下 scope chain 的結構:

scope chain: [function.AO, function.[[Scope]]]

照這個題目看起來，function.[[Scope]] 是當全域有**函式宣告**時同時產生的，其是用來指涉 global EC.VO，那麼照這樣推算起來，其實 setTimeout 內的 Callback function 似乎的確是有先被宣告了，只是是何時宣告的呢？

一開始的猜測是，對 JS 來說，`setTimeout` 內的 Callback function 是在 `setTimeout` 執行的時候自動在全域宣告之後，才在 setTimeout 作為參數傳入，所以我這樣測試

```javascript
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(function test() {
    console.log(i)
  }, i * 1000)
}

test() // test is not defined
```

test is not defined，代表我的思考是錯的，儘管我們可以當作 `setTimeout` 的 Callback function 參數是宣告在全域，但不代表可以這樣呼叫。

於是我開始打消了這樣的想法，另外還有一個原因就是，由於我們學到要 function call 才能進入並初始化 function EC ，接著執行該 EC，那麼回到最初來看，要 Stack 為空時，Queue 再傳 Callback function 入 Stack 並執行，不就要屆時才進行 function 初始化 ?

於是之後關於 Callback function，我的問題就更多了，因為如果以這一題延伸出來，不限於 `setTimeout` 幾乎所有的　Callback function 大多都會先到 Queue 等待 Stack 執行完畢，那 Callback function 到底是如何存取 Global Object 的值呢 ?

於是找了好久，在 Stack Overflow 找到了[這一篇](https://stackoverflow.com/questions/33869145/is-it-possible-for-global-execution-context-to-pop-off-the-execution-stack?noredirect=1&lq=1)

這一篇的提問主要是提問者以為 JS 檔案裡面如果沒有 code，那麼 global EC 也不會存在，當然這是錯誤的想法，因為 global EC 主要是底層運作機制，該有的資料結構還是會有，只是有沒有內容而已，我比較有興趣的那回文者的說法：

> Q: in case of asynchronous callbacks, when an event gets out of the event queue and gets into JS engine as to be run, what exactly happens in the execution stack?

> A: Again, a new global execution context is created and pushed onto the empty execution stack. In MDN this is described in slightly different terms than in ECMAScript spec:

> A: When the stack is empty, a message is taken out of the queue and processed. The processing consists of calling the associated function (and thus *creating an initial stack frame*). The message processing ends when the stack becomes empty again. (MDN. Concurrency model and event loop)

> A: Here "stack frame" means "execution context" and "initial stack frame" corresponds to "global execution context".

簡而言之大意就是：當 Callback function 進入到 Stack 執行時，JavaScript 引擎會於 Stack 中創建 global EC，再於 Stack 執行 Callback function，接著 Callback function 彈出，global EC 彈出，結束。

但對於這樣的說法我不是很確定，因為本週所學關於 Stack 與 Queue 的演講不是這樣演示的啊，我明明就親眼看到 `main()` 彈出之後 `console.log(i)` 才進棧的，於是我又找了[另外一篇提問](https://stackoverflow.com/questions/29879525/is-the-initial-global-execution-context-ever-popped-off-the-call-stack-in-javasc)

發問者主要是問，既然 global EC 永遠會位於 Stack 的最底層，那麼他合理懷疑，每次從 Queue 調工作去 Stack 的時候，都會先調 global EC 進 Stack，這樣邏輯才對

回文者的回文也很有意思：

> Q: Is the "initial global execution context" ever popped off the call stack in JavaScript? I am talking about the execution context that is at the bottom of the stack at all times.

> A: Yes, it is. An empty execution context stack is the requirement for any jobs to run.

> A: However, there is no such thing like an "initial global execution context", and since the stack can be empty there is no single context that is at the bottom of the stack all the time.

這樣說也沒錯，Stack 勢必是會被清空的，這樣才能運作

> A: Global execution contexts" are created in ScriptEvaluations. Every script does have its own scriptCxt, yet all of them in a shared realm carry the same **global environment records.** These scriptCtxs are not at the bottom at the stack, though.

> Q: If so, I presume this means it is pushed onto the stack first before a callback is picked up off the Job Queue?

> A: Yes indeed. We can see this from the instructions for the NextJob algorithm steps. These are performed at the end of the ECMAScript initialisation and end of every job, and basically read as follows:... 以下省略

我不知道 NextJob 是什麼，但這篇回文者也同意在 Callback function 被調用之前會先調用一個 EC 進 Stack，但這邊沒有說是不是 global EC

直到發問者問對了問題：

> Q: Alternatively, is it the [[Scope]].outer chain that provides access to the global environment whenever a callback is pushed onto the stack?

> A: Yes indeed. The scope chain (that is not to be confused with the execution context stack) does provide access from everywhere to the global environment, which sits at the end of every scope chain.

意思就是 [[Scope]] 的確已經被建立了，而如果說 Callback function 回 Stack 之前必定先調用 global EC，那個 function.[[Scope]] 也確實存在，那麼即使是當 Callback function 進入 Stack 時才進入 function EC 並初始化，也可以在此時拿到串起 scope chain

最後看到[這篇提問](https://stackoverflow.com/questions/51316541/is-the-global-execution-context-pushed-onto-execution-context-stackecs-before?rq=1)

大意就是發文者問說，剛剛我提供的兩篇他都看完了，但是他還是不懂到底當 Queue 裡的任務入 Stack 的時候，究竟會不會創建 global EC，這邊我也找不太大相關資料了，太累了

最後我也在想，之所以 `console.log(i)` 可以獲取 `i` 的值，會不會是因為閉包，閉包機制保存了全域變數的 `i`值，使其沒有隨著 Stack 清空而釋放

但這樣想也蠻奇怪的，因為閉包畢竟也可以透過底層運作去推論，而且這樣的狀況也不像閉包，所以還是回歸底層運作討論就好

所以結論 : 

第二題我其實沒有寫得很仔細，因為我仍不確定以下幾點

1. 究竟 `setTimeout` 的 `console.log(i)` 是怎麼獲取全域變數的 `i` 值 ? (儘管我知道 `i` 是全域變數)

2. `setTimeout` 的參數 function 是於哪一個時點於進入 Execution context 並初始化的 ?

3. Callback function 從 Queue 調入 Stack 時，究竟會不會重新創建 global EC ? 

以上就是本週心得。