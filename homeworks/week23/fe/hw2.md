## 為什麼我們需要 Redux？

在一開始學習 React 的時候，我們知道 props 可以用來達成父組件與子組件的溝通

但當各個組件的數量逐漸變多，僅僅靠 props 傳遞的方法對於同級的子組件來說就會變得相當艱難

這種感覺就像是你在一座高山的頂端，而在不遠處就是另一座高山的頂端，若你想要到達對面，就必須先下到山底，再爬到另一座山直到攻頂

這時候你可能會心想：「如果有一條纜車可以直接到達對面的山頂就好了」

而 Redux 的出現，正好可以完成你的纜車構想，所以我們需要它

-----

## Redux 是什麼？

Redux 的概念構想就是把有「特定需求的」的 State 放入一個更高層且可共有的 Store 來儲存

Redux 架構承襲 Flux，卻更簡化且有效率

有需要「讀」內中的 State 或需要「寫入」內中的 State 的組件都可以訂閱

但要實際實現上面的構想，需要細講如下

首先是「Store」，是我們共同放 State 的地方

一個專案只有一個 Store，但我們都知道一個倉庫不分類的話會相當雜亂，所以其實我們可以做子分類

而子分類的作法就是依靠「Reducer」，你可以想像它是倉庫的輸送道，負責從外面運輸 State 進來

所以有多少種的 Reducer，Store 內其實就有多少子分類，因為 Store 內的 State 是依賴 Reducer 而生

然而，Reducer 也可以對 Store 內中的 State 做處理，

Reducer 負責接收「Action」，Action 代表我們要對 Store 中的 State 採取何種行動

依照 Action 的不同，Reducer 會回傳新的的 State 給 Store

所以 Reducer 本身也會有很多分類，用來應對不同的 Action，這邊就會用 `Switch...case` 來針對不同類型作處理

承上，我們再做一次整理：

- Store :

    實際上 Store 只是一個 JavaScript 物件，以下有兩個重要的語法：

        - getState() 獲取 state
        - dispatch(action) 更新 state

    就如同上述所提到的，當我們要拆分 Store 做分類時，其實這種概念是分成各種 Reducer，所以我們不會真的去拆分 Store

- Action :

    Action 是一個物件，基本上一定會有 Action Type，它同時負責告訴 Ruducer 該選擇怎麼處理，其他的物件屬性端看開發者如何決定，
    但 Action 內傳遞的資料盡量不要太多

    Action 這個物件由 Action Creator 創造，其實也不是很複雜，就是一個函式，會回傳一個 Action 物件而已，在實際上我們要執行 Action，
    就會用到剛剛介紹的 `dispatch(action)`，比如說以下面這個 Action Creator 而言：

    ```javascript
    const addTodo = (text) => ({
        type: ADD_TODO,
        text
    })
    ```

    我們就可以這樣來啟動它：

    ```javascript
    dispatch(addTodo(text))
    ```

- Reducer

    承上，當程式碼跑到 `dispatch(addTodo(text))` 的時候，`addTodo(text)` 就會回傳物件給 Reducer，
    
    Redux 幫我們安排了 Reducer 去接收一個 Action，我們不用煩惱它是怎麼做到的

    ```javascript
    const initState = {
        text: []
    }

    export function handleTodoReducer(state = initState, action) {
        switch(action.type) {
            case ADD_TODO:
                return {
                    ...state,
                    text: action.text,
                }
            case DELETE_TODO:
                return {
                    /*
                    ....
                    */
                }
            default:
                return state
        }
    }
    ```

    以上述這個 Reducer 而言，`initState` 決定了最初始化的 State 會是什麼，接著 `handleTodoReduce` 會接收到 state 與 action

    然後根據 action.type 的不同，回傳新的一份 state 給 Store

    所以概念上很好理解：Reducer 接收到一個 action，並根據 action 的類型來做不同種的修改

    而這只是其中一個 Reducer 而已，根據處理範疇的不同，我們會有不同分類的 Reducer

    這同時也分類了我們的 Store

