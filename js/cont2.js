$(document).ready(function(){
    var sliderimg = $(".slider-imgs");
        var slider = $(".slider");
        
        const si = $(".slider-imgs");
        const s = $(".slider");
        const lBtn = $(".l-btn-area");
        const rBtn = $(".r-btn-area");
        
        let slidercount = s.length;
        
        let sliderwidth = s.width();
        
        let sliderheight = s.height();
        
        let sliderTotal = slidercount*sliderwidth;
        
        setInterval(function(){
            sliderimg.animate({left:-sliderwidth},400,function(){
                $(".slider:first-child").appendTo(sliderimg);
                sliderimg.css({left:"0px"});
            });
        },5000);
        
        si.css({width:sliderTotal});
        $(".slider:first-child").prependTo(si);
        
        
        //text
        var textSlider = $(".text-slider");
        var texts = $(".text");
        
        const si2 = $(".text-slider");
        const s2 = $(".text");
        
        let textcount = s2.length;
        
        let textwidth = s2.width();
        
        let textheight = s2.height();
        
        let textTotal = textcount*textwidth;
        
        setInterval(function(){
            textSlider.animate({left:-textwidth},400,function(){
                $(".text:first-child").appendTo(textSlider);
                textSlider.css({left:"0px"});
            });
        },5000);
        
        si2.css({width:textTotal});
        $(".text:first-child").prependTo(si2);
        
        
        
        
        //btn
        function Btnprev(){
            si.animate({left: +sliderwidth},400,function(){
                $(".slider:last-child").prependTo(si);
                si.css("left","0px");
            });
            si2.animate({left: +textwidth},400,function(){
                $(".text:last-child").prependTo(si2);
                si2.css("left","0px");
            });
            
        }
        function Btnnext(){
            si.animate({left: -sliderwidth},400,function(){
                $(".slider:first-child").appendTo(si);
                si.css("left","0px");
            });
            si2.animate({left: -textwidth},400,function(){
                $(".text:first-child").appendTo(si2);
                si2.css("left","0px");
            });
        }
        
        function TBtnprev(){
            
            
        }
        lBtn.find(".prev").click(function(){
            Btnprev();
        });
        
        rBtn.find(".next").click(function(){
            Btnnext()
        });
    
    AOS.init();
});