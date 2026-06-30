/* ============================================================================
   main.js — Portfolio Yeison Delgado. IIFE clásico (sin modules).
   Cada init envuelto en safe(). El contenido vive en el HTML; el JS enriquece.
   ============================================================================ */
(function () {
  "use strict";
  var B = window.__BRAND__ || {};

  function safe(fn, name) { try { fn(); } catch (e) { console.warn("[" + name + "]", e); } }
  var hasGSAP = !!(window.gsap && window.ScrollTrigger);
  if (hasGSAP) { try { gsap.registerPlugin(ScrollTrigger); } catch (e) {} }

  /* ---------- Splash (doble red de seguridad) ---------- */
  function initSplash() {
    var splash = document.querySelector("[data-splash]");
    if (!splash) return;
    var hide = function () { splash.classList.add("is-out"); };
    if (document.readyState === "complete") setTimeout(hide, 600);
    else window.addEventListener("load", function () { setTimeout(hide, 400); });
    setTimeout(hide, 4000);
  }

  /* ---------- Nav solid on scroll ---------- */
  function initNav() {
    var nav = document.querySelector("[data-nav]");
    if (!nav) return;
    var on = function () { nav.classList.toggle("is-scrolled", window.scrollY > 80); };
    on();
    window.addEventListener("scroll", on, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  function initMobileMenu() {
    var burger = document.querySelector("[data-burger]");
    var menu = document.querySelector("[data-nav-mobile]");
    if (!burger || !menu) return;
    var toggle = function (open) {
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      menu.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", function () {
      toggle(burger.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) toggle(false); });
  }


  /* ---------- Custom cursor ---------- */
  function initCursor() {
    var root = document.querySelector("[data-cursor-root]");
    if (!root || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");
    var ring = root.querySelector(".cursor-ring"), dot = root.querySelector(".cursor-dot");
    var tx = 0, ty = 0, rx = 0, ry = 0, first = false;
    window.addEventListener("mousemove", function (e) {
      tx = e.clientX; ty = e.clientY;
      if (dot) dot.style.transform = "translate3d(" + tx + "px," + ty + "px,0)";
      if (!first) { first = true; rx = tx; ry = ty; if (ring) ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0)"; root.classList.add("is-ready"); }
    }, { passive: true });
    (function tick() { rx += (tx - rx) * .18; ry += (ty - ry) * .18; if (ring) ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0)"; requestAnimationFrame(tick); })();
    var H = "[data-cursor], a[href], button";
    document.addEventListener("mouseover", function (e) { if (e.target.closest(H)) root.classList.add("is-interactive"); });
    document.addEventListener("mouseout", function (e) { if (e.target.closest(H)) root.classList.remove("is-interactive"); });
  }

  /* ---------- Mouse-reactive gradient (firma del arquetipo 05) ---------- */
  function initGradient() {
    var mx = 50, my = 50, tx = 50, ty = 50;
    document.addEventListener("mousemove", function (e) {
      tx = (e.clientX / window.innerWidth) * 100;
      ty = (e.clientY / window.innerHeight) * 100;
    }, { passive: true });
    (function frame() {
      mx += (tx - mx) * .06; my += (ty - my) * .06;
      document.documentElement.style.setProperty("--mx", mx + "%");
      document.documentElement.style.setProperty("--my", my + "%");
      requestAnimationFrame(frame);
    })();
  }

  /* ---------- Reveals (IO threshold bajo + red de seguridad 6s) ---------- */
  function initReveals() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-revealed"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-revealed"); io.unobserve(e.target); } });
    }, { threshold: 0.04, rootMargin: "0px 0px -3% 0px" });
    els.forEach(function (el) { io.observe(el); });
    setTimeout(function () {
      document.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-revealed");
      });
    }, 6000);
  }


  /* ---------- Split text (chars/words) con GSAP ---------- */
  function escHTML(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function splitNode(el, mode) {
    el.setAttribute("aria-label", el.textContent.trim().replace(/\s+/g, " "));
    var cls = mode === "chars" ? "split-char" : "split-word";
    function wrap(text) {
      if (mode === "chars") {
        return Array.prototype.map.call(text, function (ch) { return ch === " " ? " " : '<span class="' + cls + '" aria-hidden="true">' + escHTML(ch) + "</span>"; }).join("");
      }
      return text.split(/(\s+)/).map(function (w) { return /^\s+$/.test(w) ? w : '<span class="' + cls + '" aria-hidden="true">' + escHTML(w) + "</span>"; }).join("");
    }
    var html = Array.prototype.map.call(el.childNodes, function (node) {
      if (node.nodeType === 3) return wrap(node.textContent);
      if (node.nodeName === "BR") return "<br>";
      if (node.nodeType === 1) { var t = node.tagName.toLowerCase(); return "<" + t + ">" + wrap(node.textContent) + "</" + t + ">"; }
      return "";
    }).join("");
    el.innerHTML = html;
    return el.querySelectorAll("." + cls);
  }
  function initSplitText() {
    if (!hasGSAP) return;
    document.querySelectorAll("[data-split]").forEach(function (el) {
      el.classList.remove("reveal");
      var mode = el.dataset.split;
      var parts = splitNode(el, mode);
      gsap.set(parts, { yPercent: 110, opacity: 0 });
      gsap.to(parts, {
        yPercent: 0, opacity: 1,
        duration: mode === "chars" ? 0.7 : 0.9,
        stagger: mode === "chars" ? 0.02 : 0.045,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true }
      });
    });
  }

  /* ---------- Marquee infinito ---------- */
  function initMarquee() {
    if (!window.gsap) return;
    document.querySelectorAll("[data-marquee]").forEach(function (track) {
      var clone = track.cloneNode(true); clone.removeAttribute("data-marquee");
      track.parentNode.appendChild(clone);
      var distance = track.scrollWidth;
      gsap.to([track, clone], {
        x: -distance, duration: distance / 70, ease: "none", repeat: -1,
        modifiers: { x: gsap.utils.unitize(function (x) { return parseFloat(x) % distance; }) }
      });
    });
  }


  /* ---------- Proyectos expandibles (acordeón) ---------- */
  function initProjects() {
    document.querySelectorAll("[data-project]").forEach(function (proj) {
      var btn = proj.querySelector("[data-project-toggle]");
      var body = proj.querySelector("[data-project-body]");
      if (!btn || !body) return;
      btn.addEventListener("click", function () {
        var open = proj.classList.contains("is-open");
        if (open) { proj.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); body.style.maxHeight = "0px"; }
        else { proj.classList.add("is-open"); btn.setAttribute("aria-expanded", "true"); body.style.maxHeight = body.scrollHeight + "px"; }
      });
    });
    window.addEventListener("resize", function () {
      document.querySelectorAll("[data-project].is-open [data-project-body]").forEach(function (b) { b.style.maxHeight = b.scrollHeight + "px"; });
    });
  }

  /* ---------- Count-up ---------- */
  function initCountUp() {
    document.querySelectorAll("[data-count-to]").forEach(function (el) {
      var target = parseFloat(el.dataset.countTo);
      var decimals = (el.dataset.countTo.split(".")[1] || "").length;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          if (window.gsap) { var o = { v: 0 }; gsap.to(o, { v: target, duration: 1.5, ease: "power2.out", onUpdate: function () { el.textContent = o.v.toFixed(decimals); } }); }
          else el.textContent = target.toFixed(decimals);
        });
      }, { threshold: 0.5 });
      io.observe(el);
    });
  }

  /* ---------- Scroll progress ---------- */
  function initScrollProgress() {
    var bar = document.querySelector("[data-scroll-progress]");
    if (!bar) return;
    var raf = null;
    function up() { var max = document.documentElement.scrollHeight - window.innerHeight; bar.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")"; raf = null; }
    window.addEventListener("scroll", function () { if (!raf) raf = requestAnimationFrame(up); }, { passive: true });
    up();
  }

  /* ---------- Smooth anchors (nativo) ---------- */
  function initAnchors() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]'); if (!a) return;
      var id = a.getAttribute("href"); if (!id || id === "#") return;
      var el = document.querySelector(id); if (!el) return;
      e.preventDefault();
      var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: reduce ? "auto" : "smooth" });
    });
  }


  /* ---------- Idioma ES/EN ---------- */
  function initLang() {
    var toggle = document.querySelector("[data-lang-toggle]");
    var nodes = document.querySelectorAll("[data-en]");
    // Guardar el texto ES original
    nodes.forEach(function (el) { if (!el.dataset.es) el.dataset.es = el.textContent; });
    var lang = "es";
    function apply(l) {
      lang = l;
      document.documentElement.lang = l;
      nodes.forEach(function (el) { el.textContent = l === "en" ? el.dataset.en : el.dataset.es; });
      if (toggle) {
        toggle.querySelector(".lang-es").classList.toggle("is-active", l === "es");
        toggle.querySelector(".lang-en").classList.toggle("is-active", l === "en");
      }
      if (window.ScrollTrigger) setTimeout(function () { ScrollTrigger.refresh(); }, 60);
    }
    if (toggle) toggle.addEventListener("click", function () { apply(lang === "es" ? "en" : "es"); });
  }

  /* ---------- Wire de contacto / enlaces / CV desde manifest ---------- */
  function initLinks() {
    var wa = "https://wa.me/" + (B.whatsapp || "") + "?text=" + encodeURIComponent("Hola Yeison, vi tu portafolio y me gustaría hablar contigo.");
    document.querySelectorAll("[data-whatsapp]").forEach(function (a) { a.href = wa; a.target = "_blank"; a.rel = "noopener"; });
    document.querySelectorAll("[data-linkedin]").forEach(function (a) { if (B.linkedin) { a.href = B.linkedin; a.target = "_blank"; a.rel = "noopener"; } });
    document.querySelectorAll("[data-github]").forEach(function (a) { if (B.github) { a.href = B.github; a.target = "_blank"; a.rel = "noopener"; } });
    document.querySelectorAll("[data-email]").forEach(function (a) { if (B.email) { a.href = "mailto:" + B.email; a.textContent = B.email; } });
    document.querySelectorAll("[data-cv]").forEach(function (a) { if (B.cv) { a.href = B.cv; a.setAttribute("download", ""); } });
    document.querySelectorAll("[data-year]").forEach(function (s) { if (B.year) s.textContent = B.year; });
  }

  /* ---------- Boot ---------- */
  function boot() {
    safe(initSplash, "initSplash");
    safe(initNav, "initNav");
    safe(initMobileMenu, "initMobileMenu");
    safe(initCursor, "initCursor");
    safe(initGradient, "initGradient");
    safe(initReveals, "initReveals");
    safe(initSplitText, "initSplitText");
    safe(initMarquee, "initMarquee");
    safe(initProjects, "initProjects");
    safe(initCountUp, "initCountUp");
    safe(initScrollProgress, "initScrollProgress");
    safe(initAnchors, "initAnchors");
    safe(initLang, "initLang");
    safe(initLinks, "initLinks");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
