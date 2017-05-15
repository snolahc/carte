function searchEvents() {
    var xhttp = new XMLHttpRequest();
    var loc_within = (document.getElementById("loc_range").value ? document.getElementById("loc_range").value : "42");

    var t1 = parseInt(document.getElementById("date_1").value);
    var t2 = parseInt(document.getElementById("date_2").value);
    var ds = new Date();
    ds.setDate(ds.getDate() + (t1 < t2 ? t1 : t2));
    var date_start = ds.getFullYear() + "-" + (ds.getMonth() < 9 ? "0" : "") + parseInt(ds.getMonth() + 1) + "-" + (ds.getDate() < 10 ? "0" : "") + ds.getDate() + "T00:00:00";
    var de = new Date();
    de.setDate(de.getDate() + (t1 < t2 ? t2 : t1));
    var date_end = de.getFullYear() + "-" + (de.getMonth() < 9 ? "0" : "") + parseInt(de.getMonth() + 1) + "-" + (de.getDate() < 10 ? "0" : "") + de.getDate() + "T23:59:59";
console.log(de);

    var url = "https://www.eventbriteapi.com/v3/events/search/?token=" + eventbrite_api_key + "&location.latitude=" + myloc.lat + "&location.longitude=" + myloc.lng + "&location.within=" + loc_within + "km&start_date.range_start=" + date_start + "&start_date.range_end=" + date_end + "&q=";
console.log(url);
    xhttp.open("get", url, false);
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    console.log(response);


}

function addEvent(event) {


}

function search() {
  searchEvents();
}
