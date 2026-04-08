function tampil(){
    var nama = document.getElementById("name").value;
    var kelas = document.getElementById("Email").value;

    var umur = document.querySelector('input[name="umur"]:checked');
    var jk = document.querySelector('input[name="wanita"]:checked') || 
             document.querySelector('input[name="Pria"]:checked');
    var tingkat = document.querySelector('input[name="SD"]:checked') || 
                  document.querySelector('input[name="SMP"]:checked') || 
                  document.querySelector('input[name="SMA"]:checked');

    document.getElementById("hasil").innerHTML =
        "Nama: " + nama +
        ", Kelas: " + kelas +
        ", Umur: " + (umur ? umur.value : "") +
        ", Jenis Kelamin: " + (jk ? jk.value : "") +
        ", Tingkatan: " + (tingkat ? tingkat.value : "");
}