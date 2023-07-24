var express = require('express');
var router = express.Router();

// Sample data for the table
var data = [
  {
    "ID": "1",
    "title": "DevOps",
    "description": "DevOps is a software development approach that aims to bridge the gap between software development and IT operations. It involves collaboration between development, operations, and other teams to improve the software delivery process. The key principles of DevOps include continuous integration, continuous delivery, automation, and monitoring. The goal is to achieve faster and more reliable software releases by streamlining the development, testing, deployment, and maintenance processes.",
    "reference": "reference"
  },
  {
    "ID": "2",
    "title": "DevSecOps",
    "description": "DevSecOps is an extension of the DevOps philosophy that incorporates security practices throughout the software development lifecycle. It integrates security into the entire development process, ensuring that security measures are not an afterthought but a fundamental aspect of the development and deployment pipeline. The aim is to create a culture of shared responsibility for security and to build secure and resilient applications.",
    "reference": "https://www.vmware.com/au/topics/glossary/content/devsecops.html"
  },
  {
    "ID": "3",
    "title": "Containerization",
    "description": "Containerization is a lightweight virtualization technology that allows developers to package applications and their dependencies together in isolated environments called containers. Containers provide a consistent and portable execution environment, making it easier to deploy applications across different platforms and environments. Docker is one of the most popular containerization platforms",
    "reference": "https://www.docker.com/resources/what-container/"
  },
  {
    "ID": "4",
    "title": "Containers",
    "description": "Containers are lightweight, standalone, and executable software packages that include everything needed to run a piece of software, including the code, runtime, system tools, libraries, and settings. They operate in an isolated manner, enabling consistent behavior regardless of the underlying system or infrastructure. Containers are often used for deploying and running applications efficiently and reliably.",
    "reference": "https://www.docker.com/resources/what-container/"
  },
  {
    "ID": "5",
    "title": "Continuous Integration (CI)",
    "description": "Continuous Integration is a development practice where developers frequently merge their code changes into a shared repository. Each code integration triggers an automated build and test process to detect integration issues early. The main goal is to identify and address problems quickly, ensuring that the codebase is always in a consistent and deployable state.",
    "reference": "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"
  },
  {
    "ID": "6",
    "title": "Continuous Delivery (CD)",
    "description": "Continuous Delivery is an extension of continuous integration where every change that passes the automated tests is automatically deployed to a staging or production environment. The idea is to have a deployment pipeline that automates the process of delivering software, making it easier and less error-prone to release new features and bug fixes.",
    "reference": "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"
  },
  {
    "ID": "7",
    "title": "Infrastructure-as-Code (IaC)",
    "description": "Infrastructure-as-Code is an approach to managing and provisioning infrastructure resources using code or scripts. Instead of manually configuring servers and infrastructure, IaC allows developers and operations teams to define infrastructure configurations in a declarative manner. This approach brings automation, version control, and consistency to the process of setting up and managing infrastructure.",
    "reference": "https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac"
  },
  {
    "ID": "8",
    "title": "Mean Time to Recovery (MTTR)",
    "description": "MTTR is a metric used to measure the average time it takes to restore a system or service to normal operation after a failure or incident. It is an essential indicator of how quickly an organization can recover from unexpected disruptions and maintain business continuity.",
    "reference": "https://www.atlassian.com/incident-management/kpis/common-metrics#:~:text=MTTR%20(mean%20time%20to%20recovery%20or%20mean%20time%20to%20restore,it%20becomes%20fully%20operational%20again."
  },
  {
    "ID": "9",
    "title": "Microservices Architecture",
    "description": "Microservices Architecture is a software development approach where an application is built as a collection of small, independent, and loosely coupled services. Each service represents a specific business functionality and communicates with others through well-defined APIs. This architecture promotes agility, scalability, and maintainability, as different services can be developed, deployed, and scaled independently.",
    "reference": "https://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/"
  },
  {
    "ID": "10",
    "title": "Monolithic Architecture",
    "description": "Monolithic Architecture is an older software design approach where the entire application is developed as a single, interconnected unit. All components and features are tightly coupled within the application, making it harder to scale, modify, and maintain as the application grows.",
    "reference": "https://www.chakray.com/devops-monolithic-architecture-vs-microservices/"
  },
  {
    "ID": "11",
    "title": "Non-Functional Testing",
    "description": "Non-Functional Testing is a type of software testing that focuses on evaluating the performance, usability, security, scalability, and other non-functional aspects of an application. Unlike functional testing, which verifies specific features, non-functional testing aims to assess how well the application meets overall performance and quality requirements.",
    "reference": "https://www.linkedin.com/pulse/functional-vs-non-functional-testing-expert-guide-maine-sacupon/"
  },
  {
    "ID": "12",
    "title": "Source Control",
    "description": "Source Control, also known as version control or revision control, is a system that tracks changes to files and code over time. It allows developers to collaborate, manage codebases, and maintain a history of changes. This system enables teams to work on the same codebase concurrently without conflicts and provides the ability to revert to previous versions if necessary. Git is a popular distributed version control system widely used in the software development industry.",
    "reference": "https://www.atlassian.com/git/tutorials/what-is-version-control"
  }
];


/* GET table page. */
router.get('/', function(req, res, next) {
  res.render('table', { title: 'SIT722 Devops Glossary', data: data });
});

module.exports = router;
