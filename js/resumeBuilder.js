var bio = {
	"name":"Thomas Berger",
	"role":"Web Developer",
	"contacts":{
		"mobile":"+64 21 806 853",
		"email":"thomasbe+cv@gmail.com",
		"github":"thomasbergernz",
		"location":"Auckland"
	},
	"pictureURL":["https://www.stellanow.com/download/thumbnails/1671199/MugShot_smaller.png?version=1&modificationDate=1383312002890&api=v2"],
	"welcomeMessage":"Greetings Earthling!",
	"skills":["Confluence","JIRA","Agile","JavaScript","Scrum","CSS","HTML5","jQuery"]
};

var education = {
	"schools":[
    {
        "name": "Vocational College",
        "city": "Rosenheim",
        "degree": "Higher education certificate in business and administration",
        "years": "1989 - 1990",
		"url":"http://www.fosbos-rosenheim.de"
    },
    {
        "name": "Agricultural Economics College",
        "city": "Wasserburg",
        "degree": "Higher education certificate in agricultural economics",
        "years": "1995 - 1997",
		"url":"http://www.alf-ro.bayern.de"
    }
]
,
	"onlineCourses":[
		{
			"title":"Member of the Apple Consultants Network",
			"school":"Apple",
			"dates":"2008 - 2015",
			"city": "Auckland",
			"url":"http://consultants.apple.com/nz/"
		}
		,
		{
			"title":"Apple Certified Technical Coordinator",
			"school":"Apple",
			"dates":"2004 - 2015",
			"city": "Auckland",
			"url":"http://training.apple.com/certification"
		}
		,
		{
			"title":"Front-End Web Dev Nanodegree",
			"school":"Udacity",
			"dates":"2015",
			"url":"http://www.udacity.com"
		}
	]
};

var work = {
	"jobs":[
		{"position":"Product Manager",
		"employer":"Stella Now Limited",
		"dates":"2011 - 2015",
		"city":"Auckland, New Zealand",
		"description":["Developed, documented and marketed methodes and a system to do technical documentation and knowledge sharing for IT service providers based on Atlassian Confluence."]
		}
		,
		{"position":"Consulting Engineer",
		"employer":"Imagetext Publishing Systems Ltd",
		"dates":"2008 - 2011",
		"city":"Auckland, New Zealand",
		"description":["superior customer service and support (both onsite and remote) design, presentation and implementation project management of complete computer system solutions in the commercial, digital media market specialist for Mac OS X Server, Apple Xsan systems and Active Directory integration responsible for training and development improvement of the internal documentation system incl. standard templates development of a web interface for the Filemaker based job management system design of minimal touch OS deployment system workflows administer managed client services for Mac using Kaseya"]
		}
		,
		{"position":"Consulting Engineer",
		"employer":"Apple Operations Europe",
		"dates":"2003 - 2008",
		"city":"Cork, Rep. of Ireland",
		"description":["Logging and tracking of support requests and bugs in ticket systems. Managing high-profile customers and driving reported technical issues to a solution. Planning and configuration of Mac OS X Server and XSAN installations. Troubleshooting complex server installations and data storage solutions. In-depth familiarity with QuickTime technology, video/film production workflow, audio editing/mixing/recording, compression of video for all purposes and DVD authoring. Planning and preparation of aptitude tests for new Enterprise support agents. Coaching of new Enterprise support agents. Hosting roundtable sessions and delivering certification training within the Enterprise support team. Leading the team in times of absence of the manager."]
        }
    ]
};

var projects = {
	"projects":[
    {
        "title": "Stella Connect",
        "dates": "2013 - 2015",
        "description":["Stella Connect add-ons for Confluence integrate your ConnectWise PSA system with Atlassian Confluence. Stella also facilitates the definition of your default set of configuration types to be used and their default parent/child relationship. This is the foundation of the site documentation structure inside a Confluence space. Stella provides a simplified and streamlined user interface for information stored in ConnectWise and allows MSPs to add more 'metadata', while maintaining all the collaboration features from Confluence."],
        "images": ["https://www.stellanow.com/download/attachments/1671197/Update%20Configuration.png?version=1&modificationDate=1390389408173&api=v2","https://www.stellanow.com/download/attachments/1671197/Site%20Doc%20Secure%20Data%20Container.png?version=3&modificationDate=1390390316043&api=v2"],
		"url":"https://www.stellanow.com"
    }
]
};

/*
work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.

projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.

bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.

education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
*/

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.sort().forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedJobEntry = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
		
		$(".work-entry:last").append(formattedJobEntry);
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedImage);
			};
		};
	};
}

education.display = function(){
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace('#', education.schools[school].url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);
        };

    if (education.onlineCourses.length > 0) {
        for (onlineCourse in education.onlineCourses) {
	        $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace('#', education.onlineCourses[onlineCourse].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.onlineCourses[onlineCourse].city);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool).append(formattedOnlineDates).append(formattedSchoolLocation);
        };
    };
}

$("#mapDiv").append(googleMap);
bio.display();
work.display();
education.display();
projects.display();
