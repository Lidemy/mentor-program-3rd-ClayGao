## 什麼是 Ajax？

- Ajax ( Asynchronous JavaScript And XML )

簡而言之，就是使用 JS 以非同步的方式與伺服器交換資料，最後的 XML 目前都是採用 JSON 了

Ajax 藉由 JS 傳達給瀏覽器發送 request 向伺服器交換資料，資料會送回到 Javascript , 然後我們可以再利用 JS 的運算邏輯將回傳回來的文字格式用我們想要的方式呈現在瀏覽器上。

---

## 用 Ajax 與我們用表單送出資料的差別在哪？

表單是最早用來與伺服器交換資料的方式之一，其特點在於表單傳送資料會刷新整個頁面，而發送 request 的是瀏覽器本身。

Ajax 使用 JS 發送 request，JS 會再透過瀏覽器送出，所以瀏覽器如果不支援 JS，將無法成功發送。Ajax 交換資料並不用刷新整個頁面，只會做局部的刷新。而速度方面也比表單交換資料要快，頁面也不會閃屏，更甚者，網路頻寬也吃得比較小。

順帶一提，使用 form 表單發送請求時會發現 Content-type 為 applicaiton/x-www-form-urlencoded，而非此次作業使用的 application/json，這也是表單與 Ajax 發送資料的明顯差別。

為了更深度了解，我看了[這篇](https://imququ.com/post/four-ways-to-post-data-in-http.html)

這邊有提到 applicaiton/x-www-form-urlencoded 作為 Content-type 的狀況，在 Ajax 上也是有案例的，只是目前 Content-type 仍以 application/json 為主流。 

[ 關於  applicaiton/x-www-form-urlencoded ](https://blog.csdn.net/qq_28702545/article/details/51719199)

---

## JSONP 是什麼？

假如說 JSON 是間諜們的暗號，那麼 JSONP 就是間諜們傳遞暗號所用的摩斯密碼。

所以可以理解 JSONP 是一種傳遞的方式，通常被認定是一種協議，它利用 &lt;script&gt; 標籤不受同源政策限制的特性，從這個漏洞中達到資料交換的目的。

通常是先在本地創建一個 &lt;script&gt; 元素，然後再創建另一個 &lt;script&gt;，在內中創建一個函式去調用我所要的資料，並將這個函式回傳給我的本地要發送 Request 的程式，當都扣在一起之後，我就能繞道拿取資料了。

至於內中的原理，附上我這邊研讀的參考資料

[JSONP 工作原理](https://www.zhihu.com/question/19966531)

---

## 要如何存取跨網域的 API？

- 同源政策 ( Same-origin policy )

目前大環境下的 API 交換當然多是跨網域的，所以這個這道題目的產生，勢必是因為一般跨網域交換是一個被限制的狀況，這個狀況發生的原因，即是 「 同源政策 」( Same-origin policy ) 規範底下的結果。

所謂限制，是在跨網域情況下當你使用 Ajax 方式發送 Request 時，「瀏覽器」會將其攔截，並產生一個錯誤回報給 JS。

在跨網域的情況，是被視為不同源的，那我們不如來看看何謂「同源」

同源的定義，必須「同時」滿足下列至少三個要件才能稱為同源：

    1. scheme 同源 ( 如 http 與 https 不同源 )
    2. Domain 同源 ( 如 google.com 與 yahoo.com 不同源 )
    3. Port 同源 ( google.com:81 與 google.com 不同源 )

三者若一個不同，就不算是同源，在發送 request 時，就會被瀏覽器所阻擋

當然也有其他特例是可以允許跨來源存取的，如跨來源寫入與嵌入，但這邊不贅述，可以參考最後面的資料來源連結。

如開頭所說，當我們要存取跨網頁的 API，絕大多數都不太可能在同一個 Domain，之所以可以存取成功，是因為另一個規範 CORS ( Cross-Origin HTTP request ) 的功勞。

- CORS ( Cross-Origin HTTP request )

跨來源 HTTP 請求，就像一個識別證一樣，若內含有這個識別證，那我們就能成功完成跨來源存取。

當 Server 回傳的 Response Header 中有 「Access-Control-Allow-Origi」時，代表伺服器這部分是可以接受跨來源存取的。

所以順序為：

1. 瀏覽器替 JS 向 Server 發送 Request
2. Server 回傳 Response
3. Response 通過瀏覽器
4. 瀏覽器會檢查該 Response 的 Header 中的 Access-Control-Allow-Origin 內容是否與 Request Origin 相呼應
6. 若是，則會允許通過讓 JS 收到該 Response

[關於同源政策，超棒的參考資料] (https://medium.com/@jaydenlin/same-origin-policy-%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-%E4%B8%80%E5%88%87%E5%AE%89%E5%85%A8%E7%9A%84%E5%9F%BA%E7%A4%8E-36432565a226)

---

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為第四週我們使用 node.js 與 Server 交換資料，而這週我們利用 Javascript 透過瀏覽器與 Server 交換資料。

原來上述討論到關於跨網域的限制與 CORS，都是瀏覽器給我們的限制，反推可得知，若沒有瀏覽器，就沒有這些限制了，這就是第四週我們沒有遭遇到跨網域問題的原因。

這邊會預計在總複習週的時候探討 Node.js 與 Ajax 的本質差異，當然就目前得知，兩者幾乎是完全不同層級的。

