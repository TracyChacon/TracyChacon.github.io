import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
   <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
  {/* Traveling Gradient Container Wrapper */}
  <div className="relative group p-[3px] rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-115 lg:h-115 shadow-2xl transition-transform duration-300 hover:scale-105">
    
    {/* The spinning background track creating the 'traveling' illusion */}
    <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_40%,var(--color-indigo-500),var(--color-purple-500),var(--color-indigo-500))] animate-spin-slow group-hover:animation-duration-2s" />
    
    {/* Inner Mask Context separating the image from the track */}
    <div className="relative w-full h-full rounded-full bg-white overflow-hidden p-1">
      <Image 
        src="/assets/images/linkedinProfilePhoto.jpg" 
        alt="Tracy Chacon Profile Photo"
        fill
        priority
        className="object-cover rounded-full p-1"
      />
    </div>
  </div>
</div>
   
  );
}