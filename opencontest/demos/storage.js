const storage = require("../checker/storage");

/*storage.saveSolution("123", "cpp", "hi\nthere", function(err) {
  if(err) {
    console.log(`err: ${err}`);
  } else {
    console.log("ok");
  }
});*/

storage.removeSolution("123", "cpp", function(err) {
  if(err) {
    console.log(`err: ${err}`);
  } else {
    console.log("ok");
  }
});