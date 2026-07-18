const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const translations = {
  en: {
    "packages.hoursExpiry": "Unused hours expire at the end of each billing month and do not roll over.",
    "packages.timeline.premium": "6–8 weeks",
    "packages.timeline.business": "4–6 weeks",
    "packages.timeline.growth": "2–4 weeks",
    "packages.timeline.starter": "1–2 weeks",
    "packages.effort": "Typical timeline",
    "nav.packages": "Packages",
    "pricing.currencyNote": "EUR values are rounded examples for orientation.",
    "pricing.custom.eyebrow": "BUILT AROUND YOU",
    "pricing.custom.title": "No two systems should be built exactly alike.",
    "pricing.custom.copy": "The examples above are starting points, not fixed packages. Scope, deliverables and investment are adapted to your goals, current setup, team and timeline.",
    "pricing.custom.cta": "Discuss a custom scope",
    "nav.portfolio": "Portfolio",
    "portfolio.title": "Work designed around real business outcomes.",
    "portfolio.intro": "A selection of the systems LJ Studio can plan, build and optimize — with transparent starting points for investment.",
    "portfolio.case1.label": "CRM FOUNDATION",
    "portfolio.case1.title": "HubSpot architecture for a growing service business.",
    "portfolio.case1.copy": "A structured CRM setup with lifecycle stages, clean properties, sales pipelines and reporting foundations.",
    "portfolio.case1.outcome1": "Clear lead ownership",
    "portfolio.case1.outcome2": "Reliable pipeline data",
    "portfolio.case1.outcome3": "Scalable processes",
    "portfolio.case2.label": "AUTOMATION SYSTEM",
    "portfolio.case2.title": "Lead nurturing that feels personal.",
    "portfolio.case2.copy": "Segmented workflows, follow-ups and internal notifications designed to reduce manual work without losing relevance.",
    "portfolio.case2.outcome1": "Faster response times",
    "portfolio.case2.outcome2": "Consistent follow-up",
    "portfolio.case2.outcome3": "Less manual admin",
    "portfolio.case3.label": "REPORTING LAYER",
    "portfolio.case3.title": "Decision-ready reporting across the funnel.",
    "portfolio.case3.copy": "A focused dashboard layer connecting marketing activity, sales performance and conversion data.",
    "portfolio.case3.outcome1": "Shared KPIs",
    "portfolio.case3.outcome2": "Cleaner attribution",
    "portfolio.case3.outcome3": "Actionable insights",
    "pricing.from": "from",
    "pricing.month": "/ month",
    "pricing.popular": "MOST POPULAR",
    "pricing.audit.title": "CRM & Automation Audit",
    "pricing.audit.copy": "A focused review of your setup, processes, data quality and highest-impact opportunities.",
    "pricing.audit.item1": "System and process review",
    "pricing.audit.item2": "Priority roadmap",
    "pricing.audit.item3": "90-minute strategy session",
    "pricing.build.title": "HubSpot Foundation Build",
    "pricing.build.copy": "A clean, scalable HubSpot foundation designed around your customer journey and operating model.",
    "pricing.build.item1": "CRM architecture and setup",
    "pricing.build.item2": "Pipeline and lifecycle design",
    "pricing.build.item3": "Core automation and reporting",
    "pricing.retainer.title": "Optimization Partnership",
    "pricing.retainer.copy": "Ongoing support for automation, reporting, optimization and strategic system development.",
    "pricing.retainer.item1": "Monthly optimization roadmap",
    "pricing.retainer.item2": "Workflow and reporting improvements",
    "pricing.retainer.item3": "Strategic support and documentation",
    "pricing.note": "Pricing examples are indicative and exclude software subscriptions, paid media spend and extensive custom development.",
    "contact.copy": "Tell me what you are building, what feels messy and where you want to go. You will receive a personal response — no automated sales sequence.",
    "contact.emailLabel": "Email",
    "contact.responseLabel": "Typical response",
    "contact.responseValue": "Within 1–2 business days",
    "form.name": "Name",
    "form.namePlaceholder": "Your name",
    "form.email": "Email",
    "form.emailPlaceholder": "you@company.com",
    "form.company": "Company",
    "form.companyPlaceholder": "Company or project name",
    "form.project": "What can I help with?",
    "form.option.crm": "CRM architecture",
    "form.option.automation": "Automation",
    "form.option.reporting": "Reporting",
    "form.option.optimization": "HubSpot optimization",
    "form.option.other": "Something else",
    "form.budget": "Estimated budget",
    "form.budget.unsure": "Not sure yet",
    "form.message": "Tell me about your project",
    "form.messagePlaceholder": "What are you trying to improve, and what is currently getting in the way?",
    "form.consent": "I agree that LJ Studio may use my details to respond to this inquiry.",
    "form.submit": "Send message",
    "form.note": "The form is ready for Formspree. Until an endpoint is added, it opens your email app with the message prefilled.",
    "form.invalid": "Please complete the required fields and enter a valid email address.",
    "form.sending": "Sending your message…",
    "form.success": "Thank you — your message has been sent.",
    "form.successTitle": "Message received.",
    "form.successCopy": "Thank you — I will personally get back to you shortly.",
    "footer.signature": "Built for clarity. Designed for growth.",
    "carousel.slide": "Package {current} of {total}: {title}",
    "form.error": "The message could not be sent. Your email app will open instead.",
    "meta.title": "LJ Studio — Intelligent Systems",
    "meta.description": "LJ Studio designs elegant CRM, automation and reporting systems for businesses ready to grow with clarity.",
    "nav.services": "Services",
    "nav.method": "Method",
    "nav.studio": "Studio",
    "nav.call": "Let’s talk",
    "nav.menu": "Open menu",
    "hero.eyebrow": "CRM · AUTOMATION · GROWTH INFRASTRUCTURE",
    "hero.title": "Intelligent systems.<br><span>Built beautifully.</span>",
    "hero.copy": "LJ Studio designs CRM and automation systems that simplify complex processes, empower teams and make growth measurable.",
    "hero.primary": "Start a conversation",
    "hero.secondary": "View Packages",
    "metrics.clarity": "Clarity before complexity",
    "metrics.automation": "Automation with purpose",
    "metrics.measurable": "Measurable systems",
    "services.title": "Infrastructure for smarter growth.",
    "services.intro": "Strategy, technology and implementation in one place — clearly structured and tailored to your business.",
    "service.crm.copy": "Clean data structures, lifecycle stages, pipelines and processes your sales and marketing teams can actually use.",
    "service.automation.copy": "Thoughtful workflows, lead nurturing and follow-up processes that save time without losing the human touch.",
    "service.reporting.copy": "Dashboards and analysis that turn data into clear decisions — without reporting overload.",
    "service.integration.copy": "Connected systems instead of isolated tools: HubSpot, forms, ads, calendars, shops and third-party apps.",
    "framework.title": "Intelligence before action.",
    "framework.intro": "A clear process that connects strategy, technology and long-term usability.",
    "step.discover": "Understand goals, processes, data and bottlenecks.",
    "step.architect": "Design the right CRM and automation architecture.",
    "step.build": "Configure, connect and document systems properly.",
    "step.optimize": "Analyze data, reduce friction and improve conversion.",
    "step.scale": "Evolve processes sustainably without unnecessary complexity.",
    "about.title": "A boutique studio for intelligent business systems.",
    "about.copy1": "LJ Studio stands for clarity, precision and quiet expertise. No loud promises, unnecessary tools or complexity for complexity’s sake.",
    "about.copy2": "Instead, we create systems that are understandable, maintainable and built for meaningful growth.",
    "value.clarity": "Clarity",
    "value.clarity.copy": "Complexity is structured, not hidden.",
    "value.precision": "Precision",
    "value.precision.copy": "Every workflow and metric has a purpose.",
    "value.trust": "Trust",
    "value.trust.copy": "Transparent processes and dependable collaboration.",
    "value.impact": "Impact",
    "value.impact.copy": "Less manual work. More measurable progress.",
    "contact.title": "Your systems should work for you.",
    "contact.copy": "Let’s identify the processes you can simplify, automate and improve measurably.",
    "contact.note": "The email address is a placeholder and can be changed directly in the HTML."
  },
  de: {
    "packages.hoursExpiry": "Nicht genutzte Stunden verfallen am Ende des jeweiligen Abrechnungsmonats und werden nicht übertragen.",
    "packages.timeline.premium": "6–8 Wochen",
    "packages.timeline.business": "4–6 Wochen",
    "packages.timeline.growth": "2–4 Wochen",
    "packages.timeline.starter": "1–2 Wochen",
    "nav.packages": "Pakete",
    "pricing.eyebrow": "PROJEKTPAKETE",
    "pricing.title": "Für dein Business entwickelt. Niemals andersherum.",
    "pricing.intro": "Transparente Startpunkte für ein individuelles Projekt. Jedes Paket kann an deine Ziele, dein Setup, dein Team und deinen Zeitplan angepasst werden.",
    "packages.projectTitle": "Einmalige Setups",
    "packages.retainerTitle": "Laufende Optimierung",
    "packages.includes": "Enthalten",
    "packages.effort": "Typischer Zeitraum",
    "packages.tailored": "Jedes Projekt wird individuell auf dein Business zugeschnitten.",
    "packages.retainerTailored": "Der Umfang kann mit deinen Anforderungen mitwachsen.",
    "packages.cta": "Let’s talk",
    "packages.featured": "BELIEBTESTE OPTION",
    "packages.starter.copy": "Perfekt für Einzelunternehmer oder kleine Unternehmen, die HubSpot von Anfang an sauber aufsetzen möchten.",
    "packages.starter.1": "HubSpot Account Einrichtung",
    "packages.starter.2": "Kontakte importieren",
    "packages.starter.3": "CRM strukturieren",
    "packages.starter.4": "1 Sales Pipeline",
    "packages.starter.5": "Lifecycle Stages",
    "packages.starter.6": "Grundeinstellungen",
    "packages.starter.7": "30 Minuten Zoom-Einweisung",
    "packages.growth.copy": "Ideal für wachsende Unternehmen, die ein skalierbares CRM mit ersten Automationen und aussagekräftigem Reporting benötigen.",
    "packages.growth.1": "Kompletter CRM-Aufbau",
    "packages.growth.2": "Sales Pipeline",
    "packages.growth.3": "Lifecycle Stages",
    "packages.growth.4": "Lead Scoring (Basis)",
    "packages.growth.5": "3 Workflows",
    "packages.growth.6": "2 E-Mail-Automationen",
    "packages.growth.7": "Dashboard und Reporting",
    "packages.growth.8": "CRM-Aufräumen",
    "packages.growth.9": "1 Stunde Schulung",
    "packages.business.copy": "Für Unternehmen mit mehreren Mitarbeitern, die Vertriebs- und Marketingprozesse professionell strukturieren möchten.",
    "packages.business.1": "CRM Setup",
    "packages.business.2": "Mehrere Pipelines",
    "packages.business.3": "Lead Scoring",
    "packages.business.4": "6–8 Automationen",
    "packages.business.5": "Dashboards und Reporting",
    "packages.business.6": "E-Mail-Sequenzen",
    "packages.business.7": "Integrationen",
    "packages.business.8": "CRM Cleanup und Best Practices",
    "packages.business.9": "Dokumentation",
    "packages.premium.copy": "Für Unternehmen, die Marketing, Vertrieb und Automatisierung in HubSpot professionell aufstellen möchten.",
    "packages.premium.1": "Kompletter HubSpot Aufbau",
    "packages.premium.2": "Marketing Automation",
    "packages.premium.3": "Sales Automation",
    "packages.premium.4": "Dashboards und Reporting",
    "packages.premium.5": "Lead Scoring",
    "packages.premium.6": "CRM Cleanup",
    "packages.premium.7": "Integrationen",
    "packages.premium.8": "E-Mail Marketing",
    "packages.premium.9": "Conversion Optimierung",
    "packages.premium.10": "Mitarbeiterschulung",
    "packages.care.copy": "Leichte laufende Unterstützung für kleine Änderungen und regelmäßige CRM-Pflege.",
    "packages.care.1": "Kleine Änderungen",
    "packages.care.2": "CRM Pflege",
    "packages.care.3": "Bis zu 2 Stunden Support",
    "packages.rgrowth.copy": "Für Unternehmen, die HubSpot kontinuierlich verbessern möchten, ohne intern eine eigene Operations-Rolle aufzubauen.",
    "packages.rgrowth.1": "Workflow-Anpassungen",
    "packages.rgrowth.2": "Newsletter",
    "packages.rgrowth.3": "Reporting",
    "packages.rgrowth.4": "Dashboard Updates",
    "packages.rgrowth.5": "Bis zu 5 Stunden",
    "packages.rbusiness.copy": "Regelmäßige strategische und operative Betreuung für wachsende Teams.",
    "packages.rbusiness.1": "CRM Betreuung",
    "packages.rbusiness.2": "Automationen",
    "packages.rbusiness.3": "Reporting",
    "packages.rbusiness.4": "Meetings",
    "packages.rbusiness.5": "Optimierungen",
    "packages.rbusiness.6": "Bis zu 8 Stunden",
    "packages.rpremium.copy": "Prioritäts-Support und strategische Systementwicklung für ambitionierte Teams.",
    "packages.rpremium.1": "Prioritäts-Support",
    "packages.rpremium.2": "Strategie",
    "packages.rpremium.3": "Automationen",
    "packages.rpremium.4": "Dashboards",
    "packages.rpremium.5": "Kampagnen",
    "packages.rpremium.6": "Bis zu 12 Stunden",
    "pricing.currencyNote": "Die EUR-Werte sind gerundete Beispiele zur Orientierung.",
    "pricing.custom.eyebrow": "AUF DICH ZUGESCHNITTEN",
    "pricing.custom.title": "Kein System sollte exakt wie das nächste aufgebaut sein.",
    "pricing.custom.copy": "Die Beispiele oben sind Startpunkte und keine starren Pakete. Umfang, Leistungen und Investment werden an deine Ziele, dein bestehendes Setup, dein Team und deinen Zeitplan angepasst.",
    "pricing.custom.cta": "Custom scope besprechen",
    "nav.portfolio": "Portfolio",
    "portfolio.title": "Systeme, die auf echte Business-Ergebnisse ausgerichtet sind.",
    "portfolio.intro": "Eine Auswahl der Systeme, die LJ Studio planen, aufbauen und optimieren kann — mit transparenten Preisrahmen zur ersten Orientierung.",
    "portfolio.case1.label": "CRM FOUNDATION",
    "portfolio.case1.title": "HubSpot-Architektur für ein wachsendes Dienstleistungsunternehmen.",
    "portfolio.case1.copy": "Ein strukturiertes CRM-Setup mit Lifecycle-Stages, sauberen Eigenschaften, Sales-Pipelines und Reporting-Grundlage.",
    "portfolio.case1.outcome1": "Klare Lead-Zuständigkeit",
    "portfolio.case1.outcome2": "Verlässliche Pipeline-Daten",
    "portfolio.case1.outcome3": "Skalierbare Prozesse",
    "portfolio.case2.label": "AUTOMATION SYSTEM",
    "portfolio.case2.title": "Lead Nurturing, das persönlich bleibt.",
    "portfolio.case2.copy": "Segmentierte Workflows, Follow-ups und interne Benachrichtigungen, die manuelle Arbeit reduzieren, ohne an Relevanz zu verlieren.",
    "portfolio.case2.outcome1": "Schnellere Reaktionszeiten",
    "portfolio.case2.outcome2": "Konsequente Nachverfolgung",
    "portfolio.case2.outcome3": "Weniger Administration",
    "portfolio.case3.label": "REPORTING LAYER",
    "portfolio.case3.title": "Entscheidungsreifes Reporting über den gesamten Funnel.",
    "portfolio.case3.copy": "Eine fokussierte Dashboard-Ebene, die Marketingaktivitäten, Vertriebsleistung und Conversion-Daten verbindet.",
    "portfolio.case3.outcome1": "Gemeinsame KPIs",
    "portfolio.case3.outcome2": "Sauberere Attribution",
    "portfolio.case3.outcome3": "Verwertbare Erkenntnisse",
    "pricing.from": "ab",
    "pricing.month": "/ Monat",
    "pricing.popular": "BELIEBTESTE OPTION",
    "pricing.audit.title": "CRM- & Automation-Audit",
    "pricing.audit.copy": "Eine fokussierte Analyse deines Setups, deiner Prozesse, Datenqualität und der größten Optimierungspotenziale.",
    "pricing.audit.item1": "System- und Prozessanalyse",
    "pricing.audit.item2": "Priorisierte Roadmap",
    "pricing.audit.item3": "90-minütige Strategiesession",
    "pricing.build.title": "HubSpot Foundation Build",
    "pricing.build.copy": "Eine saubere, skalierbare HubSpot-Grundlage, ausgerichtet auf Customer Journey und Geschäftsmodell.",
    "pricing.build.item1": "CRM-Architektur und Setup",
    "pricing.build.item2": "Pipeline- und Lifecycle-Design",
    "pricing.build.item3": "Kern-Automationen und Reporting",
    "pricing.retainer.title": "Optimization Partnership",
    "pricing.retainer.copy": "Fortlaufende Unterstützung für Automatisierung, Reporting, Optimierung und strategische Systementwicklung.",
    "pricing.retainer.item1": "Monatliche Optimierungs-Roadmap",
    "pricing.retainer.item2": "Workflow- und Reporting-Verbesserungen",
    "pricing.retainer.item3": "Strategische Unterstützung und Dokumentation",
    "pricing.note": "Die Preisbeispiele sind unverbindlich und verstehen sich ohne Software-Abos, Media-Budget und umfangreiche Individualentwicklung.",
    "contact.copy": "Erzähl mir, woran du arbeitest, was sich gerade unnötig kompliziert anfühlt und wo du hinwillst. Du erhältst eine persönliche Antwort — keine automatisierte Sales-Sequenz.",
    "contact.emailLabel": "E-Mail",
    "contact.responseLabel": "Übliche Antwortzeit",
    "contact.responseValue": "Innerhalb von 1–2 Werktagen",
    "form.name": "Name",
    "form.namePlaceholder": "Dein Name",
    "form.email": "E-Mail",
    "form.emailPlaceholder": "du@unternehmen.de",
    "form.company": "Unternehmen",
    "form.companyPlaceholder": "Unternehmen oder Projektname",
    "form.project": "Wobei kann ich helfen?",
    "form.option.crm": "CRM-Architektur",
    "form.option.automation": "Automatisierung",
    "form.option.reporting": "Reporting",
    "form.option.optimization": "HubSpot-Optimierung",
    "form.option.other": "Etwas anderes",
    "form.budget": "Geschätztes Budget",
    "form.budget.unsure": "Noch nicht sicher",
    "form.message": "Erzähl mir von deinem Projekt",
    "form.messagePlaceholder": "Was möchtest du verbessern und was steht aktuell im Weg?",
    "form.consent": "Ich stimme zu, dass LJ Studio meine Angaben zur Beantwortung dieser Anfrage verwenden darf.",
    "form.submit": "Send message",
    "form.note": "Das Formular ist für Formspree vorbereitet. Bis ein Endpoint hinterlegt ist, öffnet es dein E-Mail-Programm mit der vorausgefüllten Nachricht.",
    "form.invalid": "Bitte fülle die Pflichtfelder aus und gib eine gültige E-Mail-Adresse ein.",
    "form.sending": "Nachricht wird gesendet…",
    "form.success": "Vielen Dank — deine Nachricht wurde gesendet.",
    "form.error": "Die Nachricht konnte nicht versendet werden. Stattdessen wird dein E-Mail-Programm geöffnet.",
    "meta.title": "LJ Studio — Intelligente Systeme",
    "meta.description": "LJ Studio entwickelt elegante CRM-, Automatisierungs- und Reporting-Systeme für Unternehmen, die mit Klarheit wachsen wollen.",
    "nav.services": "Leistungen",
    "nav.method": "Methode",
    "nav.studio": "Studio",
    "nav.call": "Let’s talk",
    "nav.menu": "Menü öffnen",
    "hero.eyebrow": "CRM · AUTOMATISIERUNG · WACHSTUMSINFRASTRUKTUR",
    "hero.title": "Intelligente Systeme.<br><span>Stilvoll entwickelt.</span>",
    "hero.copy": "LJ Studio entwickelt CRM- und Automatisierungssysteme, die komplexe Prozesse vereinfachen, Teams entlasten und Wachstum messbar machen.",
    "hero.primary": "Start a conversation",
    "hero.secondary": "Pakete ansehen",
    "metrics.clarity": "Klarheit vor Komplexität",
    "metrics.automation": "Automatisierung mit Zweck",
    "metrics.measurable": "Messbare Systeme",
    "services.title": "Infrastruktur für smarteres Wachstum.",
    "services.intro": "Strategie, Technologie und Umsetzung aus einer Hand — klar strukturiert und auf dein Unternehmen zugeschnitten.",
    "service.crm.copy": "Saubere Datenstrukturen, Lifecycle-Stages, Pipelines und Prozesse, die Vertrieb und Marketing wirklich nutzen können.",
    "service.automation.copy": "Durchdachte Workflows, Lead Nurturing und Follow-up-Prozesse, die Zeit sparen, ohne unpersönlich zu wirken.",
    "service.reporting.copy": "Dashboards und Analysen, die aus Daten klare Entscheidungen machen — ohne Reporting-Wüste.",
    "service.integration.copy": "Verbundene Systeme statt isolierter Tools: HubSpot, Formulare, Ads, Kalender, Shops und Drittanbieter-Apps.",
    "framework.title": "Intelligenz vor Aktion.",
    "framework.intro": "Ein klarer Prozess, der Strategie, Technik und langfristige Nutzbarkeit miteinander verbindet.",
    "step.discover": "Ziele, Prozesse, Daten und Engpässe verstehen.",
    "step.architect": "Die passende CRM- und Automatisierungsarchitektur entwickeln.",
    "step.build": "Systeme sauber konfigurieren, verbinden und dokumentieren.",
    "step.optimize": "Daten analysieren, Reibung reduzieren und Conversion verbessern.",
    "step.scale": "Prozesse nachhaltig weiterentwickeln, ohne unnötige Komplexität.",
    "about.title": "Ein Boutique-Studio für intelligente Business-Systeme.",
    "about.copy1": "LJ Studio steht für Klarheit, Präzision und ruhige Kompetenz. Keine lauten Versprechen, keine unnötigen Tools und keine komplizierten Systeme um ihrer selbst willen.",
    "about.copy2": "Stattdessen entstehen Lösungen, die verständlich, wartbar und auf echtes Wachstum ausgerichtet sind.",
    "value.clarity": "Klarheit",
    "value.clarity.copy": "Komplexität wird strukturiert, nicht versteckt.",
    "value.precision": "Präzision",
    "value.precision.copy": "Jeder Workflow und jede Kennzahl hat einen Zweck.",
    "value.trust": "Vertrauen",
    "value.trust.copy": "Nachvollziehbare Prozesse und verlässliche Zusammenarbeit.",
    "value.impact": "Wirkung",
    "value.impact.copy": "Weniger manuelle Arbeit. Mehr messbarer Fortschritt.",
    "contact.title": "Dein System sollte für dich arbeiten.",
    "contact.copy": "Lass uns herausfinden, welche Prozesse du vereinfachen, automatisieren und messbar verbessern kannst.",
    "contact.note": "Die E-Mail-Adresse ist ein Platzhalter und kann direkt im HTML geändert werden."
  }
};

