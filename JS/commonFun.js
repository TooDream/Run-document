// @ts-nocheck
// 滚动到顶部
const scrollToTop = (element) =>
    element.scrollIntoView({ behavior: "smooth", block: "start" });

// 滚动到底部
const scrollToBottom = (element) =>
    element.scrollIntoView({ behavior: "smooth", block: "end" });


// 检测元素是否在屏幕中
const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // `entry.target` is the dom element
            console.log(`${entry.target.id} is visible`);
        }
    });
};

const options = {
    threshold: 1.0,
};
const observer = new IntersectionObserver(callback, options);
const btn = document.getElementById("btn");
const bottomBtn = document.getElementById("bottom-btn");
observer.observe(btn);
observer.observe(bottomBtn);

// 检测设备
const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    ) ? "Mobile" : "Desktop";


// 从URL中获取参数
const getParamByUrl = (key) => {
    const url = new URL(location.href)
    return url.searchParams.get(key)
}

// 等待函数
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const asyncFn = async () => {
    await wait(1000)
    console.log('等待异步函数执行结束')
}

// 对象去重
function uniqueFunc(arr, uniId) {
    const res = new Map();
    return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}

function uniqueFunc2(arr, uniId) {
    let hash = {}
    return arr.reduce((accum, item) => {
        hash[item[uniId]] ? '' : hash[item[uniId]] = true && accum.push(item)
        return accum
    }, [])
}


