import React from 'react'

const Night = () => {
  return (
    <g class="night">
					<g class="moon">
						<path d="M3 47.0028C3.00473 45.2607 3.51188 43.5573 4.46026 42.0979C5.40864 40.6385 6.75774 39.4855 8.34483 38.778C9.93192 38.0705 11.6892 37.8387 13.4047 38.1106C15.1202 38.3825 16.7206 39.1465 18.0129 40.3103C19.3051 41.4742 20.2341 42.9882 20.6877 44.6698C21.1412 46.3514 21.1 48.1287 20.5691 49.7874C20.0381 51.446 19.04 52.9151 17.6951 54.0175C16.3503 55.1198 14.7162 55.8084 12.99 56C13.7588 54.5385 13.9827 52.85 13.6217 51.2378C13.2606 49.6255 12.3381 48.1953 11.02 47.2041C9.87273 46.3321 8.48136 45.8435 7.04234 45.8073C5.60331 45.7712 4.18932 46.1894 3 47.0028Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</g>
					<g class="stars">
						<rect class="star" x="6" y="50.5858" width="2" height="2" transform="rotate(45 6 50.5858)" fill="currentColor" />
						<rect class="star" x="9.70715" y="53" width="1" height="1" transform="rotate(45 9.70715 53)" fill="currentColor" />
						<rect class="star" x="3.70715" y="55" width="1" height="1" transform="rotate(45 3.70715 55)" fill="currentColor" />
					</g>
				</g>
  )
}

export default Night