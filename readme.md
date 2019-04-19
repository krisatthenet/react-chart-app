A built version of the application is already provided, to simply start it, run server.exe and open http://localhost:3000 on your web browser.

If you need to make changes to the displayed data in the chart navigate to frontend/src/App.js and find the data constant:

const data = [
{
name: "Fri, 08 Mar 2019",
missmatch: 0,
uncorrected: 50,
corrected: 50
},
{
name: "Sat, 09 Mar 2019",
missmatch: 0,
uncorrected: 60,
corrected: 40
},
{
name: "Sun, 10 Mar 2019",
missmatch: 0,
uncorrected: 68,
corrected: 38
},
{
name: "Mon, 11 Mar 2019",
missmatch: 0,
uncorrected: 65,
corrected: 40
},
{
name: "Tue, 12 Mar 2019",
missmatch: 0,
uncorrected: 80,
corrected: 30
},
{
name: "Wed, 13 Mar 2019",
missmatch: 0,
uncorrected: 79,
corrected: 29
},
{
name: "Thu, 14 Mar 2019",
missmatch: 0,
uncorrected: 55,
corrected: 45
}
];

If you need to preview changes while altering data you can run a development server using: npm start

After changes have been made, make sure you have NPM installed and run this command: npm run build

Once the build is finished, relaunch server.exe and new data will be live.
# react-chart-app
