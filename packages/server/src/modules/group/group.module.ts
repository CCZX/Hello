import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { Service } from './group.service';

@Module({
  controllers: [GroupController],
  providers: [Service],
})
export class GroupModule {}
