import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ShareFAQ = () => {
  // Social links data object
  const socialLinks = {
    facebook: {
      url: "https://www.facebook.com/",
      icon: <FaFacebook size={24} />,
      className: "text-blue-600 hover:text-blue-800"
    },
    twitter: {
      url: "https://x.com/",  // Placeholder for Twitter link
      icon: <FaTwitter size={24} />,
      className: "text-blue-400 hover:text-blue-600"
    },
    linkedin: {
      url: "https://github.com/",
      icon: <FaLinkedin size={24} />,
      className: "text-blue-700 hover:text-blue-900"
    }
  };

  return (
    <div className="mt-8 text-center">
      <h3 className="text-xl font-semibold text-teal-700 mb-4">
        Share this FAQ
      </h3>
      <div className="flex justify-center space-x-4">
        {Object.keys(socialLinks).map(key => (
          <a
            key={key}
            href={socialLinks[key].url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${socialLinks[key].className} transition-colors duration-300`}
          >
            {socialLinks[key].icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShareFAQ;
