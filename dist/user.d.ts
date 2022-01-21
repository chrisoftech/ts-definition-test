import { Writer, Reader } from "protobufjs/minimal";
import { PhoneNumber } from "../../src/proto/phone_number";
export declare const protobufPackage = "userService";
export interface CreateUserRequest {
    firstname: string;
    lastname: string;
    phoneNumber: PhoneNumber | undefined;
    email: string;
    password: string;
}
export interface CreateUserResponse {
    id: string;
    firstname: string;
    lastname: string;
    phoneNumber: PhoneNumber | undefined;
    email: string;
    createdAt: string;
    updatedAt: string;
}
export declare const CreateUserRequest: {
    encode(message: CreateUserRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CreateUserRequest;
    fromJSON(object: any): CreateUserRequest;
    toJSON(message: CreateUserRequest): unknown;
    fromPartial<I extends {
        firstname?: string;
        lastname?: string;
        phoneNumber?: {
            country?: string;
            number?: string;
        };
        email?: string;
        password?: string;
    } & {
        firstname?: string;
        lastname?: string;
        phoneNumber?: {
            country?: string;
            number?: string;
        } & {
            country?: string;
            number?: string;
        } & Record<Exclude<keyof I["phoneNumber"], keyof PhoneNumber>, never>;
        email?: string;
        password?: string;
    } & Record<Exclude<keyof I, keyof CreateUserRequest>, never>>(object: I): CreateUserRequest;
};
export declare const CreateUserResponse: {
    encode(message: CreateUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CreateUserResponse;
    fromJSON(object: any): CreateUserResponse;
    toJSON(message: CreateUserResponse): unknown;
    fromPartial<I extends {
        id?: string;
        firstname?: string;
        lastname?: string;
        phoneNumber?: {
            country?: string;
            number?: string;
        };
        email?: string;
        createdAt?: string;
        updatedAt?: string;
    } & {
        id?: string;
        firstname?: string;
        lastname?: string;
        phoneNumber?: {
            country?: string;
            number?: string;
        } & {
            country?: string;
            number?: string;
        } & Record<Exclude<keyof I["phoneNumber"], keyof PhoneNumber>, never>;
        email?: string;
        createdAt?: string;
        updatedAt?: string;
    } & Record<Exclude<keyof I, keyof CreateUserResponse>, never>>(object: I): CreateUserResponse;
};
export interface UserService {
    CreateUser(request: CreateUserRequest): Promise<CreateUserResponse>;
}
export declare class UserServiceClientImpl implements UserService {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateUser(request: CreateUserRequest): Promise<CreateUserResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=user.d.ts.map