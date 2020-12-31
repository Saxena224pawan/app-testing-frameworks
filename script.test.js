const googleSearch = require('./script');

// mock database
dbMock =[
    'dog.com',
    'cat.com',
    'disney.com',
    'dogpic.com'
]

it('test example',()=>{
    expect('hello').toBe('hello');
    // googleSearch('test',dbMock);
})

it('is searching google',()=>{
    expect(googleSearch('testtest',dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpic.com'])
})

it('null and undefined',()=>{
    expect(googleSearch(undefined,dbMock)).toEqual([])
    expect(googleSearch(null,dbMock)).toEqual([])
})