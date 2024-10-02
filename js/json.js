const user = {id: 1, name: 'Gorib Aamir', job: 'actor'}
// Javascript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

/**
{ id: 1, name: 'Gorib Aamir', job: 'actor' }
{"id":1,"name":"Gorib Aamir","job":"actor"}
 * 
 */


const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};

console.log(shop);


// json ...> stringify ...> object thake string a convert kora fala 

const shopJson = JSON.stringify(shop);
console.log(shopJson);

/**
 * {"owner":"Alia","address":{"street":"kochukhet voot er goli","city":"ranbir","country":"BD"},
 * "products":["laptop","mic","monitor","keyboard"],"revenue":45000,"isOpen":true,"isNew":false}
 */


// json ...> parse ...> object kora string thake 

const shopObj = JSON.parse(shopJson);
console.log(shopObj);


/**
 * {
  owner: 'Alia',
  address: { street: 'kochukhet voot er goli', city: 'ranbir', country: 'BD' },
  products: [ 'laptop', 'mic', 'monitor', 'keyboard' ],
  revenue: 45000,
  isOpen: true,
  isNew: false
}
 */