# moment-weeksdays.js
This plugin provides week and day short formatting for moment duration objects.

## How to use?
Call the `weeksdays` method on any moment duration object. It returns a string.
```javascript
moment.duration(1, 'days').weeksdays();
// 1d
moment.duration(14, 'days').weeksdays();
// 1w
moment.duration(17, 'days').weeksdays();
// 1w 3d
moment.duration({years: 2, months: 5, days: 13, hours: 14, minutes: 48, seconds: 97}).weeksdays();
// 127w 4d
```
