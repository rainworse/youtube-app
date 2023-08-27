import data from '../config.json' assert { type: 'json' };

const ConfigHelper = (() => {
  const getValue = (value) => {
    return data[value];
  };

  return { getValue };
})();

export default ConfigHelper;
