const data = [
    {
        id:1,
        name:'Kamu Tea (คามุ ที) - วังหลัง',
        imageURL:'https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/3-CZC1VN5CBEXGAT/hero/2cac19cd03f84037a8046cd3d9a30b85_1585793335979199515.jpeg',
        type:'Partner, Bubble Tea'
    },
    {
        id:2,
        name:'Cafe Amazon (คาเฟ่ อเมซอน) - ถนนมหรรณพ',
        imageURL:'https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/3-CYTEUGBXT2D2TJ/hero/776901be512444519763199d5fe9a272_1593408148178779119.jpeg',
        type:'Partner, Coffee & Tea'
    },
    {
        id:3,
        name:'เก๋อาหารตามสั่ง - ถนนมหาจักร',
        imageURL:'https://food.grab.com/th/en/restaurant/%E0%B9%80%E0%B8%81%E0%B9%8B%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B1%E0%B9%88%E0%B8%87-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3-delivery/3-CZEXHF3KERJFGA',
        type:'Coupon, Partner, Cooked to Order'
    },
    {
        id:4,
        name:'ตี๋เย็นตาโฟรสเด็ด - ศาลาว่าการกรุงเทพฯ',
        imageURL:'https://food.grab.com/th/en/restaurant/%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B9%82%E0%B8%9F%E0%B8%A3%E0%B8%AA%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%94-%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-delivery/3-CZMTKBDTT2XJAJ',
        type:'Partner, Noodles'
    },
    {
        id:5,
        name:'BonChon (บอนชอน) - ท่ามหาราช',
        imageURL:'https://food.grab.com/th/en/restaurant/bonchon-%E0%B8%9A%E0%B8%AD%E0%B8%99%E0%B8%8A%E0%B8%AD%E0%B8%99-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%8A-delivery/THGFIST0000021a',
        type:'Partner, Fried Chicken'
    },
    {
        id:6,
        name:'Subway (ซับเวย์) - ท่ามหาราช',
        imageURL:'https://food.grab.com/th/en/restaurant/subway-%E0%B8%8B%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%A7%E0%B8%A2%E0%B9%8C-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%8A-delivery/3-CZCFHAATNRDJCN',
        type:'Partner, Fast Food'
    },
    {
        id:7,
        name:'McDonald',
        imageURL:'https://food.grab.com/th/en/restaurant/mcdonald-s-%E0%B9%81%E0%B8%A1%E0%B8%84%E0%B9%82%E0%B8%94%E0%B8%99%E0%B8%B1%E0%B8%A5%E0%B8%94%E0%B9%8C-%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%94%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B4%E0%B8%99-delivery/AWh64KYIZXYdMpch2Zem',
        type:'Partner, Burgers, Fast Food, Fried Chicken'
    },
    {
        id:8,
        name:'KHIANG (เขียง) - ถนนพระอาทิตย์',
        imageURL:'https://food.grab.com/th/en/restaurant/khiang-%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%87-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%97%E0%B8%B4%E0%B8%95%E0%B8%A2%E0%B9%8C-delivery/3-CZLGGETXRBV3A6',
        type:'Partner, Rice Bowls'
    },
    {
        id:9,
        name:'Potato Corner (โปเตโต้ คอร์เนอร์) - ถนนข้าวสาร',
        imageURL:'https://food.grab.com/th/en/restaurant/potato-corner-%E0%B9%82%E0%B8%9B%E0%B9%80%E0%B8%95%E0%B9%82%E0%B8%95%E0%B9%89-%E0%B8%84%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%99%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AA%E0%B8%B2%E0%B8%A3-delivery/3-CZLJEVDYC3JFL6',
        type:'Partner, Small Bites/Snacks'
    }
]
 
module.exports = data;