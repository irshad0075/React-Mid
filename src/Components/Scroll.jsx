import React from 'react';

function Slider() {
  return (
    <div className="container">
      <ul className="slides">
        <li id="slide1"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg" alt="" /></li>
        <li id="slide2"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg" alt="" /></li>
        <li id="slide3"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg" alt="" /></li>
        <li id="slide4"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" alt="" /></li>
        <li id="slide5"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" /></li>
      </ul>

      <ul className="thumbnails">
        <li>
          <a href="#slide1"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg" style={{height:'50'}} alt="" /></a>
        </li>
        <li>
          <a href="#slide2"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg" alt="" /></a>
        </li>
        <li>
          <a href="#slide3"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg" alt="" /></a>
        </li>
        <li>
          <a href="#slide4"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" alt="" /></a>
        </li>
        <li>
          <a href="#slide5"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" /></a>
        </li>
      </ul>
    </div>
  );
}

export default Slider;
