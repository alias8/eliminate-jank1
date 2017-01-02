Homework problem from Website Optimisation module. This answer was given to you, this repo is just for your own reference (private repo) to see examples of where jank can creep in and the effect it has.

Please note: this code is intended for you to hone your debugging skills. It contains a lot of code that you should not use in production!

This is a simple web app that shows the top stories from [Hacker News](https://news.ycombinator.com/news) via [its API](http://blog.ycombinator.com/hacker-news-api).

Unfortunately it has a bunch of performance issues, such as:

* Layout Thrashing
* Expensive painting
* Unnecessary layouts
* Long-running and badly-timed JavaScript
* Bad touch handling

Your mission is to find and fix the issues, and make the app gloriously performant!

[Here](http://udacity.github.io/news-aggregator/) is the live version of the janky app.

The master branch fixes the issues. See [githubpages](https://alias8.github.io/news-aggregator/) link.

The webworkers branch is the same as the master branch but deploys a web worker for each XMLHttpRequest. 
