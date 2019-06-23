這一 Round 的複習我會採取和上一 Round 複習不同的方式，挑重點來寫。

原因是因為這次前三周都是在做前端基礎，第四周是後端，東西非常多，所以我拆成兩部分，**前端**與**後端**。

**前端**部分本周正式加入 HTML 與 CSS，並在第三周的時候與我們先前所學的 Javascript 與串接 API 做結合，讓我們可以做出一個完整的前端網頁，這週我會把之前所學整理成自己的東西。

而這一 Round 最後一週的後端基礎，因為覺得領悟得還不夠深，所以後端的心得想保留到下一次複習週再撰寫

這一週針對前端部分做整理。

---

# 前端基礎

- 網頁本質

  網頁的本質其實就是純文字檔案，你所看到的「畫面」是經由瀏覽器將純文字檔案的內容「渲染」而成，而這渲染的過程之後會有所講解。

  也不要忘記，瀏覽器之所以可以處理網頁，是因為其可以辨識 ( 看得懂 ) 裡面的結構。

- HTML ( HyperText Markup Language )

  HTML 為「超文本標記語言」，這些文字語言轉換到瀏覽器渲染成你的所見所聞，這邊所指為 HTML 語法，而非副檔名。

  那從這邊可以了解它不是程式碼，你可以看到一分 HTML 有很多標籤。

  這邊就來一一介紹這些標籤，但很基本的地方不會講太細，盡量寫出值得討論的部分和重點。
  

   
  - \<!DOCTYPE HTML\> // 不一定要加，但不加可能會碰到一些 Bug
   
    基本上，這個標籤的 DOCTYPE 是 Document Type 的縮寫，是在 HTML 4.01 版本時出現，簡單來說就是定義文件類型。
    它的作用是要告訴各個瀏覽器，當瀏覽器在對其做識別時，看到 \<!DOCTYPE HTML\>  就會依照規範去對該文檔做處理，所以這個標籤的目的是為了統一規格，也就是標準化。

    參考資料：http://www.webpage.idv.tw/maillist/maillist4/new/02/02.htm

  - \<html\> 

    象徵所包起來的為 html 語法。

  - \<header\> 與 \<head\> 

    \<header\> 是 HTML 5 之後新添加的標籤，意思同於 \<div id="header"\>，根據 2016 年的參考資料，有些老瀏覽器不支援這樣的標籤寫法。

    而 \<head\> 則是過去就一直使用的，我們在此區塊引入各種 CSS 和 JS 庫，也可以使用 title 與 meta 標籤等等。可以理解成語言中的頭文件。

    至於兩者的差別，目前已知在[這篇](https://stackoverflow.com/questions/24647645/can-header-replace-head-in-html)文章之中，使用起來是沒有差別的，但實質上他們還是不同的，之所以可以運行，是代表瀏覽器對語法限制較寬鬆，而 \<head\> 還是依然是代表 html 結構之一的主要標籤。
  
  - \<meta\>

    這個元素提供有關頁面的訊息，有很大的一個功能是在它的屬性 name，其中的 keyword 可以使這個網頁有利於搜尋引擎的關鍵字搜索。

    在最早的使用上，我們加入 charset 這個屬性定義該網頁的編碼。

    - 參考資料 : http://www.w3school.com.cn/tags/tag_meta.asp

  - \<body\>

    網頁的本體，我們會在這邊作業。

  - \<nav\> 與 \<footer\>

    其實本質是 \<div\> ，之所以賦予新標籤名稱是因為在檢視 html 語法結構時可增加易讀性。

  - \<!-- 與 --\>

    網頁的註解，可以當作是 JS 的 /* 與 */ 
  
  以下我們會介紹 /\<body/\> 內的標籤

  - \<h1\> 至 \<h6\>

    標題的意思，被這個標籤包住的字體會變大變粗，隨著數字越大，級別越小。

  - \<p\>

    內文的意思，可以想像成段落，內中的段落會**無視段落預設的空格與換行**

  - \<pre\>

    也是內文，但格式會與程式碼內的格式相同，也就是預設的格式，所以即使加入空白也會顯示在頁面上

  - \<br\>

    換行的意思，段落中只要\<br\>一出現，就會直接斷句並換行

  - \<div\> 和 \<span\>

    body 內最常見的兩個標籤，就是包起來的東西為一個區塊，被包起來的東西是不會有任何變化，但實際上已經被包起來，這邊可以用 CSS 套用該區塊，對其做視覺上的變化。

    \<div\>會讓相鄰的元素垂直排列下來，\<span\>則是會與相鄰的元素並排，若相鄰的元素也是\<span\>的話，另外就是\<span\> 也可以包住一個段落內的文字或句子，對其用 CSS 做特殊處理。

    這些概念很基本，但什麼時候要用 ? 

    \<div\> 主要是和 CSS 有所搭配才能彰顯它的效用，但很容易讓整個頁面成為\<div class="..."\> 的狀況，其實不是這麼易讀

    在 HTML 5 之後，出現了語意化標籤 ( 一說為語義化 ) ，是將\<div\> 用其他的名稱替代，除了增加易讀性外，也會加入一些預設效果，如\<aside\> 與 \<article\> ( 見參考資料 )

    但目前我還是繼續使用 \<div\> ，等未來更熟練之後再考慮使用語義化標籤

    比較有趣的一個討論是當實作按鈕時到底要用\<button\>還是\<div\>，一說是看專案類型，也有一說是\<button\>可以自動將按鈕上的文字垂直置中。

    - 參考資料：

      - https://medium.com/@changru.studio/%E5%BF%AB%E9%80%9F%E4%BA%86%E8%A7%A3html%E8%AA%9E%E6%84%8F%E5%8C%96%E6%A8%99%E7%B1%A4-33dd8247d779

      - https://juejin.im/post/5cb1a7af5188251b0c653736
    
    - \<img\>

      圖片，沒有結尾標籤，直接加入屬性即可

      - src

        可以是網址與檔案位置

      - title

        滑鼠移上去會顯示該屬性內容

      - alt

        當圖片沒有顯示時會顯示該屬性內容作為替代文字

    - \<ul\> 和 \<ol\> 都使用 \<li\>

      簡單來說，\<ul\>標籤包起來的就是無序列內容，\<ol\>包起來的就是有序列，看 o 代表的意思為 order 就知道了

      包起來的內容每一個元素都是使用\<li\>包起來，不要搞混

      \<ul\> 示範

      ```html
      \<ul\>
        \<li\>一\</li\>
        \<li\>二\</li\>
        \<li\>三\</li\>
      \</ul\>
      ```
      - 一
      - 二
      - 三

      \<ol\> 示範

      ```html
      \<ol\>
        \<li\>一\</li\>
        \<li\>二\</li\>
        \<li\>三\</li\>
      \</ol\>
      ```
      1. 一
      2. 二
      3. 三
  

  - \<table\>

    \<table\>包住你的元素，\<tr\> 為橫列，\<td\> 為直行

    而 \<td\> 的另外一個型態是 \<th\> ，意思一樣，只是包起來的部分會變粗體 

    ```html
    <table>
      <tr>
        <th>課程</th>
        <th>姓名</th>
        <th>課程時間</th>
      </tr>
      <tr>
        <td>英文課</td>
        <td>老皮</td>
        <td>一小時</td>
      </tr>
      <tr>
        <td>國文課</td>
        <td>老趙</td>
        <td>一小時</td>
      </tr>
    </table>
    ```

    出來就是這樣

    **課程  姓名  課程時間**  
    英文課  老皮 一小時
    國文課  老趙  一小時

  
  - \<a\> 連網頁外面 ( 超連結 ) 和裡面 ( 錨點 )

    連結的意思，被\<a\>包起來的內文會變成一個連結，可以點下去

    介紹幾個屬性

    - href

      有兩種用法
      
      第一種為超連結，直接在屬性寫上網址就好

      這邊搭配第二個屬性 target

      - target

        內中有 _self ( 預設值 )，直接從當下網頁連過去新網頁

        _blank 則是新開分頁至超連結

      第二種為錨點

      寫一個語法 \<a href=#go\>haha\</a\>

      然後在妳要前往的目的地加上 #IDname

      如此 haha 點下之後就可以到達該標籤了

  - 語意化 UI 標籤

    概念在上面有介紹過了，這邊提一下，在實質效果上，使用原本的 \<div\> 與語義化標籤是沒有任何差別的，但使用語義化標籤會更好

    這邊有一個討論我覺得很棒　https://www.zhihu.com/question/271997896

    簡單來說，使用語義化標籤可以讓你的 html 程式碼質感提升，而更重要的是對於 SEO 來說，語義化標籤的重要性就重要得多。

    我在思考未來很可能語義化標籤的份量會越來越重，全 \<div\> 的編寫方式可能也會被取代。　

      
  - \<iframe\> 嵌入網頁

    跟 \<img\> 概念很像，使用 src 屬性做 source

    - src 

      填入要嵌入的網址，要注意的是不是每個網頁都可以嵌入，大部分網站都會將引用功能關掉，阻擋客戶端嵌入

  - \<form\>　表單

    很重要的一個標籤，被表單包住的各種 \<input\> 都是預備要被表單輸出的元素

    - input

      常用的 \<input\> 很多，可以使用 type 決定種類，type 預設為 text，是一個文字輸入框

      type 還有 password 和 email 與 date 可以使用，可讓輸入框被限制於僅現於 Email 的格式或者讓使用者輸入的密碼內容為不可見

      創造一個 \<input\> type 為 submit 可以將這個表單內的 input 內容送出

      多介紹一下這次在作業多使用的一些屬性

      - placeholder

        輸入框致中預設的字，比如說：「請輸入電子郵件」

      - list

        當使用這個屬性，\<input\> 會變成下拉式選單，也可以輸入文字
        
        會讀取與該署性值相同的 \<datalist\> 元素，比如說 \<input  placeholder="Game's Name" list="data"\>

        下面可以用對應的 \<datalist id="data"\>

        而 \<datalist\> 內中就可以有很多的 \<option\> 包住的文本內容，可以讓你的輸入框可以自動連接到預設選項


        ```html
        <input  placeholder="Game's Name" list="data"/>
        <datalist id="data">
          <option>League of Legends</option>
          <option>Counter-Strike: Global Offensive</option>
          <option>Apex Legends</option>
          <option>World of Warcraft</option>
        </datalist>
        <button class="search__btn">Search</button>
        ```

    另外就是核取方塊

    - radio 

      多個 radio 預設為複選，若要單選，則將他們的 name 屬性指定為同一個

      如果要連 \<input\> 後面的文字點選也能選到 radio，必須將文字以\<label\>包住，然後內使用屬性 for，值為 \<input\> 內的 id

      ```html
      <form>
        <div>
          <input type="radio" name="gender" id="male" /><label for="male">男性</label>
          <input type="radio" name="gender" id="female" /><label for="female">女性</label>
          <input type="radio" name="gender" id="other" /><label for="other">第三性</label>
        </div>
      </form>
      ```
    - checkout

      基本上比照 radio，但由於通常使用於複選，所以不會有如 radio 般指定回同一個 name 的做法，

      而經過實測，加了 name 也沒有作用

    另外介紹\<form\> 很重要的兩個屬性，action 與 method

    - action 

      即這個表單要提交到哪裏，值為 URL

    - method

      要使用何種方法提交，值為 GET 和 POST，沒錯就是我們在第四週學的

  - CSS

    - CSS 套用的三種方法

      - 在標籤加入 style 屬性

        \<div class="background:black;" \>

      - 在 \<head\> 加入 \<style\>
      - 創建 .css 檔案，並引入 CSS 檔案位置
      
        \<link rel="stylesheet" href="style.css"\>

    - CSS 選取元素

      - 選取所有 *

      - 選取標籤

        ```css

        body{
          backgroung-color:black;
        }

        div{
          backgroung-color:red;
        }
        ```

      - 選取 id / class

        ```css

        #title{
          background-color:black;
        }

        .content{
          background-color:red;
        }
        ```
      順帶一提，在編寫 html 時，每個 id 的名字是獨一無二的，而 class 可以重複

      - 選取同時符合兩個以上條件以上的元素

        ```css
        span.content{
          background-color:red;
        }

        #title.content {
          background-color:black;
        }
        ```

        意思是我必須同時是 \<span\> 元素並同時擁有 class="content" 才會被選到，

        第二個例子同理

      - 選取次階層的元素 ( 下一層或以下全部 )

        有分空一格和 >

        如果是空一格，代表選擇底下所有的，不管是次階層、第二層、第三層都會被選擇到

        如果是 > ，代表下指定下一層，若照上面例子看，只會選到第二層，第三層與第四層都不會被選擇到
        
        ```html
        <div>
          <span>
            <span>
              <span>
              </span>
            </span>
          </span>
        </div>
        ```

        ```css
        div span {
          background-color:black;
        }

        // 所有 <span> 都會被選擇到

        div > span {
          background-color:black;
        }

        // 只會選擇到 div 底下的那一層 span
        ```

      - 選擇隔壁元素 + / ~ ( 同一層 )

        + : 僅選擇單個元素

        ~ : 選擇旁邊所有元素

        ```html
        <div>
        <span class="one">
        </span>
        <span class="two">
        </span>
        <span class="three">
        </span>
        </div>
        ```
        
        ```css

        div + span {
          background-color:black;
        }  // 僅 one 會被選到

        div ~ span {
          background-color:black;
        } // one, two, three 都會被選到
        ```

        這個選擇方法運作可以理解為兩個階段

         1. 找尋符合的條件

         2. 選取元素

        在這三周的作業中，比較常用到的是 ~

        通常是用在類似 List 的狀況，依賴第一個元素當定位，跟在後面的與前面都保持一定間距 

      -  Pseudo-Classes 

        意思是當對該元素施以指定事件時，假裝創建一個元素，我們可以將這個元素套用樣式

        方法為在後方加入 「:事件名稱」

        ```css

        div:hover {
          background-color : red;
        }
        ```
        
        這是最常用到事件，即滑鼠移上選取元素時，背景變為紅色

      - first-child / last-child 與 nth-child()

        也是 Pseudo-Classes 的一種，通常搭配上述介紹過的「選下層所有」使用


        ```html
        <div>
        <span class="one">
        </span>
        <span class="two">
        </span>
        <span class="three">
        </span>
        </div>
        ```

        ```css

        div span:first-child {
          background-color : red;
        } 選第一個，one 會被選擇到

        div span:last-child {
          background-color: black;
        } 選最後一個，three 會被選擇到

        div span:nth-child(2) {
          background-color: blue;
        } 選 () 內中的那個，如 2，就是選第二個，two 會被選擇到

        ```

        ```html
        <div>
        <span class="rules">
        </span>
        <span class="not__reles">
        </span>
        <span class="rules">
        </span>
        </div>
        ```

        ```css
        div .rules:nth-child(2) {
          background-color: blue;
        } // 什麼都不會選到，而不是選到最下面那個 span
        ```
        原因是因為 nth-child 會先選到該層的第 n 個元素，再比對它是不是符合該層

        比如說這個範例是先選到第二個 span，再比對該類別是否為 rules，比對結果不符合，所以不選擇  

        - 關於 nth-child() 內中的其他值

          - odd : 選奇數個

          - even : 選偶數個

          - n ( 如 3n / 3n +2 等)

            n 將會是一個從 0 開始代入的數，如果是 2n ，就會選擇 0、2、4、6、8、10

            如果是 2n + 3 ，就會選擇　3、5、7、9、11、13

      - 偽元素 ( Pseudo-Elements )

        為了跟 Pseudo-Classes 區別，偽元素用 :: 表示

        會稱為偽元素的原因是，它可以利用 CSS 產生出一個類似於 html 中的元素，所以得稱

        用途會用在當符合該 CSS 條件時 ( 就是被選到 ) 可以加入單位 ( 使用 after ) 或標題 ( 使用 before )

        ```css

        .money::after {
          content : "$";
        }
        ```  

        ```html
        <div>
          <span class="money">123</span>
          <span>456</span>
          <span class="money">789</span>
        </div>

        123 $

        456 

        789 $
        ```         
        即符合 money 的元素都在最後面加上 $ 字號，注意 content 這個屬性，加入字串用 "" 包住

        - attr : 抓出所選元素內的屬性

        ```css

        .money::after {
          content : attr(class);
        } 抓出選取到的 class 屬性值
        ```  

        ```html
        <div>
          <span class="money">123</span>
          <span>456</span>
          <span class="money">789</span>
        </div>

        123 money

        456 

        789 money
        ```

        偽元素的使用時機，有一個不錯的案例是你需要針對該元素內的某些文字套用上不同的顏色或外型

      - CSS 權重

        如果兩條不同 CSS 選擇方式選擇到同一個元素，那哪一個才算是真正選到呢 ?

        

        - 當選擇語法完全一樣時，後面的為重

          ```css

          .money {
            background-color : green;
          } 

          .money {
            background-color : red;
          }
          ```  
          結果: 背景將是紅色

        - id > class > 標籤，簡單來說就是描述越詳細者勝

        　  在比對過程中，只比該語法中的最大值

        　　假設我要選擇的元素同時擁有 class="prd" 與 id="apple"

          ```css
          .div.wrapper > div.production > div.prd {
            background-color : green;
          } 

          #apple {
            background-color : red;
          }
          ```  
          結果: 背景將是紅色 

          不論我在第一個描述了多少 class 或標籤，其權重值仍無法大於 id 的權重值

          因為 id > class > 標籤

        - 承上，雖然如此，在 .css 檔案中套用的 CSS 樣式，無法大於在 html 屬性中的 style 樣式，除了 .css 中的 !important 

          ```css
          #apple {
            background-color : red;
          }
          ```  

          ```html
          <body>
            <div id="apple" style="background-color:yellow" >123</div>
          </body>
          ```

          123 的背景為黃色


          使用 !important，注意該語法的位置

          ```css
          #apple {
            background-color : red　！important;
          }
          ```  

          ```html
          <body>
            <div id="apple" style="background-color:yellow" >123</div>
          </body>
          ```

          123 的背景為紅色

        - 所以總結：!important > html 元素中 style 屬性 > 選取 id > 選取 class > 選取標籤

    - CSS 盒模型 ( Box model )

      所有被套用 CSS 的元素

      由內而外為 content -> padding -> border -> margin

      基本上這個應該用這個概念看待每一個元素

      而一般在元素中的尺寸 width 與 height 指的是 box-sizing

      而 box-sizing　預設是 content ( content-box )，我們一般用 div 包住的文本就是在 content 裡面
      
      所以如果沒有特別指定 box-sizing， width 與 height 指的就是 content 的寬度與長度

      而 box-sizing 可以指定為 border-box 、padding-box 或 margin-box

      當 box-sizing 指定為不同的盒模型內容時，CSS 對盒子內寬高的處理也會不同

      使用時機為，如果我已經規劃好這個元素我最大的寬高已經預先決定

      就可以先用 box-sizing 固定

      如此無論如何都不用擔心該元素的實際大小會大於我預先想好的大小

    - CSS 盒模型

      - block ( div、h1、p )

        預設 display : block;　特性為 block 會換行顯示

      - inline ( span , a )

        預設為 display : inline; 
        
        特性為寬與高不會被 width 與 height 影響，只會被內中的文字影響

        而若是使用 margin，則只能影響左右間距，不會影響上下間距

        原因是因為 span 與 a 常被使用在段落中的某段文字，通常我們要對某段文字做特別處理時，都是調整左右 ( 因為格式是左到右書寫 )，而非調整上下 ( 那已經是行距了 )

        padding 的部分，則是會從內中文字為起點往外撐開元素

      - inline-block

        可以理解成與 inline 相同可以並排，但 inline 不能調整寬高與 margin 上下等限制被取消了，可以使用。

        也可以更好理解為 inline-block 是可以並排的 block

    - CSS 定位 ( position : )

      - static 

        其實就是預設的定位方式，都是以左上角為中心點

      - relative

        relative 是相對的意思，預設是相對於 static

        所以這時候可以設定 top，若 top 為 20px;

        則這個定位點就會向上遠離 20px，該元素會往下移 20px 的距離

        right 若為 20px，該元素則會往左移動 20px ( 注意這時候指定了 right，元素會被判定為從 right 為起始 )

        以此類推

      - fixed

        fixed 是相對於使用者使用瀏覽器所見之窗口做定位

        本身是可以跳過元素排序並蓋過其他元素，不會影響原本元素的排序

      - absolute : 針對參考點進行定位

        absolute 會先找尋一個參考點，這個參考點是逐漸往上尋找的，absolute 尋找的是一個非預設 static 的元素

        如果找不到參考點，它就會找以 body 為參考點

        另外，該元素被 absolute 定位之後，會脫離原本元素排序，並且可會蓋過其他元素，不會影響原本元素的排序

      - sticky

        很好用的一個元素，當瀏覽器滾論往下拉即將蓋住該元素時，該元素就會如同 fixed 黏住瀏覽器邊框


      - 圖層順序 z-index

        簡單來說可以想像該預設都是 0，值比 0 大的如 1 就會顯示在前面，-1 同理，會顯示在後面

    - CSS 好用屬性介紹

      - Chrome 瀏覽器中 body 預設不留白邊

        ```css
        body {
          margin: 0;
          padding: 0;
        }
        ```

      - 如何左右置中

        ```css
        .wrapper {
          width:100px;
          margin: 0 auto;
        }
        ```

      - 上下左右置中

        ```css
        .wrapper {
          width: 100px;
          height: 150px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -75px 0 0 -50px;
        }
        ```
      
      - 元素內文字左右置中

        ```css
        .wrapper {
          text-align: center;
        }
        ```

      - 元素內文字垂直置中

        ```css
        .wrapper {
          height:100px;
          line-height:100px
        } 即 line-height 與 height 同
        ```
      
      - 元素內文字換行

        ```css
        .wrapper {
          word-break : break-word;
        }

        若使用 break-all ，則不保證字的完整性
        ```
      這邊資料內容持續增加中
      
  - Javascript

    瀏覽器中的 Javascript，
    
    原理是 Javascript 會藉由瀏覽器發出 request 給 Server，Server 再回傳 response 給瀏覽器中的 Javascript。

    但因為需要經過瀏覽器，自然會受到一些限制，如同源政策。

    然而，若只探討我們用 Html 與 CSS 編撰的靜態網頁，我們可以用 Javascript 改變預設的 DOM 元素。

    而做法則是先使用 Javascript 元素選取標籤，再使用語法修改。

    - 選取 DOM 元素，語法以函式類別 document 為開頭

      - getElementById

        抓所屬 id 的元素，只會有一個。很好理解，因為 id 也只會有一個。

      - getElementsByTagName
    
        抓所屬標籤名稱的元素，但是一個集合 ( 很像陣列的集合 )，注意語法中的 Elements 是複數型態

      - getElementsByClassName

         抓所屬類別名稱的元素，與上一個抓取標籤一樣是個集合，語法中的 Elements 也是複數型態

      - querySelector

        可以選取上述三種，而選取內容和 CSS 選取相同，id 前面加「#」，class 前面加 「.」，標籤直接輸入就好

      - querySelectorAll

        即 querySelector 抓取複數的版本，由於是抓取複數，所以所抓取的也是一個似陣列的集合，需要注意

      需要注意的是，上述 ( ) 內的值皆要用 " " 包起來

    - 選取之後

      - innerText

        選取該元素內中的文本

      - innerHTML

        選取該元素內中的所有文本與 HTML

      - outerHTML

        選取包含該元素的所有文本與 HTML

    - 選取之後並修改屬性

      - setAttribite("屬性","value")

    - 選取之後並加入或移除 CSS

      - classList.add() : 加入該 CSS

      - classList.remove() : 移除該 CSS

      - classList.toggle() : 若已經有該 class 樣式則套用，否則移除，可以理解成開關

    - 選取之後插入或移除標籤元素

      通常在插入元素時，要先宣告一個變數儲存創建出來的標籤

      - createElement() ：　() 為標籤種類，如果 div / span / img

      - createTextNode() : () 為文本，如 "安安你好"

      - appendChild() : 從父元素內部尾端插入該元素

      - prendChild() : 從父元素內部前端插入該元素

      - removeChild() : 從父元素內部移除該元素

      ```javascript
      const item = document.createElement('div') // 先創造一個元素
      element.appendChild(item) //將此元素插入
      ```

    - 重要 : 選取之後加入監聽事件

      - addEventListener("事件類型",函式, 監聽器位置限制在捕獲 / 冒泡階段)

        先談第三個參數，第三個參數為 Boolean，true 為捕獲階段，false 為冒泡階段，預設為 ture，可不輸入

        - 捕獲與冒泡

          - 並不是掛了監聽器才有事件，就像猴子不是爬到樹上才屁股紅，是因為它爬到樹上紅屁股才被你看到

            所以按照標題寫的，並不是因為掛了監聽器才有事件，是因為你替目標元素掛了監聽器你才監聽得到這個事件，這是很多人誤會的一點，實際上你在 DOM 元素上觸發事件的時候捕獲和冒泡都一直在發生，只是如果你想要利用捕獲和冒泡觸發一些事情，你就需要監聽器去發現這個事件，進而對這個事件採取動作 ( 也就是 addEventLister() 內中的第二個參數 : 函式 )

            所以請記得，當你掛上監聽器的時候，並不是你「創造了這個事件」，事件本來就存在，你只是創造了一個監聽器來發現事件，並利用監聽器所發現的事件去做你想做的事。


          - 捕獲和冒泡

            當一個父元素包住一個子元素，你對子元素做了一個事件，父元素也會被觸動，假設這個事件是 click，順序是這樣

            1. 使用者點擊了子元素

            2. 父元素發生點擊事件 -> 子元素發生點擊事件 -> 子元素發生點擊事件 -> 父元素發生點擊事件


            當然，一個子元素外面可能不會只有父級元素，還會有父父級與更甚者，但這邊所說的都不包含旁系元素

            事件一定會先捕獲後冒泡，所以事件一定會先經過父級元素 -> 子元素 -> 子元素 -> 父級元素

            那事件能不能可以被截斷 ? 可以，就利用剛剛所寫的監聽器

          - addEventListener() 中的 function

            參數約定俗成會使用 「e」或者是「event」，你可以利用這個參數調用你所要的資訊。

            比如說 e.target 會顯示觸發事件的目標為何。

            - e.preventDefault()

              這個參數是廢除該事件的作用，比如說偵測到點擊 click，就阻擋掉點擊 click 這個事件。
              
              但請了解，監聽器本身還是有先接收到這個事件 ( 這是當然，不然監聽器怎麼知道要呼叫 function )，然後到了呼叫 function 時才使其停止默認行為。

            - e.stopPropagation

              截斷後面的事件

              這個方法可以讓我們利用監聽器來截斷後面的事件，那從哪裏截斷？這就跟監聽器所掛勾的位置有關了，那決定監聽器的位置，我們可以利用監聽器的第三個參數 true ( 捕獲階段 ) 或 false ( 冒泡階段 ) 來做決定

              比如說不管這個頁面有多少按鈕有多少父級元素，事件都會觸發我們的大父級 DOM 元素 Window

              所以假設我在 Window 掛一個 click 監聽器，內中函式放入 e.stopPropagation，並利用參數將這個監聽器掛在捕獲階段 ( true )，那麼你會發現你怎樣點擊頁面都沒反應

              這是因為點擊頁面上的幾乎都是 Window 的子元素，一定會於最開始的捕獲階段先通過 Window，但是事件流在 window 就被截斷，後面子元素當然接收不到事件流，就自然沒反應了 

            - e.stopImmediatePropagation

              當有多個相同類型監聽器綁定同一個元素，你可以替你僅僅想選擇的監聽器加入這個方法，如果你只使用 e.stopPropagation，那其他綁定同一個元素的監聽器也都會觸發到。

          - 事件代理　event delegation

            延續監聽器對於事件處理中 e.stopPropagation 說明所舉的 window 加入監聽器截斷案例，如果我們今天不是選擇截斷，而是選擇在父級元素掛一個監聽器去取代在內中各個子元素掛監聽器，那就可以達成「事件代理」

            你可以想像成一個房子裡面有十個房間，房間內都有住人，如果你想監視有沒有人從房子裡面出來，你不必每個房間門口都掛監視器，你只需要在這間房子大門掛一個監視器就好。

            事件代理也是這個意思。

      - 交換資料

        有了上述的介紹，我們大概知道如何使用 JS 來操控並利用 DOM 元素了，而我們也利用監聽器來偵測流動在 DOM 元素之間的事件流，利用事件流與回呼函式的原理使我們可以做更多的操作。

        至於操作什麼？如果我們要讓網頁從靜態網頁變成動態，光學會上述這些是不夠的，因為這樣的網頁是死的，是一層皮，並沒有與骨肉相連。

        要與骨肉相連使網頁前後端合一變成一個完整生命體，就需要做資料的交換，就像血液來回流通一樣，而使用 JS 與後端伺服器交換資料的技術，是目前最常使用的。

        在談交換資料之前，先了解一下 JS 如何發送 request 給 後端

        瀏覽器上的 Javascript -> 瀏覽器 -> Server -> 發送 response 給瀏覽器 -> 瀏覽器上的  Javascript

        response 有可能是 JSON，也可能是 php

        但在看 JS 如何與後端交換資料之前，我們先來看 form 表單交換資料的方式，這個方式也包含了 HTTP 中的 Method，request 也包含了 header 與 body ，如同第四週課程一樣

        - 最常見的方式：form 表單

          在上面的 html 標籤有介紹到 method 和 action，method 內中為 GET / POST，action 為你的目標 URL

          但這樣交換的方式會使的頁面換頁，不是很人性化。

        - Ajax ( Asynchronous JavaScript And XML )

          Ajax 是任何非同步來與後端交換資料的技術統稱，它與本節開頭所講的不同，它的資料交換方式如下

          瀏覽器上的 Javascript -> 瀏覽器 -> Server -> 發送 response 給瀏覽器上的  Javascript

          使用方法為

          ```javascript
          const request = new XMLHttpRequest()

          request.onload = function() {
            // 當非同步函式執行時的執行內容
          }

          request.open("GET","www.google.com") // 使用何種 method，以及目標網址
          request.setRequestHeader("header","value") // 若要在 header 帶資料，可在此代入
          request.send() // 發送 Request
          ```

          你也可以使用監聽器的方式，如 request.addEventLister() 的方式。要觸發也是使用 request.send

          然後使用 request.responseText 呼叫出回傳資料，但這邊要注意的是，回傳的資料也有可能為空，這邊要看 Server 端是怎麼寫的。

        - 同源政策 ( Same origin policy )

          這邊只談同源政策的重點

          1. 同源政策是由瀏覽器所限制的，是由伺服器回傳 Response 給 JS 時通過瀏覽器，經瀏覽器辨識為不符合同源政策而擋下來的

          2. 同源的意思必須是 scheme 同源 ( 如 http 與 https 不同源 )、Domain 同源 ( 如 google.com 與 yahoo.com 不同源 )與 Port 同源，但大多數情況下你可以理解成相同網域就好。

          另外有些資料是不受同源政策限制的，如 image ( \<img\>) 與 \<script\>

          - CORS ( Cross-Origin HTTP request ) 跨來源 HTTP 請求

            要理解該伺服器端是否受同源政策影響，可以觀察其 Response Header 中的 「Access-Control-Allow-Origi」為何，內中會編寫哪些來源的 request 符合同源政策。比如說內中若為 *，代表這份 Response 本身是允許所有網域請求資料。

        - 不受同源政策影響的瀏覽器交換資料方式

          我們可以知道在之前的作業中，我們使用 node.js 做資料交換時，是不受同源政策的限制的。

          那有沒有同樣使用瀏覽器交換資料也不受限制的方法呢？

          有的，那就是 JSONP ( 不是 JSON ) ，用法不贅述，這邊僅提供概念

          假如說 JSON 是間諜們的暗號，那麼 JSONP 就是間諜們傳遞暗號所用的摩斯密碼。

          所以可以理解 JSONP 是一種傳遞的方式，通常被認定是一種協議，它利用 \<script\> 標籤不受同源政策限制的特性，從這個漏洞中達到資料交換的目的。

          通常是先在本地創建一個 \<script\> 元素，然後再創建另一個 \<script\>，在內中創建一個函式去調用我所要的資料，並將這個函式回傳給我的本地要發送 Request 的程式，當都扣在一起之後，我就能繞道拿取資料了。



  - Cookie、Local Storage 與 Session Storage ( 老師對不起我看到了 )

    - Cookie

      在後端 Server 中，Response 會自動將 Cookie 帶入 Response 回傳給前端，常用於廣告驗證或者身分驗證 ( 這邊的身分驗證不是指密碼帳號登入，而是第一次登入過後的第二次或第三次造訪不須再重新輸入帳號密碼 )

      而瀏覽器收到 Cookie 之後會放在使用者系統之中，下次再發送 Resquest 時也會自動帶上與目標 Domain 相關的 Cookie，給後端做驗證。

    - Local Storage

      但是像這種暫存資料的方式並不一定是 Cookie 的專利，有時候我們可以自己寫一些資料到 Local Storage 之中，

      ```javascript
      window.localStorage.setItem('text','hahaha') // ("key","value")
      ```

      如此就能成功儲存一筆 key 到 LocalStorage

      使用的時機是如果你想做出一個使用者填資料的網站，使用者若中途輸入資料關閉，localStorage 也會存著。

    - Session Storage

      而 Session Storage 則是一段期間內儲存的資料，使用方法如以下範例

      ```javascript
      window.sessionStorage.setItem('text','hahaha') // ("key","value")
      ```

      差別在於 Session Storage 是存在不同分頁並且關閉頁面就不復存在，保存性也沒有 Local Storage 來得好，所以其適用在一些短資訊儲存，比如說註冊會員表單中輸入的密碼或身分證字號之類的。

# 後端基礎

    這邊會在 Week11 與 Week12 編寫完成，放在 Week16 的複習心得




          


      



    
        

      

      
        

        

        





      

          


        

        
          



     






  
