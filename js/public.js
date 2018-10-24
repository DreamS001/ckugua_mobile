$(function(){
	function refreshRem(){
        var clientWidth = document.documentElement.clientWidth;
        var htmlDom = document.getElementsByTagName('html')[0];
        htmlDom.style.fontSize = clientWidth/10+'px';
    }
    refreshRem();
    window.addEventListener('resize',function(){
        refreshRem();
    },false)
})