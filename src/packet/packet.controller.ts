import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { PacketService } from './packet.service';
import { CreatePacketDTO } from './dto/create-packet.dto';

@Controller('packet')
export class PacketController {
    constructor(private packetService: PacketService) { }

    // add a packet
    @Post('/create')
    async addPacket(@Res() res, @Body() createPacketDTO: CreatePacketDTO) {
        const packet = await this.packetService.addPacket(createPacketDTO);
        return res.status(HttpStatus.OK).json({
            message: "Packet has been created successfully",
            packet
        })
    }

    // Retrieve packet list
    @Get('packets')
    async getAllPacket(@Res() res) {
        const packets = await this.packetService.getAllPacket();
        return res.status(HttpStatus.OK).json(packets);
    }

    // Fetch a particular packet using ID
    @Get('packet/:packetID')
    async getPacket(@Res() res, @Param('packetID') packetID) {
        const packet = await this.packetService.getPacket(packetID);
        if (!packet) throw new NotFoundException('Packet does not exist!');
        return res.status(HttpStatus.OK).json(packet);
    }

    // Update a packet's details
    @Put('/update')
    async updatePacket(@Res() res, @Query('packetID') packetID, @Body() createPacketDTO: CreatePacketDTO) {
        const packet = await this.packetService.updatePacket(packetID, createPacketDTO);
        if (!packet) throw new NotFoundException('Packet does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Packet has been successfully updated',
            packet
        });
    }

    // Delete a packet
    @Delete('/delete')
    async deletePacket(@Res() res, @Query('packetID') packetID) {
        const packet = await this.packetService.deletePacket(packetID);
        if (!packet) throw new NotFoundException('Packet does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Packet has been deleted',
            packet
        })
    }
}