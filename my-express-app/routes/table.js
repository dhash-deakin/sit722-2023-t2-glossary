var express = require("express");
var router = express.Router();

// Sample data for the table
var data = [
  {
    title: "DevOps",
    description:
      "DevOps is a software development approach that aims to bridge the gap between software development and IT operations. It involves collaboration between development, operations, and other teams to improve the software delivery process. The key principles of DevOps include continuous integration, continuous delivery, automation, and monitoring. The goal is to achieve faster and more reliable software releases by streamlining the development, testing, deployment, and maintenance processes.",
    reference:
      "S. Vadapalli, DevOps: Continuous Delivery, Integration, and Deployment with DevOps. Packt Publishing, 2018. ",
  },
  {
    title: "DevSecOps",
    description:
      "DevSecOps is an extension of the DevOps philosophy that incorporates security practices throughout the software development lifecycle. It integrates security into the entire development process, ensuring that security measures are not an afterthought but a fundamental aspect of the development and deployment pipeline. The aim is to create a culture of shared responsibility for security and to build secure and resilient applications.",
    reference:
      "What is devsecops? | DevSecOps vs. DevOps | VMware, https://www.vmware.com/topics/glossary/content/devsecops.html (accessed Sep. 25, 2023). ",
  },
  {
    title: "Containerization",
    description:
      "Containerization is a lightweight virtualization technology that allows developers to package applications and their dependencies together in isolated environments called containers. Containers provide a consistent and portable execution environment, making it easier to deploy applications across different platforms and environments. Docker is one of the most popular containerization platforms",
    reference:
      "What is a container? (no date) Docker. Available at: https://www.docker.com/resources/what-container/ (Accessed: 25 September 2023). ",
  },
  {
    title: "Containers",
    description:
      "Containers are lightweight, standalone, and executable software packages that include everything needed to run a piece of software, including the code, runtime, system tools, libraries, and settings. They operate in an isolated manner, enabling consistent behavior regardless of the underlying system or infrastructure. Containers are often used for deploying and running applications efficiently and reliably.",
    reference:
      "What is a container?,” Docker, https://www.docker.com/resources/what-container/ (accessed Sep. 25, 2023). ",
  },
  {
    title: "Continuous Integration (CI)",
    description:
      "Continuous Integration is a development practice where developers frequently merge their code changes into a shared repository. Each code integration triggers an automated build and test process to detect integration issues early. The main goal is to identify and address problems quickly, ensuring that the codebase is always in a consistent and deployable state.",
    reference:
      "Atlassian, “Continuous Integration vs. delivery vs. deployment,” Atlassian, https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment (accessed Sep. 25, 2023). ",
  },
  {
    title: "Continuous Delivery (CD)",
    description:
      "Continuous Delivery is an extension of continuous integration where every change that passes the automated tests is automatically deployed to a staging or production environment. The idea is to have a deployment pipeline that automates the process of delivering software, making it easier and less error-prone to release new features and bug fixes.",
    reference:
      '"Atlassian, “Continuous Integration vs. delivery vs. deployment", Atlassian, https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment (accessed Sep. 25, 2023). ',
  },
  {
    title: "Infrastructure-as-Code (IaC)",
    description:
      "Infrastructure-as-Code is an approach to managing and provisioning infrastructure resources using code or scripts. Instead of manually configuring servers and infrastructure, IaC allows developers and operations teams to define infrastructure configurations in a declarative manner. This approach brings automation, version control, and consistency to the process of setting up and managing infrastructure.",
    reference:
      '"What is infrastructure as code (IAC)?," Red Hat - We make open source technologies for the enterprise, https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac (accessed Sep. 25, 2023)',
  },
  {
    title: "Mean Time to Recovery (MTTR)",
    description:
      "MTTR is a metric used to measure the average time it takes to restore a system or service to normal operation after a failure or incident. It is an essential indicator of how quickly an organization can recover from unexpected disruptions and maintain business continuity.",
    reference:
      '"Atlassian, “MTBF, MTTR, MTTF, MTTA: Understanding incident metrics", Atlassian, https://www.atlassian.com/incident-management/kpis/common-metrics (accessed Sep. 25, 2023). ',
  },
  {
    title: "Microservices Architecture",
    description:
      "Microservices Architecture is a software development approach where an application is built as a collection of small, independent, and loosely coupled services. Each service represents a specific business functionality and communicates with others through well-defined APIs. This architecture promotes agility, scalability, and maintainability, as different services can be developed, deployed, and scaled independently.",
    reference:
      '"Advantages and disadvantages of microservices architecture", Cloud Academy, https://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/ (accessed Sep. 25, 2023). ',
  },
  {
    title: "Monolithic Architecture",
    description:
      "Monolithic Architecture is an older software design approach where the entire application is developed as a single, interconnected unit. All components and features are tightly coupled within the application, making it harder to scale, modify, and maintain as the application grows.",
    reference:
      "Chakray, “DevOps: Monolithic architecture vs microservices,” Chakray, https://www.chakray.com/devops-monolithic-architecture-vs-microservices/ (accessed Oct. 8, 2023). ",
  },
  {
    title: "Non-Functional Testing",
    description:
      "Non-Functional Testing is a type of software testing that focuses on evaluating the performance, usability, security, scalability, and other non-functional aspects of an application. Unlike functional testing, which verifies specific features, non-functional testing aims to assess how well the application meets overall performance and quality requirements.",
    reference:
      "S. Dubey, “Functional testing vs non-functional testing,” Mobile App Testing Continuous Testing Cloud Mobile Testing Tools Functional Testing vs NonFunctional Testing Comments, https://www.pcloudy.com/functional-testing-vs-non-functional-testing/ (accessed Oct. 8, 2023). ",
  },
  {
    title: "Source Control",
    description:
      "Source Control, also known as version control or revision control, is a system that tracks changes to files and code over time. It allows developers to collaborate, manage codebases, and maintain a history of changes. This system enables teams to work on the same codebase concurrently without conflicts and provides the ability to revert to previous versions if necessary. Git is a popular distributed version control system widely used in the software development industry.",
    reference:
      "Atlassian, “What is version control: Atlassian Git Tutorial,” Atlassian, https://www.atlassian.com/git/tutorials/what-is-version-control (accessed Oct. 8, 2023). ",
  },
  {
    title: "Serverless Computing",
    description:
      "Serverless is a cloud computing model that allows developers to build and deploy applications without the need to manage or provision servers explicitly. In a traditional server-based architecture, developers are responsible for setting up and maintaining the servers that run their applications. In a serverless model, this server management complexity is abstracted away.",
    reference:
      "“What is serverless?,” Red Hat - We make open source technologies for the enterprise, https://www.redhat.com/en/topics/cloud-native-apps/what-is-serverless (accessed Oct. 8, 2023). ",
  },
  {
    title: "Open Source",
    description:
      "Open source refers to a software development approach that emphasizes transparency, collaboration, and the sharing of source code. In open source projects, the source code of a software program is made freely available to the public, allowing anyone to view, modify, distribute, and contribute to the codebase. This approach is in contrast to proprietary or closed-source software, where the source code is kept private and controlled by the organization or individual that developed it.",
    reference: "  Opensource.com, “What is open source?,” Opensource.com, https://opensource.com/resources/what-open-source (accessed Oct. 8, 2023). ",
  },
  {
    title: "AWS",
    description:
      "AWS, or Amazon Web Services, is a comprehensive and widely used cloud computing platform provided by Amazon. It offers a broad set of cloud services that enable businesses, individuals, and organizations to build and deploy various applications, websites, and services without the need to invest in physical hardware or manage complex infrastructure.",
    reference: "  N. Barney and A. S. Gillis, “What is AWS (Amazon Web Services) and how does it work?,” SearchAWS, https://www.techtarget.com/searchaws/definition/Amazon-Web-Services (accessed Sep. 8, 2023). ",
  },
  {
    title: "Azure",
    description:
      "Azure, often referred to as Microsoft Azure, is a cloud computing platform and set of services provided by Microsoft. Similar to Amazon Web Services (AWS), Azure offers a wide range of cloud services that allow users to build, deploy, and manage applications and services without the need for on-premises hardware and infrastructure.",
    reference: "  S. J. Bigelow, “What is Microsoft Azure and how does it work?,” Cloud Computing, https://www.techtarget.com/searchcloudcomputing/definition/Windows-Azure (accessed Oct. 8, 2023). ",
  },
  {
    title: "Database",
    description:
      "A database is a structured collection of data that is organized and stored in a way that allows for efficient retrieval, manipulation, and management of information. Databases are used to store a wide range of data, from simple text and numbers to complex multimedia files, and they play a crucial role in various applications and systems, including websites, business applications, scientific research, and more.",
    reference: "  “What is a database?,” What Is a Database | Oracle Australia, https://www.oracle.com/au/database/what-is-database/ (accessed Oct. 8, 2023). ",
  },
  {
    title: "YAML",
    description:
      'YAML (short for "YAML Ain\'t Markup Language" or "Yet Another Markup Language") is a human-readable data serialization format. It\'s often used for configuration files and data exchange between applications and systems. YAML is designed to be easy for both humans to read and write, and for machines to parse and generate.',
    reference: "  “What is YAML?,” Red Hat - We make open source technologies for the enterprise, https://www.redhat.com/en/topics/automation/what-is-yaml (accessed Oct. 8, 2023). ",
  },
  {
    title: "Grafana",
    description:
      "Grafana is an open-source platform for monitoring and observability, specifically focused on visualizing time-series data. It is commonly used to create interactive and customizable dashboards that display real-time and historical data from various sources, such as monitoring systems, databases, cloud platforms, and other data repositories.",
    reference: "  “Grafana OSS: Leading Observability Tool for Visualizations &amp; Dashboards,” Grafana Labs, https://grafana.com/oss/grafana/ (accessed Oct. 8, 2023). ",
  },
  {
    title: "Staging",
    description:
      'In software development, "staging" refers to an environment that replicates the production environment but is used for testing and quality assurance purposes before releasing new code or changes to the live production system. The staging environment is an intermediary step between development and production, where software changes are thoroughly tested and validated before being deployed to the actual users.',
    reference: "  T. Mylonas, “What are environments in software development? A guide to the development, beta, and production environments.,” Codebots, https://codebots.com/app-development/what-are-environments-in-software-development-a-guide-to-the-development-beta-and-production-environments (accessed Oct. 8, 2023). ",
  },
  {
    title: "API",
    description:
      'API stands for "Application Programming Interface." It is a set of rules, protocols, and tools that allow different software applications to communicate and interact with each other. APIs define the methods and data structures that developers can use to build and integrate software components and services.',
    reference: "  “What is an application programming interface (API)?,” IBM, https://www.ibm.com/topics/api (accessed Oct. 8, 2023). ",
  },
  {
    title: "Shell",
    description:
      "Shell scripting refers to the process of creating and writing scripts using a shell scripting language to automate and execute a series of commands in a command-line interface (shell). The shell is a command-line interface that allows users to interact with an operating system by entering text commands. Shell scripts are used to automate tasks, execute system commands, and perform various operations without the need for manual input.",
    reference: "  Z. Hira, “Shell scripting for beginners – how to write bash scripts in linux,” freeCodeCamp.org, https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux/ (accessed Oct. 8, 2023). ",
  },

  {
    title: "Public Cloud",
    description:
      "A public cloud is a type of cloud computing deployment where cloud resources, such as servers and storage, are owned and operated by a third-party cloud service provider. hardware, software, and supporting infrastructure are managed by the cloud provider. Users access services and manage their accounts via the internet using a web browser. Public clouds are cost-effective as users pay only for the services they use, and there's no need to purchase or maintain hardware or software. Examples of public clouds include Microsoft Azure.",
    reference:
      "Public Cloud vs Private Cloud vs Hybrid Cloud | Microsoft Azure, https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-private-public-hybrid-clouds (accessed Aug. 8, 2023).",
  },
  {
    title: "Private Cloud",
    description:
      "A private cloud is a cloud computing environment exclusively used by one organization. It can be physically located on an organization's premises or hosted by a third-party provider but operates on a private network. The hardware and software in a private cloud are dedicated solely to the organization, providing more control and privacy. Private clouds are often chosen by government agencies, financial institutions, and large organizations with strict control requirements. They offer greater flexibility and scalability compared to on-premises infrastructure.",
    reference:
      "Public Cloud vs Private Cloud vs Hybrid Cloud | Microsoft Azure, https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-private-public-hybrid-clouds (accessed Aug. 8, 2023).",
  },
  {
    title: "Hybrid Cloud",
    description:
      "A hybrid cloud is a cloud computing model that combines both on-premises infrastructure (private cloud) and public cloud resources. It allows data and applications to move between these two environments as needed. Organizations opt for hybrid clouds for various reasons, such as meeting regulatory requirements, leveraging existing on-premises investments, or addressing low-latency needs. Hybrid clouds are evolving to include edge computing, bringing cloud computing capabilities closer to IoT devices to reduce latency and enable offline operation. The advantages of a hybrid cloud include flexibility, more deployment options, cost-effectiveness, and ease of transitioning to the cloud gradually.",
    reference:
      "Public Cloud vs Private Cloud vs Hybrid Cloud | Microsoft Azure, https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-private-public-hybrid-clouds (accessed Aug. 8, 2023).",
  },
  {
    title: "Agile",
    description:
      "Agile is a philosophy and set of principles for software development that prioritizes flexibility, collaboration, customer feedback, and iterative progress. It is a way of approaching software development that aims to deliver value to customers faster and more efficiently while adapting to changing requirements and circumstances.",
    reference:
      "Azure DevOps | Microsoft Learn, https://learn.microsoft.com/en-us/devops/plan/what-is-agile (accessed Oct. 8, 2023).",
  },
  {
    title: "Monitoring and Logging",
    description:
      "DevOps monitoring and logging are crucial practices that provide real-time visibility and data insights into the performance and behavior of software applications and systems. Monitoring allows teams to track key metrics and detect issues promptly, while logging records detailed information about system events and errors. Together, they enable proactive issue resolution, performance optimization, and informed decision-making in the DevOps workflow.",
    reference:
      "J. McGee, “DevOps: Monitoring and logging explained,” Medium, https://medium.com/@mcgeejasond/devops-monitoring-and-logging-explained-939c3b5e17c4 (accessed Sep. 8, 2023).",
  },
  {
    title: "Docker Compose",
    description:
      "Docker Compose is a tool used for defining and running multi-container Docker applications. It allows you to describe the different services, networks, and volumes required for your application in a single YAML file called a 'docker-compose.yml' file. With Docker Compose, you can define the configuration of all the containers that make up your application, their dependencies, and how they should interact with each other.",
    reference:
      "Docker Documentation, https://docs.docker.com/compose/ (accessed Sep. 8, 2023).",
  },
  {
    title: "RabbitMQ",
    description:
      "RabbitMQ is an open-source message broker software that facilitates communication between different software applications, systems, or components, often in distributed and decoupled architectures. It is designed to handle messaging or message queuing, which is a method of asynchronous communication, allowing various parts of an application to communicate by sending and receiving messages.",
    reference:
      "RabbitMQ, https://www.rabbitmq.com/documentation.html (accessed Sep. 8, 2023).",
  },
  {
    title: "Terraform",
    description:
      "Terraform is an open-source infrastructure as code (IaC) tool developed by HashiCorp. It is used for defining, provisioning, and managing infrastructure resources and services in a declarative and version-controlled manner. Terraform enables you to define your infrastructure in a human-readable configuration file and then automatically create, update, or delete the resources based on that configuration.",
    reference:
      "Terraform | HashiCorp Developer, https://developer.hashicorp.com/terraform/intro (accessed Oct. 8, 2023).",
  },
  {
    title: "DevOps Automation",
    description:
      "DevOps automation means using technology to make the work of developing and managing software easier and faster. It involves tools and processes that help teams work together more smoothly. By automating tasks like updating code and setting up computer servers, DevOps automation allows changes to be made to software more quickly and with fewer errors. This helps software development and operations teams collaborate better and deliver updates to applications faster. In simpler terms, it's like using robots to do some of the work so that software can be improved and released more efficiently.",
    reference:
      "“What is devops automation?,” Red Hat - We make open source technologies for the enterprise, https://www.redhat.com/en/topics/automation/what-is-devops-automation (accessed Oct. 8, 2023). ",
  },
  {
    title: "Asynchronous Communication",
    description:
      "Asynchronous communication is a method of communication where the sender and receiver do not need to interact with each other simultaneously. In asynchronous communication, the sender can send a message or request, and the receiver processes it independently, without the need for an immediate response. This approach contrasts with synchronous communication, where both parties need to be actively engaged in the communication at the same time.",
    reference:
      "“How to embrace asynchronous communication for remote work,” GitLab, https://about.gitlab.com/company/culture/all-remote/asynchronous/ (accessed Oct. 8, 2023). ",
  },
  {
    title: "Integration Testing",
    description:
      "Integration testing is a software testing methodology that focuses on verifying the interactions and interfaces between different components, modules, or services of a software application. The goal of integration testing is to ensure that these individual components work correctly when combined and interact with each other as expected within the larger system.",
    reference:
      "  Katalon, “What is integration testing? definition, examples, how-to,” katalon.com, https://katalon.com/resources-center/blog/integration-testing (accessed Oct. 8, 2023). ",
  },
  {
    title: "Unit Testing",
    description:
      "Unit testing is a software testing technique in which individual components or units of a software application are tested in isolation to ensure that they perform as expected. The primary goal of unit testing is to validate the correctness of each unit of code (usually a function or method) in isolation from the rest of the application. It helps identify and fix bugs and issues at an early stage of development, promoting software quality and maintainability.",
    reference:
      "  “What is unit testing? definition from whatis.com,” Software Quality, https://www.techtarget.com/searchsoftwarequality/definition/unit-testing (accessed Oct. 8, 2023). ",
  },
  {
    title: "Jest",
    description:
      "Jest is a JavaScript testing framework that is commonly used for unit testing and other types of testing in JavaScript applications. It provides a simple and intuitive way to write and run tests for your code. Jest is known for its speed and ease of use, making it a popular choice among developers for testing JavaScript code.",
    reference: "“Jest,” Jest RSS, https://jestjs.io/ (accessed Oct. 8, 2023). ",
  },
  {
    title: "Blue-Green Deployment",
    description:
      "Blue-green deployment is a software release strategy and deployment technique used in DevOps and continuous delivery practices. It aims to minimize downtime and reduce the risk associated with deploying new versions of an application or service by maintaining two identical environments, referred to as 'blue' and 'green.' This approach allows for safe and efficient updates and rollbacks.",
    reference:
      "“Whitepapers,” Amazon, https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/bluegreen-deployments.html (accessed Oct. 8, 2023). ",
  },
  {
    title: "Domain-Driven Design (DDD)",
    description:
      "Domain-Driven Design (DDD) is an approach to software development and architecture that focuses on creating a deep understanding of the business domain within which a software application operates. It was introduced by Eric Evans in his book 'Domain-Driven Design: Tackling Complexity in the Heart of Software' and has since gained popularity as a methodology for building complex, large-scale applications.",
    reference:
      "Kexugit, “Best practice - an introduction to domain-driven design,” Microsoft Learn, https://learn.microsoft.com/en-us/archive/msdn-magazine/2009/february/best-practice-an-introduction-to-domain-driven-design (accessed Oct. 8, 2023). ",
  },
  {
    title: "Load Balancing",
    description:
      "Load balancing is the practice of distributing incoming network traffic or requests across multiple servers or resources to ensure efficient utilization, prevent overloading, and improve the availability and reliability of applications. It plays a crucial role in optimizing application performance and ensuring a seamless user experience.",
    reference: "D. Tomar, “Load balancing 101 ⚖️: Achieving scalability and high availability 🤹🏻‍♀️,” DEV Community, https://dev.to/devangtomar/load-balancing-101-achieving-scalability-and-high-availability-2pd9 (accessed Oct. 8, 2023). ",
  },
  {
    title: "High Availability (HA)",
    description:
      "High Availability refers to a system or application's ability to remain operational and accessible even in the face of hardware failures, software errors, or other disruptions, often achieved through redundancy and failover mechanisms. HA is essential for mission-critical applications that require uninterrupted service availability.",
    reference: "B. Lutkevich and A. S. Gillis, “What is high availability? - definition from whatis.com,” Data Center, https://www.techtarget.com/searchdatacenter/definition/high-availability (accessed Oct. 8, 2023). ",
  },
  {
    title: "ELK Stack (Elasticsearch, Logstash, Kibana)",
    description:
      "The ELK Stack is a set of open-source tools used for log and data analytics. Elasticsearch is a search and analytics engine, Logstash is a data processing pipeline, and Kibana is a visualization and management platform. Together, they provide a comprehensive solution for collecting, processing, and visualizing log data, aiding in troubleshooting and performance analysis.",
    reference: "“What Is ELK Stack,” Amazon, https://aws.amazon.com/what-is/elk-stack/ (accessed Oct. 8, 2023). ",
  },
  {
    title: "Metrics",
    description:
      "Metrics are quantitative measurements or data points used to assess the performance, behavior, or health of systems, applications, or processes. They are crucial for monitoring and troubleshooting, providing actionable insights into system behavior and performance trends.",
    reference: "“What are the three pillars of Observability? - crowdstrike,” crowdstrike.com, https://www.crowdstrike.com/cybersecurity-101/observability/three-pillars-of-observability/ (accessed Oct. 8, 2023). ",
  },
  {
    title: "Orchestration",
    description:
      "Orchestration is the automated coordination and management of multiple tasks, services, or containers to achieve a specific workflow or outcome, often used in the context of deploying and managing microservices or containers. It simplifies complex processes and ensures consistency in application deployments and scaling.",
    reference: "A. Gupta, “Microservice orchestration,” LinkedIn, https://www.linkedin.com/pulse/microservice-orchestration-anubhav-gupta (accessed Oct. 8, 2023). ",
  },
  {
    title: "Service Level Agreement (SLA)",
    description:
      "A Service Level Agreement is a formal agreement between a service provider and a customer that defines the expected level of service, including performance metrics, availability, and response times. SLAs establish clear expectations and responsibilities, ensuring accountability and service quality.",
    reference: "Failover is the process of automatically switching from a failed or inactive system or component to a backup or redundant system to ensure uninterrupted operation and minimize downtime. Failover mechanisms are critical for maintaining service continuity and reliability in the event of failures.",
  },
  {
    title: "Failover",
    description:
      "Failover is the process of automatically switching from a failed or inactive system or component to a backup or redundant system to ensure uninterrupted operation and minimize downtime. Failover mechanisms are critical for maintaining service continuity and reliability in the event of failures.",
    reference: "A. Marget, “Failover: What it is and its importance in business continuity,” Unitrends, https://www.unitrends.com/blog/failover (accessed Oct. 8, 2023). ",
  },
  {
    title: "Incident Management",
    description:
      "Incident Management is a set of processes and activities aimed at identifying, responding to, and resolving incidents or disruptions in an organization's IT environment, often following predefined protocols. Effective incident management minimizes service disruptions and restores normal operations swiftly.",
    reference: "“What is incident management?,” ServiceNow, https://www.servicenow.com/products/itsm/what-is-incident-management.html (accessed Oct. 8, 2023). ",
  },
  {
    title: "Artifact Repository",
    description:
      "An Artifact Repository is a centralized storage location for managing and storing software artifacts, libraries, dependencies, and other components used in the software development and deployment process. It simplifies version control and ensures consistency in software distribution and deployment.",
    reference: "“What is an artifact repository?: Teamcity CI/CD guide,” JetBrains, https://www.jetbrains.com/teamcity/ci-cd-guide/concepts/artifact-repository/ (accessed Oct. 8, 2023). ",
  },
  {
    title: "Immutable Infrastructure",
    description:
      "Immutable Infrastructure is an approach where infrastructure components are never modified after creation. Instead, updates are made by replacing existing instances with new ones, promoting consistency and reliability. Immutable infrastructure minimizes configuration drift and simplifies maintenance.",
    reference: "H. Vird&amp;oacute;, “What is immutable infrastructure?,” DigitalOcean, https://www.digitalocean.com/community/tutorials/what-is-immutable-infrastructure (accessed Oct. 8, 2023). ",
  },
  {
    title: "Kubectl",
    description:
      "Kubectl is a command-line tool used for interacting with Kubernetes clusters. It allows users to manage and control containerized applications and resources in a Kubernetes environment. With Kubectl, administrators can deploy, scale, and monitor containerized workloads efficiently.",
    reference: "“Command line tool (kubectl),” Kubernetes, https://kubernetes.io/docs/reference/kubectl/ (accessed Oct. 8, 2023). ",
  },
  {
    title: "Azure CLI",
    description:
      "azurecli is a command-line interface (CLI) tool provided by Microsoft Azure for managing Azure resources and services. It allows users to interact with and automate tasks related to Azure cloud services. azurecli simplifies Azure resource provisioning, configuration, and management.",
    reference: "Dbradish-Microsoft, “Azure Command-Line Interface (CLI) - overview,” Azure Command-Line Interface (CLI) - Overview | Microsoft Learn, https://learn.microsoft.com/en-us/cli/azure/ (accessed Oct. 8, 2023). ",
  },
  {
    title: "Anthos",
    description:
      "Anthos is a hybrid and multi-cloud platform developed by Google Cloud. It provides a set of tools and services for building, deploying, and managing applications across various cloud environments, including on-premises data centers, Google Cloud Platform (GCP), and other major public cloud providers like Amazon Web Services (AWS) and Microsoft Azure. Anthos is designed to enable organizations to modernize their applications, enhance operational efficiency, and maintain consistency across different cloud and on-premises environments.",
    reference: "“Anthos Powers Enterprise Container platforms&nbsp; |&nbsp; google cloud,” Google, https://cloud.google.com/anthos/ (accessed Oct. 8, 2023). ",
  },
];

/* GET table page. */
router.get("/", function (req, res, next) {
  res.render("table", { title: "SIT722 Devops Glossary", data: data });
});

module.exports = router;
