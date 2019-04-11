let page = document.getElementById('buttonDiv');

const colorList = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(colorList){
    for(let color of colorList){
        let button = document.createElement('button');
        button.style.backgroundColor = color;
        button.addEventListener('click', () => {
            chrome.storage.sync.set({color: color}, function(){
                console.log('color is ' + color);
            });
        });
        page.appendChild(button);
    }
}

constructOptions(colorList);