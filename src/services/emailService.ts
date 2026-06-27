import emailjs from '@emailjs/browser';

export interface EnquiryPayload {
  fullName?: string;
  businessName?: string;
  businessType?: string;
  industry?: string;
  phone?: string;
  email?: string;
  inquiryType?: string;
  budget?: string;
  projectRequirement?: string;
  showcaseName?: string;
}

export interface EmailServiceResponse {
  success: boolean;
  message: string;
  referenceId?: string;
}

// Initialize EmailJS
if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
  emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
}

export const emailService = {
  /**
   * Automatically detect Device Type
   */
  getDeviceType: (): string => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'Tablet';
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return 'Mobile';
    return 'Desktop';
  },

  /**
   * Automatically detect OS
   */
  getOS: (): string => {
    const ua = navigator.userAgent;
    if (ua.includes("Win")) return "Windows";
    if (ua.includes("Mac")) return "Mac OS";
    if (ua.includes("Linux")) return "Linux";
    if (ua.includes("Android")) return "Android";
    if (ua.includes("like Mac")) return "iOS";
    return "Unknown OS";
  },

  /**
   * Automatically detect Browser
   */
  getBrowser: (): string => {
    const ua = navigator.userAgent;
    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("SamsungBrowser")) return "Samsung Browser";
    if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
    if (ua.includes("Trident")) return "Internet Explorer";
    if (ua.includes("Edge") || ua.includes("Edg")) return "Edge";
    if (ua.includes("Chrome")) return "Chrome";
    if (ua.includes("Safari")) return "Safari";
    return "Unknown Browser";
  },

  /**
   * Generate Reference ID
   */
  generateReferenceId: (): string => {
    const year = new Date().getFullYear();
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4 digit random number
    return `LBS-${year}-${randomNum}`;
  },

  /**
   * Submit an enquiry via EmailJS only
   */
  submitEnquiry: async (payload: EnquiryPayload): Promise<EmailServiceResponse> => {
    try {
      // Basic Validation
      if (!payload.fullName || !payload.email || !payload.phone) {
        return { success: false, message: 'Please fill in all required fields (Name, Email, Phone).' };
      }

      const referenceId = emailService.generateReferenceId();
      const dateObj = new Date();
      const dateStr = dateObj.toLocaleDateString();
      const timeStr = dateObj.toLocaleTimeString();

      // Collect Metadata
      const device = emailService.getDeviceType();
      const browser = emailService.getBrowser();
      const os = emailService.getOS();
      const resolution = `${window.innerWidth}x${window.innerHeight}`;
      const language = navigator.language || 'Unknown';
      const currentUrl = window.location.href;

      // Ensure defaults
      const p = {
        fullName: payload.fullName || 'N/A',
        businessName: payload.businessName || 'N/A',
        industry: payload.industry || 'General',
        phone: payload.phone || 'N/A',
        email: payload.email || 'N/A',
        inquiryType: payload.inquiryType || 'General Inquiry',
        budget: payload.budget || 'N/A',
        projectRequirement: payload.projectRequirement || 'N/A',
        showcaseName: payload.showcaseName || 'LETSGO Business Solutions',
      };

      // Construct formatted message block
      const formattedMessage = `
================================================
NEW WEBSITE ENQUIRY
================================================

Reference ID: ${referenceId}
Date: ${dateStr}
Time: ${timeStr}

--------------------------------------------
PERSONAL DETAILS
Name: ${p.fullName}
Business: ${p.businessName}
Industry: ${p.industry}
Phone: ${p.phone}
Email: ${p.email}

--------------------------------------------
PROJECT DETAILS
Inquiry Type: ${p.inquiryType}
Budget: ${p.budget}
Project Requirement:
${p.projectRequirement}

--------------------------------------------
VISITOR INFORMATION
Showcase: ${p.showcaseName}
Current URL: ${currentUrl}
Device: ${device}
Browser: ${browser}
Operating System: ${os}
Resolution: ${resolution}
Language: ${language}
Timestamp: ${dateObj.toISOString()}

================================================
`.trim();

      const subject = `[${p.showcaseName}] ${p.inquiryType}`;

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log("EmailJS Attempting to Send...");
      console.log("Service ID:", serviceId);
      console.log("Template ID:", templateId);
      console.log("Public Key Exists:", !!publicKey);

      if (!serviceId || serviceId === 'your_emailjs_service_id') {
        throw new Error('EmailJS Service ID is missing or invalid.');
      }
      if (!templateId || templateId === 'your_emailjs_template_id') {
        throw new Error('EmailJS Template ID is missing or invalid.');
      }

      const emailResponse = await emailjs.send(serviceId, templateId, {
        name: p.fullName,
        business_name: p.businessName,
        phone: p.phone,
        email: p.email,
        showcase: p.showcaseName,
        reference: referenceId,
        subject: subject,
        formatted_message: formattedMessage,
        reply_to: p.email,
      }, {
        publicKey: publicKey
      });

      console.log("EmailJS Success Response:", emailResponse);

      return { 
        success: true, 
        message: 'Your enquiry has been successfully submitted! We will contact you shortly.',
        referenceId 
      };
    } catch (error) {
      console.error('EmailJS Submission Error:', error);
      return { success: false, message: 'Failed to submit your enquiry. Please try again later.' };
    }
  },
};
