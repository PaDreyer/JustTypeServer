export declare class User {
    id: number;
    username: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    hashPassword(): void;
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): any;
}
