import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('aids')
  findAll() {
    return 'teste';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `id ${id}`;
  }

  @Post('create')
  create(@Body('name') body: any) {
    return body;
  }
}
