var base = 'window';

class Food {
    constructor(name) {
        // 构造函数中有效
        var base = 'food';
        // 实例属性
        this.name = name;
        this.from  = 'food';
        console.log('Food constructor:', base);
    }

    // 使用 = 来定义一个属性和方法会被定义到实例上
    getName = function () {
        console.log('Food:', this.name)
    }

    // 直接定义一个方法，会被添加到原型对象上
    getBase() {
        console.log('Food getBase:', base);
        console.log('this:', this.from);
    }
}

Food.getPrice = function () {
    console.log('free');
}

class Rice extends Food {
    constructor(name) {
        // 当成函数调用时, 代表父类的构造函数，且返回的是子类的实例
        var instance = super(name);
        this.from = 'rice';
        console.log(instance);
        // this 指向子类
        console.log(instance === this);
        // 在子类的普通函数中super对象指向父类的原型对象
        // this 指向子类
        super.getBase();
    }

    static getFoodPrice() {
        // 在子类的静态方法中super对象指向父类
        super.getPrice();
    }
}

const r = new Rice('dongbei')
Rice.getFoodPrice();
