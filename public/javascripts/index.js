/**
 * Created by 724291943 on 2017/3/15.
 */
//要等vue渲染完页面才使用jquery处理
$(function () {


    var index = {

        init: function () {
            this.vueInit()
        },

        vueInit:function () {
            var that = this
            $.ajax({
                url:"/data",
                success:function (data) {
                    var app = new Vue({
                        el: '#fullpage',
                        data: data
                    })

                },
                complete: function () {
                    that.fullpageInit()
                }
            })

        },

        fullpageInit: function(){

            $("#fullpage").fullpage({
                navigation: true,
                anchors: ['1stPage', '2ndPage','3rdPage','4thPage','5thPage'],
                menu: '#menu',
            })

        }



    }

    return index.init()

})
