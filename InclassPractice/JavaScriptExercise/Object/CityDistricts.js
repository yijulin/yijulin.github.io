let cityArray = [
    {
        name: 'taipei',
        ch_name: '台北',
        districts: [
            { id: 'taipei01', district: '中正區' },
            { id: 'taipei02', district: '萬華區' },
            { id: 'taipei03', district: '信義區' }]
    },
    {
        name: 'taoyuan',
        ch_name: '桃園',
        districts: [
            { id: 'taoyuan01', district: '桃園市' },
            { id: 'taoyuan02', district: '八德市' },
            { id: 'taoyuan03', district: '中壢市' }]
    },
    {
        name: 'taichung',
        ch_name: '台中',
        districts: [
            { id: 'taichung01', district: '台中市' },
            { id: 'taichung02', district: '大里市' },
            { id: 'taichung03', district: '清水市' }]
    }
];

let cityObject = {
    taipei: [
        { id: 'taipei01', district: '中正區' },
        { id: 'taipei02', district: '萬華區' },
        { id: 'taipei03', district: '信義區' }],
    taoyuan: [
        { id: 'taoyuan01', district: '桃園市' },
        { id: 'taoyuan02', district: '八德市' },
        { id: 'taoyuan03', district: '中壢市' }],
    taichung: [
        { id: 'taichung01', district: '台中市' },
        { id: 'taichung02', district: '大里市' },
        { id: 'taichung03', district: '清水市' }]
};

cityArray.forEach((places, index) => {
    let place = Object.keys(places);
    place.forEach((item, index) => {

        switch (item) {
            case 'districts':
                let key = Object.keys(places[item]);
                console.log(item);
                key.forEach((keys, index) => {

                    let districts = Object.keys(places[item][keys]);
                    districts.forEach((tk, index) => {
                        console.log("\t" + tk + " : " + places[item][keys][tk]);
                    });

                    //console.log(places[item][keys]);
                });

                break;
            default:
                console.log(item + " : " + places[item]);
                ;
        }

    });
    console.log("===============");
});
// let city = Object.keys(cityObject);
// city.forEach((place, index) => {
//     cityObject[place].forEach((item, index) => {
//         console.log(item.id + " : " + item.district);
//     });

// });

