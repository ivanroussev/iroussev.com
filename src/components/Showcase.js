import React from 'react';
import './Showcase.css';

const Showcase = () => {
  const items = [
    { id: 'grafana', title: 'Grafana', desc: 'Interactive dashboards and visualizations for observability.' },
    { id: 'jenkins', title: 'Jenkins', desc: 'CI/CD pipelines, build history and job health.' },
    { id: 'argocd', title: 'ArgoCD', desc: 'GitOps application deployments and sync status.' },
    { id: 'k8s', title: 'Kubernetes', desc: 'Cluster status, namespaces and workloads overview.' },
  ];

  return (
    <section id="showcase" className="showcase-section">
      <div className="showcase-inner">
        <h2 className="showcase-heading">Showcase</h2>
        <p className="showcase-desc">Place to showcase dashboards, pipelines and live demos (Grafana, Jenkins, ArgoCD, and more).</p>

        <div className="showcase-grid">
          {items.map(item => (
            <article key={item.id} className="showcase-card">
              <div className="showcase-card-body">
                <h3 className="showcase-card-title">{item.title}</h3>
                <p className="showcase-card-desc">{item.desc}</p>
              </div>
              <div className="showcase-card-placeholder">Placeholder</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
