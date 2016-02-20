import * as assert from "assert";
import * as extension from "./../src/Json2Ts";
let Json2Ts = extension.Json2Ts;

suite("json2ts Tests", () => {
    test("Convert JSON-Value to String-Type", () => {
        let json = `{\n\t"name": "Mustermann"\n}`;
        let ts = `export interface RootObject {\n\tname: string;\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Number-Type", () => {
        let json = `{\n\t"alter": 42\n}`;
        let ts = `export interface RootObject {\n\talter: number;\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Boolean-Type", () => {
        let json = `{\n\t"maennlich": true\n}`;
        let ts = `export interface RootObject {\n\tmaennlich: boolean;\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Any-Type", () => {
        let json = `{\n\t"partner": null\n}`;
        let ts = `export interface RootObject {\n\tpartner?: any;\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to String[]-Type", () => {
        let json = `{\n\t"hobbys": ["Reiten","Golfen","Lesen"]\n}`;
        let ts = `export interface RootObject {\n\thobbys: string[];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Number[]-Type", () => {
        let json = `{\n\t"zahlen": [1, 3, 5]\n}`;
        let ts = `export interface RootObject {\n\tzahlen: number[];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Boolean[]-Type", () => {
        let json = `{\n\t"booleans": [true, false, true]\n}`;
        let ts = `export interface RootObject {\n\tbooleans: boolean[];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Any[]-Type", () => {
        let json = `{\n\t"kinder": []\n}`;
        let ts = `export interface RootObject {\n\tkinder: any[];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to String[][]-Type", () => {
        let json = `{\n\t"multiarrays": [["Reiten", "wohoo"], ["wohoo", "ssss"]]\n}`;
        let ts = `export interface RootObject {\n\tmultiarrays: string[][];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Number[][]-Type", () => {
        let json = `{\n\t"multiarrays": [[4, 3], [2, 1]]\n}`;
        let ts = `export interface RootObject {\n\tmultiarrays: number[][];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Boolean[][]-Type", () => {
        let json = `{\n\t"multiarrays": [[true, false], [false, false]]\n}`;
        let ts = `export interface RootObject {\n\tmultiarrays: boolean[][];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Any[][]-Type", () => {
        let json = `{\n\t"multiarrays": [[true, 5], ["Wohoo", false]]\n}`;
        let ts = `export interface RootObject {\n\tmultiarrays: any[][];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to String[][][]-Type", () => {
        let json = `{\n\t"multiarrays": [[["Reiten", "wohoo"], ["wohoo", "ssss"]], [["Reiten", "wohoo"], ["wohoo", "ssss"]]]\n}`;
        let ts = `export interface RootObject {\n\tmultiarrays: string[][][];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Custom-Type", () => {
        let json = `{\n\t"custom": {"name": "Foo", "age": 30}\n}`;
        let ts = `export interface Custom {\n\tname: string;\n\tage: number;\n}\n\nexport interface RootObject {\n\tcustom: Custom;\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Custom-Project-Type", () => {
        let json = `{\n\t"custom": {"name": "Foo", "age": 30, "project": {"name": "Bar", "finish": true}}\n}`;
        let ts = `export interface Project {\n\tname: string;\n\tfinish: boolean;\n}\n\nexport interface Custom {\n\tname: string;\n\tage: number;\n\tproject: Project;\n}\n\nexport interface RootObject {\n\tcustom: Custom;\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to String-Type (Key is lower)", () => {
        let json = `{\n\t"Name": "Mustermann"\n}`;
        let ts = `export interface RootObject {\n\tname: string;\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Custom-Type (Type is upper)", () => {
        let json = `{\n\t"custom": {"name": "Foo", "age": 30}\n}`;
        let ts = `export interface Custom {\n\tname: string;\n\tage: number;\n}\n\nexport interface RootObject {\n\tcustom: Custom;\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert extensive JSON-Value to TypeScript Interfaces", () => {
        let json = `{\n\t"Herausgeber": "Xema","Nummer": "1234-5678-9012-3456","Deckung": 2e+6,"Waehrung": "EURO","Inhaber": {\n\t"Name": "Mustermann","Vorname": "Max","maennlich": true,"Hobbys": [ "Reiten", "Golfen", "Lesen" ], "Alter": 42,"Kinder": [],"Partner": null\n\t}\n}`;
        let ts = `export interface Inhaber {\n\tname: string;\n\tvorname: string;\n\tmaennlich: boolean;\n\thobbys: string[];\n\talter: number;\n\tkinder: any[];\n\tpartner?: any;\n}\n\nexport interface RootObject {\n\therausgeber: string;\n\tnummer: string;\n\tdeckung: number;\n\twaehrung: string;\n\tinhaber: Inhaber;\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert Array JSON-Value to single RootObject", () => {
        let json = `[{\n\t"userId": 1,"id": 1,"title": "sunt aut facere", "body": "quia et suscipit"\n},\n{\n\t"userId": 1,"id": 2,"title": "qui est esse","body": "est rerum tempore"\n}]`;
        let ts = `export interface RootObject {\n\tuserId: number;\n\tid: number;\n\ttitle: string;\n\tbody: string;\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Custom Array-Type", () => {
        let json = `{\n\t"tag": [{"tag": "wpf"}, {"tag": "javascript"}]\n}`;
        let ts = `export interface Tag {\n\ttag: string;\n}\n\nexport interface RootObject {\n\ttag: Tag[];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Custom Array-Type (Remove S-Char on new type)", () => {
        let json = `{\n\t"tags": [{"tag": "wpf"}, {"tag": "javascript"}]\n}`;
        let ts = `export interface Tag {\n\ttag: string;\n}\n\nexport interface RootObject {\n\ttags: Tag[];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });

    test("Convert JSON-Value to Custom Array-Type (Change of IES-Chars to Y-Char on new type)", () => {
        let json = `{\n\t"entities": [{"tag": "wpf"}, {"tag": "javascript"}]\n}`;
        let ts = `export interface Entity {\n\ttag: string;\n}\n\nexport interface RootObject {\n\tentities: Entity[];\n}`;

        let json2ts = new Json2Ts();
        let result = json2ts.convert(json);

        assert.equal(result, ts);
    });
});