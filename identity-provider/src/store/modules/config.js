import { getField, updateField } from 'vuex-map-fields';

const state = {
    account: {
        publicKey: undefined,
        privateKey: undefined,
    },
    network: undefined,
    aeppUrl: undefined
};

const mutations = {
    updateField
}

const getters = {
    getField
}

const actions = {}

export default {
    state,
    mutations,
    getters,
    actions
}
