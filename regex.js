//
//  统一正则库
//  @project
//  @author zmm
//  @create 2019年4月11日
//  @version V1.0
//

export default {
	name: "regex",
	//匹配中文
	ch: /^[\u4e00-\u9fa5]+$/,

	//匹配中文、下划线
	ch_: /^[\u4e00-\u9fa5_]+$/,

	//匹配英文（包含大小写）
	en: /^[A-Za-z]+$/,

	//匹配大写英文
	enlarge: /^[A-Z]+$/,

	//匹配小写英文
	enLow: /^[a-z]+$/,

	//匹配英文、数字（不区分大小写）
	ennum: /^[A-Za-z0-9]+$/,

	//匹配纯数字
	num: /^[0-9]+$/,

	//匹配字母、数字下划线（不区分大小写）
	ennum_: /^\w+$/,

	//匹配中文、字母、数字
	chennum: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,

	//匹配中文、字母、数字、下划线
	chennum_: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,

	//匹配中文、字母、数字、下划线
	chennum_s: /^[\u4E00-\u9FA5A-Za-z0-9_{}$-/》《]+$/,

	//匹配^%&',;=?$\"等字符
	Symbol: /[^%&',;=?$\x22]+/,

	//匹配邮箱地址
	email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,

	//匹配网址，eg：http://******
	url: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,

	//匹配11位手机号码
	phone: /^(1[3|5|6|7|8|9][0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,

	//匹配座机号码
	telephone: /(^[0-9]{3,4}\-[0-9]{7,8}(\(\d{1,6}\))?$)|(^[0-9]{7,8}(\(\d{1,6}\))?$)|(^\([0-9]{3,4}\)[0-9]{3,8}(\(\d{1,6}\))?$)/, //[格式]：0931-7577654(12) 区号可选，最后的分机号可选

	//匹配同时包含数字、小写字母、大写字母 6-18位
	superpassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,18}$/,

	//匹配月份
	month: /^(0?[1-9]|1[0-2])$/,

	//匹配单日期 eg:31号，13号，1号
	dateday: /^((0?[1-9])|((1|2)[0-9])|30|31)$/,

	//匹配QQ号码
	qq: /[1-9][0-9]{5,9}/,

	//匹配邮编
	postcode: /[1-9]\d{5}(?!\d)/,

	//匹配ip地址
	ip: /(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/,

	//金额校验：整数，如果带小数点最多支持三位
	money: /^[0-9]+[\.]?[0-9]{0,3}$/,

	//匹配文本、全角符号、部分半角符号
	onlyTxt: /[a-zA-Z0-9\u0391-\uFFE5\!\:\(\)\%\@\.\,\;\"\'\-\_\?\+]$/,

	//匹配纯文本、符号
	noHtml: /^[^<>\/\\]*$/,

	//匹配固定电话号码和手机号码
	TelAndMobile: /(^[0-9]{3,4}\-[0-9]{7,8}(\(\d{1,6}\))?$)|(^[0-9]{7,8}(\(\d{1,6}\))?$)|(^\([0-9]{3,4}\)[0-9]{3,8}(\(\d{1,6}\))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/,

	//匹配'%'
	basesearch: /[^%]/,

	//匹配18位身份证号
	idNumber: /^(\d{6})([1][9]|[2][0]{1})(\d{2})([1|0]{1})([1-9]{1})([0|1|2|3]{1})(\d{4})([0-9]|X|x)$/,

	//匹配经度
	longitude: /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/,

	//匹配纬度
	latitude: /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/,

	//含有非法字符
	illcharacter: /^[^`~<>×$&@#%&*^\|｜]*$/,

	//匹配正数、整数、小数(4位有效位数)的数字
	dian: /^[0-9]{1,10}\.{0,1}[0-9]{0,4}$/,

};
