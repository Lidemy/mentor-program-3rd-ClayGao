``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
0. 電腦將函式 isValid 設定進記憶體
1. 執行第 11 行，呼叫函式 isValid，代入參數 [3, 5, 8, 13, 22, 35]
2. 執行第 2 行，宣告變數 i = 0，設定執行條件 i < arr.length，判斷執行條件 i < arr.length 為 true
3. 執行第 3 行，判斷 arr[0] > 0 為 false ( 若為 true，則回傳字串 'invalid' )
4. 執行第 2 行，i + 1，判斷執行條件 i < arr.length 為 true
5. 執行第 3 行，判斷 arr[1] > 0 為 false
6. 執行第 2 行，i + 1，判斷執行條件 i < arr.length 為 true
7. 執行第 3 行，判斷 arr[2] > 0 為 false
8. 執行第 2 行，i + 1，判斷執行條件 i < arr.length 為 true
9. 執行第 3 行，判斷 arr[3] > 0 為 false
10. 執行第 2 行，i + 1，判斷執行條件 i < arr.length 為 true
11. 執行第 3 行，判斷 arr[4] > 0 為 false
12. 執行第 2 行，i + 1，判斷執行條件 i < arr.length 為 true
13. 執行第 3 行，判斷 arr[5] > 0 為 false
14. 執行第 2 行，i + 1，，判斷執行條件 i < arr.length 為 false，終止 false
15. 執行第 5 行，宣告變數 i = 2，設定執行條件 i < arr.length，判斷執行條件 i < arr.length 為 true
16. 執行第 6 行，判斷 arr[2] !== arr[1] + arr[0] 為 false ( 若為 true，則回傳字串 'invalid' )
17. 執行第 5 行，i + 1，判斷執行條件 i < arr.length 為 true
18. 執行第 6 行，判斷 arr[3] !== arr[2] + arr[1] 為 false
19. 執行第 5 行，i + 1，判斷執行條件 i < arr.length 為 true
20. 執行第 6 行，判斷 arr[4] !== arr[3] + arr[2] 為 true，回傳字串 'invalid'
21. 終止函式 isValid 運算