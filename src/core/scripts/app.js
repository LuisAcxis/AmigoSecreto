export const env = (name) => {
  const renowned = `REACT_APP_${name}`;
  return process.env[renowned];
}

export const state = {
  KEY: 'App',
  get: () => {
    const appState = localStorage.getItem(state.KEY);
    if(!appState) {
      return {};
    } else {
      return JSON.parse(appState);
    }
  },
  set: (data) => {
    localStorage.setItem(state.KEY, JSON.stringify(data));
  }
}

export const cache = {
  KEY: 'Cache',
  get: (field) => {
    const appCache = localStorage.getItem(cache.KEY);
    if(!appCache) {
      return undefined;
    } else {
      const data = JSON.parse(appCache);
      return data[field];
    }
  },
  set: (field, data) => {
    const appCache = localStorage.getItem(cache.KEY);
    if(!appCache) {
      const cached = {};
      cached[field] = data;
      localStorage.setItem(cache.KEY, JSON.stringify(cached));
    } else {
      const cached = JSON.parse(appCache);
      cached[field] = data;
      localStorage.setItem(cache.KEY, JSON.stringify(cached));
    }
  }
}