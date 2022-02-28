const  BIDS_KEY = 'bids';

let bids = retrieveBids() ||[{
    amount: 45,
    user: 'someone',
}];



bidding();

function bidding(){
    console.log('called');
    let bidsHtml = '';
    bids.forEach(item => {
       bidsHtml += `
       <div>
        <span>${item.amount}</span>
        <span>${item.user}</span>
       </div>
       `;
    });
    document.querySelector('#bids').innerHTML = bidsHtml;
}
function addbid(user){
    
    let bid = {amount: document.querySelector(`#${user}`).value,
    user,
    };
    bids.push(bid);
    bidding();
    saveBids();
}
function saveBids(){
    localStorage.setItem(BIDS_KEY, JSON.stringify(bids));
}

function retrieveBids(){
    return JSON.parse(localStorage.getItem(BIDS_KEY));
}
