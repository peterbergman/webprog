/*

included with tag:

(function () {
        var tracker = document.createElement('script');
        tracker.type = 'text/javascript';
        tracker.async = true;
        tracker.src = http url to script;
        var a = document.getElementsByTagName('script')[0];
        a.parentNode.insertBefore(tracker, a);
    } ());