import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';


const products = [
    { gift:". Free toy & free chaker",id: "MO512", name: "Alaskan Malamute Grey", prod: 2, price: "8,900,000",siz:"5kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo9lixZSTH7ppDT_stesF0GYlgHMrxieP-Q&s" },
     {gift:". Free toy & free chaker", id: "MO512", name: "Alaskan Malamute Grey", prod: 2, price: "8,900,000",siz:"1kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-r5mJnk90Z_GbxMiPOGbM3fynMmk9VT31A&s" },
    {gift:". Free toy & free chaker", id: "MO512", name: "Alaskan Malamute Grey", prod: 2, price: "8,900,000",siz:"2kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtvF66RcO_M8cnkKNyUHx4FLHm7Y85wf_-Ig&s" },
    {gift:". Free toy & free chaker", id: "MO512", name: "Alaskan Malamute Grey", prod: 2, price: "8,900,000",siz:"1.2kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUIlA5ovbDsI9JzFaQIxjNatEsS4haAm3sg&s" },
    { gift:". Free toy & free chaker",id: "MO512", name: "Alaskan Malamute Grey", prod: 2, price: "8,900,000",siz:"1kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbkIC9ueVxQOIcS0uaqpbDR_iJoNiC1H1mw&s" },
    { gift:". Free toy & free chaker",id: "MO512", name: "Alaskan Malamute Grey", prod: 2, price: "8,900,000",siz:"2.5kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFsMpSABdV-DbdRQVajJ35yUUyGkBO8wu6g&s=" },
    { gift:". Free toy & free chaker",id: "MO512", name: "Alaskan Malamute Grey", prod: 2, price: "8,900,000",siz:"1kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_77gcC33wPYvj-PxrU3aPZkEYA8T9dbNCUg&s" },
    {gift:". Free toy & free chaker", id: "MO512", name: "Alaskan Malamute Grey", prod: 2, price: "8,900,000",siz:"0.5kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4VlLNkKnGGp6x1XEsCaX6JI29hBCXXQSTA&s" },

   // Add more pets...
];
const ProductList = () => {
  return (
  <div className='mt-0'>
    <div>
   <button className="  absolute right-20 bg-transparent border-2 border-blue-900 text-gray-700 px-2 h-9 rounded-full  ">
   View more</button>
   </div>
   < div className=' mt-10  m-0  ' > 
         <h1 className='  text-sm font-bold text-blue-900 ml-16'>whats new?</h1>
         <h1 className='  font-bold text-blue-900  ml-16  text-2xl'>Tacke A  Look At Some Of Our Pets</h1>
   </div>
    <div className="grid auto-cols-auto sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
</div>
  </div>
    
  );
};

export default ProductList;
