const state = {
    toDos: [],
    account: {},
    accountBalance: 0,
    isLoading: false
};

const mutations = {
    'SET_TO_DOS'(state, toDos) {
        state.toDos = [...toDos]
    },
    'TOGGLE_TASK_STATUS'(state, index) {
        let updatedTask = state.toDos.filter(todo => todo.id === index)[0];
        if (updatedTask) {
            updatedTask.isCompleted = !updatedTask.isCompleted;
            state.toDos = [
                ...state.toDos.filter(element => element.id !== index),
                updatedTask
            ]
        }
    },
    'REMOVE_TASK'(state, task) {
        const index = state.toDos.indexOf(task);
        if (index > -1) {
            state.toDos.splice(index, 1);
        }
    },
    'SET_ACCOUNT'(state, account) {
        state.account = account
    },
    'SET_ACCOUNT_BALANCE'(state, balance) {
        state.accountBalance = balance
    },
    'TOGGLE_LOADING'(state) {
        state.isLoading = !state.isLoading
    }
};

const actions = {
    setToDos: ({ commit }, toDos) => {
        commit("SET_TO_DOS", toDos)
    },
    toggleTaskStatus: ({ commit }, index) => {
        commit("TOGGLE_TASK_STATUS", index)
    },
    removeTask: ({ commit }, task) => {
        commit("REMOVE_TASK", task)
    },
    setAccount: ({ commit }, account) => {
        commit("SET_ACCOUNT", account)
    },
    setAccountBalance: ({ commit }, balance) => {
        commit("SET_ACCOUNT_BALANCE", balance)
    },
    toggleLoading: ({ commit }) => {
        commit("TOGGLE_LOADING")
    }
};

const getters = {
    toDos: state => {
        return state.toDos
    },
    doneToDos: state => {
        return state.toDos.filter(todo => todo.isCompleted)
    },
    pendingToDos: state => {
        return state.toDos.filter(todo => !todo.isCompleted)
    },
    remainingToDos: state => {
        return state.toDos.filter(todo => !todo.isCompleted).length
    },
    account: state => {
        return state.account
    },
    accountBalance: state => {
        return state.accountBalance
    },
    isLoading: state => {
        return state.isLoading
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};