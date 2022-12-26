module.exports = function (api) {
    api.cache();
    return {
        plugins: ['macros'],
    }
}
