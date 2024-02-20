import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";

import { CoffeesService } from "./coffees.service";

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffeeService.finalAll();
  }

  @Get('/pagination')
  findAllPagination(@Query() paginatedQuery) {
    const { limit, offset } = paginatedQuery;
    return `This action returns all paginated coffees. Limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return this.coffeeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeeService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
