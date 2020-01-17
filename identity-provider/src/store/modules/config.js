import { getField, updateField } from 'vuex-map-fields';

const state = {
    account: {
        publicKey: undefined,
        privateKey: undefined,
    },
    network: undefined,
    aeppUrl: undefined,
    status: undefined
};

const mutations = {
    updateField
}

const getters = {
    getField,
    getNetwork(state) {
        return getField(state.network);
    },
    getAeppUrl(state) {
        return getField(state.aeppUrl)
    }
}

const actions = {}

export default {
    state,
    mutations,
    getters,
    actions
}
