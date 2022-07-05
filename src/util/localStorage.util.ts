export default class LocalStorageUtil {
    public static set(key: LocalStorageKeys, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    public static get(key: LocalStorageKeys): any | undefined {
        const localValue = localStorage.getItem(key);
        if (localValue)
            return JSON.parse(localValue);
        return undefined;
    }
    public static remove(key: LocalStorageKeys) {
        localStorage.removeItem(key);
    }
    public static clear() {
        localStorage.clear();
    }
}
export enum LocalStorageKeys {
    user = 'user',
    lastFetch = 'lastFetch',
    fetchedData = 'fetchedData'
}
