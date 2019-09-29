// App.js
import React, {Component} from 'react'
import './style.scss'

class Board extends Component {
    constructor(props){
        super(props)
        // 先建立一個 19*19 空陣列，創造棋盤格
        let squares = []
        for(let i = 0; i < 361; i++) {
            squares.push(
                {
                    playerColor : '', // 空棋盤格無顏色
                    squareId : i+1 // 格子編號
                }
            )
        }
        this.state = {
            squares : squares, // 將棋盤格納入 state 中，以 render 棋盤格
            isBlack: true,　// 黑子開場
            gameIsOver: false // 判斷遊戲結束的依據
        }
        this.judgeWinner = this.judgeWinner.bind(this) 
    }

    // 下好離手
    handleClick(id, playerIsBlack) {
        let turnIsDone = false;　// 回合是否結束
        this.setState({
            squares: this.state.squares.map(square => {
                if(square.squareId === id && !square.playerColor) {
                    turnIsDone = true;
                    return {
                        ...square,
                        playerColor: playerIsBlack ? 'black' : 'white'
                    }
                } 
                return square
            }),
            isBlack : turnIsDone? !this.state.isBlack : this.state.isBlack // 如果回合結束，才換對方
        },()=> {　// 更改完 state 立刻執行 function
            if(turnIsDone) {
                this.props.addRound()
                this.judgeWinner(id)
            }
        })
    }

    // 判斷勝者
    judgeWinner(id) {
        let x = id % 19 ? id % 19 : 19 // 棋盤上落子 x 座標的計算方法
        let y = Math.floor((id - 1 ) / 19) + 1 // 棋盤上落子 y 座標的計算方法

        // 計算檢查起點 1 (左上 -> 右下)
        function countExamination1(x, y, id) {
            let newX = 0
            let newY = 0
            let examinationPoint = 0
            const baseNum = Math.floor(id / 20) 
            if (baseNum >= x ) {
                 newX = 1 
            } else { newX = x - baseNum }
            newY = y - (x - newX)
            examinationPoint = 19 * (newY - 1) + (newX)
            return examinationPoint
        }
        
        // 計算檢查起點 2 (左 -> 右)
        function countExamination2(y) {
            let examinationPoint = 0
            examinationPoint = 19 * ( y - 1 ) + 1
            return examinationPoint
        }

        // 計算檢查起點 3 (左下 -> 右上)
        function countExamination3(x, y, id) {
            let newX = 0
            let newY = 0
            let examinationPoint = 0
            const baseNum = Math.floor( (361 - id) / 18) 
            if (baseNum >= x ) {
                 newX = 1 
            } else { newX = x - baseNum }
            newY = y + (x - newX)
            examinationPoint = 19 * (newY - 1) + (newX)
            return examinationPoint
        }

        // 計算檢查起點 4 (下 -> 上)
        function countExamination4(x) {
            let examinationPoint = 0
            examinationPoint = 343 + ( x - 1)
            return examinationPoint
        }

        // 判斷勝負與獲勝者，方法智障但寫起來單純
        function ChooseWinner(arr) {
            for (let i = 0; i < arr.length; i++) {
                if(arr[i] !== '' 
                && arr[i] === arr[i+1]
                && arr[i+1] === arr[i+2]
                && arr[i+2] === arr[i+3]
                && arr[i+3] === arr[i+4]) {
                    alert('GGWP ! Winner is ' + arr[i+4].toUpperCase())
                    this.setState({
                        gameIsOver: true
                    })
                } 
            }
        }

        const examination1 = countExamination1(x,y,id) // 左上 -> 右下
        const examination2 = countExamination2(y) // 左 -> 右
        const examination3 = countExamination3(x,y,id) // 左下 -> 右上
        const examination4 = countExamination4(x) // 下 -> 上
       
        let listA = [], listB = [], listC = [], listD = []
        
        // 左上 -> 右下線
        for (let i = 0; i < 19; i++) {
            this.state.squares.map(square => {
                if(square.squareId === examination1 + 20 * i) {
                    listA.push(square.playerColor)
                }
            })
        }
        ChooseWinner(listA)

        // 左 -> 右線
        for (let i = 0; i < 19; i++) {
            this.state.squares.map(square => {
                if(square.squareId === examination2 + i) {
                    listB.push(square.playerColor)
                }
            })
        }
        ChooseWinner(listB)

        // 左下 -> 右上線
        for (let i = 0; i < 19; i++) {
            this.state.squares.map(square => {
                if(square.squareId === examination3 - 18 * i) {
                    listC.push(square.playerColor)
                }
            })
        }
        ChooseWinner(listC)

        // 下 -> 上線
        for (let i = 0; i < 19; i++) {
            this.state.squares.map(square => {
                if(square.squareId === examination4 -19 * i) {
                    listD.push(square.playerColor)
                }
            })
        }
        ChooseWinner(listD)
    }
    
    render() {
        const currentPlayer = this.state.isBlack
        const squares = this.state.squares
        return (
            <div className="board"> 
                {squares.map(square => ( 
                    <div className="square" 
                        id={square.squareId} 
                        onClick={this.handleClick.bind(this,square.squareId, currentPlayer)}>
                        <div className="x-line"></div>
                        <div className="y-line"></div>
                        <div className="piece-preview"></div> 
                        <div className={square.playerColor}></div>
                    </div>
                ))}
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextIsBlack: true, // 單純用來判斷輪到誰
            gameRound : 0 // 單純用來計算回合
        }
    }

    handleRound() {
        const {nextIsBlack, gameRound} = this.state
        this.setState({
            nextIsBlack: !nextIsBlack,
            gameRound : gameRound + 1
        }) 
    }

    render() {
        const {nextIsBlack, gameRound} = this.state
        return (
            <div>
                <div className="banner">第 {gameRound} 回合，輪到{nextIsBlack ? '黑子' : '白子'}</div>
                <Board addRound={this.handleRound.bind(this)} />
            </div>
        )
    }
}

export default App