function applyLanguage(language, animate = true) {
  const selected = translations[language] ? language : "en";

  if (animate) document.body.classList.add("language-changing");

  window.setTimeout(() => {
    document.documentElement.lang = selected;
    document.title = translations[selected]["meta.title"];
    document.getElementById("meta-description")?.setAttribute(
      "content",
      translations[selected]["meta.description"]
    );

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translations[selected][element.dataset.i18n];
      if (value) element.textContent = value;
    });


    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = translations[selected][element.dataset.i18nPlaceholder];
      if (value) element.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = translations[selected][element.dataset.i18nHtml];
      if (value) element.innerHTML = value;
    });

    document.querySelectorAll(".language-button").forEach((button) => {
      const active = button.dataset.language === selected;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    localStorage.setItem("lj-studio-language", selected);
    document.body.classList.remove("language-changing");
  }, animate ? 130 : 0);
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

// English is the default for first-time visitors.
// Returning visitors get their last selected language.
const storedLanguage = localStorage.getItem("lj-studio-language");
applyLanguage(storedLanguage || "en", false);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();


const heroSignatureStar = document.querySelector(".hero-signature-star");
if (heroSignatureStar && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 12;
    const y = (event.clientY / window.innerHeight - 0.5) * 12;
    heroSignatureStar.style.setProperty("--star-x", `${x}px`);
    heroSignatureStar.style.setProperty("--star-y", `${y}px`);
  }, { passive: true });
}


