$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        afterLoad: function(anchorLink, index) {
            var page = '.page' + index;
            $(page).find('.animateItem').trigger('onLoad');
        },
        onLeave: function(index, nextIndex, direction) {
            var page = '.page' + index;
            $(page).find('.animateItem').trigger('onLeave');
        }
    });

    // 添加动画公共函数
    function doAnimate(obj, newCss, oldCss, delayTime) {
        obj.on('onLoad', function() {
                setTimeout(function() {
                    obj.css(newCss);
                }, delayTime);
            })
            .on('onLeave', function() {
                setTimeout(function() {
                    obj.css(oldCss);
                }, delayTime);
            });
    }
    //抖动函数
    //obj-对象,attr-抖动方向(left/top),local-初始方向位置；
    function shake(obj, attr, local, endFn) {
        obj.style[attr] = local + 'px';
        var pos = parseInt(getStyle(obj, attr));
        // 20, -20, 18, -18 ..... 0
        var arr = []; 
        var num = 0;
        var shakeTimer = null;
        for (var i = 10; i > 0; i -= 2) {
            arr.push(i, -i);
        }
        arr.push(0);
        clearInterval(obj.shake);
        obj.shake = setInterval(function() {
            obj.style[attr] = pos + arr[num] + 'px';
            num++;
            if (num === arr.length) {
                clearInterval(obj.shake);
                endFn && endFn();
            }
        }, 50);
    }

    // 返回输入对象的当前计算属性值
    // obj-需求对象，attr-属性值；
    // ie下getStyle对象需求对象必须为已设定的值，不要用默认的设定值，不然很有可能出现返回值同其他浏览器不同的情况；
    function getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    }

    // page1相关动画：
    (function() {
        var page1 = $('.page1');
        var avatar = page1.find('.avatar');
        var divide1 = page1.find('.divide');
        var slogan = page1.find('.slogan');
        var text = page1.find('.text p');

        doAnimate(avatar, {
            top: '20%',
            opacity: 1
        }, {
            top: '40%',
            opacity: 0
        }, 0);
        doAnimate(divide1, {
            left: 0,
            width: '100%'
        }, {
            left: '50%',
            width: 0
        }, 300);
        doAnimate(slogan, {
            opacity: 1
        }, {
            opacity: 0
        }, 600);
        text.each(function(index, elem) {
            doAnimate($(elem), {
                opacity: 1,
                transform: 'translate3d(0,0,0)'
            }, {
                opacity: 0,
                transform: 'translate3d(0,150px,0)'
            }, 600 + 300 * index);
        });
    })();

    // page2相关动画
    (function() {
        var page2 = $('.page2');
        var divide2 = page2.find('.divide');
        var personDec = page2.find('.personDec');
        var desText = page2.find('.desText p');

        doAnimate(divide2, {
            left: 0,
            width: '100%'
        }, {
            left: '50%',
            width: 0
        }, 0);
        doAnimate(personDec, {
            opacity: 1
        }, {
            opacity: 0
        }, 300);
        desText.each(function(index, elem) {
            doAnimate($(elem), {
                opacity: 1,
                transform: 'translate3d(0,0,0)'
            }, {
                opacity: 0,
                transform: 'translate3d(150px,0,0)'
            }, 600 + 300 * index);
        });
    })();

    // page3相关动画
    (function() {
        var page3 = $('.page3');
        var divide3 = page3.find('.divide');
        var skills = page3.find('.skills');
        var skillItem = skills.find('img');
        var skillDesc = page3.find('.skillDesc p');

        skillItem.each(function(index, elem) {
            elem.addEventListener('mouseenter', function() {
                shake(this, 'left', '30');
            })
        });

        doAnimate(divide3, {
            left: 0,
            width: '100%'
        }, {
            left: '50%',
            width: 0
        }, 0);
        doAnimate(skills, {
            opacity: 1
        }, {
            opacity: 0
        }, 300);
        skillDesc.each(function(index, elem) {
            doAnimate($(elem), {
                opacity: 1,
                transform: 'rotate(0)'
            }, {
                opacity: 0,
                transform: 'rotate(-90deg)'
            }, 600 + index * 300);
        });
    })();

    // page4相关动画
    (function() {
        var page4 = $('.page4');
        var divide4 = page4.find('.divide');
        var demoList = page4.find('.demoList');
        var blog = page4.find('.blog');

        doAnimate(divide4, {
            left: 0,
            width: '100%'
        }, {
            left: '50%',
            width: 0
        }, 0);
        doAnimate(demoList, {
            transform: 'scale(1,1)',
        }, {
            transform: 'scale(0,0)'
        }, 300);
        doAnimate(blog, {
            opacity: 1
        }, {
            opacity: 0
        }, 1300);
    })();

    // page5相关动画
    (function() {
        var page5 = $('.page5');
        var divide5 = page5.find('.divide');
        var expText = page5.find('.expText');

        doAnimate(divide5, {
            left: 0,
            width: '100%'
        }, {
            left: '50%',
            width: 0
        }, 0);
        doAnimate(expText, {
            opacity: 1,
            transform: 'rotateY(0)'
        }, {
            opacity: 0,
            transform: 'rotateY(180deg)'
        }, 300);
    })();

    // page6相关动画
    (function() {
        var page6 = $('.page6');
        var divide6 = page6.find('.divide');
        var conection = page6.find('.Conection p');
        var prop = page6.find('.prop');
        var propData = '带上我，一起看更广阔的世界吧~';
        //记录时间线的延迟情况
        var timeDelay = 0; 
        var bkTop = page6.find('.bkTop');

        doAnimate(divide6, {
            left: 0,
            width: '100%'
        }, {
            left: '50%',
            width: 0
        }, 0);
        conection.each(function(index, elem) {
            doAnimate($(elem), {
                opacity: 1,
                top: 0
            }, {
                opacity: 0,
                top: '100px'
            }, 300 + 300 * index);
            timeDelay = 300 + 300 * index;
        });
        // prop字显示
        var tempArr = propData.split('');
        propData = '';
        $.each(tempArr, function(index, value) {
            propData += '<span class="animateItem">' + value + '</span>';
        });
        prop.html(propData);
        var propSpan = prop.find('span');

        propSpan.each(function(index, elem) {
            doAnimate($(elem), { opacity: 1 }, { opacity: 0 }, timeDelay + 70 * index);
        });
        timeDelay = timeDelay + 70 * (propSpan.length + 1);
        doAnimate(bkTop, { opacity: 1 }, { opacity: 0 }, timeDelay);
    })();

    // init
    $('.page1').find('.animateItem').trigger('onLoad');
    $.fn.fullpage.moveTo(1);
});
