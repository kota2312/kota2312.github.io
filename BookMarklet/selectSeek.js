export default () => {  
    var faSelect = document.getElementsByTagName('select');
    if(faSelect[0]) {
        for (var i = 0; i < faSelect.length; i ++) {
            if(faSelect[i]) {
                alert("プルダウンあり。");
                break;
            }
        }
    } else {
        alert("プルダウンなし");
    } 
}