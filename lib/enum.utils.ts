export const eu = {
  values: <T extends Record<string, string | number>>(enumObj: T): T[keyof T][] => {
    return Object.values(enumObj).filter((v): v is T[keyof T] => typeof v === 'number');
  },

  keys: <T extends Record<string, string | number>>(enumObj: T): string[] => {
    return Object.keys(enumObj).filter(key => isNaN(Number(key)));
  },

  entries: <T extends Record<string, string | number>>(
    enumObj: T
  ): Array<{ key: string, value: number }> => {
    return Object.keys(enumObj)
      .filter(key => isNaN(Number(key)))
      .map(key => ({ key, value: enumObj[key] as number }));
  },

  fromKey: <T extends Record<string, string | number>>(
    enumObj: T,
    key: string
  ): T[keyof T] | undefined => {
    return enumObj[key] as T[keyof T] | undefined;
  }

};
