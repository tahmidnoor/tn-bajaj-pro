const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    
    data.forEach(item => {
      if (/^\d+$/.test(item)) numbers.push(item);
      else if (/^[A-Za-z]$/.test(item)) alphabets.push(item.toUpperCase());
    });

    const highest_alphabet = alphabets.length > 0 
      ? [alphabets.sort((a, b) => b.localeCompare(a))[0]] 
      : [];

    res.json({
      is_success: true,
      user_id: 'Tahmid_Noor_23072004',
      email: '22BCS15366@cuchd.in',
      roll_number: '22BCS15366',
      numbers,
      alphabets,
      highest_alphabet
    });
  } catch (error) {
    res.status(400).json({
      is_success: false,
      user_id: 'Tahmid_Noor_23072004',
      email: '22BCS15366@cuchd.in',
      roll_number: '22BCS15366',
      error: error.message
    });
  }
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));