export interface StorageItem {
  key: string;
  value: any;
}

export class EncryptedStorage {
  static async setItem({ key, value }: StorageItem): Promise<void> {
    console.log(`EncryptedStorage: Setting ${key}`);
  }

  static async getItem(key: string): Promise<any> {
    console.log(`EncryptedStorage: Getting ${key}`);
    return null;
  }

  static async removeItem(key: string): Promise<void> {
    console.log(`EncryptedStorage: Removing ${key}`);
  }

  static async clear(): Promise<void> {
    console.log('EncryptedStorage: Clearing all data');
  }
}