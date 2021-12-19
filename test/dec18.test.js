import { groupByKey } from "../Dec-18";

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
            "state": "Uttar Pradesh",
            "city": "Achhnera"
        },
        "discription": "Its a good product",
        "date": "2016-08-13T08:01:36.225Z",
        "time": "2014-09-07T22:10:11.234Z",
        "image": "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png"
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
    },
    {
        "product_name": "Alphabet inc",
        "brand_name": "Alphabet",
        "price": 400,
        "address": {
            "state": "Maharashtra",
            "city": "Rahuri"
        },
        "discription": "Its a good product",
        "date": "2021-06-16T22:13:42.757Z",
        "time": "2020-12-05T08:51:32.647Z",
        "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
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
        "date": "2013-11-26T09:44:06.412Z",
        "time": "2012-08-09T21:32:54.135Z",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
    },
    {
        "product_name": "Tencent Limited",
        "brand_name": "Tencent",
        "price": 1300,
        "address": {
            "state": "Haryana",
            "city": "Bhiwani"
        },
        "discription": "Its a good product",
        "date": "2016-07-17T00:05:20.610Z",
        "time": "2014-08-21T05:33:00.125Z",
        "image": "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png"
    },
    {
        "product_name": "Alphabet inc",
        "brand_name": "Alphabet",
        "price": 400,
        "address": {
            "state": "Uttar Pradesh",
            "city": "Rath"
        },
        "discription": "Its a good product",
        "date": "2020-07-11T02:18:57.838Z",
        "time": "2021-06-29T09:25:10.206Z",
        "image": "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png"
    },
    {
        "product_name": "Alphabet inc",
        "brand_name": "Alphabet",
        "price": 400,
        "address": {
            "state": "Maharashtra",
            "city": "Manwath"
        },
        "discription": "Its a good product",
        "date": "2018-04-18T18:10:57.638Z",
        "time": "2012-03-09T23:43:49.908Z",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
    },
    {
        "product_name": "Tencent Limited",
        "brand_name": "Tencent",
        "price": 1300,
        "address": {
            "state": "Haryana",
            "city": "Rewari"
        },
        "discription": "Its a good product",
        "date": "2017-01-09T01:15:54.906Z",
        "time": "2016-06-20T21:02:42.953Z",
        "image": "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png"
    },
    {
        "product_name": "Tencent Limited",
        "brand_name": "Tencent",
        "price": 1300,
        "address": {
            "state": "Delhi",
            "city": "New Delhi"
        },
        "discription": "Its a good product",
        "date": "2018-09-09T19:39:38.345Z",
        "time": "2019-06-04T02:32:23.681Z",
        "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
    },
    {
        "product_name": "Alphabet inc",
        "brand_name": "Alphabet",
        "price": 400,
        "address": {
            "state": "Uttar Pradesh",
            "city": "Orai"
        },
        "discription": "Its a good product",
        "date": "2013-04-07T14:55:36.399Z",
        "time": "2012-03-18T11:35:35.623Z",
        "image": "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png"
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
        "date": "2021-04-04T03:07:00.947Z",
        "time": "2017-06-29T05:17:30.917Z",
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
        "date": "2014-08-12T11:20:57.515Z",
        "time": "2013-11-04T17:52:13.737Z",
        "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
    },
    {
        "product_name": "Tencent Limited",
        "brand_name": "Tencent",
        "price": 1300,
        "address": {
            "state": "Delhi",
            "city": "New Delhi"
        },
        "discription": "Its a good product",
        "date": "2012-11-11T13:31:48.160Z",
        "time": "2016-02-24T12:00:13.115Z",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
    },
    {
        "product_name": "Alphabet inc",
        "brand_name": "Alphabet",
        "price": 400,
        "address": {
            "state": "Maharashtra",
            "city": "Pathardi"
        },
        "discription": "Its a good product",
        "date": "2017-08-29T02:21:39.568Z",
        "time": "2021-10-28T09:13:35.809Z",
        "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
    },
    {
        "product_name": "Oil and Naturel gas limited",
        "brand_name": "Oil",
        "price": 1400,
        "address": {
            "state": "Puducherry",
            "city": "Yanam"
        },
        "discription": "Its a good product",
        "date": "2020-04-07T17:14:12.079Z",
        "time": "2017-05-09T00:40:47.970Z",
        "image": "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg"
    },
    {
        "product_name": "Tesla housing corporation",
        "brand_name": "Tesla",
        "price": 700,
        "address": {
            "state": "Manipur",
            "city": "Mayang Imphal"
        },
        "discription": "Its a good product",
        "date": "2019-02-28T01:48:13.109Z",
        "time": "2012-10-25T08:09:10.730Z",
        "image": "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png"
    },
    {
        "product_name": "Oil and Naturel gas limited",
        "brand_name": "Oil",
        "price": 1400,
        "address": {
            "state": "Puducherry",
            "city": "Karaikal"
        },
        "discription": "Its a good product",
        "date": "2017-08-11T17:04:02.724Z",
        "time": "2020-01-31T05:12:26.283Z",
        "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
    },
    {
        "product_name": "Oil and Naturel gas limited",
        "brand_name": "Oil",
        "price": 1400,
        "address": {
            "state": "Puducherry",
            "city": "Yanam"
        },
        "discription": "Its a good product",
        "date": "2012-08-25T00:35:01.343Z",
        "time": "2020-12-05T20:08:08.273Z",
        "image": "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png"
    },
    {
        "product_name": "Oil and Naturel gas limited",
        "brand_name": "Oil",
        "price": 1400,
        "address": {
            "state": "Uttarakhand",
            "city": "Rudrapur"
        },
        "discription": "Its a good product",
        "date": "2013-04-05T13:52:28.986Z",
        "time": "2015-05-17T00:12:20.075Z",
        "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
    },
    {
        "product_name": "Alphabet inc",
        "brand_name": "Alphabet",
        "price": 400,
        "address": {
            "state": "Uttar Pradesh",
            "city": "Ujhani"
        },
        "discription": "Its a good product",
        "date": "2014-06-19T15:10:43.761Z",
        "time": "2020-03-29T08:30:42.415Z",
        "image": "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg"
    },
    {
        "product_name": "Alphabet inc",
        "brand_name": "Alphabet",
        "price": 400,
        "address": {
            "state": "Uttar Pradesh",
            "city": "Firozabad"
        },
        "discription": "Its a good product",
        "date": "2020-05-05T09:30:59.400Z",
        "time": "2016-03-03T09:47:12.444Z",
        "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
    },
    {
        "product_name": "Tencent Limited",
        "brand_name": "Tencent",
        "price": 1300,
        "address": {
            "state": "Haryana",
            "city": "Panchkula"
        },
        "discription": "Its a good product",
        "date": "2018-06-21T16:13:30.878Z",
        "time": "2015-10-31T01:19:00.064Z",
        "image": "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg"
    },
    {
        "product_name": "Alphabet inc",
        "brand_name": "Alphabet",
        "price": 400,
        "address": {
            "state": "Uttar Pradesh",
            "city": "Lucknow"
        },
        "discription": "Its a good product",
        "date": "2013-10-01T09:05:42.877Z",
        "time": "2020-02-13T11:58:30.621Z",
        "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
    },
    {
        "product_name": "Oil and Naturel gas limited",
        "brand_name": "Oil",
        "price": 1400,
        "address": {
            "state": "Puducherry",
            "city": "Karaikal"
        },
        "discription": "Its a good product",
        "date": "2016-05-06T00:21:14.745Z",
        "time": "2018-10-13T07:52:44.309Z",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
    },
    {
        "product_name": "Tesla housing corporation",
        "brand_name": "Tesla",
        "price": 700,
        "address": {
            "state": "Manipur",
            "city": "Imphal"
        },
        "discription": "Its a good product",
        "date": "2020-05-28T17:31:27.196Z",
        "time": "2013-09-11T11:33:23.073Z",
        "image": "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png"
    },
    {
        "product_name": "Tesla housing corporation",
        "brand_name": "Tesla",
        "price": 700,
        "address": {
            "state": "Manipur",
            "city": "Mayang Imphal"
        },
        "discription": "Its a good product",
        "date": "2016-10-07T07:01:00.773Z",
        "time": "2013-06-05T06:21:22.800Z",
        "image": "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png"
    },
    {
        "product_name": "Tencent Limited",
        "brand_name": "Tencent",
        "price": 1300,
        "address": {
            "state": "Delhi",
            "city": "New Delhi"
        },
        "discription": "Its a good product",
        "date": "2013-02-28T05:14:19.231Z",
        "time": "2013-02-21T01:37:02.582Z",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
    },
    {
        "product_name": "Tencent Limited",
        "brand_name": "Tencent",
        "price": 1300,
        "address": {
            "state": "Haryana",
            "city": "Thanesar"
        },
        "discription": "Its a good product",
        "date": "2018-02-03T04:08:27.508Z",
        "time": "2014-03-31T04:29:59.858Z",
        "image": "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png"
    }
]

describe('Group By Key', () => {
    it("should group by product_name", () => {
        expect(groupByKey(apiResponse, 'product_name')).toBe(null);
    });

})
