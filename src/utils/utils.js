export function isEmptyString(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}

let funcaddress;

//辅助防抖函数
var debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

//全局滚动触底监听函数
export function ToBottomEventSetting(callback){
    funcaddress = debounce(
        function(e) {
            var d = e.target;
            //文档内容实际高度（包括超出视窗的溢出部分）
            var scrollHeight = d.scrollHeight;
            //滚动条滚动距离
            var scrollTop = d.scrollTop;
            //窗口可视范围高度
            var clientHeight = d.clientHeight;
        
            if(clientHeight + scrollTop >= scrollHeight){
                callback();
            }
    },250);
    var d = window.document.getElementById("mscrollbar");
    d.addEventListener('scroll',funcaddress,true);
}

export function RemoveBottomEventSetting(){
    if(funcaddress == undefined || funcaddress == null){
        return;
    }
    var d = window.document.getElementById("mscrollbar");
    d.removeEventListener('scroll',funcaddress,true);
}