
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
                .then(result =>{
                    console.log("Password Table created ");
                }).catch(error => console.log(error));

                //Notes Table 
                db.executeSql('CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(100), description VARCHAR(1000), created_at TIMESTAMP, updated_at TIMESTAMP)', {})
                    .then(result => {
                        console.log("Notes Table created ");
                    }).catch(error => console.log(error));

                    
            }).catch(error => console.log(error));
    }

}