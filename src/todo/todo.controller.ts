import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { UpdateTodoDTO } from 'src/dto/UpdateTodoDto.dto';
import { TodoService } from './todo.service';
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {
    this.todos = [new Todo('1', 'Sport', 'Faire du sport')];
  }
  todos: Todo[] = [];
  @Get()
  getTodos(): Todo[] {
    return this.todoService.GetToDos();
  }
  @Get('/:id')
  getTodoById(@Param('id') id): Todo {
    return this.todoService.GetToDoById(id);
  }
  @Delete('/:id')
  DeleteTodoById(@Param('id') id): Todo {
    return this.todoService.DeleteToDoById(id);
  }
  @Patch('/:id')
  UpdateTodoById(@Body() updateToDodto: UpdateTodoDTO, @Param('id') id): any {
    return this.todoService.UpdateToDoId(updateToDodto, id);
  }

  @Post()
  addTodo(@Body() newTodoData: Todo): Todo {
    let todo = new Todo();
    // const { name, description} = newTodoData;
    todo.id = uuidv4();
    todo = { ...todo, ...newTodoData };
    this.todos.push(todo);
    return todo;
  }
}
