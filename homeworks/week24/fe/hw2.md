## Redux 如何解決非同步（例如說 call API 拿資料）的問題

Redux 解決非同步的問題是採用 Middleware，簡單理解就是 Action -> Reducer 之間所做的處理

運用這個方法的概念，是讓 Action Creator 回傳一個 Function，而這個 Function 內中做我們想做的非同步處理

當然 Function 最後處理完仍會回傳一個 Action 物件給 Reducer 接收

概念如以上，而開發者能使用的套件也各有不同

目前為人所知的是 [Redux Thunk](https://github.com/reduxjs/redux-thunk) 與 [Redux saga](https://github.com/redux-saga/redux-saga)，而這次作業使用的 [Redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware) 更是就我們原本對 Middleware 的理解下更進一步的優化套件。

Redux Thunk 的概念其實很簡單，也就是 Action Creator 回傳的如果是 Function 而不是 Object，那就執行該 Function

那麼這樣理解就是將我們的商業邏輯放在 Action Creator 回傳的 Function 之中，但當專案變大之後，我們的 Action Creator 可能就不這麼純粹了，而且一個充滿邏輯的 Action 集合想必是很難以維護

Redux Saga 可以幫我們解決上述的問題，使用 Redux Saga，Action Creator 一樣可以只回傳單純的 Action Object，而我們會使用 Saga.js 去監聽是否有非同步的邏輯需要運行，做法是「當監聽到 Action Object 中特定 Type 時，就執行某 Function」

當然上述的部分牽扯到 Saga 的核心概念與「generator function」，但這邊我也只找到資料，還沒開始研究就是了

另外在很早的老師教學中有提到當同時發送三個 Request，但第二個比第三個晚回來，但我只想要最後一個 Response，該如何解決？這邊在 Redux Saga 中也有解決方案，但目前尚未自行操作過，就學習曲線上，Redux Saga 是比較難入門的套件，這邊就有待我之後去實作了。

