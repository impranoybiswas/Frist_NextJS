'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      offset: 120,
      easing: 'ease-in-sine',
      mirror: false,
    });
  }, []);

  return null;
}
