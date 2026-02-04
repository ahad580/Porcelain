"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export default function Home() {
  const cards = useMemo(
    () => [
      {
        img: "/boxes.png",
        title: "Porcelain Skin Gift Set",
        price: "$120.00",
        desc:
          "A premium skincare collection in a beautifully designed box, featuring our top products for a luxurious skincare experience.",
      },
      {
        img: "/boxes.png",
        title: "Radiance Face Serum",
        price: "$45.90",
        desc:
          "A lightweight serum that boosts radiance and smooths texture, leaving your skin looking fresh, refined, and luminous.",
      },
      {
        img: "/boxes.png",
        title: "Hydrating Face Cream",
        price: "$38.90",
        desc:
          "A rich, nourishing cream that locks in moisture, softens dry areas, and supports a calm, healthy-looking glow.",
      },
      {
        img: "/boxes.png",
        title: "Brightening Face Cleanser",
        price: "$25.00",
        desc:
          "A gentle daily cleanser that lifts impurities and makeup, revealing a clearer, brighter complexion without stripping.",
      },
    ],
    []
  );

  const products = useMemo(
    () => [
      { img: "/hydrating.png", title: "Hydrating Face Cream", price: "$39.90", desc: "A rich, hydrating cream that deeply moisturizes and nourishes the skin, leaving it soft and plump." },
      { img: "/radiance.png", title: "Radiance Face Serum", price: "$45.90", desc: "A lightweight serum that brightens and evens out skin tone, promoting a radiant glow." },
      { img: "/hydrating.png", title: "Revitalizing Eye Cream", price: "$32.00", desc: "An eye cream that targets puffiness, leaving the under-eye area refreshed and rejuvenated." },
      { img: "/hydrating.png", title: "Soothing Facial Mist", price: "$28.00", desc: "A soothing mist that calms and hydrates the skin, perfect for a midday refresh or setting makeup." },
      { img: "/hydrating.png", title: "Exfoliating Facial Scrub", price: "$36.00", desc: "A gentle scrub that removes dead skin cells, leaving your face feeling fresh, smooth, and rejuvenated." },
      { img: "/hydrating.png", title: "Anti Aging Face Oil", price: "$48.00", desc: "A nourishing oil that fights fine lines and boosts skin elasticity, providing deep hydration for youthful skin." },
      { img: "/hydrating.png", title: "Purifying Clay Mask", price: "$42.00", desc: "A detoxifying mask that draws out impurities and excess oil, giving your skin a clearer, more radiant look." },
      { img: "/hydrating.png", title: "Illuminating Eye Patches", price: "$28.00", desc: "Brighten and refresh your under-eye area with these hydrating patches, reducing puffiness and dark circles." },
      { img: "/hydrating.png", title: "Firming Face Lotion", price: "$40.00", desc: "A firming lotion that improves skin elasticity, helping to reduce the appearance of fine lines and wrinkles." },
      { img: "/hydrating.png", title: "Balancing Face Toner", price: "$30.00", desc: "A toner that balances skin pH, tightens pores, and refreshes the complexion, preparing your skin for moisturizer." },
      { img: "/hydrating.png", title: "Brightening Face Cleanser", price: "$25.00", desc: "A gentle cleanser that brightens and refreshes the skin while removing makeup and impurities." },
    ],
    []
  );

  const bodyProducts = useMemo(
    () => [
      { img: "/hydrating.png", title: "Radiance Body Lotion", price: "$22.00", desc: "A lightweight, hydrating lotion that nourishes the skin, leaving it soft, glowing, and smooth." },
      { img: "/hydrating.png", title: "Nourishing Body Oil", price: "$34.00", desc: "A luxurious, fast-absorbing oil that deeply moisturizes, softens, and enhances natural glow." },
      { img: "/hydrating.png", title: "Soothing Body Butter", price: "$32.00", desc: "A rich, indulgent butter that deeply nourishes and calms dry skin, providing long-lasting hydration." },
      { img: "/silk.png", title: "Silk Body Serum", price: "$36.00", desc: "A lightweight serum that absorbs quickly to improve skin texture and support a radiant finish." },
      { img: "/hydrating.png", title: "Exfoliating Body Scrub", price: "$38.00", desc: "A gentle exfoliating scrub that removes dead skin and reveals smoother, brighter-looking skin." },
      { img: "/hydrating.png", title: "Hydrating Body Mist", price: "$20.00", desc: "A refreshing mist to instantly hydrate and revive your skin throughout the day." },
      { img: "/hydrating.png", title: "Nourishing Body Cream", price: "$40.00", desc: "A rich cream that provides deep moisture and leaves skin feeling supple and comforted." },
    ],
    []
  );

  const handProducts = useMemo(
    () => [
      { img: "/repair.png", title: "Hand Repair Cream", price: "$19.00", desc: "A rich, nourishing cream that hydrates, softens, and smooths hands for a porcelain-like texture." },
      { img: "/lotion.png", title: "Silk Hand Lotion", price: "$19.00", desc: "A silky lotion that absorbs quickly to restore softness, comfort dryness, and leave a fresh finish." },
    ],
    []
  );

  const blogPosts = useMemo(
    () => [
      { tag: "Skincare Ritual", title: "How to Build a Porcelain Glow Routine", desc: "A simple, step-by-step routine that keeps your skin hydrated, bright, and consistently smooth." },
      { tag: "Daily Care", title: "Cleansing Without Stripping Your Skin", desc: "Learn the gentle cleansing approach that protects your barrier while keeping pores fresh." },
      { tag: "Body Care", title: "Body Care That Feels Like Silk", desc: "Daily body essentials to keep texture soft, radiant, and comfortably moisturized all day." },
      { tag: "Hand Care", title: "Soft Hands, Elegant Finish", desc: "Quick fixes for dryness, plus long-term care to keep hands smooth and polished." },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState("in");
  const [navGlass, setNavGlass] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const showMs = 2600;
    const fadeMs = 520;
    const t1 = setTimeout(() => setPhase("out"), showMs);
    const t2 = setTimeout(() => {
      setActive((p) => (p + 1) % cards.length);
      setPhase("in");
    }, showMs + fadeMs);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active, cards.length]);

  useEffect(() => {
    const onScroll = () => setNavGlass(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNav = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const card = cards[active];

  return (
    <div className={`psLoadWrap ${loading ? "isLoading" : ""}`}>
      <div className={`psLoader ${loading ? "show" : ""}`}>
        <div className="psLoaderCard">
          <div className="psLoaderLogo">
            <span className="pAlt">P</span>ORCELAIN
          </div>
          <div className="psLoaderSpin" />
          <div className="psLoaderText">Loading</div>
        </div>
      </div>

      <div className="pageShell">
        <main className="heroSection" id="home">
          <div className="heroScaler">
            <div className="heroFrame">
              <div className="heroFrameInner">
                <header className={`topNav ${navGlass ? "topNavGlass" : ""}`}>
                  <div className="navInner">
                    <div className="brandMark">
                      <span className="pAltSm">P</span>ORCELAIN
                    </div>

                    <nav className="navLinks">
                      <a href="#home" onClick={onNav}>HOME</a>
                      <a href="#shop" onClick={onNav}>SHOP</a>
                      <a href="#about" onClick={onNav}>ABOUT</a>
                      <a href="#blog" onClick={onNav}>BLOG</a>
                      <a href="#contact" onClick={onNav}>CONTACT</a>
                    </nav>

                    <div className="navActions">
                      <button className="navIconBtn" aria-label="Search">
                        <svg viewBox="0 0 24 24" className="navIcon">
                          <path d="M10.5 18a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15Zm0-2a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11Zm8.86 4.27-4.1-4.1 1.41-1.41 4.1 4.1-1.41 1.41Z" />
                        </svg>
                      </button>
                      <button className="navIconBtn" aria-label="Cart">
                        <svg viewBox="0 0 24 24" className="navIcon">
                          <path d="M7 6h14l-1.6 8.2a3 3 0 0 1-3 2.4H9.2a3 3 0 0 1-3-2.4L5 3H2V1h4l1 5Zm1.2 8.3a1 1 0 0 0 1 .8h7.2a1 1 0 0 0 1-.8L18.6 8H6.4l1.8 6.3ZM9 23a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm8 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </header>

                <div className="bgOrnament" aria-hidden="true">
                  <Image src="/ornament.png" alt="" fill priority className="bgOrnamentImg" />
                </div>

                <div className="ornamentalP" aria-hidden="true">
                  <Image src="/p_transparent.png" alt="" fill priority className="ornamentalPImg" />
                </div>

                <div className="heroTitleStack" aria-hidden="true">
                  <div className="heroTitlePorcelain">
                    <span className="pAltHero">P</span>ORCELAIN
                  </div>
                  <div className="heroTitleSkin">SKIN</div>
                </div>

                <div className="heroLeftCopy">
                  <div className="heroKicker">
                    TIMELESS
                    <br />
                    BEAUTY,
                    <br />
                    PERFECTED
                  </div>

                  <div className="heroBody">
                    Elevating your skincare routine
                    <br />
                    with luxurious, porcelain-inspired
                    <br />
                    products.
                  </div>

                  <button className="heroCta" onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}>
                    Explore Collection →
                  </button>
                </div>

                <div className="heroModelWrap">
                  <div className="heroModelFrame">
                    <Image src="/21.png" alt="" fill priority className="heroModelImg" />
                  </div>
                </div>

                <aside className={`productCard ${phase === "out" ? "cardFadeOut" : "cardFadeIn"}`}>
                  <div className="productCardMedia">
                    <Image src={card.img} alt={card.title} fill quality={100} sizes="(max-width:860px) 100vw, 320px" className="productCardImg" />
                  </div>

                  <div className="productCardBody">
                    <div className="productCardRow">
                      <div className="productCardTitle">{card.title}</div>
                      <div className="productCardPrice">{card.price}</div>
                    </div>
                    <div className="productCardText">{card.desc}</div>
                  </div>

                  <div className="cardDots">
                    {cards.map((_, i) => (
                      <button
                        key={i}
                        className={`dot ${i === active ? "dotActive" : ""}`}
                        onClick={() => {
                          setActive(i);
                          setPhase("in");
                        }}
                        aria-label={`Card ${i + 1}`}
                      />
                    ))}
                  </div>
                </aside>

                <section id="shop" className="rgInside">
                  <div className="rgGrid">
                    <div className="rgIntro">
                      <div className="rgTitle">
                        RADIANT
                        <br />
                        SKIN STARTS
                        <br />
                        HERE
                      </div>
                      <div className="rgText">
                        Discover our luxurious skincare collection designed to cleanse, nourish, and rejuvenate your face. From brightening
                        cleansers to revitalizing eye creams, each product is crafted for flawless, porcelain-like beauty.
                      </div>
                    </div>

                    {products.map((p, i) => (
                      <article className="rgCard" key={i}>
                        <div className="rgMedia">
                          <Image src={p.img} alt={p.title} fill quality={100} sizes="(max-width: 860px) 100vw, (max-width: 1100px) 33vw, 25vw" className="rgImg" />
                        </div>
                        <div className="rgMeta">
                          <div className="rgRow">
                            <div className="rgName">{p.title}</div>
                            <div className="rgPrice">{p.price}</div>
                          </div>
                          <div className="rgDesc">{p.desc}</div>
                        </div>
                      </article>
                    ))}
                  </div>

                  <section id="about" className="aboutSection">
                    <div className="aboutGrid">
                      <div className="aboutCard">
                        <div className="aboutBadge">About Porcelain Skin</div>
                        <div className="aboutTitle">Refined skincare, inspired by timeless elegance.</div>
                        <div className="aboutText">
                          Porcelain Skin is built around one idea: keep skincare gentle, effective, and consistently luxurious. Our formulas
                          focus on hydration, comfort, and a smooth finish that looks naturally radiant.
                        </div>

                        <div className="aboutStats">
                          <div className="aboutStat">
                            <div className="aboutNum">98%</div>
                            <div className="aboutLbl">Customer satisfaction rate</div>
                          </div>
                          <div className="aboutStat">
                            <div className="aboutNum">2411</div>
                            <div className="aboutLbl">Orders delivered worldwide</div>
                          </div>
                          <div className="aboutStat">
                            <div className="aboutNum">Clean</div>
                            <div className="aboutLbl">Skin-friendly essentials</div>
                          </div>
                        </div>

                        <div className="aboutActions">
                          <button className="aboutBtn" onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}>
                            Shop Our Favorites
                          </button>
                          <button className="aboutBtnGhost" onClick={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })}>
                            Read the Blog
                          </button>
                        </div>
                      </div>

                      <div className="aboutMediaOnly">
                        <Image src="/bundles.png" alt="About" fill priority className="aboutImgOnly" />
                      </div>
                    </div>
                  </section>

                  <section id="blog" className="blogSection">
                    <div className="blogHero">
                      <div className="blogHeroMedia">
                        <Image src="/blog.png" alt="Blog Banner" fill priority className="blogHeroImg" />
                      </div>

                      <div className="blogHeroOverlay" aria-hidden="true" />
                      <div className="blogHeroSwirl" aria-hidden="true">
                        <Image src="/ornament.png" alt="" fill className="blogHeroSwirlImg" />
                      </div>

                      <h2 className="blogHeroTitle">BLOG</h2>
                      <p className="blogHeroText">
                        Tips, routines, and simple guides to help you keep your skin smooth, hydrated, and luminous.
                        <br />
                        Skincare made clear and easy.
                      </p>
                    </div>

                    <div className="blogGrid">
                      {blogPosts.map((b, i) => (
                        <article key={i} className="blogCard">
                          <div className="blogMeta">
                            <div className="blogPill">{b.tag}</div>
                            <div className="blogName">{b.title}</div>
                            <div className="blogDesc">{b.desc}</div>

                            <div className="blogLinkRow">
                              <button className="blogLinkBtn">Read More →</button>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="bodyCare" id="body-care">
                    <div className="bodyHero">
                      <div className="bodyHeroMedia">
                        <Image src="/sk.png" alt="Body Care" fill className="bodyHeroImg" priority />
                      </div>

                      <div className="bodyHeroOverlay" aria-hidden="true" />

                      <div className="bodyHeroSwirl" aria-hidden="true">
                        <Image src="/ornament.png" alt="" fill className="bodyHeroSwirlImg" />
                      </div>

                      <h2 className="bodyHeroTitle">BODY CARE</h2>

                      <p className="bodyHeroText">
                        Gentle body care that enhances your
                        <br />
                        skin&apos;s smoothness and porcelain-like
                        <br />
                        glow. Reveal your natural beauty with
                        <br />
                        every touch.
                      </p>
                    </div>

                    <div className="bodyGrid">
                      {bodyProducts.map((p, i) => (
                        <article className="bodyCard" key={i}>
                          <div className="bodyCardMedia">
                            <Image src={p.img} alt={p.title} fill quality={100} sizes="(max-width: 860px) 100vw, (max-width: 1100px) 33vw, 25vw" className="bodyCardImg" />
                          </div>

                          <div className="bodyMeta">
                            <div className="bodyRow">
                              <div className="bodyName">{p.title}</div>
                              <div className="bodyPrice">{p.price}</div>
                            </div>
                            <div className="bodyDesc">{p.desc}</div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="handCare" id="hand-care">
                    <div className="handHero">
                      <div className="handHeroMedia">
                        <Image src="/hand2.png" alt="Hand Care" fill className="handHeroImg" priority />
                      </div>

                      <div className="handHeroOverlay" aria-hidden="true" />

                      <h2 className="handHeroTitle">HAND CARE</h2>

                      <p className="handHeroText">
                        Nourish and soften your hands with a luxurious
                        <br />
                        formula that restores their smooth, porcelain-like
                        <br />
                        texture. Feel the elegance with every touch.
                      </p>
                    </div>

                    <div className="handGrid">
                      {handProducts.map((p, i) => (
                        <article className="handCard" key={i}>
                          <div className="handCardMedia">
                            <Image src={p.img} alt={p.title} fill quality={100} sizes="(max-width: 860px) 100vw, 50vw" className="handCardImg" />
                          </div>

                          <div className="handMeta">
                            <div className="handRow">
                              <div className="handName">{p.title}</div>
                              <div className="handPrice">{p.price}</div>
                            </div>
                            <div className="handDesc">{p.desc}</div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                  <footer className="psFooter" id="contact">
                    <div className="psFooterInner">
                      <div className="psFooterBg" aria-hidden="true">
                        <Image src="/ornament.png" alt="" fill className="psFooterBgImg" />
                      </div>

                      <div className="psFooterGrid">
                        <div className="psFooterBrand">
                          <div className="psFooterLogo">
                            <span className="pAltSm2">P</span>ORCELAIN SKIN
                          </div>

                          <div className="psFooterContact">
                            <div className="psFooterLabel">Contact Us</div>
                            <div className="psFooterLine">Phone: +1 800-123-4567</div>
                            <div className="psFooterLine">Email: info@porcelainskin.com</div>
                          </div>

                          <div className="psFooterSocial">
                            <a className="psFooterIco" href="#" aria-label="Instagram">
                              <svg viewBox="0 0 24 24">
                                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.7-2.2a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                              </svg>
                            </a>

                            <a className="psFooterIco" href="#" aria-label="Facebook">
                              <svg viewBox="0 0 24 24">
                                <path d="M13.5 22v-8h2.7l.4-3H13.5V9.2c0-.9.3-1.5 1.6-1.5h1.7V5.1c-.3 0-1.3-.1-2.4-.1c-2.4 0-4 1.4-4 4v2H8v3h2.4v8h3.1Z" />
                              </svg>
                            </a>

                            <a className="psFooterIco" href="#" aria-label="TikTok">
                              <svg viewBox="0 0 24 24">
                                <path d="M14 3c.5 2.9 2.3 4.7 5 5v3.1c-1.9.1-3.5-.5-5-1.5v6.2c0 4-2.7 6.2-6.2 6.2c-1.4 0-2.7-.4-3.8-1.2c-2.6-1.9-2.9-6.1.1-8.2c1.4-1 2.9-1.3 4.7-1.1V15c-.6-.2-1.3-.2-1.9 0c-1.6.5-2.2 2.4-1.3 3.7c.8 1.1 2.6 1.1 3.5.1c.6-.6.8-1.3.8-2.1V3h3.1Z" />
                              </svg>
                            </a>
                          </div>
                        </div>

                        <div className="psFooterCol">
                          <div className="psFooterHead">Category</div>
                          <a className="psFooterLink" href="#shop" onClick={onNav}>Face Care</a>
                          <a className="psFooterLink" href="#body-care" onClick={onNav}>Body Care</a>
                          <a className="psFooterLink" href="#hand-care" onClick={onNav}>Hand Care</a>
                          <a className="psFooterLink" href="#">Special Collections</a>
                          <a className="psFooterLink" href="#">Sale</a>
                        </div>

                        <div className="psFooterCol">
                          <div className="psFooterHead">About</div>
                          <a className="psFooterLink" href="#about" onClick={onNav}>About Us</a>
                          <a className="psFooterLink" href="#shop" onClick={onNav}>Shop</a>
                          <a className="psFooterLink" href="#blog" onClick={onNav}>Blog</a>
                          <a className="psFooterLink" href="#contact" onClick={onNav}>Contact</a>
                          <a className="psFooterLink" href="#">Showrooms</a>
                        </div>

                        <div className="psFooterCol">
                          <div className="psFooterHead">Terms &amp; Policy</div>
                          <a className="psFooterLink" href="#">Terms of Service</a>
                          <a className="psFooterLink" href="#">Return &amp; Refund</a>
                          <a className="psFooterLink" href="#">Cookie Policy</a>
                          <a className="psFooterLink" href="#">Payment Terms</a>
                          <a className="psFooterLink" href="#">Disclaimer</a>
                        </div>
                        
                      </div>
                      <div className="psFooterBottom">© {new Date().getFullYear()} Porcelain Skin. All Rights Reserved.</div>
                      <div className="psFooterBottom">
                        © {new Date().getFullYear()} Generated by{" "}
                        <a className="psFooterLink" href="https://github.com/ahad580" target="_blank" rel="noreferrer">
                          ahad.io
                        </a>
                        .
                      </div>
                    </div>
                  </footer>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
