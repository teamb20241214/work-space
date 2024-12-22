// おみくじの表示内容のObjectのリスト
const result_list = [
    {
        result: '小吉', src: 'image/shokichi.png', comment: '開発の要件定義が綿飴のようにふわっふわです。手遅れにならないうちに手を打っておくのが吉。',
        language: 'C#', database: 'PostgreSQL', editor: 'Atom'
    },
    {
        result: '中吉', src: 'image/chukichi.png', comment: 'リリースしたソフトウェアに深刻なバグが見つかりますが、口八丁な営業のお陰で事無きを得るでしょう。ただし、後日それを理由に無茶振りされるおそれがあるので油断は禁物です。',
        language: 'C++', database: 'SQL Server', editor: 'Visual Studio Code'
    },
    {
        result: '末吉', src: 'image/suekichi.png', comment: 'リリース直前に致命的なバグが見つかるでしょう。お泊まりの準備をして出社するのが吉。',
        language: 'Ruby', database: 'PostgreSQL', editor: 'Emacs'
    },
    {
        result: '大吉', src: 'image/daikichi.png', comment: 'リリースしたソフトウェアにバグが見つかりますが、再現性が低いためユーザーも上司も誰ひとり気付かないでしょう。見なかったことにするのが吉。',
        language: 'Java', database: 'DB2', editor: 'Atom'
    },
    {
        result: '吉', src: 'image/kichi.png', comment: 'リリースしたソフトウェアにバグが見つかりますが、幸いユーザー企業のお偉方は極度のITオンチです。仕様で押し通すのが吉。',
        language: 'JavaScript', database: 'PostgreSQL', editor: 'nano'
    },
    {
        result: '凶', src: 'image/kyo.png', comment: '前任者から引き継いだコードがスパゲティ状態です。残念ながらあなたの力ではどうにもならないので、せめて自分はこんなコードを書かないように今後の糧にしましょう。',
        language: 'Python', database: 'SQL Server', editor: 'Atom'
    },

]
//index.html内のElement
const btn = document.querySelector('#draw-omikuji');//top-pageのボタンのElement
const btn_again = document.querySelector('#close-omikuji');//おみくじを閉じるのボタンのElement
const div_top = document.querySelector('#outter-top');//top-pageの表示内容格納用divのElement
const div_omikuji = document.querySelector('#omikuji-page');//omikuji-pageの表示内容格納用divのElement
const img_omikuji = document.querySelector('#image');//omikuji-pageのimgのElement
const result_omikuji = document.querySelector('#result');//omikuji-pageのおみくじ結果hタグのElement
const comment_omikuji = document.querySelector('#comment');//omikuji-pageのコメント用hタグのElement
const language_omikuji = document.querySelector('#language');//omikuji-pageのプログラミング言語hタグのElement
const database_omikuji = document.querySelector('#database');//omikuji-pageのデータベースhタグのElement
const editor_omikuji = document.querySelector('#editor');//omikuji-pageのエディタ用hタグのElement

//top-pageのボタンへEvent追加
btn.addEventListener('click', function () {
    //2つの表示用divのクラスをtoggleしてCSSのdisplay　propertyを切り替えている
    div_top.classList.toggle('top_hide');
    div_omikuji.classList.toggle('omikuji-page');
    //0~result_listのlength-1の範囲のランダムな整数をnumに格納
    let num = random_int();
    //各エレメントのattributeを設定
    img_omikuji.src = result_list[num].src;
    result_omikuji.innerText = result_list[num].result;
    comment_omikuji.innerText = result_list[num].comment;
    language_omikuji.innerText = result_list[num].language;
    database_omikuji.innerText = result_list[num].database;
    editor_omikuji.innerText = result_list[num].editor;
})

//omikuji-pageのボタンへEvent追加
btn_again.addEventListener('click', function () {
    div_top.classList.toggle('top_hide');
    div_omikuji.classList.toggle('omikuji-page');
})

//0~result_listのlength-1のランダムな整数を作る関数
function random_int() {
    const random_num = Math.floor(Math.random() * result_list.length);
    return random_num;
}