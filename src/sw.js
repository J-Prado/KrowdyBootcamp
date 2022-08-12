import {validate} from "schm";

chrome.action.onClicked.addListener((tab)=>{
  console.log('Hola')
  const options = {
    target: { tabId: tab.id },
    files: ['scripts/scrapper.js']
  }

  chrome.scripting.executeScript(options)
})