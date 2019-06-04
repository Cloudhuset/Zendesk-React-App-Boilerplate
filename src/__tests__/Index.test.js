/**
 * List of required files
 * Add files to the array below to check them.
 * TODO: Add more tests
 */
const files = [
  '../../dist/manifest.json',
];

const checkFiles = () => {
  files.map(file => {
    try {
      require(file);
    } catch(err) {
      throw new Error(err);
    }
  })
}

describe('Checking if required ZD Files Exists', () => {
  it('Checking for files', () => {
    checkFiles();
  });
});