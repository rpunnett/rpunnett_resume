(function() {
  var app = angular.module('resume', []);

  app.controller('ResumeController', function() {
    this.jobs = experience;
    this.education = schools;
    this.github = github;
    this.projects = projects;
  
    this.contact = [{
      email: 'RobertPunnett@outlook.com',
      linkedin: "https://www.linkedin.com/in/punnettr",
      github: "https://github.com/rpunnett",
      stackoverflow: "https://stackoverflow.com/users/3279468/robert",
      website: "www.RobertPunnett.com",
    }];
    
  });


  app.directive("workExperience", function() {
    return {
      restrict: "E",
      templateUrl: "views/experience.html",
    };
  });

  app.directive("githubProject", function() {
    return {
      restrict: "E",
      templateUrl: "views/github.html",
    };
  });


  app.directive("educationExperience", function() {
    return {
      restrict: "E",
      templateUrl: "views/education.html",
    };
  });

  app.directive("contactLink", function() {
    return {
      restrict: "E",
      templateUrl: "views/links.html",
    };
  });

  app.directive("project", function() {
    return {
      restrict: "E",
      templateUrl: "views/projects.html",
    };
  });



var projects =  [
  {
    title: "Asset Inventory",
    description: "A web portal to manage IT assets. Custom views, tables and forms across teams.",
    technology: [
      "PHP",
      "jQuery",
      "JavaScript",
      "MySQL",
      "SQL"
    ],
    images: [
      {
        src: "https://i.imgur.com/BbuHQY7.png",
        title: "Login Screen",
        
      },
      {
        src: "https://i.imgur.com/jbdFRnY.png",
        title: "Add asset, with validation",
        
      },
      {
        src: "https://i.imgur.com/iqthdIk.png",
        title: "Asset list using DataTables",
        
      },
      {
        src: "https://i.imgur.com/QGGtMsI.png",
        title: "Asset details, control panel, info panels",
        
      },
      {
        src: "https://i.imgur.com/AsR4A2v.png",
        title: "Location panels using Google Maps API",
        
      },
      {
        src: "https://i.imgur.com/DHwMkeD.png",
        title: "Location details",
        
      },
      {
        src: "https://i.imgur.com/aRB5Ca1.png",
        title: "User management",
        
      }
    ]
  },
  {
    title: "Asset Reporting",
    description: "A reporting centric web portal to provide data on the managed assets",
    technology: [
      "PHP",
      "jQuery",
      "JavaScript",
      "MySQL",
      "SQL"
    ],
    images: [
      {
        src: "https://i.imgur.com/0tfgf3b.png",
        title: "Login Screen",
        
      },
      {
        src: "https://i.imgur.com/RMYpFXw.png",
        title: "Landing Page, custom & standard reporting, overview tab",
        
      },
      {
        src: "https://i.imgur.com/watSnIn.png",
        title: "Creating a custom report",
        
      },
      {
        src: "https://i.imgur.com/OasI3ND.png",
        title: "Report view, filterting and export",
        
      },
      {
        src: "https://i.imgur.com/t5jBY8W.png",
        title: "Managing custom reports",
        
      }
    ]
  },
  {
    title: "SCCM Search Utility",
    description: "A reporting centric web portal to provide data on the managed assets",
    technology: [
      "C#",
      "WPF",
      "SQL"
    ],
    images: [
      {
        src: "https://i.imgur.com/4nYaKDS.png",
        title: "Login Screen",
        
      },
      {
        src: "https://i.imgur.com/7dRtEX1.png",
        title: "Landing Page, custom & standard reporting, overview tab",
        
      },
      {
        src: "https://i.imgur.com/XW3mUhY.png",
        title: "Creating a custom report",
        
      },
      {
        src: "https://i.imgur.com/o0QsE89.png",
        title: "Report view, filterting and export",
        
      }
    ]
  },
];



  var experience = [
  {
    companyName: 'Norfolk Southern',
    title: "PC/LAN Administrator",
    startDate: "March 2013",
    endDate: "Current",
    experience: [
      "Break/fix resolution and prevention, deployments, upgrades, malware resolution, network connectivity and general repair on PCs, Printers, and Mobile Devices ",
      "Wrote a large repository of scripts using PowerShell, Batch and Visual Basic spanning silent installs and system management to a full restructure and automation of the Wake-on-LAN system",
      "Created on demand utlitites and tools using C# and WPF ",
      "Designed, programed and deployed an asset management system on RHEL6 using a PHP front-end and RESTful API pointed to a MySQL RDBMS as a full stack developer",
      "Researched and led a project for a department wide knowledge base using MediaWiki and transitioning to SharePoint 2013",
      "Created internal documentation on software, hardware and processes on a team and department level"
    ]
  }, {
    companyName: 'Wandering WiFi',
    title: "Telecommunications Manager",
    startDate: "January 2012",
    endDate: "March 2013",
    experience: [
      "Led team that procured and managed telecom accounts totaling $4 Million annually across DSL, Cable, T1, WISP, WiMAX and Cellular providers ",
      "Created comprehensive process documentation ",
      "Designed internal metrics and streamlined processes to eliminate lost income",
      "Renegotiated contracts, saving 20% on average",
    ]
  }, {
    companyName: 'Wandering WiFi',
    title: "Technical Account Manager",
    startDate: "September 2008",
    endDate: "March 2013",
    experience: [
      "Managed and trained a rotating team of five to oversee 1,000+ locations with an annual revenue of $7 Million and a monthly user base of 540,000",
      "Conducted three new client rollouts totaling $2.5 Million in capital over 600 locations that involved the installation of WLAN/LAN networks, marketing design and managing third party resources",
      "Led a migration project for a Cisco T1 telecom solution at 220 locations ",
      "Cultivated corporate client relationships by continually meeting and exceeding expectations",
      "Engineered initiatives that restructured technical support roles, training, hiring processes and client communication",
      "Wrote technical and support documentation on hardware, troubleshooting and process improvement",
      "Researched and led a project to migrate DNS content filtering from an internal server to an external solution; reducing customer complaints by 90%",
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



  var github = [{
    title: 'rpunnett_resume',
    description: "This Resume, built using AngularJS and Sass",
    technology: ["JavaScript","CSS"],
    url: "https://github.com/rpunnett/rpunnett_resume",
  }, {
    title: 'extract_imgur',
    description: " A lightweight class to extract image links from imgur URLS in PHP",
    technology: ["PHP"],
    url: "https://github.com/rpunnett/extract_imgur",
  }, {
    title: 'basic_linux_kernel',
    description: "A small linux kernel that prints a string to console.",
    technology: ["Assembly","C","Shell"],
    url: "https://github.com/rpunnett/basic_linux_kernel",
  }];


app.directive('newWindow', function() {
  return {
    compile: function(element) {
      element.attr('target', '_blank');
    }
  };
});



//console.log(projects);


app.directive('fancyBox', function() {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        // In projects, if the title
        // matches the selected project
        // use the image set as the items for magnific
        projects.forEach(function(project) {
          if(project.title === attrs.projectTitle)
          {
            $(element).magnificPopup({
                items: project.images,
                gallery: {
                 enabled:true,
                    preload: [1,2],
                },
                type: 'image'
            });
          }
        });
      }
  };
});



})();



