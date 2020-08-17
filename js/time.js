function selectChkBox(frm) {

    var sum = 0;
    var count = frm.checkbox.length;
    for(var i=0; i < count; i++ ){
        if( frm.checkbox[i].checked == true ){
            sum += 1;
        }
        if (sum <= 6) {
            location.href="../result/noplan.html"
        } else if(sum <= 9){
            location.href="../result/ambulance.html"
        }
        else if(sum <= 12){
            location.href="../result/work.html"
        }
        else if(sum <= 15){
            location.href="../result/controller.html"
        }

    }
    // alert("선택되어진 체크박스의 갯수는 " + sum + "개입니다." );
}

