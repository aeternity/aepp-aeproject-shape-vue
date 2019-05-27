export default {
    contractAddress: 'ct_2CGgcDvUarBGf5KFDArvCkVh4Pnj3NgWCYB2LY6Aw8Km4WPhtc',
    contractSource: 'contract ToDoManager =\n' +
        '\n' +
        '  record todo = {\n' +
        '    name: string,\n' +
        '    is_completed: bool}\n' +
        '\n' +
        '  record state = {\n' +
        '    map_user_todos: map(address, map(int, todo)),\n' +
        '    map_user_todo_count: map(address, int),\n' +
        '    map_user_todo_id: map(address, int)}\n' +
        '\n' +
        '\n' +
        '  public stateful function init() =\n' +
        '    { map_user_todos = {},\n' +
        '      map_user_todo_count = {},\n' +
        '      map_user_todo_id = {}}\n' +
        '\n' +
        '  public function get_todo_count(user: address) : int =\n' +
        '    Map.lookup_default(user, state.map_user_todo_count, 0)\n' +
        '\n' +
        '  private function get_todo_id(user: address) : int =\n' +
        '    Map.lookup_default(user, state.map_user_todo_id, 0)\n' +
        '\n' +
        '  public stateful function add_todo(todo_name: string) : int =\n' +
        '    let new_todo : todo = {\n' +
        '      name = todo_name,\n' +
        '      is_completed = false}\n' +
        '\n' +
        '    let count = get_todo_count(Call.caller) + 1\n' +
        '    let id = get_todo_id(Call.caller) + 1\n' +
        '\n' +
        '    put(state{map_user_todos[Call.caller = {}][id] = new_todo})\n' +
        '    put(state{map_user_todo_count[Call.caller] = count})\n' +
        '    put(state{map_user_todo_id[Call.caller] = id})\n' +
        '\n' +
        '    id\n' +
        '\n' +
        '  public stateful function edit_todo_state(todo_id: int, is_completed: bool) =\n' +
        '\n' +
        '    let current_todo : todo = get_todo_by_id\'(Call.caller, todo_id)\n' +
        '    let edited_todo : todo = {\n' +
        '      name = current_todo.name,\n' +
        '      is_completed = is_completed}\n' +
        '\n' +
        '    put(state{map_user_todos[Call.caller][todo_id] = edited_todo})\n' +
        '\n' +
        '  public stateful function edit_todo_name(todo_id: int, todo_name: string) =\n' +
        '\n' +
        '    let current_todo : todo = get_todo_by_id\'(Call.caller, todo_id)\n' +
        '    let edited_todo : todo = {\n' +
        '      name = todo_name,\n' +
        '      is_completed = current_todo.is_completed}\n' +
        '\n' +
        '    put(state{map_user_todos[Call.caller][todo_id] = edited_todo})\n' +
        '\n' +
        '  public stateful function delete_todo(todo_id: int) =\n' +
        '    let todos: map(int,todo) = Map.lookup_default(Call.caller, state.map_user_todos, {}) // get_todos_by_user(Call.caller)\n' +
        '    let updated_todos = Map.delete(todo_id, todos)\n' +
        '\n' +
        '    put(state{map_user_todos[Call.caller] = updated_todos})\n' +
        '\n' +
        '    let count = get_todo_count(Call.caller) - 1\n' +
        '    put(state{map_user_todo_count[Call.caller] = count})\n' +
        '\n' +
        '  public function get_todo_by_id(id: int) : todo =\n' +
        '    let todos: map(int,todo) = Map.lookup_default(Call.caller, state.map_user_todos, {})\n' +
        '    let result = switch(Map.lookup(id, todos))\n' +
        '                    // None => {}\n' +
        '                    Some(x) => x\n' +
        '\n' +
        '    result\n' +
        '\n' +
        '  public function get_todos() : list((int, todo)) =\n' +
        '\n' +
        '    let user_todos = Map.lookup_default(Call.caller, state.map_user_todos, {})\n' +
        '    let todos = Map.to_list(user_todos)\n' +
        '    todos\n' +
        '\n' +
        '  private function convert_bool_to_string(expression: bool) : string =\n' +
        '    switch(expression)\n' +
        '      true => "true"\n' +
        '      false => "false"\n' +
        '\n' +
        '  private function get_todo_by_id\'(user: address, id: int) : todo =\n' +
        '    let todos: map(int,todo) = Map.lookup_default(user, state.map_user_todos, {})\n' +
        '\n' +
        '    let result = switch(Map.lookup(id, todos))\n' +
        '                    // None => {}\n' +
        '                    Some(x) => x\n' +
        '\n' +
        '    result'
}