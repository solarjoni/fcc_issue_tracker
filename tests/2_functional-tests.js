const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

let id1 = ''
let id2 = ''

chai.use(chaiHttp);

suite('Functional Tests', function() {
    suite('POST /api/issues/{project}', function() {

        test('Every field filled in', function(done) {
          chai.request(server)
          .post('/api/issues/test')
          .send({
            issue_title: 'Title',
            issue_text: 'text',
            created_by: 'Functional Test - Every field filled in',
            assigned_to: 'Chai and Mocha',
            status_text: 'In QA'
          })
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.issue_title, 'Title')
            assert.equal(res.body.issue_text, 'text')
            assert.equal(res.body.created_by, 'Functional Test - Every field filled in')
            assert.equal(res.body.assigned_to, 'Chai and Mocha')
            assert.equal(res.body.status_text, 'In QA')
            assert.equal(res.body.project, 'test')
            id1 = res.body._id
            console.log('++++++ id 1 has been set as ' + id1 + ' ++++++')
            done();
          });
        });
    
        test('Required fields filled in', function(done) {
          chai.request(server)
          .post('/api/issues/test')
          .send({
            issue_title: 'Title 2',
            issue_text: 'text',
            created_by: 'Functional Test - Required fields filled in',
          })
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.issue_title, 'Title 2')
            assert.equal(res.body.issue_text, 'text')
            assert.equal(res.body.created_by, 'Functional Test - Required fields filled in')
            assert.equal(res.body.assigned_to, '')
            assert.equal(res.body.status_text, '')
            assert.equal(res.body.project, 'test')
            id2 = res.body._id
            console.log('++++++ id 2 has been set as ' + id2 + ' ++++++')
            done();
          });
        });
    
        test('Missing required fields => { error: "required field(s) missing" }', function(done) {
          chai.request(server)
            .post('/api/issues/test')
            .send({
              issues_title: 'Title 3'
            })
            .end(function(err, res) {
              assert.equal(res.body, 'required field(s) missing')
              done();
            })
        });
    
      });
    
      suite('GET /api/issues/{project}', function() {
    
        test('No filter', function(done) {
          chai.request(server)
          .get('/api/issues/test')
          .query({})
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.isArray(res.body);
            assert.property(res.body[0], 'issue_title');
            assert.property(res.body[0], 'issue_text');
            assert.property(res.body[0], 'created_on');
            assert.property(res.body[0], 'updated_on');
            assert.property(res.body[0], 'created_by');
            assert.property(res.body[0], 'assigned_to');
            assert.property(res.body[0], 'open');
            assert.property(res.body[0], 'status_text');
            assert.property(res.body[0], '_id');
          });
          done();
        });
    
        test('One filter', function(done) {
    
          //done();
        });
    
        test('Multiple filters (test for multiple fields you know will be in the db for a return)', function(done) {
    
          //done();
        });
    
      });
    
      suite('PUT /api/issues/{project}', function() {
    
        test('One field to update => {result: "successfully updated", _id: _id}', function(done) {
    
          //done();
        });
    
        test('Multiple fields to update => {result: "successfully updated", _id: _id}', function(done) {
    
          //done();
        });
    
        test('No _id submitted => { error: "missing _id" }', function(done) {
    
          //done()
        });
    
        test('No fields to update => { error: "no update field(s) sent", _id: _id }', function(done) {
          chai.request(server)
            .put('/api/issues/test')
            .send({
            })
            .end(function(err, res) {
              assert.equal(res.body, 'no updated field(s) sent')
              done()
            })
        });
    
        test('Invalid _id => { error: "missing _id" }', function(done) {
    
          //done();
        });
    
      });
    
    
      suite('DELETE /api/issues/{project}', function() {
    
        test('Valid _id', function(done) {
    
          //done();
        });
        test('Invalid _id => { error: "could not delete", "_id": _id }', function(done) {
          const badId = "5f665eb46e296f6b9b6a504d";
    
          //done();
        });
    
        test('No _id => { error: "missing _id" }', function(done) {
    
          //done();
        });
      });
});
