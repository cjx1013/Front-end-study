var uid = 0
export default class Dep{
    constructor() {
        // console.log('我是dep');

        // 用数组存储自己的订阅者，放的是Watcher实例
        this.subs = []
    }

    // 添加订阅
    addSub(sub) {
        this.subs.push(sub)
    }
    
    // 添加依赖
    depend() {
        // Dep.target就是一个我们自己指定的全局的位置，用window.target也行
        // 只要是全局唯一，没有歧义就行
        if(Dep.target) {
            this.addSub(Dep.target)
        }
    }

    // 通知更新
    notify() {
        // console.log('我是notify');
        // 浅克隆一份
        const subs = this.subs.slice()
        // 遍历
        for(let i = 0; i < subs.length; i++) {
            subs[i].update()
        }
    }
}