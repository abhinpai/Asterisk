
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';

@Injectable()
export class DatabaseServiceProvider {

    constructor(public sqlite: SQLite,
        public platform: Platform) {

        this.platform.ready().then(() => {
            this.openDatabase();
        });
    }

    openDatabase() {
        this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
            .then((db: SQLiteObject) => {

                //Password Table 
                db.executeSql('CREATE TABLE IF NOT EXISTS password(id INTEGER PRIMARY KEY AUTOINCREMENT, provider VARCHAR(30), username VARCHAR(30), email VARCHAR(30), password VARCHAR(30), url VARCHAR(100), description VARCHAR(100), logo_id INTEGER, strength VARCHAR(20), created_at TIMESTAMP, updated_at TIMESTAMP, logo_path VARCHAR(100))', {})
                    .then(result => {
                        console.log("Password Table created ");
                    }).catch(error => console.log(error));

                //Notes Table 
                db.executeSql('CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(100), description VARCHAR(1000), created_at TIMESTAMP, updated_at TIMESTAMP)', {})
                    .then(result => {
                        console.log("Notes Table created ");
                    }).catch(error => console.log(error));

                // Credit-Debit card table
                db.executeSql('CREATE TABLE IF NOT EXISTS cards(id INTEGER PRIMARY KEY AUTOINCREMENT, bank VARCHAR(50), ac_holder_name VARCHAR(30), ac_no VARCHAR(30), card_no VARCHAR(25), ifsc VARCHAR(20), cvv VARCHAR(5), pin VARCHAR(10), phone VARCHAR(15), email VARCHAR(50), card_type VARCHAR(20), service_provider VARCHAR(20), bank_logo VARCHAR(100), provider_logo VARCHAR(100), expire_at  TIMESTAMP, created_at TIMESTAMP, updated_at TIMESTAMP)', {})
                    .then(result => {
                        console.log("Cards Table created ");
                    }).catch(error => console.log(error));

                // Bank table
                db.executeSql('CREATE TABLE IF NOT EXISTS banks(id INTEGER PRIMARY KEY AUTOINCREMENT, bank VARCHAR(100), bank_logo VARCHAR(100), ac_holder_name VARCHAR(60), ac_no VARCHAR(30), ifsc VARCHAR(25), nomine VARCHAR(60), phone VARCHAR(20), email VARCHAR(60), address VARCHAR(200), primary_no VARCHAR(20), secondary_no VARCHAR(20), fax VARCHAR(20), bank_email VARCHAR(60), documents VARCHAR(1000), created_at TIMESTAMP, updated_at TIMESTAMP)', {})
                    .then(result => {
                        console.log("Bank Table created ");
                    }).catch(error => console.log(error));


            }).catch(error => console.log(error));
    }

}

