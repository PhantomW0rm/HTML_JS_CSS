`use strict`

// IMPORT STATEMENT
import * as DOM from '/Day3_Javascript/MyDOM.js';

// DOM 

// Document Object Model

// PAGE
//  HTML
//    HEAD
//      METADATA
//    BODY
//      HEADER
//      PARAGRAPH

// CREATING A DOM FILE
// and exporting it!

// const pageButton = document.getElementById(`but`);

let str = "hello";

let changeText = str => DOM.pageParagraph.innerHTML = `${str}`;

DOM.pageButton.onclick = () => addToList(DOM.pageInput.value); //changeText(DOM.pageInput.value);

function addToList(str) {

  let child = document.createElement(`li`);
  child.innerHTML = str;
  DOM.pageList.appendChild(child);

}
