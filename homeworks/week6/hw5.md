## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

- &lt;hr&gt; : 分隔線，有 align ( 對齊方式 )、size、width、color 與 noshade 等屬性。
- &lt;bgsound&gt; : 屬性有 src ( 音樂檔案路徑 ) 與 loop ( 重複次數 )。
- &lt;code&gt; : 代表代碼。

---

## 請問什麼是盒模型（box model）

想像你的網頁是一個城市規劃圖平面圖，而裡面眾多區域中有一個區域是個大型足球場，像巨蛋那樣。

這個足球場的規畫圖是一平面圖，由內而外有球場、觀眾席、圍牆與綠地。

你可以想像每一個網頁中的元素都是一個足球場，CSS 賦予每個元素一個盒模型，看起來就和足球場平面圖一樣，而每個盒模型內中由內而外是 content 、padding、border 與 margin。

- content

    這邊裝著的東西其實就是 html 中該區塊的內容，可能是文字或圖片，當你在 CSS 中使用 background 的時候也是作用於此 ( background 預設為透明 )

- padding

    這邊主要是 content 與 border 之間的區域 ( 也就是在 border 之內 )，在 box-sizing 為預設值 content-box 時，當 padding 的值越大，padding 會向外部的方向擴張，可以視為 content 的延伸 ，也就是你整個 box 尺寸會變大。

    承上，由於本身為 content 之延伸，所以會被 background 影響。

    可以設定不同方向的 padding ( padding-top / padding-bottom / padding-left / padding-right )

    padding : 20px
    padding : 20px 15px ( 上下 20px / 左右 15px )
    padding : 20px 15px 10px ( 上 20px / 左右 15px / 下 10px )
    padding : 20px 15px 10px 5px ( 上 20px / 右 15px / 下 10px / 左 5px)

- border

    為一可見的邊框，在 padding 的外環，有自己的顏色與型態元素，所以不受 background 元素影響。

    和 padding 一樣的是，在 box-sizing 為預設值 content-box 時．當 border 的值越大，border 會往外擴張，也會讓 box 的尺寸變大。

    border : 5px soild black ( border 粗細 / border 類型 / border 顏色 )

- margin

    在 border 之外，它主掌的是 box 離外面其它元素的距離，此距離以「空白區域」表示。不受 background 影響。

    它不會影響 box 的大小，當值越大，box 本身會遠離旁邊的元素越遠。

    可以設定不同方向的 margin ( margin-top / margin-bottom / margin-left / margin-right )，其實就和 padding 一樣

    margin : 20px
    margin : 20px 15px ( 上下 20px / 左右 15px )
    margin : 20px 15px 10px ( 上 20px / 左右 15px / 下 10px )
    margin : 20px 15px 10px 5px ( 上 20px / 右 15px / 下 10px / 左 5px)

- 如何區分 margin 與 padding ?

    簡單來說，*以 border 當分界*，border 以內的就是 padding，以外的就是 margin，padding 本身會吃到背景色，margin 則否。

- box-sizing：

    上述有提到 box-sizing ，也提到其預設值為 content-box，這是為何呢？

    原來我們平常在元素內設置的 height 與 width，並不是在設置 background 的寬與高，而是在設置 box-sizing 本身。

    如果今天 height 與 width 各設置 200px 與 100px，而 box-sizing 的預設值為 content-box，那就代表在 box 中，content 的高與寬將永遠被定在 200px 與 100px，至此，你會發現修改 padding 與 bording 的值時，會擴張或縮小的區域都不會是 content，content area 就像是一個堅固的磚塊一般，尺寸不會動搖。

    以此類推，如果將 box-sizing 設定為 border-box 時，我們固定了 border 的邊界，也就是當我的 padding 做擴張或縮小時，跟著變形的是 content，border 不會被影響。而如果我更改 border 的值時，由於 border 的邊界已經被固定，不可能向外擴張，所以你會看到 border 向內侵蝕。

---
## 請問 display: inline, block 跟 inline-block 的差別是什麼？

在 html 中，每一個標籤都有預設的呈現形式，如 &lt;div&gt; 和 &lt;div&gt; 之間會直接是間隔下一行的形式，而　&lt;span&gt; 與 &lt;span&gt; 則相鄰，事實上是因為這些標籤的 display 預設有所不同。

上述的簡單整理如下

| HTML 標籤 | 屬性 |
|-----------|------|
|&lt;div&gt; / &lt;p&gt; / &lt;h1&gt;~&lt;h6&gt;| block |
|&lt;span&gt; / &lt;a&gt; | inline |

- block

    display 為 block 的 box，會自己佔滿一整行，margin 和 padding 都可以隨自己喜好調整。

- inline

    display 為 inline 的 box，不會自己佔滿一整行，可以與其它元素並排，但是會有以下狀況：
   
    - 本身並無法隨自己喜好調整 height 與 width
    - 如果你調整 margin，會發現只能改變左右的邊距 ( 可以理解為正常狀況使用 inline 的時機也不會調整到上下 )
    - 如果你調整 padding，仍然會擴張，但是是以「不會改變該元素位置」的狀況擴張

- inline-block

    結合了 block 與 inline 的優點：

    - 可和 block 一樣隨意調整 margin / padding 與寬高
    - 和 inline 一樣可與其他元素並排，不會獨自佔滿一整行

---

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

- position：

    position 即為元素的定位位置，在 CSS 語法中，它作為定位方式的元素。

- static :

    是預設值，在此預設值之下，position 通常都是在元素的最左上角。想像一杯咖啡打翻了，流出來的咖啡面積是元素的長與寬，那麼咖啡杯本身是這灘咖啡面積的起點，這就是 static 的位置之於元素 box。

- relative：

    被設定成 relative 時，就是一個相對定位，也就是你可以將這個元素的位置相對於「你這個元素現在所在的位置」做定位，而你可以使用 top / bottom / left / right 調整這個元素的位置。比如說 top 為 20px，那你得到的 position 的位置就是之於「你這個元素現在所在的位置」往下 20px 的距離。但在改變自己位置的時候不會影響到其他元素，會和其他元素重疊。

- fixed：

    稱為固定定位，不論你的瀏覽器頁面如何滑動，它都會在設定好的位置不會改變。受到 fixed 定義的元素是相對於「瀏覽器窗口」做定位的，所以，和 relative 一樣，你可以使用 top / bottom / left / right 調整這個元素的位置。一樣會與其他元素重疊。

- absolute

    稱為絕對定位，它是相對於「離自己最近一個 position 屬性非 static 的元素」進行定位，直到往外找到 body 為止。它和 relative 不同之處在於，*絕對定位會脫離原本的排序*。

    - 關於脫離原本排序這一點，如果 absolute 本身沒有設定 top / bottom / left / right 的話，是不會脫離原本排序的

    - 既然是相對於離自己相近的那個元素，那如果那個元素本身的尺寸若改變了，absolute 本身這個元素位置會不會受到影響呢 ? 答案是會的，當父元素的 margin 有所變動時，absolute 的位置也會被影響。




