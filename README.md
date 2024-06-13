This is a Project to show initial implementation using React Email and Resend API.

## Getting Started

First, run the development server for show templates html:

```bash
npm run email
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result examples.

The page auto-updates as you edit the file, `email-exampe.tsx`.

For loading API in another port, you can run:

```
npm run dev -p 3001
```

You need configure your RESEND_API_KEY in https://resend.com.

After you configure the RESEND_API_KEY, you go in the file: `.env.local` and configure your ENV with the generated key.

You can send for your mailbox in resend using `POST Method http://localhost:3001/api/email`.
