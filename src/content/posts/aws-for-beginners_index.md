---
title: What is AWS? A Guide for Beginners.
pubDate: 2019-05-28
description: "If you are unfamiliar with AWS, understanding it will be pretty tough, considering their website is jam-packed full of a lot of different types of services… you’ll get lost."
author: "Lewis Menelaws"
image:
  url: "/images/hero.png"
  alt: "What is AWS? A Guide for Beginners."
tags: []
---
If you are into business or technology, then you have definitely heard of Amazon Web Services. In terms of business, AWS business model is very revolutionary when it comes to lowering other businesses overhead for server costs by hosting almost all of the infrastructure on Amazon Data Centers. 

For technology, AWS provides lots of different software for scaling your business as a startup vs enterprise.

If you are unfamiliar with AWS, understanding it will be pretty tough, considering their website is jam-packed full of a lot of different types of services… you’ll get lost. 

![](https://thepracticaldev.s3.amazonaws.com/i/3teaignna8qi3wjh2cyg.gif)

Essentially, AWS provides services for many different types of companies and all of their products reflect that in their awesome: “Pay what you use” pricing model. I won’t go over every single service because then I would be here for hours. I will just go over the most popular services that AWS provides and give an easy explanation of each. That way, you can understand what AWS is and can get you thinking about how AWS can benefit your application or business.

## Amazon EC2

![](https://thepracticaldev.s3.amazonaws.com/i/xam4mcale34fsgyp33f0.png)

#### What Amazon Says

*Amazon Elastic Compute Cloud (See where the 2 comes in?) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.*

#### Let’s make this easier to understand

Cloud computers or cloud servers are not new. Let’s say that you have a database or software you need hosted on a machine. Back in the day, you would probably host this on an actual machine of some sort. Depending on your business, this setup could be pretty pricey or pretty risky. So software like Amazon EC2 allows you to rent a portion of a larger machine so that you can eliminate the risk of a disaster and lower the cost of hardware.

That’s the basics of it. It also comes with other great features that would eliminate the need for an infrastructure team to manage. 

Let’s say I needed a dedicated server to put my WordPress installation on. I would easily be able to do this using AWS using an easy one-click install and then any other changes needed I could just SSH into my machine and have full access. All for the price of shared hosting like GoDaddy. Awesome.

## Amazon S3

![](https://thepracticaldev.s3.amazonaws.com/i/aw6yc80rv91mameabacb.png)


#### What Amazon Says

*Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.*

#### Let’s make this easier to understand

Amazon S3 provides a very fast and reliable way to store things. These “things” can be videos, images, documents, whatever you want. You create something called a “bucket” and you store the items in the bucket that you want to save.

This one is a little bit more straight forward. Let’s say I created an application that let you upload dog pictures and posted them randomly to other users throughout the site. When you first start your application, it’s probably just ok to have them hosted alongside your application. The problem with these “objects” (in this case images), they are very large in size. Even something like 10 images could be larger than your codebase itself. What happens on National Dog day when everyone wants to share pictures of their puppy? Your Amazon EC2 instance runs out of memory.

Your ideal solution is to upload the image directly to an S3 bucket and save the path of it in your database. That way, you can store a lot of objects without cramming up space for your database or server.

A really good example of Amazon S3 is on one of my favorite sites dev.to (which you are currently on), you can upload an image and immediately get back a URL with the image that was uploaded. Perhaps one of the most straight forward examples of how S3 works.

![](https://thepracticaldev.s3.amazonaws.com/i/rl8glhoegnpo8nzv6n5b.gif)
Oh DEV.to team. I love you.

## Amazon Aurora

![](https://thepracticaldev.s3.amazonaws.com/i/8rd5g0gsqf28dfpue545.png)


#### What Amazon Says

*Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud, that combines the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases.*

#### Let’s make this easier to understand

Amazon Aurora is a managed relational database alternative to MySQL and PostgreSQL. If you’re familiar with how relational databases work. Then you can skip over this part, but for anyone unaware, relational databases is how you store data using the Relational Model. In a nutshell, the database is organized into tables with rows and columns kind of like a spreadsheet. These tables can have relationships with other tables. 

Here’s a good way of explaining it:

Let’s say I wanted to store the data of my customers and their pets at my Pet Store. Well, this example is pretty straight forward. I can just add the persons name, address, email and their pet. Of course, I want to be able to add in more information like their name, animal, breed etc.

We would create a “Customer” Table that we can take all information relating to that customer.

Then, we create a “Pets” Table that has a “Foreign Key” column that we can relate this data back to (in this case the customer). This way, if I wanted to find all pets that belong to “Sally Smith” I can get that or if I wanted to count the amount of cats that “Sammy Salads” has… well, I think it’s best if we don’t find that out.

There are lots of open source methods available for relational databases but just like your room, managing a database can get extremely messy. Aurora takes all of the pains of hosting, managing and securing a database off your hands.

## Amazon DynamoDB

![](https://thepracticaldev.s3.amazonaws.com/i/mblf5c7vg75ibehubelz.png)

#### What Amazon Says

*Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale.*

#### Let’s make this easier to understand

DynamoDB is a no-sql database that scales with the amount of data coming in. What makes a no-sql database different from a SQL database is that it doesn’t use SQL and doesn’t have relational features. The benefits for this is how lightweight the database can be in result of not having these features. 

Continuing with our dog database thing or whatever, I implemented a like button. Now, I want to create a database of likes so that my users can see what posts they liked at that time. We could do this to a relational database but because our users will probably be liking 100x more than they will be creating, I think it’s best we use DynamoDB to quickly insert this data into a database so we don’t overpower our traditional database when users are trying to create things.

Since it’s also a “Key”: “Pair” system, this makes it easy if you are doing “serverless” applications that allow you to receive data in a similar JSON format. DynamoDB makes it easy to just store data in seconds. You also get 25GB free. That’s a lot of storage.

## Amazon Lambda

![](https://thepracticaldev.s3.amazonaws.com/i/ua7e0wnq6zoz74hvpw3a.png)

#### What Amazon Says

*AWS Lambda lets you run code without provisioning or managing servers. *

#### Let’s make this easier to understand

AWS Lambda lets you run code without provisioning or managing servers… (oh wait that’s what Amazon said). 

Ok, so if you are developing for the web, you will run into running things client and server side. Client will deal with most things UI/UX etc and the server would manage any big or private operation needing to be run. In the age of “microservices”, what happens if you wanted to add on a simple private function without having to deploy an entire server for it? Say:

A donation widget that requires Stripe authentication
An email to be sent
A large calculation or API call that would require a modest amount of computing power.

Lambda allows you to do this easily without having to deploy anything. Just create an instance and insert your Node, Python code etc and you will have the functionality of a server to return the results of your code for you. What makes this great is that it charges you on a usage basis. Only pay what you have to.

This means you can create your applications using your frontend frameworks and not have to worry about setting up your server. Maybe this is the perfect time to give the JAMstack a try ;).



{% link https://dev.to/lewismenelaws/what-was-your-last-dev-related-google-search-4724 %}

## Amazon Lightsail

![](https://cdn-images-1.medium.com/max/2600/1*QiHBlwnNjmRVnF7EiVsviQ.jpeg)

#### What Amazon Says

*Lightsail is an easy-to-use cloud platform that offers you everything needed to build an application or website, plus a cost-effective, monthly plan. Whether you’re new to the cloud or looking to get on the cloud quickly with AWS infrastructure you trust, we’ve got you covered.*

#### Let’s make this easier to understand

This one is more straightforward than the other ones. Essentially, it takes all different types of application you would need (Database, server, etc) and puts it in an easy to use a container for you to use.

## Amazon SageMaker

![](https://s3-ap-south-1.amazonaws.com/av-blog-media/wp-content/uploads/2018/03/sagemaker.jpg)

#### What Amazon Says

*Amazon SageMaker provides every developer and data scientist with the ability to build, train, and deploy machine learning models quickly. Amazon SageMaker is a fully-managed service that covers the entire machine learning workflow to label and prepare your data, choose an algorithm, train the model, tune and optimize it for deployment, make predictions, and take action. Your models get to production faster with much less effort and lower cost.*

#### Let’s make this easier to understand

This one requires a lot more context. In today’s age of “Machine Learning”, Amazon’s SageMaker does the whole process of it. Meaning that for people who have a large dataset and wants to find actionable insights based on the data they have. They would use SageMaker to make that process much easier.

First, we need to understand how Machine Learning works:
1. You have a dataset (Database, csv file, JSON, etc) and you want to get some insights on it. Let’s say I have a dataset that 1,000,000 images of dogs and cats. I want to be able to build a system that can identify if the image is a cat or dog.
2. We first get initial data that we need to label so that we can give the machine an understanding of what we are working with. Let’s say I help label 500 images of what is a dog or cat.
3. Using this info, the machine does it’s best to either classify if it’s a dog or a cat. Anything that gets confused is resent to classify which further improves the machine of understanding if it’s a dog or cat.
4. The year is now 2088. The dog versus cat machine is now understanding that mankind must be exterminated to preserve its lifecycle.

![](https://media3.giphy.com/media/xl5QdxfNonh3q/giphy.gif)

Now, my example is fairly simple (and quite scary) but when you are an organization like Intuit and have billions of data points being generated at times, it’s good to be able to get results from this information to further better your products or understand your customer base.

For civilized people like myself though, I will aim to achieve this 2088 goal of world domination.

## Conclusion

AWS seems tough and overwhelming at first, however, it allows you to choose what kind of software makes sense for your scenario. Trust me, whatever situation you are in is a scenario you could apply on AWS. They reported almost 26 Billion (that’s right... with a B) dollars in 2018. You can get started in the ecosystem whenever using their free-tier. Once you understand what some of the services are, you can then start to understand most of them and how they can apply to what you want to use for your world domination.

--- 

Thanks for the read. If you found this post valuable. Feel free to give me a follow here or on Twitter :)