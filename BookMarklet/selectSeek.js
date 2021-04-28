export default () => {  
    var faSelect = document.getElementsByTagName('select');

    if(faSelect[0]) {
        for (var i = 0; i < faSelect.length; i ++) {
            if(faSelect[i]) {
                alert("name値：" + faSelect[i].name);
            }
        }
    } else {
        alert("プルダウンなし");
    }
}
