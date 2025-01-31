import "reflect-metadata";

function deco(target, key) { }

class Example {

    @deco
    name: string;
    age: number;
}

console.log(Reflect.getMetadata("design:type", Example.prototype, "name")); // ✅ [Function: String]
console.log(Reflect.getMetadata("design:type", Example.prototype, "age")); // ✅ [Function: Number]
