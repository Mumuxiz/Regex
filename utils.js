/**
 * Created by Mireia.
 * Date: 2019/10/17 14:12
 * Describe: 数组、对象、字符串、函数等常用工具函数
 */

/**
 * ============数组类===========
 */
const Array = {
    /**
     * 判断数组或者对象是否为空
     * @param  Array Or Object
     * @return  Boolean
     */
    isEmpty: function isEmpty(v) {
        return (
            (Array.isArray(v) && v.length === 0) || (Object.prototype.isPrototypeOf(v) && Object.keys(v).length === 0)
        );
    },
    /**
     * 去掉2个数组的共有元素
     * @param  Array
     * @param  Array  共有元素
     */
    difference: (arr, values) => arr.filter(v => !values.includes(v)),
    // difference([1,2,3], [1,2]) -> [3]
    /**
     * 计算数组中指定值的出现次数
     * @param  Array
     * @param  指定值
     */
    countOccurrences: (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0),
    // countOccurrences([1,1,2,1,2,3], 1) -> 3
    /**
     * 获取2个数组的交集
     * @param  Array
     * @param  Array
     */
    similarity: (arr, values) => arr.filter(v => values.includes(v))
    // similarity([1,2,3], [1,2,4]) -> [1,2]

};



/**
 * ==================事件===============
 *
 */
/**
 * 防抖: 高频事件触发n秒内只执行一次，如果n秒内重复触发，则重新计算时间
 * @param fn 需要防抖的函数
 * @param delay 时间间隔
 * @param immediately 第一次是否立即执行
 */
const debounce = (fn,delay=500,immediately=true) =>{
    let timer = null;
    let isFirstTime = true;
    return function(...args){
        clearTimeout(timer); // 重复触发时清除定时器
        if(isFirstTime && immediately){
            fn.apply(this,args);
            isFirstTime = false;
        } else {
            timer = setTimeout(()=>{
                fn.apply(this,args)
            },delay)
        }
    }
};

/**
 *   节流: 高频函数在指定时间内只执行一次，重复触发也只执行一次，稀释函数的执行频率
 *   @param fn 需要节流的函数
 *   @param delay 时间间隔
 *   @param immediately 第一次是否立即执行
 */
function throttle(fn,delay=500,immediately=true){
    let lock = false;
    let isFirstTime = true;
    return function(...args){
        if(lock) return false; // 加锁
        lock = true;
        if(isFirstTime && immediately){
            fn.apply(this,args);
            lock = false;
            return isFirstTime = false;
        }
        setTimeout(()=>{
            lock = false;
            fn.apply(this,args)
        },delay)
    }
}


/**
 * 获取滚动条位置
 */
const getScrollPos = (el = window) =>
    ( {x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
        y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop} );
// getScrollPos() -> {x: 0, y: 200}


/**
 * 回到顶部
 */
const scrollToTop = _ => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if(c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c/8);
    }
};

/**
 * 获取url中的参数
 */
const getUrlParameters = url =>
    Object.assign(...url.match(/([^?=&]+)(=([^&]*))?/g).map(m => {[f,v] = m.split('='); return {[f]:v}}));
    // getUrlParameters('http://url.com/page?name=Adam&surname=Smith') -> {name: 'Adam', surname: 'Smith'}


export default Array
