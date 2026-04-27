import { useState } from "react";

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');`;

const styles = `
  ${FONTS}
  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  :root {
    --ink: #1a1a2e;
    --ink-soft: #4a4a6a;
    --ink-muted: #9090b0;
    --paper: #f7f6f2;
    --paper-dark: #eeece6;
    --accent: #e8572a;
    --accent-soft: #fff0eb;
    --success: #2a9e6e;
    --white: #ffffff;
    --border: #e0ddd6;
    --shadow: 0 2px 20px rgba(26,26,46,0.08);
    --shadow-lg: 0 8px 40px rgba(26,26,46,0.14);
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--paper);
    color: var(--ink);
    min-height: 100vh;
  }

  .app {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 24px 80px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--border);
  }
  .logo {
    font-family: 'DM Serif Display', serif;
    font-size: 26px;
    color: var(--ink);
    letter-spacing: -0.5px;
  }
  .logo span { color: var(--accent); }
  .nav-tabs {
    display: flex;
    gap: 4px;
    background: var(--paper-dark);
    padding: 4px;
    border-radius: 10px;
  }
  .nav-tab {
    padding: 8px 18px;
    border-radius: 7px;
    border: none;
    background: transparent;
    color: var(--ink-soft);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }
  .nav-tab.active {
    background: var(--white);
    color: var(--ink);
    box-shadow: var(--shadow);
  }

  .card {
    background: var(--white);
    border-radius: 16px;
    padding: 32px;
    box-shadow: var(--shadow);
    margin-bottom: 20px;
  }
  .card-title {
    font-family: 'DM Serif Display', serif;
    font-size: 20px;
    margin-bottom: 24px;
    color: var(--ink);
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .form-grid.full { grid-template-columns: 1fr; }
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .field.span2 { grid-column: span 2; }
  label {
    font-size: 13px;
    font-weight: 500;
    color: var(--ink-soft);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  input, textarea, select {
    padding: 12px 14px;
    border: 1.5px solid var(--border);
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: var(--ink);
    background: var(--paper);
    transition: border 0.2s, box-shadow 0.2s;
    outline: none;
    width: 100%;
  }
  input:focus, textarea:focus, select:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(232,87,42,0.1);
    background: var(--white);
  }
  textarea { resize: vertical; min-height: 90px; }

  .btn {
    padding: 13px 28px;
    border-radius: 10px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .btn-primary {
    background: var(--accent);
    color: var(--white);
  }
  .btn-primary:hover { background: #d44a1f; transform: translateY(-1px); box-shadow: 0 4px 15px rgba(232,87,42,0.3); }
  .btn-primary:disabled { background: var(--ink-muted); cursor: not-allowed; transform: none; box-shadow: none; }
  .btn-ghost {
    background: var(--paper-dark);
    color: var(--ink);
  }
  .btn-ghost:hover { background: var(--border); }
  .btn-success {
    background: var(--success);
    color: var(--white);
  }

  .setup-box {
    background: var(--accent-soft);
    border: 1.5px dashed var(--accent);
    border-radius: 14px;
    padding: 28px;
    margin-bottom: 24px;
    text-align: center;
  }
  .setup-box h3 {
    font-family: 'DM Serif Display', serif;
    font-size: 18px;
    margin-bottom: 8px;
    color: var(--ink);
  }
  .setup-box p {
    font-size: 14px;
    color: var(--ink-soft);
    margin-bottom: 16px;
    line-height: 1.6;
  }
  .setup-box input {
    max-width: 420px;
    margin: 0 auto 12px;
    display: block;
    background: var(--white);
  }

  .line-row {
    display: grid;
    grid-template-columns: 2fr 80px 100px auto;
    gap: 10px;
    align-items: end;
    margin-bottom: 10px;
  }
  .line-row .btn-icon {
    background: transparent;
    border: none;
    color: var(--ink-muted);
    cursor: pointer;
    padding: 12px;
    border-radius: 8px;
    font-size: 18px;
    transition: all 0.2s;
  }
  .line-row .btn-icon:hover { color: var(--accent); background: var(--accent-soft); }

  .totals {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
  }
  .total-row {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    font-size: 15px;
    color: var(--ink-soft);
  }
  .total-row.grand {
    font-size: 18px;
    font-weight: 600;
    color: var(--ink);
    border-top: 1.5px solid var(--border);
    margin-top: 8px;
    padding-top: 12px;
  }

  .ai-output {
    background: var(--paper);
    border: 1.5px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.8;
    color: var(--ink);
    white-space: pre-wrap;
  }
  .ai-label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  .preview-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom: 2px solid var(--ink);
  }
  .preview-company { font-family: 'DM Serif Display', serif; font-size: 24px; }
  .preview-meta { text-align: right; font-size: 13px; color: var(--ink-soft); line-height: 1.8; }
  .preview-meta strong { color: var(--ink); }
  .preview-to { margin-bottom: 24px; }
  .preview-to h4 { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: var(--ink-muted); margin-bottom: 6px; }
  .preview-to p { font-size: 15px; font-weight: 500; }
  .preview-table { width: 100%; border-collapse: collapse; margin: 24px 0; }
  .preview-table th { font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--ink-muted); text-align: left; padding: 8px 12px; background: var(--paper); }
  .preview-table td { padding: 12px; font-size: 14px; border-bottom: 1px solid var(--border); }
  .preview-table td:last-child { text-align: right; font-weight: 500; }
  .preview-totals { margin-left: auto; width: 260px; }
  .preview-text { font-size: 14px; line-height: 1.8; color: var(--ink-soft); margin: 24px 0; }
  .preview-footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border); font-size: 12px; color: var(--ink-muted); }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }
  .badge-open { background: #fff8e6; color: #b07d00; }
  .badge-signed { background: #e6f7f0; color: var(--success); }

  .offerte-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border: 1.5px solid var(--border);
    border-radius: 12px;
    margin-bottom: 10px;
    background: var(--white);
    transition: all 0.2s;
  }
  .offerte-item:hover { border-color: var(--accent); transform: translateX(3px); }
  .offerte-item-left h4 { font-weight: 600; font-size: 15px; margin-bottom: 3px; }
  .offerte-item-left p { font-size: 13px; color: var(--ink-muted); }
  .offerte-item-right { display: flex; align-items: center; gap: 12px; }
  .offerte-amount { font-weight: 600; font-size: 16px; }

  .spinner {
    width: 18px; height: 18px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: inline-block;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 24px; }

  .profile-row { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
  .avatar {
    width: 56px; height: 56px;
    border-radius: 14px;
    background: var(--accent);
    display: flex; align-items: center; justify-content: center;
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    color: white;
    flex-shrink: 0;
  }
  .profile-name { font-family: 'DM Serif Display', serif; font-size: 20px; }
  .profile-sub { font-size: 13px; color: var(--ink-muted); }

  .empty {
    text-align: center;
    padding: 60px 20px;
    color: var(--ink-muted);
  }
  .empty-icon { font-size: 48px; margin-bottom: 12px; }
  .empty h3 { font-family: 'DM Serif Display', serif; font-size: 20px; color: var(--ink-soft); margin-bottom: 6px; }
  .empty p { font-size: 14px; }

  @media (max-width: 600px) {
    .form-grid { grid-template-columns: 1fr; }
    .field.span2 { grid-column: span 1; }
    .line-row { grid-template-columns: 1fr 60px 80px auto; }
    .header { flex-direction: column; gap: 16px; align-items: flex-start; }
    .preview-header { flex-direction: column; gap: 16px; }
    .preview-meta { text-align: left; }
  }
`;

