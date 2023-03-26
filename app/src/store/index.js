import {createStore} from 'vuex'
import axios from "axios"


export default createStore({
    state: {
        users: []
    },
    getters: {},
    mutations: {
        setProductData(state, userData) {
            state.users = userData.map(user => {
                return {
                    name: user.name,
                    job_title: user.job_title,
                    coordinates: user.coordinates,
                };
            });
        }

    },
    actions: {
        fetchProducts({commit}) {
            const baseURL = "https://ar.lyceumland.ru/api/user";
            axios
                .get(baseURL)
                .then(response => {
                    commit("setUserData", response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    modules: {}
})
