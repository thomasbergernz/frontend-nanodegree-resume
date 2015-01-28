var formattedName = HTMLheaderName.replace("%data%", "Thomas Berger");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole).prepend(formattedName);

