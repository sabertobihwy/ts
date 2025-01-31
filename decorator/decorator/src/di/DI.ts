import "reflect-metadata";

function ParamTypes(...types) { return Reflect.metadata("design:paramtypes", types); }

class LoggerService { }

@ParamTypes(LoggerService)
class UserService {
    constructor(private logger: LoggerService) { }
}

// **测试 Reflect.getMetadata**
console.log("参数类型：", Reflect.getMetadata("design:paramtypes", UserService));