import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    hbspt: any;
  }
}

export const HubSpotForm = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make sure the script is loaded
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: "20470162",
        formId: "3a9fca1a-c32a-4439-bf97-2d3a438f06fd",
        target: formContainerRef.current,
      });
    }
  }, []);

  return <div ref={formContainerRef} className="bg-gray-50 rounded-2xl p-8" />;
};