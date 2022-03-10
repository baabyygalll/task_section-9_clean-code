class kendaraan {
    constructor(roda, kecepatan){
    this.roda = 0;
    this.kecepatan = 0;
    }
    
}

class mobil extends kendaraan {


    berjalan(){
       return this.tambahKecepatan(10);
    }
  


    tambahKecepatan(kecepatanBaru) {
    return this.kecepatan = this.kecepatan + kecepatanBaru;
    }
}

  
    mobilCepat = new mobil();
    mobilCepat.berjalan();
    mobilCepat.berjalan();
    mobilCepat.berjalan();

    mobilLamban = new mobil();
    mobilLamban.berjalan();
    



