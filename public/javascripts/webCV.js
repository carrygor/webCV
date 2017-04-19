/**
 * Created by 724291943 on 2017/3/15.
 */
//要等vue渲染完页面才使用jquery处理
$(function () {


    var index = {

        init: function () {
            this.vueInit()//vue页面渲染，插件应放在这里面
            this.saySomething()
        },

        saySomething: function () {
          console.log("本页面通过nodejs开发，由AJAX请求数据加载页面，vue渲染")
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
                fail: function (err) {
                    console.log(err)
                },
                complete: function () {
                    //加载插件
                    that.fullpageInit()
                    that.canvasInit()
                }
            })

        },

        fullpageInit: function(){

            var that = this
            $("#fullpage").fullpage({
                navigation: true,
                anchors: ['1stPage', '2ndPage','3rdPage','4thPage','5thPage'],
                menu: '#menu',
                navigationTooltips: ['首页', '个人资料','技能树','实习经历','项目经验'],
                afterLoad: function(anchorLink,index){
                    that.animate(anchorLink,index)
                },
            })

        },

        canvasInit: function(){

            var dots ={
                width: window.innerWidth,
                height: window.innerHeight,
                num: 150,
                min_radius: 2,
                range_radius: 3,
                color: "rgba(157,204,218,0.8)",
                speed: 2,
            },
                ctx = document.getElementById("canvas").getContext('2d'),
                dot_Arr = []
            
            function Dot() {
                this.x = Math.random()*dots.width
                this.y = Math.random()*dots.height

                this.moveX = (Math.random()-.5)*dots.speed
                this.moveY = (Math.random()-.5)*dots.speed

                this.radius = Math.random()*dots.min_radius+dots.range_radius

            }
            
            Dot.prototype = {
                
                draw:function () {
                    ctx.beginPath()
                    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2)
                    ctx.fill()
                },

                move:function () {

                    this.x += this.moveX
                    this.y += this.moveY
                    this.draw()

                }
                
            }
            
            function moveDots() {
                for(var i = 0; i < dots.num; i++){

                    var dot = dot_Arr[i]

                    if(dot.x < 0 || dot.x > dots.width){
                        dot.moveX = -dot.moveX
                    }
                    if(dot.y < 0 || dot.y > dots.height){
                        dot.moveY = -dot.moveY
                    }

                    dot.move()

                }
            }

            function animateDots() {

                ctx.clearRect(0,0,dots.width,dots.height)
                moveDots()

                requestAnimationFrame(animateDots);
            }

            function init() {
                var canvas = document.getElementById("canvas")
                canvas.width = dots.width
                canvas.height = dots.height
                ctx.fillStyle = dots.color
                for(var i = 0; i < dots.num; i++){
                    dot_Arr[i] = new Dot()
                    dot_Arr[i].draw()
                }

                requestAnimationFrame(animateDots);
            }
            
            init()
        },

        animate: function (anchor,index) {

            if(anchor == "3rdPage"){
                $(".progress-bar").each(function () {
                    var ability = $(this).attr('data-val')
                    $(this).css('width',ability)
                })
            }

            var time = 0

            $("[data-anchor='"+anchor+"']").find(".animate").each(function () {
                var $this = $(this)
                setTimeout(function () {
                    $this.addClass("fadeIn")
                },time)
                time += 200
            })
        }

    }

    return index.init()

})
