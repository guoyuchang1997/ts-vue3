interface StorageItem<T> {
  value: T;
  expire: number;
}

interface StorageUtil {
  set<T>(name: string, obj: T, exp?: number): void;
  get<T>(name: string): T  | string;
  remove(name: string): void;
}

const st: Pick<StorageUtil, 'set' | 'get' | 'remove'> = {
  set<T>(name: string, obj: T, exp?: number) {
    const expire = exp ? Math.floor(new Date().getTime() / 1000) + exp : -1;
    localStorage.setItem(name, JSON.stringify({ value: obj, expire }));
  },
  get(name: string): string | "" {
    const data = localStorage.getItem(name);
    if (data) {
      try {
        const obj: StorageItem<string> = JSON.parse(data);
        return obj.value;
      } catch (error) {
        return "";
      }
    }
    return "";
  },
  remove(name: string) {
    localStorage.removeItem(name);
  },
};

export default st;