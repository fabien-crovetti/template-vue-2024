import MockAdapter from 'axios-mock-adapter';

const mockSample = (mock: MockAdapter) => {
    mock.onGet('/app-data').reply(() => [200, {
        status: 'loaded'
    }]);


    mock.onGet('/books').reply(() => [200, [
        {title:'The Gunslinger',author:'Stephen King',date:1982},
        {title:'The Drawing of the Three',author:'Stephen King',date:1987},
        {title:'The Waste Lands',author:'Stephen King',date:1991},
        {title:'Wizard and Glass',author:'Stephen King',date:1997},
        {title:'Wolves of the Calla',author:'Stephen King',date:2003},
        {title:'Song of Susannah',author:'Stephen King',date:2004},
        {title:'The Dark Tower',author:'Stephen King',date:2004},
        {title:'The Wind Through the Keyhole',author:'Stephen King',date:2012},

        {title:'Wizard\'s First Rule',author:'Terry Goodkind',date:1994},
        {title:'Stone of Tears',author:'Terry Goodkind',date:1995},
        {title:'Blood of the Fold',author:'Terry Goodkind',date:1996},
        {title:'Temple of the Winds',author:'Terry Goodkind',date:1997},
        {title:'Soul of the Fire',author:'Terry Goodkind',date:1999},
        {title:'Faith of the Fallen',author:'Terry Goodkind',date:2000},
        {title:'The Pillars of Creation',author:'Terry Goodkind',date:2001},
        {title:'Naked Empire',author:'Terry Goodkind',date:2003},

    ]]);
    mock.onGet('/books/repartition').reply(() => [200, {
        data: [1,1,1,1,1,2,1,2,1,3,2,1,1],
        labels:['1982', '1987', '1991', '1994', '1995', '1996', '1997', '1999', '2000', '2001', '2003', '2004', '2012'],
    }]);

};

export default mockSample;
