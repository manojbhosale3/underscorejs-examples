$(document).ready(function() {

  var contacts = clientRetriever.getContacts();
  var displayContent = "There are " + contacts.length + " contacts.<br />";

  displayContent += "First 4 contacts with name, id and type: <ul><li>" +
    _.map(_.take(contacts, 4), function(contact) {
      return contact.getContactNameIdAndType();
    }).join('</li><li>') +
    "</li></ul>";

  var clients = clientRetriever.getClients();
  displayContent += "There are " + clients.length + " active clients.<br />";
  $("#output").html(
    "<h2>OOP with lodash examples:</h2>" +
    displayContent);
});