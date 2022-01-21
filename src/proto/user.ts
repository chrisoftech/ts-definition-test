/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { PhoneNumber } from "../../src/proto/phone_number";

export const protobufPackage = "userService";

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

function createBaseCreateUserRequest(): CreateUserRequest {
  return {
    firstname: "",
    lastname: "",
    phoneNumber: undefined,
    email: "",
    password: "",
  };
}

export const CreateUserRequest = {
  encode(message: CreateUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.firstname !== "") {
      writer.uint32(10).string(message.firstname);
    }
    if (message.lastname !== "") {
      writer.uint32(18).string(message.lastname);
    }
    if (message.phoneNumber !== undefined) {
      PhoneNumber.encode(
        message.phoneNumber,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(42).string(message.password);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.firstname = reader.string();
          break;
        case 2:
          message.lastname = reader.string();
          break;
        case 3:
          message.phoneNumber = PhoneNumber.decode(reader, reader.uint32());
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      firstname: isSet(object.firstname) ? String(object.firstname) : "",
      lastname: isSet(object.lastname) ? String(object.lastname) : "",
      phoneNumber: isSet(object.phoneNumber)
        ? PhoneNumber.fromJSON(object.phoneNumber)
        : undefined,
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    message.firstname !== undefined && (obj.firstname = message.firstname);
    message.lastname !== undefined && (obj.lastname = message.lastname);
    message.phoneNumber !== undefined &&
      (obj.phoneNumber = message.phoneNumber
        ? PhoneNumber.toJSON(message.phoneNumber)
        : undefined);
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(
    object: I
  ): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.firstname = object.firstname ?? "";
    message.lastname = object.lastname ?? "";
    message.phoneNumber =
      object.phoneNumber !== undefined && object.phoneNumber !== null
        ? PhoneNumber.fromPartial(object.phoneNumber)
        : undefined;
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseCreateUserResponse(): CreateUserResponse {
  return {
    id: "",
    firstname: "",
    lastname: "",
    phoneNumber: undefined,
    email: "",
    createdAt: "",
    updatedAt: "",
  };
}

export const CreateUserResponse = {
  encode(
    message: CreateUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.firstname !== "") {
      writer.uint32(18).string(message.firstname);
    }
    if (message.lastname !== "") {
      writer.uint32(26).string(message.lastname);
    }
    if (message.phoneNumber !== undefined) {
      PhoneNumber.encode(
        message.phoneNumber,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(58).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateUserResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.firstname = reader.string();
          break;
        case 3:
          message.lastname = reader.string();
          break;
        case 4:
          message.phoneNumber = PhoneNumber.decode(reader, reader.uint32());
          break;
        case 5:
          message.email = reader.string();
          break;
        case 6:
          message.createdAt = reader.string();
          break;
        case 7:
          message.updatedAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      firstname: isSet(object.firstname) ? String(object.firstname) : "",
      lastname: isSet(object.lastname) ? String(object.lastname) : "",
      phoneNumber: isSet(object.phoneNumber)
        ? PhoneNumber.fromJSON(object.phoneNumber)
        : undefined,
      email: isSet(object.email) ? String(object.email) : "",
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "",
    };
  },

  toJSON(message: CreateUserResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.firstname !== undefined && (obj.firstname = message.firstname);
    message.lastname !== undefined && (obj.lastname = message.lastname);
    message.phoneNumber !== undefined &&
      (obj.phoneNumber = message.phoneNumber
        ? PhoneNumber.toJSON(message.phoneNumber)
        : undefined);
    message.email !== undefined && (obj.email = message.email);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserResponse>, I>>(
    object: I
  ): CreateUserResponse {
    const message = createBaseCreateUserResponse();
    message.id = object.id ?? "";
    message.firstname = object.firstname ?? "";
    message.lastname = object.lastname ?? "";
    message.phoneNumber =
      object.phoneNumber !== undefined && object.phoneNumber !== null
        ? PhoneNumber.fromPartial(object.phoneNumber)
        : undefined;
    message.email = object.email ?? "";
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? "";
    return message;
  },
};

export interface UserService {
  CreateUser(request: CreateUserRequest): Promise<CreateUserResponse>;
}

export class UserServiceClientImpl implements UserService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateUser = this.CreateUser.bind(this);
  }
  CreateUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    const data = CreateUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "userService.UserService",
      "CreateUser",
      data
    );
    return promise.then((data) => CreateUserResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
