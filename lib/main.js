let [Cc, Ci] = require("chrome");
let windowUtils = require("window-utils");

var tracker = new windowUtils.WindowTracker({
  onTrack: function(window) {
    window.messageManager.loadFrameScript(require("self").data.url("foo.js"), true);

    window.messageManager.addMessageListener("ThisHappened", function() {
      console.log("OMG great");
    });

    let Browser = window.Browser;
    let tab = Browser.addTab('http://www.google.com/');
    Browser.selectedTab = tab;
  },

  onUntrack: function() {}
});
