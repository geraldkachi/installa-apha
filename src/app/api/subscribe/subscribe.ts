// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';

console.log(process.env.NEXT_PUBLIC_ZEPTO_MAIL_API_KEY, "keyy")
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email' });
    }

    try {
      const response = await fetch('https://api.zeptomail.com/v1.1/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Zoho-enczapikey ${process.env.NEXT_PUBLIC_ZEPTO_MAIL_API_KEY}`,
        },
        body: JSON.stringify({
          from: { address: 'info@instollar.com' },
          // from: { address: 'noreply@instollar.com' },
          to: [{ email_address: { address: email } }],
          subject: 'Subscription Confirmation',
          htmlbody: '<div>Thank you for subscribing to our newsletter!</div>',
        }),
      });

      const result = await response.json();
      if (response.ok) {
        return res.status(200).json({ success: true, message: 'Email sent', result });
      } else {
        return res.status(500).json({ success: false, message: 'Failed to send email', result });
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Server error', error });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}


// import { NextApiRequest, NextApiResponse } from 'next';

// // ZeptoMail API key from environment variables
// const ZEPTO_MAIL_API_KEY = process.env.NEXT_PUBLIC_ZEPTO_MAIL_API_KEY;

// console.log(ZEPTO_MAIL_API_KEY, "ZEPTO_MAIL_API_KEY")
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email } = req.body;

//     try {
//       // Validate email
//       if (!/\S+@\S+\.\S+/.test(email)) {
//         return res.status(400).json({ success: false, message: 'Invalid email' });
//       }

//       // ZeptoMail request payload
//       const zeptoPayload = {
//         from: { address: 'info@instollar.com' },
//         to: [{ email_address: { address: email, name: 'Subscriber' } }],
//         subject: 'Subscription Confirmation',
//         htmlbody: `<div><b> Thank you for subscribing to Instollar! </b></div>`,
//       };

//       // Send email via ZeptoMail API
//       const response = await fetch('https://api.zeptomail.com/v1.1/email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Zoho-enczapikey ${ZEPTO_MAIL_API_KEY}`,
//         },
//         body: JSON.stringify(zeptoPayload),
//       });

//       if (response.ok) {
//         res.status(200).json({ success: true, message: 'Email sent successfully' });
//       } else {
//         const errorData = await response.json();
//         res.status(500).json({ success: false, message: errorData.message || 'Failed to send email' });
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ success: false, message: 'Internal server error' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
