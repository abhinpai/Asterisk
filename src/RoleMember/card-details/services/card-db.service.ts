
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';

@Injectable()
export class CardDBServiceProvider {

    CardData = [];

    constructor(public sqlite: SQLite,
        public platform: Platform) {
    }

    addCard(formData): Promise<any> {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('INSERT INTO cards(bank, ac_holder_name, ac_no, card_no, ifsc, cvv, pin, phone, email, card_type, service_provider, bank_logo, provider_logo, expire_at, created_at, updated_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                        [formData.bank, formData.ac_holder_name, formData.ac_no, formData.card_no, formData.ifsc, formData.cvv, formData.pin, formData.phone, formData.email, formData.card_type, formData.service_provider, formData.bank_logo, formData.provider_logo, formData.expire_at, formData.created_at, formData.updated_at])
                        .then(result => {
                            console.log("Data Inserted");
                            console.log(result);
                            resolve(result);
                        }).catch(error => console.log(error));
                }).catch(error => console.log(error));
        })
    }

    retrieveCard(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('SELECT * FROM cards', {})
                        .then(result => {
                            this.CardData = [];
                            for (var i = 0; i < result.rows.length; i++) {
                                this.CardData.push(
                                    {
                                        id: result.rows.item(i).id,
                                        bank: result.rows.item(i).bank,
                                        ac_holder_name: result.rows.item(i).ac_holder_name,
                                        ac_no: result.rows.item(i).ac_no,
                                        ifsc: result.rows.item(i).ifsc,
                                        card_no: result.rows.item(i).card_no,
                                        cvv: result.rows.item(i).cvv,
                                        pin: result.rows.item(i).pin,
                                        email: result.rows.item(i).email,
                                        phone: result.rows.item(i).phone,
                                        card_type: result.rows.item(i).card_type,
                                        service_provider: result.rows.item(i).service_provider,
                                        bank_logo: result.rows.item(i).bank_logo,
                                        provider_logo: result.rows.item(i).provider_logo,
                                        created_at: result.rows.item(i).created_at,
                                        expire_at: result.rows.item(i).expire_at,
                                        updated_at: result.rows.item(i).updated_at,
                                        
                                    })
                            }
                            resolve(this.CardData);
                            console.log(this.CardData);
                        }).catch(e => console.log(e));
                }).catch(e => console.log(e));
        });
    }


    deleteCard(rowid) {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('DELETE FROM cards WHERE id=?', [rowid])
                        .then(res => {
                            console.log(res);
                            resolve(res);
                        })
                        .catch(e => console.log(e));
                }).catch(e => console.log(e));
        });
    }


    updateCard(formData) {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' }).then((db: SQLiteObject) => {
                db.executeSql('UPDATE cards SET bank=?, ac_holder_name=?, ac_no=?, card_no=?, ifsc=?, cvv=?, pin=?, phone=?, email=?, card_type=?, service_provider=?, bank_logo=?, provider_logo=?, expire_at=?, created_at=?, updated_at=? WHERE id=?',
                    [formData.bank, formData.ac_holder_name, formData.ac_no, formData.card_no, formData.ifsc, formData.cvv, formData.pin, formData.phone, formData.email, formData.card_type, formData.service_provider, formData.bank_logo, formData.provider_logo, formData.expire_at, formData.created_at, formData.updated_at, formData.id])
                    .then(res => {
                        resolve(res);
                    }, err => {
                        reject(err);
                    });
            });
        });
    }



}