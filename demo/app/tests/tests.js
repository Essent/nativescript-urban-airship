var NsUrbanairship = require("nativescript-ns-urbanairship").NsUrbanairship;
var nsUrbanairship = new NsUrbanairship();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(nsUrbanairship.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(nsUrbanairship.functionname()).toEqual(jasmine.any(Promise));
  });
});