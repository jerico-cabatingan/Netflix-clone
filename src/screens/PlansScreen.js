import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs, addDoc, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { loadStripe } from '@stripe/stripe-js'
import db from '../firebase';
import './PlansScreen.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect( () => {
    const querySnapshot = async () => {
      return await getDocs(query(collection(db, "products"), where("active", "==", true)));
    }

    querySnapshot().then(doc => {
      doc.forEach(async productDoc => {
        products[productDoc.id] = productDoc.data();
        const priceSnap = await getDocs(collection(db, "products", productDoc.id, "prices"));
        priceSnap.docs.forEach(price => {
          products[productDoc.id].prices = {
            priceId: price.id,
            priceData: price.data()
          }
        })
      })
      setProducts(products);
    });
  }, []);
  
  const loadCheckout = async (priceId) => {
    const docRef = await addDoc(collection(db, 'customers', user.uid, 'checkout_sessions'), {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin
    });

    const snapshot = onSnapshot(docRef, async(snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occured: ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe('pk_test_51NjVWXJ9ILUREcJhtb3cQ1mgfDBuFbeTrV7RwzAyq34ngZZqH5BAfqNR3Hh1ijMkGJDEr4xzT4LKG9eGcbC4OM6e00glXyT4pz');
        stripe.redirectToCheckout({sessionId,});
      }
    });
  }

  return (
    <div className='plansScreen'>
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className='planScreen__plan' key={productId}>
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
          </div> 
        );
      })}
    </div>
  )
}

export default PlansScreen