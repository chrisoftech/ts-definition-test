import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "";
export interface PhoneNumber {
    country: string;
    number: string;
}
export declare const PhoneNumber: {
    encode(message: PhoneNumber, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): PhoneNumber;
    fromJSON(object: any): PhoneNumber;
    toJSON(message: PhoneNumber): unknown;
    fromPartial<I extends {
        country?: string;
        number?: string;
    } & {
        country?: string;
        number?: string;
    } & Record<Exclude<keyof I, keyof PhoneNumber>, never>>(object: I): PhoneNumber;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=phone_number.d.ts.map