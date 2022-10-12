# AWS: Events

## [AWS SQS vs SNS](https://medium.com/awesome-cloud/aws-difference-between-sqs-and-sns-61a397bf76c5)

### 1. What is the difference betweeen SQS and SNS?

SNS is a distributed publish-subscribe service. It is a fast, flexible, fully managed push notification service that lets you send individual messages or to bulk messages to large numbers of recipients. Messages are pushed to subscribers as and when they are sent by publishers to SNS. No persistence. Whichever consumer is present at the time of message arrival, get the message and the message is deleted. If no consumers available then the message is lost. All the consumers are (supposed to be) processing the messages in different ways.

SQS is distributed queuing service. It is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. Messages are not pushed to receivers. Receivers have to poll SQS to receive messages. Messages can be stored in SQS for short duration of time (max 14 days). All the consumers are supposed to be identical and hence process the messages in exact same way.

### 2. What are some use cases for both SNS and SQS?

Choose SNS if:

- You would like to be able to publish and consume batches of messages.
- You would like to allow same message to be processed in multiple ways.
- Multiple subscribers are needed.

Choose SQS if:

- You need a simple queue with no particular additional requirements.
- Decoupling two applications and allowing parallel asynchronous processing.
- Only one subscriber is needed.

## [AWS SNS and SQS](https://www.youtube.com/watch?v=mXk0MNjlO7A)

### 1. Describe how to use SQS and SNS in a “fanout” pattern

Publishing messages on a topic to many subscribers. Fan-out is a messaging pattern where messages are broadcast in a one-to-many arrangement. A basic example of this pattern can be seen in the functionality of a Publish/Subscribe messaging system, as Pub/Sub implies the ability to route messages from a single sender to multiple receivers.

### 2. Explain how “push notifications” work, using SNS

Push notifications look like SMS text messages and mobile alerts, but they only reach users who have installed your app. Notifications are delivered to clients using a “push” mechanism that eliminates the need to periodically check or “poll” for new information and updates. Push notification messages sent to a mobile endpoint can appear in the mobile app as message alerts, badge updates, or even sound alerts.

Push notification services, such as APNs and FCM, maintain a connection with each app and associated mobile device registered to use their service. When an app and mobile device register, the push notification service returns a device token. Amazon SNS uses the device token to create a mobile endpoint, to which it can send direct push notification messages. In order for Amazon SNS to communicate with the different push notification services, you submit your push notification service credentials to Amazon SNS to be used on your behalf.

## [SQS and SNS Basics](https://www.youtube.com/watch?v=UesxWuZMZqI)

### 1. How might a large scale, distributed application make use of a Queue system like SQS?

Developers use SQS to build distributed applications with decoupled components without having to deal with the overhead of creating and maintaining message queues. Amazon Simple Queue Service supports tasks that process asynchronously. Instead of one application having to invoke another application directly, the service enables an application to submit a message to a queue, which another application can then pick up at a later time.

[SNS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)
[SQS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html)
