angular.module("icomptvApp").service('appLog', function(
  config,
  $timeout,
  $window
  ) {

  var _log = function (string){
    if(config.appShowLog){
      console.log(string);
    }
  }

  var _logObj = function (string,errorObj){
    if(config.appShowLog){
      var msg = string+"!\n\n";
      $timeout(function() {
            angular.forEach(errorObj, function(value, key) {
                //console.log(key + ' : ' + value);
                msg = msg+key + ' : ' + value+"\n";
            });
            console.log(msg);
           //$window.alert(string+"\n"+"code ["+errorObj.code+"]\nmessage ["+errorObj.message+"]");
      });
    }
  }

  var _alertError = function (string,errorObj){
    if(config.appShowAlert){
      var msg = string+"!\n\n";
      $timeout(function() {
            angular.forEach(errorObj, function(value, key) {
                console.log(key + ' : ' + value);
                msg = msg+key + ' : ' + value+"\n";
            });
            $window.alert(msg);
           //$window.alert(string+"\n"+"code ["+errorObj.code+"]\nmessage ["+errorObj.message+"]");
      });
    }
  }

  var _alert = function (string,obj){
    if(config.appShowAlert){
      var msg = string+"\n\n";
      $timeout(function() {
          if(obj){
            angular.forEach(obj, function(value, key) {
                console.log(key + ' : ' + value);
                msg = msg+key + ' : ' + value+"\n";
            });
          }
          $window.alert(msg);
      });
    }
  }

  return {
    log : _log,
    alertError : _alertError,
    alert : _alert,
    logObj: _logObj
  };

});