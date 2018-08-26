---
title: Ajax. How to make Asynchronous requests in Javascript
date: 2018-08-26T13:32:00.000Z
description: >-
  Ajax stands for Asynchronous JavaScript and XML.


  There're ways of making asynchronous requests in JavaScript. We have the old
  school XHR (XMLHttpRequest) method, the popular $.ajax() of jQuery and the
  awesome use of the Fetch API. In this post, we're going go examine these three
  methods. But, before we go further, we need to understand what asynchronous
  request means.
image: /img/async_request_640.jpg
---
## What we'll cover -

* The meaning of Asynchronous Request
* How to make async request using the XMLHttpRequest object
* How to make async request using jQuery
* How to make async request using the Fetch API
* Final though and take away piece of facts

> Let's get started with no much waste of time  😊 

**Asynchronous request** is a method of data transfer in which the client (the user's machine) requests for some data to a server or some database. But instead of waiting for some response to return, the client goes on doing other things.

This "other" things that the client machine goes on doing prevents the user from knowing that something's happening under the hood.

This method is used to solve the problem of page reload, thereby giving out a nice user experience.

If you wish to learn more about asynchronous requests, follow this **[link](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)**. But if not, now let's get into the main biz of today.

Alright. We'll first take a look at the old school method - the **XHR**, which stands for **XMLHttpRequest**.

XHR is a JavaScript object that is used to perform  synchronous and asynchronous operations.

An important fact we should note is that XML is a file type that is originally surppoted by the Javascript's XMLHttpRequest.

The XMLHttpRequest is like other Javascript objects like the document object. The XMLHttpRequest object does not only support XML file types. It supports other file types like JSON, images etc

Also, just like other JavaScript objects, XHR has a number of methods. The most important of them all being the _.open()_ method, which is used to initialize the request. It goes with some parameters, the most important being the first two - the _HTTP method_ and the _request URL_

The XHR object has other methods like the _.onload_ , the _.onerror_, the _.send_ method etc.

> Example code:

```language-javascript
const cakeRequest = new XMLHttpRequest();
cakeRequest.onload = function bakeCake(){//Do something};
cakeRequest.onerror = function(err){//Log err message};
cakeRequest.open('GET', `https://morderweb.com);
cakeRequest.send();
```

Now it is believed that the idea is clear. Should you be interested in knowing more about those methods used above, visit the MDN's doc on [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

It's time to talk about the second one. The use of the **$.ajax()** from jQuery to make asynchronous requests. This method is so popular because jQuery itself is a library that makes developer's life easier.

With this approach, shorter code is required in order to make the request. One thing we should learn here is that even though the request is made using a library, the **XHR** is still used under the hood of the library.

You can see the use of XHR object as doing something by yourself. Then, the use of jQuery is seen as paying a professional to do the same thing for you. The only diff here is that even though you might know how to do the stuff more than the professional, he(the pro) does the work faster. Because, why not? After all, that's his area of specialty.

> Code Example:

```javascript
 $.ajax({
            url: `https://mordernweb.com`
 }).done(addNewPost);
 
 function addNewPost(){
    //do something here
 }
```

Now, we all can see the using the **$.ajax()** makes the code shorter and simpler.

The _.done()_ is used to do something with the result of the request (in this case, the response)

Learn more about the **[$.ajax](http://api.jquery.com/jquery.ajax/)** request

Everything is looking cool so far. Now it's time to talk about the **Fetch API**

The Fetch API  is the modern way of making async requests in JavaScript. There's a lot to it because of how awesome it is.

### Some features of the Fetch API

* It doesn't require HTTPS
* It supports CORS(Cross Origin Resource Sharing) operation
* When it is used with service worker, it does require a HTTPS connection - This feature is for service worker though.
* Because it's not been supported by few browsers, it does need some polyfill
* The Fetch API  is Promise based

Wow! Those are too much for this post. Maybe we'll talk about the Fetch API (and these features) later.

I hope you're not seeing these features as uncool of the Fetch API. You should not. Because the API is so awesome. Those features are what make is so awesome. 
>Code Example:

```javascript

fetch('https://mordernweb.com')
.then(function(response) {
   // Do stuff with the response
})
.catch(function(error) {
    console.log('Looks like there was a problem: \n', error);
});

```
The *.then()* is the 'promise based' we talked about. The *.cache()* is used to handle error if the request wasn't succssful.

To learn more about Fetch API go to, **[Working with the Fetch API](https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api)**. Sure enough, you would see how awesome the API is.

## Take away piece of facts 👌

Now that we've seen the three ways of making an async request, it's left for you to choose the one you prefer. For me, I prefer using the Fetch API.

Three of these methods could let you get some data from some database or a server and use the data without the user knowing what's going on in the background.

This add to the efficiency of the site and at the same time boosts user experience. Less page reload, quality user experience. Awesome, isn't it?

We're all encouraged to go and try out any of these methods of performing an asynchronous request in JavaScript.

>Thanks for reading and be sure to come back next time 😍

