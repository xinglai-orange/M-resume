function play_music(){
    if ($('#mc_play').hasClass('on')){
        $('#mc_play audio').get(0).pause();
        $('#mc_play').attr('class','stop');
    }else{
        $('#mc_play audio').get(0).play();
        $('#mc_play').attr('class','on');
    }
    $('#music_play_filter').hide();
    event.stopPropagation(); //��ֹð��
}
function just_play(id){
    $('#mc_play audio').get(0).play();
    $('#mc_play').attr('class','on');
    if (typeof(id)!='undefined'){
        $('#music_play_filter').hide();
    }
    event.stopPropagation(); //��ֹð��
}
function is_weixn(){
    return false;
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}

window.onload=function(){
    if (!is_weixn()){
        just_play();
    }
}