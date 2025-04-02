# 淼录教育网站部署指南

本文档提供了部署淼录教育网站的详细步骤，包括如何将代码上传到GitHub、如何在本地或服务器上部署网站，以及如何配置和自定义网站内容。

## 目录

1. [上传代码到GitHub](#上传代码到github)
2. [本地部署](#本地部署)
3. [服务器部署](#服务器部署)
4. [网站配置和自定义](#网站配置和自定义)
5. [联系表单配置](#联系表单配置)
6. [常见问题解答](#常见问题解答)

## 上传代码到GitHub

### 方法一：使用打包的代码文件

1. 下载提供的`miaolu_website.tar.gz`文件
2. 在本地解压文件：
   ```bash
   tar -xzvf miaolu_website.tar.gz -C ./miaolu_website
   ```
3. 初始化Git仓库（如果解压后的文件夹中没有.git目录）：
   ```bash
   cd miaolu_website
   git init
   git add .
   git commit -m "Initial commit"
   ```
4. 添加GitHub远程仓库：
   ```bash
   git remote add origin https://github.com/HallymXu/miaolu_website.git
   ```
5. 推送代码到GitHub：
   ```bash
   git push -u origin main
   ```

### 方法二：直接克隆仓库（如果已成功上传）

如果代码已经成功上传到GitHub，可以直接克隆仓库：
```bash
git clone https://github.com/HallymXu/miaolu_website.git
```

## 本地部署

### 使用Python内置HTTP服务器（开发环境）

1. 确保已安装Python（推荐Python 3.6+）
2. 进入网站目录：
   ```bash
   cd miaolu_website
   ```
3. 启动HTTP服务器：
   ```bash
   python -m http.server 8000
   ```
4. 在浏览器中访问：`http://localhost:8000`

### 使用Node.js和http-server（开发环境）

1. 确保已安装Node.js和npm
2. 安装http-server：
   ```bash
   npm install -g http-server
   ```
3. 进入网站目录并启动服务器：
   ```bash
   cd miaolu_website
   http-server -p 8000
   ```
4. 在浏览器中访问：`http://localhost:8000`

## 服务器部署

### 使用Nginx部署（生产环境）

1. 安装Nginx：
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. 配置Nginx：
   ```bash
   sudo nano /etc/nginx/sites-available/miaolu_website
   ```

3. 添加以下配置：
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;
       root /var/www/miaolu_website;
       index index.html;
       
       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```

4. 创建符号链接并启用站点：
   ```bash
   sudo ln -s /etc/nginx/sites-available/miaolu_website /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. 将网站文件复制到服务器：
   ```bash
   sudo mkdir -p /var/www/miaolu_website
   sudo cp -r /path/to/miaolu_website/* /var/www/miaolu_website/
   sudo chown -R www-data:www-data /var/www/miaolu_website
   ```

### 使用GitHub Pages部署（免费托管）

1. 在GitHub仓库中，进入Settings > Pages
2. 在Source部分，选择main分支
3. 点击Save按钮
4. 等待几分钟，GitHub Pages将自动部署您的网站
5. 部署完成后，您将获得一个类似`https://hallymxu.github.io/miaolu_website/`的URL

### 使用Netlify部署（免费托管，推荐）

1. 注册并登录[Netlify](https://www.netlify.com/)
2. 点击"New site from Git"
3. 选择GitHub作为Git提供商
4. 授权Netlify访问您的GitHub账户
5. 选择`miaolu_website`仓库
6. 保持默认设置，点击"Deploy site"
7. 等待部署完成，您将获得一个Netlify提供的URL
8. 可以在Site settings中自定义域名

## 网站配置和自定义

网站使用JSON配置文件来管理内容，便于修改和维护。主要配置文件位于`data/config.json`。

### 修改公司信息

编辑`data/config.json`文件中的`company`部分：
```json
"company": {
  "name": "合肥淼录教育咨询服务有限公司",
  "creditCode": "91340111MA8QWW0E1J",
  "responsible": "张琦玮",
  "phone": "15216777223",
  "email": "contact@miaolu-edu.com",
  "address": "安徽省合肥市包河区庐州大道800号万达银座B座1827室",
  "workingHours": "周一至周五: 9:00 - 18:00"
}
```

### 修改工作室信息

编辑`data/config.json`文件中的`studios`部分：
```json
"studios": {
  "main": {
    "name": "淼录教育",
    "slogan": "专业教育咨询服务",
    "description": "淼录教育下设三个专业工作室，为学生和专业人士提供全方位的学术、留学与就业服务",
    "wechat": "miaolu-edu"
  },
  "academic": {
    "name": "云起工作室",
    "slogan": "专业学术辅导服务",
    "description": "由具有丰富学术经验的专业人士组成，致力于为学生和研究人员提供学术支持和指导",
    "wechat": "yunqi-studio"
  },
  // 其他工作室...
}
```

### 修改服务内容

编辑`data/config.json`文件中的`services`部分：
```json
"services": {
  "title": "我们的服务",
  "description": "淼录教育提供学术、留学与就业相关的咨询服务，协助您规划学业与职业发展",
  "items": [
    {
      "id": "academic",
      "title": "学术咨询",
      "description": "云起工作室提供学术相关咨询，协助您了解学术发展方向",
      "features": [
        // 服务特点...
      ]
    },
    // 其他服务...
  ]
}
```

## 联系表单配置

网站使用FormSubmit.co服务处理联系表单提交。

### 修改接收邮箱

1. 编辑`data/config.json`文件中的`contact.formSubmission.targetEmail`字段：
   ```json
   "formSubmission": {
     "targetEmail": "hallymxu",
     "successMessage": "感谢您的留言，我们会尽快回复您！",
     "errorMessage": "发送失败，请稍后再试或直接联系我们。"
   }
   ```

2. 将`targetEmail`的值更改为您希望接收表单提交的邮箱地址

### FormSubmit.co首次使用激活

1. 当有用户首次通过表单提交信息时，FormSubmit.co会向您设置的邮箱发送一封确认邮件
2. 您需要点击确认邮件中的链接来激活表单服务
3. 激活后，所有表单提交都会发送到您的邮箱

## 常见问题解答

### 网站无法访问

- 检查服务器是否正常运行
- 确认域名DNS设置是否正确
- 检查防火墙设置，确保端口已开放

### 联系表单不工作

- 确认已激活FormSubmit.co服务
- 检查网络连接
- 确认JavaScript是否正常加载

### 如何添加新图片

1. 将图片文件放入`images`目录
2. 在HTML文件中引用图片：`<img src="images/your-image.jpg" alt="描述">`

### 如何修改样式

编辑`css/style.css`文件来修改网站样式。

---

如有任何问题或需要进一步的帮助，请联系网站开发团队。
