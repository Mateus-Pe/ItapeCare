document.addEventListener("DOMContentLoaded", function() {
    let navDivs = document.getElementsByClassName("navDiv");
    let listItems = document.getElementsByClassName("listItemCollapse");
    let divRec = document.getElementsByClassName("divRec");

    Array.from(navDivs).forEach(navDiv => {
        navDiv.addEventListener('mouseleave', () => {
            Array.from(listItems).forEach(item => {
                item.classList.add("collapse");
            });
            Array.from(divRec).forEach(item => {
                item.classList.remove("col-12");
                item.classList.add("col-auto");
            });
        });;
        

        navDiv.addEventListener('mouseenter', () => {
            Array.from(listItems).forEach(item => {
                item.classList.remove("collapse");
            }); 
            Array.from(divRec).forEach(item => {
                item.classList.remove("col-auto");
                item.classList.add("col-12");
            });
            
        });
    });
});
