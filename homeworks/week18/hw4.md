## gulp 跟 webpack 有什麼不一樣？我們可以不用它們嗎？

Gulp 與 Webpack 的差別我認為要從不同角度來看，當然，他們是不同的

如果光用 Babel 當作使用例子，gulp 的 gulp-babel 與 webpack 的 babel-loader 產出的結果可以說是一樣的

若從這種簡單的例子當做入門點，其實第一印象真的很難感覺到他們的差別

所以要知道差別，就要從比較全面的地方來談。

gulp 是一個自動化 task 流程，當你有很多 tasks 要處理的時候，gulp 可以幫我們這樣處理

task1 => task2 => task3 => task4 ......

而 webpack 本身的功能就是將套件模組化，使其可以打成一包

記得我們之前在學 jQuery / Bootstrap 等套件的時候都要先 `<script>` 在 html 中，許多套件用下來，很容易變成以下狀況：

```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://www.qian1.top/a/news/bzzx/51.html.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://kejyuntw.gitbooks.io/ns-CSS-gulp-sass.html.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```

如果使用 webpack，我們可以打包成一個 .js 檔就好

```html
<script src="./dist/index.bundle.js"></script>
```

另外，webpack 還可以把套件如模組化的方式引入到專案，也就是 node.js 的 import 與 export 模式

使一般瀏覽器網站開發也可以支援這個功能

那為什麼兩者都可以使用 babel 套件產生出一樣的結果 ?

gulp 使用 babel 的模式是單純一個任務轉換 .js 檔，差別在於你從手動操作 babel 轉為 gulp 幫你操作而已

而 webpack 則是將其模組化的時候幫你使用 babel 插件編譯，就是預處理的意思

當然從 babel 套件來看實在會誤會兩者在幹一樣的事情，其實這種感覺就像如果你只看蹄子的話，驢與馬是差不多的

所以我們整理一下結論：

- Gulp

    以一種 flow 的方式來處理任務，(不考慮是用 gulp.series 或 gulp.paralell)，有些人或許認為 npm package.json 的 `"script: { }"` 也能做一樣的事情

    但個人認為學習 gulp 的成本不高，不如直接用 gulp

- webpack

    webpack 本身其實也可以視作 gulp 中的其中一個 task (真的有一個套件是 gulp-webpack)，只是沒什麼人這麼做
    
    對於它和 gulp 的區別，你會發現在 2018 年之後，開始有人認為在網路上聲明自己僅用 webpack 而用不到 gulp

    這是因為 webpack 的插件功能近期越來越多，即使可以與 gulp 產生一樣的處理結果，但程式的處理邏輯與 gulp 還是差很多的

    更不用提 webpack 本身還有模組化的引入與匯出功能，所以還是將 webpack 視為功能很多的打包工具即可




## hw3 把 todo list 這樣改寫，可能會有什麼問題？

原本的做法，不論是 Week13 的 todoList 或是 Week8 的留言板，我們都是直接將新增的 Message / task 直接新增並 append，其實當時我就在想，這樣的作法其實的確是有把新增的 Message 送到後端，但是僅僅是表面地在前端部分新增該 Message 的皮，而不是真正因為後端有了這個 Message 而顯現在前端上。於是當時就在想，有沒有什麼只要我一新增，就可以讓後端的資料即時反映到前端的做法，當然，現在學到現在，知道這樣的做法其實未必好，因為如此一來可能會降低運行的效能。

然而在本週 hw3 我們把作業這樣改寫，其實與我當初的構想是比較接近的，因為至少前端每次的顯示都是即時根據當時的 Array 現況來反映，而且這樣寫起來的確省力不少，連 DOM 的操作都省了，交給 `render() 就好`。但承上一段所述，如果每一次的 CRUD 都重新與後端發 Request 重新渲染，會導致性能降低，那麼同理，每一次的 `render()` 當然也會導致效能上的降低，因為 `function render()` 本身是透過清除所有的 DOM 元素再重新 `append`，每一次的 CRUD 都 RE 一次，也會有相同的影響。

但是就目前來看，這不一定是個大問題，比如說 todolist 本身是一個極小的專案，那麼效能上的差異微乎其微，所以個人認為目前以這份作業的質量來說，這麼做的確比原先做法好了不少。

## CSS Sprites 與 Data URI 的優缺點是什麼？

- CSS Sprites :

    - 優點: 
    
        減少程式讀取圖片的次數，一次就讀取好，想像一下如果一個網頁共 50 張圖片(多半是小圖)，就有 50 次的 Http Request，儘管我們可以使用 cache，但速度絕對強不過我僅僅只讀取一張圖片，加快網站的讀取速度，節省空間之外也節省時間。

    - 缺點: 
    
        開發的時候比較繁瑣，因為要去算一大圖中每一張小圖的位置，但現在這可以用工具處理，網路上很多。另外就是如果要其中一張小圖，整張大圖都會動到。再者，在一些特殊的解析度，如大圖本身不夠寬，會有背景斷裂情況。另外就是如果對這張大圖的 Request 掛了，那麼許多圖也等於是掛了。

    - 結論: 
    
        用靈活性低，較繁瑣的開發過程來成就成品的效能，儘管如此，知名大站 Yahoo 則是使用這個方案的最佳範例 ([Yahoo](https://tw.yahoo.com/) 的 icon 的確很多)...

- Data URI 

    - 優點: 
    
        Data URI 利用 base64 編碼特性，瀏覽器可以讀懂編碼並將其轉換為可視的圖片 (推薦 [dataurl.net](https://reurl.cc/6AWv5) )，大幅減少 Http Requests ，節省流量，增強效能。可以寫在 HTML 或 CSS 中，如果寫在 CSS，則是讓 HTML 引入一個 CSS 檔就好，與 CSS Sprites 有異曲同工之妙。另外它也不用像 CSS Sprites 去算圖片位置，相對而言於開發上是比較省力的。

    - 缺點: 
    
        在網頁原始碼上的易讀性不好，難看出來原始碼對應的圖片，並且當圖片本身有改動時，網頁都要重新寫編碼。另外就是經過 base64 轉換過後，會比原始圖檔還大 (這一點可透過 gzip 壓縮)。另外它無法被 cache，所以每次瀏覽網站都會需要瀏覽器解碼。

    - 結論:

        在開發上若為提高效能，Data URI 看似是比 CSS Sprites 更省力的，但是它的原理是透過瀏覽器解碼，所以效能會集中在劉裡器運作之上，另外像是如果一張圖需要以不同大小在於頁面上不同地方顯示的話，這邊也是 CSS Sprites 比較難做到的，所以如果是我，我會想優先嘗試看看 Data URI 的解決方案。


- 參考資料 :

    - https://medium.com/cubemail88/data-uri-%E5%89%8D%E7%AB%AF%E5%84%AA%E5%8C%96-d83f833e376d

