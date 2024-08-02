new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    // 위아래 스크롤
	scrollHorizontally: true,
    // 네비게이터를 보이고 숨김
    navigation: true,
    // 네비게이터 위치
    navigationPosition: 'right',
    // 하이퍼링크
    anchors:['num0','num1','num2','num3'],
});

let btn=document.querySelector(".btn_menu")
let nav=document.querySelector("nav")

let sw=true
btn.addEventListener("click",function(){
	if(sw==true){
		btn.classList.add("on")
		nav.classList.add("on")
		sw=false
	}else{
		btn.classList.remove("on")
		nav.classList.remove("on")
		sw=true
	}
})
