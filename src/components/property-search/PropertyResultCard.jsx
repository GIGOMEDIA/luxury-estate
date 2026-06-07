import React from 'react'

const PropertyResultCard = ({ image, featured, amount, title, address, beds, baths, area }) => {
  return (
    <article className="bg-white rounded-2xl shadow-[0_10px_28px_rgba(15,38,84,0.08)] overflow-hidden border border-[#E8EEF7]">
      <div className="relative h-56 sm:h-64">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

        <div className="absolute top-3 right-3 flex items-center gap-2">
          <button className="size-8 rounded-full bg-white/95 text-[#002045] shadow-sm flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 12.4L5.98 11.472C2.36 8.192 0 6.056 0 3.44C0 1.304 1.694 0 3.824 0C5.018 0 6.164 0.556 7 1.432C7.836 0.556 8.982 0 10.176 0C12.306 0 14 1.304 14 3.44C14 6.056 11.64 8.192 8.02 11.48L7 12.4Z" fill="#002045" />
            </svg>
          </button>
          <button className="size-8 rounded-full bg-white/95 text-[#002045] shadow-sm flex items-center justify-center">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 0C8.744 0 9.75 1.006 9.75 2.25C9.75 3.494 8.744 4.5 7.5 4.5C6.256 4.5 5.25 3.494 5.25 2.25C5.25 1.006 6.256 0 7.5 0ZM2.25 5.25C3.494 5.25 4.5 6.256 4.5 7.5C4.5 8.744 3.494 9.75 2.25 9.75C1.006 9.75 0 8.744 0 7.5C0 6.256 1.006 5.25 2.25 5.25ZM12.75 5.25C13.994 5.25 15 6.256 15 7.5C15 8.744 13.994 9.75 12.75 9.75C11.506 9.75 10.5 8.744 10.5 7.5C10.5 6.256 11.506 5.25 12.75 5.25ZM7.5 10.5C8.744 10.5 9.75 11.506 9.75 12.75C9.75 13.994 8.744 15 7.5 15C6.256 15 5.25 13.994 5.25 12.75C5.25 11.506 6.256 10.5 7.5 10.5Z" fill="#002045" />
            </svg>
          </button>
        </div>

        {featured && (
          <div className="absolute left-0 bottom-0 bg-[#002045] text-white text-[11px] font-semibold tracking-[0.22em] px-4 py-2 rounded-tr-xl">
            FEATURED
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-2xl font-bold text-[#002045] leading-none">{amount}</p>
            <h3 className="mt-2 text-lg font-medium text-[#002045]">{title}</h3>
            <p className="mt-1 text-sm text-[#697082]">{address}</p>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#697082] pt-1">
            <span className="inline-flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 10.5V8.75C1 8.25 1.16 7.82 1.48 7.48C1.8 7.14 2.22 6.94 2.75 6.88V5.25C2.75 4.56 3.3 4 4 4H5.25C5.62 4 5.96 4.13 6.25 4.36C6.54 4.13 6.88 4 7.25 4H8.5C9.2 4 9.75 4.56 9.75 5.25V6.88C10.28 6.94 10.7 7.14 11.02 7.48C11.34 7.82 11.5 8.25 11.5 8.75V10.5H10.25V9.5H2.25V10.5H1ZM5.5 6.75H8.5V5.25H7.25V5.75H6.75V5.25H5.5V6.75Z" fill="#697082" /></svg>
              {beds}
            </span>
            <span className="inline-flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5C4 4.45 4.45 4 5 4C5.55 4 6 4.45 6 5C6 5.55 5.55 6 5 6C4.45 6 4 5.55 4 5ZM1 13C1 12.86 1.04 12.74 1.12 12.63C1.2 12.52 1.31 12.44 1.45 12.39V8.9H2.25V8.45C2.25 8.06 2.39 7.73 2.67 7.45C2.95 7.17 3.28 7.03 3.67 7.03C3.87 7.03 4.05 7.07 4.22 7.15C4.39 7.23 4.54 7.34 4.67 7.48L5.42 8.23C5.56 8.37 5.67 8.49 5.74 8.58C5.82 8.67 5.91 8.74 6.02 8.8H10.08V4.48C10.08 4.33 10.03 4.21 9.93 4.11C9.83 4.01 9.71 3.96 9.56 3.96C9.5 3.96 9.44 3.97 9.39 4C9.34 4.02 9.29 4.06 9.25 4.11L8.61 4.75C8.65 4.89 8.66 5.03 8.64 5.17C8.61 5.31 8.56 5.43 8.48 5.54L7.1 4.16C7.22 4.08 7.34 4.03 7.48 4C7.61 3.98 7.74 3.99 7.87 4.03L8.51 3.39C8.64 3.26 8.8 3.16 8.97 3.09C9.14 3.02 9.32 2.98 9.51 2.98C9.91 2.98 10.25 3.12 10.53 3.4C10.81 3.68 10.95 4.02 10.95 4.42V8.96H11.75V12.45C11.75 12.84 11.61 13.17 11.33 13.45C11.05 13.73 10.72 13.87 10.33 13.87C10.33 14 10.29 14.12 10.22 14.23C10.14 14.34 10.03 14.42 9.9 14.47H1Z" fill="#697082" /></svg>
              {baths}
            </span>
            <span className="inline-flex items-center gap-1">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.67 13C1.31 13 1.01 12.88 0.76 12.63C0.51 12.38 0.39 12.08 0.39 11.72V0.85C0.39 0.54 0.52 0.33 0.78 0.21C1.04 0.09 1.27 0.12 1.47 0.32L2.83 1.68L2.04 2.47L2.45 2.88L3.24 2.09L4.73 3.58L3.94 4.37L4.35 4.78L5.14 3.99L6.63 5.48L5.84 6.27L6.25 6.68L7.04 5.89L8.53 7.38L7.74 8.17L8.15 8.58L8.94 7.79L10.31 9.16C10.5 9.35 10.53 9.58 10.41 9.84C10.29 10.1 10.08 10.23 9.77 10.23H1.67V13Z" fill="#697082" /></svg>
              {area}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PropertyResultCard