// firebase.js (CORE SINGLE SOURCE OF TRUTH)
// ⚠️ هذا الملف هو المصدر الوحيد لإعدادات فايربيس - عدّليه هنا فقط!

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* =========================
   🔥 FIREBASE CONFIG - مشروع الدكتور تامر خطاب 🔥
   ⚠️ عدّلي القيم دي هنا فقط، وهتتطبق على كل الصفحات
========================= */

const firebaseConfig = {
  apiKey: "AIzaSyCXOOWSZU5YW0diViWO23mIXojmTLIggi0",
  authDomain: "dr-tamer-khatab.firebaseapp.com",
  projectId: "dr-tamer-khatab",
  storageBucket: "dr-tamer-khatab.firebasestorage.app",
  messagingSenderId: "801994611384",
  appId: "1:801994611384:web:d91064d8549b25427fb24d",
  measurementId: "G-F341FN0EL6"
};

/* =========================
   INIT APP (SINGLETON)
========================= */

const app = initializeApp(firebaseConfig);

/* =========================
   SERVICES EXPORTS
========================= */

export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("🔥 Firebase Initialized - dr-tamer-khatab (Production Mode)");
