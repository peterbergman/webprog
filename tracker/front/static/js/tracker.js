(function(){
  var pixel = new Image();
  pixel.src = 'http://localhost:8000/datahandler/' + tracker.accountId + '/' + tracker.siteId + '/?page_url=' + (tracker.pageUrl ? tracker.pageUrl : encodeURIComponent(document.location.href));
})()
