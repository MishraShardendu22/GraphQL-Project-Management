/* eslint-disable no-unused-vars */
"use client"

import React, { useEffect } from 'react';
import { Twitter, Instagram, MapPin, Github, Code } from 'lucide-react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';

export const Footer = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    const options = {
      strings: [
        'I am A Programmer', 
        'I am A Developer', 
        'I am A CP Enthusiast'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed('#typed-element', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 id="typed-element" className="text-3xl font-bold text-purple-400"></h2>
            <div className="flex items-center space-x-2">
              <MapPin className="text-purple-500" size={20} style={{ marginTop: '2px' }} />
              <p className="align-middle">Location: IIIT Dharwad</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Connect with me</h3>
              <div className="flex space-x-4">
                <SocialLink href="https://leetcode.com/u/ShardenduMishra22/" icon={<Code size={24} />} label="LeetCode" />
                <span className="hover:text-yellow-400 transition-colors duration-300 ease-in-out">Explore my LeetCode profile</span>
              </div>
              <div className="flex space-x-4">
                <SocialLink href="https://github.com/ShardenduMishra22" icon={<Github size={24} />} label="GitHub" />
                <span className="hover:text-yellow-400 transition-colors duration-300 ease-in-out">Check out my GitHub</span>
              </div>
              <div className="flex space-x-4">
                <SocialLink href="https://www.instagram.com/shardendumishra22?igsh=NHAyZWlvODF1cWs0" icon={<Instagram size={24} />} label="Instagram" />
                <span className="hover:text-yellow-400 transition-colors duration-300 ease-in-out">Follow me on Instagram</span>
              </div>
              <div className="flex space-x-4">
                <SocialLink href="https://x.com/Shardendu_M" icon={<Twitter size={24} />} label="Twitter" />
                <span className="hover:text-yellow-400 transition-colors duration-300 ease-in-out">Connect with me on Twitter</span>
              </div>
            </div>
          </div>
          <div className="w-full h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4972.567096217221!2d75.02059907264308!3d15.392850793454533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a45986017d%3A0x98a72507dc76b7aa!2sIIIT-Dharwad%20Pond!5e0!3m2!1sen!2sin!4v1727762835442!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IIIT Dharwad Map"
            ></iframe>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">© {year} <span className="text-purple-400">Shardendu Mishra</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};
