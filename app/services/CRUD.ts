import {
  WhereFilterOp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import {db} from './FirebaseConfig';

export function CREATE(dataObject: any) {
  //cria uma tabela com id aleatorio
  addDoc(collection(db, 'users'), {
    ...dataObject,
  })
    .then(() => {
      console.log('SQL operation successful!');
    })
    .catch(e => {
      console.error(e);
    });

  //cria uma tabela com id especifico
  /* setDoc(doc(db, 'users', '1'), {
      name: 'Lalalala',
      state: 'Ohayo',
      country: '123456',
    })
      .then(() => {
        console.log('SQL operation successful!');
      })
      .catch(e => {
        console.log(e);
      }); */
}

export function READ(fieldName: string, opStr: WhereFilterOp, value: string) {
  // read using query
  getDocs(query(collection(db, 'users'), where(fieldName, opStr, value)))
    .then(usersEntries => {
      const users: {id: string}[] = [];
      usersEntries.forEach(entry => {
        users.push({id: entry.id, ...entry.data()});
      });
      //@ts-ignore
      console.log(users[0]);
      return users[0];
    })
    .catch(e => console.error(e));

  // read from 1 user, based on id
  /* getDoc(doc(db, 'users', '1'))
      .then(docData => {
        if (docData.exists()) {
          console.log(docData.data());
          console.log(docData.data().name);
        } else {
          console.log('Erro: dados nao existem no DB!');
        }
      })
      .catch(e => {
        console.log(e);
      }); */

  // read from all users
  /* getDocs(collection(db, 'users')).then(usersEntries => {
      const users: {id: string}[] = [];
      usersEntries.forEach(entry => {
        users.push({id: entry.id, ...entry.data()});
      });
      console.log('DADOS DE TODOS OS USUARIOS:', users);
    }); */
}

/* export function UPDATE(fieldsToUpdate: any, id: string) {
  updateDoc(doc(db, 'users', id), {
    ...fieldsToUpdate,
  })
    .then(() => {
      console.log('SQL operation successful!');
    })
    .catch(e => {
      console.log(e);
    });
} */

/* export function DELETE(id: string) {
  deleteDoc(doc(db, 'users', id))
    .then(() => {
      console.log('SQL operation successful!');
    })
    .catch(e => {
      console.log(e);
    });
} */
