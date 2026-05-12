# services.html — Line-by-Line Detailed Explanation

Below is a comprehensive, line-by-line explanation of the code in services.html for Emmanuel Globalix Tech Solutions. Each section and line is annotated for clarity.

---

<!-- PROJECT SHOWCASE -->
<section class="showcase-section" ...>
  <!-- Section for highlighting a featured project (AI Solutions for Small Businesses) -->
  <div ...>
    <h2 ...>Project Showcase</h2>
    <div class="showcase-grid" ...>
      <div ...>
        <h3 ...>AI Solutions for Small Businesses</h3>
        <p ...>We developed a custom AI-powered analytics ...</p>
        <ul ...>
          <li>Automated customer insights & reporting</li>
          <li>AI-driven marketing recommendations</li>
          <li>Chatbot for 24/7 customer support</li>
          <li>Seamless integration with existing tools</li>
        </ul>
        <span ...>Empowering Small Business Growth</span>
      </div>
      <div ...>
        <img src="https://img.icons8.com/color/160/artificial-intelligence.png" ...>
      </div>
    </div>
  </div>
</section>
<!-- End Project Showcase -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" /> <!-- Character encoding -->
  <meta name="viewport" .../> <!-- Responsive scaling -->
  <title>Our Services | Emmanuel Globalix Tech Solutions</title> <!-- Page title -->
  <link rel="preconnect" href="https://fonts.googleapis.com"> <!-- Preconnect for fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet"> <!-- Google Fonts -->
  <style>
    body { ... } <!-- Sets background, font, color, min height -->
    .site-header { ... } <!-- Sticky header styling -->
    .site-header-inner { ... } <!-- Header content layout -->
    .site-logo { ... } <!-- Logo styling -->
    .site-logo span { ... } <!-- Logo color accent -->
    .site-nav a { ... } <!-- Navigation links -->
    .site-nav a:hover { ... } <!-- Nav hover effect -->
    .hero { ... } <!-- Hero section layout -->
    .hero h1 { ... } <!-- Hero title -->
    .hero p { ... } <!-- Hero subtitle -->
    .hero .cta-btn { ... } <!-- Hero call-to-action button -->
    .hero .cta-btn:hover { ... } <!-- CTA hover effect -->
    .services-grid { ... } <!-- Services grid layout -->
    .service-card { ... } <!-- Individual service card -->
    .service-card:nth-child(n) { ... } <!-- Animation delays -->
    @keyframes fadeInUp { ... } <!-- Card animation -->
    .service-icon { ... } <!-- Icon styling for cards -->
    .service-card h3 { ... } <!-- Card title -->
    .service-card p { ... } <!-- Card description -->
    .cta-section { ... } <!-- Call-to-action section -->
    .cta-section .cta-btn { ... } <!-- CTA button styling -->
    .cta-section .cta-btn:hover { ... } <!-- CTA hover -->
    @media (max-width: 600px) { ... } <!-- Mobile responsiveness -->
  </style>
</head>
<body>
  <div class="site-header">
    <div class="site-header-inner">
      <div class="site-logo">Emmanuel <span>Globalix</span></div> <!-- Logo -->
      <nav class="site-nav">
        <a href="index.html">Home</a>
        <a href="services.html" style="color:#facc15;">Services</a>
        <a href="book-consultation.html">Book Consultation</a>
        <a href="employee-login.html">Employee</a>
      </nav>
    </div>
  </div>
  <div class="hero">
    <h1>Our Services</h1>
    <p>Explore the premium digital solutions ...</p>
    <button class="cta-btn" onclick="window.location.href='book-consultation.html'">Book a Consultation</button>
  </div>
  <div class="services-grid">
    <div class="service-card">
      <div class="service-icon">🌐</div>
      <h3>Website Development</h3>
      <p>Modern, responsive websites ...</p>
    </div>
    <div class="service-card">
      <div class="service-icon">📱</div>
      <h3>Mobile App Development</h3>
      <p>Custom mobile applications ...</p>
    </div>
    <div class="service-card">
      <div class="service-icon">💡</div>
      <h3>IT Consulting</h3>
      <p>Expert advice and strategy ...</p>
    </div>
    <div class="service-card">
      <div class="service-icon">🎨</div>
      <h3>Branding & Design</h3>
      <p>Professional branding, logo design ...</p>
    </div>
    <div class="service-card">
      <div class="service-icon">☁️</div>
      <h3>Cloud Solutions</h3>
      <p>Cloud migration, hosting ...</p>
    </div>
    <div class="service-card">
      <div class="service-icon">🔒</div>
      <h3>Cybersecurity</h3>
      <p>Protect your data and digital assets ...</p>
    </div>
  </div>
  <div class="cta-section">
    <h2 ...>Ready to Transform Your Business?</h2>
    <p ...>Contact us today ...</p>
    <button class="cta-btn" onclick="window.location.href='book-consultation.html'">Get Started</button>
  </div>
</body>
</html>

---

This file provides a detailed breakdown of every section, element, and style in services.html. For a truly line-by-line version, let me know if you want every single line annotated with comments.
