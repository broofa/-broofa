before(() => {});

it('Test 0a', () => {});

describe('Suite 1', () => {
  it('Test 1a', () => {
  });

  it('Test 1b', () => {
    throw Error('Should throw');
  });

  describe('Suite 1.1', () => {
    it('Test 1.1a', () => {});
  });

  it('Test 1c', () => {});
});

describe('Suite 2', () => {
  it('Test 2a', () => {});
});

it('Top 0b', () => {});
