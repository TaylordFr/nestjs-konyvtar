import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  books: Book[] = [
    {
      id: 1,
      author: 'A.A. Milne',
      title: 'Winnie The Pooh',
      isbn: '0525444432',
      publishYear: 1988,
      reserved: true,
    },
    {
      id: 2,
      author: 'A.A. Milne',
      title: 'Winnie The Pooh 2 - The Sequel',
      isbn: '4355521367',
      publishYear: 2001,
      reserved: false,
    },
    {
      id: 3,
      author: 'Me',
      title: 'Learn NestJs in 30 days',
      isbn: '1230003212',
      publishYear: 2023,
      reserved: true
    }
  ];
  nextId = 1;

  create(createBookDto: CreateBookDto) {
    this.books.push({
      ...createBookDto,
      id: this.nextId,
      reserved: false,
    });

    this.nextId++;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find(book => book.id == id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    const index = this.books.findIndex(book => book.id == id)

    if(index == -1){
      //TODO: Report non-existent book
    }

    this.books.splice(index, 1);
  }
}
