import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto, createBookSchema } from './dto/create-book.dto';
import { UpdateBookDto, updateBookSchema } from './dto/update-book.dto';
import { ZodValidationPipe } from '../core/pipes/zod-validation-pipe';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(
    @Body(new ZodValidationPipe(createBookSchema)) createBookDto: CreateBookDto,
  ) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body(new ZodValidationPipe(updateBookSchema)) updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.booksService.remove(+id);
  }
}
