"use client";
import { useEffect, useRef } from 'react'
import anime from 'animejs'

export default function ChessKingDraw() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const paths = svgRef.current.querySelectorAll('path, line, polygon')

    // Prepare stroke-dash for draw animation
    paths.forEach(path => {
      const length = (path as SVGGeometryElement).getTotalLength?.() || 100
      path.setAttribute('stroke-dasharray', `${length}`)
      path.setAttribute('stroke-dashoffset', `${length}`)
      path.setAttribute('stroke', '#ffffff')
    })

    // Initial one-time draw + stroke color animation
    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      stroke: [
        { value: '#ffffff' },
        { value: '#999999' },
        { value: '#ffffff' }
      ],
      easing: 'easeInOutQuad',
      duration: 1500,
      delay: anime.stagger(150),
      complete: () => {
        // After draw, glow stroke color only (no redraw)
        paths.forEach(path => {
          path.removeAttribute('stroke-dasharray')
          path.removeAttribute('stroke-dashoffset')
        })

        anime({
          targets: paths,
          stroke: [
            { value: '#ffffff' },
            { value: '#dddddd' },
            { value: '#ffffff' }
          ],
          duration: 2000,
          easing: 'easeInOutSine',
          direction: 'alternate',
          loop: true
        })
      }
    })
  }, [])

  return (
    <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[full] h-[full] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
    >
        <g>
            {/* 🟡 TOP CROSS */}
            <line x1="50" y1="15" x2="50" y2="5" />
            <line x1="46" y1="9" x2="54" y2="9" />

            {/* 🟡 CROWN */}
            <polygon points="63,20 59,33 41,33 37,20 50,15" />
            <line x1="38" y1="23" x2="62" y2="23" />

            {/* 🟡 COLLAR */}
            <path d="M63,36c0,1.65-1.35,3-3,3H40c-1.65,0-3-1.35-3-3l0,0c0-1.65,1.35-3,3-3h20C61.65,33,63,34.35,63,36L63,36z" />

            {/* 🟡 TORSO */}
            <path d="M62.61,79c-0.946-6.487-3.306-10.059-3.583-40H40.973c-0.277,29.941-2.637,33.513-3.583,40H62.61z" />

            {/* 🟡 LOWER COLLAR */}
            <path d="M68,82c0,1.65-1.35,3-3,3H35c-1.65,0-3-1.35-3-3l0,0c0-1.65,1.35-3,3-3h30C66.65,79,68,80.35,68,82L68,82z" />

            {/* 🟡 BASE */}
            <path d="M73,89c0,2.2-1.8,4-4,4H31c-2.2,0-4-1.8-4-4l0,0c0-2.2,1.8-4,4-4h38C71.2,85,73,86.8,73,89L73,89z" />
        </g>
    </svg>
  )
}
