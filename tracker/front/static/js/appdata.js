define([],function(){
  var appData = {
    dateChangeTimeStamp: 0,
    chartId: '#chart',
    date : {
      dateChangeTimeStamp: 0
    },
    api: {
      development: {
        host: 'localhost',
        port: 8000,
        protocol: 'http'
      },
      production: {
        host: 'ec2-54-172-75-176.compute-1.amazonaws.com',
        port: 80,
        protocol: 'http'
      }
    },
    reports: {
      pageViews: 'page_views',
      visitors: 'visitors',
      browsers: 'browsers'
    },
    chartColors: [{
      color: '#368DBA',
      highLight: '#44ADE3'
    }, {
      color: '#F7464A',
      highLight: '#FF5A5E'
    }, {
      color: '#FDB45C',
      highLight: '#FFC870'
    }],
    debug: {
      accountId: 'edbdf639f813482c986e2c4a536ec3fb',
      siteId: '627ebf16104240b28c8f2e25ed436655',
      startDate: '2015-02-01',
      endDate: '2015-02-20'
    }
  }
  return appData;
})
