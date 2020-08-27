const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc.trim(), desc.trim());

      done();
    });
  });
  it('should return error message when invalid/non-existen breed is passed in', (done) => {
    fetchBreedDescription('23434', (err, desc) => {
      assert.equal(null, desc);

      const expectedErr = '23434 not found';
      assert.equal(expectedErr, err);
      done();
    });
  });
});