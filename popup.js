chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.executeScript(tab.id, { code: "document.documentElement.outerHTML;" }, function(html) {
        var pageIdRegex = /profile_delegate_page_id.+?([0-9]+)/;
        var selectedPageIdRegex = /selected_single_page_id.+?([0-9]+)/;
        var pageIdRegex2 = /page_id.+?([0-9]+)/;
        var match = html[0].match(pageIdRegex) || html[0].match(selectedPageIdRegex) || html[0].match(pageIdRegex2);
        var content = document.getElementById("content");
        if (match !== null) {
            content.innerHTML = "Page ID: " + match[1];
        } else {
            content.innerHTML = "Unable to find Facebook page ID";
        }
    });
});
