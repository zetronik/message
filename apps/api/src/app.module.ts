import { Module } from '@nestjs/common';

import {MessageModule} from "./app/message/message.module";


@Module({
  imports: [MessageModule],
})
export class AppModule {}
