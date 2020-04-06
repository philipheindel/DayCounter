/**
 * @classdesc Counter manages the day count operations.
 */
class Counter {
    #count;
    constructor() {
        let now = new Date();
        let start = new Date(now.getFullYear(), 0, 0);
        let diff = now - start;
        let oneDay = 1000 * 60 * 60 * 24;
        this.#count = Math.floor(diff / oneDay);
    }

    /**
     * 
     * @return {number} Returns the day of the year.
     */
    getDayOfYear() {
        return this.#count;
    }
}
