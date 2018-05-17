import React from 'react'
import Link from 'gatsby-link'




const Header = ({ siteTitle }) => (
  <div>
      <div className="header-wrapper">
          <div className="header-logo">

              <Link to="/">
                  <svg className="svg-logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 225.9 89.8" xmlSpace="preserve">
                      <g>
                          <g>
                              <path className="st0" d="M57.5,6.6c0,1.2-0.5,2.7-1.5,4.3c-0.8,1.5-1.8,2.6-2.8,3.1c-1,0.6-1.6,0.5-1.6-0.2c0-0.1,0.3-0.4,0.9-1
											c1.9-1.7,2.8-3.2,2.8-4.3c0-2.4-2.4-3.6-7.2-3.6c-2,0-4.7,0.4-8,1.1c-3.3,0.8-6.5,2-9.7,3.7c-3.6,2-5.4,3.7-5.4,5.2
											c0,1.2,1.1,2.3,3.3,3.4c1.2,0.6,3.5,1.5,7.1,2.8c3.5,1.3,6.4,2.5,8.6,3.5c2.2,1,4.2,2.4,6.2,4.2c1.9,1.8,2.9,3.8,2.9,6
											c0,2.2-1.3,4.6-3.9,7.2c-4,3.8-9.1,6.9-15.4,9.4c-6.3,2.5-11.7,3.8-16.3,3.8C8.5,55.2,4,52.7,4,47.6c0-5,2.7-9.3,8.2-12.8
											c4.5-3.1,9.3-4.7,14.2-4.7c1.2,0,1.7,0.2,1.6,0.6c-0.1,0.4-1,0.6-2.5,0.6c-1.6,0-3.6,0.6-6.1,1.6c-2.5,1-4.8,2.6-6.9,4.5
											c-2.8,2.5-4.2,5.1-4.2,7.6c0,1.6,0.8,3,2.3,4.2c1.5,1.2,4.4,1.9,8.7,1.9c4.3,0,8.5-0.7,12.7-2c9-3,14.7-6.3,16.9-9.8
											c0.9-1.3,1.3-2.4,1.3-3.3c0-2.6-1.6-4.6-4.7-6.1c-3.7-1.7-8.8-3.6-15.4-5.8c-2.5-0.8-4.7-2-6.5-3.3c-1.8-1.4-2.7-3-2.7-5
											c0-2,1.1-3.9,3.2-5.8c2.1-1.9,4.7-3.4,7.7-4.5c6.4-2.4,11.9-3.6,16.3-3.6C54.4,1.9,57.5,3.5,57.5,6.6z M64.5,27.8
											c1.4,0,2.3,0.4,2.5,1.3c0.1,0.5,0,1-0.2,1.5c-0.3,0.5-0.4,0.9-0.6,1.1c-0.1,0.3-0.2,0.5-0.2,0.7c-0.3,0.6-0.6,1.1-0.8,1.6
											c-3.2,6.4-4.9,10.5-5.1,12.3c-0.1,0.5-0.1,1.2-0.1,2c0,0.8,0.2,1.4,0.7,1.9c0.8,0.9,1.9,1,3.4,0.2c1.5-0.8,3.5-2.4,6.1-4.7
											c2.6-2.4,4.8-4.7,6.4-6.9c0.2-0.3,0.5-0.4,0.8-0.2c0.3,0.1,0.4,0.3,0.4,0.4s-0.1,0.3-0.2,0.5c-0.8,1.5-2.4,3.5-4.6,5.8
											c-3.6,3.9-6.6,6.3-9.1,7.2c-1.4,0.5-2.6,0.8-3.6,0.8c-2.3,0-3.8-1.1-4.5-3.2c-0.1-0.4-0.2-0.9-0.2-1.4c0-2,0.9-5,2.7-9
											c-0.3,0.6-1.4,2-3.3,4.2c-0.5,0.6-0.9,0.6-1.2,0c-0.1-0.1-0.1-0.3-0.1-0.5c0-0.2,0.1-0.4,0.3-0.7c2.8-3.4,4.9-6.4,6.5-8.7
											c-0.1-0.3-0.1-0.6,0.2-1.1c1.1-3.2,2.1-4.8,3-5C64.1,27.8,64.3,27.8,64.5,27.8z M71.2,16.6l-0.7,2.7c0,0.5-0.4,1.3-1.1,2.5
											c-0.7,1.1-1.3,1.7-1.7,1.7c-2.4,0-3.6-0.6-3.6-1.8c0-0.2,1.2-1.3,3.6-3.1l1.4-1.1c0.9-0.8,1.5-1.2,1.7-1.2
											C71.1,16.2,71.2,16.3,71.2,16.6z M86.6,29.3c0,0.4-0.3,1.3-0.9,2.6c-0.6,1.3-2.4,5.9-5.3,13.7c2-2.5,4.6-5.4,7.7-8.6
											c6.3-6.6,10.6-9.8,13-9.8c0.5,0,1,0.1,1.5,0.4c0.5,0.3,0.7,0.9,0.7,1.9c0,1-0.3,2.1-0.9,3.3c-0.6,1.2-1.3,2.7-2.1,4.5
											c-0.8,1.7-1.3,2.8-1.6,3.3c4.7-4.3,8.3-6.9,10.8-7.8c2.4-0.9,4-1.4,4.8-1.4c0.8,0,1.2,0.3,1.2,0.9c0,0.3-0.4,1.2-1.3,2.5
											c-0.8,1.3-1.8,3.2-2.8,5.8c-1,2.5-1.6,4.3-1.7,5.3c-0.1,1-0.2,1.9-0.2,2.7c0,0.8,0.2,1.4,0.7,1.9c0.8,0.9,2,1,3.5,0.2
											c1.5-0.8,3.5-2.4,6.1-4.7c2.6-2.4,4.7-4.7,6.3-6.9c0.2-0.3,0.5-0.4,0.8-0.2c0.3,0.1,0.5,0.3,0.5,0.4s-0.1,0.3-0.2,0.5
											c-0.8,1.5-2.4,3.5-4.6,5.8c-3.6,3.9-6.6,6.3-9.1,7.2c-2.7,0.9-4.6,1-5.8,0.3c-1.2-0.7-1.9-1.4-2.2-2.3c-0.3-0.8-0.4-1.7-0.4-2.5
											c0-2.7,0.5-5.3,1.6-8c1-2.7,1.9-4.5,2.5-5.4c-2.1,0.9-4,2-5.5,3.4c-2.3,2-4.2,3.8-5.6,5.3l-1.7,1.9c-0.5,1.2-1.4,1.9-2.7,2.1
											c-1.3,0.2-1.9-0.3-1.8-1.3C92,45,93,42.6,95,38.8c2-3.7,3-5.8,3-6.2c0-0.4-0.2-0.6-0.7-0.6c-1,0-2.8,1.2-5.5,3.5
											c-1.8,1.6-4.3,4.7-7.8,9.3c-3.4,4.5-5.3,7-5.8,7.2c-2,1-3.3,1.5-3.8,1.5c-0.5,0-0.8-0.1-0.8-0.3c0-0.2,0.1-0.4,0.3-0.8
											c0.2-0.3,1.9-5.2,5.2-14.7c-1.2,1.9-2.4,3.4-3.4,4.4c-0.5,0.5-0.7,0.4-0.7-0.3s0.2-1.3,0.6-1.8c2.5-3.3,4.4-6.2,5.6-8.5
											c0.3-2,1-3.1,2-3.5c0.6-0.2,1.3-0.2,2.2,0C86.2,28.3,86.6,28.7,86.6,29.3z M151.6,33.7c0,2.5-1,5-3.1,7.6c-2,2.6-4.4,4.8-7.2,6.7
											c-2.5,1.6-5.1,2.9-7.8,3.8c-2.6,0.9-4.6,1.4-5.9,1.4c-1.3,0-2.4-0.1-3.3-0.4c-1.2,2.9-3,7.7-5.2,14.5c-0.2,0.7-0.4,1.7-0.4,2.8
											c0,1.1-0.4,2.6-1,4.5c-0.7,1.9-1.3,3.4-1.9,4.5c-0.3,0.7-1.1,1.2-2.5,1.7c-1.4,0.4-2.3,0.6-2.9,0.6c-0.6,0-0.9-0.3-0.9-0.8
											c0-0.2,0.1-0.5,0.3-0.9c2.6-5.3,5.9-13.1,9.8-23.4c4-10.3,6.1-16,6.5-17.1c0.4-1.1,1-2.8,1.7-4.9c1.2-3.6,1.9-6.3,2-8.1
											c0-0.7,0.9-1,2.7-1c1.8,0,2.7,0.7,2.7,2c0,1-0.6,2.3-1.7,4c-1.1,1.7-2.7,5.2-4.9,10.3c3.3-5,5.9-8.2,8-9.7
											c2.7-2.2,5.3-3.3,7.9-3.3c1,0,2,0.2,3,0.5c2.2,0.8,3.4,2.1,3.6,3.8C151.6,32.8,151.6,33.3,151.6,33.7z M147.4,32.5
											c0-2-0.8-3-2.3-3c-0.9,0-2.4,0.5-4.4,1.6c-2,1.1-4.1,2.7-6.1,4.8c-2,2.1-3.6,4.2-4.7,6.1c-1.1,1.9-2.1,3.8-3.1,5.8
											c-1,2-1.5,3.2-1.7,3.5c3.4,0,7.2-1.5,11.4-4.5c4.1-3,7.2-6.2,9.2-9.7C146.9,35.4,147.4,33.8,147.4,32.5z M185.7,8.1
											c0.7-1.2,1-2.2,1-2.9c0-1.2-0.5-1.8-1.4-1.8c-0.8,0-1.8,0.5-3,1.4c-4.5,3.5-8.9,9-13.1,16.6c-3.4,6.1-5.9,11.3-7.5,15.7
											c3.9-2.7,8.3-7,13.1-13C179.7,18.1,183.3,12.8,185.7,8.1z M160.5,40.4c-0.7,1.9-1,3.2-1.1,3.9c-0.1,0.7-0.1,1.5-0.1,2.6
											c0,1.1,0.3,2.1,0.8,3c1,1.5,2.6,1.6,4.8,0.3c1.7-0.9,3.8-2.6,6.4-5c2.6-2.4,4.6-4.6,6-6.6c0.1-0.2,0.3-0.2,0.5-0.2
											c0.5,0,0.6,0.4,0.4,1.1c-0.8,1.5-2.4,3.5-4.7,5.8c-2.3,2.4-4.4,4.2-6.2,5.6c-1.9,1.4-3.7,2.1-5.6,2.1c-4.3,0-6.4-2.1-6.4-6.3
											c0-0.2,0-0.3,0-0.5c0.2-4,2.2-9.9,6-17.9c3.8-8,7.2-14,10.3-18.1l2.6-3.3c0.6-0.7,1.5-1.6,2.7-2.7c2.3-2.1,4.6-3.2,7-3.2
											s4,0.7,4.9,2.2c0.3,0.5,0.4,1.2,0.4,2.2s-0.4,2.3-1.3,4.1C182.2,19.7,173,30,160.5,40.4z M195.8,26.6c3,0,4.6,1.5,4.6,4.4
											c0,1.5-0.4,2.8-1.3,3.7c-1.4,2.1-3.7,3.9-6.9,5.5c-3.2,1.5-5.8,2.4-8,2.6c-0.8,0.1-1.2-0.2-1.3-0.7c-0.1-0.2,0-0.4,0.2-0.4
											c0.2-0.1,0.4-0.1,0.5-0.1c1.3-0.1,3-0.7,5-1.9c3.8-2,6.5-4.1,8.3-6.3c0.7-1,1.1-2,1.1-2.9s-0.5-1.4-1.4-1.4c-0.7,0-1.7,0.3-3,0.9
											c-2.7,1.2-5.4,3.4-8.4,6.5c-2.9,3.1-4.9,6.1-5.8,9c-0.3,0.9-0.4,1.8-0.4,2.7c0,0.9,0.4,1.7,1.1,2.5c0.7,0.8,1.9,1.2,3.4,1.2
											c1.7,0,3.6-0.5,5.8-1.4c6.4-2.6,11.3-6.5,14.7-11.8c0.3-0.5,0.6-0.5,0.9-0.3c0.2,0.1,0.3,0.3,0.3,0.4c0,0.2-0.1,0.4-0.2,0.6
											c-1.7,2.8-3.8,5.3-6.4,7.5c-5,4.3-9.9,6.4-14.7,6.4c-4.1,0-6.9-1.2-8.6-3.6c-0.6-1-0.9-2.1-0.9-3.5c0-1.4,0.4-3,1.1-4.8
											c1.4-3.2,4.4-6.5,9.1-9.9C189.4,28.3,193.1,26.6,195.8,26.6z"></path>
                              <path className="st1" d="M140.1,68.7l0.1-4.6c0-0.5-0.2-0.9-0.5-1.2c-0.3-0.3-0.6-0.5-1-0.5c-0.4,0-0.8,0.1-1.2,0.3s-0.8,0.5-1.1,0.8
											c0,1.6-0.1,2.8-0.1,3.5s0,1.6,0.1,2.5c-0.2,0-0.4,0-0.6,0c-0.5,0-0.8-0.2-0.8-0.6c0-0.1,0-0.6,0-1.5c0.1-2.7,0.1-4.9,0.1-6.7
											c0-1.8,0-3-0.1-3.7c0.2,0,0.4,0,0.6,0c0.5,0,0.8,0.2,0.8,0.6c0,0.4,0,2.1-0.1,5c0.8-0.7,1.7-1.1,2.7-1.1c1.5,0,2.3,0.9,2.3,2.6
											l-0.1,2.8c0,1,0.1,1.9,0.3,2.6c-0.2,0.1-0.5,0.1-0.7,0.1s-0.4-0.1-0.6-0.2C140.2,69.3,140.1,69,140.1,68.7z M147.2,61.5
											c0.8,0,1.4,0.2,1.9,0.7c0.5,0.4,0.7,0.9,0.7,1.4c0,0.5-0.1,0.9-0.2,1.2c-0.2,0.3-0.4,0.5-0.6,0.7c-0.3,0.2-0.6,0.3-1.1,0.4
											c-0.7,0.1-1.8,0.2-3.3,0.2c0.1,0.8,0.3,1.5,0.7,1.9c0.4,0.5,1,0.7,1.8,0.7c0.8,0,1.4-0.3,1.7-0.9c0.4,0.2,0.7,0.4,0.7,0.8
											c0,0.3-0.3,0.6-0.8,0.8c-0.5,0.2-1.1,0.3-1.7,0.3c-1.1,0-1.9-0.3-2.6-1c-0.7-0.7-1-1.7-1-3c0-1.4,0.4-2.4,1.1-3.1
											C145.3,61.8,146.1,61.5,147.2,61.5z M147.1,62.4c-0.7,0-1.3,0.2-1.7,0.7c-0.5,0.5-0.7,1.2-0.8,2.2c1.6,0,2.7-0.1,3.2-0.4
											c0.2-0.1,0.4-0.3,0.6-0.4c0.2-0.2,0.2-0.4,0.2-0.8c0-0.3-0.1-0.6-0.4-0.9C147.9,62.5,147.5,62.4,147.1,62.4z M157.2,64.2l0,2.3
											c0,1.3,0.1,2.3,0.3,2.9c-0.2,0.1-0.4,0.1-0.7,0.1c-0.3,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.6c-0.7,0.6-1.4,0.9-2.2,0.9
											c-1.7,0-2.6-0.8-2.6-2.4c0-0.6,0.1-1,0.4-1.3c0.3-0.3,0.6-0.5,1.1-0.6c0.8-0.2,1.9-0.4,3.2-0.5c0-1-0.1-1.6-0.4-2
											c-0.2-0.4-0.7-0.6-1.5-0.6c-0.3,0-0.6,0.1-1,0.3c-0.3,0.2-0.6,0.5-0.8,0.9c-0.5-0.1-0.8-0.3-0.8-0.7c0-0.4,0.3-0.8,0.8-1.1
											c0.5-0.3,1.2-0.4,2.1-0.4c0.8,0,1.5,0.2,2,0.6C157,62.5,157.2,63.2,157.2,64.2z M156.1,65.8c-0.3,0-0.6,0.1-0.7,0.1
											c-0.2,0-0.4,0-0.7,0.1c-0.3,0-0.5,0.1-0.6,0.1c-0.1,0-0.3,0.1-0.5,0.1c-0.2,0.1-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.1-0.3,0.2
											c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.5,0.1,0.9,0.4,1.1c0.3,0.2,0.7,0.4,1.1,0.4c0.8,0,1.4-0.3,1.9-0.8c0-0.2,0-0.4,0-0.9
											C156,66.8,156,66.3,156.1,65.8z M159.6,68.7l0-4.8v-2c0-2.7,0-4.3-0.1-4.9c0.2,0,0.4,0,0.6,0c0.5,0,0.8,0.2,0.8,0.6
											c0,0,0,0.3,0,0.9c-0.1,2.1-0.1,3.7-0.1,5v2.6c0,1.5,0.1,2.6,0.3,3.3c-0.2,0.1-0.4,0.1-0.7,0.1s-0.5-0.1-0.6-0.2
											C159.6,69.2,159.6,69,159.6,68.7z M163.7,62.6c0,0-0.6,0-1.6,0.1c0-0.1,0-0.3,0-0.5c0-0.2,0.1-0.4,0.2-0.4
											c0.2-0.1,0.5-0.1,0.9-0.1h0.5c0-0.8-0.1-1.4-0.1-1.9c0.2,0,0.4,0,0.6,0c0.5,0,0.8,0.2,0.8,0.6c0,0.2,0,0.6-0.1,1.3
											c1.4,0,2.4,0,2.8-0.1c0,0.1,0.1,0.2,0.1,0.4c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.1-0.7,0.1c-0.3,0-1,0-2.1,0c0,1.2,0,2.4,0,3.6
											c0,1.2,0.1,1.9,0.3,2.2c0.2,0.3,0.6,0.5,1.1,0.5c0.5,0,0.9-0.2,1.2-0.5c0.2,0.2,0.3,0.4,0.3,0.6c0,0.2-0.1,0.4-0.4,0.5
											c-0.3,0.1-0.6,0.2-1.1,0.2c-0.9,0-1.6-0.3-2-0.8c-0.4-0.5-0.6-1.3-0.6-2.4C163.7,64.4,163.7,63.1,163.7,62.6z M174.1,68.7l0.1-4.6
											c0-0.5-0.2-0.9-0.5-1.2c-0.3-0.3-0.6-0.5-1-0.5c-0.4,0-0.8,0.1-1.2,0.3c-0.5,0.2-0.8,0.5-1.1,0.8c0,1.6-0.1,2.8-0.1,3.5
											s0,1.6,0.1,2.5c-0.2,0-0.4,0-0.6,0c-0.5,0-0.8-0.2-0.8-0.6c0-0.1,0-0.6,0-1.5c0.1-2.7,0.1-4.9,0.1-6.7c0-1.8,0-3-0.1-3.7
											c0.2,0,0.4,0,0.6,0c0.5,0,0.8,0.2,0.8,0.6c0,0.4,0,2.1-0.1,5c0.8-0.7,1.7-1.1,2.7-1.1c1.5,0,2.3,0.9,2.3,2.6l-0.1,2.8
											c0,1,0.1,1.9,0.3,2.6c-0.2,0.1-0.5,0.1-0.7,0.1c-0.3,0-0.4-0.1-0.6-0.2C174.1,69.3,174.1,69,174.1,68.7z M182.9,61.5
											c0.4,0,0.6,0.2,0.6,0.7s-0.2,1.4-0.6,2.6c-0.4,1.3-0.9,2.5-1.4,3.7c-1,2.1-1.9,3.7-2.8,4.8c-0.2,0.3-0.4,0.4-0.7,0.4
											c-0.3,0-0.6-0.2-0.9-0.7c0.3-0.2,0.8-0.7,1.4-1.3c0.6-0.7,1.1-1.3,1.5-2c-0.4-1.3-0.9-2.8-1.6-4.5c-0.7-1.7-1.3-2.7-1.7-3.2
											c0.4-0.4,0.7-0.5,1-0.5c0.3,0,0.5,0.2,0.7,0.5c0.3,0.5,0.7,1.5,1.2,2.8c0.5,1.4,0.9,2.5,1.2,3.4c0.5-1.1,0.9-2.2,1.3-3.4
											c0.4-1.2,0.6-2.2,0.6-2.9c0-0.1,0-0.2,0-0.5C182.5,61.5,182.7,61.5,182.9,61.5z M194.2,68.7l0.1-4.4c0-0.6-0.2-1.1-0.5-1.4
											c-0.3-0.3-0.7-0.5-1.2-0.5c-0.8,0-1.5,0.3-2.3,0.9c0,1.5,0,2.7,0,3.6s0,1.7,0.1,2.5c-0.2,0-0.4,0-0.6,0c-0.5,0-0.8-0.2-0.8-0.6
											c0,0,0-0.5,0-1.2c0-0.8,0-1.6,0-2.3c0-1.9-0.1-3-0.3-3.6c0.2-0.1,0.4-0.1,0.6-0.1c0.5,0,0.8,0.3,0.8,0.8c0.3-0.3,0.8-0.5,1.3-0.7
											c0.5-0.2,1.1-0.3,1.7-0.3c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,1,0.6,1.8l0,3c0,1,0.1,1.9,0.3,2.6c-0.2,0.1-0.5,0.1-0.7,0.1
											c-0.3,0-0.4-0.1-0.6-0.2C194.3,69.3,194.2,69,194.2,68.7z M201.3,61.5c0.8,0,1.4,0.2,1.9,0.7c0.5,0.4,0.7,0.9,0.7,1.4
											c0,0.5-0.1,0.9-0.2,1.2c-0.2,0.3-0.4,0.5-0.6,0.7c-0.3,0.2-0.6,0.3-1.1,0.4c-0.7,0.1-1.8,0.2-3.3,0.2c0.1,0.8,0.3,1.5,0.7,1.9
											c0.4,0.5,1,0.7,1.8,0.7c0.8,0,1.4-0.3,1.7-0.9c0.4,0.2,0.7,0.4,0.7,0.8c0,0.3-0.3,0.6-0.8,0.8c-0.5,0.2-1.1,0.3-1.7,0.3
											c-1.1,0-1.9-0.3-2.6-1c-0.7-0.7-1-1.7-1-3c0-1.4,0.4-2.4,1.1-3.1C199.4,61.8,200.3,61.5,201.3,61.5z M201.2,62.4
											c-0.7,0-1.3,0.2-1.7,0.7c-0.5,0.5-0.7,1.2-0.8,2.2c1.6,0,2.7-0.1,3.2-0.4c0.2-0.1,0.4-0.3,0.6-0.4c0.2-0.2,0.2-0.4,0.2-0.8
											c0-0.3-0.1-0.6-0.4-0.9C202,62.5,201.6,62.4,201.2,62.4z M215.2,61.5c0.4,0,0.6,0.2,0.6,0.6s-0.1,1-0.3,1.8
											c-0.2,0.8-0.4,1.5-0.7,2.3c-0.7,1.8-1.4,2.9-2,3.3c-0.1,0.1-0.3,0.1-0.4,0.1c-0.2,0-0.3,0-0.5,0c-0.3-1.5-0.7-3.1-1.3-4.8
											c-0.6,2-1.3,3.4-2,4.2c-0.2,0.3-0.4,0.4-0.5,0.5c-0.1,0.1-0.3,0.1-0.4,0.1c-0.2,0-0.3,0-0.5,0c-0.2-1.3-0.6-2.8-1.2-4.4
											c-0.5-1.6-1-2.7-1.4-3.1c0.3-0.3,0.6-0.5,0.9-0.5c0.3,0,0.5,0.2,0.7,0.6c0.2,0.5,0.5,1.4,0.9,2.8c0.4,1.3,0.7,2.5,0.9,3.4
											c0.4-0.6,0.8-1.5,1.3-2.8c0.4-1.3,0.6-2.4,0.6-3.4c0-0.2,0-0.4,0-0.5c0.2-0.1,0.4-0.1,0.5-0.1c0.4,0,0.6,0.2,0.6,0.7s0,0.7,0,0.8
											c0.3,0.4,0.6,1.2,0.9,2.3c0.3,1.1,0.6,2.1,0.8,3.1c0.4-0.6,0.8-1.5,1.3-2.8c0.4-1.3,0.6-2.4,0.6-3.4c0-0.2,0-0.4,0-0.5
											C214.9,61.5,215,61.5,215.2,61.5z M221.7,63.5c-0.1-0.3-0.4-0.6-0.8-0.8c-0.4-0.2-0.8-0.3-1.2-0.3c-0.4,0-0.7,0.1-1,0.3
											c-0.3,0.2-0.4,0.5-0.4,0.9c0,0.4,0.1,0.6,0.4,0.8c0.3,0.2,0.7,0.3,1.1,0.4c0.4,0.1,0.9,0.2,1.3,0.3c0.4,0.1,0.8,0.4,1.1,0.7
											c0.3,0.3,0.5,0.8,0.5,1.3c0,0.8-0.3,1.4-0.9,1.8c-0.6,0.4-1.2,0.6-2,0.6c-0.7,0-1.4-0.1-1.9-0.4c-0.5-0.3-0.8-0.6-0.8-1
											c0-0.3,0.3-0.6,0.8-0.7c0.1,0.4,0.4,0.6,0.8,0.8c0.4,0.2,0.9,0.3,1.3,0.3c0.5,0,0.9-0.1,1.2-0.3c0.3-0.2,0.5-0.5,0.5-0.9
											c0-0.4-0.2-0.7-0.5-0.9c-0.3-0.2-0.7-0.3-1.1-0.4c-0.4-0.1-0.9-0.2-1.3-0.3c-0.4-0.1-0.8-0.4-1.1-0.7c-0.3-0.4-0.4-0.9-0.4-1.5
											c0-0.6,0.3-1.2,0.9-1.6c0.6-0.4,1.2-0.6,1.8-0.6c0.6,0,1.2,0.1,1.7,0.4c0.5,0.2,0.8,0.5,0.8,0.9C222.4,63.1,222.2,63.4,221.7,63.5
											z"></path>
                              <path className="st2" d="M122.9,75.7c-1.9-1.1-4.7-1.7-8.7-1.7c-0.9,0-1.8,0-2.7,0.1c-1.9,0.1-3.7,0.4-5.5,0.8c-2.7,0.6-5.4,1.2-8.2,2
											c-1.6-1.3-2.7-2.7-3.2-4.2c-0.2-0.4-0.4-0.6-0.6-0.6c-0.2,0-0.3,0.2-0.2,0.7c0.4,0.9,0.8,1.7,1.3,2.4c0.5,0.7,1.1,1.3,1.8,2
											c-4.1,1.2-8.2,2.3-12.5,3.5c-4.2,1.2-8.7,1.7-13.4,1.7c-0.8,0-2,0-3.7-0.2c-0.1,0-0.3,0-0.5,0c-1.9-0.2-3.8-0.6-5.8-1.3
											c-2-0.7-3.8-1.7-5.4-3c-1.7-1.3-2.8-3.2-3.4-5.6c0.8,0.2,1.7,0.5,2.7,0.7c0.9,0.2,1.8,0.3,2.6,0.3c0.9,0,2-0.3,3.5-1
											c1.4-0.7,2.3-1.7,2.7-3c0.4,0.5,1.3,1.2,2.7,2c0.3,0.2,0.6,0.3,0.9,0.5c1.4,0.5,3.2,0.8,5.4,0.8c1,0,2.1-0.1,3.3-0.3
											c1.3-0.2,2.4-0.6,3.5-1.1c1.1-0.5,2.1-1.2,2.9-2c0.8-0.8,1.2-2,1.2-3.4c0-2-0.5-3.6-1.5-4.8c-1.1-1.2-2.3-2.1-3.9-2.7
											c-1.5-0.6-3.2-0.9-4.8-1.1c-1.7-0.1-3.1-0.2-4.4-0.2c-0.6,0-1.2,0-1.8,0.1c-1.2,0.1-2.5,0.3-3.9,0.7c-2.1,0.5-4.2,1.3-6.1,2.4
											c-2,1.1-3.5,2.6-4.8,4.4c-1.3,1.8-1.8,3.9-1.5,6.4c-1.3-0.6-2.8-1.2-4.6-1.9c-1.9-0.7-3.8-1.3-5.7-2c-2-0.6-4-1.1-6-1.5
											c-2-0.4-3.8-0.7-5.3-0.7c-4.5,0-8.2,0.9-11.2,2.7c-3,1.8-4.5,4.3-4.5,7.5c0,1.5,0.5,2.8,1.4,4c1,1.2,2.2,2.2,3.8,3.1
											c1.5,0.9,3.4,1.5,5.5,2c2.1,0.4,4.4,0.7,6.7,0.7c2.9,0,5.5-0.6,7.7-1.9c2.2-1.3,3.5-2.5,3.9-3.7c0.2-0.4,0.2-0.7,0-0.7
											c-0.1-0.1-0.3,0-0.5,0.1c-0.6,1.5-1.9,2.9-4,3.9c-2.1,1-4.5,1.5-7.1,1.5c-2.2,0-4.3-0.2-6.3-0.7c-2-0.5-3.7-1.2-5.2-2
											c-1.5-0.8-2.7-1.8-3.6-2.8c-0.8-1.1-1.3-2.2-1.3-3.3c0-1.6,0.5-2.9,1.4-4c0.9-1.1,2-2,3.5-2.6c1.4-0.7,2.9-1.2,4.5-1.4
											c1.6-0.3,3.2-0.4,4.6-0.4c2,0,4,0.1,6.1,0.5c2.1,0.3,4.2,0.7,6.2,1.3c2,0.6,4,1.2,5.7,1.9c1.8,0.7,3.3,1.3,4.4,1.9
											c0.6,2.6,1.7,4.8,3.3,6.4c1.6,1.6,3.4,2.8,5.5,3.7c2,0.9,4,1.4,6.1,1.8c0.4,0,0.8,0.1,1.2,0.1c1.6,0.2,2.9,0.3,4,0.3
											c2,0,4.1-0.2,6.3-0.6c2.2-0.4,4.5-0.9,6.8-1.5c2.3-0.7,4.6-1.3,7-2c2.3-0.7,4.6-1.4,6.7-2.1c1.4,1.2,3,2.1,4.7,2.8
											c1.7,0.7,3.4,1.3,5,1.7c1.3,0.3,2.5,0.6,3.6,0.7c0.3,0,0.6,0,0.9,0.1c1.3,0.1,2.4,0.2,3,0.2c1,0,2.1-0.1,3.3-0.2
											c1.2-0.2,2.2-0.5,3.3-0.8c1-0.4,1.9-0.8,2.6-1.4c0.7-0.6,1-1.3,1-2.1C125.6,77.9,124.7,76.8,122.9,75.7z M52,68.9
											c0-1.6,0.5-3,1.5-4.4c1-1.3,2.3-2.5,3.9-3.5c1.6-1,3.4-1.8,5.4-2.4c1.5-0.4,3.1-0.7,4.6-0.8c0.6,0,1.1,0,1.7,0
											c3.9,0,7.3,0.6,9.8,1.9c2.6,1.2,3.9,3.3,3.9,6.1c0,1-0.3,1.8-0.9,2.6c-0.6,0.7-1.4,1.2-2.4,1.6c-1,0.4-2.1,0.7-3.4,0.8
											c-1.2,0.1-2.4,0.2-3.6,0.2c-2.3,0-3.9-0.1-5.1-0.5c-0.2,0-0.3-0.1-0.5-0.1c-1.1-0.4-2-1-2.7-1.6c-0.1-1.2-0.5-1.6-1.1-1.3
											c-0.5,0.2-0.6,0.8-0.2,1.7c-0.3,0.7-0.7,1.3-1.3,1.8c-0.5,0.5-1.1,0.8-1.7,1c-0.6,0.2-1.1,0.3-1.6,0.4c-0.5,0-0.8,0.1-1.1,0.1
											c-0.5,0-1.2-0.1-2-0.2c-0.8-0.1-1.8-0.4-2.9-0.8c-0.1-0.2-0.2-0.6-0.2-1V68.9z M121.2,81.4c-1.7,0.7-3.8,1.1-6.2,1.1
											c-1.1,0-2.3-0.1-3.4-0.2c-1.6-0.2-3.2-0.6-4.8-1c-2.9-0.8-5.4-2-7.5-3.3c2.6-0.8,5-1.5,7.2-2.1c1.9-0.5,3.6-0.7,5.1-0.8h0.7
											c4,0,6.9,0.4,8.7,1.2c1.9,0.8,2.8,1.9,2.8,3C123.8,79.9,122.9,80.7,121.2,81.4z"></path>
                          </g>
                      </g>
                  </svg>
              </Link>

		  </div>
          <div className="header-banner">
              <div className="widget">
                  <Link to="/"><img style={{marginBottom: '0px'}} src="https://d33wubrfki0l68.cloudfront.net/58eecde9cee7b337121cdaeda31b14474956dfb5/a3c50/img/728x90.png"/></Link>

              </div>
		  </div>
      </div>
  </div>
)

export default Header