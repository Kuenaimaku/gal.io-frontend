import * as aTypes from '../action-types'
import * as mTypes from '../mutation-types'
import api from '@/api'

const state = {
	loggingIn: false,
	loggedIn: false,
	user: null
}

const getters = {
	user: state => state.user,
	loggedIn: state => state.loggedIn
}

const actions = {
	async [aTypes.LOG_IN]({ commit }, [username, password]) {
		commit(mTypes.LOGGING_IN);

		try {
			const res = await api.accounts.login(username, password);
			console.log(res);
			window.sessionStorage.setItem('jwtToken', res.headers.Bearer);
			commit(mTypes.LOG_IN, res.body);
		}
		catch (err) {
			commit(mTypes.LOG_OUT);
			throw err;
		}
	},
	async [aTypes.LOG_OUT]({ commit }) {
		window.sessionStorage.removeItem('jwtToken');
		commit(mTypes.LOG_OUT);
	}
}

const mutations = {
	[mTypes.LOG_IN](state, user) {
		state.user = user;
		state.loggedIn = false;
		state.loggedIn = true;
	},
	[mTypes.LOGGING_IN](state) {
		state.loggingIn = true;
	},
	[mTypes.LOG_OUT](state) {
		state.username = null;
		state.loggingIn = false;
		state.loggedIn = false;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}