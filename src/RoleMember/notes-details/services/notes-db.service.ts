
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';

@Injectable()
export class NotesDBServiceProvider {

    notesData = [];

    constructor(public sqlite: SQLite,
        public platform: Platform) {
    }

    addNotes(formData): Promise<any> {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('INSERT INTO notes(title, description, created_at, updated_at) VALUES(?,?,?,?)',
                        [formData.title, formData.description, formData.created_at, formData.updated_at])
                        .then(result => {
                            console.log("Data Inserted");
                            console.log(result);
                            resolve(result);
                        }).catch(error => console.log(error));
                }).catch(error => console.log(error));
        })
    }

    retrieveNotes(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('SELECT * FROM notes', {})
                        .then(result => {
                            this.notesData = [];
                            for (var i = 0; i < result.rows.length; i++) {
                                this.notesData.push(
                                    {
                                        id: result.rows.item(i).id,
                                        title: result.rows.item(i).title,
                                        description: result.rows.item(i).description,
                                        created_at: result.rows.item(i).created_at,
                                        updated_at: result.rows.item(i).updated_at,
                                    })
                            }
                            resolve(this.notesData);
                            console.log(this.notesData);
                        }).catch(e => console.log(e));
                }).catch(e => console.log(e));
        });
    }


    deleteNotes(rowid) {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' })
                .then((db: SQLiteObject) => {
                    db.executeSql('DELETE FROM notes WHERE id=?', [rowid])
                        .then(res => {
                            console.log(res);
                            resolve(res);
                        })
                        .catch(e => console.log(e));
                }).catch(e => console.log(e));
        });
    }


    updateNotes(formData) {
        return new Promise((resolve, reject) => {
            this.sqlite.create({ name: 'DB-Asterisk-3.db', location: 'default' }).then((db: SQLiteObject) => {
                db.executeSql('UPDATE notes SET title=?, description=?, created_at=?, updated_at=? WHERE id=?',
                    [formData.title, formData.description, formData.created_at, formData.updated_at, formData.id])
                    .then(res => {
                        resolve(res);
                    }, err => {
                        reject(err);
                    });
            });
        });
    }



}