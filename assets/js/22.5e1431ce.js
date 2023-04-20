(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{375:function(a,t,n){"use strict";n.r(t);var s=n(7),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"_1-定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义"}},[a._v("#")]),a._v(" 1.定义")]),a._v(" "),t("p",[a._v("区分函数的不同，是区分 函数名、返回值、参数列表(数量&类型) 的不同\n而 "),t("strong",[a._v("函数名相同 && 参数列表不同")]),a._v(" 的情况被称为"),t("strong",[a._v("函数重载")])]),a._v(" "),t("h3",{attrs:{id:"_2-区分重载函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-区分重载函数"}},[a._v("#")]),a._v(" 2.区分重载函数")]),a._v(" "),t("p",[a._v("虽然函数名相同，但OS会根据参数列表的不同自动分配对应函数")]),a._v(" "),t("h3",{attrs:{id:"_3-参数的缺省与默认"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-参数的缺省与默认"}},[a._v("#")]),a._v(" 3.参数的缺省与默认")]),a._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("void fun1(int a = 10, double b = 3.14){\n...\n}\nvoid fun2(char a, int b = 3);\n")])])]),t("p",[a._v("fun1()的a, b两参数有默认值， fun2()的第二参数有默认值，但注意\n默认值"),t("strong",[a._v("只需要在声明处写")]),a._v("，定义处再写会报错(指先声明原型后定义的情况)")]),a._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("int main(){\n\tfun1();//pm1默认，pm2默认\n\tfun1(1);//pm1重赋，pm2默认\n\tfun1(1, 3.0);//pm1重赋，pm2重赋\n}\n")])])]),t("p",[a._v("可见参数的传入是从左向右的\nATTENTIOIN：")]),a._v(" "),t("ol",[t("li",[a._v("有默认值的形参与重载函数结合使用会导致调用不明确，如")])]),a._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("void fun(int a);\nvoid fun(int a, double b = 2.9);\n此处若用fun(1)，会让OS不知道是第一个函数还是第二个函数\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("返回值不能作为重载的条件")]),a._v(" "),t("li",[a._v("形参为float, double（包括其他类似类型）互为重载的函数，调用时要注意形参形式")])]),a._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("void fun(float a);\nvoid fun(double a);\n")])])]),t("p",[a._v("如果输入fun(1.1F)则调用的是第一个重载函数，输入的是fun(1.1)则用的是第二个重载函数")])])}),[],!1,null,null,null);t.default=e.exports}}]);