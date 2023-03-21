$(document).ready(function () {
  
 
    
    $("button").click(function (e) {
    let city = $(".city").val();
        e.preventDefault();
        $.ajax({
            url: `http://api.weatherapi.com/v1/current.json?key=af838695a5134deaa26135931231903&q=${city}`,
            method: "get",
            success: function (data) {
                console.log(data);
                $("#1").html(`City: ${data.location.name}`)
                $("#2").html(` Country: ${data.location.country}`)

                if ($("#temp").val() == `celci`) {
                    $("#3").html(` Weather Condition: ${data.current.temp_c} °C`)

                }
                if ($("#temp").val()== `farenheit`) {
                    $("#3").html(` Weather Condition: ${data.current.temp_f} °F`)

                }
               
            
            }

        })

    })

});