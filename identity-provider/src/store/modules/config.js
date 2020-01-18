import { getField, updateField } from 'vuex-map-fields';
import networks from '../../networks';

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
        return networks[state.network];
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