const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function currentLanguage() {
  return localStorage.getItem("lj-studio-language") || "en";
}

function openEmailFallback(formData) {
  const subject = encodeURIComponent(`LJ Studio inquiry — ${formData.get("company") || formData.get("name")}`);
  const body = encodeURIComponent(
`Name: ${formData.get("name")}
Email: ${formData.get("email")}
Company: ${formData.get("company") || "—"}
Project: ${formData.get("project")}
Budget: ${formData.get("budget")}

Message:
${formData.get("message")}`
  );
  window.location.href = `mailto:hello@ljstudio.com?subject=${subject}&body=${body}`;
}

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const lang = currentLanguage();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    formStatus.textContent = translations[lang]["form.invalid"];
    formStatus.className = "form-status is-error";
    return;
  }

  const formData = new FormData(contactForm);
  const endpoint = contactForm.dataset.formspreeEndpoint?.trim();

  if (!endpoint) {
    formStatus.textContent = translations[lang]["form.error"];
    formStatus.className = "form-status";
    openEmailFallback(formData);
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  formStatus.textContent = translations[lang]["form.sending"];
  formStatus.className = "form-status";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (!response.ok) throw new Error("Form submission failed");

    contactForm.reset();
    formStatus.textContent = translations[lang]["form.success"];
    formStatus.className = "form-status is-success";
  } catch (error) {
    formStatus.textContent = translations[lang]["form.error"];
    formStatus.className = "form-status is-error";
    openEmailFallback(formData);
  } finally {
    submitButton.disabled = false;
  }
});


