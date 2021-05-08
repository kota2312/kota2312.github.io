/* 20210508 */
//全体の数取得
var faCard = document.getElementsByClassName("list-card-details js-card-details");

//【】で囲まれている要素をカウント
var count = 0;
for (var i = 0; i < faCard.length; i ++) {
    if(faCard[i].classList.contains('card-label card-label-purple mod-card-front')) {//【】で囲まれている要素をカウントしたものから紫のラベルを除外
        continue;
    }
    if(faCard[i].textContent.match(/【/)) {
        count++;
        console.log(count);
    }
}

//Kotaの案件数
var kotaCard = document.querySelectorAll(".js-list.list-wrapper:nth-of-type(2) > .list.js-list-content > .list-header.js-list-header.u-clearfix.is-menu-shown + .list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards.js-sortable.ui-sortable > a > .list-card-details.js-card-details");

//【】で囲まれている要素をカウント
var tkCount = 0;
for(var j = 0; j < kotaCard.length; j ++) {
    if(kotaCard[j].classList.contains('card-label card-label-purple mod-card-front')) {//【】で囲まれている要素をカウントしたものから紫のラベルを除外
        continue;
    }
    if(kotaCard[j].textContent.match(/【/)) {
        tkCount++;
        console.log(tkCount);
    }
}

/* 計算式 全体から自分の行った案件の割合を出す。*/
var fakeisan = tkCount / count * 100;
alert(Math.floor(fakeisan) + "%");
