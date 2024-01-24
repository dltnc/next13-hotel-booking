'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/vromonwala.png" 
      height="120" 
      width="260" 
      alt="Logo" 
    />
   );
}
 
export default Logo;
