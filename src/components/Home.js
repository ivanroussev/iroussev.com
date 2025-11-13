import IvanSelfie from '../images/ivan-selfie.png'

import React, { useEffect, useState } from 'react';

function Home() {
    const [commandText, setCommandText] = useState('');
    const [yamlText, setYamlText] = useState('');
    const [showYaml, setShowYaml] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    const vimCommand = 'vim ivan-roussev.yaml';
    const yamlContent = `ivan-roussev.yaml:
  status: enabled
  description: "DevOps Engineer"
  uptime: 99.99%`;

    const totalLines = vimCommand.split('\n').length + yamlContent.split('\n').length;
    const lineHeight = 1.6 * 16;
    const boxHeight = totalLines * lineHeight + 32;


    useEffect(() => {
        let i = 0;
        const commandInterval = setInterval(() => {
            setCommandText(vimCommand.slice(0, i));
            i++;
            if (i > vimCommand.length) {
                clearInterval(commandInterval);
                setTimeout(() => setShowYaml(true), 200);
            }
        }, 100);

        return () => clearInterval(commandInterval);
    }, [vimCommand]);

    useEffect(() => {
        if (!showYaml) return;
        let i = 0;
        const yamlInterval = setInterval(() => {
            setYamlText(yamlContent.slice(0, i));
            i++;
            if (i > yamlContent.length) {
                clearInterval(yamlInterval);
                setIsTyping(false);
            }
        }, 50);

        return () => clearInterval(yamlInterval);
    }, [showYaml, yamlContent]);

    return (
        <div className="home-container">
            <div className="main-home">
                <div className="titles">
                    <h1 className="title-name">
                        Ivan <strong>Roussev</strong>
                        {/* <strong className="orange-dot">,</strong> */}
                    </h1>

                    <p className="home-desc">DevOps Engineer — Cloud Engineer</p>

                    <div className="terminal-container">
                        <pre
                            className="terminal-block"
                            style={{ minHeight: `${boxHeight}px`, overflow: 'hidden' }}
                        >
                            <span className="prompt">$</span> {commandText}
                            {showYaml && <br />}
                            {showYaml && yamlText}
                            <span className={`cursor ${!isTyping ? 'stopped' : ''}`}>|</span>
                        </pre>
                    </div>
                </div>

                <div className="ivan-picture">
                    <img className="homepage-img" src={IvanSelfie} alt="ivan-pic-homepage" />
                </div>
            </div>
        </div>
    );
}

export default Home;
