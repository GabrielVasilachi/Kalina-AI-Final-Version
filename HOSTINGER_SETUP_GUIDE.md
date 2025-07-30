# Hostinger Deployment Setup Guide

## 1. Server Setup on Hostinger

### Prerequisites
- VPS or Cloud hosting plan on Hostinger
- SSH access enabled
- Root or sudo access

### Install Required Software

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install Git and Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs git

# Install Nginx (if not using Docker nginx)
sudo apt install nginx -y

# Install Certbot for SSL
sudo apt install snapd -y
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

## 2. Domain Configuration

### DNS Settings in Hostinger Panel
1. Go to Hostinger Control Panel → Domains
2. Select your domain → DNS Zone
3. Add/Update these records:

```
Type: A
Name: @
Content: YOUR_SERVER_IP
TTL: 3600

Type: A  
Name: www
Content: YOUR_SERVER_IP
TTL: 3600

Type: CNAME
Name: *
Content: yourdomain.com
TTL: 3600
```

## 3. Server Project Setup

### Clone and Setup Project
```bash
# Create project directory
sudo mkdir -p /var/www/kalina-ai
sudo chown $USER:$USER /var/www/kalina-ai
cd /var/www/kalina-ai

# Clone your repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git .

# Make deploy script executable
chmod +x deploy.sh

# Create environment file
cp .env.example .env.production
# Edit .env.production with your production values
nano .env.production
```

### Environment Variables (.env.production)
```env
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
PORT=3000
# Add other environment variables as needed
```

## 4. GitHub Secrets Setup

### Go to GitHub Repository → Settings → Secrets and Variables → Actions

Add these secrets:

```
HOST: your-server-ip-address
USERNAME: your-server-username
PRIVATE_KEY: your-ssh-private-key
PORT: 22 (or your SSH port)
```

### Generate SSH Key for GitHub Actions
On your server:
```bash
# Generate SSH key pair
ssh-keygen -t rsa -b 4096 -C "github-actions@yourdomain.com"

# Add public key to authorized_keys
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

# Copy private key content (add this to GitHub secrets as PRIVATE_KEY)
cat ~/.ssh/id_rsa
```

## 5. SSL Certificate Setup

### Using Certbot (Let's Encrypt)
```bash
# Stop nginx if running
sudo systemctl stop nginx

# Get SSL certificate
sudo certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com

# Verify certificate
sudo certbot certificates
```

### Update Nginx Configuration
Update `/var/www/kalina-ai/nginx.conf` with your domain:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Rest of your nginx configuration...
}
```

## 6. Deploy Application

### Manual First Deployment
```bash
cd /var/www/kalina-ai
./deploy.sh production
```

### Automatic Deployment
After setting up GitHub secrets, every push to main branch will automatically deploy.

## 7. Verify Deployment

### Check Services
```bash
# Check Docker containers
docker ps

# Check logs
docker-compose logs -f

# Check nginx status
sudo systemctl status nginx
```

### Test Website
- Visit: https://yourdomain.com
- Check SSL: https://www.ssllabs.com/ssltest/
- Test performance: https://pagespeed.web.dev/

## 8. Maintenance

### SSL Certificate Renewal (automatic)
```bash
# Test renewal
sudo certbot renew --dry-run

# Add to crontab for automatic renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Update Application
```bash
cd /var/www/kalina-ai
git pull origin main
./deploy.sh production
```

## 9. Troubleshooting

### Common Issues
- **Port conflicts**: Check if port 80/443 are free
- **DNS propagation**: Wait 24-48 hours for full propagation
- **SSL issues**: Check certificate paths and permissions
- **Docker issues**: Check logs with `docker-compose logs`

### Log Locations
- Application logs: `docker-compose logs app`
- Nginx logs: `docker-compose logs nginx`
- System logs: `/var/log/syslog`

## 10. Security Recommendations

- Enable UFW firewall
- Regular security updates
- Use strong passwords
- Monitor logs regularly
- Backup database and files
- Use fail2ban for SSH protection

```bash
# Basic security setup
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw enable

# Install fail2ban
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
```

Your website will be live at your domain once these steps are completed!
