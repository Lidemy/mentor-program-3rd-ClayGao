## React Router 背後的原理你猜是怎麼實作的？

這邊要談兩個部分，一個是 `<Route>`，另一個是 `<Link>`

先談談我們本週的作業中，React Router 如何運作，我們都知道 React Router 是透過改變 URL 來改變渲染的組件

問題的背後總有一個問題，而將上述步驟拆得更細，可以更理解背後的原因

首先，`<Link>` 可以更新 URL，而 `<Route>` 基於 URL 改變 render

倘若 URL 本身匹配不到 `<Route>` 內的路徑，就不會渲染

----

### `<Route>`

```javascript
<Route path="/" exact component={Home} />
<Route path="/about" component={About} />
<Route path="/list" exact component={PostList} />
```

在最基本的上述範例我們可以瞭解，我們傳入了三個 props，分別是 `path`、`component` 與 `exact`

所以假如有一個叫做 `<Route>` 的 Component，應該會做下列幾件事情：

1. 檢查傳入的 path 是否匹配，若不匹配則不渲染

    這邊先說一件有趣的事情，就是假如說我沒有傳入 path 這個 props，那麼內容是會自動渲染的，這也代表 path 不是必須的 props

    這邊先不談 Route 如何接收到做為參數的 URL 來比對 path

2. 如果比對 path 為 true，則渲染 `component`

    這邊應該有點像是 index.js 中的 React.createElement

    ```javascript
    React.createElement(this.props.component)
    ```

3. exact

    課程已經有完美解答 exact 的意思，就是「是否要完全匹配？」，所以我猜想這個參數的傳入會影響到 path 的比對式

4. is match ?

    一個函式放在 `<Route> Component` 之中，負責決定最後的判斷，根據上述 path 與 is exact 的判斷結果，決定渲染或不渲染 

### `<Link>` 

```javascript
function Tab({ label, to, exact }) {
    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <li className={match ? "active" : ""}>
            <Link className="link" to={to}>{label}</Link> 
          </li>
        )}
      />
    );
  }

const Nav = ({isMove}) => {
    return (
        <nav className={isMove ? "window-is-Moving" : "window-UnMoving"}>
            <ul>
                <li>
                    Blue Orange
                </li>
                <Tab exact={true} to="/" label="Home" />
                <Tab to="/about" label="About" />
                <Tab to="/list" label="List" />
                <Tab to="/write" label="Write" />
            </ul>
        </nav>
    )
}
```

`<Link>` 中有傳一個 props 為 to，與 `<Route>` 相同，我們也可以假想有一個 `<Link>` Component

