// 加载配置文件
let config = null;

// 从JSON文件加载配置
async function loadConfig() {
  try {
    const response = await fetch('data/config.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    config = await response.json();
    updateContent();
  } catch (error) {
    console.error('加载配置文件失败:', error);
  }
}

// 更新网站内容
function updateContent() {
  if (!config) return;
  
  // 更新公司信息
  updateCompanyInfo();
  
  // 更新工作室信息
  updateStudioInfo();
  
  // 更新首页内容
  updateHeroSection();
  
  // 更新服务内容
  updateServicesSection();
  
  // 更新关于我们内容
  updateAboutSection();
  
  // 更新联系我们内容
  updateContactSection();
  
  // 更新页脚内容
  updateFooterSection();
}

// 更新公司信息
function updateCompanyInfo() {
  // 更新页面标题
  document.title = `${config.company.name} - 专业学术辅导、留学中介与工作内推`;
  
  // 更新公司信息部分
  const companyNameElements = document.querySelectorAll('.company-name');
  companyNameElements.forEach(el => {
    el.textContent = config.company.name;
  });
  
  // 更新社会信用代码
  const creditCodeElements = document.querySelectorAll('.credit-code');
  creditCodeElements.forEach(el => {
    el.textContent = config.company.creditCode;
  });
  
  // 更新负责人
  const responsibleElements = document.querySelectorAll('.responsible');
  responsibleElements.forEach(el => {
    el.textContent = config.company.responsible;
  });
  
  // 更新联系方式
  const phoneElements = document.querySelectorAll('.phone');
  phoneElements.forEach(el => {
    el.textContent = config.company.phone;
  });
  
  const emailElements = document.querySelectorAll('.email');
  emailElements.forEach(el => {
    el.textContent = config.company.email;
  });
  
  const addressElements = document.querySelectorAll('.address');
  addressElements.forEach(el => {
    el.textContent = config.company.address;
  });
  
  const workingHoursElements = document.querySelectorAll('.working-hours');
  workingHoursElements.forEach(el => {
    el.textContent = config.company.workingHours;
  });
}

// 更新工作室信息
function updateStudioInfo() {
  // 更新主工作室信息
  const mainStudioNameElements = document.querySelectorAll('.main-studio-name');
  mainStudioNameElements.forEach(el => {
    el.textContent = config.studios.main.name;
  });
  
  // 更新学术工作室信息
  const academicStudioNameElements = document.querySelectorAll('.academic-studio-name');
  academicStudioNameElements.forEach(el => {
    el.textContent = config.studios.academic.name;
  });
  
  // 更新留学工作室信息
  const abroadStudioNameElements = document.querySelectorAll('.abroad-studio-name');
  abroadStudioNameElements.forEach(el => {
    el.textContent = config.studios.abroad.name;
  });
  
  // 更新就业工作室信息
  const jobStudioNameElements = document.querySelectorAll('.job-studio-name');
  jobStudioNameElements.forEach(el => {
    el.textContent = config.studios.job.name;
  });
}

// 更新首页内容
function updateHeroSection() {
  const heroTitleElement = document.querySelector('.hero-title');
  if (heroTitleElement) {
    heroTitleElement.textContent = config.hero.title;
  }
  
  const heroSubtitleElement = document.querySelector('.hero-subtitle');
  if (heroSubtitleElement) {
    heroSubtitleElement.textContent = config.hero.subtitle;
  }
  
  const heroPrimaryButton = document.querySelector('.hero-buttons .btn:first-child');
  if (heroPrimaryButton) {
    heroPrimaryButton.textContent = config.hero.buttons.primary;
  }
  
  const heroSecondaryButton = document.querySelector('.hero-buttons .btn-secondary');
  if (heroSecondaryButton) {
    heroSecondaryButton.textContent = config.hero.buttons.secondary;
  }
}

// 更新服务内容
function updateServicesSection() {
  const servicesTitleElement = document.querySelector('#services .section-title h2');
  if (servicesTitleElement) {
    servicesTitleElement.textContent = config.services.title;
  }
  
  const servicesDescriptionElement = document.querySelector('#services .section-title p');
  if (servicesDescriptionElement) {
    servicesDescriptionElement.textContent = config.services.description;
  }
  
  // 更新服务卡片
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length === config.services.items.length) {
    for (let i = 0; i < serviceCards.length; i++) {
      const card = serviceCards[i];
      const item = config.services.items[i];
      
      const titleElement = card.querySelector('.service-title');
      if (titleElement) {
        titleElement.textContent = item.title;
      }
      
      const descriptionElement = card.querySelector('.service-description');
      if (descriptionElement) {
        descriptionElement.textContent = item.description;
      }
    }
  }
}

