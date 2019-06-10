# _FIRST_ LEGO League NPMGraph


A tool for exploring NPM modules and dependencies for the scope @first-lego-league.
Available online at https://2roy999.github.io/first-lego-league-npmgraph/index.html.

Mainly based on http://npm.broofa.com/. 

![image](https://user-images.githubusercontent.com/164050/31836231-6ab6faca-b589-11e7-9bb9-00ee0b8d90b4.png)

## Browser support

Runs on the latest versions of Chrome, Safari, Firefox and Edge.

## Running locally

NPMGraph can be run from any web server capable of serving static files.  For
example:

```shell
$ git clone git@github.com:broofa/npmgraph.git
$ cd npmgraph
$ npm install -g static-server
$ static-server
```

... then open http://localhost:9080 in your browser of choice.

## Attributions

The dependency graph is drawn with the [Viz.js](https://github.com/mdaines/viz.js/) which, if you're not familiar with it, is a really slick project.  It's a must-have module for anyone interested in drawing directed graphs in JS.
