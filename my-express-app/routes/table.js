var express = require('express');
var router = express.Router();

// Sample data for the table
var data =
[
  {
    "title": "DevOps",
    "description": "DevOps is a software development approach that aims to bridge the gap between software development and IT operations. It involves collaboration between development, operations, and other teams to improve the software delivery process. The key principles of DevOps include continuous integration, continuous delivery, automation, and monitoring. The goal is to achieve faster and more reliable software releases by streamlining the development, testing, deployment, and maintenance processes.",
    "reference": "S. Vadapalli, DevOps: Continuous Delivery, Integration, and Deployment with DevOps. Packt Publishing, 2018. "
  },
  {
    "title": "DevSecOps",
    "description": "DevSecOps is an extension of the DevOps philosophy that incorporates security practices throughout the software development lifecycle. It integrates security into the entire development process, ensuring that security measures are not an afterthought but a fundamental aspect of the development and deployment pipeline. The aim is to create a culture of shared responsibility for security and to build secure and resilient applications.",
    "reference": "What is devsecops? | DevSecOps vs. DevOps | VMware, https://www.vmware.com/topics/glossary/content/devsecops.html (accessed Sep. 25, 2023). "
  },
  {
    "title": "Containerization",
    "description": "Containerization is a lightweight virtualization technology that allows developers to package applications and their dependencies together in isolated environments called containers. Containers provide a consistent and portable execution environment, making it easier to deploy applications across different platforms and environments. Docker is one of the most popular containerization platforms",
    "reference": "What is a container? (no date) Docker. Available at: https://www.docker.com/resources/what-container/ (Accessed: 25 September 2023). "
  },
  {
    "title": "Containers",
    "description": "Containers are lightweight, standalone, and executable software packages that include everything needed to run a piece of software, including the code, runtime, system tools, libraries, and settings. They operate in an isolated manner, enabling consistent behavior regardless of the underlying system or infrastructure. Containers are often used for deploying and running applications efficiently and reliably.",
    "reference": "What is a container?,” Docker, https://www.docker.com/resources/what-container/ (accessed Sep. 25, 2023). "
  },
  {
    "title": "Continuous Integration (CI)",
    "description": "Continuous Integration is a development practice where developers frequently merge their code changes into a shared repository. Each code integration triggers an automated build and test process to detect integration issues early. The main goal is to identify and address problems quickly, ensuring that the codebase is always in a consistent and deployable state.",
    "reference": "Atlassian, “Continuous Integration vs. delivery vs. deployment,” Atlassian, https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment (accessed Sep. 25, 2023). "
  },
  {
    "title": "Continuous Delivery (CD)",
    "description": "Continuous Delivery is an extension of continuous integration where every change that passes the automated tests is automatically deployed to a staging or production environment. The idea is to have a deployment pipeline that automates the process of delivering software, making it easier and less error-prone to release new features and bug fixes.",
    "reference": "\"Atlassian, “Continuous Integration vs. delivery vs. deployment\", Atlassian, https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment (accessed Sep. 25, 2023). "
  },
  {
    "title": "Infrastructure-as-Code (IaC)",
    "description": "Infrastructure-as-Code is an approach to managing and provisioning infrastructure resources using code or scripts. Instead of manually configuring servers and infrastructure, IaC allows developers and operations teams to define infrastructure configurations in a declarative manner. This approach brings automation, version control, and consistency to the process of setting up and managing infrastructure.",
    "reference": "\"What is infrastructure as code (IAC)?,\" Red Hat - We make open source technologies for the enterprise, https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac (accessed Sep. 25, 2023)"
  },
  {
    "title": "Mean Time to Recovery (MTTR)",
    "description": "MTTR is a metric used to measure the average time it takes to restore a system or service to normal operation after a failure or incident. It is an essential indicator of how quickly an organization can recover from unexpected disruptions and maintain business continuity.",
    "reference": "\"Atlassian, “MTBF, MTTR, MTTF, MTTA: Understanding incident metrics\", Atlassian, https://www.atlassian.com/incident-management/kpis/common-metrics (accessed Sep. 25, 2023). "
  },
  {
    "title": "Microservices Architecture",
    "description": "Microservices Architecture is a software development approach where an application is built as a collection of small, independent, and loosely coupled services. Each service represents a specific business functionality and communicates with others through well-defined APIs. This architecture promotes agility, scalability, and maintainability, as different services can be developed, deployed, and scaled independently.",
    "reference": "\"Advantages and disadvantages of microservices architecture\", Cloud Academy, https://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/ (accessed Sep. 25, 2023). "
  },
  {
    "title": "Monolithic Architecture",
    "description": "Monolithic Architecture is an older software design approach where the entire application is developed as a single, interconnected unit. All components and features are tightly coupled within the application, making it harder to scale, modify, and maintain as the application grows.",
    "reference": "https://www.chakray.com/devops-monolithic-architecture-vs-microservices/"
  },
  {
    "title": "Non-Functional Testing",
    "description": "Non-Functional Testing is a type of software testing that focuses on evaluating the performance, usability, security, scalability, and other non-functional aspects of an application. Unlike functional testing, which verifies specific features, non-functional testing aims to assess how well the application meets overall performance and quality requirements.",
    "reference": "https://www.linkedin.com/pulse/functional-vs-non-functional-testing-expert-guide-maine-sacupon/"
  },
  {
    "title": "Source Control",
    "description": "Source Control, also known as version control or revision control, is a system that tracks changes to files and code over time. It allows developers to collaborate, manage codebases, and maintain a history of changes. This system enables teams to work on the same codebase concurrently without conflicts and provides the ability to revert to previous versions if necessary. Git is a popular distributed version control system widely used in the software development industry.",
    "reference": "https://www.atlassian.com/git/tutorials/what-is-version-control"
  },
  {
    "title": "Serverless Computing",
    "description": "Serverless is a cloud computing model that allows developers to build and deploy applications without the need to manage or provision servers explicitly. In a traditional server-based architecture, developers are responsible for setting up and maintaining the servers that run their applications. In a serverless model, this server management complexity is abstracted away.",
    "reference": "https://www.redhat.com/en/topics/cloud-native-apps/what-is-serverless"
  },
  {
    "title": "Open Source",
    "description": "Open source refers to a software development approach that emphasizes transparency, collaboration, and the sharing of source code. In open source projects, the source code of a software program is made freely available to the public, allowing anyone to view, modify, distribute, and contribute to the codebase. This approach is in contrast to proprietary or closed-source software, where the source code is kept private and controlled by the organization or individual that developed it.",
    "reference": "https://opensource.com/resources/what-open-source"
  },
  {
    "title": "AWS",
    "description": "AWS, or Amazon Web Services, is a comprehensive and widely used cloud computing platform provided by Amazon. It offers a broad set of cloud services that enable businesses, individuals, and organizations to build and deploy various applications, websites, and services without the need to invest in physical hardware or manage complex infrastructure.",
    "reference": ""
  },
  {
    "title": "Azure",
    "description": "Azure, often referred to as Microsoft Azure, is a cloud computing platform and set of services provided by Microsoft. Similar to Amazon Web Services (AWS), Azure offers a wide range of cloud services that allow users to build, deploy, and manage applications and services without the need for on-premises hardware and infrastructure.",
    "reference": ""
  },
  {
    "title": "Database",
    "description": "A database is a structured collection of data that is organized and stored in a way that allows for efficient retrieval, manipulation, and management of information. Databases are used to store a wide range of data, from simple text and numbers to complex multimedia files, and they play a crucial role in various applications and systems, including websites, business applications, scientific research, and more.",
    "reference": ""
  },
  {
    "title": "YAML",
    "description": "YAML (short for \"YAML Ain't Markup Language\" or \"Yet Another Markup Language\") is a human-readable data serialization format. It's often used for configuration files and data exchange between applications and systems. YAML is designed to be easy for both humans to read and write, and for machines to parse and generate.",
    "reference": ""
  },
  {
    "title": "Grafana",
    "description": "Grafana is an open-source platform for monitoring and observability, specifically focused on visualizing time-series data. It is commonly used to create interactive and customizable dashboards that display real-time and historical data from various sources, such as monitoring systems, databases, cloud platforms, and other data repositories.",
    "reference": ""
  },
  {
    "title": "Staging",
    "description": "In software development, \"staging\" refers to an environment that replicates the production environment but is used for testing and quality assurance purposes before releasing new code or changes to the live production system. The staging environment is an intermediary step between development and production, where software changes are thoroughly tested and validated before being deployed to the actual users.",
    "reference": ""
  },
  {
    "title": "API",
    "description": "API stands for \"Application Programming Interface.\" It is a set of rules, protocols, and tools that allow different software applications to communicate and interact with each other. APIs define the methods and data structures that developers can use to build and integrate software components and services.",
    "reference": ""
  },
  {
    "title": "Shell",
    "description": "Shell scripting refers to the process of creating and writing scripts using a shell scripting language to automate and execute a series of commands in a command-line interface (shell). The shell is a command-line interface that allows users to interact with an operating system by entering text commands. Shell scripts are used to automate tasks, execute system commands, and perform various operations without the need for manual input.",
    "reference": ""
  }
];

/* GET table page. */
router.get('/', function(req, res, next) {
  res.render('table', { title: 'SIT722 Devops Glossary', data: data });
});

module.exports = router;
