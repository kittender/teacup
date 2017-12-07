const should = require('chai').should(),
    Teacup = require('./index'),
    pours = require('./index').pours,
    teafile = require('./bags/test.json'),
    mythfile = require('./bags/myth.json');

describe('teacup.pours * * *', function () {


    it('should use a default teafile when none is passed', function () {
        const teabag = pours({});
        teabag.should.equal(teafile.source);
    });


    it('should retrieve values from JSON when a teafile is passed', function () {
        const teabag = pours({
            tea: "./bags/myth.json"
        });
        teabag.should.equal(mythfile.source);
    });


});
