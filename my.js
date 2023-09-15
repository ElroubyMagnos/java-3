var bag = document.getElementById('bag');

bag.style.backgroundColor = '#64CCC5';
bag.style.width = '200px';
bag.style.height = '100vh';

bag.style.position = 'absolute';
bag.style.left = '-190px';

function ShowBag()
{
    bag.style.left = '0';
}

function HideBag()
{
    bag.style.left = '-190px';
}
function AddtoBag(btn)
{
    var contents = btn.parentNode;
    bag.innerHTML += 
    `<div class="inbag">
        <img src="${contents.querySelector('img').src}" alt="">
        <p class="name">${contents.querySelectorAll('p')[0].innerText} <span class="dollar">${contents.querySelectorAll('p')[1].innerText}</span></p>
        <button onclick="RemoveFromBag(this);">Out of the Bag</button>
    </div>`;

    UpdateStats();
}

function RemoveFromBag(btn)
{
    bag.removeChild(btn.parentNode);

    UpdateStats();
}

function UpdateStats()
{
    var TotalPay = bag.querySelector('.stats').querySelectorAll('span')[0];
    var TotalCount = bag.querySelector('.stats').querySelectorAll('span')[1];
    TotalCount.innerText = bag.children.length - 2;
    TotalPay.innerText = '0';

    for (var i = 2; i < bag.children.length; i++)
    {
        TotalPay.innerText = parseInt(TotalPay.innerText) + parseInt(bag.children[i].querySelector('.dollar').innerText.replace('$', ''));
    }

    
}