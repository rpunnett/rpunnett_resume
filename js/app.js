(function() {
  var app = angular.module('resume', []);

  app.controller('ResumeController', function() {
    this.jobs = experience;
    this.education = schools;
    this.name = "Robert Punnett";
    this.title = "Robert Punnett Resume";
    this.contact = [{
    email: 'RobertPunnett@outlook.com',
    linkedin: "https://www.linkedin.com/in/punnettr",
    github: "https://github.com/rpunnett",
    stackoverflow: "https://stackoverflow.com/users/3279468/robert",
    website: "www.RobertPunnett.com",
  }];
  });


  var experience = [{
    companyName: 'Norfolk Southern',
    title: "PC/LAN Administrator",
    startDate: "March 2013",
    endDate: "Current",
    experience: [
      "Break/fix resolution and prevention, software installs, single/mass deployments, software/hardware upgrades, virus/malware removal, hardwire/Wi-Fi network connectivity and general repair on PCs, Printers, and Mobile Devices ",
      "Image, configure, upgrade and deploy computers using Windows MDT and Ghost",
      "Assisted in large scale roll out of Windows 7 with attention to detail in client requirements and satisfaction",
      "Assist other teams as needed in projects such as Wake-on-LAN, large scale software deployments and GPO",
      "Designed, coded and deployed an asset management system using a web-based front-end and a PowerShell/C# back-end to automate the collection and increase the manageability of asset information for individual teams, vastly increasing maintenance and reporting capability for managers and bringing together separate divisions to unify processes",
      "Wrote a large repository of scripts using Batch, Visual Basic and PowerShell designed to automate common and complex tasks, such as automated one-click installs, issue prevention and data migration",
      "Created internal documentation on software, hardware and processes on a team and department level",
      "Researched and led a project for a department wide knowledge-base to streamline the process of retaining, creating and accessing relevant information "
    ]
  }, {
   	companyName: 'Wandering WiFi',
    title: "Telecommunications Manager",
    startDate: "January 2012",
    endDate: "March 2013",
    experience: [
      "Led team that procured and managed telecom accounts totaling $4 Million annually ranging from DSL, Cable, T1, WISP, WiMAX and Cellular providers ",
      "Created comprehensive process documentation ",
      "Designed an internal process to create metrics for growth and streamlined the audit process to eliminate excess overhead and lost income",
      "Renegotiated multiple contracts by analyzing cost structures across geographies, saving 20% on average",
    ]
  }, {
   	companyName: 'Wandering WiFi',
    title: "Technical Account Manager",
    startDate: "September 2008",
    endDate: "March 2013",
    experience: [
      "Managed and trained a rotating team of five to oversee 1,000+ locations with an annual revenue of $7 Million and a monthly user base of 540,000",
      "Conducted three initial rollouts totaling $2.5 Million in capital over 600 locations that involved the installation of WLAN/LAN networks, marketing design and managing third party resources",
      "Led a $215,000 capital rollout to migrate to a Cisco T1 telecom solution at 220 locations ",
      "Cultivated corporate client relationships by continually meeting and exceeding expectations ",
      "Engineered initiatives that restructured technical support roles, training, hiring processes and client communication",
      "Wrote technical and support documentation on hardware, troubleshooting and process improvement",
      "Coordinated DNS content filtering for external clients by moving from an internal to an external solution reducing customer complaints by 90%",
    ]
  }, {
   	companyName: 'Wandering WiFi',
    title: "Technical Support",
    startDate: "March 2008",
    endDate: "Septermber 2008",
    experience: [
      "Resolved customer issues by phone and email",
      "Handled a daily average of 40 inbound support tickets",
      "Performed remote and onsite break/fix operations",
      "Installed WLAN/LAN networks for Hotels, Restaurants, Travel Centers",
      "Consistently awarded for performance",
    ]
  }, {
   	companyName: 'Innovative Computers',
    title: "IT Analyst",
    startDate: "June 2006",
    endDate: "January 2008",
    experience: [
      "Web development using PHP, JavaScript and HTML",
      "Managed Windows Server infrastructure",
      "Built, imaged and maintained desktops and laptops ",
      "Consulted for local businesses with world-wide locations on user and server side technical support issues by phone, email, and on location ",
      "Installed voice, data and security networks ",
      "Initiated projects within the company for process improvement such as a ticket-based support system",
    ]
  }];


 var schools = [{
    name: 'Washtenaw Community College',
    degree: "Applied Science",
    startDate: 8,
    endDate: 110.50,
    status: "Transfer"
  }];



  var githubProjects = [
  {
    title: 'extract_imgur',
    description: " A small class to extract image links from imgur URLS in PHP",
    technology: ["PHP"],
    url: "https://github.com/rpunnett/extract_imgur",
  },
    {
    title: 'basic_linux_kernel',
    description: "A small linux kernel that prints a string to console.",
    technology: ["Assembly","C"],
    url: "https://github.com/rpunnett/basic_linux_kernel",
  }

  ];

})();


