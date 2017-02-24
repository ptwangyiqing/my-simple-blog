/**
 * Created by Pt on 2017/1/28.
 */

/*
    header部分
*/
$(function () {
    $("#headerlist li:first").click(function () {
        $("html,body").animate({scrollTop:$("#introduce").offset().top},1000)
    })
    $("#headerlist li:eq(1)").click(function () {
        $("html,body").animate({scrollTop:$("#cleanser").offset().top},1000)
    })
    $("#headerlist li:eq(2)").click(function () {
        $("html,body").animate({scrollTop:$("#toner").offset().top},1000)
    })
    $("#headerlist li:eq(3)").click(function () {
        $("html,body").animate({scrollTop:$("#moisturizer").offset().top},1000)
    })
    $("#headerlist li:last").click(function () {
        $("html,body").animate({scrollTop:$("#other").offset().top},1000)
    })

    $("#header img").click(function () {
        $("html,body").animate({scrollTop:$("#introduce").offset().top},1000)
    })


    /*header背景色变化以及强调模块移动变色*/
    var cleanser_heigth = $("#cleanser").offset().top;
    var toner_heigth = $("#toner").offset().top;
    var moisturizer_heigth = $("#moisturizer").offset().top;
    var other_heigth = $("#other").offset().top;
    $(window).scroll(function() {
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop < cleanser_heigth) {
            $("#header").css("background","#334960");
            $("button").css("background","#334960");
            $("#header li strong").css({"top":"-80px","background-color":"#3f9fc9"});
            $("#header li strong:first").css("top",0);
        }else if(this_scrollTop >= cleanser_heigth && this_scrollTop < toner_heigth) {
            $("#header").css("background","#F17C72");
            $("button").css("background","#F17C72");
            $("#header li strong").css({"top":"-80px","background-color":"#e6655e"});
            $("#header li strong:eq(1)").css("top",0);
        }else if(this_scrollTop >= toner_heigth && this_scrollTop < moisturizer_heigth) {
            $("#header").css("background","#32AC97");
            $("button").css("background","#32AC97");
            $("#header li strong").css({"top":"-80px","background-color":"#46dcc7"});
            $("#header li strong:eq(2)").css("top",0);
        }else if(this_scrollTop >= moisturizer_heigth && this_scrollTop < other_heigth) {
            $("#header").css("background","#7F4C76");
            $("button").css("background","#7F4C76");
            $("#header li strong").css({"top":"-80px","background-color":"#b288ab"});
            $("#header li strong:eq(3)").css("top",0);
        }else if( this_scrollTop >= other_heigth) {
            $("#header").css("background","#3F9FC9");
            $("button").css("background","#3F9FC9");
            $("#header li strong").css({"top":"-80px","background-color":"#37637f"});
            $("#header li strong:last").css("top",0);
        }

    })


    /*a链接强调标志*/
    $("#header li").hover(
        function () {
            $(this).children("strong").css("top", 0);
        },
        function () {
            $(this).children("strong").css("top", -80);
        }
    )


})




/*
    introduce部分
*/

$(document).ready(function () {
    $("#details").innerfade({
        animationtype: "fade",
        speed: 750,
        timeout: 4000,
        type: "sequence",
        containerheight: "1em"
    }); 
})


/*侧栏部分*/
$(function () {
    var sidebar = $("#sidebar");
    var mask = $(".mask");
    var button = $("button");
    button.click(function () {
        mask.fadeIn();
        sidebar.css("top",0);
    })
    mask.click(function () {
        mask.fadeOut();
        sidebar.css("top",-sidebar.height());
    })

    $("#sidebar li:first").click(function () {
        mask.fadeOut();
        sidebar.css("top",-sidebar.height());
        $("html,body").animate({scrollTop:$("#introduce").offset().top},1000)
    })
    $("#sidebar li:eq(1)").click(function () {
        mask.fadeOut();
        sidebar.css("top",-sidebar.height());
        $("html,body").animate({scrollTop:$("#cleanser").offset().top},1000)
    })
    $("#sidebar li:eq(2)").click(function () {
        mask.fadeOut();
        sidebar.css("top",-sidebar.height());
        $("html,body").animate({scrollTop:$("#toner").offset().top},1000)
    })
    $("#sidebar li:eq(3)").click(function () {
        mask.fadeOut();
        sidebar.css("top",-sidebar.height());
        $("html,body").animate({scrollTop:$("#moisturizer").offset().top},1000)
    })
    $("#sidebar li:last").click(function () {
        mask.fadeOut();
        sidebar.css("top",-sidebar.height());
        $("html,body").animate({scrollTop:$("#other").offset().top},1000)
    })





})


/*百度提交*/
$(function () {
    (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();

    console.log("啊啊啊，马上要大四毕业了，求个前端实习工作，邮箱ptwangyiqing@outlook.com求哥哥姐姐联系我撒~")
})
