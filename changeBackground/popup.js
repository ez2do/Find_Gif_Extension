let changeColor = document.getElementById('changeColor');

//get color from storage.sync 
//(set to green before in background.js)
// data = {color: 'green'}
chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    //set value = green
    changeColor.setAttribute('value', data.color);
})

//add onclik event to the button
changeColor.onclick = function (e) {
    let color = e.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // add "activeTab" permission to allow tabs.executeScript
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
};