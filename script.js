$("#search").on("click", function() {
    event.preventDefault();
    event.stopPropagation();
    let city = $("#city-input").val().trim();
    if (city != '') {
        // The following clears the error if something is typed in the search field that isn't accepted
        $("#city-input").html("")
        
        //console.log(localStorage.getItem("city"));
        searchCity(city);
        brewery(city);
        addHistory(city);
        renderHistory()
    }
    else {
        $("#city-input").html("Field cannot be empty");
    }
});
// Save the cities searched for
function addHistory(city){ 
    // Check for changes in the local item and log them
    cities.push(city);
    localStorage.setItem("cities", cities); 
};

// Render the history localstorage
function renderHistory(){
    $("#history").empty();
    for (i = 0; i < cities.length; i++) {
        //    
        $("#history").append($("<button class='btn btn-info d-flex flex-column'>").attr("cityName", cities[i]).text(cities[i]));
    }
    $("#history button").on("click",function(){
        event.preventDefault();
        let searchedCity = $(this).attr("cityName");
    });
};