import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  selectedLanguage: string | null = null;
  language = 'en';

  name = '';
  phone = '';
  item = '';
  date: string = '';
  today = new Date().toISOString().split('T')[0];
  selectedFile: File | null = null;
fileName: string = '';
phoneNo: string = '9938022154';

  images = [
    { url: 'assets/Image1.png', name: 'Plates' },
    { url: 'assets/Image2.png', name: 'Glasses' },
    { url: 'assets/Image3.png', name: 'Vessels' }
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  setLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.language = lang;
  }

  toggleLanguage() {
    const langs = ['en', 'hi', 'od'];
    const i = langs.indexOf(this.language);
    this.language = langs[(i + 1) % langs.length];
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

 sendWhatsApp() {
 // Required check
  if (!this.name || !this.phone || !this.date) {
    const msg =
      this.language === 'en' ? 'Please fill all details' :
      this.language === 'hi' ? 'कृपया सभी विवरण भरें' :
      'ଦୟାକରି ସମସ୍ତ ବିବରଣୀ ପୁରଣ କରନ୍ତୁ';

    alert(msg);
    return;
  }

  // ✅ Phone validation (India)
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(this.phone)) {
    const msg =
      this.language === 'en' ? 'Enter valid 10-digit mobile number' :
      this.language === 'hi' ? 'सही 10 अंकों का मोबाइल नंबर दर्ज करें' :
      'ଠିକ 10 ଅଙ୍କର ମୋବାଇଲ ନମ୍ବର ଦିଅନ୍ତୁ';

    alert(msg);
    return;
  }

  let text = '';

  if (this.language === 'en') {
    text =
`Hello, I am ${this.name}
Phone: ${this.phone}
Required Date: ${this.date}

I have attached my requirement list (PDF/Image).
Please check and share details & price.`;
  }

  else if (this.language === 'hi') {
    text =
`नमस्ते, मेरा नाम ${this.name} है
मोबाइल: ${this.phone}
आवश्यक तारीख: ${this.date}

मैंने अपनी सूची (PDF/इमेज) संलग्न की है।
कृपया विवरण और कीमत बताएं।`;
  }

  else if (this.language === 'od') {
    text =
`ନମସ୍କାର, ମୁଁ ${this.name}
ମୋବାଇଲ: ${this.phone}
ଆବଶ୍ୟକ ତାରିଖ: ${this.date}

ମୁଁ ମୋର ତାଲିକା ଦେଇଛି।
ଦୟାକରି ବିବରଣୀ ଏବଂ ଦର କହନ୍ତୁ।`;
  }

  const url = `https://wa.me/91${this.phoneNo}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank');
}

  texts: any = {
    en: {
      title: 'SKP Utensil Rentals',
      subtitle: 'All types of utensils available',
      services: 'Our Services',
      contact: 'Book Your Requirement',
      name: 'Your Name',
      phone: 'Your Phone',
      button: 'Send WhatsApp',
      book: 'Book Now',
      info: 'For more details contact on WhatsApp',
      contactBtn: 'Contact on WhatsApp',
      date: 'Which date you want',
  file: 'Give your list (Image/PDF)'
    },
    hi: {
      title: 'SKP बर्तन सेवा',
      subtitle: 'सभी प्रकार के बर्तन उपलब्ध हैं',
      services: 'हमारी सेवाएं',
      contact: 'अपनी आवश्यकता बताएं',
      name: 'आपका नाम',
      phone: 'आपका मोबाइल नंबर',
      button: 'व्हाट्सएप भेजें',
      book: 'बुक करें',
      info: 'अधिक जानकारी के लिए व्हाट्सएप करें',
      contactBtn: 'व्हाट्सएप करें',
      date: 'आपको कौन सी तारीख चाहिए',
  file: 'अपनी सूची दें (इमेज/पीडीएफ)'
    },
    od: {
      title: 'SKP ବାସନ ଭଡା ସେବା',
      subtitle: 'ସମସ୍ତ ପ୍ରକାର ବାସନ ଉପଲବ୍ଧ',
      services: 'ଆମ ସେବା',
      contact: 'ଆପଣଙ୍କ ଆବଶ୍ୟକତା ଦିଅନ୍ତୁ',
      name: 'ଆପଣଙ୍କ ନାମ',
      phone: 'ମୋବାଇଲ ନମ୍ବର',
      button: 'WhatsApp ପଠାନ୍ତୁ',
      book: 'ବୁକ୍ କରନ୍ତୁ',
      info: 'ଅଧିକ ତଥ୍ୟ ପାଇଁ WhatsApp କରନ୍ତୁ',
      contactBtn: 'WhatsApp କରନ୍ତୁ',
      date: 'ଆପଣ କେଉଁ ତାରିଖ ଚାହୁଁଛନ୍ତି',
  file: 'ଆପଣଙ୍କ ତାଲିକା ଦିଅନ୍ତୁ (ଛବି/ପିଡ଼ିଏଫ)'
    }
  };

  onFileSelect(event: any) {
  const file = event.target.files[0];

  if (file) {
    this.selectedFile = file;
    this.fileName = file.name;
  }
}
}