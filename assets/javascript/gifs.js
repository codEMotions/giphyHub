console.log("connected")

/*
$("button") // select button element
$(".btn") // select by class 
$("#myButton") // select by id

*/
var basketball = "Michael Jordan";


$("button").on("click", function () {
    // console.log("button")
    // console.log(typeof this)
    // console.log($(this))

    var bbbtn = $(this).attr("data-basketball");
    console.log(bbbtn);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + bbbtn + "&api_key=EYBIrdGPd3ZGT0SzkA8lyE3HIYnRBWGU&limit=10&rating=pg";

    //var queryURL = " http://api.giphy.com/v1/gifs/search?q="api_key=EYBIrdGPd3ZGT0SzkA8lyE3HIYnRBWGU"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        for ( let i = 0; i<=10; i++) {
            var imageURL = response.data[i].images.fixed_height.url;
            console.log(response);

        var gif = $("<img>")

        gif.attr("src", imageURL);
        gif.attr("alt", "basketball gif");

        $(".imgArena").prepend(gif);
        }

        //var bbbtn = $("<img>");

    //     var gif = $("<img>")

    //     gif.attr("src", imageURL);
    //     gif.attr("alt", "basketball gif");

    //     $(".imgArena").prepend(gif);
    });
});











//---------------------------------------------------------------------------------------











// console.log("connection successful")

// //index for buttons
// var basketball = ["basketball",
//     "Michael Jordan",
//     "Kareem Abdul-Jabbar",
//     "Lebron James",
//     "Shaq",
//     "Kobe Bryant",
//     "dunking",
//     "Vlade Divac",
//     "Peja Stojakovic",
//     "Drazen Petrovic"];

// //the function I want called when buttons are clicked
// function getData() {
//     //my API key appended with basketball images limited to the max giphy limit (without a production key) at 30 and keeping the rating pg
//     var xhr = $.get("https://api.giphy.com/v1/gifs/search?q= " + basketball + "&api_key=EYBIrdGPd3ZGT0SzkA8lyE3HIYnRBWGU&limit=30&rating=pg");
//     //the response I want the function to make when called
//     xhr.done(function (response) {
//         console.log("successfully have data", response);
//         //calling the api's data
//         var basketball = response.data

//         for (var i = 0; i < basketball.length; i++) {
//             $(".imgArena").append("<img src ='" + basketball[i].images.original.url + "'style='height:350px; width:350px;'/>")
//         }

//     });




// }

