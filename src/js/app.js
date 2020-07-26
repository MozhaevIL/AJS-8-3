export default class Settings {
  constructor(settingsInput) { // принимает объект, содержащий пользовательские настройки
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
    for (const option in settingsInput) {
      if (Object.prototype.hasOwnProperty.call(settingsInput, option)) {
        this.userSettings.set(option, settingsInput[option]);
      }
    }
  }

  get settings() {
    const mergedSettings = new Map();
    this.default.forEach((value, key) => {
      if (this.userSettings.has(key)) {
        mergedSettings.set(key, this.userSettings.get(key));
      } else {
        mergedSettings.set(key, value);
      }
    });
    return mergedSettings;
  }
}
