const guessInput = document.getElementById("guess-input"); //ユーザの予測フィールドを取得
const guessButton = document.getElementById("guess-button"); //ユーザの予測した値を送信するボタンを取得
const guessHistory = document.getElementById("guess-history"); //ユーザの過去に予測した値を表示
const hintMessage = document.getElementById("hint-message"); //ヒントを表示するフィールドを取得
const resetButton = document.getElementById("reset-button"); //最初に戻るボタンの取得

const maxRange = 100 //予測する値の範囲
let targetNumber = getRandomInt(maxRange); //予測したい値をランダムで生成

// 目標値の決定
function getRandomInt(max) {
    // 1 ~ 100の値をランダムで生成
    return Math.floor(Math.random() * max)+1;
}

// 入力値が正しいかの確認
function isValidInput(userInputValue, maxRange) {
    // 空文字の入力を確認
    if (userInputValue === "") {
        alert("Please enter an integer");
        return ;
    }
    // 小数点を含むかの確認
    if (userInputValue.includes(".")) {
        alert(("Please enter an integer"));
        return ;
    }
    // 入力値が指定範囲内化の確認
    if ((userInputValue > maxRange) || (userInputValue < 0)) {
        alert("your number is out of range");
        return ;
    }
    return true;
}

function addHistory(userInputValue) {
    if (guessHistory.innerText === "") {
        guessHistory.innerText = userInputValue;
    } else {
        guessHistory.innerText = guessHistory.innerText + ", " + String(userInputValue);
    }
    guessInput.value = ""
}

// guessボタンを押した時の操作
guessButton.addEventListener("click", function() {
    if (isValidInput(guessInput.value, maxRange)) {
        const userGuessValue = Number(guessInput.value);
        if (userGuessValue > targetNumber) {
            addHistory(userGuessValue);
            hintMessage.innerText = "あなたの回答は大きいです";
        } else if (userGuessValue < targetNumber) {
            addHistory(userGuessValue);
            hintMessage.innerText = "あなたの回答は小さいです";
        }
        else {
            hintMessage.innerText = "おめでとう、正解です！";
            guessInput.readOnly = true; //入力をできないようにする
        }
    }
})
// resetボタンの操作
resetButton.addEventListener("click", function() {
    hintMessage.innerText = "";
    guessHistory.innerText = "";
    // 入力を可能にする
    guessInput.value = "";
    guessInput.readOnly = false;
    targetNumber = getRandomInt(maxRange); //予測したい値をランダムで生成
})
