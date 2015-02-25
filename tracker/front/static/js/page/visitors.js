define(['jquery', 'appData', 'helpers', 'jquery_cookie', 'bootstrap'], function($, appData, helpers){
  loadVisitors = function() {
    if (typeof helpers.getSelectedSite() == 'undefined') {
      helpers.showNoSiteSelected();
    } else {
      helpers.sendApiRequest(helpers.getApiReportUrl(helpers.getAccountId(),
      helpers.getSelectedSite().site_id,
      appData.debug.startDate,
      appData.debug.endDate,
      appData.reports.visitors),
      'GET', {}, {},
      function(data) {
        if (data.sites[0].dates.length == 0) {
          helpers.showNoData();
        } else {
          $('.report-sub-header').show();
          populateDateVisitorTable(data);
          populateVisitorChart(data);
        }
      });
    }
  }

  populateDateVisitorTable = function(data) {
    var dateVisitorsTable = '<table class="table table-striped"><thead><tr><th>Date</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th class="right-text">Visitors</th></tr></thead><tbody>';
    for (var dateIndex in data.sites[0].dates) {
      dateVisitorsTable += '<tr>' + '<td>' + data.sites[0].dates[dateIndex].date + '</td>';
      dateVisitorsTable += '<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
      dateVisitorsTable += '<td class="right-text">' + data.sites[0].dates[dateIndex].data.visitors + '</td></tr>'
    }
    dateVisitorsTable += '</tbody></table>';
    $('.table-responsive').html(dateVisitorsTable)
  }

  populateVisitorChart = function(data) {
    var labelsArray = [];
    for (var index in data.sites[0].dates) {
      labelsArray.push(data.sites[0].dates[index].date);
    }
    var dataArray = [];
    for (var index in data.sites[0].dates) {
      dataArray.push(data.sites[0].dates[index].data.visitors);
    }
    helpers.createLineChart('Visitors', labelsArray, dataArray);
  }

  helpers.setLoggedInData();
  $('.logout').on('click', function() {
    helpers.logoutListener();
  });

  loadVisitors();
})
