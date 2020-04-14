import Keyv from "keyv";

export class Storage {
    private storageInstance: Keyv;

    /**
     * @param {string} cString Optional connection string if storage type is not in-memory
     */
    public constructor(cString?: string) {
        if (cString) this.storageInstance = new Keyv(cString);
        else this.storageInstance = new Keyv();
    }

    /**
     * Returns the storage instance
     * @returns {Keyv} Keyv storage instance
     */
    public getInstance(): Keyv {
        return this.storageInstance;
    }

    /**
     * Get a specific key from the storage instance
     * @param {string} key The key to get
     * @returns {Promise<string | object>} The value of the key if it exists
     */
    public async get(key: string): Promise<string | object> {
        let ret: any;
        await this.storageInstance.get(key)
            .then( (res) => {ret = res;});
        return ret;
    }

    /**
     * Set a new key/value in the storage instance
     * @param {string} key The key to set
     * @param {string | object} value The value to set
     * @param {number} ttl Key expire time (optional)
     */
    public async set(key: string, value: string | object, ttl: number): Promise<true> {
        return await this.storageInstance.set(key, value, ttl);
    }

    /**
     * Delete a key from the storage instance
     * @param {string} key The key to delete
     */
    public async delete(key: string): Promise<boolean> {
        return await this.storageInstance.delete(key);
    }

    /**
     * Clear the storage instance
     */
    public async clear(): Promise<void> {
        return await this.storageInstance.clear();
    }
}