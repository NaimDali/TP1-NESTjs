import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTodoDTO } from 'src/dto/UpdateTodoDto.dto';
import { Todo } from 'src/todo/Model/todo.model';

@Injectable()
export class TodoService {
  private t = new Todo('a1', 'naim');
  private tt = new Todo('b1', 'med hedi');
  private todos: Todo[] = [this.t, this.tt];

  GetToDos(): any {
    return this.todos;
  }

  GetToDoById(id): any {
    let found = this.todos.find((x) => x.id === id);
    if (!found) throw new NotFoundException('todo not found');
    return found;
  }

  DeleteToDoById(id): any {
    let found = this.GetToDoById(id);
    this.todos = this.todos.filter((x) => x.id != found.id);
  }

  UpdateToDoId(updateToDodto: UpdateTodoDTO, id: string): any {
    let found = this.GetToDoById(id);
    found.name = updateToDodto.name ?? found.name;
    found.description = updateToDodto.description ?? found.description;
    found.status = updateToDodto.status ?? found.status;
    return this.todos;
  }
}
