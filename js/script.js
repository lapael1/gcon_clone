$(document).ready(function(){
    // 언어 토글
  $(".lang > a").on("click", function (e) {
    e.preventDefault()
    $(".country").toggle()
  });
})