'use client'

import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

import './chat-window.css';

export default function ChatWindow() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        text: newMessage,
        sender: 'visitor',
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
      // Here you would also send the message to the server
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className={`fixed chat-window-toggle ${isChatOpen ? 'active' : ''}`}>
      {!isChatOpen ? (
        <button onClick={toggleChat} className="bg-green-500 hover:bg-green-700 text-white font-bold p-3 rounded-full">
          <FaWhatsapp size={24} />
        </button>
      ) : (
        <div className="bg-white border p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg">Chat with us</h2>
            <button onClick={toggleChat}>Close</button>
          </div>
          <div className="overflow-y-auto h-64 mb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === 'visitor' ? 'visitor' : ''}`}>
                <div className="text-sm">{msg.text}</div>
                <div className="text-xs text-gray-500">{msg.timestamp.toLocaleTimeString()}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="border p-2 rounded flex-grow"
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full">
              <FaPaperPlane size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
