import * as mongoose from 'mongoose';
import { stringify } from 'querystring';

export const PacketSchema = new mongoose.Schema({
    TIME: Date,
    IP_SRC: String,
    IP_DST: String,
    SRC_PORT: Int32,
    DST_PORT: Int32,
    TTL: Int32,
    PROTOCOL: Int32,
    HTTP_VRS: String,
    HTTP_VRQ: String,
    STATUS_CODE: String,
    REASON_PH: String,
    CONT_LEN_RS: String,
    CONT_LEN_RQ: String,
    CONT_TYPE_RS: String,
    CONT_TYPE_RQ: String,
    URL: String,
    METHOD: String,
    PAYLOAD: String,
    created_at: { type: Date, default: Date.now }
})
