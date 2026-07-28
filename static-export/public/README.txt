Kitap — standalone website (HTML / CSS / JS)
============================================

This folder is the complete, ready-to-upload website. No server code,
no database, no build step required.

HOW TO INSTALL / PUBLISH
1. Upload EVERYTHING in this folder (index.html, assets/, __l5e/) to the
   root of your web hosting (cPanel public_html, Netlify, Vercel, GitHub
   Pages, Nginx/Apache document root, etc.).
2. Open your domain — the site loads.

HOW TO PREVIEW LOCALLY
Open a terminal in this folder and run:
   python3 -m http.server 8000
then visit http://localhost:8000
(Opening index.html by double-click does not work: browsers block
JavaScript modules on the file:// protocol.)

NOTES
- Pages use hash URLs (e.g. /#/download-guide) so they work on any host
  without special redirect rules.
- Languages (Русский / English / Türkmen) switch entirely in the browser.
