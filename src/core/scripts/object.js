export const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

export const assign = {
  recursive: (target, ...sources) => {
    if (!sources.length) return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key]) { 
            Object.assign(target, { [key]: {} });
          } else {
            target[key] = Object.assign({}, target[key])
          }
          assign.recursive(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
  }
}