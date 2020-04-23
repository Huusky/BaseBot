import { resolve } from 'path';
import { sync } from 'glob';

export default class Util {
    /**
     *
     * @param dir The dir to resolve files from
     * @param ext (optional) The extension of the files to resolve from the dir. default: js
     */
    public static getFiles(dir: string, ext = 'js'): string[] {
        const a: string = resolve(dir);
        return sync(`${a}/**/*.${ext}`);
    }
}
