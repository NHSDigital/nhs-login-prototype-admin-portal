// Add your custom Javascript here

function activateLoader(speed) {
    // console.log("activate")
    var progressbar = $('#progress_bar')
    var $ppc = $('.progress-pie-chart')
    $ppc.removeClass('gt-50')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate)
            // window.parent.document.location.href = "service-access-video-selfie"
            $('#continueButton').click()
            $("#scan-id-3").css("display", "none")
            $("#scan-id-5").css("display", "block")
            $("#scan-id-6").css("display", "none")
            // $("#scan-id-7").css("display", "block")

        }
    }
    var animate = setInterval(function() {
        loading()
    }, time)
}

function activateLoader2(speed) {
    // console.log("activate")
    var progressbar = $('#progress_bar')
    var $ppc = $('.progress-pie-chart')
    document.getElementById("spinner-status").innerHTML = "Please wait";
    $ppc.removeClass('gt-50')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate)
            $("#spinner-heading").css("display", "block")
            $("#scan-id-0").css("display", "block")
            $("#scan-id-3").css("display", "none")
            $("#scan-id-5").css("display", "none")
            $("#scan-id-6").css("display", "none")
            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 4000)
            setTimeout(function(){
                $('#continueButton').click()
            }, 5000)
        }
    }
    var animate = setInterval(function() {
        loading()
    }, time)
}

function activateLoader3(speed) {
    // console.log("activate")
    var progressbar = $('#progress_bar')
    var $ppc = $('.progress-pie-chart')
    document.getElementById("spinner-status").innerHTML = "Please wait";
    $ppc.removeClass('gt-50')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate)
            $("#spinner-heading").css("display", "block")
            $("#scan-id-0").css("display", "block")
            $("#scan-id-3").css("display", "none")
            $("#scan-id-5").css("display", "none")
            $("#scan-id-6").css("display", "none")
            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 1500)
            setTimeout(function(){
                $('#invalidErrorButton').click()
                console.log("js click")
            }, 1500)
        }
    }
    var animate = setInterval(function() {
        loading()
    }, time)
}

function activateLoader4(speed) {
    // console.log("activate")
    var progressbar = $('#progress_bar')
    var $ppc = $('.progress-pie-chart')
    document.getElementById("spinner-status").innerHTML = "Please wait";
    $ppc.removeClass('gt-50')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate)
            $("#spinner-heading").css("display", "block")
            $("#scan-id-0").css("display", "block")
            $("#scan-id-3").css("display", "none")
            $("#scan-id-5").css("display", "none")
            $("#scan-id-6").css("display", "none")
            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 1500)
            setTimeout(function(){
                $('#uploadErrorButton').click()
                console.log("js click")
            }, 1500)
        }
    }
    var animate = setInterval(function() {
        loading()
    }, time)
}

function activateLoader5(speed) {
    console.log("activate")
    var progressbar = $('#progress_bar')
    var $ppc = $('.progress-pie-chart')
    document.getElementById("progressbar-heading").innerHTML = "Uploading your video";
    document.getElementById("spinner-status").innerHTML = "Please wait";
    $ppc.removeClass('gt-50')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate)
            $("#spinner-heading").css("display", "block")
            $("#scan-id-0").css("display", "block")
            $("#scan-id-3").css("display", "none")
            $("#scan-id-5").css("display", "none")
            $("#scan-id-6").css("display", "none")
            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 4000)
            setTimeout(function(){
                $('#confirmButton').click()
            }, 5000)
        }
    }
    var animate = setInterval(function() {
        loading()
    }, time)
}

function reactivateLoader(speed) {
    // console.log("activate")
    var $ppc = $('.progress-pie-chart')
    $ppc.removeClass('gt-50')
    var progressbar = $('#progress_bar')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate2)
            $("#scan-id-3").css("display", "none")
            $("#scan-id-7").css("display", "block")
            // $("#scan-id-5").css("display", "block")
        }
    }
    var animate2 = setInterval(function() {
        loading()
    }, time)
}

function uploadLoader(speed) {
    var $ppc = $('.progress-pie-chart')
    $ppc.removeClass('gt-50')
    var progressbar = $('#progress_bar')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate2)
            // window.parent.document.location.href = "service-access-confirmation"
            // $('#confirmButton').click()
                $("#scan-id-3").css("display", "none")
                $("#scan-id-3").css("display", "none")
            $("#scan-id-7").css("display", "block")
            // $("#scan-id-5").css("display", "block")
        }
    }
    var animate2 = setInterval(function() {
        loading()
    }, time)
}

function uploadLoader2(speed) {
    var $ppc = $('.progress-pie-chart')
    $ppc.removeClass('gt-50')
    var progressbar = $('#progress_bar')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate2)
            $("#spinner-heading").css("display", "block")
            document.getElementById("spinner-status").innerHTML = "Checking";
            $("#scan-id-3").css("display", "none")
            $("#scan-id-0").css("display", "block")

            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 4000)
            setTimeout(function(){
                $('#confirmButton').click()
            }, 5000)
        }
    }
    var animate2 = setInterval(function() {
        loading()
    }, time)
}

function uploadLoader3(speed) {
    var $ppc = $('.progress-pie-chart')
    $ppc.removeClass('gt-50')
    var progressbar = $('#progress_bar')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate2)
            $("#spinner-heading").css("display", "block")
            document.getElementById("spinner-status").innerHTML = "Please wait";
            $("#scan-id-3").css("display", "none")
            $("#scan-id-0").css("display", "block")
            $("#scenarios").css("display", "block")

            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 700000)
            // setTimeout(function(){
            //     // $('#confirmButton').click()
            //     document.getElementById('scan-id-0').style.display = 'none'
            //     document.getElementById('scan-id-5').style.display = 'block'
            // }, 708000)
        }
    }
    var animate2 = setInterval(function() {
        loading()
    }, time)
}
