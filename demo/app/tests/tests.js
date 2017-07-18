var NsUrbanairship = require("nativescript-ns-urbanairship").NsUrbanairship;
var nsUrbanairship = new NsUrbanairship();

describe("greet function", function() {
    it("exists", function() {
        expect(nsUrbanairship.functionname).toBeDefined();
    });

    it("returns a string", function() {
        expect(nsUrbanairship.functionname()).toEqual("This will fail");
    });
});