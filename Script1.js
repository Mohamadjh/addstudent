// JavaScript source code
function GenerateCaptcha() {
    document.getElementById('date').value = new Date().toISOString().substring(0, 10); /������ ������� ������ ��� ����� ������/
    var chr1 = Math.ceil(Math.random() * 10) + '';
    var chr2 = Math.ceil(Math.random() * 10) + '';
    var chr3 = Math.ceil(Math.random() * 10) + '';
    /��� ������ ����� �� �� ����� ������/
    var str = new Array(4).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });
    var captchaCode = str + chr1 + ' ' + chr2 + ' ' + chr3;
    
    document.getElementById("txtCaptcha").value = captchaCode;
    var x = document.getElementById("txtCaptcha");
    x.innerHTML = captchaCode;/���� ����� �������� /
}
function ValidCaptcha() {/�������� ��� �����  ������� �������/ 
    var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
    var str2 = removeSpaces(document.getElementById('txtCompare').value);
    if (str2 != "") {
        if (str1 == str2) {
            return true;

        }
        else {
            alert("please chek the capatcha");
            GenerateCaptcha();
            return false;
        }
    }
    else {
        return false;
    }
}

/* ��� �������� �� ����� */
function removeSpaces(string) {
     return string.split(' ').join('');
}
function clsAlphaNoOnly() {  /������ �� ������ ������� �� ��� �������� ��� ��� ���� ���� ������ ������ �����/
    var regex = new RegExp(/[A-Z][A-Za-z]+_\d$/);
     var str = document.getElementById('username').value;
    if (regex.test(str)) {

        return true;
    }
    else {
        alert("please enter the username like Mohamad_144852");
        return false;
    }
}
function namestudent(e) {/������ �� ����� ��� ������ ������ ������� ����� ������ ���/
    var regex = new RegExp(/[\u0600-\u06FF\s]/);
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);/������ ��� �� ����� �� ���� ����/
    if (regex.test(str)) {
        return true;
    }
       // alert("please enter the student name in arabic ");
        e.preventDefault();
    return false;
}
function phone() {
    var regex = new RegExp(/\+9[\d{2}]+\d$/);/���� ����� ��������/
    var str = document.getElementById('tel').value;
    if (regex.test(str)) {
        if (str.match(/\+963/)) {/��� ��� ������ ������ +963/
            regex = new RegExp(/\+963[\d{9}]$/);/���� ����� ��� ��� ������ ������ +963 �� ��� �����/
            if (regex.test(str)) {
                return true;
            }
            else {
                alert("please enter the phone It consists of ten digits");
                return false;
            }
        }
        else {
            regex = new RegExp(/\+9[\d{2}][\d{7}]$/);/���� ����� ��� ��� ������ ������ ��� +963 ���� �� 7 �����/
            if (regex.test(str)) {
                return true;
            }
            else {
                alert("please enter the phone It consists of seven digits");
                return false;
            }
        }
       
    }
    else {
        alert("please enter the phone correct");
        return false;
    }
}
var xx = 1;
function addData() {/����� �������� ��� ������/
    if (document.getElementById("tel").value == "") {
        alert("please input the phone");
    }
    if (ValidCaptcha() && document.getElementById("studentname").value != "" && document.getElementById("tel").value != "" && phone() && clsAlphaNoOnly()) {
        var userName = document.getElementById("username").value;
        var studentname = document.getElementById("studentname").value;
        var program = document.getElementById("program").value;
        var newRow = document.createElement("tr");/����� ��� ����/
        var newCell = document.createElement("td");/����� ��� ����/
        var newCell1 = document.createElement("td");
        var newCell2 = document.createElement("td");
        var newCell3 = document.createElement("td");
        newCell.innerHTML = xx;/*����� ����� ������� ��� ������*/
        newCell1.innerHTML = userName;
        newCell2.innerHTML = studentname;
        newCell3.innerHTML = program;
        newRow.append(newCell, newCell1, newCell2, newCell3);
        document.getElementById("rows").appendChild(newRow);
        GenerateCaptcha();
        document.getElementById("username").value = '';
        document.getElementById("studentname").value = '';
        document.getElementById("program").value = 'bit';
        document.getElementById("tel").value = '';
        document.getElementById("date").value = new Date().toISOString().substring(0, 10);
        document.getElementById("txtCompare").value = '';
        xx += 1;
        sort(1);
   }
    else {
        
    }

}
function filter() {/��� ������ ��� ��������/
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("view").value.toUpperCase(); /��� ������ ��� ������ ����/
    document.getElementById("lbluser").innerHTML = input;
    filter = input;
    table = document.getElementById("tb");
    tr = table.getElementsByTagName("tr");
    if (filter != "ALL") {
        for (i = 0; i < tr.length; i++) {/���� ����� ����� �� ���� ���� ������/
            td = tr[i].getElementsByTagName("td")[3];/��� �������� ������ ������� ����� ���� �����/
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";/��� �������/
                } else {
                    tr[i].style.display = "none";/����� �������/
                }
            }
        }
    }
    else {/��� ���� ������� �� ��� ��� ������ all/
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "";/�� ��� �� ������ ����� �� ������� ������� �� ���� ������ ���� ���� �������/
                }
            }
        }
    }
}
function sort(n) {/��� ������ ��� ��� ������� /
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tb");
    switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {/���� ����� ���� �� ����� ����� ��� ��� ��� �������/
                shouldSwitch = false;
                    x = rows[i].getElementsByTagName("td")[n];/����� �� ����� �����/
                    y = rows[i + 1].getElementsByTagName("td")[n];/����� �� ����� ���� ����/
                    if ( n != 1) {
                        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {/������ ��� ������ �� ����� ����� ����� ���� /
                            shouldSwitch = true;
                            break;
                        }
                    }
                
                    else {/����� ������ ����� ������� �� ��� ��������/
                        var matches = x.innerHTML.match(/\_\d+/);/������� ����� ������� �� �����/
                        var matches1 = y.innerHTML.match(/\_\d+/);
                        if (matches[0] > matches1[0]) {/�������� ��� ������/
                            shouldSwitch = true;
                            break;
                        }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);/������ ����� ������ �� ��� ����� ������/
                switching = true;
            }
        }
    
}
function tableToJson() {/������� ��� json/
    var table = document.getElementById("tb");
    var header = [];
    var rows = [];

    for (var i = 0; i < table.rows[0].cells.length; i++) {
        header.push(table.rows[0].cells[i].innerHTML);
    }

    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            row[header[j]] = table.rows[i].cells[j].innerHTML;
        }
        rows.push(row);
    }
    document.getElementById("txtarea").innerHTML = JSON.stringify(rows,null,2);/��� ����� ������ �� ��� ���� /
}