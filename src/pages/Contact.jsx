import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Contact Us</h2>
      <p>Have questions or feedback? Send us a message below!</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
          <input 
            type="text" 
            required 
            placeholder="Your name" 
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} 
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
          <input 
            type="email" 
            required 
            placeholder="your.email@example.com" 
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} 
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message</label>
          <textarea 
            rows="5" 
            required 
            placeholder="Type your message here..." 
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          ></textarea>
        </div>

        <button 
          type="submit" 
          style={{ padding: '12px 20px', backgroundColor: '#646cff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;