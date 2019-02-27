
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';

@Injectable()
export class BankDBServiceProvider {

    BankData = [];

    constructor(public sqlite: SQLite,
        public platform: Platform) {
    }


    addBank(formData): Promise<any> {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('INSERT INTO banks(bank, bank_logo, ac_holder_name, ac_no, ifsc, nomine, phone, email, address, primary_no, secondary_no, fax, bank_email, documents, created_at, updated_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                        [formData.bank, formData.bank_logo, formData.ac_holder_name, formData.ac_no, formData.ifsc, formData.nomine, formData.phone, formData.email, formData.address, formData.primary_no, formData.secondary_no, formData.fax,formData. bank_email, formData.documents, formData.created_at, formData.updated_at])
                        .then(result => {
                            console.log("Data Inserted");
                            console.log(result);
                            resolve(result);
                        }).catch(error => console.log(error));
                }).catch(error => console.log(error));
        })
    }

    retrieveBank(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('SELECT * FROM banks', {})
                        .then(result => {
                            this.BankData = [];
                            for (var i = 0; i < result.rows.length; i++) {
                                this.BankData.push(
                                    {
                                        id: result.rows.item(i).id,
                                        bank: result.rows.item(i).bank,
                                        bank_logo: result.rows.item(i).bank_logo,
                                        ac_holder_name: result.rows.item(i).ac_holder_name,
                                        ac_no: result.rows.item(i).ac_no,
                                        ifsc: result.rows.item(i).ifsc,
                                        nomine: result.rows.item(i).nomine,
                                        phone: result.rows.item(i).phone,
                                        email: result.rows.item(i).email,
                                        address: result.rows.item(i).address,
                                        primary_no: result.rows.item(i).primary_no,
                                        secondary_no: result.rows.item(i).secondary_no,
                                        fax: result.rows.item(i).fax,
                                        bank_email: result.rows.item(i).bank_email,
                                        created_at: result.rows.item(i).created_at,
                                        documents: result.rows.item(i).documents,
                                        updated_at: result.rows.item(i).updated_at,
                                        
                                    })
                            }
                            resolve(this.BankData);
                            console.log(this.BankData);
                        }).catch(e => console.log(e));
                }).catch(e => console.log(e));
        });
    }


    deleteBank(rowid) {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('DELETE FROM banks WHERE id=?', [rowid])
                        .then(res => {
                            console.log(res);
                            resolve(res);
                        })
                        .catch(e => console.log(e));
                }).catch(e => console.log(e));
        });
    }


    // updateCard(formData) {
    //     return new Promise((resolve, reject) => {
    //         this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' }).then((db: SQLiteObject) => {
    //             db.executeSql('UPDATE cards SET bank=?, ac_holder_name=?, ac_no=?, card_no=?, ifsc=?, cvv=?, pin=?, phone=?, email=?, card_type=?, service_provider=?, bank_logo=?, provider_logo=?, expire_at=?, created_at=?, updated_at=? WHERE id=?',
    //                 [formData.bank, formData.ac_holder_name, formData.ac_no, formData.card_no, formData.ifsc, formData.cvv, formData.pin, formData.phone, formData.email, formData.card_type, formData.service_provider, formData.bank_logo, formData.provider_logo, formData.expire_at, formData.created_at, formData.updated_at, formData.id])
    //                 .then(res => {
    //                     resolve(res);
    //                 }, err => {
    //                     reject(err);
    //                 });
    //         });
    //     });
    // }



}