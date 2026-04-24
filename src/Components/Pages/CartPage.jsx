import React from "react";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";
import Button from "../ElementsUi/Button";

export default function CartPage({ cartItems, cartCount, onIncrease, onDecrease, onCheckout }) {
  const fallbackImage = "/Img/pijama5.jpeg";

  const total = cartItems.reduce((sum, item) => {
    const unitPrice = item.product.discountPrice || item.product.price;
    return sum + unitPrice * item.quantity;
  }, 0);

  const handlePay = () => {
    if (cartItems.length === 0) {
      alert("Tu carrito esta vacio.");
      return;
    }

    alert("Simulacion de pago con tarjeta: Paso 1 de 3");
    const cardNumber = prompt("Ingresa numero de tarjeta (simulado):", "4111111111111111");
    if (!cardNumber) return;

    alert("Simulacion de pago con tarjeta: Paso 2 de 3");
    const cardName = prompt("Ingresa nombre del titular:", "Usuario Demo");
    if (!cardName) return;

    alert("Simulacion de pago con tarjeta: Paso 3 de 3");
    const cvv = prompt("Ingresa CVV:", "123");
    if (!cvv) return;

    const approved = confirm(`Confirmar pago por $${total.toLocaleString()} con tarjeta terminada en ${cardNumber.slice(-4)}?`);
    if (!approved) {
      alert("Pago cancelado.");
      return;
    }

    alert("Pago aprobado. Gracias por tu compra.");
    if (onCheckout) onCheckout(cartItems);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 w-full max-w-7xl mx-auto mt-24 px-4 py-10">
          <h3 className="text-3xl font-bold text-indigo-950 mb-6">Carrito</h3>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md shadow-indigo-100 p-6 tex-indigo-600">
              Tu carrito esta vacio.
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md shadow-indigo-100 divide-y">
              {cartItems.map((item) => {
                const unitPrice = item.product.discountPrice || item.product.price;
                return (
                  <div key={item.product.id} className="p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <img
                        src={item.product.image || fallbackImage}
                        alt={item.product.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = fallbackImage;
                        }}
                        className="w-20 h-20 rounded-lg object-cover bg-gray-200"
                      />
                      <div className="min-w-0">
                        <p className="text-indigo-800 font-semibold truncate">{item.product.title}</p>
                        <p className="text-indigo-500 text-sm">${unitPrice.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Button size="small" onClick={() => onDecrease(item.product.id)}>-</Button>
                      <span className="w-8 text-center font-semibold text-gray-800">{item.quantity}</span>
                      <Button size="small" onClick={() => onIncrease(item.product.id)}>+</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <div className="bg-white rounded-xl shadow-md shadow-indigo-100 p-4 min-w-55">
              <p className="text-indigo-600 text-sm">Total</p>
              <p className="text-2xl font-bold text-indigo-800">${total.toLocaleString()}</p>
              <div className="mt-4 flex justify-end">
                <Button size="medium" state="enabled" onClick={handlePay}>
                  Pagar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
