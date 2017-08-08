/**
 * Created by Administrator on 2017/8/8.
 * zhanglei
 */
/**
 * 检测jq是否加载
 */
function checkjquery() {
    if (typeof jQuery=='undefined'){
        console.log('jq 未加载');
        return false;
    }else {
        console.log('jq 已经加载');
        return false;
    }
}
//调用方法
//checkjquery();


/**
 * 返回顶部
 */
$('.container').on('click','back-to-top',function (e) {
    e.preventDefault();
    $('html body').animate({scrollTop:0},800);
})

//调用方法
//<div class="container">
//<a href="#" class="back-to-top">返回顶部</a>
//</div>

/**
 * 图片预加载
 */
$.preloadImages=function () {
  for(var i=0; i<arguments.length;i++){
      $('<img>').attr('scr',arguments[i]);
  }
};

//调用方法
//$.preloadImages('scr1','src2');


/**
 * 判断图片是否加载完成
 */
$('img').load(function () {
    console.log('图片已经加载完成');
   return true;
});


/**
 * 自动修复失效的图片
 * 将坏图的地址替换为默认的   添加class样式
 */
$('img').on('error',function () {
   if(!(this).hasClass('broken-image')){
       $(this).prop('src', 'img/broken.png').addClass('broken-image');
   };

   //将发生错误的图片进行隐藏
   // $(this).hide();

});




/**
 * 鼠标悬停切换class
 */
$('.btn').hover(function () {
    $(this).toggleClass('hover');
});


/**
 * 阻止连接加载
 * 需要阻止a标签的跳转 只需添加no-link
 */
$('a.no-link').click(function (e) {
   e.preventDefault();
});


/**
 * 淡出效果
 */

$('.btn').click(function () {
    $('.element').fadeToggle('slow');
});


/**
 *切换
 */
$('.btn').click(function () {
    $('.element').slideToggle('slow');
});





