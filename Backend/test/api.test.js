// 1. It imports the chai and request modules.
// 2. It creates a describe block that tests the status and content of the response.
// 3. It creates an it block that tests the status code of the response.
// 4. It creates an it block that tests the content of the response.
// 5. It runs the tests.

let expect = require("chai").expect;
let request = require("request");

describe("Status and content", function () {
  describe("Get response from api", function () {
    it("status", function (done) {
      request("http://localhost:3500/", function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it("content", function (done) {
      request("http://localhost:3500/", function (error, response, body) {
        expect(body).to.equal("Server running on port 3500");
        done();
      });
    });
  });
});
