import {Controller, Delete, Get, Post, Put, Query} from '@nestjs/common';

import {AppService} from './app.service';
import {Todo} from "@myorg/data";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getData(): Todo[] {
    return this.appService.getData();
  }

  @Post('todos')
  addTodo(@Query('title') title: string): Todo[] {
    return this.appService.addTodo(title);
  }

  @Put('todos')
  editTodo(@Query('id') id: number, @Query('title') title: string): Todo[] {
    return this.appService.editTodo(id, title);
  }

  @Delete('todos')
  removeTodo(@Query('id') id: number): Todo[] {
    return this.appService.removeTodo(id);
  }
}
