
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';

@Injectable()
export class PasswordDBServiceProvider {

    PasswordData = [];

    constructor(public sqlite: SQLite,
        public platform: Platform) {
    }

    addPassword(formData): Promise<any> {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('INSERT INTO password(provider, username, email, password, url, description, logo_id, strength, created_at, updated_at, logo_path) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
                        [formData.provider, formData.username, formData.email, formData.password, formData.url, formData.description, formData.logo_id, formData.strength, formData.created_at, formData.updated_at, formData.logo])
                        .then(result => {
                            console.log("Data Inserted");
                            console.log(result);
                            resolve(result);
                        }).catch(error => console.log(error));
                }).catch(error => console.log(error));
        })
    }

    retrievePassword(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('SELECT * FROM password', {})
                        .then(result => {
                            this.PasswordData = [];
                            for (var i = 0; i < result.rows.length; i++) {
                                this.PasswordData.push(
                                    {
                                        id: result.rows.item(i).id,
                                        provider: result.rows.item(i).provider,
                                        username: result.rows.item(i).username,
                                        email: result.rows.item(i).email,
                                        password: result.rows.item(i).password,
                                        url: result.rows.item(i).url,
                                        description: result.rows.item(i).description,
                                        logo_id: result.rows.item(i).logo_id,
                                        strength: result.rows.item(i).strength,
                                        created_at: result.rows.item(i).created_at,
                                        updated_at: result.rows.item(i).updated_at,
                                        logo: result.rows.item(i).logo_path
                                    })
                            }
                            resolve(this.PasswordData);
                            console.log(this.PasswordData);
                        }).catch(e => console.log(e));
                }).catch(e => console.log(e));
        });
    }


    deletePassword(rowid) {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('DELETE FROM password WHERE id=?', [rowid])
                        .then(res => {
                            console.log(res);
                            resolve(res);
                        })
                        .catch(e => console.log(e));
                }).catch(e => console.log(e));
        });
    }


    updatePassword(formData) {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' }).then((db: SQLiteObject) => {
                db.executeSql('UPDATE password SET provider=?, username=?, email=?, password=?, url=?, description=?, logo_id=?, strength=?, created_at=?, updated_at=?, logo_path=? WHERE id=?',
                    [formData.provider, formData.username, formData.email, formData.password, formData.url, formData.description, formData.logo_id, formData.strength, formData.created_at, formData.updated_at, formData.logo, formData.id])
                    .then(res => {
                        resolve(res);
                    }, err => {
                        reject(err);
                    });
            });
        });
    }



}