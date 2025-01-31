import "reflect-metadata";

function LogParam(target: any, method: string, index: number) {
    const existingParams = Reflect.getMetadata("log_params", target, method) || [];
    existingParams.push(index);
    Reflect.defineMetadata("log_params", existingParams, target, method);
}

function LogMethod(target: any, method: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const paramIndexes = Reflect.getMetadata("log_params", target, method) || [];

        paramIndexes.forEach((index: any) => {
            console.log(`📌 参数 ${index} 的值: ${args[index]}`);
        });

        return original.apply(this, args);
    };
}

class UserService {
    @LogMethod
    createUser(name: string, @LogParam age: number) {
        console.log(`👤 创建用户: ${name}, 年龄: ${age}`);
    }
}

// **测试代码**
const userService = new UserService();
userService.createUser("Alice", 25);