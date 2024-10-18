/* eslint-disable @typescript-eslint/ban-ts-comment */
// // pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
// @ts-expect-error
import { SendMailClient } from 'zeptomail';

const client = new SendMailClient({
  url: 'https://api.zeptomail.com/',
  token: process.env.NEXT_PUBLIC_ZEPTO_MAIL_API_KEY, // Ensure this variable is set in your environment
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    try {
      await client.sendMail({
        from: {
          address: 'info@instollar.com',
          name: 'Instollar',
        },
        to: [
          {
            email_address: {
              address: email,
            },
          },
        ],
        subject: 'Subscription Confirmation',
        htmlbody: '<div>Thank you for subscribing to our newsletter!</div>',
      });

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
