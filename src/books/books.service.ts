import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    const newBook = new Book(createBookDto);
    return newBook.save();
  }

  findAll() {
    return Book.findAll();
  }

  findOne(id: number) {
    return Book.findByPk(id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return Book.update(updateBookDto, {
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return Book.destroy({ where: { id: id } });
  }
}
