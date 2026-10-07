# CocoHonor concept website

A responsive, multi-page concept site for presenting CocoHonor before the first physical medal prototype exists. It is built with plain HTML, CSS, and JavaScript, so it can be hosted as a static website without a server or paid plugins.

## Pages

- `index.html` — introduction and guided story path
- `story.html` — brand idea and principles
- `material.html` — sourcing questions and material-development journey
- `medal.html` — illustrative medal concept
- `partners.html` — potential collaborators and contact placeholder

The concept render in `assets/medal-concept.png` is AI-generated artwork. It depicts an imagined, unmanufactured object and must be replaced or clearly labeled if the physical design changes. Sourcing, partnerships, and impact statements are framed as work in progress rather than verified claims.

## Preview locally

Open `index.html` in a browser. All pages are linked from the top navigation and through the chapter-to-chapter calls to action. No build step is required.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new repository, for example `cocohonor-site`. For a public pitch site, a public repository is easiest to share. If you prefer to keep the source private, check that your GitHub plan supports Pages from private repositories before choosing that setting.
2. Add the contents of this folder to the repository, keeping `index.html` at the repository root. The easiest no-terminal route is GitHub Desktop: **File → Add Local Repository** (or **Create New Repository** with this folder as the local path), then commit and publish.
3. In the repository, open **Settings → Pages**. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save. GitHub will show the published URL after it builds the site.
4. To use `CocoHonor.com`, add the custom domain in Pages settings, then update the domain's DNS records at its registrar to the values GitHub provides. Wait for DNS verification and enable HTTPS in Pages settings.

Until the custom domain is connected, the GitHub Pages URL is a shareable preview. Do not add a `CNAME` file or change DNS before confirming the GitHub Pages URL and domain settings.

## Before launch

- Replace `hello@cocohonor.com` in `partners.html` if that address is not active.
- Replace concept art with approved prototype photography when available.
- Add real sourcing, maker, product, shipping, privacy, and contact details before accepting orders or making quantified sustainability claims.
