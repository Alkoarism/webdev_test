//-------------------------------------Page Constants--------------------------
const mainSection = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

//Real height and width values account for main tag border and margin
const REAL_WIDTH = mainSection.offsetWidth - (2 * 0.01 * mainSection.offsetWidth);
const REAL_HEIGHT = mainSection.offsetHeight - (2 * 0.03 * mainSection.offsetHeight);
//-------------------------------------Page Functions--------------------------

//-------------------------------------Page Control----------------------------
gameInit(REAL_WIDTH, REAL_HEIGHT);