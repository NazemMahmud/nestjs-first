import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
// import { CreateCatDto } from './dto/create-cat.dto';
// import { ListAllEntities } from './dto/list-all-entities.dto';
// import {UpdateCatDto} from './dto/update-cat.dto';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { CatsService } from './service/cats-service/cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  /* @Get()
   findAll(): Observable<any[]> {
     return of([]);
   }

   @Post()
   async create(@Body() createCatDto: CreateCatDto) {
     return 'Add a new cat';
   }

   // cats/1
   @Get(':id')
   findOne(@Param('id') id): string {
     // console.log(params.id);
     return 'This action returns a #${id} cat';
   } */

  constructor(
    private readonly catsService: CatsService,
  ) {

  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    // return 'Add a new cat';
    this.catsService.create(createCatDto);
  }

  @Get()
  // findAll(@Query() query: ListAllEntities) {
  async findAll(): Promise<Cat[]> {
    // return `this actions returns all cats(limit: ${query.limit} items)`;
    return this.catsService.findAll();
  }

  // cats/1
  @Get(':id')
  findOne(@Param('id') id: string) {
    // console.log(params.id);
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
