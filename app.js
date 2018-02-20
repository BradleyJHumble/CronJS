var CronJob = require('cron').CronJob;

// values
// if '*', then it means every.
var Seconds = 00; // range is 00-59
var Minutes = 15; // range is 00-59
var Hour = 9; // range is 0-23
var DaysOfMonth = '*' // range is 1-31
var Months = '*' // range is 0-11
var DaysOfWeek = '1-5' // value is as an range, 0 = sunday while 6 = saturday. Total range is 0-6

var job = new CronJob( Seconds + Minutes + Hour + DaysOfMonth + Months + DaysOfWeek, function() {
  /*
   * Runs every weekday (Monday [1] through Friday [5])
   * at  9:15 AM. It does not run on Saturday
   * or Sunday.
   * Note that '*' can be used for loops instead of running once,
   * This will only run once but if you loop it,
   * use an if statement to restrain it by an time varable or else it will run forever,
   * unless you want that :-)
   */
  }, function () {
    /*
     * This function is executed when the job stops
     */

  },
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

/*
* sauce = https://www.npmjs.com/package/cron
* dont forget to run 'npm install cron --save'
* before running this!
*/
