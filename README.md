# Abduraghmaan Cassiem — Portfolio

A personal portfolio built with Next.js and React. It uses the Next.js App Router and plain CSS.

## Run locally

1. Install [Node.js](https://nodejs.org/) if you do not already have it.
2. Open a terminal in this project folder.
3. Run `npm install` once to install the packages.
4. Run `npm run dev` and open [http://localhost:3000](http://localhost:3000).

Press `Ctrl+C` in the terminal to stop the development server.

## Update the portfolio

- Add, edit, or remove project cards in `app/projects.js`.
- Update your bio and page content in `app/page.jsx`.
- Update the visual design in `app/globals.css`.
- Save your profile photo as `public/abduraghmaan-cassiem.jpg`.

## Set up the contact form

1. Create a form in your [Formspree dashboard](https://formspree.io/forms).
2. Set its notification email to `Cassssiem@gmail.com` and verify that address in Formspree.
3. Copy `.env.example` to `.env.local` and replace `your_form_id` with the ID from the Formspree Integration tab.
4. Restart the Next.js development server. The contact form will then submit to Formspree.

Until the form ID is set, the contact section provides a direct email link instead. 
