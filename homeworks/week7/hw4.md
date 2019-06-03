## 什麼是 DOM？

DOM ( Document Object Model )

在介紹 DOM 是什麼之前，不如先看看它會出現在哪

照理來講，我們向 Server 送出一個 request，Server 會回傳一堆代碼，這堆代碼頁面我們統稱為 Document，

Doucment 有許多類型

這時候的 Document 類型大多數為 HTML ( HyperText Markup Language )

這時候「瀏覽器」會將這堆代碼轉變為 DOM，它會呈現一個樹狀圖結構，所以我們也稱它為 DOM tree 或 html DOM

那就我們上周學到的，HTML 排序下來是 \<html\> -> \<header\> and \<body\> -> \<div\> or \<span\>

所以 DOM 排序下來也是如此

瀏覽器將 DOM 建構出來之後，接著會按照 DOM 從上至下的順序，在將呈現給使用者的頁面上做排列

比如說先放入 \<body\>，\<body\> 是一個大框框，再接著將 \<div\> 等等放入 \<body\> 這個大框框中，以此類推

都排列好之後，最後的步驟就會將排列的內容渲染成整個頁面，完成你所看到的內容，也就是網頁。


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

- *事件 ( Event )*

承接上一題，我們繼續了解

先談談所謂事件，泛指你在該頁面上的所有操作。舉凡你是點擊 ( click ) 頁面或按鈕，或者輸入內容 ( keydown)，都是事件，當然還有更多更多的例子。

 ( [事件模型](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface) )

在瀏覽器的 Javascript 中，我們利用語法改變了 DOM 的運作機制，兩者互動並交織出我們想要呈現的結果。

addEventListenet() 監聽器就是我們常用到的方法，當你在網頁頁面上做了某個動作，會觸發事件。

```html
<div>
    <span>
        <input>
    </span>
</div>
```

比如說用滑鼠點擊某個按鈕 \<input\>，該按鈕觸發了點擊事件，但除了這個按鈕之外，包住這個按鈕的 \<span\>　－　更甚者，包住該 \<span\> 的 \<div\> 其實都會接收到這個點擊事件，如果你幫他們全部掛上監聽器，就可以得知。

為什麼 ? 

- *捕獲與冒泡*

原來，在事件傳遞機制之中，當你點擊了身為子元素的按鈕，那麼它的父級元素 ( 包住他的他老爸 \<span\> 還有他爺爺 \<div\> )，也會收到這個點擊事件。

這樣的理解就像是當你做了**裝水**這個事件，

水龍頭打開，那麼這水也是經過了水庫，到汙水處理廠，到你住屋的自來水系統，再到你水龍頭一樣

他們都會因為你打開水龍頭的這個動作而有所感應，這就是事件捕獲階段所發生的事情。

而事件冒泡，可以想像成關掉水龍頭，從水龍頭被關閉這件事回傳到自來水系統、汙水處理廠以至水庫本身都察覺到這個動作，就是事件冒泡

簡而言之，

從 DOM 根部到目標元素的過程為捕獲，

從目標元素到 DOM 根部的過程為冒泡。

而捕獲和冒泡的順序就像「裝水」這個事件一樣，先有水流過來，再慢慢將水隔絕回去

所以順序就是「先捕獲，後冒泡」

addEventListenet() 監聽器的第三個參數就是決定要把此監聽器放在事件的捕獲階段或冒泡階段

true 為捕獲階段，預設或 false 為冒泡階段 ( 注意預設是冒泡階段，新手常搞錯 )


## 什麼是 event delegation，為什麼我們需要它？

```html
<div　id="father">
    <input>
    <input>
    <input>
    <input>
    <input>
    <input>
    <input>
    <input>
    <input>
    <input>
</div>
```

想像一下這個例子，我有十個按鈕，我希望他們每個按鈕按下去，都會彈出一個「耶」

但是從我們剛剛學到的捕獲與冒泡機制，了解到不論這十個按鈕我按下哪一個，\<div\> 都會有所反應

所以我可以把這個監聽器直接掛在 \<div\> 上，如此當我的 e.target 在哪個按鈕，都會觸發　\<div\> 上的監聽器

用 \<div\> 一個監聽器就代替了在十個 input 上掛監聽器，這樣的行為我們稱為「事件代理」( Event Delegation )

需要它的答案也顯而易見了，在 hw3 中我就是利用這個方法，直接在鍵盤區掛上 addEventListener，如此我點擊任何按鈕，都會直接觸動鍵盤器的監聽器

這樣我就不用替每一個按鍵都掛上一個 addEventListener，不但省時，程式碼也不會太過冗長 ( 雖然我應該還是寫得很冗長啦 )


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

- *e.preventDefault()*

