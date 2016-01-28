var app = {
    init: function(){
        document.getElementById("button").addEventListener("click", function(){
            var e = document.getElementById("selector");
            var username = e.options[e.selectedIndex].value;
            //console.log(username);
            var xhr = new XMLHttpRequest;
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(JSON.parse(xhr.responseText));
                }
            };
            xhr.open("POST", 'http://localhost:5000/users/', true);
            //xhr.open("POST", 'http://xn--dagsfrkaffe-vfb.nu:5000/getUser', true);

            xhr.send(
                username
            );
        })
    }
};

window.onload = app.init();