var _ = require('lodash');
var vnstat = require('vnstat-dumpdb')();
var macaddress = require('macaddress');
var request = require('request');

// Get traffic per day
vnstat.getStats(false, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var record = {};
        macaddress.one(function(err, mac) {
            record['mac'] = mac;
            record['sizein'] = 'GB';
        });
        var dayWise = [];
        _.each(data, function(val1, key1) {
            _.each(val1.traffic.days, function(val, key) {
                if (!val.rx == 0) {
                    var newData = {
                        date: val.date.year + '-' + val.date.month + '-' + val.date.day,
                        rx: ((val.rx) / 1048576),
                        tx: ((val.tx) / 1048576),
                        total: ((val.rx + val.tx) / 1048576)
                    };
                    dayWise.push(newData);
                }
            });
        });
        record['dayWise'] = dayWise;
        request({
            url: '', //URL to hit 
            method: 'post',
            qs: {
                "action": 'updatebandwidthstats',
                "data": JSON.stringify(record)
            }
        }, function(error, result, body) {
            if (error) {
                //console.log(err);
                console.log('Result : Fail')
            } else {
                var json = JSON.parse( body )
                if( json.error === 0 ){
                    console.log('Result : Success')
                    console.log('Mac Address is : ' + record.mac )
                }else{
                    console.log('Result : Fail')
                }
                
            }
        });
    }
});
