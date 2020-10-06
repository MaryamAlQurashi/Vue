import { Document } from 'mongoose';

export interface Packet extends Document {
    readonly TIME: Date;
    readonly IP_SRC: String;
    readonly IP_DST: String;
    readonly SRC_PORT: Int32;
    readonly DST_PORT: Int32;
    readonly TTL: Int32;
    readonly PROTOCOL: Int32;
    readonly HTTP_VRS: String;
    readonly HTTP_VRQ: String;
    readonly STATUS_CODE: String;
    readonly REASON_PH: String;
    readonly CONT_LEN_RS: String;
    readonly CONT_LEN_RQ: String;
    readonly CONT_TYPE_RS: String;
    readonly CONT_TYPE_RQ: String;
    readonly URL: String;
    readonly METHOD: String;
    readonly PAYLOAD: String;
}