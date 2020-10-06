import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Packet } from './interfaces/packet.interface';
import { CreatePacketDTO } from './dto/create-packet.dto';

@Injectable()
export class PacketService {
    constructor(@InjectModel('Packet') private readonly packetModel: Model<Packet>) { }
    // fetch all packet
    async getAllPacket(): Promise<Packet[]> {
        const packets = await this.packetModel.find().exec();
        return packets;
    }
    // Get a single packet
    async getPacket(packetID): Promise<Packet> {
        const customer = await this.customerModel.findById(customerID).exec();
        return customer;
    }
    // post a single packet
    async addPacket(createPacketDTO: CreatePacketDTO): Promise<Packet> {
        const newPacket = await this.packetModel(createPacketDTO);
        return newPacket.save();
    }
    // Edit packet details
    async updatePacket(packetID, createPacketDTO: CreatePacketDTO): Promise<Packet> {
        const updatedPacket= await this.packetModel
            .findByIdAndUpdate(packetID, createPacketDTO, { new: true });
        return updatedPacket;
    }
    // Delete a packet
    async deletePacket(packetID): Promise<any> {
        const deletedPacket = await this.packetModel.findByIdAndRemove(packetID);
        return deletedPacket;
    }
}