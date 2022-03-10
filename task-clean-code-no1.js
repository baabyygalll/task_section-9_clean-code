
/* class user {
    var id;
    var username;
    var password;
}

class userservice {
    user[] users =[];

    user[] getallusers() {
        return users;
    }

    user getuserbyid(userid) {
        return user.filter(userid);
    }
}


Berapa banyak kekurangan dalam penulisan kode tersebut? 
jawab : 4

Bagian mana saja terjadi kekurangan tersebut dan sertakan alasan dari kekurangan!
jawab :
1. class tidak memiliki constructor sebagai nilai awal
2. id, username, dan password seharusnya adalah paramater yg berada di dalam constructor dan diberi "this"
3. method getallusers() dan getuserbyid() seharusnya tidak diawali dengan "user" dan langsung nama methodnya saja
4.penamaan harusnya menggunakan camelCase sehingga kode lebih readable

*/

// contoh code yang benar :

class user {
    constructor(id, username, password){
        this.id = id;
        this.username = username;
        this.password = password;
    }
  
}

class userService {
    users =[];

    getAllUsers() {
        return users;
    }

    getUserById(userId) {
        return user.filter(userId);
    }
}
