export class SessionStorageUtil {

    public static set(key: SessionStorageKeys, value: any) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  
    public static get(key: SessionStorageKeys): any | undefined {
      const localValue = sessionStorage.getItem(key);
      if (localValue) {
        return JSON.parse(localValue);
      }
      return undefined;
    }
  
    public static remove(key: SessionStorageKeys) {
      sessionStorage.removeItem(key);
    }
  
    public static clear() {
      sessionStorage.clear();
    }
  
  }
  
  export enum SessionStorageKeys {
  
    lastFetch = 'lastFetch',
    fetchedData = 'fetchedData'
  
  }