export const findByTestAttr = (component, attr) => { //refactor applied on line 20 but not line 26 of head.test
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};