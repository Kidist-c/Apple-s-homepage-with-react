import React from 'react'
import iphone from "./images/home/iphone11-pro-bg.jpg"




function Iphone() {
  return (
    <div className="outer-wrapper" style={
		{backgroundImage:`url(${iphone})`,
		 height:"500px",
		 backgroundPosition:"center",
		 backgroundRepeat:"no-repeat",
		 backgroundSize:"cover",
		 textAlign:"center",
		color:"#fff"}
		 }>
        <section className="second-hightlight-wrapper" >
			<div className="internal-wrapper">
				<div className="title-wraper">
					iPhone 11 Pro 
				</div> 

				<div className="description-wrapper">
					Pro cameras. Pro display. Pro performance.
				</div>

				<div className="price-wrapper">
					From $24.95/mo. or $599 with trade‑in.
				</div>

				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>
		</section>
    </div>
  )
}

export default Iphone