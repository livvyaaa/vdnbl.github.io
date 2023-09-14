function validateCode2(code) {
    var codehash;
    codehash = CryptoJS.MD5(CryptoJS.MD5(code).toString()).toString();
    if (codehash === "c1c7e32c3d92cb8301803ff03738d9a0") {
        alert("trolled lol");
    }
}