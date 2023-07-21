$(document).ready(function(){

    // 헤더 메뉴 마우스 호버 이벤트
    $('#o1').mouseenter(function(){
        $(this).addClass('active');
        $('#o2,#o3,#o5').removeClass('active');
    })
    $('#o2').mouseenter(function(){
        $(this).addClass('active');
        $('#o1,#o3,#o5').removeClass('active');
    })
    $('#o3').mouseenter(function(){
        $(this).addClass('active');
        $('#o1,#o2,#o5').removeClass('active');
    })
    $('#o5').mouseenter(function(){
        $(this).addClass('active');
        $('#o1,#o2,#o3').removeClass('active');
    })

    // 헤더 메뉴 클릭 시 스크롤 이동
    $(function () {
        $('.h-menu li').click(function (){
            $('html, body').animate({scrollTop: $(this.hash).offset.top}, 500);
        });
    });

    // 탑버튼
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        console.log(sct);

        if($(this).scrollTop() >= 600 ){
            $('.top-btn').fadeIn();
        }else{
            $('.top-btn').fadeOut();
        }
        });

    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });

    // 2페이지 .name-birth 타이핑 이벤트
    // new TypeIt("#n-b", {
    //     strings: ["Song Sue Hyun", "1994.08.15"],
    //     speed: 150,
    //     waitUntilVisible: true,
    //   }).go();
    


    // 3페이지 탭 기능
    const tabItem = document.querySelectorAll('.tab_item')
    const tabInner = document.querySelectorAll('.tab_inner')
    
    tabItem.forEach((tab, idx)=> {
        tab.addEventListener('click', function(){
            tabInner.forEach((inner)=> {
                inner.classList.remove('active')
            })
    
            tabItem.forEach((item)=> {
                item.classList.remove('active')
            })
    
            tabItem[idx].classList.add('active')
            tabInner[idx].classList.add('active')
        })
    })

    // 4페이지 마우스 호버 이벤트
    $('#page4 #one').mouseenter(function(){
        $('#two,#three').addClass('active');
    })
    $('#page4 #two').mouseenter(function(){
        $('#one,#three').addClass('active');
    })
    $('#page4 #three').mouseenter(function(){
        $('#one,#two').addClass('active');
    })

    $('#page4 #one').mouseleave(function(){
        $('#two,#three').removeClass('active');
    })
    $('#page4 #two').mouseleave(function(){
        $('#one,#three').removeClass('active');
    })
    $('#page4 #three').mouseleave(function(){
        $('#one,#two').removeClass('active');
    })
    
})