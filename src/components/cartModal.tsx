import Image from "next/image";

export default function CartModal() {
  const cartItems = true;

  return (
    <div className="w-max absolute flex flex-col p-4 top-10 right-0 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white gap-6 z-20">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
        <div className="text-lg font-semibold">Shopping Cart</div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 ">
            <Image 
            src="https://my.alfred.edu/zoom/_images/foster-lake.jpg"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
            />
            <div>
              <div>
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-md">$50</div>
                </div>
                <div className="text-sm text-gray-500">
                  available
                </div>
              </div>
              <div className="flex text-sm justify-between">
                <span className="text-gray-500">Qty. 1</span>
                <span className="text-blue-500 cursor-pointer">Remove</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between font-semibold">
            <span>Subtotal</span>
            <span>$50</span>
          </div>
          <p className="text-sm text-gray-500 mt-2 mb-4">
            Shipping and taxes calculated at checkout
          </p>
          <div className="flex justify-between text-sm">
            <button className="rounded-md px-4 py-3 ring-1 ring-gray-300">View cart</button>
            <button className="rounded-md px-4 py-3 bg-black text-white">Checkout</button>
          </div>
        </div>
        </>
      )}
    </div>
  );
}
