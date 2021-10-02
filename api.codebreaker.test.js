const request = require("supertest");
const api = require("./api.codebreaker"); // Arrange

describe("testing /randomNumber path", () => {
    test("it should return status code 200", done => {
        request(api)
        .get("/api/randomNumber") // Act
        .then(response => {
            expect(response.statusCode).toBe(200); //Assert
            done();
        });
    });
    test("it should return application/json content.type", done => {
        request(api)
        .get("/api/randomNumber") // Act
        .then(response => {
            expect(response.type).toBe("application/json");
            done();
        });
    });

    test("it should return a valid json object", done => {
        request(api)
        .get("/api/randomNumber") // Act
        .then(response => {
            expect(response.body).not.toBeNull();
            expect(response.body.ramdonNumber).not.toBeUndefined();
            done();
        });
    });

    test("it should return application/json content.type", done => {
      request(api)
      .get("/api/guessNumber?number=1234") // Act
      .then(response => {
          expect(response.type).toBe("application/json");
          done();
      });
    });

    test("it should return a valid json object", done => {
        request(api)
        .get("/api/guessNumber?number=1234") // Act
        .then(response => {
            expect(response.body).not.toBeNull();
            expect(response.body.mensaje).not.toBeUndefined();
            done();
        });
    });
})