const defaultProfile = { bedrijf: "", naam: "", email: "", kvk: "", btw_nr: "", iban: "" };
const defaultForm = {
  klant_naam: "", klant_bedrijf: "", klant_email: "", klant_adres: "",
  project_titel: "", project_omschrijving: "", geldigheidsdagen: "30",
  btw_pct: "21", regels: [{ omschrijving: "", aantal: "1", prijs: "" }]
};

function formatEur(n) {
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(n || 0);
}

function calcTotals(regels, btw_pct) {
  const subtotaal = regels.reduce((s, r) => s + (parseFloat(r.aantal) || 0) * (parseFloat(r.prijs) || 0), 0);
  const btw = subtotaal * (parseFloat(btw_pct) / 100);
  return { subtotaal, btw, totaal: subtotaal + btw };
}

export default function OfferteTool() {
  const [tab, setTab] = useState("nieuw");
  const [apiKey, setApiKey] = useState("");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [profile, setProfile] = useState(defaultProfile);
  const [form, setForm] = useState(defaultForm);
  const [offertes, setOffertes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [aiTekst, setAiTekst] = useState("");
  const [preview, setPreview] = useState(null);
  const [editProfile, setEditProfile] = useState(false);

  const totals = calcTotals(form.regels, form.btw_pct);

  function updateRegel(i, field, val) {
    setForm(f => ({ ...f, regels: f.regels.map((r, j) => j === i ? { ...r, [field]: val } : r) }));
  }
  function addRegel() {
    setForm(f => ({ ...f, regels: [...f.regels, { omschrijving: "", aantal: "1", prijs: "" }] }));
  }
  function removeRegel(i) {
    setForm(f => ({ ...f, regels: f.regels.filter((_, j) => j !== i) }));
  }

  async function generateAI() {
    setLoading(true);
    setAiTekst("");
    try {
      const prompt = `Je bent een professionele tekstschrijver voor zakelijke offertes in het Nederlands.

Schrijf een professionele, zakelijke offertetekst voor:
- Bedrijf/freelancer: ${profile.bedrijf || profile.naam}
- Klant: ${form.klant_naam}${form.klant_bedrijf ? ` (${form.klant_bedrijf})` : ""}
- Project: ${form.project_titel}
- Omschrijving: ${form.project_omschrijving}
- Totaalbedrag incl. BTW: ${formatEur(totals.totaal)}

Schrijf een alinea van 3-5 zinnen als begeleidende tekst bij de offerte. Professioneel, warm maar zakelijk. Begin met "Geachte" of "Beste". Eindig met een positieve afsluiting over samenwerking.`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": apiKey, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
        body: JSON.stringify({ model: "claude-3-5-sonnet-20241022", max_tokens: 400, messages: [{ role: "user", content: prompt }] })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      setAiTekst(data.content[0].text);
    } catch (e) {
      setAiTekst("❌ Fout: " + e.message);
    }
    setLoading(false);
  }

  function slaOp() {
    const nr = `OFF-${String(offertes.length + 1).padStart(3, "0")}-${new Date().getFullYear()}`;
    const offerte = {
      id: Date.now(), nr, datum: new Date().toLocaleDateString("nl-NL"),
      form: { ...form, regels: [...form.regels] }, profile: { ...profile },
      aiTekst, totals, status: "open"
    };
    setOffertes(o => [offerte, ...o]);
    setPreview(offerte);
    setTab("preview");
  }

  function openPreview(o) { setPreview(o); setTab("preview"); }

  function markSigned(id) {
    setOffertes(o => o.map(x => x.id === id ? { ...x, status: "ondertekend" } : x));
    if (preview?.id === id) setPreview(p => ({ ...p, status: "ondertekend" }));
  }

  const initials = (profile.bedrijf || profile.naam || "ZZP").slice(0, 2).toUpperCase();

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className="header">
          <div className="logo">Offerte<span>.</span>app</div>
          <div className="nav-tabs">
            {["nieuw", "overzicht"].map(t => (
              <button key={t} className={`nav-tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
                {t === "nieuw" ? "✦ Nieuwe offerte" : `📋 Offertes (${offertes.length})`}
              </button>
            ))}
          </div>
        </div>

        {!apiKey && (
          <div className="setup-box">
            <h3>🔑 Verbind je AI</h3>
            <p>Voer je Anthropic API-key in om AI-offerteteksten te genereren.<br />Je key wordt alleen lokaal gebruikt en nooit opgeslagen.</p>
            <input type="password" placeholder="sk-ant-api..." value={apiKeyInput} onChange={e => setApiKeyInput(e.target.value)} />
            <button className="btn btn-primary" onClick={() => setApiKey(apiKeyInput)} disabled={!apiKeyInput.startsWith("sk-")}>Verbinden</button>
          </div>
        )}

        {tab === "nieuw" && (
          <>
            <div className="card">
              <div className="profile-row">
                <div className="avatar">{initials}</div>
                <div>
                  <div className="profile-name">{profile.bedrijf || "Jouw bedrijf"}</div>
                  <div className="profile-sub">{profile.email || "Vul je gegevens in"}</div>
                </div>
                <button className="btn btn-ghost" style={{ marginLeft: "auto" }} onClick={() => setEditProfile(!editProfile)}>
                  {editProfile ? "Sluiten" : "✎ Bewerken"}
                </button>
              </div>
              {editProfile && (
                <div className="form-grid">
                  {[["bedrijf", "Bedrijfsnaam"], ["naam", "Contactpersoon"], ["email", "E-mailadres"], ["kvk", "KvK-nummer"], ["btw_nr", "BTW-nummer"], ["iban", "IBAN"]].map(([k, l]) => (
                    <div className="field" key={k}>
                      <label>{l}</label>
                      <input value={profile[k]} onChange={e => setProfile(p => ({ ...p, [k]: e.target.value }))} placeholder={l} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="card">
              <div className="card-title">👤 Klantgegevens</div>
              <div className="form-grid">
                <div className="field"><label>Naam</label><input value={form.klant_naam} onChange={e => setForm(f => ({ ...f, klant_naam: e.target.value }))} placeholder="Jan de Vries" /></div>
                <div className="field"><label>Bedrijf</label><input value={form.klant_bedrijf} onChange={e => setForm(f => ({ ...f, klant_bedrijf: e.target.value }))} placeholder="Bedrijf BV (optioneel)" /></div>
                <div className="field"><label>E-mail</label><input value={form.klant_email} onChange={e => setForm(f => ({ ...f, klant_email: e.target.value }))} placeholder="jan@bedrijf.nl" /></div>
                <div className="field"><label>Adres</label><input value={form.klant_adres} onChange={e => setForm(f => ({ ...f, klant_adres: e.target.value }))} placeholder="Straat 1, Amsterdam" /></div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">💼 Project</div>
              <div className="form-grid">
                <div className="field span2"><label>Projecttitel</label><input value={form.project_titel} onChange={e => setForm(f => ({ ...f, project_titel: e.target.value }))} placeholder="Bijv. Website redesign" /></div>
                <div className="field span2"><label>Omschrijving</label><textarea value={form.project_omschrijving} onChange={e => setForm(f => ({ ...f, project_omschrijving: e.target.value }))} placeholder="Beschrijf het project in een paar zinnen..." /></div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">📋 Werkzaamheden</div>
              {form.regels.map((r, i) => (
                <div className="line-row" key={i}>
                  <div className="field">
                    {i === 0 && <label>Omschrijving</label>}
                    <input value={r.omschrijving} onChange={e => updateRegel(i, "omschrijving", e.target.value)} placeholder="Bijv. Ontwerp homepage" />
                  </div>
                  <div className="field">
                    {i === 0 && <label>Aantal</label>}
                    <input type="number" value={r.aantal} onChange={e => updateRegel(i, "aantal", e.target.value)} placeholder="1" min="0" />
                  </div>
                  <div className="field">
                    {i === 0 && <label>Prijs (€)</label>}
                    <input type="number" value={r.prijs} onChange={e => updateRegel(i, "prijs", e.target.value)} placeholder="0.00" min="0" step="0.01" />
                  </div>
                  <button className="btn-icon" onClick={() => removeRegel(i)} style={{ marginTop: i === 0 ? "22px" : "0" }}>✕</button>
                </div>
              ))}
              <button className="btn btn-ghost" onClick={addRegel} style={{ marginTop: 8 }}>+ Regel toevoegen</button>
              <div className="totals">
                <div className="total-row"><span>Subtotaal</span><span>{formatEur(totals.subtotaal)}</span></div>
                <div className="total-row">
                  <span>BTW <select value={form.btw_pct} onChange={e => setForm(f => ({ ...f, btw_pct: e.target.value }))} style={{ width: "auto", padding: "2px 6px", display: "inline", marginLeft: 6 }}>
                    <option value="0">0%</option><option value="9">9%</option><option value="21">21%</option>
                  </select></span>
                  <span>{formatEur(totals.btw)}</span>
                </div>
                <div className="total-row grand"><span>Totaal</span><span>{formatEur(totals.totaal)}</span></div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">✨ AI-offertetekst</div>
              <p style={{ fontSize: 14, color: "var(--ink-soft)", marginBottom: 16 }}>Laat AI een professionele begeleidende tekst genereren op basis van jouw projectgegevens.</p>
              <button className="btn btn-primary" onClick={generateAI} disabled={loading || !apiKey || !form.project_titel}>
                {loading ? <><span className="spinner" /> Genereren...</> : "✦ Genereer tekst"}
              </button>
              {!apiKey && <span style={{ marginLeft: 12, fontSize: 13, color: "var(--ink-muted)" }}>Voer eerst je API-key in</span>}
              {aiTekst && (
                <div className="ai-output">
                  <div className="ai-label">✦ AI gegenereerd</div>
                  {aiTekst}
                </div>
              )}
            </div>

            <div className="card">
              <div className="card-title">⚙️ Instellingen</div>
              <div className="form-grid">
                <div className="field">
                  <label>Geldig tot (dagen)</label>
                  <input type="number" value={form.geldigheidsdagen} onChange={e => setForm(f => ({ ...f, geldigheidsdagen: e.target.value }))} placeholder="30" />
                </div>
              </div>
              <div className="actions">
                <button className="btn btn-primary" onClick={slaOp} disabled={!form.klant_naam || !form.project_titel}>
                  📄 Offerte aanmaken & bekijken
                </button>
              </div>
            </div>
          </>
        )}

        {tab === "overzicht" && (
          <div className="card">
            <div className="card-title">📋 Mijn offertes</div>
            {offertes.length === 0 ? (
              <div className="empty">
                <div className="empty-icon">📄</div>
                <h3>Nog geen offertes</h3>
                <p>Maak je eerste offerte aan via "Nieuwe offerte"</p>
              </div>
            ) : offertes.map(o => (
              <div className="offerte-item" key={o.id} onClick={() => openPreview(o)} style={{ cursor: "pointer" }}>
                <div className="offerte-item-left">
                  <h4>{o.form.project_titel}</h4>
                  <p>{o.nr} · {o.form.klant_naam} · {o.datum}</p>
                </div>
                <div className="offerte-item-right">
                  <span className="offerte-amount">{formatEur(o.totals.totaal)}</span>
                  <span className={`badge ${o.status === "ondertekend" ? "badge-signed" : "badge-open"}`}>
                    {o.status === "ondertekend" ? "✓ Ondertekend" : "● Openstaand"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "preview" && preview && (
          <div className="card" style={{ padding: "40px 48px" }}>
            <div className="preview-header">
              <div>
                <div className="preview-company">{preview.profile.bedrijf || preview.profile.naam}</div>
                <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 4 }}>
                  {preview.profile.email}<br />
                  {preview.profile.kvk && `KvK: ${preview.profile.kvk}`}
                  {preview.profile.btw_nr && ` · BTW: ${preview.profile.btw_nr}`}
                </div>
              </div>
              <div className="preview-meta">
                <strong>OFFERTE</strong><br />
                {preview.nr}<br />
                Datum: {preview.datum}<br />
                Geldig tot: {(() => {
                  const d = new Date(); d.setDate(d.getDate() + parseInt(preview.form.geldigheidsdagen || 30));
                  return d.toLocaleDateString("nl-NL");
                })()}
              </div>
            </div>
            <div className="preview-to">
              <h4>Aan</h4>
              <p>{preview.form.klant_naam}{preview.form.klant_bedrijf ? ` · ${preview.form.klant_bedrijf}` : ""}</p>
              <p style={{ color: "var(--ink-muted)", fontSize: 13 }}>{preview.form.klant_adres}</p>
            </div>
            {preview.aiTekst && <p className="preview-text">{preview.aiTekst}</p>}
            <div style={{ marginBottom: 8 }}>
              <strong>Betreft: {preview.form.project_titel}</strong>
            </div>
            {preview.form.project_omschrijving && (
              <p style={{ fontSize: 14, color: "var(--ink-soft)", marginBottom: 16 }}>{preview.form.project_omschrijving}</p>
            )}
            <table className="preview-table">
              <thead>
                <tr>
                  <th>Omschrijving</th>
                  <th style={{ textAlign: "center" }}>Aantal</th>
                  <th style={{ textAlign: "right" }}>Prijs</th>
                  <th style={{ textAlign: "right" }}>Totaal</th>
                </tr>
              </thead>
              <tbody>
                {preview.form.regels.filter(r => r.omschrijving).map((r, i) => (
                  <tr key={i}>
                    <td>{r.omschrijving}</td>
                    <td style={{ textAlign: "center" }}>{r.aantal}</td>
                    <td style={{ textAlign: "right" }}>{formatEur(parseFloat(r.prijs) || 0)}</td>
                    <td>{formatEur((parseFloat(r.aantal) || 0) * (parseFloat(r.prijs) || 0))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="preview-totals">
              <div className="total-row"><span>Subtotaal</span><span>{formatEur(preview.totals.subtotaal)}</span></div>
              <div className="total-row"><span>BTW {preview.form.btw_pct}%</span><span>{formatEur(preview.totals.btw)}</span></div>
              <div className="total-row grand"><span>Totaal</span><span>{formatEur(preview.totals.totaal)}</span></div>
            </div>
            {preview.profile.iban && (
              <p style={{ marginTop: 24, fontSize: 13, color: "var(--ink-muted)" }}>
                Gelieve het bedrag over te maken op <strong>{preview.profile.iban}</strong> onder vermelding van offertenummer <strong>{preview.nr}</strong>.
              </p>
            )}
            <div className="preview-footer">
              {preview.profile.bedrijf} · {preview.profile.email} · {preview.profile.kvk && `KvK: ${preview.profile.kvk}`}
            </div>
            <div className="actions" style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
              <button className="btn btn-ghost" onClick={() => setTab("nieuw")}>← Terug</button>
              <button className="btn btn-ghost" onClick={() => setTab("overzicht")}>📋 Overzicht</button>
              {preview.status !== "ondertekend" && (
                <button className="btn btn-success" onClick={() => markSigned(preview.id)}>✓ Markeer als ondertekend</button>
              )}
              {preview.status === "ondertekend" && (
                <span className="badge badge-signed" style={{ padding: "10px 16px" }}>✓ Ondertekend</span>
              )}
              <button className="btn btn-primary" onClick={() => window.print()}>🖨️ Afdrukken / PDF</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
