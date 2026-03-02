# Deploy thiepcuoi-honganh-ngocanh.online

Quy trình: **build Docker local → push Docker Hub → trên VM pull và chạy**.

Image: **honganhtran/wedding-invitation**

---

## 1. Local: Build & push image

```bash
# Build image
docker build -t honganhtran/wedding-invitation:latest .

# (Tùy chọn) chạy thử local
# docker run -p 3000:80 honganhtran/wedding-invitation:latest
# Mở http://localhost:3000

# Đăng nhập Docker Hub (nếu chưa)
docker login

# Push lên Docker Hub
docker push honganhtran/wedding-invitation:latest
```

Tag theo version (tùy chọn):

```bash
docker tag honganhtran/wedding-invitation:latest honganhtran/wedding-invitation:v1.0
docker push honganhtran/wedding-invitation:v1.0
```

---

## 2. Trên VM: Pull và chạy container

```bash
# Pull image mới nhất
docker pull honganhtran/wedding-invitation:latest

# Dừng container cũ (nếu đang chạy)
docker stop wedding-invitation 2>/dev/null || true
docker rm wedding-invitation 2>/dev/null || true

# Chạy container
# - Nếu dùng Nginx + SSL (mục 4): dùng -p 8080:80
# - Nếu chỉ chạy Docker, không SSL: dùng -p 80:80
docker run -d \
  --name wedding-invitation \
  --restart unless-stopped \
  -p 8080:80 \
  honganhtran/wedding-invitation:latest
```

Kiểm tra:

```bash
docker ps
curl -I http://localhost
# Hoặc http://localhost:8080 (trực tiếp container) / http://thiepcuoi-honganh-ngocanh.online (qua nginx)
```

---

## 3. DNS

Trỏ domain về IP VM:

- **A**: `thiepcuoi-honganh-ngocanh.online` → IP VM  
- **A**: `www.thiepcuoi-honganh-ngocanh.online` → IP VM (nếu dùng www)

---

## 4. SSL (HTTPS) trên VM

Port **80** phải do **nginx trên host** nắm (không phải Docker), rồi nginx proxy xuống container. Nếu container đang `-p 80:80` thì certbot sẽ báo **Address already in use** khi restart nginx.

### Cách đúng: Nginx host làm reverse proxy + Certbot

**Bước 1 — Dừng container để giải phóng port 80**

```bash
sudo docker stop wedding-invitation
# Kiểm tra port 80 không còn bị chiếm: sudo ss -tlnp | grep :80
```

**Bước 2 — Cài nginx trên host (nếu chưa có)**

```bash
sudo yum install -y nginx    # Amazon Linux
# hoặc: sudo apt install -y nginx   # Ubuntu/Debian
sudo systemctl enable nginx
```

**Bước 3 — Dùng config reverse proxy**

```bash
# Copy config proxy (host listen 80, proxy xuống container 8080)
sudo cp deploy/nginx/thiepcuoi-honganh-ngocanh.online.proxy.conf /etc/nginx/conf.d/thiepcuoi-honganh-ngocanh.online.conf
# Hoặc sites-available: sudo cp ... /etc/nginx/sites-available/ && sudo ln -sf /etc/nginx/sites-available/thiepcuoi-honganh-ngocanh.online.proxy.conf /etc/nginx/sites-enabled/

# Tạo thư mục cho ACME challenge (certbot)
sudo mkdir -p /var/www/letsencrypt

# Bỏ config mặc định nếu conflict (ví dụ default server)
# sudo rm /etc/nginx/conf.d/default.conf   # nếu cần

sudo nginx -t && sudo systemctl start nginx
# Hoặc: sudo systemctl reload nginx
```

**Bước 4 — Chạy lại container trên port 8080 (không còn 80)**

```bash
docker rm wedding-invitation 2>/dev/null || true
docker run -d \
  --name wedding-invitation \
  --restart unless-stopped \
  -p 8080:80 \
  honganhtran/wedding-invitation:latest
```

**Bước 5 — Chạy Certbot**

```bash
sudo certbot --nginx -d thiepcuoi-honganh-ngocanh.online -d www.thiepcuoi-honganh-ngocanh.online
```

Certbot sẽ chỉnh file nginx, thêm SSL và có thể thêm redirect HTTP→HTTPS. Sau đó:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

**Bước 6 — Redirect HTTP → HTTPS (nếu certbot chưa thêm)**

Mở file config nginx, bỏ comment block đầu tiên trong `deploy/nginx/thiepcuoi-honganh-ngocanh.online.proxy.conf` (server { listen 80; return 301 ... }), rồi:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

**Tóm tắt:** Container chạy `-p 8080:80`, nginx host listen 80/443 và `proxy_pass http://127.0.0.1:8080`.

---

### Cách B: Chỉ chạy container, dùng Cloudflare

Trỏ domain qua Cloudflare (proxy bật), bật SSL “Full” hoặc “Full (strict)” — HTTPS do Cloudflare lo, VM chỉ cần HTTP port 80.

---

## 5. Cập nhật bản mới

Sau khi push image mới lên Docker Hub:

```bash
# Trên VM
docker pull honganhtran/wedding-invitation:latest
docker stop wedding-invitation && docker rm wedding-invitation
docker run -d --name wedding-invitation --restart unless-stopped -p 8080:80 honganhtran/wedding-invitation:latest
```

Hoặc gom vào script `deploy/update.sh` (trong repo có thể thêm sau).

---

## Deploy không dùng Docker (Nginx thuần trên server)

Nếu không dùng Docker, build rồi copy `build/` lên server và dùng Nginx như trong `deploy/nginx/thiepcuoi-honganh-ngocanh.online.conf`. Chi tiết bước copy, enable site, certbot giữ như hướng dẫn Nginx trước đây.
