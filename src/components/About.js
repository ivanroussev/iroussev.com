import React from 'react';
import './About.css';

// Icons from src/images
import argoIcon from '../images/Argo CD.svg';
import grafanaIcon from '../images/icons8-grafana.svg';
import jenkinsIcon from '../images/icons8-jenkins.svg';
import k8sIcon from '../images/icons8-kubernetes.svg';
import terraformIcon from '../images/icons8-terraform.svg';
import prometheusIcon from '../images/icons8-prometheus.svg';
import dockerIcon from '../images/icons8-docker.svg';
import ansibleIcon from '../images/icons8-ansible.svg';
import awsIcon from '../images/icons8-aws.svg';
import jsIcon from '../images/icons8-javascript.svg';
import pyIcon from '../images/icons8-python.svg';
import goIcon from '../images/Go-Logo_Blue.svg';
import helmIcon from '../images/helm-logo.svg';
import azureDevopsIcon from '../images/azuredevops.svg';
import linuxIcon from '../images/Linux.svg';

function About() {
  const tools = [
    { name: 'ArgoCD', icon: argoIcon },
    { name: 'Grafana', icon: grafanaIcon },
    { name: 'Jenkins', icon: jenkinsIcon },
    { name: 'Kubernetes', icon: k8sIcon },
    { name: 'Terraform', icon: terraformIcon },
    { name: 'Prometheus', icon: prometheusIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'Ansible', icon: ansibleIcon },
    { name: 'AWS', icon: awsIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'Python', icon: pyIcon },
    { name: 'Go', icon: goIcon },
    { name: 'Helm', icon: helmIcon },
    { name: 'Linux', icon: linuxIcon },
    { name: 'Azure DevOps', icon: azureDevopsIcon }
  ];

  return (
    <div className="about-section">
      <div className="about-inner">
        <div>
          <h1 className="about-heading">About Me</h1>
          <p className="about-paragraph">
            Here's a little about me, you can find me either building reliable infrastructure, automating deployments across multiple environments,implementing scalable systems and in depth observability, or breaking production on friday evening.
          </p>

          <h2 className="about-subheading">Tools & Technologies</h2>
          <div className="tools-grid" aria-hidden>
            {tools.map(tool => (
              <div key={tool.name} className="tool-item">
                {tool.icon ? (
                  <img src={tool.icon} alt={`${tool.name} icon`} className="tool-icon" />
                ) : (
                  <div className="tool-fallback" aria-hidden />
                )}
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18 }}>
            <h2 className="about-subheading">Contact</h2>
            <div className="contact-links">
              <a href="https://github.com/ivanroussev" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/ivanroussev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:ivan@example.com">Email</a>
            </div>
          </div>
        </div>

        <aside>
          <div className="sidebar-card">
            <h3 className="about-subheading">Grafana Dashboard</h3>
            <p className="about-paragraph" style={{ marginTop: 6 }}>Embed a live Grafana dashboard here or show an architecture diagram.</p>
            <div className="grafana-placeholder"><iframe src="https://grafana.iroussev.com/d-solo/adg5vv2/custom-dashboard?orgId=1&from=1763043499346&to=1763065099346&timezone=browser&panelId=panel-1&__feature.dashboardSceneSolo=true" width="450" height="200" frameborder="0"></iframe></div>
          </div>
          <div className="sidebar-card" style={{ marginTop: 12 }}>
            <h3 className="about-subheading">Certifications</h3>
            <ol className="learning-list">
              <li>AWS Cloud Practitioner</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default About;
