export default function EvidenceVisual() {
  return (
    <div className="project-visual project-visual--evidence" aria-hidden="true">
      <div className="project-visual__caption">
        <span>DESKTOP / GNOME</span>
        <span>01 — EVIDENCE</span>
      </div>
      <div className="evidence-scene">
        <svg className="evidence-scene__strings" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 29 29 L 70 42 L 47 76 L 29 29" />
          <path d="M 70 42 L 79 78" />
        </svg>
        <div className="evidence-scene__paper evidence-scene__paper--first">
          <span className="evidence-scene__pin" />
          <span className="evidence-scene__index">NOTE / 001</span>
          <span className="evidence-scene__rule" />
          <span className="evidence-scene__line" />
          <span className="evidence-scene__line evidence-scene__line--short" />
        </div>
        <div className="evidence-scene__photo">
          <span className="evidence-scene__pin" />
          <span className="evidence-scene__photo-image">
            <span className="evidence-scene__photo-horizon" />
          </span>
          <span className="evidence-scene__photo-caption">OBSERVATION — 02</span>
        </div>
        <div className="evidence-scene__paper evidence-scene__paper--second">
          <span className="evidence-scene__pin" />
          <span className="evidence-scene__index">CONNECTION / 03</span>
          <span className="evidence-scene__rule" />
          <span className="evidence-scene__line evidence-scene__line--short" />
        </div>
      </div>
      <span className="project-visual__foot">LOCAL FIRST <span>•</span> OFFLINE READY</span>
    </div>
  )
}
