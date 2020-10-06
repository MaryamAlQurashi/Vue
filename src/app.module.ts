import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { PacketModule } from './packet/packet.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/database', { useNewUrlParser: true }),
    CustomerModule,
    PacketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}