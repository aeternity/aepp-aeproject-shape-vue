export default {
    contractAddress: 'ct_2QRwG8wCzmrWvCjJ2Cv8mGKF4zVfoZ3J81yKmUoEYRbJAaZ88W',
    contractSource: 'contract ToDoManager =\n' +
        '\n' +
        '  record todo = {\n' +
        '    name: string,\n' +
        '    is_completed: bool}\n' +
        '\n' +
        '  record state = {\n' +
        '    m_user_todos: map(address, map(int, todo)),\n' +
        '    m_user_todo_count: map(address, int),\n' +
        '    m_user_todo_id: map(address, int)}\n' +
        '\n' +
        '\n' +
        '  public stateful function init() =\n' +
        '    { m_user_todos = {},\n' +
        '      m_user_todo_count = {},\n' +
        '      m_user_todo_id = {}}\n' +
        '\n' +
        '\n' +
        '  public function get_caller() : address =\n' +
        '    Call.caller\n' +
        '\n' +
        '  public function get_todo_count(user: address) : int =\n' +
        '    switch(Map.lookup(user, state.m_user_todo_count))\n' +
        '      None => 0\n' +
        '      Some(x) => x\n' +
        '\n' +
        '  private function get_todo_id(user: address) : int =\n' +
        '    switch(Map.lookup(user, state.m_user_todo_id))\n' +
        '      None => 0\n' +
        '      Some(x) => x\n' +
        '\n' +
        '  public stateful function add_todo(todo_name: string) : int =\n' +
        '    let new_todo : todo = {\n' +
        '      name = todo_name,\n' +
        '      is_completed = false}\n' +
        '\n' +
        '    let count = get_todo_count(Call.caller) + 1\n' +
        '    let id = get_todo_id(Call.caller) + 1\n' +
        '\n' +
        '    create_nested_map_if_not_exists(Call.caller)\n' +
        '\n' +
        '    put(state{m_user_todos[Call.caller][id] = new_todo})\n' +
        '    put(state{m_user_todo_count[Call.caller] = count})\n' +
        '    put(state{m_user_todo_id[Call.caller] = id})\n' +
        '\n' +
        '    id\n' +
        '\n' +
        '  private stateful function create_nested_map_if_not_exists(user: address) : bool =\n' +
        '    let is_exists = is_nested_map_exists(user)\n' +
        '    if(!is_exists)\n' +
        '      put(state{m_user_todos[Call.caller] = {}})\n' +
        '      true\n' +
        '    else\n' +
        '      false\n' +
        '\n' +
        '  private stateful function is_nested_map_exists(user: address) : bool =\n' +
        '    switch(Map.lookup(user, state.m_user_todos))\n' +
        '      None => false\n' +
        '      Some(x) => true\n' +
        '\n' +
        '  public stateful function edit_todo_state(todo_id: int, _is_completed: bool) =\n' +
        '\n' +
        '    let current_todo : todo = private_get_todo_by_id(Call.caller, todo_id)\n' +
        '    let edited_todo : todo = {\n' +
        '      name = current_todo.name,\n' +
        '      is_completed = _is_completed}\n' +
        '\n' +
        '    put(state{m_user_todos[Call.caller][todo_id] = edited_todo})\n' +
        '\n' +
        '  public stateful function edit_todo_name(todo_id: int, todo_name: string) =\n' +
        '\n' +
        '    let current_todo : todo = private_get_todo_by_id(Call.caller, todo_id)\n' +
        '    let edited_todo : todo = {\n' +
        '      name = todo_name,\n' +
        '      is_completed = current_todo.is_completed}\n' +
        '\n' +
        '    put(state{m_user_todos[Call.caller][todo_id] = edited_todo})\n' +
        '\n' +
        '  public stateful function delete_todo(todo_id: int) : bool =\n' +
        '    let todos: map(int,todo) = get_todos_by_user(Call.caller)\n' +
        '    let updated_todos = Map.delete(todo_id, todos)\n' +
        '\n' +
        '    put(state{m_user_todos[Call.caller] = updated_todos})\n' +
        '\n' +
        '    let count = get_todo_count(Call.caller) - 1\n' +
        '    put(state{m_user_todo_count[Call.caller] = count})\n' +
        '\n' +
        '    true\n' +
        '\n' +
        '  public function get_todo_by_id(id: int) : todo =\n' +
        '    let todos: map(int,todo) = get_todos_by_user(Call.caller)\n' +
        '\n' +
        '    let current_todo = get_todo(id, todos)\n' +
        '    current_todo\n' +
        '\n' +
        '  public function get_todos() : list((int, todo)) =\n' +
        '\n' +
        '    let user_todos = get_todos_by_user(Call.caller)\n' +
        '    let todos = Map.to_list(user_todos)\n' +
        '    todos\n' +
        '\n' +
        '  private function convert_bool_to_string(expression: bool) : string =\n' +
        '    switch(expression)\n' +
        '      true => "true"\n' +
        '      false => "false"\n' +
        '\n' +
        '  private function private_get_todo_by_id(user: address, id: int) : todo =\n' +
        '    let todos: map(int,todo) = get_todos_by_user(user)\n' +
        '\n' +
        '    get_todo(id, todos)\n' +
        '\n' +
        '  private function get_todos_by_user(user: address) : map(int, todo) =\n' +
        '    switch(Map.lookup(user, state.m_user_todos))\n' +
        '      None => {}\n' +
        '      Some(x) => x\n' +
        '\n' +
        '  private function get_todo(id: int, todos: map(int, todo)) : todo =\n' +
        '\n' +
        '    let new_todo : todo = {\n' +
        '      name = "",\n' +
        '      is_completed = false}\n' +
        '\n' +
        '    switch(Map.lookup(id, todos))\n' +
        '      None => new_todo\n' +
        '      Some(x) => x'
}