- Reducer Combine

    承上，既然我們分類了這麼多 Reducer，最後當然要把他們集成在一起，`combineReducer` 這個語法幫我們完成了這件事情

    所以我們的做法通常是開一個 Reducer 的資料夾，將 `combineReducer` 寫在 index.js 之中

    ```javascript
    export default const todoApp = combineReducers({
        handleTodoReducer,
        getSingleTodoReducer,
        editSingleTodoReducer
    });
    ```

    注意到 `export default` 了嗎？這代表我們要把這個 Reducers 釋出

- 現在回到 Store
    
    我們在 React 的 `index.js` 引入這個 Reducers，並且利用 `createStore` 來創造 Store

    ```javascript
    let store = createStore(blogApp)
    ```

    這就回到先前所說，Store 是依賴 Reducer 而組成

-----
    
## 重新回答：為什麼我們需要 Redux？

這是我在學習一個 Redux 的一個重要疑問，也就是我要用 Redux 幹嘛？

因為在目前作業上因為專案不夠大，似乎還無法體現 Redux 的強大

另外就是初學 Redux 比較困難的問題不是我們知道如何去用，而是去知道何種狀況下可以不用 Redux

唯有知道這個分別，才能代表真正了解 Redux 的作用

事實上，一般的父組件與子組件傳遞一樣用 `props` 就可以了

而我目前的認知是，只要我一個 State 有兩個組件要去讀或寫，我就會採用 Redux

比如說這次作業上由 API 去撈的資料，這些文章內容可能在不同 UI 上都會使用到，這時就採用 Redux 來解決我們的問題

最後附上兩張圖看看 Redux 究竟為我們做了什麼：

![]('./01.jpg')

使用 Redux 之後，省去了大量 props 路徑要走，J 與 C 共用一個 Store 中的 State

![]('./02.jpg')


-----

## Single Page Application 是什麼？有哪些頁面一定要用這個架構去設計嗎？

當我們嘗試利用 client side render 的特性，動態渲染頁面而不用換頁的時候，就代表我們可以在單一個頁面操作

因為只要在同一個頁面使用 Ajax 撈資料(不換頁)，並渲染出來，這就代表幾乎所有功能我們都能這樣做到

不用跳頁意謂著在操作體驗上可以幾乎零延遲的做操作，使得整個網頁就如同一個 App (應用程式) 一般

但這樣做會有一個副作用，也就是網頁原始碼會很空，因為動態渲染出來的 DOM 是後面才 append 插入的

必須使用這個架構來設計的，影音類型的網頁會是好的例子，因為在搜尋其他音樂的時候，現在撥放的音樂不能停止

由於搜尋其他音樂時是使用 Ajax，不會換頁，所以音樂不會中斷

-----

## Redux 如何解決非同步（例如說 call API 拿資料）的問題

使用 [Redux Thunk middleware](https://github.com/reduxjs/redux-thunk)，簡單來說含中間件的 action creator 會回傳一個 function 來取代 action (原本是回傳 action 物件)，而這個回傳的 function 中也可以呼叫一些我們要接著執行的 Callback function

但不要誤會了，最後也是會回傳 action，只是中間我們改用回傳 function 來跑一些我們想要的非同步操作，然後把這些中間操作的塞入最後要回傳的 action 之中，大概範例如下：

```javascript
export function fetchData() {
    return function(dispatch) {
        axios.get('http://123')
        .then(resp =>
            store.dispatch(getPost(resp.data))　// getPost 是一個 action，會 return 一個物件
        )
    }
}
```
回傳一個 Function，這樣的做法感覺很 Closure，找資料看看之後確定的確是有用到閉包特性，但這邊還待研究就是了，網路上許多心得文介紹目前都看不太懂，可能待 Week24 周作業實際操作後理解
