// スライダーロジック
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

// 次のスライドを表示
next.addEventListener('click', () => {
    index++;
    if (index >= slide.length) {
        index = 0; // 最後のスライドの次は最初に戻る
    }
    updateSlider();
});

// 前のスライドを表示
prev.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = slide.length - 1; // 最初のスライドの前は最後に戻る
    }
    updateSlider();
});

// スライダーを更新
function updateSlider() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

//自動スライド機能
const interval = setInterval(() => {
    index++;
    if (index >= slide.length) {
        index = 0; // 最後のスライドの次は最初に戻る
    }
    updateSlider()
}, 3000);