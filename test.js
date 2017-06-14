var friends = ['Ean', 'Tyler', 'Mikenzi', 'Eric', 'Jessica'];
var newFriends = friends.filter(function (friend) {
  return friend[0] === 'E'
});
console.log(newFriends) // ['Ean', 'Eric']
