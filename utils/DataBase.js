export class DataBase {
    static #uidMap = new Map();

    // 建立新 UID 並註冊
    static GenerateUID(object) {
        let uid;
        do {
            uid = this.#generateUidShort();
        } while (this.#uidMap.has(uid));

        this.#uidMap.set(uid, object);
        return uid;
    }

    // 註冊既有 UID
    static RegisterUID(uid, object) {
        if (this.#uidMap.has(uid)) {
            throw new Error(`UID "${uid}" 已存在，無法重複註冊。`);
        }
        this.#uidMap.set(uid, object);
    }

    // 解除註冊
    static RemoveUID(uid) {
        this.#uidMap.delete(uid);
    }

    // 查詢物件
    static GetObject(uid) {
        return this.#uidMap.get(uid);
    }

    // 短版 UID：4 字元時間戳 + 8 字元亂數 = 共 12 字元
    static #generateUidShort() {
        const timestamp = (Math.floor(Date.now() / 100) % 0x10000).toString(16).padStart(4, '0');
        const rand = this.#generateHex(4); // 4 bytes = 8 hex 字元
        return `${timestamp}-${rand}`;
    }

    static #generateHex(byteLength) {
        const array = new Uint8Array(byteLength);
        crypto.getRandomValues(array);
        return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
    }
}
