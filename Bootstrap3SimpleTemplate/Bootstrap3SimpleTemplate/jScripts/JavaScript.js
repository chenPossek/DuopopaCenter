$(document).ready(function () {

    //-------------interactions---------------

    function myFunc() {
        alert("hollo world");
    }

    //פתיחת תפריט   

    $("#myNavbar").on('collapse on', function () {
        $("#navBtn i").addClass(".fa-times");
        $("#myNavbar").remove(".fa-bars");
    });

    $("#myNavbar").on('collapse', function () {
        $("#navBtn i").addClass(".fa-bars");
        $("#myNavbar").remove(".fa-times");
    });


    //יצירת הקולפסים והחלפת אייקון
    $("#sub1").click(function () {
        $("#content1").collapse('toggle');
    });
    $("#content1").on('shown.bs.collapse', function () {
        $("#sub1 i").addClass("fa-caret-up");
        $("#sub1 i").removeClass("fa-caret-down");
    });
    $("#content1").on('hidden.bs.collapse', function () {
        $("#sub1 i").addClass("fa-caret-down");
        $("#sub1 i").removeClass("fa-caret-up");
    });

    $("#sub2").click(function () {
        $("#content2").collapse('toggle');
    });
    $("#content2").on('shown.bs.collapse', function () {
        $("#sub2 i").addClass("fa-caret-up");
        $("#sub2 i").removeClass("fa-caret-down");
    });
    $("#content2").on('hidden.bs.collapse', function () {
        $("#sub2 i").addClass("fa-caret-down");
        $("#sub2 i").removeClass("fa-caret-up");
    });

    $("#sub3").click(function () {
        $("#content3").collapse('toggle');
    });
    $("#content3").on('shown.bs.collapse', function () {
        $("#sub3 i").addClass("fa-caret-up");
        $("#sub3 i").removeClass("fa-caret-down");
    });
    $("#content3").on('hidden.bs.collapse', function () {
        $("#sub3 i").addClass("fa-caret-down");
        $("#sub3 i").removeClass("fa-caret-up");
    });

    $("#sub4").click(function () {
        $("#content4").collapse('toggle');
    });
    $("#content4").on('shown.bs.collapse', function () {
        $("#sub4 i").addClass("fa-caret-up");
        $("#sub4 i").removeClass("fa-caret-down");
    });
    $("#content4").on('hidden.bs.collapse', function () {
        $("#sub4 i").addClass("fa-caret-down");
        $("#sub4 i").removeClass("fa-caret-up");
    });

    $("#sub5").click(function () {
        $("#content5").collapse('toggle');
    });
    $("#content5").on('shown.bs.collapse', function () {
        $("#sub5 i").addClass("fa-caret-up");
        $("#sub5 i").removeClass("fa-caret-down");
    });
    $("#content5").on('hidden.bs.collapse', function () {
        $("#sub5 i").addClass("fa-caret-down");
        $("#sub5 i").removeClass("fa-caret-up");
    });

    $("#sub6").click(function () {
        $("#content6").collapse('toggle');
    });
    $("#content6").on('shown.bs.collapse', function () {
        $("#sub6 i").addClass("fa-caret-up");
        $("#sub6 i").removeClass("fa-caret-down");
    });
    $("#content6").on('hidden.bs.collapse', function () {
        $("#sub6 i").addClass("fa-caret-down");
        $("#sub6 i").removeClass("fa-caret-up");
    });

    $("#sub7").click(function () {
        $("#content7").collapse('toggle');
    });
    $("#content7").on('shown.bs.collapse', function () {
        $("#sub7 i").addClass("fa-caret-up");
        $("#sub7 i").removeClass("fa-caret-down");
    });
    $("#content7").on('hidden.bs.collapse', function () {
        $("#sub7 i").addClass("fa-caret-down");
        $("#sub7 i").removeClass("fa-caret-up");
    });

    $("#sub8").click(function () {
        $("#content8").collapse('toggle');
    });
    $("#content8").on('shown.bs.collapse', function () {
        $("#sub8 i").addClass("fa-caret-up");
        $("#sub8 i").removeClass("fa-caret-down");
    });
    $("#content8").on('hidden.bs.collapse', function () {
        $("#sub8 i").addClass("fa-caret-down");
        $("#sub8 i").removeClass("fa-caret-up");
    });




});

