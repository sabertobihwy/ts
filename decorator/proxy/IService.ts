export interface IService {
    operation(): void
}

export class RealService implements IService {
    operation(): void {
        console.log('real service')
    }
}

