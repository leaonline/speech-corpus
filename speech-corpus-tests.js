// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by speech-corpus.js.
import { name as packageName } from "meteor/leaonline:speech-corpus";

// Write your tests here!
// Here is an example.
Tinytest.add('speech-corpus - example', function (test) {
  test.equal(packageName, "speech-corpus");
});
