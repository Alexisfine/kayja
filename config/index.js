import LightMicro from '@others/light-micro.jpg'
import LightOperation from '@others/light-operation.jpg'
import LightSource from '@others/light-source.jpg'
import Partner1 from '@others/partner_1.png'
import Partner2 from '@others/partner_2.png'
import Partner3 from '@others/partner_3.png'
import Partner4 from '@others/partner_4.png'
import Partner5 from '@others/partner_5.png'
import Partner6 from '@others/partner_6.png'
import Partner7 from '@others/partner_7.png'
import Partner8 from '@others/partner_8.png'
import Partner9 from '@others/partner_9.png'
import Partner10 from '@others/partner_10.png'

export const NAV_MENU_ITEMS = [
    {
        name: "首页",
        href: "/",
        data: null,
    },
    {
        name: "关于我们",
        href: "/",
        data: null,
    },
    {
        name: "产品",
        href: "/",
        data:[
            {
                name: "光学操控",
                href: '/',
                img: "",
                products: [
                    {
                        name:"全息光镊SLM-HOT",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"双光阱光镊GW-DOT",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"四通道数字光处理投影系统FC-DLP",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                ]
            },
            {
                name: "光学显微成像系统",
                href: '/',
                img: "",
                products: [
                    {
                        name:"可见近红外宽场系统VIS—NIR_WFM",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"可见近红外光片系统VIS—NIR_BioS",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"近红外二区SIM成像系统NIR-SIM",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"Mini四色成像模组",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"nfjk",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"fnjkwe",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"wenjk",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"wefnj",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"efnjk",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"wfnjk",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                ]
            },
            {
                name: "光学模组",
                href: '/',
                img: "",
                products: [
                    {
                        name:"LED光源",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"激光光源",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                    {
                        name:"Mini宽场显微镜",
                        briefDesc: "基于扫描振镜光学元件",
                        href:"/"
                    },
                ]
            },
        ],
    },
    {
        name: "解决方案",
        href:"/",
        data: [
            {
                name:"根据案例",
                href:"/",
                products:[]
            },
            {
                name:"根据行业",
                href:"/",
                products:[]
            }
        ], 
    },
    {
        name: "新闻动态",
        href: "/",
        data: null,
    },
    {
        name: "联系我们",
        href: "/",
        data: null,
    }
]


export const PRODUCTS = [
    {
        name: "光学操控",
        href: '/',
        img: LightOperation,
        products: [
            {
                name:"全息光镊SLM-HOT",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"双光阱光镊GW-DOT",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"四通道数字光处理投影系统FC-DLP",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
        ]
    },
    {
        name: "光学显微成像系统",
        href: '/',
        img: LightSource,
        products: [
            {
                name:"可见近红外宽场系统VIS—NIR_WFM",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"可见近红外光片系统VIS—NIR_BioS",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"近红外二区SIM成像系统NIR-SIM",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"Mini四色成像模组",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"nfjk",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"fnjkwe",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"wenjk",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"wefnj",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"efnjk",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"wfnjk",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
        ]
    },
    {
        name: "光学模组",
        href: '/',
        img: LightMicro,
        products: [
            {
                name:"LED光源",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"激光光源",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"Mini宽场显微镜",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
        ]
    },
    {
        name: "光组件",
        href: '/',
        img: LightMicro,
        products: [
            {
                name:"LED光源",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"激光光源",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
            {
                name:"Mini宽场显微镜",
                briefDesc: "基于扫描振镜光学元件",
                href:"/"
            },
        ]
    },
]

export const ALLPRODUCTS = [
    {
        name:"全息光镊SLM-HOT",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
    {
        name:"双光阱光镊GW-DOT",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
    {
        name:"四通道数字光处理投影系统FC-DLP",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
    {
        name:"LED光源",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
    {
        name:"激光光源",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
    {
        name:"Mini宽场显微镜",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
    {
        name:"全息光镊SLM-HOT",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
    {
        name:"双光阱光镊GW-DOT",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
    {
        name:"四通道数字光处理投影系统FC-DLP",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
    {
        name:"LED光源",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
    {
        name:"激光光源",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
    {
        name:"Mini宽场显微镜",
        briefDesc: "基于扫描振镜光学元件",
        href:"/",
        img: LightSource,
    },
]


export const PARTNERS = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner7,
    Partner8,
    Partner9,
    Partner10,
]


export const MENU = [
    {
        name:"关于我们",
        content:[
            "凯佳简介",
            "凯佳能力",
            "人才招聘",
        ]
    },
    {
        name:"产品中心",
        content:[
            "光学显微成像系统",
            "光学操控",
            "光源",
        ]
    },
    {
        name:"技术与服务",
        content:[
            "系统方案",
            "软件服务",
            "应用案例",
            "技术支持",
        ]
    },
    {
        name:"技术与服务",
        content:[
            "系统方案",
            "软件服务",
            "应用案例",
            "技术支持",
        ]
    },
    
]