const currencyButtons = document.querySelectorAll(".currency-button");
const priceValues = document.querySelectorAll(".price-value");

function formatPrice(value, currency) {
  return new Intl.NumberFormat(currency === "EUR" ? "de-DE" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

function setCurrency(currency) {
  priceValues.forEach((element) => {
    const value = Number(currency === "EUR" ? element.dataset.eur : element.dataset.usd);
    element.textContent = formatPrice(value, currency);
  });

  currencyButtons.forEach((button) => {
    const active = button.dataset.currency === currency;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("lj-studio-currency", currency);
}

currencyButtons.forEach((button) => {
  button.addEventListener("click", () => setCurrency(button.dataset.currency));
});

setCurrency(localStorage.getItem("lj-studio-currency") || "USD");

/* LJ package carousel — V11 exact geometry */
document.querySelectorAll(".package-carousel").forEach((carousel) => {
  const viewport = carousel.querySelector(".carousel-viewport");
  const track = carousel.querySelector(".carousel-track");
  const cards = [...carousel.querySelectorAll(".package-card")];
  const previousButton = carousel.querySelector(".carousel-prev");
  const nextButton = carousel.querySelector(".carousel-next");
  const progress = carousel.querySelector(".carousel-progress span");
  const star = carousel.querySelector(".carousel-progress i");
  let activeIndex = window.innerWidth < 720 ? 0 : Math.min(1, cards.length - 1);
  let touchStartX = 0;
  let resizeFrame = null;

  const clampIndex = (index) => (index + cards.length) % cards.length;

  function visibleSlots() {
    if (window.innerWidth < 720) return 1;
    if (window.innerWidth < 1040) return 2;
    return 3;
  }

  function updateCarousel() {
    if (!viewport || !track || !cards.length) return;

    const count = visibleSlots();
    const viewportWidth = viewport.getBoundingClientRect().width;
    const cardWidth = viewportWidth / count;

    track.style.setProperty("--card-width", `${cardWidth}px`);

    // Read the actual rendered position. On mobile this is always an exact
    // whole-card offset; on larger screens the active card is centered.
    const activeCard = cards[activeIndex];
    const centerOffset = count === 1
      ? 0
      : (viewportWidth - activeCard.getBoundingClientRect().width) / 2;
    const translate = centerOffset - activeCard.offsetLeft;

    track.style.transform = `translate3d(${Math.round(translate)}px, 0, 0)`;

    cards.forEach((card, index) => {
      const distance = Math.abs(index - activeIndex);
      card.classList.toggle("is-active", index === activeIndex);
      card.classList.toggle("is-near", distance === 1);
      card.setAttribute("aria-hidden", count === 1 && index !== activeIndex ? "true" : "false");
      card.tabIndex = count === 1 && index !== activeIndex ? -1 : 0;
    });

    const progressValue = cards.length > 1 ? activeIndex / (cards.length - 1) : 0;
    if (progress) progress.style.transform = `scaleX(${Math.max(.08, progressValue)})`;
    if (star) star.style.left = `calc(${progressValue * 100}% - 7px)`;
  }

  function move(direction) {
    activeIndex = clampIndex(activeIndex + direction);
    updateCarousel();
  }

  previousButton?.addEventListener("click", () => move(-1));
  nextButton?.addEventListener("click", () => move(1));

  cards.forEach((card, index) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      activeIndex = index;
      updateCarousel();
    });
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  });

  carousel.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  carousel.addEventListener("touchend", (event) => {
    const difference = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(difference) > 42) move(difference > 0 ? -1 : 1);
  }, { passive: true });

  const scheduleUpdate = () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(updateCarousel);
  };

  window.addEventListener("resize", scheduleUpdate, { passive: true });
  window.addEventListener("orientationchange", scheduleUpdate, { passive: true });

  if ("ResizeObserver" in window) {
    new ResizeObserver(scheduleUpdate).observe(viewport);
  }

  requestAnimationFrame(updateCarousel);
});
/* End LJ package carousel */


