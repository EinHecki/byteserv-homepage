# ByteServ IT Solutions - Deployment Guide

This guide covers deploying the application to production using Coolify or any Docker-compatible hosting platform.

## Prerequisites

- Docker installed (for local testing)
- Git repository
- Coolify instance or Docker-compatible hosting platform
- SMTP server credentials (for email functionality)

## Environment Variables

The application requires the following environment variables in production:

```env
# Node Environment
NODE_ENV=production
PORT=3000

# SMTP Configuration (Required for Contact Form)
SMTP_HOST=mail.yourserver.de
SMTP_PORT=465
SMTP_USER=kontakt@byteserv.it
SMTP_PASS=your_secure_password
SMTP_FROM=kontakt@byteserv.it
SMTP_TO=hello@byteserv.it
```

### SMTP Configuration Notes

- **Port 465**: Use SSL (recommended)
- **Port 587**: Use TLS (STARTTLS)
- The app automatically sets `secure: true` for port 465

## Deployment to Coolify

### Step 1: Create New Application

1. Log into your Coolify dashboard
2. Click **+ New Resource** → **Application**
3. Select your Git provider and repository

### Step 2: Configure Build Settings

**Build Pack**: `Dockerfile`

Coolify will automatically detect the Dockerfile in your repository root.

### Step 3: Set Environment Variables

In Coolify, navigate to **Environment Variables** and add:

```
NODE_ENV=production
PORT=3000
SMTP_HOST=your_smtp_host
SMTP_PORT=465
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_FROM=your_from_email
SMTP_TO=your_to_email
```

### Step 4: Configure Domain

1. Go to **Domains** section
2. Add your domain (e.g., `byteserv.it`)
3. Enable **HTTPS** (Coolify handles SSL certificates automatically)

### Step 5: Deploy

Click **Deploy** - Coolify will:
1. Pull the latest code from your repository
2. Build the Docker image using the multi-stage Dockerfile
3. Start the container
4. Set up SSL certificates via Let's Encrypt

## Docker Best Practices (Implemented)

### Multi-Stage Build

The Dockerfile uses 4 stages for optimization:

1. **Development Dependencies**: Installs all dependencies including devDependencies
2. **Production Dependencies**: Installs only production dependencies
3. **Build**: Compiles the application using dev dependencies
4. **Runtime**: Minimal production image with only necessary files

### Security Features

- **Non-root user**: Application runs as `reactrouter` user (UID 1001)
- **Minimal base image**: Using `node:20-alpine` (smallest Node.js image)
- **No dev dependencies**: Production image only contains runtime dependencies
- **Health checks**: Container includes health check for monitoring

### Image Size Optimization

- `.dockerignore` excludes unnecessary files
- Multi-stage build reduces final image size
- `npm cache clean --force` removes npm cache
- Only essential files copied to final stage

## Manual Deployment (Alternative to Coolify)

### Build the Docker Image

```bash
docker build -t byteserv-homepage .
```

### Run the Container

```bash
docker run -d \
  --name byteserv-homepage \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e SMTP_HOST=mail.yourserver.de \
  -e SMTP_PORT=465 \
  -e SMTP_USER=kontakt@byteserv.it \
  -e SMTP_PASS=your_password \
  -e SMTP_FROM=kontakt@byteserv.it \
  -e SMTP_TO=hello@byteserv.it \
  --restart unless-stopped \
  byteserv-homepage
```

### With Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
      - SMTP_HOST=${SMTP_HOST}
      - SMTP_PORT=${SMTP_PORT}
      - SMTP_USER=${SMTP_USER}
      - SMTP_PASS=${SMTP_PASS}
      - SMTP_FROM=${SMTP_FROM}
      - SMTP_TO=${SMTP_TO}
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "node", "-e", "require('http').get('http://localhost:3000', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"]
      interval: 30s
      timeout: 3s
      retries: 3
      start_period: 10s
```

Run with:

```bash
docker-compose up -d
```

## Health Checks

The application includes a health check endpoint that verifies the server is responding:

- **Interval**: Every 30 seconds
- **Timeout**: 3 seconds
- **Retries**: 3 attempts before marking unhealthy
- **Start Period**: 10 seconds grace period on startup

## Monitoring

### Container Logs

View real-time logs:

```bash
docker logs -f byteserv-homepage
```

### Health Status

Check container health:

```bash
docker inspect --format='{{.State.Health.Status}}' byteserv-homepage
```

## Troubleshooting

### Email Not Sending

1. Check SMTP environment variables are set correctly
2. Verify SMTP credentials with your mail provider
3. Check container logs: `docker logs byteserv-homepage`
4. Test SMTP connection from within container

### Container Not Starting

1. Check logs: `docker logs byteserv-homepage`
2. Verify all required environment variables are set
3. Ensure port 3000 is not already in use
4. Check Docker has sufficient resources

### Build Failures

1. Ensure Node 20+ is used in Dockerfile
2. Check `package-lock.json` is committed to repository
3. Verify all dependencies are correctly listed in `package.json`
4. Clear Docker build cache: `docker builder prune`

## Performance Optimization

### Recommended Nginx Reverse Proxy Configuration

```nginx
server {
    listen 80;
    server_name byteserv.it www.byteserv.it;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name byteserv.it www.byteserv.it;

    ssl_certificate /etc/letsencrypt/live/byteserv.it/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/byteserv.it/privkey.pem;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Rollback Procedure

### With Coolify

1. Navigate to your application in Coolify
2. Go to **Deployments** tab
3. Click on a previous successful deployment
4. Click **Redeploy**

### Manual Rollback

1. Pull previous Git commit: `git checkout <commit-hash>`
2. Rebuild image: `docker build -t byteserv-homepage .`
3. Stop current container: `docker stop byteserv-homepage`
4. Remove current container: `docker rm byteserv-homepage`
5. Start new container with previous image

## Backup Strategy

### Database Backups

This application does not use a database. All data is stateless.

### Email Logs

Contact form submissions are sent via email. Ensure your email server has proper logging and retention policies.

## Security Checklist

- [ ] SMTP credentials stored as environment variables (not in code)
- [ ] Application runs as non-root user in container
- [ ] HTTPS enabled (via Coolify or reverse proxy)
- [ ] Security headers configured (X-Frame-Options, etc.)
- [ ] Container health checks enabled
- [ ] Regular security updates (rebuild image monthly)
- [ ] Firewall configured (only ports 80/443 exposed)

## Support

For issues or questions:
- Check container logs first
- Review this documentation
- Contact: hello@byteserv.it
