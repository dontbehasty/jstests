require('dotenv').config();
const {BASEURL} = process.env
const supertest = require('supertest');

var request = require('supertest')(BASEURL);
var get_user = "/api/users/2";
var assert = require('assert');

describe('Get Single User', function() {
    it('checks that the response was OK', function(done) {
        request
            .get(get_user)
            .expect(200, done);

    });

    it('checks email is correct', function(done) {
        request
            .get(get_user)
            .end(function(err, result) {
                assert.equal(result.body.data.email, 'janet.weaver@reqres.in');
                done();       
            }); 
    });
});