/******* using the $.getJSON() method with a callback *****/

let getJsonObject = $.getJSON("team.json", function (data) {
    //.each method

    jQuery.each
    $.each(data.cities, function (key, val) {
        console.log("data key: ", key, " and data value: ", val);

        $('#team').append(`<div id="${val.name.toLowerCase()}" class="members">
               <h2> <div class="name">${val.name}</div></h2>
              <h5> <div class="position">${val.position}</div></h5>
              <p> <div class="bio">${val.bio}</div></p>
             </div>`);
    });
});

console.log("The getjson object: ", getJsonObject);
