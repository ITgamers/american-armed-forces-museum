# American Armed Forces Museum — Website

Rebuilt website for the **American Armed Forces Museum, Inc.** — a 501(c)(3)
nonprofit in Alamogordo, New Mexico, established 1997.

> *"To Preserve, Protect and Perpetuate the Honor of Those Who Served"*

**Live preview:** https://itgamers.github.io/american-armed-forces-museum-project/

## What this is

A complete, static replacement for the museum's existing site. Plain HTML and CSS —
no framework, no build step, no database, no server-side code. It will run on any
static host, including free ones.

This repository also serves as the museum's **off-site backup**. The original site
lives on a hosting account the museum can no longer access (see below), so this is
currently the only copy under the museum's own control.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home — mission, hours, branches of service |
| `museum.html` | Exhibits and collection |
| `library.html` | Research library |
| `cemeteries.html` | Index of 11 area cemetery records |
| `cemetery-*.html` | Individual cemetery records (genealogy resource) |
| `in-memory.html` | Memorial listings |
| `join.html` | Membership |
| `donate.html` | Donations |
| `contact.html` | Visit info and directions |

## Visiting

**144 US-82, Alamogordo, NM 88310**
Tuesday – Saturday, 9 a.m. – 3 p.m. · Free admission

## Deployment notes

- `.htaccess` holds 301 redirects mapping the **old** site's URLs to these filenames,
  preserving inbound links from genealogy forums (NM GenWeb, Find A Grave) that point
  directly at the cemetery pages. **Apache only** — GitHub Pages ignores it. Moving to
  Cloudflare Pages or Netlify requires converting these to a `_redirects` file.
- `.nojekyll` disables Jekyll processing; these are hand-written HTML files.

## Status

The museum's original domain, `americanarmedforcesmuseum.com`, is on a hosting
account that is currently inaccessible — the volunteer who managed it is locked out
and unable to recover it. The domain is registered through February 2027.

Launch plan is a new domain on free static hosting. This repo is the backup and the
staging preview in the meantime.