// 更新关于我们内容
function updateAboutSection() {
  const aboutTitleElement = document.querySelector('#about .section-title h2');
  if (aboutTitleElement) {
    aboutTitleElement.textContent = config.about.title;
  }
  
  const aboutDescriptionElement = document.querySelector('#about .section-title p');
  if (aboutDescriptionElement) {
    aboutDescriptionElement.textContent = config.about.description;
  }
  
  const aboutStoryElement = document.querySelector('#about .about-text:first-of-type');
  if (aboutStoryElement) {
    aboutStoryElement.textContent = config.about.story;
  }
  
  const aboutMissionElement = document.querySelector('#about .about-text:last-of-type');
  if (aboutMissionElement) {
    aboutMissionElement.textContent = config.about.mission;
  }
}

// 更新联系我们内容
function updateContactSection() {
  const contactTitleElement = document.querySelector('#contact .section-title h2');
  if (contactTitleElement) {
    contactTitleElement.textContent = config.contact.title;
  }
  
  const contactDescriptionElement = document.querySelector('#contact .section-title p');
  if (contactDescriptionElement) {
    contactDescriptionElement.textContent = config.contact.description;
  }
  
  const contactTextElement = document.querySelector('#contact .contact-text');
  if (contactTextElement) {
    contactTextElement.textContent = config.contact.text;
  }
  
  // 更新表单标签
  const nameLabel = document.querySelector('label[for="name"]');
  if (nameLabel) {
    nameLabel.textContent = config.contact.form.name;
  }
  
  const emailLabel = document.querySelector('label[for="email"]');
  if (emailLabel) {
    emailLabel.textContent = config.contact.form.email;
  }
  
  const phoneLabel = document.querySelector('label[for="phone"]');
  if (phoneLabel) {
    phoneLabel.textContent = config.contact.form.phone;
  }
  
  const messageLabel = document.querySelector('label[for="message"]');
  if (messageLabel) {
    messageLabel.textContent = config.contact.form.message;
  }
  
  const submitButton = document.querySelector('#contactForm button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = config.contact.form.button;
  }
}

// 更新页脚内容
function updateFooterSection() {
  const footerDescriptionElement = document.querySelector('.footer-logo p');
  if (footerDescriptionElement) {
    footerDescriptionElement.textContent = config.footer.description;
  }
  
  // 更新快速链接
  const quickLinksTitle = document.querySelector('.footer-links:nth-child(1) h3');
  if (quickLinksTitle) {
    quickLinksTitle.textContent = config.footer.quickLinks.title;
  }
  
  const quickLinks = document.querySelectorAll('.footer-links:nth-child(1) ul li a');
  if (quickLinks.length === config.footer.quickLinks.links.length) {
    for (let i = 0; i < quickLinks.length; i++) {
      const link = quickLinks[i];
      const item = config.footer.quickLinks.links[i];
      
      link.textContent = item.name;
      link.href = item.url;
    }
  }
  
  // 更新服务链接
  const servicesTitle = document.querySelector('.footer-links:nth-child(2) h3');
  if (servicesTitle) {
    servicesTitle.textContent = config.footer.services.title;
  }
  
  const servicesLinks = document.querySelectorAll('.footer-links:nth-child(2) ul li a');
  if (servicesLinks.length === config.footer.services.links.length) {
    for (let i = 0; i < servicesLinks.length; i++) {
      const link = servicesLinks[i];
      const item = config.footer.services.links[i];
      
      link.textContent = item.name;
      link.href = item.url;
    }
  }
  
  // 更新订阅部分
  const newsletterTitle = document.querySelector('.footer-newsletter h3');
  if (newsletterTitle) {
    newsletterTitle.textContent = config.footer.newsletter.title;
  }
  
  const newsletterDescription = document.querySelector('.footer-newsletter p');
  if (newsletterDescription) {
    newsletterDescription.textContent = config.footer.newsletter.description;
  }
  
  const newsletterInput = document.querySelector('.newsletter-input');
  if (newsletterInput) {
    newsletterInput.placeholder = config.footer.newsletter.placeholder;
  }
  
  const newsletterButton = document.querySelector('.newsletter-btn');
  if (newsletterButton) {
    newsletterButton.textContent = config.footer.newsletter.button;
  }
  
  // 更新版权信息
  const copyrightElement = document.querySelector('.footer-bottom p');
  if (copyrightElement) {
    copyrightElement.textContent = config.footer.copyright;
  }
}

