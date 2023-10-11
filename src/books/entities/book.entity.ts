import { Optional } from 'sequelize';
import {
  Column,
  DataType,
  Table,
  Model,
  AllowNull,
  NotNull,
} from 'sequelize-typescript';

type BookAttributes = {
  id: number;
  author: string;
  title: string;
  year: number;
};

type BookCreationAttributes = Optional<BookAttributes, 'id'>;

@Table
export class Book extends Model<BookAttributes, BookCreationAttributes> {
  @Column(DataType.STRING)
  author: string;

  @AllowNull(false)
  @NotNull
  @Column(DataType.STRING)
  title: string;

  @Column(DataType.INTEGER)
  year: number;
}
