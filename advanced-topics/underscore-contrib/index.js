$(document).ready(function() {

  var contacts = contribSamples.getContacts();
  var displayContent = "There are " + contacts.length + " contacts.<br />";
  //
  // displayContent += "First 4 contacts with name, id and type: <ul><li>" +
  //   _.map(_.first(contacts, 4), function(contact) {
  //     return contact.getContactNameIdAndType();
  //   }).join('</li><li>') +
  //   "</li></ul>";
  // 
  // var clients = clientRetriever.getClientsUsingConstructorInfo();
  // displayContent += "There are " + clients.length + " active clients.<br />";
  $("#output").html(
    "<h2>Underscore-contrib examples:</h2>" +
    displayContent);
});