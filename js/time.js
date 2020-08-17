function selectChkBox(frm) {

    var sum = 0;
    var count = frm.checkbox.length;
    for(var i=0; i < count; i++ ){
        if( frm.checkbox[i].checked == true ){
            sum += 1;
        }
        if (sum <= 6) {
            location.href="https://www.franklinplanner.co.kr/main/index.php"
        } else if(sum <= 9){
            location.href="https://www.franklinplanner.co.kr/goods/goods_list.php?cateCd=016"
        }
        else if(sum <= 12){
            location.href="https://www.franklinplanner.co.kr/goods/goods_list.php?cateCd=006"
        }
        else if(sum <= 15){
            location.href="https://www.franklinplanner.co.kr/main/html.php?htmid=service/offline.html"
        }

    }
    // alert("선택되어진 체크박스의 갯수는 " + sum + "개입니다." );
}

