export default {
  contractAddress: 'YOUR_DEPLOYED_CONTRACT_ADDRESS',
  contractSource: `contract ToDoManager =

  record todo = {
    name: string,
    is_completed: bool}

  record state = {
    map_user_todos: map(address, map(int, todo)),
    map_user_todo_count: map(address, int),
    map_user_todo_id: map(address, int)}


  stateful entrypoint init() =
    { map_user_todos = {},
      map_user_todo_count = {},
      map_user_todo_id = {}}

  entrypoint get_todo_count(user: address) : int =
    Map.lookup_default(user, state.map_user_todo_count, 0)

  private function get_todo_id(user: address) : int =
    Map.lookup_default(user, state.map_user_todo_id, 0)

  stateful entrypoint add_todo(todo_name: string) : int =
    let new_todo : todo = {
      name = todo_name,
      is_completed = false}

    let count = get_todo_count(Call.caller) + 1
    let id = get_todo_id(Call.caller) + 1

    put(state{map_user_todos[Call.caller = {}][id] = new_todo})
    put(state{map_user_todo_count[Call.caller] = count})
    put(state{map_user_todo_id[Call.caller] = id})

    id

  stateful entrypoint edit_todo_state(todo_id: int, is_completed: bool) =

    let current_todo : todo = get_todo_by_id'(Call.caller, todo_id)
    let edited_todo : todo = {
      name = current_todo.name,
      is_completed = is_completed}

    put(state{map_user_todos[Call.caller][todo_id] = edited_todo})

  stateful entrypoint edit_todo_name(todo_id: int, todo_name: string) =

    let current_todo : todo = get_todo_by_id'(Call.caller, todo_id)
    let edited_todo : todo = {
      name = todo_name,
      is_completed = current_todo.is_completed}

    put(state{map_user_todos[Call.caller][todo_id] = edited_todo})

  stateful entrypoint delete_todo(todo_id: int) =
    let todos: map(int,todo) = Map.lookup_default(Call.caller, state.map_user_todos, {}) // get_todos_by_user(Call.caller)
    let updated_todos = Map.delete(todo_id, todos)

    put(state{map_user_todos[Call.caller] = updated_todos})

    let count = get_todo_count(Call.caller) - 1
    put(state{map_user_todo_count[Call.caller] = count})

  entrypoint get_todo_by_id(id: int) : todo =
    let todos: map(int,todo) = Map.lookup_default(Call.caller, state.map_user_todos, {})
    let result = switch(Map.lookup(id, todos))
                    // None => {}
                    Some(x) => x

    result

  entrypoint get_todos() =

    let user_todos = Map.lookup_default(Call.caller, state.map_user_todos, {})
    let todos = Map.to_list(user_todos)
    todos

  private function convert_bool_to_string(expression: bool) : string =
    switch(expression)
      true => "true"
      false => "false"

  private function get_todo_by_id'(user: address, id: int) : todo =
    let todos: map(int,todo) = Map.lookup_default(user, state.map_user_todos, {})

    let result = switch(Map.lookup(id, todos))
                    // None => {}
                    Some(x) => x

    result`
}