event.preventDefault() 作用在 addEventListener 內中的第二個參數函式之中，它的作用是阻擋掉你預設的觸發事件，使其無效化

例如說，如果你的事件為 click ，它就當作你沒有點擊，如果的事件是按下鍵盤，它就當作你沒有按

但事件還是會被觸發，因為 event.preventDefault() 是阻擋預設行為，不是阻擋事件

如以下範例，當我點擊了 F

```
<div id="FFF">FFF
    <div id="FF">FF
        <div id="F">F
        </div>
    </div>
</div>
```

```Javascript
 <script>
    //冒泡階段
    document.getElementById("FFF").addEventListener("click",function(e){
        console.log("FFF 冒泡觸發 !")
    })
    document.getElementById("FF").addEventListener("click",function(e){
        console.log("FF 冒泡觸發 !")
    })
    document.getElementById("F").addEventListener("click",function(e){
        e.preventDefault(); //當我 click 的時候阻擋掉 click
        console.log("F 冒泡觸發 !")
    })
    //冒泡階段

    //捕獲階段
    document.getElementById("FFF").addEventListener("click",function(e){
        console.log("FFF 捕獲觸發 !")
    },true)
    document.getElementById("FF").addEventListener("click",function(e){
        console.log("FF 捕獲觸發 !")
    },true)
    document.getElementById("F").addEventListener("click",function(e){
        console.log("F 捕獲觸發 !")
    },true)
    //捕獲階段


//console.log
FFF 捕獲觸發 !
FF 捕獲觸發 !
F 冒泡觸發 !
F 捕獲觸發 !
FF 冒泡觸發 !
FFF 冒泡觸發 !
</script>
```
可以看到 FF 和 FFF 都接續冒泡，代表事件有被觸發，所以後續父元素的事件也觸發了，代表 e.preventDefault() 不會阻擋事件

那要如何才能阻擋事件傳遞呢 ?

- *event.stopPropagation()*

event.stopPropagation() 意思就是「阻擋事件冒泡」

也就是說你可以把這件事情斷掉後路，讓後續的父元素收不到這次事件，僅到你自己目標事件觸發為止

我們將上面那個程式碼做一點修改

```Javascript
 <script>
    //冒泡階段
    document.getElementById("FFF").addEventListener("click",function(e){
        console.log("FFF 冒泡觸發 !")
    })
    document.getElementById("FF").addEventListener("click",function(e){
        console.log("FF 冒泡觸發 !")
    })
    document.getElementById("F").addEventListener("click",function(e){
        console.log("F 冒泡觸發 !")
        e.stopPropagation();
    })
    //冒泡階段

    //捕獲階段
    document.getElementById("FFF").addEventListener("click",function(e){
        console.log("FFF 捕獲觸發 !")
    },true)
    document.getElementById("FF").addEventListener("click",function(e){
        console.log("FF 捕獲觸發 !")
    },true)
    document.getElementById("F").addEventListener("click",function(e){
        console.log("F 捕獲觸發 !")
    },true)
    //捕獲階段


//console.log
FFF 捕獲觸發 !
FF 捕獲觸發 !
F 冒泡觸發 !
F 捕獲觸發 !
</script>
```

可以看到 FF 和 FFF 的冒泡沒了，代表冒泡在 F 之後就被斷掉了。

event.stopImmediatePropagation() 這個補充一下，它除了包含「阻擋事件冒泡」的功能之外，也會阻止其他共同監聽這個元素的監聽器

```Javascript
 <script>
    //冒泡階段
    document.getElementById("FFF").addEventListener("click",function(e){
        console.log("FFF 冒泡觸發 !")
    })
    document.getElementById("FF").addEventListener("click",function(e){
        console.log("FF 冒泡觸發 !")
    })
    document.getElementById("F").addEventListener("click",function(e){
        console.log("F 冒泡觸發 !")
        e.stopImmediatePropagation()
    })
    //冒泡階段

    //捕獲階段
    document.getElementById("FFF").addEventListener("click",function(e){
        console.log("FFF 捕獲觸發 !")
    },true)
    document.getElementById("FF").addEventListener("click",function(e){
        console.log("FF 捕獲觸發 !")
    },true)
    document.getElementById("F").addEventListener("click",function(e){ // 被 e.stopImmediatePropagation() 阻擋掉
        console.log("F 捕獲觸發 !")
    },true)
    //捕獲階段


//console.log
FFF 捕獲觸發 !
FF 捕獲觸發 !
F 冒泡觸發 !
</script>
```

可以看到「F 捕獲觸發 !」不見了，因為我在「F 冒泡觸發 !」裝了　e.stopImmediatePropagation() 

所以其他共同監聽 F 的其他監聽器就接收不到事件了。