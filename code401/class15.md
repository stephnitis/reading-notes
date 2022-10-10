# AWS: Cloud Servers

## [AWS EC2](https://aws.amazon.com/ec2/)

### 1. What is an EC2 Instance?

An Amazon EC2 instance is a virtual server in Amazon's Elastic Compute Cloud (EC2) for running applications on the Amazon Web Services (AWS) infrastructure.

### 2. Name 2 use cases for EC2.

1. Run cloud-native and enterprise applications. Amazon EC2 delivers secure, reliable, high-performance, and cost-effective compute infrastructure to meet demanding business needs.
2. Scale for HPC applications. Access the on-demand infrastructure and capacity you need to run HPC applications faster and cost-effectively.

### 3. Provide 1 reason to use ECS instead of Heroku.

- Heroku can meet low computational demands, whereas AWS can meet high/very high computational demands. & Comparatively, Heroku supports fewer Geographical Regions.

## [EC2 For Humans](https://www.youtube.com/watch?v=lZMkgOMYYIg)

### 1. Where can we find EC2 on the AWS Console?

Under Compute on the AWS Services page.

### 2. Explain the general difference between T2 Micro and XL.

- T2 micro is a type that is adequate for low to moderate network perfromance, while XL is designed to handle higher loads of network performance.

### 3. Explain a “Compute Cycle” to a non-technical friend.

Compute cycles measure how much processing time your applications require on The Rackspace Cloud.

## [Elastic Beanstalk](https://www.youtube.com/watch?v=SrwxAScdyT0)

### 1. What is Elastic Beanstalk?

Elastic Beanstalk is a service for deploying and scaling web applications and services. Upload your code and Elastic Beanstalk automatically handles the deployment—from capacity provisioning, load balancing, and auto scaling to application health monitoring.

### 2. Describe the relationship between EC2 and Elastic Beanstalk.

Elastic Beanstalk is one layer of abstraction away from the EC2 layer. Elastic Beanstalk will setup an "environment" for you that can contain a number of EC2 instances, an optional database, as well as a few other AWS components such as a Elastic Load Balancer, Auto-Scaling Group, Security Group

### 3. Name some benefits of using Elastic Beanstalk.

Elastic Beanstalk's main benefits include timesaving server configuration, powerful customization, and a cost-effective price point.

[Virtual Machines](https://www.youtube.com/watch?v=yIVXjl4SwVo)
[VMS and the Cloud](https://www.youtube.com/watch?v=l0DfHUWMjsU)