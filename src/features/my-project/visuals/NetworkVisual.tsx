import { Network } from 'lucide-react'

export default function NetworkVisual() {
  return (
    <div className="project-visual project-visual--network" aria-hidden="true">
      <div className="project-visual__caption">
        <span>AI / NETWORK SYSTEMS</span>
        <span>02 — MULTI-AGENT</span>
      </div>
      <div className="network-scene">
        <svg className="network-scene__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 50 50 L 21 24 M 50 50 L 79 24 M 50 50 L 21 77 M 50 50 L 79 77" />
        </svg>
        <div className="network-scene__core">
          <Network size={24} strokeWidth={1.4} />
          <span>AGENT</span>
          <strong>CORE</strong>
        </div>
        <span className="network-scene__node network-scene__node--one">LLM</span>
        <span className="network-scene__node network-scene__node--two">API</span>
        <span className="network-scene__node network-scene__node--three">GNS3</span>
        <span className="network-scene__node network-scene__node--four">DEVICES</span>
      </div>
      <span className="project-visual__foot">ORCHESTRATION <span>•</span> NETWORK AUTOMATION</span>
    </div>
  )
}
