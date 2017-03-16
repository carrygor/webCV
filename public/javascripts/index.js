/**
 * Created by 724291943 on 2017/3/15.
 */
$(function () {

    var index = {

        init: function () {
            this.fullpageInit()
        },

        fullpageInit: function(){

            console.log("!")
            $("#fullpage").fullpage()

        }


    }

    return index.init({
        navigation: true,
        anchors: ['1stPage', '2ndPage','3rdPage','4thPage'],
        menu: '#menu'
    })

})
