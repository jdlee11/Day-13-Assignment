var $sections = $(".sec"); // all sections
$sections.on("click", function(evt){
  $sections.removeClass("selected");
  $(evt.target).parent().toggleClass("selected");
});

var files = [
  {name: "Dropbox", quant: 42},
  {name: "Skydrive", quant: 87},
  {name: "FTP Server", quant: 366},
  {name: "Dropbox", quant: 1},
  {name: "Skydrive", quant: 10}
];
var mail = [
  {name: "Inbox", quant: 10},
  {name: "Sent", quant: 4},
  {name: "Drafts", quant: 1},
  {name: "Junk", quant: 4},
  {name: "Trash", quant: 7},
];
var cloud = [
  {name: "Connect", quant: 12},
  {name: "Profiles", quant: 19},
  {name: "Options", quant: 27},
  {name: "Connect", quant: 12},
  {name: "Profiles", quant: 19},
  {name: "Options", quant: 27},
];


// ********GET TOTAL NUMBER OF FILES***********
var filesTotal = files.map(function(item){
  return item.quant;
});
filesTotal = filesTotal.reduce(function(total, num){
  return total + num;
}, 0);
var $numberOfFiles = $(".files p span");
$numberOfFiles.text(filesTotal);

// *******GET TOTAL NUMBER OF MAIL ITEMS********
var mailTotal = mail.map(function(item){
  return item.quant;
});
mailTotal = mailTotal.reduce(function(total, num){
  return total + num;
}, 0);
var $numberOfMail = $(".mail p span");
$numberOfMail.text(mailTotal);

// *********GET TOTAL NUMBER OF CLOUD ITEMS********
var cloudTotal = cloud.map(function(item){
  return item.quant;
});
cloudTotal = cloudTotal.reduce(function(total, num){
  return total + num;
}, 0);
var $numberOfCloud = $(".cloud p span");
$numberOfCloud.text(cloudTotal);



// ********** fill each item bar with title and number of items******
var $files = $(".files li");
$files.each(function(index, item){
  $(this).html(" 0" + (index + 1) + " " + files[index].name + "<p>" + files[index].quant + "</p>");
});
var $mail = $(".mail li");
$mail.each(function(index, item){
  $(this).html(" 0" + (index + 1) + " " + mail[index].name + "<p>" + mail[index].quant + "</p>");
});
var $cloud = $(".cloud li");
$cloud.each(function(index, item){
  $(this).html(" 0" + (index + 1) + " " + cloud[index].name + "<p>" + cloud[index].quant + "</p>");
});
