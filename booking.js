const allBtn = document.getElementsByClassName
("stBtn");
let count = 0;
for (const btn of allBtn) {
    btn.addEventListener("click",function(e) {
        count = count + 1;
        document.getElementById("seat").innerText = count;
        console.log(click);
    })
}
li.appendChild(p);
li.appendChild(p2);
selectedContainer.appendChild(li);

totalPrice("price", parseInt(price));

grandTotalCost("total-price",parseInt(price));

setInnerText("seat", count);

const seat = [
    {seat-1, seat-2,seat-3,seat-4, seat-5, seat-6, seat-7,seat-8}
];
seat.forEach(function(value,index){
    console.log(value, index);
})





