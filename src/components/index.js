
import textA from "./textA/index.vue";
import textB from "./textB/index.vue";


const Components = {
    textA,
    textB
};


const install = function(Vue) {
    Object.keys(Components).forEach(name => {
        Vue.component(name, Components[name]);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...Components
};

