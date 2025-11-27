# Hoang Tran — Personal Website

Single-page React site powered by Vite, highlighting cloud and software engineering work, skills, and education. Resume is available at `public/Resume.pdf`.

## Local development
- `npm install`
- `npm run dev` to start the dev server
- `npm run build` to produce the production bundle in `dist/`
- `npm run preview` to locally verify the production build

## Deploying to S3 + CloudFront
- Build: `npm run build`
- Upload static assets to your S3 bucket (example with AWS CLI): `aws s3 sync dist/ s3://<your-bucket-name>/ --delete --cache-control "max-age=31536000,public"`
- Enable static website hosting on the S3 bucket (or use S3 origin access with CloudFront and keep the bucket private).
- Create/point a CloudFront distribution at the S3 bucket origin. Set the default root object to `index.html` and add an error response that maps 403/404 to `index.html` with an HTTP 200 status for SPA routing.
- After each deploy, invalidate cached assets: `aws cloudfront create-invalidation --distribution-id <ID> --paths "/*"`
- For custom domains, attach an ACM certificate in the same region as CloudFront (us-east-1) and map the domain via Route 53 (CNAME/ALIAS) to the CloudFront distribution.
