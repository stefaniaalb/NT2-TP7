import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { EASY, HARD } from "../difficulties"


export default new Vuex.Store({
    state: {
        difficulty: HARD,
        message: '',
        winner: false,
        color: "", 
        reset: ""



    },
    actions: {
        changeDifficulty({ commit}, value) {
            commit("isHard", value)
        },
        changeColor( {commit}, value) {
            commit("newColor", color)
        }, 
        changeWinner({commit}, value) {
            commit("winner", value)
        },
        reset( {commit}, reset) {
            commit("reset", reset);
        }

    }, 
    mutations: {
        changeDifficulty(state, value) {
            state.difficulty = value;
        },
        newColor(state, value) {
            state.color = color
        },
        reset(state, reset) {
            state.reset = reset;
        }
    }
}) 