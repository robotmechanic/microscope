var postsData = [
  {
    title: 'Galactic Battalion',
    url: 'http://www.galacticbattalion.com'
  }, 
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  }, 
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];
Template.postsList.helpers({
  posts: postsData
});