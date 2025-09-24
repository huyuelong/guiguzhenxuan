export const getTime = () => {
    let message = "";
    const hours = new Date().getHours();
    if (hours < 6) {
        message = "凌晨好";
    } else if (hours < 9) {
        message = "早上好";
    } else if (hours < 12) {
        message = "上午好";
    } else if (hours < 14) {
        message = "中午好";
    } else if (hours < 17) {
        message = "下午好";
    } else if (hours < 19) {
        message = "傍晚好";
    } else if (hours < 22) {
        message = "晚上好";
    } else {
        message = "深夜好";
    }
    
    return message;
}