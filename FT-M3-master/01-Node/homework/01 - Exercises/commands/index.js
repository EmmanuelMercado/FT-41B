const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
    print(process.cwd())
}

function date(print) {
    print(Date())
}

function echo(print,args) {
    print(args.join())
}

function ls() {}

function cat() {}

function head() {}

function tail() {}

function curl() {}

module.exports = {
    pwd,date,echo,ls,cat,head,tail,curl
};
