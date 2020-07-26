import Settings from '../app';

test('should correctly return settings merdged from user settings and defaults', () => {
  const mySettings = new Settings({ difficulty: 'hard', theme: 'gray' });
  const recieved = mySettings.settings;
  const expected = new Map([
    ['theme', 'gray'],
    ['music', 'trance'],
    ['difficulty', 'hard'],
  ]);

  expect(recieved).toEqual(expected);
});
