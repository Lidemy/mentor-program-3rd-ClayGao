## 為什麼我們需要 React？可以不用嗎？

可以不用呀 ! 可以用 Vue 或 angularJS.............XD

不用框架還是有 jQuery，而且最後都是 JavaScript 呀，所以 JavaScript 基礎很重要就是這樣來的

不是啦，我覺得這個問題在於工具層面與概念層面

概念層面來講，三大框架概念上其實應該都差不多，三種框架學哪一種其實都可以，

工具層面的話就是需求取向，根據目前業界哪一種工作機會多，還是說你比較偏好哪一種，甚至是興趣取向都可以

說到這個話題，就想到之前某大大給的建議

問題是要不要為了公司去重新學一個框架呢？

前輩給的建議是，看你要在這間公司待多久，如果你要久待，為何不學呢？

但對於入門者來說，先求得分項，再求加分項，老師給予很好很棒學習 React 的資源，就好好用囉！

-----

## React 的思考模式跟以前的思考模式有什麼不一樣？

以前的思考模式是利用 `append` 等語法來增減 DOM，一直到學框架之前那一次使用 jQuery 做 todo-list，讓每一次的增減都重新根據陣列 / 物件資料來渲染

而 React 的概念用 state => render 就可以貫穿整體，雖然一開始接觸時頗不習慣，但習慣之後就可以很好實現想做出來的概念，加上框架中的 `Component` 在開發時有很好的可讀性，而 `props` 也挺好理解的。

總的來說，React 的概念把前端的操作簡化成 state => render　兩個階段，於是開發者的開發方法就離標準化更近了一點。

-----

## state 跟 props 的差別在哪裡？

state 隸屬該 `Component`的值，而 props 則是由父組件傳給子組件的方法或值

```
父祖件 - props -> 子組件
```

基本上兩個不是同一個概念上的東西，應該寫得更仔細一點：

```javascript
class Test extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>{this.props.value}</div> 
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        // state 僅隸屬該 Component
        this.state = {
            testValue: 100
        }
    }
    render(){
        return (
            // 但我可以利用 props 傳遞我 state 的值，甚至開立函式讓子組件呼叫
            <div>
                <Test value={this.start.testValue}　/>
            </div>
        )
    }
}
```
在上述這個案例中，`App` 是父組件，`Test` 是子組件，兩者透過 props 做傳遞，

更直白點講，我們在 `<Test />` 中放入的屬性就會是 `class Test` 中的 this.props

-----

## 請列出 React 的 lifecycle 以及其代表的意義

有時候我們希望使用 React 完成各式各樣的功能，那麼我們就需要在 constructor => state => render 的階段拆分成更多的時點，以利我們做出想呈現的操作，所以我們將 constructor => state => render 分解成更細的階段，而這一連串階段就是所謂的 React 生命週期

畫一張來看看

```javascript
Mounting (掛載）->　getDafaultProps　// 
                -> getInitialState
                -> componentWillMount // 組件掛載之前，內中若放 setState 不會觸發 render，只會觸發一次
                -> **render**
                -> componentDidMount // 組件掛載完成之後

Updating (更新) -> shouldComponentUpdate -> false
                                         -> true // 可以想像成一個閘門，可以在內中寫判斷式決定是否 render (課程中有範例)
            true -> componentWillUpdate // 更新後決定 render 之前，這邊不可放 setState，否則會無限循環，可使用　getSnapshotBeforeUpdate　代替＊
                -> **render**
                -> componentDidUpdate // render 之後就會調用

            -> componentWillReceivePorps (nextProps) 
            // Props 值即將變化之前，特別注意因為　props 掛勾著父組件與子組件，所以父組件重新 Render 或 props 發生改變都會觸發
            // 可使用 getDerivedStateFromProp 代替＊


Unmounting (卸載) -> ReactDOM.unmountComponentAtNode
                  -> componentWillUnmount　// 刪除於 componentDidMount 時期註冊的組件

```

上述生命週期案例 :

```javascript

// --- Mounting ---

class LifeCycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {test: hello}
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    // --- 首次 render ---

    componentDidMount() {
        console.log("componentDidMount")
    }

    // --- Updating ---

    componentWillReceiveProps(nextProps) { // // 可使用 getDerivedStateFromProp
        console.log("componentWillReceiveProps")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true;        
    }

    componentWillUpdate() { // 可使用　getSnapshotBeforeUpdate　代替
        console.log("componentWillUpdate")
    }

    // --- 再次 render ---

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    // --- Unmounting ---

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
	render() {
        console.log("render");
        return(
            <div>
                <span><h2>{this.props.number)}</h2></span>
                <span><h2>{this.state.test}</h2></span>
            </div>
        );
    }
}
```


覺得很棒的參考 : https://eyesofkids.gitbooks.io/react-basic-zh-tw/day23_lifecycle/

關於 React 生命週期其中幾項的描述 : https://medium.com/@nightspirit622/react-16-3-%E4%B9%8B%E5%BE%8C%E7%9A%84lifecycle-hooks-311661f65859

很詳細的 LifeCycle 文章 : https://juejin.im/post/5b077f04f265da0dc073caa6

