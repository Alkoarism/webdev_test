//-------------------------------------Page Constants--------------------------
const mainSection = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

const width = document.querySelector("#height");

//-------------------------------------Page Functions--------------------------
//Real height and width values account for main tag border and margin
const getRealWidth = () => {
    return mainSection.offsetWidth - (2 * 0.01 * mainSection.offsetWidth);
}

const getRealHeight = () => {
    return mainSection.offsetHeight - (2 * 0.03 * mainSection.offsetHeight);
}

const resizeObserver = new ResizeObserver((entry) => {
    resizeBoard(getRealWidth(), getRealHeight());
})
//-------------------------------------Page Control----------------------------
gameInit(getRealWidth(), getRealHeight());

resizeObserver.observe(mainSection);