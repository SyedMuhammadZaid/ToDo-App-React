export function trimString(str) {
    let spaces = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        spaces++;
        if (spaces === 4) {
          return str.substring(0, i);
        }
      }
    }
    return str;
  }
