console.log("connection successful")

//index for buttons
var basketball = ["basketball", 
                "Michael Jordan", 
                "Kareem Abdul-Jabbar", 
                "Lebron James", 
                "Shaq", 
                "Kobe Bryant", 
                "dunking",  
                "Vlade Divac", 
                "Peja Stojakovic", 
                "Drazen Petrovic"];

//the function I want called when buttons are clicked
function getData(){
//my API key appended with basketball images limited to the max giphy limit (without a production key) at 30 and keeping the rating pg
var xhr= $.get("https://api.giphy.com/v1/gifs/search?q= " + basketball + "&api_key=EYBIrdGPd3ZGT0SzkA8lyE3HIYnRBWGU&limit=30&rating=pg");
//the response I want the function to make when called
xhr.done(function(response) {
    console.log("successfully have data", response);
    //calling the api's data
    var basketball = response.data

    for (var i=0; i<basketball.length; i++) {
        $(".imgArena").append("<img src ='"+basketball[i].images.original.url+"'style='height:350px; width:350px;'/>")
    }

    
    
});



}

