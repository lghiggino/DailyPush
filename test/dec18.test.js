import { groupByKey, groupByCompany } from "../Dec-18";

const apiResponse = [
    {
        "product_name": "Alphabet inc",
        "brand_name": "Alphabet",
        "price": 400,
        "address": {
            "state": "Uttar Pradesh",
            "city": "Allahabad"
        },
        "discription": "Its a good product",
        "date": "2014-05-02T07:49:43.882Z",
        "time": "2017-04-22T17:53:54.486Z",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
    },
    {
        "product_name": "Tencent Limited",
        "brand_name": "Tencent",
        "price": 1300,
        "address": {
            "state": "Chandigarh",
            "city": "Chandigarh"
        },
        "discription": "Its a good product",
        "date": "2017-03-04T14:23:27.599Z",
        "time": "2018-07-03T15:08:55.089Z",
        "image": "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png"
    },
    {
        "product_name": "Tencent Limited",
        "brand_name": "Tencent",
        "price": 1300,
        "address": {
            "state": "Delhi",
            "city": "Delhi"
        },
        "discription": "Its a good product",
        "date": "2021-08-24T17:25:01.691Z",
        "time": "2016-01-11T09:48:25.461Z",
        "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
    },
    {
        "product_name": "Alphabet inc",
        "brand_name": "Alphabet",
        "price": 400,
        "address": {
            "state": "Maharashtra",
            "city": "Talegaon Dabhade"
        },
        "discription": "Its a good product",
        "date": "2015-04-09T09:59:33.799Z",
        "time": "2021-02-08T15:07:50.265Z",
        "image": "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png"
    },
    {
        "product_name": "Tesla housing corporation",
        "brand_name": "Tesla",
        "price": 700,
        "address": {
            "state": "Manipur",
            "city": "Thoubal"
        },
        "discription": "Its a good product",
        "date": "2013-04-03T22:52:06.605Z",
        "time": "2015-02-14T23:13:09.077Z",
        "image": "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg"
    },
    {
        "product_name": "Alphabet inc",
        "brand_name": "Alphabet",
        "price": 400,
        "address": {
            "state": "West Bengal",
            "city": "Monoharpur"
        },
        "discription": "Its a good product",
        "date": "2017-05-01T01:09:43.301Z",
        "time": "2014-11-06T20:27:24.164Z",
        "image": "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png"
    },
    {
        "product_name": "Tencent Limited",
        "brand_name": "Tencent",
        "price": 1300,
        "address": {
            "state": "Chandigarh",
            "city": "Chandigarh"
        },
        "discription": "Its a good product",
        "date": "2019-01-15T03:12:37.655Z",
        "time": "2014-12-09T00:17:47.157Z",
        "image": "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png"
    }
]

const functionResponse = [
    {
        name: "Alphabet inc",
        data: [
            {
                "product_name": "Alphabet inc",
                "brand_name": "Alphabet",
                "price": 400,
                "address": {
                    "state": "Uttar Pradesh",
                    "city": "Allahabad"
                },
                "discription": "Its a good product",
                "date": "2014-05-02T07:49:43.882Z",
                "time": "2017-04-22T17:53:54.486Z",
                "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
            },
            {
                "product_name": "Alphabet inc",
                "brand_name": "Alphabet",
                "price": 400,
                "address": {
                    "state": "Maharashtra",
                    "city": "Talegaon Dabhade"
                },
                "discription": "Its a good product",
                "date": "2015-04-09T09:59:33.799Z",
                "time": "2021-02-08T15:07:50.265Z",
                "image": "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png"
            },
            {
                "product_name": "Alphabet inc",
                "brand_name": "Alphabet",
                "price": 400,
                "address": {
                    "state": "West Bengal",
                    "city": "Monoharpur"
                },
                "discription": "Its a good product",
                "date": "2017-05-01T01:09:43.301Z",
                "time": "2014-11-06T20:27:24.164Z",
                "image": "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png"
            },
        ]
    },
    {
        name: "Tencent Limited",
        data: [
            {
                "product_name": "Tencent Limited",
                "brand_name": "Tencent",
                "price": 1300,
                "address": {
                    "state": "Chandigarh",
                    "city": "Chandigarh"
                },
                "discription": "Its a good product",
                "date": "2017-03-04T14:23:27.599Z",
                "time": "2018-07-03T15:08:55.089Z",
                "image": "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png"
            },
            {
                "product_name": "Tencent Limited",
                "brand_name": "Tencent",
                "price": 1300,
                "address": {
                    "state": "Delhi",
                    "city": "Delhi"
                },
                "discription": "Its a good product",
                "date": "2021-08-24T17:25:01.691Z",
                "time": "2016-01-11T09:48:25.461Z",
                "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
            },
            {
                "product_name": "Tencent Limited",
                "brand_name": "Tencent",
                "price": 1300,
                "address": {
                    "state": "Chandigarh",
                    "city": "Chandigarh"
                },
                "discription": "Its a good product",
                "date": "2019-01-15T03:12:37.655Z",
                "time": "2014-12-09T00:17:47.157Z",
                "image": "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png"
            },
        ]
    },
    {
        name: "Tesla housing corporation",
        data: [
            {
                "product_name": "Tesla housing corporation",
                "brand_name": "Tesla",
                "price": 700,
                "address": {
                    "state": "Manipur",
                    "city": "Thoubal"
                },
                "discription": "Its a good product",
                "date": "2013-04-03T22:52:06.605Z",
                "time": "2015-02-14T23:13:09.077Z",
                "image": "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg"
            }
        ]
    }
]

describe('Group By Company', () => {
    it("should group by product_name", () => {
        const functionRes = groupByCompany(apiResponse)
        expect(functionRes[0].name).toBe( "Alphabet inc");
        expect(functionRes).toEqual(functionResponse);
    });

})
