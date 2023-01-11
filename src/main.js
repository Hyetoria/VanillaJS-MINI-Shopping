// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then(response => console.log(response))
}



// main
loadItems()
.then(items => {
  // displayItems(items);
  // setEventListenrs(items);
})
.catch(console.log);