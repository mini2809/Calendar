 let calenderEvents= [

    {
        "id":1,
        "date":"25-12-2022",
        "time":"8pm",
        "title":"Mumma bday",
        "type":"R"
    },
    {
        "id":2,
        "date":"27-10-2022",
        "time":"8pm",
        "title":"Billu Bday",
        "type":"R"
    },
    {
        "id":3,
        "date":"08-09-2022",
        "time":"8pm",
        "title":"Papa bday",
        "type":"R"
    },
    {
        "id":4,
        "date":"28-12-2022",
        "time":"8pm",
        "title":"Motu bday",
        "type":"R"
    },
    {
        "id":5,
        "date":"27-02-2022",
        "time":"8pm",
        "title":"mumma papa anniversary",
        "type":"R"
    }
    ,{
        "id":6,
        "date":"09-01-2022",
        "time":"8pm",
        "title":"bday",
        "type":"R"
    }
    ,{
        "id":7,
        "date":"01-10-2022",
        "time":"8pm",
        "title":"ni pta ",
        "type":"T"
    }
    ,{
        "id":8,
        "date":"24-05-2022",
        "time":"8pm",
        "title":"ni pta ",
        "type":"T"
    },
    {
        "id":9,
        "date":"05-03-2022",
        "time":"8pm",
        "title":"ni pta ",
        "type":"T"
    },{
        "id":10,
        "date":"08-05-2022",
        "time":"8pm",
        "title":"ni pta ",
        "type":"T"
    }
    ,{
        "id":11,
        "date":"03-02-2022",
        "time":"8pm",
        "title":"ni pta ",
        "type":"T"
    },
    {
        "id":12,
        "date":"09-01-2022",
        "time":"9pm",
        "title":"ni pta ",
        "type":"T"
    },
    {
        "id":13,
        "date":"09-01-2022",
        "time":"10pm",
        "title":"more than thirty characters will not fit in here ",
        "type":"T"
    },{
        "id":14,
        "date":"09-01-2022",
        "time":"11pm",
        "title":"task runner ",
        "type":"T"
    }
    
]
    
 
 function getCalenderEventsbyMonth(month){
     let resultarr=[];
    calenderEvents.map((d)=>{
        let arr = d.date.split('-');
        if(Number(arr[1])-1 == month)
        resultarr.push(d);
    });
    return resultarr;
}

