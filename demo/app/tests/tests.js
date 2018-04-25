var UrbanAirship = require("nativescript-urban-airship").UrbanAirship;
var urbanAirship = new UrbanAirship();

describe("greet function", function() {
    it("exists", function() {
        expect(urbanAirship.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(urbanAirship.greet()).toEqual("Hello, NS");
    });
});