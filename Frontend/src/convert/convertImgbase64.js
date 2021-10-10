const hexToBase64 = function(str) {
    return btoa(
        String.fromCharCode.apply(
            null,
            str
            .replace(/\r|\n/g, "")
            .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
            .replace(/ +$/, "")
            .split(" ")
        )
    );
};
export default hexToBase64;