var assert = require("assert");
var extension = require("./../src/Json2Ts");
var Json2Ts = extension.Json2Ts;
suite("json2ts Tests", function () {
    test("Convert JSON-Value to String-Type", function () {
        var json = "{\n\t\"name\": \"Mustermann\"\n}";
        var ts = "export interface RootObject {\n\tname: string;\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Number-Type", function () {
        var json = "{\n\t\"alter\": 42\n}";
        var ts = "export interface RootObject {\n\talter: number;\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Boolean-Type", function () {
        var json = "{\n\t\"maennlich\": true\n}";
        var ts = "export interface RootObject {\n\tmaennlich: boolean;\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Any-Type", function () {
        var json = "{\n\t\"partner\": null\n}";
        var ts = "export interface RootObject {\n\tpartner?: any;\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to String[]-Type", function () {
        var json = "{\n\t\"hobbys\": [\"Reiten\",\"Golfen\",\"Lesen\"]\n}";
        var ts = "export interface RootObject {\n\thobbys: string[];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Number[]-Type", function () {
        var json = "{\n\t\"zahlen\": [1, 3, 5]\n}";
        var ts = "export interface RootObject {\n\tzahlen: number[];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Boolean[]-Type", function () {
        var json = "{\n\t\"booleans\": [true, false, true]\n}";
        var ts = "export interface RootObject {\n\tbooleans: boolean[];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Any[]-Type", function () {
        var json = "{\n\t\"kinder\": []\n}";
        var ts = "export interface RootObject {\n\tkinder: any[];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to String[][]-Type", function () {
        var json = "{\n\t\"multiarrays\": [[\"Reiten\", \"wohoo\"], [\"wohoo\", \"ssss\"]]\n}";
        var ts = "export interface RootObject {\n\tmultiarrays: string[][];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Number[][]-Type", function () {
        var json = "{\n\t\"multiarrays\": [[4, 3], [2, 1]]\n}";
        var ts = "export interface RootObject {\n\tmultiarrays: number[][];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Boolean[][]-Type", function () {
        var json = "{\n\t\"multiarrays\": [[true, false], [false, false]]\n}";
        var ts = "export interface RootObject {\n\tmultiarrays: boolean[][];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Any[][]-Type", function () {
        var json = "{\n\t\"multiarrays\": [[true, 5], [\"Wohoo\", false]]\n}";
        var ts = "export interface RootObject {\n\tmultiarrays: any[][];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to String[][][]-Type", function () {
        var json = "{\n\t\"multiarrays\": [[[\"Reiten\", \"wohoo\"], [\"wohoo\", \"ssss\"]], [[\"Reiten\", \"wohoo\"], [\"wohoo\", \"ssss\"]]]\n}";
        var ts = "export interface RootObject {\n\tmultiarrays: string[][][];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Custom-Type", function () {
        var json = "{\n\t\"custom\": {\"name\": \"Foo\", \"age\": 30}\n}";
        var ts = "export interface Custom {\n\tname: string;\n\tage: number;\n}\n\nexport interface RootObject {\n\tcustom: Custom;\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Custom-Project-Type", function () {
        var json = "{\n\t\"custom\": {\"name\": \"Foo\", \"age\": 30, \"project\": {\"name\": \"Bar\", \"finish\": true}}\n}";
        var ts = "export interface Project {\n\tname: string;\n\tfinish: boolean;\n}\n\nexport interface Custom {\n\tname: string;\n\tage: number;\n\tproject: Project;\n}\n\nexport interface RootObject {\n\tcustom: Custom;\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to String-Type (Key is lower)", function () {
        var json = "{\n\t\"Name\": \"Mustermann\"\n}";
        var ts = "export interface RootObject {\n\tname: string;\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Custom-Type (Type is upper)", function () {
        var json = "{\n\t\"custom\": {\"name\": \"Foo\", \"age\": 30}\n}";
        var ts = "export interface Custom {\n\tname: string;\n\tage: number;\n}\n\nexport interface RootObject {\n\tcustom: Custom;\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert extensive JSON-Value to TypeScript Interfaces", function () {
        var json = "{\n\t\"Herausgeber\": \"Xema\",\"Nummer\": \"1234-5678-9012-3456\",\"Deckung\": 2e+6,\"Waehrung\": \"EURO\",\"Inhaber\": {\n\t\"Name\": \"Mustermann\",\"Vorname\": \"Max\",\"maennlich\": true,\"Hobbys\": [ \"Reiten\", \"Golfen\", \"Lesen\" ], \"Alter\": 42,\"Kinder\": [],\"Partner\": null\n\t}\n}";
        var ts = "export interface Inhaber {\n\tname: string;\n\tvorname: string;\n\tmaennlich: boolean;\n\thobbys: string[];\n\talter: number;\n\tkinder: any[];\n\tpartner?: any;\n}\n\nexport interface RootObject {\n\therausgeber: string;\n\tnummer: string;\n\tdeckung: number;\n\twaehrung: string;\n\tinhaber: Inhaber;\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert Array JSON-Value to single RootObject", function () {
        var json = "[{\n\t\"userId\": 1,\"id\": 1,\"title\": \"sunt aut facere\", \"body\": \"quia et suscipit\"\n},\n{\n\t\"userId\": 1,\"id\": 2,\"title\": \"qui est esse\",\"body\": \"est rerum tempore\"\n}]";
        var ts = "export interface RootObject {\n\tuserId: number;\n\tid: number;\n\ttitle: string;\n\tbody: string;\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Custom Array-Type", function () {
        var json = "{\n\t\"tag\": [{\"tag\": \"wpf\"}, {\"tag\": \"javascript\"}]\n}";
        var ts = "export interface Tag {\n\ttag: string;\n}\n\nexport interface RootObject {\n\ttag: Tag[];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Custom Array-Type (Remove S-Char on new type)", function () {
        var json = "{\n\t\"tags\": [{\"tag\": \"wpf\"}, {\"tag\": \"javascript\"}]\n}";
        var ts = "export interface Tag {\n\ttag: string;\n}\n\nexport interface RootObject {\n\ttags: Tag[];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
    test("Convert JSON-Value to Custom Array-Type (Change of IES-Chars to Y-Char on new type)", function () {
        var json = "{\n\t\"entities\": [{\"tag\": \"wpf\"}, {\"tag\": \"javascript\"}]\n}";
        var ts = "export interface Entity {\n\ttag: string;\n}\n\nexport interface RootObject {\n\tentities: Entity[];\n}";
        var json2ts = new Json2Ts();
        var result = json2ts.convert(json);
        assert.equal(result, ts);
    });
});
//# sourceMappingURL=json2ts.test.js.map