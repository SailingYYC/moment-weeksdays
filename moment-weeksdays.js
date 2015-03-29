// moment-weeksdays.js
// version : 0.1.0
// author : Colin Cyr
// license : MIT
// github.com/sailingyyc/moment-weeksdays

(function () {

	function onload(moment) {
    moment.duration.fn.weeksdays = function () {
      var weeks = Math.floor( this.asWeeks() ),
        days  = Math.floor( this.asDays() ) % 7,
        result;

      if ( weeks && days ) {
        result = weeks + "w " + days + "d";
      } else if ( weeks && !days ) {
        result = weeks + "w";
      } else {
        result = days + "d";
      }

      return result;
    };

    return moment;
  }

  if (typeof define === "function" && define.amd) {
    define("moment-fquarter", ["moment"], onload);
  } else if (typeof module !== "undefined") {
    module.exports = onload(require("moment"));
  } else if (typeof window !== "undefined" && window.moment) {
    onload(window.moment);
  }

}).apply(this);
