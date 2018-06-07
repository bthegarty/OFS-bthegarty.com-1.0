// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/career', {
      templateUrl : 'pages/career.html',
      controller  : 'careerController'
    })

    // route for the contact page
    .when('/abroad', {
      templateUrl : 'pages/abroad.html',
      controller  : 'abroadController'
    })

    // route for the resume page
    .when('/resume', {
      templateUrl : 'pages/resume.html',
      controller  : 'resumeController'
    })

    // route for the more page
    .when('/more', {
      templateUrl : 'pages/more.html',
      controller  : 'moreController'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
  $scope.header = 'Welcome to bthegarty.com!';
  $scope.message = 'This site tells you about who I am, what I do, and what I am interested in. Below you will find some of the recent projects I have been a part of. Enjoy!';
  $scope.end = '- Brendan';
});

scotchApp.controller('aboutController', function($scope) {
  $scope.school = 'Marist 2017, B.S. School of Computer Science and Mathematics.';
  $scope.message = 'Computer Science Major with minors in Information Technology and Information Systems.';
  $scope.hobbies = 'Active memeber of Marist College Computer Society, Marist College Intermural Sports, and Campus Ministry.';
  $scope.music = 'Music is a large part of my life and who I am. I am classically trained in the violin (15 years), and the piano (4 years), as well as playing the guitar.';
});

scotchApp.controller('careerController', function($scope) {
  $scope.amc = 'Currently, I am a QA Engineer for Shudder and Sundance Now, two of AMC networks streaming subscription services and helped with the refreshing of both sites.';
  $scope.mlboc = 'An intern and member of the IT team, I collected data from the 30 MLB affiliated clubs in an effort to constantly find ways to increase productivity and push clubs more towards technolgy integration.';
  $scope.mlbam = 'A QA intern working with the MLB internal player database, I wrote SQL queries and created extensive data maps. I was a part of the MLB draft tech team from 2015-2016.';
});

scotchApp.controller('abroadController', function($scope) {
  $scope.palms = 'In 2015 I was given the oportunity to travel to Cabarete in the Dominican Republic and teach at a local puclic school. Led by Drs. Carolyn C. Matheus and Kevin M. Gaugler, myself and several of my fellow students worked to create a curriculum to teach basic computer science concepts.';
  $scope.open = 'We used a small abroad service group called the Palms Open Project. Their mission is to share the culture of the DR with others who want to learn about the history and lifestyle of the nation.';
  $scope.project = 'In my time there I helped teach basic concepts of coding and technology ranging from Scratch, to robotics, to raspberry pie development.';
});

scotchApp.controller('resumeController', function($scope){
  $scope.resume = "I'm working on putting a downloadable version of my resume here.";
});

scotchApp.controller('moreController', function($scope){
  $scope.more = 'I am currently in the process of giving a stylistic overhaul to my compiler which will eventually go here. This takes some time so I thank you for your understanding. In the mean time I recommend you check out my GitHub which contains both the old compiler and a staging repo for testing.'
});
