# Quick Hostinger Deployment Guide

## 🚀 Fast Track Setup (30 minutes)

### Step 1: Server Access
1. Login to Hostinger VPS
2. Open SSH terminal or use Hostinger's web terminal

### Step 2: One-Command Setup
```bash
# Install everything needed
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh && sudo usermod -aG docker $USER && curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt-get install -y nodejs git && sudo apt install nginx certbot -y
```

### Step 3: Clone Your Project
```bash
# Create project directory
sudo mkdir -p /var/www/kalina-ai
sudo chown $USER:$USER /var/www/kalina-ai
cd /var/www/kalina-ai

# Clone your repo (replace with your actual repo URL)
git clone https://github.com/YOUR_USERNAME/Kalina-AI-Final-Version.git .
chmod +x deploy.sh
```

### Step 4: Domain DNS (Hostinger Panel)
Go to your domain management and add:
- **A Record**: `@` → `YOUR_SERVER_IP`
- **A Record**: `www` → `YOUR_SERVER_IP`

### Step 5: SSL Certificate
```bash
# Get SSL certificate (replace yourdomain.com)
sudo systemctl stop nginx
sudo certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com
```

### Step 6: Update Configuration
Edit nginx.conf and replace `yourdomain.com` with your actual domain:
```bash
nano nginx.conf
# Replace all instances of yourdomain.com with your domain
```

### Step 7: Deploy
```bash
./deploy.sh production
```

### Step 8: Start Nginx
```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

## 🔧 GitHub Auto-Deploy Setup

### Generate SSH Key
```bash
ssh-keygen -t rsa -b 4096 -C "github@yourdomain.com"
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/id_rsa  # Copy this for GitHub secrets
```

### Add GitHub Secrets
Go to GitHub → Your Repo → Settings → Secrets → Actions:
- `HOST`: Your server IP
- `USERNAME`: Your server username 
- `PRIVATE_KEY`: Content from `cat ~/.ssh/id_rsa`
- `PORT`: 22

## ✅ Verification
- Visit your domain: `https://yourdomain.com`
- Check SSL: Should show green lock
- Test auto-deploy: Push code to main branch

## 🆘 Quick Fixes

### If website doesn't load:
```bash
docker-compose logs
sudo systemctl status nginx
```

### If SSL doesn't work:
```bash
sudo certbot certificates
sudo systemctl reload nginx
```

### If auto-deploy fails:
Check GitHub Actions tab for error details.

Your website should be live in 30 minutes! 🎉
