var makeStory = alert('Let’s make a story together!');
var color = prompt('A colour (orange, indigo, etc.)');
var creature = prompt('A creature (dragon, moth, etc.)');
var adj =  prompt('An adjective (beautiful, super, etc.)');
var verb = prompt('A past tense verb (ran, burped, etc.)');
var story = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning\nEnter the letter below:');

if (story == 'a') {
  document.write(adj + ' After snacking on treats, the ' + color + ' bellied ' + creature + ' ' + verb + ' for hours.');
}

if (story == 'b') {
  document.write('Ameilia ' + verb + ' through the ' + adj + ' ' + color + ' nebula escaping the space ' + creature + '.');
}

if (story == 'c') {
  document.write('Jackson chose his ' + adj + ', ' + color + ' ' + creature + ' card and ' + verb + ' it to the table knowing he won.');
}
