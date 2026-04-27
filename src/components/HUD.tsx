import { useState, useEffect } from 'react';

export default function HUD() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Get current time in Costa Rica
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Costa_Rica',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      
      const crTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setTime(`${crTime} CR`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[50] hidden lg:flex flex-col font-mono text-[11px] text-[#F5F5F5]/40 leading-relaxed pointer-events-none">
       <span>NUVRO.ENGINEER</span>
       <span>LAT 10.0563°N · LON 84.4506°W</span>
       <span>SYSTEM ONLINE · {time}</span>
    </div>
  );
}
