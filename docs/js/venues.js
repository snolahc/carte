      if ("v" + response.events[index].venue_id in venues) {
      } else {
        vhttp = new XMLHttpRequest();
        vurl = "https://www.eventbriteapi.com/v3/venues/" + response.events[index].venue_id + "/?token=" + eventbrite_api_key;
        vhttp.open("get", vurl, false);
        vhttp.send();
        var vresponse = JSON.parse(vhttp.responseText);
        var vtmp = {
          name: vresponse.name,
          address: vresponse.address,
          events: [],
        };
        self.postMessage({type: 'venue', id: item.venue_id}, vtmp);
//        venues["v" + item.venue_id] = vtmp;
//Add here HTTP call to find organizer ID for URL
      }
      venues["v" + item.venue_id].events.push(item.id);
      showmap.postMessage(item.venue_id);