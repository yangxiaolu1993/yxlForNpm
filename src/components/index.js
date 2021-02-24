import Vue from "vue";
import textA from "./textA/index.vue";
import textB from "./textB/index.vue";




const install = function(Vue,opts = {}) {

}
const Components = {
    textA,
    textB
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};


// import testA from './textA/index.js'
// import testB from './textB/index.js'
// export default {
//     install(Vue) {
//         Vue.use(testA);
//         Vue.use(testB)
//     },
// }
