
//------밑에 코드 메뉴 토글 동작코드

 var menuModalList = document.querySelector(".menu-modal-list");
 var menuModal = document.querySelector(".menu-modal");
 var menuBtn = document.querySelector(".menu-item");



 menuBtn.addEventListener('click',function(e){
   menuModal.style.height = "calc(100vh - 10rem)"
 },false);

 menuModal.addEventListener('click',function(e){
   if(e.target.className == "menu-modal")
     menuModal.style.height = "0px"
 },true)
