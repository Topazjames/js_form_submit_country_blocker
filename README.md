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


## Versions
There are two versions of this script available.
Version 1 will run every time a form is submitted. This means it is only doing a call to the getip API when requested. Advantages of this version is that it is only ran when needed.

Version 2 will run on every page load. This means the callto the getip API will be ran regardless if it is needed or not. A disadvantage to this is there is apossibility it could slow the site down. An advantage to this however is that it means it could be used for other processes you may want, e.g. showing a warning message to visitors from blocked countries.

## Troubleshooting
If you are using version 1 and find some features aren't working, please try version 2.
I originally built this script for a friend running a phpbb site. Whilst the script worked perfectly for the contact form (stopping the constant spam and registration requests - despite using a recaptcha), they then had an issue they the login form no longer worked, swapping the script out for version 2 fixed the issue.
