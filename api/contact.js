module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    // In production, integrate with email service (e.g., SendGrid) or database here
    // For demo, just log and respond
    console.log('Received message:', { name, email, message });
    res.status(200).json({ message: 'Message received successfully!' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};