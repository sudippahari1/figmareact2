import React from 'react';
import './Ellipse.css';
import ellips1 from './images/Ellipse 15.svg'
import ellips2 from './images/Ellipse 152.svg'
import ellips3 from './images/Ellipse 16.svg'
import ellips4 from './images/Ellipse 153.svg'
import ellips5 from './images/Ellipse 154.svg'
import ellips6 from './images/Ellipse 151.svg'
import vec1 from './images/Vector.svg'
import vec2 from './images/Vector2.svg'
import vec3 from './images/Vector3.svg'
import bar1 from './images/Vector 2.svg'
import bar2 from './images/Vector 3.svg'
import b1 from './images/1.svg'
import b2 from './images/2.svg'



function Ellipse() {
  return (
	<div>
		<img src={ellips1} alt="" className="ellips1" />
		<img src={ellips2} alt="" className="ellips2" />
		<img src={ellips3} alt="" className="ellips3" />
		<img src={ellips4} alt="" className="ellips4" />
		<img src={ellips5} alt="" className="ellips5" />
		<img src={ellips6} alt="" className="ellips6" />
		<img src={vec1} alt="" className="vec1" />
		<img src={vec2} alt="" className="vec2" />
		<img src={vec3} alt="" className="vec3" />
		<p className="name1">xIngest SDK</p>
		<p className="name2">xIngest SDK</p>
		<p className="name3">xIngest SDK</p>
		<img src={bar1} alt="" className="bar1" />
		<img src={bar2} alt="" className="bar2" />
		<img src={b1} alt="" className="bar3" />
		<img src={b2} alt="" className="bar4" />
		<img src={bar1} alt="" className="bar5" />
		<img src={bar2} alt="" className="bar6" />
	</div>
  )
}

export default Ellipse