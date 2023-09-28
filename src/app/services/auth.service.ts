import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  roles$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  email$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }
  async loginWithEmailAndPassword(email: string, password: string): Promise<boolean> {
    try {
      const userCredential: any = await this.afAuth.signInWithEmailAndPassword(email, password);
      const user = "Bearer " + userCredential.user._delegate.accessToken;
      console.log(userCredential.user);
      this.user$.next(user);
      let emailObtenido=userCredential.user._delegate.email;
      this.email$.next(emailObtenido);
      this.obtenerRoles(user + "", userCredential.user._delegate.uid + "");
      return true;
    } catch (error) {
      console.log("Problemas login");
      return false;
    }
  }


  obtenerRoles(token: any, uid: any) {
    this.firestore
      .collection('usuarios', (ref) => ref.where('uuid', '==', uid))
      .get()
      .subscribe((snapshot: any) => {
        console.log("OBTENER ROLES")
        console.log(snapshot.docs[0].data().roles);
        this.roles$.next(snapshot.docs[0].data().roles);
      });
  }
}
