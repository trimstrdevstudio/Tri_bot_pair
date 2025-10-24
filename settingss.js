module.exports = {
  
  // ==========================================
  // 🚀 BOT CORE CONFIGURATION
  // ==========================================
  SESSION_ID: process.env.SESSION_ID || "TRI-CONTROLS~default_session",
  SESSION_SERVER: process.env.SESSION_SERVER || "https://your-session-server.onrender.com",
  
  // ==========================================
  // 👑 OWNER INFORMATION
  // ==========================================
  OWNER_NAME: process.env.OWNER_NAME || "🦅 GHOSTTRI",
  DEVELOPER: "🚀 TRI MSTR DEV STUDIO",
  
  // ==========================================
  // ⚙️ BOT SETTINGS
  // ==========================================
  PREFIX: process.env.PREFIX || ".",
  BOT_NAME: process.env.BOT_NAME || "✦『 𝑻𝑹𝑰-𝑪𝑶𝑵𝑻𝑹𝑶𝑳𝑺-𝑩𝑶𝑻 』✦",
  
  // ==========================================
  // 🔐 SESSION MANAGEMENT
  // ==========================================
  SESSION_CONFIG: {
    AUTO_RECONNECT: true,
    MAX_RETRIES: 5,
    TIMEOUT: 30000,
    BROWSER: ["Chrome (Windows)", "latest"]
  },
  
  // Session validation function
  validateSession: function(sessionId) {
    if (!sessionId) return false;
    return sessionId.startsWith('TRI-CONTROLS~');
  },
  
  // Generate new session
  generateSession: function(ownerName) {
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 15);
    return `TRI-CONTROLS~${ownerName}_${timestamp}_${randomStr}`;
  }
};
