if (user.role !== "admin") {
    return res.status(403).send("Access denied.");
  }

  req.session.destroy(); // Logout logic to destroy session

  sudo ufw allow 443/tcp  # Only allow HTTPS
  sudo ufw deny 3000      # Block development port


const rateLimit = require("express-rate-limit");
app.use(rateLimit({ windowMs: 60 * 1000, max: 30 }));
