// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const doctor = urlParams.get('doctor');

// Set the doctor name in the hidden input field
if (doctor) {
  document.getElementById('doctor').value = doctor;
}

// Handle form submission
document.getElementById('appointmentForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const appointmentData = {
    doctor: document.getElementById('doctor').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    reason: document.getElementById('reason').value
  };

  try {
    const response = await fetch('http://localhost:8043/NEXTINLINE', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointmentData)
    });
    
    if (response.ok) {
      alert('Appointment successfully booked!');
      this.reset();
    } else {
      alert('Failed to book appointment');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred');
  }
});

  