// Initialize EmailJS (replace 'your_service_id' and 'your_template_id')
emailjs.init('your_user_id');

document.getElementById('sendButton').addEventListener('click', () => {
  const message = document.getElementById('messageInput').value;

  if (!message.trim()) {
    alert('Please write a message before sending.');
    return;
  }

  // Send the message via EmailJS
  emailjs.send('your_service_id', 'your_template_id', {
    message: message,
  }).then(
    () => {
      alert('Your message has been sent!');
      document.getElementById('messageInput').value = ''; // Clear input
    },
    (error) => {
      console.error('Failed to send message:', error);
      alert('Sorry, your message could not be sent. Please try again.');
    }
  );
});

