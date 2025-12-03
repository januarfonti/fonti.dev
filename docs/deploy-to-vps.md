# fonti.dev - Deploy to VPS via Dokploy

This guide explains how to deploy the fonti.dev Next.js portfolio application to your VPS using Dokploy.

---

## Prerequisites

- VPS with Dokploy installed (Sumopod VPS: 2GB RAM, 2 vCPU)
- Cloudflare Tunnel configured
- GitHub repository (update with actual repo URL)
- Domain: `fonti.dev` (or your desired domain)

---

## Quick Deployment Steps

### 1. Create Application in Dokploy

1. Go to https://dokploy.meallog.app
2. Click **"Create Application"**
3. Fill in the details:
   - **Name**: fonti.dev
   - **Repository**: Your GitHub repo URL
   - **Branch**: `main`
   - **Build Type**: Dockerfile
   - **Dockerfile Path**: `./Dockerfile`

### 2. Configure Environment Variables

Add environment variables in Dokploy if needed:

```bash
NODE_ENV=production
# Add any other environment variables your app needs
```

### 3. Configure Domain

1. Go to **Domains** tab
2. Click **"Add Domain"**
3. Settings:
   - **Domain**: `fonti.dev`
   - **Port**: `3000`
   - **Path**: `/`
   - **HTTPS**: ✅ Enabled
   - **Certificate**: Let's Encrypt
   - **Behind Cloudflare**: ✅ Enabled

### 4. Deploy

1. Click **"Deploy"** button
2. Wait for build to complete (~3-5 minutes)
3. Check logs for "Ready in X.Xs" message
4. Verify service shows `1/1` replicas

---

## Cloudflare Tunnel Configuration

### Update Tunnel Config on VPS

```bash
# SSH into VPS
ssh ubuntu@100.90.228.9

# Edit tunnel configuration
sudo nano /etc/cloudflared/config.yml
```

Add fonti.dev domain to the ingress rules:

```yaml
tunnel: 919cd5a9-9516-4094-a9e2-b4e819b4023c
credentials-file: /etc/cloudflared/919cd5a9-9516-4094-a9e2-b4e819b4023c.json
logDirectory: /var/log/cloudflared
loglevel: info

ingress:
  # fonti.dev Portfolio
  - hostname: fonti.dev
    service: https://localhost:443
    originRequest:
      connectTimeout: 30s
      noTLSVerify: true
      httpHostHeader: fonti.dev

  # CCTV Malang
  - hostname: cctvkotamalang.com
    service: https://localhost:443
    originRequest:
      connectTimeout: 30s
      noTLSVerify: true
      httpHostHeader: cctvkotamalang.com

  # Landing page (MealLog)
  - hostname: meallog.app
    service: https://localhost:443
    originRequest:
      connectTimeout: 30s
      noTLSVerify: true
      httpHostHeader: meallog.app

  # Web app (MealLog)
  - hostname: my.meallog.app
    service: https://localhost:443
    originRequest:
      connectTimeout: 30s
      noTLSVerify: true
      httpHostHeader: my.meallog.app

  # API (MealLog)
  - hostname: api.meallog.app
    service: https://localhost:443
    originRequest:
      connectTimeout: 30s
      noTLSVerify: true
      httpHostHeader: api.meallog.app

  # Dokploy admin panel
  - hostname: dokploy.meallog.app
    service: https://localhost:3000
    originRequest:
      noTLSVerify: true

  # Catch-all for unknown hostnames
  - service: http_status:404
```

Restart cloudflared:

```bash
sudo systemctl restart cloudflared
sudo systemctl status cloudflared
```

---

## Configure DNS in Cloudflare

1. Go to Cloudflare Dashboard → DNS
2. Add/Update CNAME record:
   - **Type**: `CNAME`
   - **Name**: `@` (for root domain)
   - **Target**: `919cd5a9-9516-4094-a9e2-b4e819b4023c.cfargotunnel.com`
   - **Proxy status**: ☁️ Proxied (orange cloud)
   - **TTL**: Auto