// Premium back-to-top interaction
document.addEventListener("DOMContentLoaded",()=>{
const backToTopButton=document.querySelector(".back-to-top");
if(backToTopButton){
  let hideTimer=null,animationFrame=null;
  const showAfter=760;
  const updateVisibility=()=>{
    clearTimeout(hideTimer);
    if(window.scrollY>showAfter){backToTopButton.classList.add("is-visible");return;}
    hideTimer=setTimeout(()=>backToTopButton.classList.remove("is-visible"),250);
  };
  const easeInOutCubic=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;
  const smoothScrollToTop=()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){window.scrollTo(0,0);return;}
    if(animationFrame)cancelAnimationFrame(animationFrame);
    const startY=window.scrollY;
    const duration=Math.min(1150,Math.max(720,startY*.42));
    const startTime=performance.now();
    const animate=now=>{
      const progress=Math.min((now-startTime)/duration,1);
      window.scrollTo(0,Math.round(startY*(1-easeInOutCubic(progress))));
      if(progress<1)animationFrame=requestAnimationFrame(animate);
      else{
        animationFrame=null;
        hideTimer=setTimeout(()=>backToTopButton.classList.remove("is-visible"),250);
      }
    };
    animationFrame=requestAnimationFrame(animate);
  };
  updateVisibility();
  window.addEventListener("scroll",updateVisibility,{passive:true});
  backToTopButton.addEventListener("click",smoothScrollToTop);
}
});
// End premium back-to-top interaction


