declare module "firebase" {
  export const apps: any[];
}

declare module "firebase/app" {
  export interface FirebaseApp {
    name: string;
    options: Record<string, any>;
    automaticDataCollectionEnabled: boolean;
  }
  export function initializeApp(config: Record<string, any>): FirebaseApp;
  export function getApps(): FirebaseApp[];
}

declare module "firebase/auth" {
  import type { FirebaseApp } from "firebase/app";

  export interface Auth {
    app: FirebaseApp;
  }

  export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
  }

  export function getAuth(app?: FirebaseApp): Auth;
  export function sendPasswordResetEmail(auth: Auth, email: string): Promise<void>;
  export function signInWithEmailAndPassword(auth: Auth, email: string, password: string): Promise<UserCredential>;
  export function createUserWithEmailAndPassword(auth: Auth, email: string, password: string): Promise<UserCredential>;
  export function signInWithPopup(auth: Auth, provider: GoogleAuthProvider): Promise<UserCredential>;
  export function signOut(auth: Auth): Promise<void>;
  export function onAuthStateChanged(auth: Auth, callback: (user: User | null) => void): Unsubscribe;

  export class GoogleAuthProvider {
    constructor();
    addScope(scope: string): GoogleAuthProvider;
    setCustomParameters(params: Record<string, any>): GoogleAuthProvider;
  }

  export interface UserCredential {
    user: User;
    credential: any;
  }

  export type Unsubscribe = () => void;
}

declare module "firebase/firestore" {
  import type { FirebaseApp } from "firebase/app";

  export interface Firestore {
    app: FirebaseApp;
  }

  export function getFirestore(app?: FirebaseApp): Firestore;
  export function collection(db: Firestore, path: string): CollectionReference;
  export function doc(db: Firestore, path: string): DocumentReference;
  export function addDoc(collection: CollectionReference, data: Record<string, any>): Promise<any>;
  export function getDoc(doc: DocumentReference): Promise<DocumentSnapshot>;
  export function getDocs(collection: CollectionReference): Promise<QuerySnapshot>;
  export function updateDoc(doc: DocumentReference, data: Record<string, any>): Promise<void>;
  export function deleteDoc(doc: DocumentReference): Promise<void>;
  export function setDoc(doc: DocumentReference, data: Record<string, any>): Promise<void>;

  export interface CollectionReference {
    id: string;
    path: string;
  }

  export interface DocumentReference {
    id: string;
  }

  export interface DocumentSnapshot {
    exists(): boolean;
    data(): Record<string, any> | undefined;
  }

  export interface QuerySnapshot {
    docs: DocumentSnapshot[];
    empty: boolean;
  }
}

declare module "firebase/storage" {
  import type { FirebaseApp } from "firebase/app";

  export interface Storage {
    app: FirebaseApp;
  }

  export function getStorage(app?: FirebaseApp): Storage;
  export function ref(storage: Storage, path: string): StorageReference;
  export function uploadBytes(storageRef: StorageReference, data: Blob): Promise<UploadResult>;
  export function getDownloadURL(storageRef: StorageReference): Promise<string>;

  export interface StorageReference {
    fullPath: string;
  }

  export interface UploadResult {
    bytesTransferred: number;
    totalBytes: number;
  }
}