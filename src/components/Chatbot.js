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
        <div class="message bot-message">ሰላም! (Hello!) Welcome to Dentos Chamo. How can I assist you today?</div>
      </div>
      <div id="chatbot-options" class="chat-scroll-area">
        <button class="chat-opt" data-next="q1">What products do you sell?</button>
        <button class="chat-opt" data-next="q2">How much does a product cost?</button>
        <button class="chat-opt" data-next="q3">Do you have products in stock?</button>
        <button class="chat-opt" data-next="q4">Do you offer delivery?</button>
        <button class="chat-opt" data-next="q5">Do you provide receipts or invoices?</button>
        <button class="chat-opt" data-next="q6">Do you offer discounts?</button>
        <button class="chat-opt" data-next="q7">Do you provide product usage guidance?</button>
        <button class="chat-opt" data-next="q8">Can I return or exchange a product?</button>
        <button class="chat-opt" data-next="q9">Where are you located?</button>
        <button class="chat-opt" data-next="q10">How can I contact you?</button>
        <button class="chat-opt" data-next="q11">Do you supply clinics and hospitals?</button>
        <button class="chat-opt" data-next="q12">Do you import products?</button>
        <button class="chat-opt" data-next="q13">How long does delivery take?</button>
        <button class="chat-opt" data-next="q14">Do you have new or trending products?</button>
        <button class="chat-opt" data-next="q15">Can I send a picture of a product I need?</button>
        <button class="chat-opt" data-next="q16">Do you support partnerships or resellers?</button>
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

      #chatbot-trigger {
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(19, 70, 175, 0.4); }
        70% { box-shadow: 0 0 0 15px rgba(19, 70, 175, 0); }
        100% { box-shadow: 0 0 0 0 rgba(19, 70, 175, 0); }
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
      .chat-scroll-area {
        max-height: 200px;
        overflow-y: auto;
      }
    </style>
  `;

  const trigger = document.getElementById('chatbot-trigger');
  const window_element = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('close-chatbot');
  const messages = document.getElementById('chatbot-messages');
  const options = document.getElementById('chatbot-options');

  const decisionTree = {
    'q1': {
      msg: 'We supply a wide range of high-quality dental and medical products, including:<br><br>• Composite filling materials<br>• Impression materials<br>• Endodontic (root canal) products<br>• Orthodontic materials<br>• Dental instruments and accessories<br>• Preventive care products (oral rinses, fluoride, etc.)<br><br>📌 Tip: You can request a full catalog with images and prices anytime:<br>📧 Email: <a href="mailto:sales@dentosechamo.com">sales@dentosechamo.com</a><br>📞 Phone/WhatsApp: <a href="https://wa.me/251913700718" target="_blank">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q2': {
      msg: 'Prices vary depending on:<br>• Product type<br>• Brand<br>• Quantity<br><br>👉 Please send us the product name or a photo, and we’ll provide:<br>• Latest price<br>• Available brands<br>• Alternative options<br><br>📧 Email: <a href="mailto:sales@dentosechamo.com">sales@dentosechamo.com</a><br>📞 WhatsApp: <a href="https://wa.me/251913700718" target="_blank">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q3': {
      msg: 'Most popular products are available in stock, but availability changes quickly.<br><br>👉 For confirmation, contact us with the product name or photo:<br>📧 <a href="mailto:sales@dentosechamo.com">sales@dentosechamo.com</a><br>📞 <a href="tel:+251913700718">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q4': {
      msg: 'Yes ✅<br><br>Addis Ababa: Fast delivery available<br>Outside Addis Ababa: Delivery arranged via trusted services like Ethiopian Postal Service or local logistics providers such as Ahununu.<br><br>📌 Delivery cost depends on location and order size.<br><br>👉 To arrange delivery:<br>📧 <a href="mailto:sales@dentosechamo.com">sales@dentosechamo.com</a><br>📞 <a href="tel:+251913700718">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q5': {
      msg: 'Yes ✅<br><br>We provide:<br>• Official receipts<br>• Company invoices<br><br>For invoice requests:<br>📧 <a href="mailto:accounts@dentosechamo.com">accounts@dentosechamo.com</a><br>📞 <a href="tel:+251913700718">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q6': {
      msg: 'Yes ✅<br><br>We offer:<br>• Bulk purchase discounts<br>• Special pricing for clinics and regular customers<br>• Promotional offers<br><br>👉 Request a custom quote:<br>📧 <a href="mailto:sales@dentosechamo.com">sales@dentosechamo.com</a><br>📞 <a href="tel:+251913700718">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q7': {
      msg: 'Yes ✅<br><br>We support you with:<br>• Product usage instructions<br>• Best practices<br>• Clinical tips<br><br>🎥 Video demonstrations are available on our social media.<br><br>👉 For direct support:<br>📧 <a href="mailto:support@dentosechamo.com">support@dentosechamo.com</a><br>📞 <a href="tel:+251913700718">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q8': {
      msg: 'Yes (conditions apply):<br><br>• Product must be unused and in original condition<br>• Must be reported shortly after purchase<br><br>👉 Contact us immediately:<br>📧 <a href="mailto:support@dentosechamo.com">support@dentosechamo.com</a><br>📞 <a href="tel:+251913700718">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q9': {
      msg: '📍 Addis Ababa, Ethiopia<br>Nefas Silk Lafto Woreda 01<br>(In front of Lebu Medhani-Alem Church)<br><br>👉 Request location pin:<br>📞 <a href="tel:+251913700718">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q10': {
      msg: 'You can reach us via:<br><br>📞 Phone / WhatsApp: <a href="https://wa.me/251913700718" target="_blank">+251 913 70 07 18</a><br>📧 Email: <a href="mailto:info@dentosechamo.com">info@dentosechamo.com</a><br><br>🛒 Also available on Zemen Gebeya',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q11': {
      msg: 'Yes ✅<br><br>We work with:<br>• Dental clinics<br>• Hospitals<br>• Laboratories<br>• Universities<br><br>👉 For partnerships:<br>📧 <a href="mailto:business@dentosechamo.com">business@dentosechamo.com</a><br>📞 <a href="tel:+251913700718">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q12': {
      msg: 'Yes ✅<br><br>We import high-quality international brands ensuring:<br>• Authenticity<br>• Quality assurance<br>• Competitive pricing<br><br>👉 For product sourcing inquiries:<br>📧 <a href="mailto:sales@dentosechamo.com">sales@dentosechamo.com</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q13': {
      msg: '⏱️ Addis Ababa: Same day or next day<br>⏱️ Outside Addis Ababa: 1–3 days<br><br>👉 To confirm delivery time:<br>📞 <a href="tel:+251913700718">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q14': {
      msg: 'Yes ✅<br><br>We regularly introduce:<br>• New dental technologies<br>• Advanced materials<br><br>👉 Ask for latest updates:<br>📧 <a href="mailto:sales@dentosechamo.com">sales@dentosechamo.com</a><br>📞 <a href="tel:+251913700718">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q15': {
      msg: 'Absolutely ✅ (Recommended)<br><br>We will:<br>• Identify the product<br>• Share price<br>• Suggest alternatives<br><br>👉 Send via:<br>📧 <a href="mailto:sales@dentosechamo.com">sales@dentosechamo.com</a><br>📞 WhatsApp: <a href="https://wa.me/251913700718" target="_blank">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'q16': {
      msg: 'Yes ✅<br><br>We welcome:<br>• Distributors<br>• Resellers<br>• Clinic partnerships<br><br>👉 Contact us:<br>📧 <a href="mailto:business@dentosechamo.com">business@dentosechamo.com</a><br>📞 <a href="tel:+251913700718">+251 913 70 07 18</a>',
      opts: [{ text: 'Back to FAQs', next: 'start' }]
    },
    'start': {
      msg: 'How else can I help you today?',
      opts: [
        { text: 'What products do you sell?', next: 'q1' },
        { text: 'How much does a product cost?', next: 'q2' },
        { text: 'Do you have products in stock?', next: 'q3' },
        { text: 'Do you offer delivery?', next: 'q4' },
        { text: 'Do you provide receipts or invoices?', next: 'q5' },
        { text: 'Do you offer discounts?', next: 'q6' },
        { text: 'Do you provide product usage guidance?', next: 'q7' },
        { text: 'Can I return or exchange a product?', next: 'q8' },
        { text: 'Where are you located?', next: 'q9' },
        { text: 'How can I contact you?', next: 'q10' },
        { text: 'Do you supply clinics and hospitals?', next: 'q11' },
        { text: 'Do you import products?', next: 'q12' },
        { text: 'How long does delivery take?', next: 'q13' },
        { text: 'Do you have new or trending products?', next: 'q14' },
        { text: 'Can I send a picture of a product I need?', next: 'q15' },
        { text: 'Do you support partnerships or resellers?', next: 'q16' }
      ]
    }
  };

  trigger.onclick = () => window_element.classList.toggle('hidden');
  closeBtn.onclick = () => window_element.classList.add('hidden');

  const addMessage = (text, type) => {
    const div = document.createElement('div');
    div.className = `message ${type}-message`;
    div.innerHTML = text;
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

  // Initialize static options
  const initStaticOptions = () => {
    document.querySelectorAll('#chatbot-options .chat-opt').forEach(btn => {
      btn.onclick = () => {
        addMessage(btn.innerText, 'user');
        const nextKey = btn.getAttribute('data-next');
        if (nextKey === 'product_section') {
          window.location.hash = '#/products';
          window_element.classList.add('hidden');
        } else {
          setTimeout(() => handleNext(nextKey), 500);
        }
      };
    });
  };
  initStaticOptions();

  // Initial greeting logic for landing
  setTimeout(() => {
    if (window_element.classList.contains('hidden')) {
      // Small logic to nudge user? 
      // trigger.classList.add('nudge');
    }
  }, 3000);
};