這邊就要提一下 `history` 物件，根據 [MDN的描述](https://developer.mozilla.org/zh-TW/docs/Web/API/History_API)，`history` 等同於我們瀏覽網頁的歷史紀錄

裡面有關於歷史紀錄的一些操作，也就是 `history.pushState()` 和 `history.replaceState()` 方法，

首先我查了一下 `history.pushState()`，裡面包含三個參數，先不管第一個與第二個參數，但是我在第三個參數的字串會改變 URL

比如說我現在在 claygao.websilte/project，然後執行以下 JavaScript

```javascript
window.history.pushState(null, null, "/blog/")
```

那麼我的網址列就會變成 claygao.websilte/project/blog/，但瀏覽器並不會重新 render 頁面

而 `history.replaceState()` 的概念與 `history.pushState()` 幾乎一樣，只是它不是以 push 的方式加字串在網址列後面，而是整個替換掉 URL

後來我看了其它的介紹文章關於 `history.pushState()`，對於歷史紀錄 `history` 有著這樣的描述：

> 浏览器历史记录可以看作一个「栈」。栈是一种后进先出的结构，可以把它想象成一摞盘子，用户每点开一个新网页，都会在上面加一个新盘子，叫「入栈」。用户每次点击「后退」按钮都会取走最上面的那个盘子，叫做「出栈」。而每次浏览器显示的自然是最顶端的盘子的内容。

這個概念與 Week17 老師要我們對於 Stack 實作 push 與 pop 的概念不謀而合，也了解為何當初老師會說 Stack 這個 Data Sctruct 在其它部分也會應用到

現在我們來討論 `pushState()` 的三個參數，來看看 MDN 的範例 :

```javascript
var state = { 
        foo: "bar" 
    };
history.pushState(state, "page 2", "bar.html");
```

- 第一個參數可以是一個物件，或者是字串，負責用來描述新紀錄的特性，這些參數會一併被添加到 `history` 之中，這個參數可給也可不給

    關於這一部分的應用在 `popstate` 可以發現，`popstate` 本身是個事件，也就是我們使用「上一頁」與「下一頁」功能的時候，就會觸發這個事件：

    ```javascript
    window.addEventListener("popstate", function(e) {
        var state = e.state;
        // do something...
    });
    ```
    e.state 就會是 `pushState()` 的第一個參數，所以以上述例子而言，`e.state.foo == 'bar'`

- 第二個參數也就是「新頁面的標題」，基本上被大多數的瀏覽器所忽略

- 第三個參數就是上列的範例，新頁面的相對地址

- 參考資料：https://www.renfei.org/blog/html5-introduction-3-history-api.html

說了這麼多，那 `<Link>` 到底做了哪些事情呢 ? 

這邊大概理解成 `<Link>` 這個 Component 使用了 history API，並將  傳入 this.props.to 作為 `pushState()` 的第三個參數，使 URL 產生改變

### 後記

`<Route>` 會根據 URL 比對路徑並渲染，`<Link>` 也可以更改 URL，但兩者間並沒有牽起連帶關係

也就是說我們需要給一個監聽器之類的東西，讓 `<Route>` 偵測到 URL 有改變，並重新跑一次內容

這邊我覺得有很多方法可以做到，就不贅述了 

另外就是在後面繼續查資料之後，發現 `<Route>` 其實還有一個 props : render

如果 `<Route>` 沒有放 component 這個 props，就會渲染出 render 中的內容

而如果有 component，這它的優先順序會優於 render


## SDK 與 API 的差別是什麼？

SDK (Software Development Kit) 與 API (Application Programming Interface) 的差別其實不難解釋

API 從以前我們學習程式到現在，從一個比較具體的東西到現在可以想成一種概念，也就是說如果你要對某個較底層的東西做操作，會需要一個中介者來幫你

你只要知道如果操作這個中介者，不用去管那個底層

這也是為什麼我們一開始會用「服務生」的概念牽起**餐廳顧客**與**廚房**，而交流的「餐點」與「消費金額」等就是由服務生來幫我們做處理

你只要面對服務生，就算菜難吃你也只要幹ㄍㄧㄠˇ服務生就好 (咦?)

至於 SDK，字面上翻譯來看是軟體開發工具包

軟體兩個字就不用看了，「開發」與「包」就是重點，開發在於我可以利用對方釋出的這個 SDK 開發出東西，而「包」就是各種小工具的集合

那 SDK 與 API 的關係是什麼 ? API 本身也會包含在 SDK 的使用之中，所以在這一方面你可以將 SDK 想像成餐廳內的廚房

那廚房是幹嘛用的 ? 就是生產餐點用的，這個也是 SDK 可以「開發」並生成產品的概念

其實你在使用 SDK 的時候，就會用到 SDK 中提供的 API 來做開發

具體案例就是一個產品公司提供一個 SDK 給開發者，開發者就可以利用該 SDK 開發出與該產品相關的東西


## 在用 Ajax 的時候，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？

我們都知道一般發 request 給後端的時候會一併帶上 cookie，但之後使用 Ajax 操作之後，就沒有談到 cookie 是怎麼帶的了

但首先必須先提一點，Ajax 是會自動帶 Cookie 沒錯，但只限定在同源的情況下才會

但不同源的情況下呢？

我們需要設置 `withCredentials` 為 `true`，以 jQuery 而言，範例如下：

```javascript
$.ajax({
        url : 'http://google.com/',
        data : data,
        dataType: 'json',
        type : 'POST',
        crossDomain: true,
        contentType: "application/json",
        withCredentials: true  // 設置為 true

```
但這樣還不夠，後端這邊也要做設置

```php
<?php  
    header("Access-Control-Allow-Origin: http://claygao.website");  
    header('Access-Control-Allow-Credentials:true');   // 
    setcookie("testcookie", $value, time() + 3600);  
```

這邊要注意的是，當 `Access-Control-Allow-Credentials` 為 `true` 時，`Access-Control-Allow-Origin` 就不能是 `*`

關於這一點在 MDN 有說明：

> ### 身分驗證請求與萬用字元 :

>在回應一個身分驗證請求時，伺服器必須於 Access-Control-Allow-Origin 標頭值中指定一個來源，而不是使用「*」萬用字元（wildcard）。

>上方範例的請求標頭中包含了一個 Cookie 標頭，若 Access-Control-Allow-Origin 標頭為「*」，則請求將會失敗。範例中的 Access-Control-Allow-Origin 標頭值為「http://foo.example」（一個實際的來源）而不是「*」萬用字元，所以身分驗證證明內容被回傳予呼叫的網站內容中。

>請注意上面範例中的 Set-Cookie 回應標頭也設定了另一個 cookie。萬一失敗，會拋出一個錯誤（取決於所使用的 API）。

- Axios 如何帶 Cookie ?

    這週我們有新教 Axios 這個 library，那 axios 怎麼帶上 cookie 呢 ?

    請看下列程式碼 :

    ```javascript
    // 所有 axios 
    axios.defaults.withCredentials = true;

    // 單個 axios
    let {data} = await axios.get('//localhost:3000', {
    withCredentials: true
    })
    ```

- fetch 如何帶上 cookie ?

    ```javascript
    fetch(url, {
        method: 'POST',
        credentials: "include"
        ...
    ```

    是 `include` 而不是 `true`，代表的是該 URL 都會發送 Cookie，順便介紹其他參數：

    - `omit`(預設) : 不帶上 Cookie
    - `same-origin` : 同域情況下的 request 才發送 Cookie
    - `include` : 不論是否同域都會發送 Cookie