//输出函数  export 命令除了输出变量，还可以输出函数或者是类（class）
function foo(){
	console.log("foo")
}

function koo(){
	console.log("koo");
}

export {
	//输出的名字是本来的名字
	foo,
	//可以使用as 作为别名
	koo as newKoo
}
