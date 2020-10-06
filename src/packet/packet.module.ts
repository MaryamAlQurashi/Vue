import { Module } from '@nestjs/common';
import { PacketController } from './packet.controller';
import { PacketService } from './packet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PacketSchema } from './schemas/packet.schema';
@Module({
    imports: [
    MongooseModule.forFeature([{ name: 'Packet', schema: PacketSchema }])
    ],
    controllers: [PacketController],
    providers: [PacketService]
})
export class PacketModule { }