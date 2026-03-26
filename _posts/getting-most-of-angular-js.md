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

<a href="https://angularjs.org/" target="_blank" class="tooltip">Angular JS<span class="tooltip-content">A JavaScript-based open-source front-end web framework mainly maintained by Google. Released in October 2010.</span></a> has been out for a long time—October 2010 to be precise—and it has made a monumental impact on the industry. A lot has changed since then. What Angular JS originally claimed as its core features are now common table stakes used by almost all modern frameworks, and many have vastly improved upon the original design.

<div class="doodle">
  *Throwback:* Remember when two-way data binding felt like actual magic? ✨
</div>

Having said that, there are still many large-scale legacy applications using Angular JS due to its historical maturity. When Angular JS launched, it offered functionalities like component-based architecture and two-way data binding that revolutionized frontend dev. However, <span class="highlighter">Angular JS has stopped supporting security patches and bug fixes</span> in favor of the newer Angular (v2+) framework.

It can be challenging to maintain or update Angular JS in a modern web application, but it is not impossible. Here are a few tips and tricks to get the most out of Angular JS, which I learned over the course of my internship.

## Optimizing the `ng-repeat` directive

There are a few crucial tricks to optimize `ng-repeat`, the most important of which is the **‘track by’** functionality.

<div class="post-it">
  <strong>Performance Tip:</strong> Without `track by`, Angular destroys and recreates DOM elements whenever the array changes, even if the elements are identical! 😱
</div>

Using `track by` reduces expensive DOM manipulations by only re-rendering elements that have actually changed based on a unique identifier. We should also strongly avoid using filters directly inside `ng-repeat` loops, as they are evaluated on every digest cycle.

```html
<!-- The sluggish, commonly used ng-repeat  -->
<div ng-repeat="item in items">
 {{ item.property }}
</div>

<!-- The optimized ng-repeat with track by  -->
<div ng-repeat="item in items track by item.id">
 {{ item.property }}
</div>
```

## Avoiding Unnecessary Two-Way Binding

One of the most famous features of Angular JS is <a href="https://docs.angularjs.org/tutorial/step_06" target="_blank" class="tooltip">two-way data binding<span class="tooltip-content">Automatic synchronization of data between the model and view components.</span></a>, but you might not actually need it every time!

In fact, you need it less frequently than you might suspect. Unnecessary two-way binding clogs up the `$watch` list and slows down the digest cycle. Instead, you can bind an expression **just one time** between the curly braces in your templates by utilizing the `::` syntax.

```html
<!-- Appending :: before the expression for one-time binding -->
{{:: itemExpression}}
```

## Using Filters in JavaScript Controllers

Filters can be very useful in templates, but sometimes you come across a use case where you need to use filters inside your JavaScript factory, Component, or Service.

<div class="doodle">
  *Code Hack:* Don't duplicate your formatting logic! Just inject `$filter` into your JS file. 🛠️
</div>

When you require a filter in your JavaScript, don’t panic or rewrite the logic. Inject `$filter` and use this syntax:

```javascript
function myCtrl($scope, $filter) {
    // Call the filter programmatically
    var formattedData = $filter('filterName')(args);
}
```

## Use Services to Share Data Between Controllers

You can sometimes have two or more views in various routes that need access to a shared variable, or you may have various segments which need access to a similar bit of information.

In such cases, the cleanest and most scalable way to deal with sharing information between controllers is by creating a shared service. Relying on `$rootScope` is an anti-pattern. See the example below:

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

## Simple Way to Debounce Input Fields

With the newer versions of Angular JS (1.3+), we finally got the `debounce` option natively in the `ng-model-options` directive. You can simply use the syntax given below to achieve debounce functionality without writing custom timeout functions or importing Lodash.

```html
<!-- Waits 500ms after the user stops typing before updating the model -->
<input ng-model="searchValue" ng-model-options="{debounce: 500}"/>
```

## Conclusion

Even though Angular JS might not be the go-to framework for a modern web application today (especially since it recently lost official support), if you are stuck maintaining a legacy codebase, you can still achieve excellent performance.

By applying best practices, putting in some research, and keeping the `$digest` cycle lean, Angular JS can still perform admirably.

<div class="citations">
  <h3>References & Citations</h3>
  <ol>
    <li>
      AngularJS Official Documentation. <a href="https://docs.angularjs.org/guide">Developer Guide</a>.
    </li>
    <li>
      Misko Hevery (2010). "Hello World, AngularJS". (The genesis of two-way binding in JS frameworks).
    </li>
  </ol>
</div>