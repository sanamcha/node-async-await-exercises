let favoriteNumber = 30;
let URL = "http://numbersapi.com";

// 1.
$.getJSON(`${URL}/${favoriteNumber}?json`, function(data) {  
  console.log(data);
});

//2.

let favoriteNumbers=[11,1,55]
$.getJSON(`${URL}/${favoriteNumbers}?json`, function(data) {
    console.log(data);
  }); 

//3.
let res=[];
$.getJSON(`${URL}/${favoriteNumber}?json`, function(data) {
    res.push(data.text);
    $.getJSON(`${URL}/${favoriteNumber}?json`, function(data) {
        res.push(data.text);
        $.getJSON(`${URL}/${favoriteNumber}?json`, function(data) {
            res.push(data.text);
            $.getJSON(`${URL}/${favoriteNumber}?json`, function(data) {
                res.push(data.text);
                res.forEach(res => {
                    $("body").append(`<p>${res}</p>`);
                });                
            });    
        });
    });
}); 