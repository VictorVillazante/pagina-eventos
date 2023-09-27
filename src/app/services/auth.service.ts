import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }
  async loginWithEmailAndPassword(email: string, password: string): Promise<boolean> {
    try {
      const userCredential: any = await this.afAuth.signInWithEmailAndPassword(email, password);
      const user = "Bearer " + userCredential.user._delegate.accessToken;
      console.log(userCredential.user);

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
        // this.roles$.next(snapshot.docs[0].data().roles);
        // for (let i = 0; i < snapshot.docs[0].data().roles.length; i++) {
        //   let rol = snapshot.docs[0].data().roles[i] + "".toLowerCase().trim();
        //   rol = rol.toLowerCase();
        //   console.log("VERIFICAR ROL " + rol)
        //   console.log(rol + "==" + "PROFESOR".toLowerCase())
        //   console.log(rol == "PROFESOR".toLowerCase().trim());
        //   console.log("PROFESOR".toLowerCase().trim() == "PROFESOR".toLowerCase().trim());

        //   if (rol == "PROFESOR".toLowerCase().trim() || rol == "ADMINISTRADOR".toLowerCase().trim()) {
        //     console.log("SOLICITAR TOKEN-----------------------------------------------------------")
        //     this.solicitarToken().subscribe((data: any) => {
        //       console.log(data.access_token);
        //       this.token_youtube$.next(data.access_token);
        //     })
        //   }
        // }
      });
  }
}