---

## Verify Deployment

### Test via curl

```bash
curl -I https://fonti.dev
```

Expected: `HTTP/2 200`

### Check Service Status

```bash
ssh ubuntu@100.90.228.9
sudo docker service ls | grep fonti
```

Should show `1/1` replicas

### View Logs

```bash
sudo docker service logs <service-name> --tail 100 -f
```

---

## Troubleshooting

### Container Restart Loop (0/1 replicas)

**Cause**: Docker health check issue (already fixed - no health check in Dockerfile)

**Solution**: Dockerfile has been optimized without health checks to prevent this issue.

### 502 Bad Gateway

**Possible causes**:
1. Service not running (check `docker service ls`)
2. Domain not configured in Dokploy
3. Cloudflare Tunnel not updated

**Debug**:
```bash
# Check if container is running
sudo docker service ps <service-name> --no-trunc

# Check logs
sudo docker service logs <service-name> --tail 50

# Test Traefik routing
curl -H "Host: fonti.dev" https://localhost:443
```

### DNS Not Resolving

**Check DNS propagation**:
```bash
dig fonti.dev
```

Should return CNAME pointing to Cloudflare Tunnel.

### Content Collections Build Error

If you see errors related to `@content-collections/next`, ensure the `.content-collections` directory is copied in the Dockerfile (already handled).

---

## Dockerfile Explanation

The Dockerfile uses a multi-stage build optimized for this Next.js 15 app:

### Build Stage
- Uses Node 20 Alpine (lightweight)
- Installs dependencies with **yarn** (not npm)
- Builds the Next.js application
- Generates content collections

### Production Stage
- Uses Node 20 Alpine
- Installs all dependencies with yarn (including TypeScript)
- Copies built files from builder
- Copies content collections data
- Runs on port 3000
- **No health check** to avoid restart loops

### Special Considerations
- Uses `yarn` instead of `npm` (project uses yarn.lock)
- Copies `.content-collections` for `@content-collections/next`
- Includes `content-collections.ts` configuration

---

## Post-Deployment Checklist

- [ ] Application builds successfully in Dokploy
- [ ] Service shows `1/1` replicas (not `0/1`)
- [ ] Logs show "Ready in X.Xs" message
- [ ] Domain configured in Dokploy with HTTPS
- [ ] Cloudflare Tunnel updated with domain
- [ ] DNS CNAME record added in Cloudflare
- [ ] Site accessible via browser (https://fonti.dev)
- [ ] SSL certificate valid
- [ ] All pages loading correctly
- [ ] Portfolio content displaying properly

---

## Monitoring

### Check Application Health

```bash
# Service status
sudo docker service ls

# Container logs
sudo docker service logs <service-name> --tail 100

# Resource usage
sudo docker stats

# Cloudflare Tunnel status
sudo systemctl status cloudflared
```

### Key Metrics to Monitor

- Service replicas (should be 1/1)
- Container restarts (should be 0)
- Memory usage (< 500MB for Next.js)
- Response times
- Error rates in logs

---

## Updating the Application

### Deploy New Changes

1. Push changes to GitHub
2. Go to Dokploy → fonti.dev → Deployments
3. Click **"Deploy"** button
4. Wait for build to complete
5. Verify new changes are live

### Rollback to Previous Version

1. Go to Dokploy → Deployments
2. Find previous successful deployment
3. Click **"Redeploy"** on that version

---

## Resources

- **Dokploy Admin**: https://dokploy.meallog.app
- **Troubleshooting Guide**: See MealLog's `docs/troubleshooting-deployment.md` for common issues
- **Next.js 15 Docs**: https://nextjs.org/docs
- **Content Collections**: https://www.content-collections.dev/

---

*Last updated: December 3, 2025*
