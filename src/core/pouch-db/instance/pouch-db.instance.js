import Pouch from 'pouchdb';

import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

const PouchDB = {
    model: {},
    isLoading: true,
    status: '',
    db: null,
    sync: null,
    getData: (key, defaultValue) => {
        if (!PouchDB.model[key]) {
            PouchDB.model[key] = new BehaviorSubject(null);

            PouchDB.instance.query(`docsdev/${ key }`).then((docs) => {
                PouchDB.model[key].next(docs.rows.map((element) => element.value));
            }).catch(() => {
                setTimeout(() => {
                    if (PouchDB.model[key] && !PouchDB.model[key].getValue()) {
                        PouchDB.model[key].next(defaultValue)
                    }
                }, 3000);
            });
        }

        return PouchDB.model[key].pipe(filter((data) => !!data));
    },
    onChange(data) {
        const model = data.change.docs.reduceByKey('_id');
        Object.keys(model).forEach((key) => { PouchDB.emitChange(model[key], key); })
    },
    emitChange(data, key) {
        const value = PouchDB.model[key] && PouchDB.model[key].getValue();

        if (PouchDB.model[key]) {
            if (value instanceof Array) {
                PouchDB.model[key].next(data.concat(value).unique('_id'));
            } else {
                PouchDB.model[key].next(data);
            }
        }
    }
};

const pouch = {
    init: ({ userName, userKey, enrollment = '' }) => {
        enrollment = enrollment.toLowerCase();
        
        const instance = new Pouch(enrollment);
        const remote = `https://${ userName }:${ userKey }${ process.env.REACT_APP_CLOUDANT_HOST }${ enrollment }`;
        
        PouchDB.instance = new Pouch(enrollment);
        
        PouchDB.sync = instance.sync(remote, { live: true, retry: true }).on('error', () => {
            console.log('error');
            localStorage.clear();
            window.location.reload();
        });
        
        return PouchDB;
    },
};

export const pouchDBInstance = pouch;