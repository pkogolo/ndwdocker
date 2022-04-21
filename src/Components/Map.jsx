import React from "react";

function Map() {
  return (
    <div className="bg-cover bg-no-repeat w-full h-full">
      <div className="hidden sm:grid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6774606189692!2d3.4309182147554864!3d6.4354577953440275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf526d3049849%3A0x338a9f3f226ac6a0!2sND%20Western!5e0!3m2!1sen!2sng!4v1650041103924!5m2!1sen!2sng"
          width={450}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="sm:hidden grid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6774606189692!2d3.4309182147554864!3d6.4354577953440275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf526d3049849%3A0x338a9f3f226ac6a0!2sND%20Western!5e0!3m2!1sen!2sng!4v1650041103924!5m2!1sen!2sng"
          width={350}
          height={350}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Map;
