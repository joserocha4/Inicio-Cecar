$(document).ready(function () {
    $(".Event").hide();
    $("#Rules").hide();
    $("#Calculadora").hide();
    $("#Home").show();
})
$(document).ready(function () {
    $("#B1").click(function () {

        $("#Home").hide();
        $(".Event").hide();
        $("#Calculadora").show();
        $("#Rules").hide();
    })
})
$(document).ready(function () {
    $("#B2").click(function () {

        $("#Home").hide();
        $(".Event").show();
        $("#Calculadora").hide();
        $("#Rules").hide();
    })
})
$(document).ready(function () {
    $("#B3").click(function () {

        $("#Home").hide();
        $(".Event").hide();
        $("#Calculadora").hide();
        $("#Rules").show();
    })
})
$(document).ready(function () {
    $("#B4").click(function () {

        $("#Home").show();
        $(".Event").hide();
        $("#Calculadora").hide();
        $("#Rules").hide();
    })
})
