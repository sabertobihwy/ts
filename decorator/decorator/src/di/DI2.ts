import "reflect-metadata";

const container = new Map<string, any>();

// ✅ 正确的 `@Injectable()` 形式
function Injectable() {
    return function (target: any) {
        container.set(target.name, new target());
    };
}

// ✅ `@Inject()` 自动获取依赖
function Inject(target: any, key: string) {
    Object.defineProperty(target, key, {
        get: () => {
            console.log("??? " + Reflect.getMetadata("design:type", target, key))
            return container.get(Reflect.getMetadata("design:type", target, key).name)
        },
    });
}

// **依赖服务**
@Injectable()
class LoggerService {
    log(message: string) {
        console.log(`LOG: ${message}`);
    }
}

// **使用 `LoggerService` 的类**
@Injectable()
class UserService {
    @Inject
    private logger!: LoggerService; // 🔥 自动注入 `LoggerService`

    createUser(name: string) {
        this.logger.log(`创建用户: ${name}`);
    }
}

// **解析依赖**
const userService = container.get("UserService") as UserService;
userService.createUser("Alice");
