---
title: "How to get most out of Angular JS?"
excerpt: "It can be challenging to still use Angular JS in the modern web application, but it is not impossible. Here are a few tips and tricks to get the most out of Angular JS, that I learned over the course of my internship."
coverImage: "/assets/blog/getting-most-of-angular-js/cover.png"
date: "2018-09-17T05:35:07.322Z"
categories: ["Frontend"]
author:
  name: Atul Lal
  picture: "/assets/blog/authors/atullal.jpeg"
ogImage:
  url: "/assets/blog/getting-most-of-angular-js/cover.png"
---
[Angular JS][angular-link] has been out for a long time, October 2010 to be precise and it has made a huge impact in the industry (albeit not as much as ReactJS). A lot has changed since then, what Angular JS claimed to be its core features is now very commonly used by many other modern frameworks, some have even improved upon it. Having said that, there are still many large-scale applications using Angular JS for its maturity and long-term support. When Angular JS launched, it offered a lot of functionality like component-based architecture, two-way data binding, etc. to name a few, but these patterns have become common in the industry now. Angular JS has stopped supporting security patches and bug fixes in favor of newer frameworks. It can be challenging to use Angular JS in the modern web application, but it is not impossible. Here are a few tips and tricks to get the most out of Angular JS, that I learned over the course of my internship.

## Optimising ng-repeat directive
There are a few tricks to optimize ng-repeat, one of which being ‘track by’ functionality. This reduces DOM manipulations, by reducing the rendering of elements to the ones that have already been rendered. We should also avoid using filters inside loops.
```html
<!-- Commonly used ng-repeat  -->
<div ng-repeat="item in items">
 {{ item.property }}
</div>

<!-- ng-repeat with track by  -->
<div ng-repeat="item in items track by item.id">
 {{ item.property }}
</code>

```


## Avoiding two-way binding
One of the best features of Angular JS is [two-way binding][two-way-link], but you might not need it every time. This happens more frequently than most might suspect. When utilizing Angular, two-way binding regularly isn’t required: you can tie, rather, just one time the expressions between wavy sections in your template formats by utilizing the following syntax.

```javascript
<!-- Appending :: before the expression  -->
{{:: itemExpression}}
```

## Using filters in JS
Filters can be very useful in templates but sometimes you can come across a use case where you need to use filters inside your Javascript factory or Component or Service. When you do require a filter in your Javascript though, don’t panic use this to get your work done. Inject `$filter` in your JS file and use this syntax.

```javascript
function myCtrl($scope, $filter)
{
    $filter('filterName')(args);
}
```

## Use Service to share data between controllers
You can sometimes have two or more views in various routes that need access to some shared variable or you may have various segments which need access to a similar bit of information.

In such cases, the best way to deal with sharing information between controllers is by making a shared service for this. See the example below.

```javascript
var myAngularApp = angular.module("myAngularApp");
 
myApp.controller("controller1", ['$scope', 'appService',
    function ($scope, appService) {
    $scope.resource = appService.getSharedResource();
  }
]);
 
myApp.controller("controller2", ['$scope', 'appService',
    function ($scope, appService) {
    $scope.resource = appService.getSharedResource();
  }
]);
```

## Simple way to debounce input fields
With the new Angular JS version, we have the ‘debounce’ option in the `ng-model-options` directive. You can simply use the syntax given below to achieve debounce functionality simply and efficiently.

```html
<input ng-model="searchValue" ng-model-options="{debounce: 500}"/>
```
<br/>
Even though Angular JS might not be a good choice of the framework on a modern web application, because it doesn’t receive security updates, as it recently lost support, but if you are stuck with it or if you need Angular JS, we can achieve almost same functionality similar to the modern framework through best practices and putting some research and effort. Angular JS can provide an easy gateway for many newcomers, if they want to step into the wide world of Web Application development, and could even help you in big enterprises which are using Angular JS for their MVP.

Check out the [AngularJS Documentation][angularjs-docs] for more info on how to get the most out of AngularJS.

[angularjs-docs]: https://docs.angularjs.org/guide
[angular-link]: https://angularjs.org/
[two-way-link]: https://docs.angularjs.org/tutorial/step_06