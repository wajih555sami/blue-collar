var mobile_bar_btn = document.getElementById('mobile_bar_btn');
var body_nav = document.getElementById('body_nav');

mobile_bar_btn.addEventListener('click', function(){
    body_nav.classList.toggle('open');
});