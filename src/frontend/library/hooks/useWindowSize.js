import isMobile from 'is-mobile'
import { useEffect, useState } from 'react';
export const useDeviceInfo=()=> {
    
    const [mobile, setMobile] = useState(isMobile())
    useEffect(() => {
    setMobile(isMobile())
}, [])
    return [mobile];
  }