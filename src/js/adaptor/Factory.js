// Create By WebStorm
// Author: rlgyzhcn
// Date: 2020/4/13 21:57

/**
 * 适配器工厂
 */
class Factory {
    static getInstance(name) {
        name = name.toLowerCase();
        return require('./' + name + '/' + name);
    }
}

module.exports = Factory;