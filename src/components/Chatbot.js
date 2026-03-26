export const initChatbot = () => {
  const container = document.getElementById('chatbot-container');
  if (!container) return;

  container.innerHTML = `
    <div id="chatbot-trigger" class="glass">
      <i class="fas fa-comment-dots"></i>
    </div>
    <div id="chatbot-window" class="glass hidden">
      <div class="chatbot-header">
        <h4>Dentos Assistant</h4>
        <button id="close-chatbot">&times;</button>
      </div>
      <div id="chatbot-messages">
        <div class="message bot-message">Hello! Welcome to Dentos Chamo. How can I assist you today?</div>
      </div>
      <div id="chatbot-options">
        <button class="chat-opt" data-next="services">Our Services</button>
        <button class="chat-opt" data-next="products">Product Inquiry</button>
        <button class="chat-opt" data-next="location">Office Location</button>
        <button class="chat-opt" data-next="hours">Office Hours</button>
      </div>
    </div>

    <style>
      #chatbot-trigger {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: var(--primary);
        cursor: pointer;
        z-index: 2000;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        transition: var(--transition);
      }
      
      #chatbot-trigger:hover {
        transform: scale(1.1);
        background: var(--secondary);
        color: var(--black);
      }

      #chatbot-window {
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 350px;
        max-height: 500px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        z-index: 2000;
        box-shadow: 0 15px-35px rgba(0,0,0,0.2);
        overflow: hidden;
      }

      .hidden { display: none !important; }

      .chatbot-header {
        background: var(--primary);
        color: var(--white);
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #chatbot-messages {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-height: 200px;
      }

      .message {
        padding: 10px 15px;
        border-radius: 15px;
        max-width: 80%;
        font-size: 0.9rem;
      }

      .bot-message {
        background: #f1f5f9;
        color: var(--black);
        align-self: flex-start;
        border-bottom-left-radius: 2px;
      }

      .user-message {
        background: var(--primary);
        color: var(--white);
        align-self: flex-end;
        border-bottom-right-radius: 2px;
      }

      #chatbot-options {
        padding: 10px 20px 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .chat-opt {
        padding: 8px 15px;
        border: 1px solid var(--primary);
        border-radius: 20px;
        background: transparent;
        color: var(--primary);
        font-size: 0.85rem;
        cursor: pointer;
        transition: var(--transition);
      }

      .chat-opt:hover {
        background: var(--primary);
        color: var(--white);
      }

      #close-chatbot {
        background: none;
        color: var(--white);
        font-size: 1.5rem;
      }
    </style>
  `;

  const trigger = document.getElementById('chatbot-trigger');
  const window_element = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('close-chatbot');
  const messages = document.getElementById('chatbot-messages');
  const options = document.getElementById('chatbot-options');

  const decisionTree = {
    'services': {
      msg: 'We provide specialized dental consultations, surgical solutions, and orthodontic treatments. Would you like to see our categories?',
      opts: [
        { text: 'View Categories', next: 'products' },
        { text: 'Book Appointment', next: 'contact' }
      ]
    },
    'products': {
      msg: 'Our products range from professional dental chairs to high-precision medical tools. You can find them in the Products section.',
      opts: [
        { text: 'Go to Products', next: 'product_section' },
        { text: 'Ask about Shipping', next: 'shipping' }
      ]
    },
    'location': {
      msg: 'Our main office is located at 123 Corporate Blvd, Medical District. We also have regional centers.',
      opts: [
        { text: 'Get Directions', next: 'directions' },
        { text: 'Main Office Ph', next: 'contact' }
      ]
    },
    'hours': {
      msg: 'Our office hours are: \nMon-Fri: 8:00 AM - 6:00 PM \nSat: 9:00 AM - 1:00 PM \nSun: Closed',
      opts: [
        { text: 'Back to Menu', next: 'start' }
      ]
    },
    'shipping': {
      msg: 'We offer nationwide shipping within 3-5 business days. International shipping depends on location.',
      opts: [{ text: 'Main Menu', next: 'start' }]
    },
    'contact': {
      msg: 'You can reach us at +1 234 567 890 or email info@dentoschamo.com. Or visit our Contact page.',
      opts: [{ text: 'Main Menu', next: 'start' }]
    },
    'start': {
      msg: 'How else can I help you?',
      opts: [
        { text: 'Our Services', next: 'services' },
        { text: 'Product Inquiry', next: 'products' },
        { text: 'Office Location', next: 'location' },
        { text: 'Office Hours', next: 'hours' }
      ]
    }
  };

  trigger.onclick = () => window_element.classList.toggle('hidden');
  closeBtn.onclick = () => window_element.classList.add('hidden');

  const addMessage = (text, type) => {
    const div = document.createElement('div');
    div.className = `message ${type}-message`;
    div.innerText = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  };

  const renderOptions = (opts) => {
    options.innerHTML = '';
    opts.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'chat-opt';
      btn.innerText = opt.text;
      btn.onclick = () => {
        addMessage(opt.text, 'user');
        if (opt.next === 'product_section') {
          window.location.hash = '#/products';
          window_element.classList.add('hidden');
        } else {
          setTimeout(() => {
            handleNext(opt.next);
          }, 500);
        }
      };
      options.appendChild(btn);
    });
  };

  const handleNext = (key) => {
    const node = decisionTree[key];
    if (node) {
      addMessage(node.msg, 'bot');
      renderOptions(node.opts);
    }
  };

  // Initial greeting logic for landing
  setTimeout(() => {
    if (window_element.classList.contains('hidden')) {
      // Small logic to nudge user? 
      // trigger.classList.add('nudge');
    }
  }, 3000);
};
