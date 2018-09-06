---
title: Understanding HTTPS and how to Secure Websites
date: 2018-09-06T20:12:36.764Z
description: >-
  Website security is one of the things we need to consider while building or
  acquiring websites. But what if the HTTPS encryption that we depend on got
  compromised? Whaaat?, Got compro what? Don't mind me. It's a joke. Anyways,
  today let's look at https and what makes it so special.
image: /img/security-protection-anti-virus-software-60504.jpeg
---
HTTPS is just a more secure version of HTTP. Oh! Sorry. HTTPS stands for Hypertext Transfer Protocol Secure. 

This extra layer of security means that the browser uses SSL/TLS to protect websites' traffic.

TLS and SSL are slightly different. [TLS (Transport Layer Security) ](https://en.wikipedia.org/wiki/Transport_Layer_Security) uses stronger encryption algorithms than SSL (Secure Sockets Layer).

These encryption algorithms are beyond the scope of this article. Now, let's get to HTTPS and its features.

The more secure channel that HTTPS creates helps to protect steams of data against eavesdroppers, man-in-the-middle or more generically, hackers' attacks.

In order to avoid these attacks, there's a need to consider many things while making use of any site.

These things that need to be considered include the following:

* The user (which in this case, You) should trust  the implementation of HTTPS with correctly pre-installed certificate authorities. (List of certificate authorities: [Let's Encrypt](https://en.wikipedia.org/wiki/Let%27s_Encrypt) , [Digicert](https://en.wikipedia.org/wiki/Digicert), [Comodo](https://en.wikipedia.org/wiki/Comodo_Group), [GoDaddy](https://en.wikipedia.org/wiki/GoDaddy) and [GlobalSign](https://en.wikipedia.org/wiki/GlobalSign)).


* The user trusts the certificate authority to vouch only for legitimate websites. 

* The website provides a valid certificate, which means it was signed by a trusted authority.


* The certificate correctly identifies the website (e.g., when the browser visits "https://example.com", the received certificate is properly for "example.com" and not some other entity).


* The user trusts that the protocol's encryption layer (SSL/TLS) is sufficiently secure against eavesdroppers.

Source: **[Wikipedia](https://en.wikipedia.org/wiki/HTTPS)**

This is just saying that we should be careful my entering our personal information to any website. 

By now, I believe that we should know that any website that does not have the padlock symbol at the top-left corner of URL bar is not a secure website. Just a reminder though.

When it comes to securing our websites, most of what you need you could find them at **[HTTPS](https://en.wikipedia.org/wiki/HTTPS)**

Enjoy the web and the internet. Stay secured. Thanks for reading and be sure to come back next time.

Oh! One more thing, check out my previous post on [How to get the most out of the Web](https://www.mordernweb.com/post/how-to-get-the-most-out-of-the-web-top-tips/)
