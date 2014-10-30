if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Galactic Battalion',
    url: 'http://www.galacticbattalion.com'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}