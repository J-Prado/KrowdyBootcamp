import {validate} from "schm";
import {SecureChannelsEnum as secureChannels} from './constant.js';
import {deleteAndCreateTab, inyectScrapCandidates,inyectScript} from './utils/chrome.js'




chrome.action.onClicked.addListener((tab)=>{
  console.log("I'm the service worker.");
  inyectScrapCandidates(tab.id)




  // const options = {
  //   target: { tabId: tab.id },
  //   files: ['scripts/scrapper.js']
  // }
  // chrome.scripting.executeScript(options)
})