/* =========================================================
   V10 — Premium polish interactions
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Active navigation state with a smoothly gliding indicator.
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".main-nav");
  const indicator = nav?.querySelector(".nav-active-indicator");
  const navLinks = [...(nav?.querySelectorAll('a[href^="#"]:not(.nav-cta)') || [])];
  const observedSections = navLinks
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const positionIndicator = (link) => {
    if (!indicator || !link || window.innerWidth <= 900) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    indicator.style.left = `${linkRect.left - navRect.left}px`;
    indicator.style.width = `${linkRect.width}px`;
    indicator.classList.add("is-visible");
  };

  const activateLink = (sectionId) => {
    const activeLink = navLinks.find(link => link.getAttribute("href") === `#${sectionId}`);
    navLinks.forEach(link => {
      const active = link === activeLink;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    positionIndicator(activeLink);
  };

  if (observedSections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) activateLink(visible.target.id);
    }, {
      rootMargin: "-22% 0px -58% 0px",
      threshold: [0, .12, .28, .5]
    });

    observedSections.forEach(section => sectionObserver.observe(section));
    window.addEventListener("resize", () => {
      const active = navLinks.find(link => link.classList.contains("is-active"));
      positionIndicator(active);
    }, { passive: true });
  }

  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => positionIndicator(link));
    link.addEventListener("mouseleave", () => {
      positionIndicator(navLinks.find(item => item.classList.contains("is-active")));
    });
  });

  // Floating-label state.
  document.querySelectorAll(".form-field input, .form-field textarea, .form-field select").forEach(control => {
    const field = control.closest(".form-field");
    const syncField = () => field?.classList.toggle("has-value", Boolean(control.value.trim?.() || control.value));
    control.addEventListener("input", syncField);
    control.addEventListener("change", syncField);
    syncField();
  });

  // Count in small signature metrics when they enter the viewport.
  document.querySelectorAll("[data-count-to]").forEach(element => {
    const target = Number(element.dataset.countTo);
    const pad = Number(element.dataset.countPad || 0);

    const showFinal = () => {
      element.textContent = String(target).padStart(pad, "0");
      element.classList.add("count-complete");
    };

    if (reduceMotion.matches) {
      showFinal();
      return;
    }

    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();

      const start = performance.now();
      const duration = 850;
      const animate = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.max(0, Math.round(target * eased));
        element.textContent = String(current).padStart(pad, "0");
        if (progress < 1) requestAnimationFrame(animate);
        else showFinal();
      };
      requestAnimationFrame(animate);
    }, { threshold: .8 });

    observer.observe(element);
  });

  // Form success micro-interaction.
  const contactForm = document.getElementById("contact-form");
  const successPanel = document.getElementById("form-success-panel");
  const formStatus = document.getElementById("form-status");

  if (contactForm && successPanel && formStatus) {
    const successObserver = new MutationObserver(() => {
      const isSuccess = formStatus.classList.contains("is-success");
      successPanel.classList.toggle("is-visible", isSuccess);
      successPanel.setAttribute("aria-hidden", String(!isSuccess));
    });
    successObserver.observe(formStatus, { attributes: true, childList: true });

    contactForm.addEventListener("input", () => {
      if (successPanel.classList.contains("is-visible")) {
        successPanel.classList.remove("is-visible");
        successPanel.setAttribute("aria-hidden", "true");
      }
    });
  }

  // Enhance carousel live announcements and content timing.
  document.querySelectorAll(".package-carousel").forEach(carousel => {
    const live = carousel.querySelector(".carousel-live");
    const cards = [...carousel.querySelectorAll(".package-card")];
    if (!live || !cards.length) return;

    const announce = () => {
      const active = carousel.querySelector(".package-card.is-active");
      const index = Math.max(0, cards.indexOf(active));
      const title = active?.querySelector("h3")?.textContent?.trim() || "";
      const lang = typeof currentLanguage === "function" ? currentLanguage() : "en";
      const template = translations?.[lang]?.["carousel.slide"] || "Package {current} of {total}: {title}";
      live.textContent = template
        .replace("{current}", String(index + 1))
        .replace("{total}", String(cards.length))
        .replace("{title}", title);
    };

    const observer = new MutationObserver(announce);
    cards.forEach(card => observer.observe(card, { attributes: true, attributeFilter: ["class"] }));
    requestAnimationFrame(announce);
  });
});




/* V11 — Optional offline shell */
if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {
      // The website remains fully functional without offline support.
    });
  });
}
