// WEB303 Assignment 2

var xhr = new XMLHttpRequest
$('#prospect').on('click', function () {
    xhr.open('GET', 'prospect.html', true)
    xhr.onload = function () {
        if (xhr.status === 200) {
            let a = document.getElementById("content");
            a.innerHTML = xhr.responseText;
            $('#content').hide().fadeIn(500);
        }
        else {
            console.log("something went wrong");
        }
    };
    xhr.send("search=ardunio");
})

    $('#convert').on('click', function () {
        xhr.open('GET', 'convert.html', true)
        xhr.onload = function () {
            if (xhr.status === 200) {
                let b = document.getElementById("content");
                b.innerHTML = xhr.responseText;
                $('#content').hide().fadeIn(500);
            }
            else {
                console.log("something gone wrong");
            }
        };
        xhr.send("serach = ardunio");
    })

        $('#retain').on('click', function () {
            xhr.open('GET', 'retain.html', true)
            xhr.onload = function () {
                if (xhr.status === 200) {
                    let c = document.getElementById("content");
                    c.innerHTML = xhr.responseText;
                    $('#content').hide().fadeIn(500);
                }
                else {
                    console.log("something gone wrong");
                }
            };
            xhr.send("serach = ardunio");
        });

/* Solution by sir! 
        
        $ (function)(){
            $('#content-warpper a').on('click', function () {
                let id = this.id;
                console.log("this id is: ", id);

            })
            let xhr = xhr = new XMLHttpRequest;


            xhr.open('GET' , 'test.html' , true)


            xhr.onload function(){
                if xhr status ===200{
                    $(#"content").html(xhr.responseText).hide().fadeIn(2000);
                }
            };
            xhr.send();
        });
    });
        
        
*/
