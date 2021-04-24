export default () => {  
    var faPassWord = document.querySelectorAll('input[type="password"]');

    if(faPassWord[0]) {
        for (var i = 0; i < faPassWord.length; i ++) {
            if(faPassWord[i] && faPassWord[i].type === "password") {
                alert("パスワード項目が" + faPassWord.length + "個あります。");
                break;
            }
        }
    } else {
        alert("パスワード項目なし");
    }
}