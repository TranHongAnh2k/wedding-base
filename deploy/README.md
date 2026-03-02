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

# Chạy container (port 80)
docker run -d \
  --name wedding-invitation \
  --restart unless-stopped \
  -p 80:80 \
  honganhtran/wedding-invitation:latest
```

Kiểm tra:

```bash
docker ps
curl -I http://localhost
# Hoặc mở http://<IP-VM> hoặc http://thiepcuoi-honganh-ngocanh.online
```

---

## 3. DNS

Trỏ domain về IP VM:

- **A**: `thiepcuoi-honganh-ngocanh.online` → IP VM  
- **A**: `www.thiepcuoi-honganh-ngocanh.online` → IP VM (nếu dùng www)

---

## 4. SSL (HTTPS) trên VM

Container chỉ serve HTTP (port 80). Để bật HTTPS có 2 hướng:

### Cách A: Nginx trên host làm reverse proxy + Certbot

Trên VM cài nginx + certbot, cấu hình nginx host:

- Listen 80/443, server_name thiepcuoi-honganh-ngocanh.online  
- SSL bằng certificate từ certbot  
- `proxy_pass http://127.0.0.1:80` (trỏ vào container đang map 80:80)

Dùng lại file `deploy/nginx/thiepcuoi-honganh-ngocanh.online.conf` cho nginx host (sửa `root` thành `proxy_pass http://127.0.0.1:80` và cấu hình SSL).

### Cách B: Chỉ chạy container, dùng Cloudflare

Trỏ domain qua Cloudflare (proxy bật), bật SSL “Full” hoặc “Full (strict)” — HTTPS do Cloudflare lo, VM chỉ cần HTTP port 80.

---

## 5. Cập nhật bản mới

Sau khi push image mới lên Docker Hub:

```bash
# Trên VM
docker pull honganhtran/wedding-invitation:latest
docker stop wedding-invitation && docker rm wedding-invitation
docker run -d --name wedding-invitation --restart unless-stopped -p 80:80 honganhtran/wedding-invitation:latest
```

Hoặc gom vào script `deploy/update.sh` (trong repo có thể thêm sau).

---

## Deploy không dùng Docker (Nginx thuần trên server)

Nếu không dùng Docker, build rồi copy `build/` lên server và dùng Nginx như trong `deploy/nginx/thiepcuoi-honganh-ngocanh.online.conf`. Chi tiết bước copy, enable site, certbot giữ như hướng dẫn Nginx trước đây.
