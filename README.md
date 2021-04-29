# Javascript form country blocker
Use this simple script written in JavaScript / jQuery to block certain countries from submitting a form on a website.

This script contains an array of countries that acts as a blacklist, if the country of the visitor is using the form, the script will not allow the form to submit. This would only work if your site is targetted to specific countries and not bothered if people in non-targetted countries aren't able to use the site (such as contact forms / login forms).

Requirements:
* jquery

## Adding / removing countries from the blacklist
Edit the array called 'blocked_countries'. by default I have added the biggest offending countries for spam bots.

```javascript
var blocked_countries = ["Russia", "China", "Ukraine", "Iran"];
```
