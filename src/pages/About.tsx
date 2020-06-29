import React from 'react';
import { Link } from 'react-router-dom';
import MetisMenu from '@metismenu/react';

const About = () => {
  return (
    <div>
      <h4>About</h4>
      <p>How to use?</p>
      <MetisMenu toggle={false} subMenu="nav">
        <li>
          <Link to="#" className="has-arrow">Install @metismenu/react</Link>
          <nav>
            <li><pre><code>npm install @metismenu/react</code></pre></li>
          </nav>
        </li>
        
        <li>
          <Link to="#" className="has-arrow">Add @metismenu/react Component</Link>
          <nav>
            <li>
            <pre><code>import MetisMenu from '@metismenu/react';</code></pre>
            </li>
          </nav>
        </li>

        <li>
          <Link to="#" className="has-arrow">Add MetisMenu CSS</Link>
          <nav>
            <li>
            <pre><code>import 'metismenujs/dist/metismenujs.css';</code></pre>
            </li>
          </nav>
        </li>
        
        
        
        <li>
          <Link to="#" className="has-arrow">Call @metismenu/react Component</Link>
          <nav>
            <li>
            <pre><code>
            &#x3c;MetisMenu&#x20;&#x74;&#x6f;&#x67;&#x67;&#x6c;&#x65;&#x3d;&#x7b;&#x74;&#x72;&#x75;&#x65;&#x7d;&#x3e;&#xa;&#xa;&#xa; ... &#x3c;&#x2f;MetisMenu&#x3e;
            </code></pre>
            </li>
          </nav>
        </li>
          
      </MetisMenu>
    </div>
  )
}

export default About
