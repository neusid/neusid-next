import { StorageRepository } from "../repositories/StorageRepository"

export class CheckStorageStatusUseCase {
    static async execute() {
        return await StorageRepository.checkConnection()
    }
}
