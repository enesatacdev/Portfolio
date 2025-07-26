export interface MailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendMail = async (mailData: MailData): Promise<{ success: boolean; message: string }> => {
  try {
    // EmailJS ile SMTP mail gönderimi
    const { init, send } = await import('@emailjs/browser');
    
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'enesatac_smtp';
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'contact_form';
    
    if (!userID) {
      throw new Error('EmailJS User ID bulunamadı. Lütfen VITE_EMAILJS_USER_ID environment variable\'ını ayarlayın.');
    }
    
    // EmailJS'i başlat
    init(userID);
    
    console.log('EmailJS ile mail gönderiliyor...');
    
    const result = await send(
      serviceID, // Service ID - mail.enesatac.com
      templateID,  // Template ID
      {
        from_name: mailData.name,
        from_email: mailData.email,
        subject: mailData.subject,
        message: mailData.message,
        to_email: 'info@enesatac.com'
      },
      userID // User ID
    );

    console.log('EmailJS response:', result);

    if (result.status === 200) {
      return { success: true, message: 'Mail başarıyla gönderildi!' };
    } else {
      console.error('EmailJS başarısız response:', result);
      throw new Error(`Mail gönderilemedi. Status: ${result.status}`);
    }
  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return { 
      success: false, 
      message: `Mail gönderilirken hata oluştu: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}` 
    };
  }
}; 