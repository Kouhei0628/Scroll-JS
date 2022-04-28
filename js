//画面内にオブジェクトが出現した時の関数
const elementInView = (el) => {
//ウィンドウ上辺からオブジェクトまでの距離を算出
    const elementTop = el.getBoundingClientRect().top;
//ウィンドウ上辺からオブジェクトまでの距離がウィンドウの高さより小さかったらtrueを返す
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

//画面外にオブジェクトが外れた時の関数
const elementOutOfView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
//ウィンドウ上辺からオブジェクトまでの距離がウィンドウの高さより大きかったらtrueを返す
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};
//スクロールイベントを追加
const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};
//スクロールイベントを削除
const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    exampleElements.forEach((el) => {
        if (elementInView(el, 1.1)) {
            displayScrollElement(el);
        } else if (elementOutOfView(el)) {
            hideScrollElement(el);
        }
    });

}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});
