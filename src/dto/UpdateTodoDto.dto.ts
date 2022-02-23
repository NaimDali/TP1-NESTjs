import { AddTodoDto } from './AddTodoDto.dto';
import { PartialType } from '@nestjs/mapped-types';
import { TodoStatusEnum } from 'src/todo/enums/todo-status.enum';

export class UpdateTodoDTO extends PartialType(AddTodoDto) {
  status: TodoStatusEnum;
}
