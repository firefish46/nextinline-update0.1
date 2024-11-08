document.addEventListener('DOMContentLoaded', () => {
    const doctorSelect = document.getElementById('doctorSelect');
    const appointmentList = document.getElementById('appointmentList');
    const searchInput = document.getElementById('searchInput');
    let appointments = []; // Global array to store all appointments
  
    // Fetch all appointments from the backend
    async function fetchAppointments() {
      try {
        const response = await fetch('http://localhost:8043/appointments');
        
        if (response.ok && response.headers.get('Content-Type').includes('application/json')) {
          appointments = await response.json(); // Store globally
        } else {
          throw new Error('Invalid response format');
        }
        return appointments;
      } catch (error) {
        console.error('Error fetching appointments:', error);
        return [];
      }
    }
  
    // Display filtered appointments
    function displayAppointments(filteredAppointments) {
      appointmentList.innerHTML = ''; // Clear existing list
  
      if (filteredAppointments.length > 0) {
        filteredAppointments.forEach(appointment => {
          const li = document.createElement('li');
          li.innerHTML = `
            <strong>Patient:</strong> ${appointment.name}<br>
            <strong>Email:</strong> ${appointment.email}<br>
            <strong>Date:</strong> ${appointment.date}<br>
            <strong>Time:</strong> ${appointment.time}<br>
            <strong>Reason:</strong> ${appointment.reason}
          `;
          appointmentList.appendChild(li);
        });
      } else {
        appointmentList.innerHTML = '<li>No appointments found.</li>';
      }
    }
  
    // Filter appointments by doctor
    async function filterAppointmentsByDoctor(doctorName) {
      const allAppointments = await fetchAppointments();
      const filteredAppointments = allAppointments.filter(appointment => appointment.doctor === doctorName);
      displayAppointments(filteredAppointments);
    }
  
    // Event listener for doctor selection changes
    doctorSelect.addEventListener('change', (event) => {
      const selectedDoctor = event.target.value;
      if (selectedDoctor) {
        filterAppointmentsByDoctor(selectedDoctor);
      } else {
        appointmentList.innerHTML = ''; // Clear list if no doctor is selected
      }
    });
  
    // Event listener for search input
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const filteredAppointments = appointments.filter(appointment => {
        // Check if any field (id, name, email, etc.) contains the search term
        return (
          (appointment.id && appointment.id.toString().toLowerCase().includes(searchTerm)) ||
          (appointment.name && appointment.name.toLowerCase().includes(searchTerm)) ||
          (appointment.email && appointment.email.toLowerCase().includes(searchTerm)) ||
          (appointment.date && appointment.date.toLowerCase().includes(searchTerm)) ||
          (appointment.reason && appointment.reason.toLowerCase().includes(searchTerm))
        );
      });
      displayAppointments(filteredAppointments);
    });
  
    // Initial fetch and display all appointments
    fetchAppointments().then(() => {
      displayAppointments(appointments); // Show all appointments on page load
    });
  });
  