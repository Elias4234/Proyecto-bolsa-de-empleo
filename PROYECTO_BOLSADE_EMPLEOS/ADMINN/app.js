function searchBlog() {
    let filter = document.getElementById("filter").value.toUpperCase();

    let tableRecord = document.getElementById("tableRecord");

    let tr = tableRecord.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];

        if (td) {
            let textvalue = td.textContent || td.innerHTML;

            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

let fruits = ["apple", "cherry", "banana"];

fruits.indexOf(0);

var index,
    table = document.getElementById("tableRecord");

for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[4].onclick = function () {
        index = this.parentElement.rowIndex;
        table.deleteRow(index);
    };
}
