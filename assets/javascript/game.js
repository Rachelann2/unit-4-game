$(document).ready(function () {


    var crystals = true;
    var Userscore = "";
    var randomnumber = ["1", "2", "3", "4", "5", "6", "7"];
    var compscore = "";
    var result = "";


    $("button").on("click", function () {
        var value = $(this).attr("value")
        function myFunction() {
            document.getElementById("bl").textContent = "randomnumber";
        }
        console.log(myFunction)

        if (value === compscore) {
            if (Userscore === compscore) {
                var result = parseInt(Userscore)
                $("#result").text(result)
            }

        }


    });





















});