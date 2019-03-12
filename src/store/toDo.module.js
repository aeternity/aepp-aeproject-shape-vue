const state = {
    publicKey: 'ak_zPoY7cSHy2wBKFsdWJGXM7LnSjVt6cn1TWBDdRBUMC7Tur2NQ',
    privateKey: '36595b50bf097cd19423c40ee66b117ed15fc5ec03d8676796bdf32bc8fe367d82517293a0f82362eb4f93d0de77af5724fba64cbcf55542328bc173dbe13d33',
    toDos: [
        {
            id: 0,
            title: 'Task 1',
            isCompleted: false
        },
        {
            id: 1,
            title: 'Task 2',
            isCompleted: false
        },
        {
            id: 2,
            title: 'Task 3',
            isCompleted: true
        },
        {
            id: 3,
            title: 'Task 4',
            isCompleted: true
        }
    ]
};

const mutations = {
    'SET_PRIVATE_KEY'(state, privateKey) {
        state.privateKey = privateKey;
    },
    'SET_PUBLIC_KEY'(state, publicKey) {
        state.publicKey = publicKey;
    },
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
    }
};

const actions = {
    setPrivateKey: ({ commit }, privateKey) => {
        commit('SET_PRIVATE_KEY', privateKey);
    },
    setPublicKey: ({ commit }, publicKey) => {
        commit('SET_PUBLIC_KEY', publicKey);
    },
    setToDos: ({ commit }, toDos) => {
        commit("SET_TO_DOS", toDos)
    },
    toggleTaskStatus: ({ commit }, index) => {
        commit("TOGGLE_TASK_STATUS", index)
    },
    removeTask: ({ commit }, task) => {
        commit("REMOVE_TASK", task)
    }
};

const getters = {
    publicKey: state => {
        return state.publicKey;
    },
    privateKey: state => {
        return state.privateKey;
    },
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
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};