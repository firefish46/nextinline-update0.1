const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
const app = express();

app.use(cors()); // Use CORS middleware to enable CORS
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'quickslot'
});

db.connect(err => {
  if (err) throw err; 
  console.log('Database connected!');
});

app.post('/NEXTINLINE', (req, res) => {
  const { name, email, date, time, reason,doctor } = req.body;
  const query = 'INSERT INTO appointments (name, email, date, time, reason, doctor) VALUES (?, ?, ?, ?, ?,?)';

  db.query(query, [name, email, date, time, reason,doctor], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ error: 'Failed to book appointment' });
    } else {
      res.status(200).json({ message: 'Appointment successfully booked!' });
    }
  });
});

app.listen(8043, () => {
  console.log('Server running on port 8043');
});


// Add this route in your existing server.js file
app.get('/appointments', (req, res) => {
  console.log('Received request for appointments');
  const query = 'SELECT * FROM appointments';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving appointments');
    } else {
      console.log('Retrieved appointments:', results);
      res.json(results);
    }
  });
});

