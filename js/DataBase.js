class DataBase {
    #val1;
    #val2;
    constructor(val1 = "initVal1", val2 = "initVal2") {
        this.#val1 = val1;
        this.#val2 = val2;
    };

    toString() {
        console.log(this.#val1 + " " + this.#val2);
    }
}