// 导航栏交互
document.addEventListener('DOMContentLoaded', function() {
  // 加载配置
  loadConfig();
  
  // 移动端菜单切换
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // 滚动时导航栏效果
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      navbar.style.padding = '10px 0';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
      navbar.style.padding = '15px 0';
    }
    
    lastScrollTop = scrollTop;
  });
  
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // 关闭移动菜单（如果打开）
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
        
        // 平滑滚动
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // 表单提交处理
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 获取表单数据
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      // 简单验证
      if (!name || !email || !message) {
        alert('请填写必填字段');
        return;
      }
      
      // 获取目标邮箱
      const targetEmail = config.contact.formSubmission.targetEmail;
      
      // 创建一个隐藏的表单，用于发送邮件
      const emailForm = document.createElement('form');
      emailForm.method = 'POST';
      emailForm.action = `https://formsubmit.co/${targetEmail}`;
      emailForm.style.display = 'none';
      
      // 添加表单字段
      const nameField = document.createElement('input');
      nameField.type = 'text';
      nameField.name = 'name';
      nameField.value = name;
      
      const emailField = document.createElement('input');
      emailField.type = 'email';
      emailField.name = 'email';
      emailField.value = email;
      
      const phoneField = document.createElement('input');
      phoneField.type = 'text';
      phoneField.name = 'phone';
      phoneField.value = phone || '未提供';
      
      const messageField = document.createElement('textarea');
      messageField.name = 'message';
      messageField.value = message;
      
      const subjectField = document.createElement('input');
      subjectField.type = 'hidden';
      subjectField.name = '_subject';
      subjectField.value = '淼录教育网站表单提交';
      
      const captchaField = document.createElement('input');
      captchaField.type = 'hidden';
      captchaField.name = '_captcha';
      captchaField.value = 'false';
      
      const templateField = document.createElement('input');
      templateField.type = 'hidden';
      templateField.name = '_template';
      templateField.value = 'table';
      
      const nextField = document.createElement('input');
      nextField.type = 'hidden';
      nextField.name = '_next';
      nextField.value = window.location.href + '?submitted=true';
      
      // 将字段添加到表单
      emailForm.appendChild(nameField);
      emailForm.appendChild(emailField);
      emailForm.appendChild(phoneField);
      emailForm.appendChild(messageField);
      emailForm.appendChild(subjectField);
      emailForm.appendChild(captchaField);
      emailForm.appendChild(templateField);
      emailForm.appendChild(nextField);
      
      // 将表单添加到文档并提交
      document.body.appendChild(emailForm);
      
      try {
        emailForm.submit();
        // 显示成功消息
        alert(config.contact.formSubmission.successMessage);
        contactForm.reset();
      } catch (error) {
        // 显示错误消息
        alert(config.contact.formSubmission.errorMessage);
        console.error('表单提交失败:', error);
      } finally {
        // 移除临时表单
        document.body.removeChild(emailForm);
      }
    });
  }
  
  // 检查URL参数，显示表单提交后的消息
  function checkFormSubmission() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      alert(config.contact.formSubmission.successMessage);
      // 清除URL参数
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
  
  // 页面加载完成后检查表单提交状态
  window.addEventListener('DOMContentLoaded', checkFormSubmission);
  
  // 替换占位图像
  // 由于我们没有实际的图像，这里使用了SVG图像作为替代
  const logoPlaceholder = document.getElementById('logo-placeholder');
  if (logoPlaceholder) {
    logoPlaceholder.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Crect width="40" height="40" fill="%23007AFF" rx="8"/%3E%3Cpath d="M10 20 L20 10 L30 20 L20 30 Z" fill="white"/%3E%3C/svg%3E';
  }
  
  const footerLogoPlaceholder = document.getElementById('footer-logo-placeholder');
  if (footerLogoPlaceholder) {
    footerLogoPlaceholder.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Crect width="40" height="40" fill="white" rx="8"/%3E%3Cpath d="M10 20 L20 10 L30 20 L20 30 Z" fill="%23007AFF"/%3E%3C/svg%3E';
  }
  
  // 使用下载的SVG图像
  document.getElementById('hero-placeholder').src = 'images/education.svg';
  document.getElementById('academic-placeholder').src = 'images/graduation.svg';
  document.getElementById('abroad-placeholder').src = 'images/certificate.svg';
  document.getElementById('job-placeholder').src = 'images/education.svg';
  document.getElementById('about-placeholder').src = 'images/graduation.svg';
  
  // 使用Font Awesome图标替换图标占位符
  document.getElementById('academic-icon-placeholder').src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"%3E%3Cpath fill="%23007AFF" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5v-2.9c0-30.9 25.1-56 56-56s56 25.1 56 56v2.9c-6 13.3-10.3 27.8-13.5 41.9c-6.4 27.5-10.7 65.9-2.1 108.7c.8 4.3 3.4 8.1 7.1 10.4s8.2 3.1 12.4 2l64-16c5.2-1.3 9.4-5.1 11.2-10.2s.9-10.7-2.3-15.1c-8.7-11.8-16-24.6-22.5-37.6c-11.5-23-22.3-52.3-22.3-80.8v-28.1c0-32.1-9.3-62.6-25.7-88.4l57.9-20.9c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.9 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/%3E%3C/svg%3E';
  document.getElementById('abroad-icon-placeholder').src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Cpath fill="%23007AFF" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192C2.8 212.5 0 233.9 0 256s2.8 43.5 8.1 64H131.2c-2.1-20.6-3.2-42-3.2-64s1.1-43.4 3.2-64H8.1zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/%3E%3C/svg%3E';
  document.getElementById('job-icon-placeholder').src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Cpath fill="%23007AFF" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/%3E%3C/svg%3E';
});
