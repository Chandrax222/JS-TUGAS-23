var data = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
var isi = [];
for (i = 0; i <=data.length; i++) {    
    if (data[i] >= 15) {
        isi.push(data[i]);
    }
}
console.log(isi);
