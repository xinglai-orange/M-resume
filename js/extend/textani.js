
    function Dothis(){};
    Dothis.prototype.work=function(){
        var textname1 = "#P5text1",textname2 = "#P5text2",textname3 = "#P5text3", setText1 = {
            animation:1,
            animationType: "in",
            speed: 1000, 
            sequenceDelay: 100, 
            startDelay: 500, 
            offsetX: 100,
            offsetY: 50,
            restoreHTML: false
        },setText2 = {
            animation:2, 
            animationType: "in",
            speed: 1000, 
            sequenceDelay: 100, 
            startDelay: 1000, 
            offsetX: 100,
            offsetY: 50,
            restoreHTML: false
        },setText3 = {
            animation:10, 
            animationType: "in", 
            speed: 1000, 
            sequenceDelay: 100, 
            startDelay: 3000, 
            offsetX: 200,
            offsetY: 100,
            restoreHTML: false
        }
        jQuery.cjTextFx(setText1);
        jQuery.cjTextFx.animate(textname1);
        jQuery.cjTextFx(setText2);
        jQuery.cjTextFx.animate(textname2);
        jQuery.cjTextFx(setText3);
        jQuery.cjTextFx.animate(textname3);
    }
    Dothis.prototype.out=function(){
        var textname1 = "#P5text1",textname2 = "#P5text2",textname3 = "#P5text3", setText1 = {
            animation:1,
            animationType: "out",
            speed: 1000, 
            restoreHTML: false
        },setText2 = {
            animation:2, 
            animationType: "out",
            speed: 1000, 
            restoreHTML: false
        },setText3 = {
            animation:10, 
            animationType: "out", 
            speed: 1000, 
            restoreHTML: false
        }
        jQuery.cjTextFx(setText1);
        jQuery.cjTextFx.animate(textname1);
        jQuery.cjTextFx(setText2);
        jQuery.cjTextFx.animate(textname2);
        jQuery.cjTextFx(setText3);
        jQuery.cjTextFx.animate(textname3);
    }
    
