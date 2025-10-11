import Image from "next/image";

export default function CartModal() {
  const cartItems = true;

  return (
    <div className="w-max absolute flex flex-col p-4 top-10 right-0 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <div className="">
          <Image 
          src="https://my.alfred.edu/zoom/_images/foster-lake.jpg"
          alt=""
          width={72}
          height={96}
          className="object-cover rounded-md"
          />

        </div>
      )}
    </div>
  );
}
